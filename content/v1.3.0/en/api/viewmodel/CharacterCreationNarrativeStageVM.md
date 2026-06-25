---
title: "CharacterCreationNarrativeStageVM"
description: "Auto-generated class reference for CharacterCreationNarrativeStageVM."
---
# CharacterCreationNarrativeStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationNarrativeStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationNarrativeStageVM.cs`

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

**Purpose:** Keeps the display or cache of menu in sync with the underlying state.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.RefreshMenu();
```

### OnOptionSelected
`public void OnOptionSelected(CharacterCreationOptionVM option)`

**Purpose:** Invoked when the option selected event is raised.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.OnOptionSelected(option);
```

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Invoked when the next stage event is raised.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Invoked when the previous stage event is raised.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the this instance meets the preconditions for advance to next stage.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
var result = characterCreationNarrativeStageVM.CanAdvanceToNextStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationNarrativeStageVM from the subsystem API first
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationNarrativeStageVM characterCreationNarrativeStageVM = ...;
characterCreationNarrativeStageVM.RefreshMenu();
```

## See Also

- [Area Index](../)