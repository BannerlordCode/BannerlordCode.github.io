---
title: "CharacterTableau"
description: "Auto-generated class reference for CharacterTableau."
---
# CharacterTableau

**Namespace:** TaleWorlds.MountAndBlade.View.Tableaus
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CharacterTableau`
**Base:** none
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.Tableaus/CharacterTableau.cs`

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

**Purpose:** Invoked when the `tick` event is raised.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.OnTick(0);
```

### GetCustomAnimationProgressRatio
`public float GetCustomAnimationProgressRatio()`

**Purpose:** Reads and returns the `custom animation progress ratio` value held by the current object.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
var result = characterTableau.GetCustomAnimationProgressRatio();
```

### SetEnabled
`public void SetEnabled(bool enabled)`

**Purpose:** Assigns a new value to `enabled` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetEnabled(false);
```

### SetLeftHandWieldedEquipmentIndex
`public void SetLeftHandWieldedEquipmentIndex(int index)`

**Purpose:** Assigns a new value to `left hand wielded equipment index` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetLeftHandWieldedEquipmentIndex(0);
```

### SetRightHandWieldedEquipmentIndex
`public void SetRightHandWieldedEquipmentIndex(int index)`

**Purpose:** Assigns a new value to `right hand wielded equipment index` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetRightHandWieldedEquipmentIndex(0);
```

### SetTargetSize
`public void SetTargetSize(int width, int height)`

**Purpose:** Assigns a new value to `target size` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetTargetSize(0, 0);
```

### SetCharStringID
`public void SetCharStringID(string charStringId)`

**Purpose:** Assigns a new value to `char string i d` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetCharStringID("example");
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.OnFinalize();
```

### SetBodyProperties
`public void SetBodyProperties(string bodyPropertiesCode)`

**Purpose:** Assigns a new value to `body properties` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetBodyProperties("example");
```

### SetStanceIndex
`public void SetStanceIndex(int index)`

**Purpose:** Assigns a new value to `stance index` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetStanceIndex(0);
```

### SetCustomRenderScale
`public void SetCustomRenderScale(float value)`

**Purpose:** Assigns a new value to `custom render scale` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetCustomRenderScale(0);
```

### SetIsFemale
`public void SetIsFemale(bool isFemale)`

**Purpose:** Assigns a new value to `is female` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetIsFemale(false);
```

### SetIsBannerShownInBackground
`public void SetIsBannerShownInBackground(bool isBannerShownInBackground)`

**Purpose:** Assigns a new value to `is banner shown in background` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetIsBannerShownInBackground(false);
```

### SetRace
`public void SetRace(int race)`

**Purpose:** Assigns a new value to `race` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetRace(0);
```

### SetIdleAction
`public void SetIdleAction(string idleAction)`

**Purpose:** Assigns a new value to `idle action` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetIdleAction("example");
```

### SetCustomAnimation
`public void SetCustomAnimation(string animation)`

**Purpose:** Assigns a new value to `custom animation` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetCustomAnimation("example");
```

### StartCustomAnimation
`public void StartCustomAnimation()`

**Purpose:** Starts the `custom animation` flow or state machine.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.StartCustomAnimation();
```

### StopCustomAnimation
`public void StopCustomAnimation()`

**Purpose:** Stops the `custom animation` flow or state machine.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.StopCustomAnimation();
```

### SetIdleFaceAnim
`public void SetIdleFaceAnim(string idleFaceAnim)`

**Purpose:** Assigns a new value to `idle face anim` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetIdleFaceAnim("example");
```

### SetEquipmentCode
`public void SetEquipmentCode(string equipmentCode)`

**Purpose:** Assigns a new value to `equipment code` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetEquipmentCode("example");
```

### SetIsEquipmentAnimActive
`public void SetIsEquipmentAnimActive(bool value)`

**Purpose:** Assigns a new value to `is equipment anim active` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetIsEquipmentAnimActive(false);
```

### SetMountCreationKey
`public void SetMountCreationKey(string value)`

**Purpose:** Assigns a new value to `mount creation key` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetMountCreationKey("example");
```

### SetBannerCode
`public void SetBannerCode(string value)`

**Purpose:** Assigns a new value to `banner code` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetBannerCode("example");
```

### SetArmorColor1
`public void SetArmorColor1(uint clothColor1)`

**Purpose:** Assigns a new value to `armor color1` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetArmorColor1(0);
```

### SetArmorColor2
`public void SetArmorColor2(uint clothColor2)`

**Purpose:** Assigns a new value to `armor color2` and updates the object's internal state.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.SetArmorColor2(0);
```

### RotateCharacter
`public void RotateCharacter(bool value)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.RotateCharacter(false);
```

### TriggerCharacterMountPlacesSwap
`public void TriggerCharacterMountPlacesSwap()`

**Purpose:** Triggers the logic or event associated with `character mount places swap`.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.TriggerCharacterMountPlacesSwap();
```

### OnCharacterTableauMouseMove
`public void OnCharacterTableauMouseMove(int mouseMoveX)`

**Purpose:** Invoked when the `character tableau mouse move` event is raised.

```csharp
// Obtain an instance of CharacterTableau from the subsystem API first
CharacterTableau characterTableau = ...;
characterTableau.OnCharacterTableauMouseMove(0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterTableau characterTableau = ...;
characterTableau.OnTick(0);
```

## See Also

- [Area Index](../)