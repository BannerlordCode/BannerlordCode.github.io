---
title: "AesGcm"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AesGcm`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# AesGcm

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class AesGcm`
**Area:** campaign-ext

## Overview

`AesGcm` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Encrypt
`public static byte Encrypt(byte key, byte iv, byte aad, byte plainText)`

**Purpose:** Handles logic related to `encrypt`.

### Decrypt
`public static byte Decrypt(byte key, byte iv, byte aad, byte cipherText, byte authTag)`

**Purpose:** Handles logic related to `decrypt`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
AesGcm.Encrypt(0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
