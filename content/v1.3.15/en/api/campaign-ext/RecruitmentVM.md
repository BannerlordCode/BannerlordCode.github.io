---
title: "RecruitmentVM"
description: "Auto-generated class reference for RecruitmentVM."
---
# RecruitmentVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Recruitment/RecruitmentVM.cs`

## Overview

`RecruitmentVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsQuitting` | `public bool IsQuitting { get; }` |
| `ResetHint` | `public HintViewModel ResetHint { get; set; }` |
| `FocusedVolunteerTroop` | `public RecruitVolunteerTroopVM FocusedVolunteerTroop { get; set; }` |
| `FocusedVolunteerOwner` | `public RecruitVolunteerOwnerVM FocusedVolunteerOwner { get; set; }` |
| `PartyWageHint` | `public HintViewModel PartyWageHint { get; set; }` |
| `PartyCapacityHint` | `public HintViewModel PartyCapacityHint { get; set; }` |
| `PartySpeedHint` | `public BasicTooltipViewModel PartySpeedHint { get; set; }` |
| `RemainingFoodHint` | `public HintViewModel RemainingFoodHint { get; set; }` |
| `TotalWealthHint` | `public HintViewModel TotalWealthHint { get; set; }` |
| `TotalCostHint` | `public HintViewModel TotalCostHint { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `RecruitAllHint` | `public BasicTooltipViewModel RecruitAllHint { get; set; }` |
| `PartyWage` | `public int PartyWage { get; set; }` |
| `PartyCapacityText` | `public string PartyCapacityText { get; set; }` |
| `PartyWageText` | `public string PartyWageText { get; set; }` |
| `RecruitAllText` | `public string RecruitAllText { get; set; }` |
| `PartySpeedText` | `public string PartySpeedText { get; set; }` |
| `ResetAllText` | `public string ResetAllText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `RemainingFoodText` | `public string RemainingFoodText { get; set; }` |
| `TotalCostText` | `public string TotalCostText { get; set; }` |
| `Enabled` | `public bool Enabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `IsPartyCapacityWarningEnabled` | `public bool IsPartyCapacityWarningEnabled { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CanRecruitAll` | `public bool CanRecruitAll { get; set; }` |
| `TotalWealth` | `public int TotalWealth { get; set; }` |
| `PartyCapacity` | `public int PartyCapacity { get; set; }` |
| `InitialPartySize` | `public int InitialPartySize { get; set; }` |
| `CurrentPartySize` | `public int CurrentPartySize { get; set; }` |
| `VolunteerList` | `public MBBindingList<RecruitVolunteerVM> VolunteerList { get; set; }` |
| `TroopsInCart` | `public MBBindingList<RecruitVolunteerTroopVM> TroopsInCart { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `RecruitAllInputKey` | `public InputKeyItemVM RecruitAllInputKey { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshValues();
```

### RefreshScreen
`public void RefreshScreen()`

**Purpose:** Keeps the display or cache of `screen` in sync with the underlying state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshScreen();
```

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Runs the operation or workflow associated with `done`.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteDone();
```

### ExecuteForceQuit
`public void ExecuteForceQuit()`

**Purpose:** Runs the operation or workflow associated with `force quit`.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteForceQuit();
```

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Runs the operation or workflow associated with `reset`.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteReset();
```

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**Purpose:** Runs the operation or workflow associated with `recruit all`.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.ExecuteRecruitAll();
```

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the current object.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.Deactivate();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.OnFinalize();
```

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** Assigns a new value to `get key text from key i d func` and updates the object's internal state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetGetKeyTextFromKeyIDFunc(func<string, getKeyTextFromKeyId);
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetDoneInputKey(hotKey);
```

### SetRecruitAllInputKey
`public void SetRecruitAllInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `recruit all input key` and updates the object's internal state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetRecruitAllInputKey(hotKey);
```

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `reset input key` and updates the object's internal state.

```csharp
// Obtain an instance of RecruitmentVM from the subsystem API first
RecruitmentVM recruitmentVM = ...;
recruitmentVM.SetResetInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
RecruitmentVM recruitmentVM = ...;
recruitmentVM.RefreshValues();
```

## See Also

- [Area Index](../)