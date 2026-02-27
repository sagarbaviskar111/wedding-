# Script to add "Create Your Own Invitation" button to all template files
# This script adds the button after the Back button in each template

$templateFiles = @(
    "FloralTemplate.tsx",
    "GoldenLuxeTemplate.tsx",
    "GujaratiGarbaTemplate.tsx",
    "LoveStoryMotionTemplate.tsx",
    "ModernTemplate.tsx",
    "PaithaniTemplate.tsx",
    "RoyalRajwadaTemplate.tsx",
    "TempleVowsTemplate.tsx"
)

$buttonCode = @"

            {/* Create Your Own Invitation Button */}
            <div className="fixed top-6 right-6 z-50">
                <Link 
                    href="/#templates" 
                    className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-600 to-purple-600 text-white rounded-full backdrop-blur-md shadow-2xl hover:brightness-110 transition-all font-semibold"
                >
                    Create Your Own Invitation
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>
"@

$basePath = "e:\shadi\wedding-\frontend\src\components\templates"

foreach ($file in $templateFiles) {
    $filePath = Join-Path $basePath $file
    
    if (Test-Path $filePath) {
        Write-Host "Processing $file..." -ForegroundColor Cyan
        
        $content = Get-Content $filePath -Raw
        
        # Check if button already exists
        if ($content -match "Create Your Own Invitation") {
            Write-Host "  ✓ Button already exists in $file" -ForegroundColor Green
            continue
        }
        
        # Find the pattern: </div> followed by a comment or section
        # We'll add the button after the Back button's closing </div>
        
        # Pattern to find: Back button's closing </div> followed by whitespace and then a comment or section
        $pattern = '(</Link>\s*</div>)\s*(\r?\n\s*{/\* ---|\r?\n\s*<section)'
        
        if ($content -match $pattern) {
            $replacement = "`$1$buttonCode`$2"
            $newContent = $content -replace $pattern, $replacement
            
            Set-Content -Path $filePath -Value $newContent -NoNewline
            Write-Host "  ✓ Added button to $file" -ForegroundColor Green
        } else {
            Write-Host "  ✗ Could not find insertion point in $file" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ✗ File not found: $file" -ForegroundColor Red
    }
}

Write-Host "`nDone! All templates have been updated." -ForegroundColor Green
