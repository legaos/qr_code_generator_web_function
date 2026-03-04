from cloudflare.worker import Response
import qrcode
import base64
from io import BytesIO

async def on_request(request):

    params = request.query
    texto = params.get("texto", "")

    if not texto:
        return Response.json({"ok": False, "erro": "Texto vazio"})

    # Gerar QR
    qr = qrcode.make(texto)
    buf = BytesIO()
    qr.save(buf, format="PNG")
    img_bytes = buf.getvalue()
    b64 = base64.b64encode(img_bytes).decode()

    return Response.json({
        "ok": True,
        "qr_base64": b64
    })