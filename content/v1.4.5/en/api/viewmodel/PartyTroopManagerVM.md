---
title: "PartyTroopManagerVM"
description: "Auto-generated class reference for PartyTroopManagerVM."
---
# PartyTroopManagerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

## Overview

`PartyTroopManagerVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
| `IsTertiaryActionAvailable` | `public bool IsTertiaryActionAvailable { get; set; }` |
| `FocusedTroop` | `public PartyTroopManagerItemVM FocusedTroop { get; set; }` |
| `Troops` | `public MBBindingList<PartyTroopManagerItemVM> Troops { get; set; }` |
| `OpenButtonHint` | `public HintViewModel OpenButtonHint { get; set; }` |
| `UsedHorsesHint` | `public BasicTooltipViewModel UsedHorsesHint { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `AvatarText` | `public string AvatarText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `CountText` | `public string CountText { get; set; }` |
| `GoldChangeText` | `public string GoldChangeText { get; set; }` |
| `HorseChangeText` | `public string HorseChangeText { get; set; }` |
| `MoraleChangeText` | `public string MoraleChangeText { get; set; }` |
| `DoneLbl` | `public string DoneLbl { get; set; }` |
| `CancelLbl` | `public string CancelLbl { get; set; }` |

## Key Methods

### ExecuteItemPrimaryAction
`public virtual void ExecuteItemPrimaryAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with item primary action.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemPrimaryAction();
```

### ExecuteItemSecondaryAction
`public virtual void ExecuteItemSecondaryAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with item secondary action.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemSecondaryAction();
```

### ExecuteItemTertiaryAction
`public virtual void ExecuteItemTertiaryAction()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with item tertiary action.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteItemTertiaryAction();
```

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.RefreshValues();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.OnFinalize();
```

### OpenPopUp
`public virtual void OpenPopUp()`

**Purpose:** **Purpose:** Opens the resource or UI associated with pop up.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.OpenPopUp();
```

### ExecuteDone
`public virtual void ExecuteDone()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with done.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteDone();
```

### UpdateOpenButtonHint
`public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of open button hint.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.UpdateOpenButtonHint(false, false, false);
```

### ExecuteCancel
`public abstract void ExecuteCancel()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with cancel.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.ExecuteCancel();
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetDoneInputKey(hotKey);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetCancelInputKey(hotKey);
```

### SetPrimaryActionInputKey
`public void SetPrimaryActionInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to primary action input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetPrimaryActionInputKey(hotKey);
```

### SetSecondaryActionInputKey
`public void SetSecondaryActionInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to secondary action input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetSecondaryActionInputKey(hotKey);
```

### SetTertiaryActionInputKey
`public void SetTertiaryActionInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to tertiary action input key and updates the object's internal state.

```csharp
// Obtain an instance of PartyTroopManagerVM from the subsystem API first
PartyTroopManagerVM partyTroopManagerVM = ...;
partyTroopManagerVM.SetTertiaryActionInputKey(hotKey);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
PartyTroopManagerVM instance = ...;
```

## See Also

- [Area Index](../)