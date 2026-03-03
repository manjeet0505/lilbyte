Add-Type -AssemblyName System.Drawing
$bg = [System.Drawing.ColorTranslator]::FromHtml("#05070E")
$bmp = New-Object System.Drawing.Bitmap(1284, 2778)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear($bg)
$d = [System.Drawing.Image]::FromFile("D:\lilbyte\app\assets\dinosaur-logo.png")
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($d, 442, 1189, 400, 400)
$g.Dispose()
$d.Dispose()
$bmp.Save("D:\lilbyte\app\assets\splash.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Splash created successfully"
