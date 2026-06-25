---
title: "SettlementProjectVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementProjectVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementProjectVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementProjectVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TownManagement/SettlementProjectVM.cs`

## Overview

`SettlementProjectVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TownManagement` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDaily` | `public bool IsDaily { get; set; }` |
| `Building` | `public Building Building { get; set; }` |
| `VisualCode` | `public string VisualCode { get; set; }` |
| `ProductionText` | `public string ProductionText { get; set; }` |
| `CurrentPositiveEffectText` | `public string CurrentPositiveEffectText { get; set; }` |
| `NextPositiveEffectText` | `public string NextPositiveEffectText { get; set; }` |
| `ProductionCostText` | `public string ProductionCostText { get; set; }` |
| `IsCurrentActiveProject` | `public bool IsCurrentActiveProject { get; set; }` |
| `Progress` | `public int Progress { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `Explanation` | `public string Explanation { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### RefreshProductionText
`public virtual void RefreshProductionText()`

**Purpose:** Refreshes the display or cache of `production text`.

### ExecuteAddToQueue
`public abstract void ExecuteAddToQueue()`

**Purpose:** Executes the `add to queue` operation or workflow.

### ExecuteSetAsActiveDevelopment
`public abstract void ExecuteSetAsActiveDevelopment()`

**Purpose:** Executes the `set as active development` operation or workflow.

### ExecuteSetAsCurrent
`public abstract void ExecuteSetAsCurrent()`

**Purpose:** Executes the `set as current` operation or workflow.

### ExecuteResetCurrent
`public abstract void ExecuteResetCurrent()`

**Purpose:** Executes the `reset current` operation or workflow.

### ExecuteToggleSelected
`public abstract void ExecuteToggleSelected()`

**Purpose:** Executes the `toggle selected` operation or workflow.

## Usage Example

```csharp
var implementation = new CustomSettlementProjectVM();
```

## See Also

- [Complete Class Catalog](../catalog)