<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationNarrativeStageVM`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterCreationNarrativeStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationNarrativeStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationNarrativeStageVM.cs`

## Overview

`CharacterCreationNarrativeStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `SelectedOption` | `public CharacterCreationOptionVM SelectedOption { get; set; }` |
| `SelectionList` | `public MBBindingList<CharacterCreationOptionVM> SelectionList { get; set; }` |

## Key Methods

### RefreshMenu
`public void RefreshMenu()`

**Purpose:** Refreshes the display or cache of `menu`.

### OnOptionSelected
`public void OnOptionSelected(CharacterCreationOptionVM option)`

**Purpose:** Called when the `option selected` event is raised.

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Called when the `next stage` event is raised.

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Called when the `previous stage` event is raised.

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the current object can `advance to next stage`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `cancel input key`.

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Sets the value or state of `done input key`.

## Usage Example

```csharp
var value = new CharacterCreationNarrativeStageVM();
value.RefreshMenu();
```

## See Also

- [Complete Class Catalog](../catalog)