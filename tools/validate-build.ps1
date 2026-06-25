# Run a full Zola build with timing + peak-memory measurement and save evidence.
param(
  [string]$EvidenceDir = (Join-Path (Join-Path (Join-Path $PSScriptRoot '..') '.omo') 'evidence'),
  [string]$EvidenceFile = 'task-6-bannerlord-main-zola-migration.txt'
)
$ErrorActionPreference = 'Stop'
$repoRoot = Resolve-Path (Join-Path $PSScriptRoot '..')
$publicDir = Join-Path $repoRoot 'public'
if (Test-Path $publicDir) { Remove-Item -LiteralPath $publicDir -Recurse -Force }
New-Item -ItemType Directory -Path $EvidenceDir -Force | Out-Null
$evidencePath = Join-Path $EvidenceDir $EvidenceFile

$peakFile = Join-Path $env:TEMP ('zola-peak-' + [Guid]::NewGuid().ToString() + '.txt')
$measurePath = Join-Path $env:TEMP ('measure-memory-' + [Guid]::NewGuid().ToString() + '.ps1')
$measureContent = @"
param([string]`$PeakFile)
`$peak = 0L
while (`$true) {
  Start-Sleep -Milliseconds 100
  `$procs = Get-Process -Name 'zola' -ErrorAction SilentlyContinue
  if (-not `$procs) { break }
  foreach (`$p in `$procs) {
    try { if (`$p.PeakWorkingSet64 -gt `$peak) { `$peak = `$p.PeakWorkingSet64 } } catch {}
  }
}
"peak_MB=`$([math]::Round(`$peak/1MB,2))" | Set-Content -LiteralPath `$PeakFile -Encoding UTF8
"@
$measureContent | Set-Content -LiteralPath $measurePath -Encoding UTF8

$stdoutPath = Join-Path $repoRoot 'zola-build.stdout'
$stderrPath = Join-Path $repoRoot 'zola-build.stderr'

$stopwatch = [System.Diagnostics.Stopwatch]::StartNew()
$measureProc = Start-Process -FilePath 'powershell' -ArgumentList '-NoProfile','-ExecutionPolicy','Bypass','-File',$measurePath,'-PeakFile',$peakFile -WindowStyle Hidden -PassThru
$buildProc = Start-Process -FilePath 'zola' -ArgumentList 'build' -WorkingDirectory $repoRoot -RedirectStandardOutput $stdoutPath -RedirectStandardError $stderrPath -Wait -PassThru
$stopwatch.Stop()

$timeout = [TimeSpan]::FromSeconds(15)
if (-not $measureProc.WaitForExit($timeout.TotalMilliseconds)) { $measureProc.Kill() }

$stdout = if (Test-Path $stdoutPath) { Get-Content -LiteralPath $stdoutPath -Raw } else { '' }
$stderr = if (Test-Path $stderrPath) { Get-Content -LiteralPath $stderrPath -Raw } else { '' }
$peakMb = if (Test-Path $peakFile) { (Get-Content -LiteralPath $peakFile -Raw).Trim() -replace '^peak_MB=','' } else { 'NA' }

Remove-Item -LiteralPath $measurePath -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $peakFile -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $stdoutPath -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $stderrPath -ErrorAction SilentlyContinue

$saveSystemDir = Join-Path $repoRoot 'public\v1.3.15\en\api\save-system'
$caseOk = $false
if (Test-Path $saveSystemDir) {
  $caseOk = $null -ne (Get-ChildItem -LiteralPath $saveSystemDir -Directory | Where-Object { $_.Name -ceq 'SaveManager' })
}

$report = @()
$report += "Zola build validation"
$report += "======================"
$report += "Exit code: $($buildProc.ExitCode)"
$report += "Duration (s): $($stopwatch.Elapsed.TotalSeconds.ToString('0.00'))"
$report += "Peak working set (MB): $peakMb"
$report += "Case-preserved route /v1.3.15/en/api/save-system/SaveManager/: $caseOk"
$report += ""
$report += "--- STDOUT ---"
$report += $stdout
$report += ""
$report += "--- STDERR ---"
$report += $stderr
$report += ""
if ($buildProc.ExitCode -ne 0) { $report += "BUILD FAILED"; } else { $report += "BUILD OK"; }
$report | Set-Content -LiteralPath $evidencePath -Encoding UTF8

if ($buildProc.ExitCode -ne 0) { Write-Host "BUILD FAILED"; exit 1 }
Write-Host "BUILD OK in $($stopwatch.Elapsed.TotalSeconds.ToString('0.00'))s, peak ${peakMb}MB, case-preserved route=${caseOk}"
Write-Host "Evidence saved to $evidencePath"
