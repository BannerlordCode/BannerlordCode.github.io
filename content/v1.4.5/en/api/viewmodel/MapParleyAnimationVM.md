---
title: "MapParleyAnimationVM"
description: "Auto-generated class reference for MapParleyAnimationVM."
---
# MapParleyAnimationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapParleyAnimationVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley/MapParleyAnimationVM.cs`

## Overview

`MapParleyAnimationVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ParleyText` | `public string ParleyText { get; set; }` |
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of MapParleyAnimationVM from the subsystem API first
MapParleyAnimationVM mapParleyAnimationVM = ...;
mapParleyAnimationVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of MapParleyAnimationVM from the subsystem API first
MapParleyAnimationVM mapParleyAnimationVM = ...;
mapParleyAnimationVM.OnFinalize();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MapParleyAnimationVM mapParleyAnimationVM = ...;
mapParleyAnimationVM.RefreshValues();
```

## See Also

- [Area Index](../)