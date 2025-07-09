import jwt
from werkzeug.exceptions import Unauthorized

from configs import dify_config


class PassportService:
    def __init__(self):
        self.sk = dify_config.SECRET_KEY

    def issue(self, payload):
        # 移除exp字段使token永不过期
        if 'exp' in payload:
            del payload['exp']
        return jwt.encode(payload, self.sk, algorithm="HS256")

    def verify(self, token):
        try:
            return jwt.decode(token, self.sk, algorithms=["HS256"])
        except jwt.exceptions.InvalidSignatureError:
            print(f"Invalid token signature.")
            raise Unauthorized("Invalid token signature.")
        except jwt.exceptions.DecodeError:
            print(f"Invalid token.")
            raise Unauthorized("Invalid token.")
        except jwt.exceptions.ExpiredSignatureError:
            print(f"Token has expired.")
            raise Unauthorized("Token has expired.")
