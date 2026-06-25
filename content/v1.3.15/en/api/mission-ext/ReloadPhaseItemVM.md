---
title: "ReloadPhaseItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ReloadPhaseItemVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ReloadPhaseItemVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ReloadPhaseItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/ReloadPhaseItemVM.cs`

## Overview

`ReloadPhaseItemVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Progress` | `public float Progress { get; set; }` |
| `RelativeDurationToMaxDuration` | `public float RelativeDurationToMaxDuration { get; set; }` |

## Key Methods

### Update
`public void Update(float progress, float relativeDurationToMaxDuration)`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var value = new ReloadPhaseItemVM();
value.Update(0, 0);
```

## See Also

- [Complete Class Catalog](../catalog)