#!/bin/sh
cd "$(dirname "$0")"
echo "HackFlow: http://localhost:8000"
echo "Откройте на телефоне http://IP-КОМПЬЮТЕРА:8000, подключённом к той же Wi-Fi сети."
python3 -m http.server 8000 --bind 0.0.0.0
