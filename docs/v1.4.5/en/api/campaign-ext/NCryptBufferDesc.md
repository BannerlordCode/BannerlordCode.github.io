<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NCryptBufferDesc`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NCryptBufferDesc

**Namespace:** Jose.native
**Module:** Jose.native
**Type:** `public class NCryptBufferDesc : IDisposable`
**Base:** `IDisposable`
**Area:** campaign-ext

## Overview

`NCryptBufferDesc` lives in `Jose.native`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `Jose.native` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### Dispose
`public void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### NCryptSecretAgreement
`public static extern uint NCryptSecretAgreement(SafeNCryptKeyHandle hPrivKey, SafeNCryptKeyHandle hPublicKey, out SafeNCryptSecretHandle phSecret, uint flags)`

**Purpose:** Handles logic related to `n crypt secret agreement`.

### NCryptDeriveKey
`public static extern uint NCryptDeriveKey(SafeNCryptSecretHandle hSharedSecret, string kdf, NCryptBufferDesc parameterList, byte derivedKey, uint derivedKeyByteSize, out uint result, uint flags)`

**Purpose:** Handles logic related to `n crypt derive key`.

## Usage Example

```csharp
// First obtain a NCryptBufferDesc instance from game state, then call one of its public methods
var value = new NCryptBufferDesc();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
