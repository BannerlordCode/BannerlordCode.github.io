<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConcatKDF`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ConcatKDF

**Namespace:** Jose
**Module:** Jose
**Type:** `public class ConcatKDF`
**Area:** campaign-ext

## Overview

`ConcatKDF` lives in `Jose`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### DeriveKey
`public static byte DeriveKey(CngKey externalPubKey, CngKey privateKey, int keyBitLength, byte algorithmId, byte partyVInfo, byte partyUInfo, byte suppPubInfo)`

**Purpose:** Handles logic related to `derive key`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ConcatKDF.DeriveKey(externalPubKey, privateKey, 0, 0, 0, 0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
