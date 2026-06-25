---
title: "OrderTargets"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `OrderTargets`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# OrderTargets

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum OrderTargets`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Order/MissionOrderVM.cs`

## Overview

`OrderTargets` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
OrderTargets example = OrderTargets.Value;
```

## See Also

- [Complete Class Catalog](../catalog)