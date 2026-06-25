---
title: "Input"
description: "Auto-generated class reference for Input."
---
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input`
**Base:** none
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Input.cs`

## Overview

`Input` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InputState` | `public static InputState InputState { get; }` |
| `DebugInput` | `public static IInputContext DebugInput { get; }` |
| `InputManager` | `public static IInputManager InputManager { get; }` |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive { get; set; }` |
| `IsGamepadActive` | `public static bool IsGamepadActive { get; }` |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive { get; }` |
| `ControllerType` | `public static ControllerTypes ControllerType { get; }` |
| `IsMousePositionUpdated` | `public static bool IsMousePositionUpdated { get; }` |
| `IsMouseScrollChanged` | `public static bool IsMouseScrollChanged { get; }` |

## Key Methods

### IsPlaystation
`public static bool IsPlaystation(this ControllerTypes controllerType)`

**Purpose:** **Purpose:** Determines whether the this instance is in the playstation state or condition.

```csharp
// Static call; no instance required
Input.IsPlaystation(controllerType);
```

### Initialize
`public static void Initialize(IInputManager inputManager, IInputContext debugInput)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
Input.Initialize(inputManager, debugInput);
```

### UpdateKeyData
`public static void UpdateKeyData(byte keyData)`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of key data.

```csharp
// Static call; no instance required
Input.UpdateKeyData(0);
```

### GetMouseMoveX
`public static float GetMouseMoveX()`

**Purpose:** **Purpose:** Reads and returns the mouse move x value held by the this instance.

```csharp
// Static call; no instance required
Input.GetMouseMoveX();
```

### GetMouseMoveY
`public static float GetMouseMoveY()`

**Purpose:** **Purpose:** Reads and returns the mouse move y value held by the this instance.

```csharp
// Static call; no instance required
Input.GetMouseMoveY();
```

### GetNormalizedMouseMoveX
`public static float GetNormalizedMouseMoveX()`

**Purpose:** **Purpose:** Reads and returns the normalized mouse move x value held by the this instance.

```csharp
// Static call; no instance required
Input.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public static float GetNormalizedMouseMoveY()`

**Purpose:** **Purpose:** Reads and returns the normalized mouse move y value held by the this instance.

```csharp
// Static call; no instance required
Input.GetNormalizedMouseMoveY();
```

### GetGyroX
`public static float GetGyroX()`

**Purpose:** **Purpose:** Reads and returns the gyro x value held by the this instance.

```csharp
// Static call; no instance required
Input.GetGyroX();
```

### GetGyroY
`public static float GetGyroY()`

**Purpose:** **Purpose:** Reads and returns the gyro y value held by the this instance.

```csharp
// Static call; no instance required
Input.GetGyroY();
```

### GetGyroZ
`public static float GetGyroZ()`

**Purpose:** **Purpose:** Reads and returns the gyro z value held by the this instance.

```csharp
// Static call; no instance required
Input.GetGyroZ();
```

### GetKeyState
`public static Vec2 GetKeyState(InputKey key)`

**Purpose:** **Purpose:** Reads and returns the key state value held by the this instance.

```csharp
// Static call; no instance required
Input.GetKeyState(key);
```

### IsKeyPressed
`public static bool IsKeyPressed(InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the key pressed state or condition.

```csharp
// Static call; no instance required
Input.IsKeyPressed(key);
```

### IsKeyDown
`public static bool IsKeyDown(InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the key down state or condition.

```csharp
// Static call; no instance required
Input.IsKeyDown(key);
```

### IsKeyDownImmediate
`public static bool IsKeyDownImmediate(InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the key down immediate state or condition.

```csharp
// Static call; no instance required
Input.IsKeyDownImmediate(key);
```

### IsKeyReleased
`public static bool IsKeyReleased(InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the key released state or condition.

```csharp
// Static call; no instance required
Input.IsKeyReleased(key);
```

### IsControlOrShiftNotDown
`public static bool IsControlOrShiftNotDown()`

**Purpose:** **Purpose:** Determines whether the this instance is in the control or shift not down state or condition.

```csharp
// Static call; no instance required
Input.IsControlOrShiftNotDown();
```

### GetPrimaryControllerType
`public static ControllerTypes GetPrimaryControllerType()`

**Purpose:** **Purpose:** Reads and returns the primary controller type value held by the this instance.

```csharp
// Static call; no instance required
Input.GetPrimaryControllerType();
```

### GetFirstKeyPressedInRange
`public static int GetFirstKeyPressedInRange(int startKeyNo)`

**Purpose:** **Purpose:** Reads and returns the first key pressed in range value held by the this instance.

```csharp
// Static call; no instance required
Input.GetFirstKeyPressedInRange(0);
```

### GetFirstKeyDownInRange
`public static int GetFirstKeyDownInRange(int startKeyNo)`

**Purpose:** **Purpose:** Reads and returns the first key down in range value held by the this instance.

```csharp
// Static call; no instance required
Input.GetFirstKeyDownInRange(0);
```

### GetFirstKeyReleasedInRange
`public static int GetFirstKeyReleasedInRange(int startKeyNo)`

**Purpose:** **Purpose:** Reads and returns the first key released in range value held by the this instance.

```csharp
// Static call; no instance required
Input.GetFirstKeyReleasedInRange(0);
```

### PressKey
`public static void PressKey(InputKey key)`

**Purpose:** **Purpose:** Executes the PressKey logic.

```csharp
// Static call; no instance required
Input.PressKey(key);
```

### ClearKeys
`public static void ClearKeys()`

**Purpose:** **Purpose:** Removes all keys from the this instance.

```csharp
// Static call; no instance required
Input.ClearKeys();
```

### GetVirtualKeyCode
`public static int GetVirtualKeyCode(InputKey key)`

**Purpose:** **Purpose:** Reads and returns the virtual key code value held by the this instance.

```csharp
// Static call; no instance required
Input.GetVirtualKeyCode(key);
```

### IsDown
`public static bool IsDown(this InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the down state or condition.

```csharp
// Static call; no instance required
Input.IsDown(key);
```

### IsPressed
`public static bool IsPressed(this InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the pressed state or condition.

```csharp
// Static call; no instance required
Input.IsPressed(key);
```

### IsReleased
`public static bool IsReleased(this InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the released state or condition.

```csharp
// Static call; no instance required
Input.IsReleased(key);
```

### SetClipboardText
`public static void SetClipboardText(string text)`

**Purpose:** **Purpose:** Assigns a new value to clipboard text and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetClipboardText("example");
```

### GetClipboardText
`public static string GetClipboardText()`

**Purpose:** **Purpose:** Reads and returns the clipboard text value held by the this instance.

```csharp
// Static call; no instance required
Input.GetClipboardText();
```

### Update
`public static void Update()`

**Purpose:** **Purpose:** Recalculates and stores the latest representation of the this instance.

```csharp
// Static call; no instance required
Input.Update();
```

### IsControllerKey
`public static bool IsControllerKey(InputKey key)`

**Purpose:** **Purpose:** Determines whether the this instance is in the controller key state or condition.

```csharp
// Static call; no instance required
Input.IsControllerKey(key);
```

### SetMousePosition
`public static void SetMousePosition(int x, int y)`

**Purpose:** **Purpose:** Assigns a new value to mouse position and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetMousePosition(0, 0);
```

### SetCursorFriction
`public static void SetCursorFriction(float frictionValue)`

**Purpose:** **Purpose:** Assigns a new value to cursor friction and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetCursorFriction(0);
```

### GetClickKeys
`public static InputKey GetClickKeys()`

**Purpose:** **Purpose:** Reads and returns the click keys value held by the this instance.

```csharp
// Static call; no instance required
Input.GetClickKeys();
```

### SetRumbleEffect
`public static void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**Purpose:** **Purpose:** Assigns a new value to rumble effect and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetRumbleEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerFeedback
`public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** **Purpose:** Assigns a new value to trigger feedback and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetTriggerFeedback(0, 0, 0, 0);
```

### SetTriggerWeaponEffect
`public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** **Purpose:** Assigns a new value to trigger weapon effect and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetTriggerWeaponEffect(0, 0, 0, 0, 0, 0);
```

### SetTriggerVibration
`public static void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** **Purpose:** Assigns a new value to trigger vibration and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetTriggerVibration(0, 0, 0, 0, 0, 0, 0, 0);
```

### SetLightbarColor
`public static void SetLightbarColor(float red, float green, float blue)`

**Purpose:** **Purpose:** Assigns a new value to lightbar color and updates the object's internal state.

```csharp
// Static call; no instance required
Input.SetLightbarColor(0, 0, 0);
```

## Usage Example

```csharp
Input.IsPlaystation(controllerType);
```

## See Also

- [Area Index](../)