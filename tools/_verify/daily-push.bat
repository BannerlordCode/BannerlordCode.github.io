@echo off
REM Daily push for the release line. ONLY pushes -- never add, commit, force or rebase.
REM If the remote has diverged, git push fails and the reason is logged; a human merges.
REM Installed by lead-21 as schtasks task "BannerlordCode-DailyPush".
cd /d C:\WorkSpace\Bannerlord\BannerlordCode.github.io
echo ===== %DATE% %TIME% =====
git fetch origin
git push origin main
echo exit=%ERRORLEVEL%
