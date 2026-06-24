<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameMenuTroopSelectionVM`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameMenuTroopSelectionVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class GameMenuTroopSelectionVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/TroopSelection/GameMenuTroopSelectionVM.cs`

## Overview

`GameMenuTroopSelectionVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.TroopSelection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsDoneEnabled` | `public bool IsDoneEnabled { get; set; }` |
| `DoneHint` | `public HintViewModel DoneHint { get; set; }` |
| `Troops` | `public MBBindingList<TroopSelectionItemVM> Troops { get; set; }` |
| `DoneText` | `public string DoneText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ClearSelectionText` | `public string ClearSelectionText { get; set; }` |
| `CurrentSelectedAmountText` | `public string CurrentSelectedAmountText { get; set; }` |
| `CurrentSelectedAmountTitle` | `public string CurrentSelectedAmountTitle { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Refreshes the display or cache of `values`.

### ExecuteDone
`public void ExecuteDone()`

**Purpose:** Executes the `done` operation or workflow.

### ExecuteCancel
`public void ExecuteCancel()`

**Purpose:** Executes the `cancel` operation or workflow.

### ExecuteReset
`public void ExecuteReset()`

**Purpose:** Executes the `reset` operation or workflow.

### ExecuteClearSelection
`public void ExecuteClearSelection()`

**Purpose:** Executes the `clear selection` operation or workflow.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `done input key`.

### SetResetInputKey
`public void SetResetInputKey(HotKey hotkey)`

**Purpose:** Sets the value or state of `reset input key`.

## Usage Example

```csharp
var value = new GameMenuTroopSelectionVM();
value.RefreshValues();
```

## See Also

- [Complete Class Catalog](../catalog)