---
title: "JWT"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JWT`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JWT

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class JWT`
**Area:** campaign-ext

## Overview

`JWT` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `JsonMapper` | `public static IJsonMapper JsonMapper { get; set; }` |

## Key Methods

### Headers
`public static IDictionary<string, object> Headers(string token, JwtSettings settings = null)`

**Purpose:** Handles logic related to `headers`.

### Payload
`public static string Payload(string token, bool b64 = true)`

**Purpose:** Handles logic related to `payload`.

### PayloadBytes
`public static byte PayloadBytes(string token, bool b64 = true)`

**Purpose:** Handles logic related to `payload bytes`.

### Encode
`public static string Encode(object payload, object key, JweAlgorithm alg, JweEncryption enc, JweCompression? compression = null, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null)`

**Purpose:** Handles logic related to `encode`.

### Encode
`public static string Encode(string payload, object key, JweAlgorithm alg, JweEncryption enc, JweCompression? compression = null, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null)`

**Purpose:** Handles logic related to `encode`.

### EncodeBytes
`public static string EncodeBytes(byte payload, object key, JweAlgorithm alg, JweEncryption enc, JweCompression? compression = null, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null)`

**Purpose:** Handles logic related to `encode bytes`.

### Encode
`public static string Encode(object payload, object key, JwsAlgorithm algorithm, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null, JwtOptions options = null)`

**Purpose:** Handles logic related to `encode`.

### Encode
`public static string Encode(string payload, object key, JwsAlgorithm algorithm, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null, JwtOptions options = null)`

**Purpose:** Handles logic related to `encode`.

### EncodeBytes
`public static string EncodeBytes(byte payload, object key, JwsAlgorithm algorithm, IDictionary<string, object> extraHeaders = null, JwtSettings settings = null, JwtOptions options = null)`

**Purpose:** Handles logic related to `encode bytes`.

### Decode
`public static string Decode(string token, object key, JweAlgorithm alg, JweEncryption enc, JwtSettings settings = null)`

**Purpose:** Handles logic related to `decode`.

### DecodeBytes
`public static byte DecodeBytes(string token, object key, JweAlgorithm alg, JweEncryption enc, JwtSettings settings = null)`

**Purpose:** Handles logic related to `decode bytes`.

### Decode
`public static string Decode(string token, object key, JwsAlgorithm alg, JwtSettings settings = null, string payload = null)`

**Purpose:** Handles logic related to `decode`.

### DecodeBytes
`public static byte DecodeBytes(string token, object key, JwsAlgorithm alg, JwtSettings settings = null, byte payload = null)`

**Purpose:** Handles logic related to `decode bytes`.

### Decode
`public static string Decode(string token, object key = null, JwtSettings settings = null, string payload = null)`

**Purpose:** Handles logic related to `decode`.

### DecodeBytes
`public static byte DecodeBytes(string token, object key = null, JwtSettings settings = null, byte payload = null)`

**Purpose:** Handles logic related to `decode bytes`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
JWT.Headers("example", null);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
