---
title: "CraftingOrderItemVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CraftingOrderItemVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CraftingOrderItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CraftingOrderItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/WeaponCrafting/WeaponDesign/Order/CraftingOrderItemVM.cs`

## Overview

`CraftingOrderItemVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.WeaponDesign.Order` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CraftingOrder` | `public CraftingOrder CraftingOrder { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasAvailableHeroes` | `public bool HasAvailableHeroes { get; set; }` |
| `IsDifficultySuitableForHero` | `public bool IsDifficultySuitableForHero { get; set; }` |
| `IsQuestOrder` | `public bool IsQuestOrder { get; set; }` |
| `OrderPrice` | `public int OrderPrice { get; set; }` |
| `OrderDifficultyLabelText` | `public string OrderDifficultyLabelText { get; set; }` |
| `OrderDifficultyValueText` | `public string OrderDifficultyValueText { get; set; }` |
| `OrderNumberText` | `public string OrderNumberText { get; set; }` |
| `OrderWeaponType` | `public string OrderWeaponType { get; set; }` |
| `OrderWeaponTypeCode` | `public string OrderWeaponTypeCode { get; set; }` |
| `OrderOwnerData` | `public HeroVM OrderOwnerData { get; set; }` |
| `DisabledReasonHint` | `public BasicTooltipViewModel DisabledReasonHint { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `WeaponAttributes` | `public MBBindingList<WeaponAttributeVM> WeaponAttributes { get; set; }` |

## Key Methods

### RefreshStats
`public void RefreshStats()`

**Purpose:** Refreshes the display or cache of `stats`.

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteSelectOrder
`public void ExecuteSelectOrder()`

**Purpose:** Executes the `select order` operation or workflow.

## Usage Example

```csharp
var value = new CraftingOrderItemVM();
value.RefreshStats();
```

## See Also

- [Complete Class Catalog](../catalog)