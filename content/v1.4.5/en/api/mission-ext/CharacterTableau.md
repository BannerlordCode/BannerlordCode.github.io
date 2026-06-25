---
title: "CharacterTableau"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterTableau`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableau`
**Base:** none
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/CharacterTableau.cs`

## Overview

`CharacterTableau` lives in `TaleWorlds.MountAndBlade.View.Tableaus` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.Tableaus` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Texture` | `public Texture Texture { get; }` |
| `IsRunningCustomAnimation` | `public bool IsRunningCustomAnimation { get; }` |
| `ShouldLoopCustomAnimation` | `public bool ShouldLoopCustomAnimation { get; set; }` |
| `CustomAnimationWaitDuration` | `public float CustomAnimationWaitDuration { get; set; }` |

## Key Methods

### OnTick
`public void OnTick(float dt)`

**Purpose:** Called when the `tick` event is raised.

### GetCustomAnimationProgressRatio
`public float GetCustomAnimationProgressRatio()`

**Purpose:** Gets the current value of `custom animation progress ratio`.

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** Sets the value or state of `enabled`.

### SetLeftHandWieldedEquipmentIndex
`public void SetLeftHandWieldedEquipmentIndex(int index)`

**Purpose:** Sets the value or state of `left hand wielded equipment index`.

### SetRightHandWieldedEquipmentIndex
`public void SetRightHandWieldedEquipmentIndex(int index)`

**Purpose:** Sets the value or state of `right hand wielded equipment index`.

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Sets the value or state of `target size`.

### SetCharStringID
`public void SetCharStringID(string charStringId)`

**Purpose:** Sets the value or state of `char string i d`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### SetBodyProperties
`public void SetBodyProperties(string bodyPropertiesCode)`

**Purpose:** Sets the value or state of `body properties`.

### SetStanceIndex
`public void SetStanceIndex(int index)`

**Purpose:** Sets the value or state of `stance index`.

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**Purpose:** Sets the value or state of `custom render scale`.

### SetIsFemale
`public void SetIsFemale(bool isFemale)`

**Purpose:** Sets the value or state of `is female`.

### SetIsBannerShownInBackground
`public void SetIsBannerShownInBackground(bool isBannerShownInBackground)`

**Purpose:** Sets the value or state of `is banner shown in background`.

### SetRace
`public void SetRace(int race)`

**Purpose:** Sets the value or state of `race`.

### SetIdleAction
`public void SetIdleAction(string idleAction)`

**Purpose:** Sets the value or state of `idle action`.

### SetCustomAnimation
`public void SetCustomAnimation(string animation)`

**Purpose:** Sets the value or state of `custom animation`.

### StartCustomAnimation
`public void StartCustomAnimation()`

**Purpose:** Handles logic related to `start custom animation`.

### StopCustomAnimation
`public void StopCustomAnimation()`

**Purpose:** Handles logic related to `stop custom animation`.

### SetIdleFaceAnim
`public void SetIdleFaceAnim(string idleFaceAnim)`

**Purpose:** Sets the value or state of `idle face anim`.

### SetEquipmentCode
`public void SetEquipmentCode(string equipmentCode)`

**Purpose:** Sets the value or state of `equipment code`.

### SetIsEquipmentAnimActive
`public void SetIsEquipmentAnimActive(bool value)`

**Purpose:** Sets the value or state of `is equipment anim active`.

### SetMountCreationKey
`public void SetMountCreationKey(string value)`

**Purpose:** Sets the value or state of `mount creation key`.

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Sets the value or state of `banner code`.

### SetArmorColor1
`public void SetArmorColor1(uint clothColor1)`

**Purpose:** Sets the value or state of `armor color1`.

### SetArmorColor2
`public void SetArmorColor2(uint clothColor2)`

**Purpose:** Sets the value or state of `armor color2`.

### RotateCharacter
`public void RotateCharacter(bool value)`

**Purpose:** Handles logic related to `rotate character`.

### TriggerCharacterMountPlacesSwap
`public void TriggerCharacterMountPlacesSwap()`

**Purpose:** Handles logic related to `trigger character mount places swap`.

### OnCharacterTableauMouseMove
`public void OnCharacterTableauMouseMove(int mouseMoveX)`

**Purpose:** Called when the `character tableau mouse move` event is raised.

## Usage Example

```csharp
var value = new CharacterTableau();
value.OnTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)