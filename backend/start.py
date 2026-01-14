#!/usr/bin/env python3
import os
import subprocess
import sys

port = os.environ.get('PORT', '8000')
print(f"Starting server on port {port}")

subprocess.run([
    'uvicorn', 'app.main:app',
    '--host', '0.0.0.0',
    '--port', port
])
