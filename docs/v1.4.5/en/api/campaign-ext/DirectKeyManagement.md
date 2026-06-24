<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DirectKeyManagement`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DirectKeyManagement

**Namespace:** Jose
**Module:** Jose
**Type:** `public class DirectKeyManagement : IKeyManagement`
**Base:** `IKeyManagement`
**File:** `Bannerlord.Source/bin/jose-jwt/Jose/DirectKeyManagement.cs`

## Overview

`DirectKeyManagement` lives in `Jose` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Jose` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### WrapNewKey
`public byte WrapNewKey(int cekSizeBits, object key, IDictionary<string, object> header)`

**Purpose:** Handles logic related to `wrap new key`.

### Unwrap
`public byte Unwrap(byte encryptedCek, object key, int cekSizeBits, IDictionary<string, object> header)`

**Purpose:** Handles logic related to `unwrap`.

## Usage Example

```csharp
var value = new DirectKeyManagement();
value.WrapNewKey(0, key, iDictionary<string, header);
```

## See Also

- [Complete Class Catalog](../catalog)