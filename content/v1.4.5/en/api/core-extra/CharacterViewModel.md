---
title: "CharacterViewModel"
description: "Auto-generated class reference for CharacterViewModel."
---
# CharacterViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

## Overview

`CharacterViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `CharacterViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |
| `IsTableauEnabled` | `public bool IsTableauEnabled { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `HasMount` | `public bool HasMount { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |

## Key Methods

### SetEquipment
`public void SetEquipment(EquipmentIndex index, EquipmentElement item)`

**Purpose:** Assigns a new value to `equipment` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.SetEquipment(index, item);
```

### SetEquipment
`public virtual void SetEquipment(Equipment equipment)`

**Purpose:** Assigns a new value to `equipment` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.SetEquipment(equipment);
```

### FillFrom
`public void FillFrom(BasicCharacterObject character, int seed = -1, string bannerCode = null)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.FillFrom(character, 0, "example");
```

### FillFrom
`public void FillFrom(CharacterViewModel characterViewModel, int seed = -1)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.FillFrom(characterViewModel, 0);
```

### ExecuteEquipWeaponAtIndex
`public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)`

**Purpose:** Runs the operation or workflow associated with `equip weapon at index`.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteEquipWeaponAtIndex(index, false);
```

### ExecuteStartCustomAnimation
`public void ExecuteStartCustomAnimation(string animation, bool loop = false, float loopInterval = 0f)`

**Purpose:** Runs the operation or workflow associated with `start custom animation`.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteStartCustomAnimation("example", false, 0);
```

### ExecuteStopCustomAnimation
`public void ExecuteStopCustomAnimation()`

**Purpose:** Runs the operation or workflow associated with `stop custom animation`.

```csharp
// Obtain an instance of CharacterViewModel from the subsystem API first
CharacterViewModel characterViewModel = ...;
characterViewModel.ExecuteStopCustomAnimation();
```

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
CharacterViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)