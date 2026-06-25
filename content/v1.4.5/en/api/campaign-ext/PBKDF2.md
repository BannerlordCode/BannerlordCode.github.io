---
title: "PBKDF2"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PBKDF2`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PBKDF2

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class PBKDF2`
**Area:** campaign-ext

## Overview

`PBKDF2` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DeriveKey
`public static byte DeriveKey(byte password, byte salt, int iterationCount, int keyBitLength, HMAC prf)`

**Purpose:** Handles logic related to `derive key`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
PBKDF2.DeriveKey(0, 0, 0, 0, prf);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
