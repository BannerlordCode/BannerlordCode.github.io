---
title: "SettlementBuildingProjectVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementBuildingProjectVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementBuildingProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementBuildingProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementBuildingProjectVM.cs`

## Overview

`SettlementBuildingProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `DevelopmentLevelText` | `public string DevelopmentLevelText { get; set; }` |
| `Level` | `public int Level { get; set; }` |
| `MaxLevel` | `public int MaxLevel { get; set; }` |
| `DevelopmentQueueIndex` | `public int DevelopmentQueueIndex { get; set; }` |
| `IsInQueue` | `public bool IsInQueue { get; set; }` |
| `AlreadyAtMaxText` | `public string AlreadyAtMaxText { get; set; }` |
| `CanBuild` | `public bool CanBuild { get; set; }` |
| `AddRemoveHint` | `public HintViewModel AddRemoveHint { get; set; }` |
| `SetAsActiveHint` | `public HintViewModel SetAsActiveHint { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshProductionText
`public override void RefreshProductionText()`

**Purpose:** Refreshes the display or cache of `production text`.

### ExecuteAddToQueue
`public override void ExecuteAddToQueue()`

**Purpose:** Executes the `add to queue` operation or workflow.

### ExecuteSetAsActiveDevelopment
`public override void ExecuteSetAsActiveDevelopment()`

**Purpose:** Executes the `set as active development` operation or workflow.

### ExecuteSetAsCurrent
`public override void ExecuteSetAsCurrent()`

**Purpose:** Executes the `set as current` operation or workflow.

### ExecuteResetCurrent
`public override void ExecuteResetCurrent()`

**Purpose:** Executes the `reset current` operation or workflow.

### ExecuteToggleSelected
`public override void ExecuteToggleSelected()`

**Purpose:** Executes the `toggle selected` operation or workflow.

## Usage Example

```csharp
var value = new SettlementBuildingProjectVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)