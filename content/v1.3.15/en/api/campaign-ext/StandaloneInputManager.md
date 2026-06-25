---
title: "StandaloneInputManager"
description: "Auto-generated class reference for StandaloneInputManager."
---
# StandaloneInputManager

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class StandaloneInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `TaleWorlds.TwoDimension.Standalone/StandaloneInputManager.cs`

## Overview

`StandaloneInputManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `StandaloneInputManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**Purpose:** Assigns a new value to rumble effect and updates the object's internal state.

```csharp
// Obtain an instance of StandaloneInputManager from the subsystem API first
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** Assigns a new value to trigger feedback and updates the object's internal state.

```csharp
// Obtain an instance of StandaloneInputManager from the subsystem API first
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** Assigns a new value to trigger weapon effect and updates the object's internal state.

```csharp
// Obtain an instance of StandaloneInputManager from the subsystem API first
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** Assigns a new value to trigger vibration and updates the object's internal state.

```csharp
// Obtain an instance of StandaloneInputManager from the subsystem API first
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**Purpose:** Assigns a new value to lightbar color and updates the object's internal state.

```csharp
// Obtain an instance of StandaloneInputManager from the subsystem API first
StandaloneInputManager standaloneInputManager = ...;
standaloneInputManager.SetLightbarColor(0, 0, 0);
```

## Usage Example

```csharp
var manager = StandaloneInputManager.Current;
```

## See Also

- [Area Index](../)