---
title: "EccKey"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EccKey`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EccKey

**Namespace:** Security.Cryptography
**Module:** Security.Cryptography
**Type:** `public class EccKey`
**Area:** campaign-ext

## Overview

`EccKey` lives in `Security.Cryptography`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Security.Cryptography` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `X` | `public byte X { get; }` |
| `Y` | `public byte Y { get; }` |
| `D` | `public byte D { get; }` |

## Key Methods

### New
`public static CngKey New(byte x, byte y, byte d = null, CngKeyUsages usage = CngKeyUsages.Signing)`

**Purpose:** Handles logic related to `new`.

### Generate
`public static EccKey Generate(CngKey receiverPubKey)`

**Purpose:** Handles logic related to `generate`.

### Export
`public static EccKey Export(CngKey _key)`

**Purpose:** Handles logic related to `export`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
EccKey.New(0, 0, 0, cngKeyUsages.Signing);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
