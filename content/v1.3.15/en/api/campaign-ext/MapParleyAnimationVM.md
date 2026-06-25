---
title: "MapParleyAnimationVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MapParleyAnimationVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapParleyAnimationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapParleyAnimationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var value = new MapParleyAnimationVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)