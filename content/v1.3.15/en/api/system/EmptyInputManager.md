---
title: "EmptyInputManager"
description: "Auto-generated class reference for EmptyInputManager."
---
# EmptyInputManager

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `internal class EmptyInputManager : IInputManager`
**Base:** `IInputManager`
**File:** `TaleWorlds.InputSystem/EmptyInputManager.cs`

## Overview

`EmptyInputManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `EmptyInputManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ClearKeys
`public void ClearKeys()`

**Purpose:** Removes all `keys` from the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.ClearKeys();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Reads and returns the `click keys` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetClickKeys();
```

### GetClipboardText
`public string GetClipboardText()`

**Purpose:** Reads and returns the `clipboard text` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetClipboardText();
```

### GetControllerType
`public Input.ControllerTypes GetControllerType()`

**Purpose:** Reads and returns the `controller type` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetControllerType();
```

### GetDesktopResolution
`public Vec2 GetDesktopResolution()`

**Purpose:** Reads and returns the `desktop resolution` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetDesktopResolution();
```

### GetGyroX
`public float GetGyroX()`

**Purpose:** Reads and returns the `gyro x` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroX();
```

### GetGyroY
`public float GetGyroY()`

**Purpose:** Reads and returns the `gyro y` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroY();
```

### GetGyroZ
`public float GetGyroZ()`

**Purpose:** Reads and returns the `gyro z` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetGyroZ();
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**Purpose:** Reads and returns the `key state` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetKeyState(key);
```

### GetMouseDeltaZ
`public float GetMouseDeltaZ()`

**Purpose:** Reads and returns the `mouse delta z` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseDeltaZ();
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**Purpose:** Reads and returns the `mouse move x` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**Purpose:** Reads and returns the `mouse move y` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseMoveY();
```

### GetMousePositionX
`public float GetMousePositionX()`

**Purpose:** Reads and returns the `mouse position x` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMousePositionX();
```

### GetMousePositionY
`public float GetMousePositionY()`

**Purpose:** Reads and returns the `mouse position y` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMousePositionY();
```

### GetMouseScrollValue
`public float GetMouseScrollValue()`

**Purpose:** Reads and returns the `mouse scroll value` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseScrollValue();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**Purpose:** Reads and returns the `mouse sensitivity` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetMouseSensitivity();
```

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**Purpose:** Reads and returns the `normalized mouse move x` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**Purpose:** Reads and returns the `normalized mouse move y` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetNormalizedMouseMoveY();
```

### GetResolution
`public Vec2 GetResolution()`

**Purpose:** Reads and returns the `resolution` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetResolution();
```

### GetVirtualKeyCode
`public int GetVirtualKeyCode(InputKey key)`

**Purpose:** Reads and returns the `virtual key code` value held by the current object.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.GetVirtualKeyCode(key);
```

### IsAnyTouchActive
`public bool IsAnyTouchActive()`

**Purpose:** Determines whether the current object is in the `any touch active` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsAnyTouchActive();
```

### IsControllerConnected
`public bool IsControllerConnected()`

**Purpose:** Determines whether the current object is in the `controller connected` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsControllerConnected();
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**Purpose:** Determines whether the current object is in the `key down` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyDown(key);
```

### IsKeyDownImmediate
`public bool IsKeyDownImmediate(InputKey key)`

**Purpose:** Determines whether the current object is in the `key down immediate` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyDownImmediate(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**Purpose:** Determines whether the current object is in the `key pressed` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**Purpose:** Determines whether the current object is in the `key released` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsKeyReleased(key);
```

### IsMouseActive
`public bool IsMouseActive()`

**Purpose:** Determines whether the current object is in the `mouse active` state or condition.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
var result = emptyInputManager.IsMouseActive();
```

### PressKey
`public void PressKey(InputKey key)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.PressKey(key);
```

### SetClipboardText
`public void SetClipboardText(string text)`

**Purpose:** Assigns a new value to `clipboard text` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetClipboardText("example");
```

### SetCursorFriction
`public void SetCursorFriction(float frictionValue)`

**Purpose:** Assigns a new value to `cursor friction` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetCursorFriction(0);
```

### SetCursorPosition
`public void SetCursorPosition(int x, int y)`

**Purpose:** Assigns a new value to `cursor position` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetCursorPosition(0, 0);
```

### SetLightbarColor
`public void SetLightbarColor(float red, float green, float blue)`

**Purpose:** Assigns a new value to `lightbar color` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetLightbarColor(0, 0, 0);
```

### SetRumbleEffect
`public void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**Purpose:** Assigns a new value to `rumble effect` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** Assigns a new value to `trigger feedback` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerVibration
`public void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** Assigns a new value to `trigger vibration` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** Assigns a new value to `trigger weapon effect` and updates the object's internal state.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### UpdateKeyData
`public void UpdateKeyData(byte keyData)`

**Purpose:** Recalculates and stores the latest representation of `key data`.

```csharp
// Obtain an instance of EmptyInputManager from the subsystem API first
EmptyInputManager emptyInputManager = ...;
emptyInputManager.UpdateKeyData(0);
```

## Usage Example

```csharp
var manager = EmptyInputManager.Current;
```

## See Also

- [Area Index](../)