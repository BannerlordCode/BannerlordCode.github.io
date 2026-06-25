---
title: "EngineInputManager"
description: "Auto-generated class reference for EngineInputManager."
---
# EngineInputManager

**Namespace:** TaleWorlds.Engine.InputSystem
**Module:** TaleWorlds.Engine
**Type:** `public class EngineInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `TaleWorlds.Engine/InputSystem/EngineInputManager.cs`

## Overview

`EngineInputManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EngineInputManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**Purpose:** **Purpose:** Assigns a new value to rumble effect and updates the object's internal state.

```csharp
// Obtain an instance of EngineInputManager from the subsystem API first
EngineInputManager engineInputManager = ...;
engineInputManager.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** **Purpose:** Assigns a new value to trigger feedback and updates the object's internal state.

```csharp
// Obtain an instance of EngineInputManager from the subsystem API first
EngineInputManager engineInputManager = ...;
engineInputManager.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** **Purpose:** Assigns a new value to trigger weapon effect and updates the object's internal state.

```csharp
// Obtain an instance of EngineInputManager from the subsystem API first
EngineInputManager engineInputManager = ...;
engineInputManager.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** **Purpose:** Assigns a new value to trigger vibration and updates the object's internal state.

```csharp
// Obtain an instance of EngineInputManager from the subsystem API first
EngineInputManager engineInputManager = ...;
engineInputManager.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**Purpose:** **Purpose:** Assigns a new value to lightbar color and updates the object's internal state.

```csharp
// Obtain an instance of EngineInputManager from the subsystem API first
EngineInputManager engineInputManager = ...;
engineInputManager.SetLightbarColor(0, 0, 0);
```

## Usage Example

```csharp
var manager = EngineInputManager.Current;
```

## See Also

- [Area Index](../)