<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyTroopManagerVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PartyTroopManagerVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Party.PartyTroopManagerPopUp
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyTroopManagerVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Party/PartyTroopManagerPopUp/PartyTroopManagerVM.cs`

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
| `IsFocusedOnACharacter` | `public bool IsFocusedOnACharacter { get; set; }` |
| `IsOpen` | `public bool IsOpen { get; set; }` |
| `IsUpgradePopUp` | `public bool IsUpgradePopUp { get; set; }` |
| `IsPrimaryActionAvailable` | `public bool IsPrimaryActionAvailable { get; set; }` |
| `IsSecondaryActionAvailable` | `public bool IsSecondaryActionAvailable { get; set; }` |
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

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### OpenPopUp
`public virtual void OpenPopUp()`

**Purpose:** Handles logic related to `open pop up`.

### ExecuteDone
`public virtual void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### UpdateOpenButtonHint
`public void UpdateOpenButtonHint(bool isDisabled, bool isIrrelevant, bool isUpgradesDisabled)`

**Purpose:** Updates the state or data of `open button hint`.

### ExecuteCancel
`public abstract void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetPrimaryActionInputKey
`public void SetPrimaryActionInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `primary action input key`.

### SetSecondaryActionInputKey
`public void SetSecondaryActionInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `secondary action input key`.

## Usage Example

```csharp
var implementation = new CustomPartyTroopManagerVM();
```

## See Also

- [Complete Class Catalog](../catalog)