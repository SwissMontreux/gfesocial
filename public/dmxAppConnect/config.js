dmx.config({
  "index": {
    "flow1": [
      {
        "name": "sc",
        "type": "object",
        "sub": [
          {
            "name": "data",
            "type": "object",
            "sub": [
              {
                "name": "redirect",
                "type": "text"
              }
            ]
          },
          {
            "name": "state",
            "type": "object",
            "sub": [
              {
                "name": "executing",
                "type": "boolean"
              },
              {
                "name": "uploading",
                "type": "boolean"
              },
              {
                "name": "processing",
                "type": "boolean"
              },
              {
                "name": "downloading",
                "type": "boolean"
              }
            ]
          },
          {
            "name": "uploadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "downloadProgress",
            "type": "object",
            "sub": [
              {
                "name": "position",
                "type": "number"
              },
              {
                "name": "total",
                "type": "number"
              },
              {
                "name": "percent",
                "type": "number"
              }
            ]
          },
          {
            "name": "lastError",
            "type": "object",
            "sub": [
              {
                "name": "status",
                "type": "number"
              },
              {
                "name": "message",
                "type": "text"
              },
              {
                "name": "response",
                "type": "text"
              }
            ]
          },
          {
            "name": "status",
            "type": "number"
          }
        ]
      }
    ]
  }
});
