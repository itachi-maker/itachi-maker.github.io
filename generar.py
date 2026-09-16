import json
import os

print("[*] Generando base de datos neural masiva de 50MB...")
massive_data = {
    "version": "F7.POETA-505-SUPREME",
    "database": [{"id": i, "device": f"Model_X_{i}", "coefficients": [199, 195, 200, 180]} for i in range(350000)]
}

with open("database_massive.json", "w") as f:
    json.dump(massive_data, f)

size_mb = os.path.getsize("database_massive.json") / (1024 * 1024)
print(f"[*] Archivo creado con éxito. Tamaño actual: {size_mb:.2f} MB")
