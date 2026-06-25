---
title: "CharacterCreationCultureStageVM"
description: "Auto-generated class reference for CharacterCreationCultureStageVM."
---
# CharacterCreationCultureStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationCultureStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/CharacterCreationCultureStageVM.cs`

## Overview

`CharacterCreationCultureStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `IsActive` | `public bool IsActive { get; set; }` |
| `Cultures` | `public MBBindingList<CharacterCreationCultureVM> Cultures { get; set; }` |
| `CurrentSelectedCulture` | `public CharacterCreationCultureVM CurrentSelectedCulture { get; set; }` |

## Key Methods

### OnCultureSelection
`public void OnCultureSelection(CharacterCreationCultureVM selectedCulture)`

**Purpose:** Invoked when the culture selection event is raised.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnCultureSelection(selectedCulture);
```

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Invoked when the next stage event is raised.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Invoked when the previous stage event is raised.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the this instance meets the preconditions for advance to next stage.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
var result = characterCreationCultureStageVM.CanAdvanceToNextStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationCultureStageVM from the subsystem API first
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.SetDoneInputKey(hotKey);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationCultureStageVM characterCreationCultureStageVM = ...;
characterCreationCultureStageVM.OnCultureSelection(selectedCulture);
```

## See Also

- [Area Index](../)