<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RsaPssUsingSha`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RsaPssUsingSha

**Namespace:** Jose
**Module:** Jose
**Type:** `public class RsaPssUsingSha : IJwsAlgorithm`
**Base:** `IJwsAlgorithm`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/RsaPssUsingSha.cs`

## Overview

`RsaPssUsingSha` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Sign
`public byte Sign(byte securedInput, object key)`

**Purpose:** Handles logic related to `sign`.

### Verify
`public bool Verify(byte signature, byte securedInput, object key)`

**Purpose:** Handles logic related to `verify`.

## Usage Example

```csharp
var value = new RsaPssUsingSha();
value.Sign(0, key);
```

## See Also

- [Complete Class Catalog](../catalog)