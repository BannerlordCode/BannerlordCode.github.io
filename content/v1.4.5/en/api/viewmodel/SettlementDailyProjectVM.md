---
title: "SettlementDailyProjectVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementDailyProjectVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SettlementDailyProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SettlementDailyProjectVM : SettlementProjectVM`
**Base:** `SettlementProjectVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement/SettlementDailyProjectVM.cs`

## Overview

`SettlementDailyProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDefault` | `public bool IsDefault { get; set; }` |
| `DefaultText` | `public string DefaultText { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshProductionText
`public override void RefreshProductionText()`

**Purpose:** Refreshes the display or cache of `production text`.

### ExecuteAddRemoveToQueue
`public override void ExecuteAddRemoveToQueue()`

**Purpose:** Executes the `add remove to queue` operation or workflow.

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
var value = new SettlementDailyProjectVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)