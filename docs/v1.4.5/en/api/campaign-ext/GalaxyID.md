<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GalaxyID`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# GalaxyID

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public class GalaxyID : IDisposable`
**Base:** `IDisposable`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/GalaxyID.cs`

## Overview

`GalaxyID` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Dispose
`public virtual void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

### Equals
`public override bool Equals(object obj)`

**Purpose:** Handles logic related to `equals`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### FromRealID
`public static GalaxyID FromRealID(IDType type, ulong value)`

**Purpose:** Handles logic related to `from real i d`.

### IsValid
`public bool IsValid()`

**Purpose:** Handles logic related to `is valid`.

### ToUint64
`public ulong ToUint64()`

**Purpose:** Handles logic related to `to uint64`.

### GetRealID
`public ulong GetRealID()`

**Purpose:** Gets the current value of `real i d`.

### GetIDType
`public IDType GetIDType()`

**Purpose:** Gets the current value of `i d type`.

## Usage Example

```csharp
var value = new GalaxyID();
value.Dispose();
```

## See Also

- [Complete Class Catalog](../catalog)