---
title: "CharacterTableauTextureProvider"
description: "Auto-generated class reference for CharacterTableauTextureProvider."
---
# CharacterTableauTextureProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.TextureProviders
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableauTextureProvider : TextureProvider`
**Base:** `TextureProvider`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/TextureProviders/CharacterTableauTextureProvider.cs`

## Overview

`CharacterTableauTextureProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.TextureProviders` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CustomAnimationProgressRatio` | `public float CustomAnimationProgressRatio { get; set; }` |
| `BannerCodeText` | `public string BannerCodeText { get; set; }` |
| `BodyProperties` | `public string BodyProperties { get; set; }` |
| `StanceIndex` | `public int StanceIndex { get; set; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Race` | `public int Race { get; set; }` |
| `IsBannerShownInBackground` | `public bool IsBannerShownInBackground { get; set; }` |
| `IsEquipmentAnimActive` | `public bool IsEquipmentAnimActive { get; set; }` |
| `EquipmentCode` | `public string EquipmentCode { get; set; }` |
| `IdleAction` | `public string IdleAction { get; set; }` |
| `IdleFaceAnim` | `public string IdleFaceAnim { get; set; }` |
| `CurrentlyRotating` | `public bool CurrentlyRotating { get; set; }` |
| `MountCreationKey` | `public string MountCreationKey { get; set; }` |
| `ArmorColor1` | `public uint ArmorColor1 { get; set; }` |
| `ArmorColor2` | `public uint ArmorColor2 { get; set; }` |
| `CharStringId` | `public string CharStringId { get; set; }` |
| `TriggerCharacterMountPlacesSwap` | `public bool TriggerCharacterMountPlacesSwap { get; set; }` |
| `CustomRenderScale` | `public float CustomRenderScale { get; set; }` |
| `IsPlayingCustomAnimations` | `public bool IsPlayingCustomAnimations { get; set; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `LeftHandWieldedEquipmentIndex` | `public int LeftHandWieldedEquipmentIndex { get; set; }` |
| `RightHandWieldedEquipmentIndex` | `public int RightHandWieldedEquipmentIndex { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |
| `CustomAnimation` | `public string CustomAnimation { get; set; }` |
| `IsHidden` | `public bool IsHidden { get; set; }` |

## Key Methods

### Clear
`public override void Clear(bool clearNextFrame)`

**Purpose:** Removes all content from the this instance.

```csharp
// Obtain an instance of CharacterTableauTextureProvider from the subsystem API first
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Clear(false);
```

### SetTargetSize
`public override void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to target size and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableauTextureProvider from the subsystem API first
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.SetTargetSize(0, 0);
```

### Tick
`public override void Tick(float dt)`

**Purpose:** Advances the this instance's state by one frame or update cycle.

```csharp
// Obtain an instance of CharacterTableauTextureProvider from the subsystem API first
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Tick(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterTableauTextureProvider characterTableauTextureProvider = ...;
characterTableauTextureProvider.Clear(false);
```

## See Also

- [Area Index](../)