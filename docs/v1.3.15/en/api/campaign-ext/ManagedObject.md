<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ManagedObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedObject

**Namespace:** TaleWorlds.DotNet
**Module:** TaleWorlds.DotNet
**Type:** `public abstract class ManagedObject`
**Base:** none
**File:** `TaleWorlds.DotNet/ManagedObject.cs`

## Overview

`ManagedObject` lives in `TaleWorlds.DotNet` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.DotNet` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetManagedId
`public int GetManagedId()`

**Purpose:** Gets the current value of `managed id`.

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Gets the current value of `hash code`.

## Usage Example

```csharp
var implementation = new CustomManagedObject();
```

## See Also

- [Complete Class Catalog](../catalog)