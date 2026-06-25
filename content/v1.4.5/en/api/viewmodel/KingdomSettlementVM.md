---
title: "KingdomSettlementVM"
description: "Auto-generated class reference for KingdomSettlementVM."
---
# KingdomSettlementVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class KingdomSettlementVM : KingdomCategoryVM`
**Base:** `KingdomCategoryVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements/KingdomSettlementVM.cs`

## Overview

`KingdomSettlementVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Settlements` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentSelectedSettlement` | `public KingdomSettlementItemVM CurrentSelectedSettlement { get; set; }` |
| `SettlementSortController` | `public KingdomSettlementSortControllerVM SettlementSortController { get; set; }` |
| `AnnexHint` | `public HintViewModel AnnexHint { get; set; }` |
| `ProposeText` | `public string ProposeText { get; set; }` |
| `AnnexActionExplanationText` | `public string AnnexActionExplanationText { get; set; }` |
| `ProsperityText` | `public string ProsperityText { get; set; }` |
| `VillagesText` | `public string VillagesText { get; set; }` |
| `OwnerText` | `public string OwnerText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `ClanText` | `public string ClanText { get; set; }` |
| `FoodText` | `public string FoodText { get; set; }` |
| `GarrisonText` | `public string GarrisonText { get; set; }` |
| `MilitiaText` | `public string MilitiaText { get; set; }` |
| `AnnexText` | `public string AnnexText { get; set; }` |
| `TypeText` | `public string TypeText { get; set; }` |
| `AnnexCost` | `public int AnnexCost { get; set; }` |
| `DefendersText` | `public string DefendersText { get; set; }` |
| `Settlements` | `public MBBindingList<KingdomSettlementItemVM> Settlements { get; set; }` |
| `CanAnnexCurrentSettlement` | `public bool CanAnnexCurrentSettlement { get; set; }` |
| `HasCost` | `public bool HasCost { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomSettlementVM from the subsystem API first
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshValues();
```

### RefreshSettlementList
`public void RefreshSettlementList()`

**Purpose:** Keeps the display or cache of `settlement list` in sync with the underlying state.

```csharp
// Obtain an instance of KingdomSettlementVM from the subsystem API first
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshSettlementList();
```

### SelectSettlement
`public void SelectSettlement(Settlement settlement)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of KingdomSettlementVM from the subsystem API first
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.SelectSettlement(settlement);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
KingdomSettlementVM kingdomSettlementVM = ...;
kingdomSettlementVM.RefreshValues();
```

## See Also

- [Area Index](../)