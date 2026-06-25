---
title: "BarterVM"
description: "Auto-generated class reference for BarterVM."
---
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

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.OnFinalize();
```

### OnInitialized
`public void OnInitialized()`

**Purpose:** **Purpose:** Invoked when the initialized event is raised.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.OnInitialized();
```

### ExecuteTransferAllLeftFief
`public void ExecuteTransferAllLeftFief()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all left fief.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllLeftFief();
```

### ExecuteAutoBalance
`public void ExecuteAutoBalance()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with auto balance.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteAutoBalance();
```

### ExecuteTransferAllLeftItem
`public void ExecuteTransferAllLeftItem()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all left item.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllLeftItem();
```

### ExecuteTransferAllLeftPrisoner
`public void ExecuteTransferAllLeftPrisoner()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all left prisoner.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllLeftPrisoner();
```

### ExecuteTransferAllLeftOther
`public void ExecuteTransferAllLeftOther()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all left other.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllLeftOther();
```

### ExecuteTransferAllRightFief
`public void ExecuteTransferAllRightFief()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all right fief.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllRightFief();
```

### ExecuteTransferAllRightItem
`public void ExecuteTransferAllRightItem()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all right item.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllRightItem();
```

### ExecuteTransferAllRightPrisoner
`public void ExecuteTransferAllRightPrisoner()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all right prisoner.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllRightPrisoner();
```

### ExecuteTransferAllRightOther
`public void ExecuteTransferAllRightOther()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with transfer all right other.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteTransferAllRightOther();
```

### ExecuteOffer
`public void ExecuteOffer()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with offer.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteOffer();
```

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteCancel();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with reset.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.ExecuteReset();
```

### OnTransferItem
`public void OnTransferItem(Barterable barter, bool isTransferrable)`

**Purpose:** **Purpose:** Invoked when the transfer item event is raised.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.OnTransferItem(barter, false);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to reset input key and updates the object's internal state.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.SetResetInputKey(hotkey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.SetDoneInputKey(hotkey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.SetCancelInputKey(hotkey);
```

### InitializeStaticContent
`public void InitializeStaticContent()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by static content.

```csharp
// Obtain an instance of BarterVM from the subsystem API first
BarterVM barterVM = ...;
barterVM.InitializeStaticContent();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
BarterVM barterVM = ...;
barterVM.RefreshValues();
```

## See Also

- [Area Index](../)