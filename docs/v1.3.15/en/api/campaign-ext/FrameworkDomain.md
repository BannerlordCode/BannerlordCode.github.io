<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FrameworkDomain`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FrameworkDomain

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public abstract class FrameworkDomain`
**Base:** none
**File:** `TaleWorlds.TwoDimension.Standalone/FrameworkDomain.cs`

## Overview

`FrameworkDomain` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Update
`public abstract void Update()`

**Purpose:** Updates the state or data of `update`.

### Destroy
`public abstract void Destroy()`

**Purpose:** Handles logic related to `destroy`.

## Usage Example

```csharp
var implementation = new CustomFrameworkDomain();
```

## See Also

- [Complete Class Catalog](../catalog)