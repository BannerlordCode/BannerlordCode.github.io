---
title: "CharacterCreationClanNamingStageVM"
description: "Auto-generated class reference for CharacterCreationClanNamingStageVM."
---
# CharacterCreationClanNamingStageVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationClanNamingStageVM : CharacterCreationStageBaseVM`
**Base:** `CharacterCreationStageBaseVM`
**File:** `bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation/CharacterCreationClanNamingStageVM.cs`

## Overview

`CharacterCreationClanNamingStageVM` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterCreation` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Character` | `public BasicCharacterObject Character { get; }` |
| `ShieldSlotIndex` | `public int ShieldSlotIndex { get; }` |
| `ShieldRosterElement` | `public ItemRosterElement ShieldRosterElement { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey { get; set; }` |
| `CameraControlKeys` | `public MBBindingList<InputKeyItemVM> CameraControlKeys { get; set; }` |
| `ClanName` | `public string ClanName { get; set; }` |
| `ClanNameNotApplicableReason` | `public string ClanNameNotApplicableReason { get; set; }` |
| `BottomHintText` | `public string BottomHintText { get; set; }` |
| `ClanBanner` | `public BannerImageIdentifierVM ClanBanner { get; set; }` |
| `CharacterGamepadControlsEnabled` | `public bool CharacterGamepadControlsEnabled { get; set; }` |

## Key Methods

### RefreshValues
`public override void RefreshValues()`

**Purpose:** **Purpose:** Keeps the display or cache of values in sync with the underlying state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.RefreshValues();
```

### CanAdvanceToNextStage
`public override bool CanAdvanceToNextStage()`

**Purpose:** **Purpose:** Checks whether the this instance meets the preconditions for advance to next stage.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
var result = characterCreationClanNamingStageVM.CanAdvanceToNextStage();
```

### OnNextStage
`public override void OnNextStage()`

**Purpose:** **Purpose:** Invoked when the next stage event is raised.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.OnNextStage();
```

### OnPreviousStage
`public override void OnPreviousStage()`

**Purpose:** **Purpose:** Invoked when the previous stage event is raised.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.OnPreviousStage();
```

### OnFinalize
`public override void OnFinalize()`

**Purpose:** **Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.OnFinalize();
```

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to cancel input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.SetCancelInputKey(hotKey);
```

### SetDoneInputKey
`public void SetDoneInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Assigns a new value to done input key and updates the object's internal state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.SetDoneInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(HotKey hotKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.AddCameraControlInputKey(hotKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameKey gameKey)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.AddCameraControlInputKey(gameKey);
```

### AddCameraControlInputKey
`public void AddCameraControlInputKey(GameAxisKey gameAxisKey, TextObject keyName)`

**Purpose:** **Purpose:** Adds camera control input key to the current collection or state.

```csharp
// Obtain an instance of CharacterCreationClanNamingStageVM from the subsystem API first
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.AddCameraControlInputKey(gameAxisKey, keyName);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterCreationClanNamingStageVM characterCreationClanNamingStageVM = ...;
characterCreationClanNamingStageVM.RefreshValues();
```

## See Also

- [Area Index](../)