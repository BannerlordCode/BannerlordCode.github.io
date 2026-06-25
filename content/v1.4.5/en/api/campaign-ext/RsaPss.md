---
title: "RsaPss"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RsaPss`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RsaPss

**Namespace:** Jose
**Module:** Jose
**Type:** `public static class RsaPss`
**Area:** campaign-ext

## Overview

`RsaPss` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Sign
`public static byte Sign(byte input, CngKey key, CngAlgorithm hash, int saltSize)`

**Purpose:** Handles logic related to `sign`.

### Verify
`public static bool Verify(byte securedInput, byte signature, CngKey key, CngAlgorithm hash, int saltSize)`

**Purpose:** Handles logic related to `verify`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
RsaPss.Sign(0, key, hash, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
