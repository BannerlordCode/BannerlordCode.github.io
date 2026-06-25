---
title: "BarterVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BarterVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BarterVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Barter
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class BarterVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Barter/BarterVM.cs`

## Overview

`BarterVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Barter` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FiefLbl` | `public string FiefLbl { get; set; }` |
| `PrisonerLbl` | `public string PrisonerLbl { get; set; }` |
| `ItemLbl` | `public string ItemLbl { get; set; }` |
| `OtherLbl` | `public string OtherLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |
| `ResetLbl` | `public string ResetLbl { get; set; }` |
| `OfferLbl` | `public string OfferLbl { get; set; }` |
| `DiplomaticLbl` | `public string DiplomaticLbl { get; set; }` |
| `AutoBalanceHint` | `public HintViewModel AutoBalanceHint { get; set; }` |
| `LeftHero` | `public HeroVM LeftHero { get; set; }` |
| `RightHero` | `public HeroVM RightHero { get; set; }` |
| `IsOfferDisabled` | `public bool IsOfferDisabled { get; set; }` |
| `LeftMaxGold` | `public int LeftMaxGold { get; set; }` |
| `RightMaxGold` | `public int RightMaxGold { get; set; }` |
| `LeftNameLbl` | `public string LeftNameLbl { get; set; }` |
| `RightNameLbl` | `public string RightNameLbl { get; set; }` |
| `LeftFiefList` | `public MBBindingList<BarterItemVM> LeftFiefList { get; set; }` |
| `RightFiefList` | `public MBBindingList<BarterItemVM> RightFiefList { get; set; }` |
| `LeftPrisonerList` | `public MBBindingList<BarterItemVM> LeftPrisonerList { get; set; }` |
| `RightPrisonerList` | `public MBBindingList<BarterItemVM> RightPrisonerList { get; set; }` |
| `LeftItemList` | `public MBBindingList<BarterItemVM> LeftItemList { get; set; }` |
| `RightItemList` | `public MBBindingList<BarterItemVM> RightItemList { get; set; }` |
| `LeftOtherList` | `public MBBindingList<BarterItemVM> LeftOtherList { get; set; }` |
| `RightOtherList` | `public MBBindingList<BarterItemVM> RightOtherList { get; set; }` |
| `LeftDiplomaticList` | `public MBBindingList<BarterItemVM> LeftDiplomaticList { get; set; }` |
| `RightDiplomaticList` | `public MBBindingList<BarterItemVM> RightDiplomaticList { get; set; }` |
| `LeftOfferList` | `public MBBindingList<BarterItemVM> LeftOfferList { get; set; }` |
| `RightOfferList` | `public MBBindingList<BarterItemVM> RightOfferList { get; set; }` |
| `RightGoldList` | `public MBBindingList<BarterItemVM> RightGoldList { get; set; }` |
| `LeftGoldList` | `public MBBindingList<BarterItemVM> LeftGoldList { get; set; }` |
| `InitializationIsOver` | `public bool InitializationIsOver { get; set; }` |
| `ResultBarOtherPercentage` | `public int ResultBarOtherPercentage { get; set; }` |
| `ResultBarOffererPercentage` | `public int ResultBarOffererPercentage { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OnInitialized
`public void OnInitialized()`

**Purpose:** Called when the `initialized` event is raised.

### ExecuteTransferAllLeftFief
`public void ExecuteTransferAllLeftFief()`

**Purpose:** Executes the `transfer all left fief` operation or workflow.

### ExecuteAutoBalance
`public void ExecuteAutoBalance()`

**Purpose:** Executes the `auto balance` operation or workflow.

### ExecuteTransferAllLeftItem
`public void ExecuteTransferAllLeftItem()`

**Purpose:** Executes the `transfer all left item` operation or workflow.

### ExecuteTransferAllLeftPrisoner
`public void ExecuteTransferAllLeftPrisoner()`

**Purpose:** Executes the `transfer all left prisoner` operation or workflow.

### ExecuteTransferAllLeftOther
`public void ExecuteTransferAllLeftOther()`

**Purpose:** Executes the `transfer all left other` operation or workflow.

### ExecuteTransferAllRightFief
`public void ExecuteTransferAllRightFief()`

**Purpose:** Executes the `transfer all right fief` operation or workflow.

### ExecuteTransferAllRightItem
`public void ExecuteTransferAllRightItem()`

**Purpose:** Executes the `transfer all right item` operation or workflow.

### ExecuteTransferAllRightPrisoner
`public void ExecuteTransferAllRightPrisoner()`

**Purpose:** Executes the `transfer all right prisoner` operation or workflow.

### ExecuteTransferAllRightOther
`public void ExecuteTransferAllRightOther()`

**Purpose:** Executes the `transfer all right other` operation or workflow.

### ExecuteOffer
`public void ExecuteOffer()`

**Purpose:** Executes the `offer` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### OnTransferItem
`public void OnTransferItem(Barterable barter, bool isTransferrable)`

**Purpose:** Called when the `transfer item` event is raised.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### InitializeStaticContent
`public void InitializeStaticContent()`

**Purpose:** Initializes the state, resources, or bindings for `static content`.

## Usage Example

```csharp
var value = new BarterVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)