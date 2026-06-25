---
title: "CharacterViewModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterViewModel : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterViewModel.cs`

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

**Purpose:** Sets the value or state of `equipment`.

### SetEquipment
`public virtual void SetEquipment(Equipment equipment)`

**Purpose:** Sets the value or state of `equipment`.

### FillFrom
`public void FillFrom(BasicCharacterObject character, int seed = -1, string bannerCode = null)`

**Purpose:** Handles logic related to `fill from`.

### FillFrom
`public void FillFrom(CharacterViewModel characterViewModel, int seed = -1)`

**Purpose:** Handles logic related to `fill from`.

### ExecuteEquipWeaponAtIndex
`public void ExecuteEquipWeaponAtIndex(EquipmentIndex index, bool isLeftHand)`

**Purpose:** Executes the `equip weapon at index` operation or workflow.

### ExecuteStartCustomAnimation
`public void ExecuteStartCustomAnimation(string animation, bool loop = false, float loopInterval = 0f)`

**Purpose:** Executes the `start custom animation` operation or workflow.

### ExecuteStopCustomAnimation
`public void ExecuteStopCustomAnimation()`

**Purpose:** Executes the `stop custom animation` operation or workflow.

## Usage Example

```csharp
var vm = new CharacterViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)