<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AesCbcHmacEncryption`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AesCbcHmacEncryption

**Namespace:** Jose
**Module:** Jose
**Type:** `public class AesCbcHmacEncryption : IJweAlgorithm`
**Base:** `IJweAlgorithm`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/AesCbcHmacEncryption.cs`

## Overview

`AesCbcHmacEncryption` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Encrypt
`public byte Encrypt(byte aad, byte plainText, byte cek)`

**Purpose:** Handles logic related to `encrypt`.

### Decrypt
`public byte Decrypt(byte aad, byte cek, byte iv, byte cipherText, byte authTag)`

**Purpose:** Handles logic related to `decrypt`.

## Usage Example

```csharp
var value = new AesCbcHmacEncryption();
value.Encrypt(0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)