<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `RecruitmentVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# RecruitmentVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RecruitmentVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment/RecruitmentVM.cs`

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

**Purpose:** Refreshes the display or cache of `values`.

### RefreshScreen
`public void RefreshScreen()`

**Purpose:** Refreshes the display or cache of `screen`.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteForceQuit
`public void ExecuteForceQuit()`

**Purpose:** Executes the `force quit` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteRecruitAll
`public void ExecuteRecruitAll()`

**Purpose:** Executes the `recruit all` operation or workflow.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetGetKeyTextFromKeyIDFunc
`public void SetGetKeyTextFromKeyIDFunc(Func<string, TextObject> getKeyTextFromKeyId)`

**Purpose:** Sets the value or state of `get key text from key i d func`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetRecruitAllInputKey
`public void SetRecruitAllInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `recruit all input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `reset input key`.

## Usage Example

```csharp
var value = new RecruitmentVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)