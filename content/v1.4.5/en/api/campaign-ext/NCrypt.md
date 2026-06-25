---
title: "NCrypt"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NCrypt`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NCrypt

**Namespace:** Jose.native
**Module:** Jose.native
**Type:** `public static class NCrypt`
**Base:** none
**File:** `Bannerlord.Source/bin/jose-jwt/Jose.native/NCrypt.cs`

## Overview

`NCrypt` lives in `Jose.native` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

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
var value = new NCrypt();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)