---
title: "CharacterCreationOptionsStageVM"
description: "Auto-generated class reference for CharacterCreationOptionsStageVM."
---
# CharacterCreationOptionsStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationOptionsStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/CharacterCreation/OptionsStage/CharacterCreationOptionsStageVM.cs`

## Overview

`CharacterCreationOptionsStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation.OptionsStage` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `OptionsController` | `public CampaignOptionsControllerVM OptionsController { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** Keeps the display or cache of `values` in sync with the underlying state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.RefreshValues();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** Checks whether the current object meets the preconditions for `advance to next stage`.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
var result = characterCreationOptionsStageVM.CanAdvanceToNextStage();
```

### OnNextStage
`public override void OnNextStage()`

**Purpose:** Invoked when the `next stage` event is raised.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** Invoked when the `previous stage` event is raised.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnPreviousStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `cancel input key` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** Assigns a new value to `done input key` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**Purpose:** Adds `camera control input key` to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationOptionsStageVM from the subsystem API first
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationOptionsStageVM characterCreationOptionsStageVM = ...;
characterCreationOptionsStageVM.RefreshValues();
```

## See Also

- [Area Index](../)