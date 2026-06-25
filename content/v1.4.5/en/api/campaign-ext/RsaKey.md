---
title: "RsaKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RsaKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RsaKey

**Namespace:** Security.Cryptography
**Module:** Security.Cryptography
**Type:** `public class RsaKey`
**Area:** campaign-ext

## Overview

`RsaKey` lives in `Security.Cryptography`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Security.Cryptography` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### New
`public static CngKey New(RSAParameters parameters)`

**Purpose:** Handles logic related to `new`.

### New
`public static CngKey New(byte exponent, byte modulus, byte p = null, byte q = null)`

**Purpose:** Handles logic related to `new`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
RsaKey.New(parameters);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
