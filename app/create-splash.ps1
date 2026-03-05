Add-Type -AssemblyName System.Drawing
$bg = [System.Drawing.ColorTranslator]::FromHtml("#05070E")
$bmp = New-Object System.Drawing.Bitmap(1284, 2778)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear($bg)
$d = [System.Drawing.Image]::FromFile("$PSScriptRoot\assets\dinosaur-logo.png")
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$logoSize = 600
$x = [int]((1284 - $logoSize) / 2)
$y = [int]((2778 - $logoSize) / 2)
$g.DrawImage($d, $x, $y, $logoSize, $logoSize)
$g.Dispose()
$d.Dispose()
$bmp.Save("$PSScriptRoot\assets\splash.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Splash created successfully"
