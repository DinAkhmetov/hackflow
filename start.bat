@echo off
setlocal
cd /d "%~dp0"

where python >nul 2>nul
if errorlevel 1 (
  echo Python 3 не найден. Установите Python и добавьте его в PATH.
  pause
  exit /b 1
)

for /f %%P in ('powershell -NoProfile -Command "$listener = $null; for ($port = 8000; $port -le 8010; $port++) { $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Any, $port); try { $listener.Start(); $listener.Stop(); Write-Output $port; exit 0 } catch { if ($listener) { try { $listener.Stop() } catch {} } } }; exit 1"') do set "PORT=%%P"
if not defined PORT (
  echo Не удалось найти свободный порт в диапазоне 8000-8010.
  pause
  exit /b 1
)

echo HackFlow: http://localhost:%PORT%/index.html
echo Адреса для других устройств в той же Wi-Fi сети:
for /f "tokens=2 delims=:" %%A in ('ipconfig ^| findstr /i "IPv4"') do (
  for /f "tokens=* delims= " %%B in ("%%A") do echo   http://%%B:%PORT%/index.html
)
echo Если страница недоступна с телефона, разрешите Python доступ через брандмауэр Windows в частной сети.
start "" "http://localhost:%PORT%/index.html"
python -m http.server %PORT% --bind 0.0.0.0
