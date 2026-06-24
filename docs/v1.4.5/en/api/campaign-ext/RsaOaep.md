<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RsaOaep`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RsaOaep

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class RsaOaep`
**Area:** campaign-ext

## Overview

`RsaOaep` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Decrypt
`public static byte Decrypt(byte cipherText, CngKey key, CngAlgorithm hash)`

**Purpose:** Handles logic related to `decrypt`.

### Encrypt
`public static byte Encrypt(byte plainText, CngKey key, CngAlgorithm hash)`

**Purpose:** Handles logic related to `encrypt`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
RsaOaep.Decrypt(0, key, hash);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
