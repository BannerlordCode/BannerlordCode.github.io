---
title: "CharacterCreationReviewStageVM"
description: "Auto-generated class reference for CharacterCreationReviewStageVM."
---
# CharacterCreationReviewStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationReviewStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationReviewStageVM.cs`

## Overview

`CharacterCreationReviewStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NameTextQuestion` | `public string NameTextQuestion { get; set; }` |
| `ReviewList` | `public MBBindingList<CharacterCreationReviewStageItemVM> ReviewList { get; set; }` |
| `GainedPropertiesController` | `public CharacterCreationGainedPropertiesVM GainedPropertiesController { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CannotAdvanceReasonHint` | `public HintViewModel CannotAdvanceReasonHint { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## Key Methods

### ExecuteRandomizeName
`public void ExecuteRandomizeName()`

**Purpose:** **Purpose:** Runs the operation or workflow associated with randomize name.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.ExecuteRandomizeName();
```

### OnNextStage
`public override void OnNextStage()`

**Purpose:** **Purpose:** Invoked when the next stage event is raised.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** **Purpose:** Invoked when the previous stage event is raised.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.OnPreviousStage();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for advance to next stage.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
var result = characterCreationReviewStageVM.CanAdvanceToNextStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationReviewStageVM from the subsystem API first
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationReviewStageVM characterCreationReviewStageVM = ...;
characterCreationReviewStageVM.ExecuteRandomizeName();
```

## See Also

- [Area Index](../)