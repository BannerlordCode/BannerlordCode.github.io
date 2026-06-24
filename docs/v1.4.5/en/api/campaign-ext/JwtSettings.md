<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `JwtSettings`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# JwtSettings

**Namespace:** Jose
**Module:** Jose
**Type:** `public class JwtSettings`
**Base:** none
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/JwtSettings.cs`

## Overview

`JwtSettings` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `JsonMapper` | `public IJsonMapper JsonMapper { get; set; }` |

## Key Methods

### RegisterJwa
`public JwtSettings RegisterJwa(JweAlgorithm alg, IKeyManagement impl)`

**Purpose:** Handles logic related to `register jwa`.

### RegisterJwaAlias
`public JwtSettings RegisterJwaAlias(string alias, JweAlgorithm alg)`

**Purpose:** Handles logic related to `register jwa alias`.

### RegisterJwe
`public JwtSettings RegisterJwe(JweEncryption alg, IJweAlgorithm impl)`

**Purpose:** Handles logic related to `register jwe`.

### RegisterJweAlias
`public JwtSettings RegisterJweAlias(string alias, JweEncryption alg)`

**Purpose:** Handles logic related to `register jwe alias`.

### RegisterCompression
`public JwtSettings RegisterCompression(JweCompression alg, ICompression impl)`

**Purpose:** Handles logic related to `register compression`.

### RegisterCompressionAlias
`public JwtSettings RegisterCompressionAlias(string alias, JweCompression alg)`

**Purpose:** Handles logic related to `register compression alias`.

### RegisterJws
`public JwtSettings RegisterJws(JwsAlgorithm alg, IJwsAlgorithm impl)`

**Purpose:** Handles logic related to `register jws`.

### RegisterJwsAlias
`public JwtSettings RegisterJwsAlias(string alias, JwsAlgorithm alg)`

**Purpose:** Handles logic related to `register jws alias`.

### RegisterMapper
`public JwtSettings RegisterMapper(IJsonMapper mapper)`

**Purpose:** Handles logic related to `register mapper`.

### Jws
`public IJwsAlgorithm Jws(JwsAlgorithm alg)`

**Purpose:** Handles logic related to `jws`.

### JwsHeaderValue
`public string JwsHeaderValue(JwsAlgorithm algorithm)`

**Purpose:** Handles logic related to `jws header value`.

### JwsAlgorithmFromHeader
`public JwsAlgorithm JwsAlgorithmFromHeader(string headerValue)`

**Purpose:** Handles logic related to `jws algorithm from header`.

### Jwe
`public IJweAlgorithm Jwe(JweEncryption alg)`

**Purpose:** Handles logic related to `jwe`.

### JweHeaderValue
`public string JweHeaderValue(JweEncryption algorithm)`

**Purpose:** Handles logic related to `jwe header value`.

### JweAlgorithmFromHeader
`public JweEncryption JweAlgorithmFromHeader(string headerValue)`

**Purpose:** Handles logic related to `jwe algorithm from header`.

### Jwa
`public IKeyManagement Jwa(JweAlgorithm alg)`

**Purpose:** Handles logic related to `jwa`.

### JwaHeaderValue
`public string JwaHeaderValue(JweAlgorithm alg)`

**Purpose:** Handles logic related to `jwa header value`.

### JwaAlgorithmFromHeader
`public JweAlgorithm JwaAlgorithmFromHeader(string headerValue)`

**Purpose:** Handles logic related to `jwa algorithm from header`.

### Compression
`public ICompression Compression(JweCompression alg)`

**Purpose:** Handles logic related to `compression`.

### Compression
`public ICompression Compression(string alg)`

**Purpose:** Handles logic related to `compression`.

### CompressionHeader
`public string CompressionHeader(JweCompression value)`

**Purpose:** Handles logic related to `compression header`.

### CompressionAlgFromHeader
`public JweCompression CompressionAlgFromHeader(string header)`

**Purpose:** Handles logic related to `compression alg from header`.

## Usage Example

```csharp
var value = new JwtSettings();
value.RegisterJwa(alg, impl);
```

## See Also

- [Complete Class Catalog](../catalog)