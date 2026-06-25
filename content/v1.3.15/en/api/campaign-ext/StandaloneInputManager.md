---
title: "StandaloneInputManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StandaloneInputManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Sets the value or state of `rumble effect`.

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** Sets the value or state of `trigger feedback`.

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** Sets the value or state of `trigger weapon effect`.

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** Sets the value or state of `trigger vibration`.

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**Purpose:** Sets the value or state of `lightbar color`.

## Usage Example

```csharp
var manager = StandaloneInputManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)