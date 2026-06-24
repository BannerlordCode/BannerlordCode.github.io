<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Input`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/Input.cs`

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

**Purpose:** Handles logic related to `is playstation`.

### Initialize
`public static void Initialize(IInputManager inputManager, IInputContext debugInput)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### UpdateKeyData
`public static void UpdateKeyData(byte keyData)`

**Purpose:** Updates the state or data of `key data`.

### GetMouseMoveX
`public static float GetMouseMoveX()`

**Purpose:** Gets the current value of `mouse move x`.

### GetMouseMoveY
`public static float GetMouseMoveY()`

**Purpose:** Gets the current value of `mouse move y`.

### GetNormalizedMouseMoveX
`public static float GetNormalizedMouseMoveX()`

**Purpose:** Gets the current value of `normalized mouse move x`.

### GetNormalizedMouseMoveY
`public static float GetNormalizedMouseMoveY()`

**Purpose:** Gets the current value of `normalized mouse move y`.

### GetGyroX
`public static float GetGyroX()`

**Purpose:** Gets the current value of `gyro x`.

### GetGyroY
`public static float GetGyroY()`

**Purpose:** Gets the current value of `gyro y`.

### GetGyroZ
`public static float GetGyroZ()`

**Purpose:** Gets the current value of `gyro z`.

### GetKeyState
`public static Vec2 GetKeyState(InputKey key)`

**Purpose:** Gets the current value of `key state`.

### IsKeyPressed
`public static bool IsKeyPressed(InputKey key)`

**Purpose:** Handles logic related to `is key pressed`.

### IsKeyDown
`public static bool IsKeyDown(InputKey key)`

**Purpose:** Handles logic related to `is key down`.

### IsKeyDownImmediate
`public static bool IsKeyDownImmediate(InputKey key)`

**Purpose:** Handles logic related to `is key down immediate`.

### IsKeyReleased
`public static bool IsKeyReleased(InputKey key)`

**Purpose:** Handles logic related to `is key released`.

### IsControlOrShiftNotDown
`public static bool IsControlOrShiftNotDown()`

**Purpose:** Handles logic related to `is control or shift not down`.

### GetPrimaryControllerType
`public static ControllerTypes GetPrimaryControllerType()`

**Purpose:** Gets the current value of `primary controller type`.

### GetFirstKeyPressedInRange
`public static int GetFirstKeyPressedInRange(int startKeyNo)`

**Purpose:** Gets the current value of `first key pressed in range`.

### GetFirstKeyDownInRange
`public static int GetFirstKeyDownInRange(int startKeyNo)`

**Purpose:** Gets the current value of `first key down in range`.

### GetFirstKeyReleasedInRange
`public static int GetFirstKeyReleasedInRange(int startKeyNo)`

**Purpose:** Gets the current value of `first key released in range`.

### PressKey
`public static void PressKey(InputKey key)`

**Purpose:** Handles logic related to `press key`.

### ClearKeys
`public static void ClearKeys()`

**Purpose:** Handles logic related to `clear keys`.

### GetVirtualKeyCode
`public static int GetVirtualKeyCode(InputKey key)`

**Purpose:** Gets the current value of `virtual key code`.

### IsDown
`public static bool IsDown(this InputKey key)`

**Purpose:** Handles logic related to `is down`.

### IsPressed
`public static bool IsPressed(this InputKey key)`

**Purpose:** Handles logic related to `is pressed`.

### IsReleased
`public static bool IsReleased(this InputKey key)`

**Purpose:** Handles logic related to `is released`.

### SetClipboardText
`public static void SetClipboardText(string text)`

**Purpose:** Sets the value or state of `clipboard text`.

### GetClipboardText
`public static string GetClipboardText()`

**Purpose:** Gets the current value of `clipboard text`.

### Update
`public static void Update()`

**Purpose:** Updates the state or data of `update`.

### IsControllerKey
`public static bool IsControllerKey(InputKey key)`

**Purpose:** Handles logic related to `is controller key`.

### SetMousePosition
`public static void SetMousePosition(int x, int y)`

**Purpose:** Sets the value or state of `mouse position`.

### SetCursorFriction
`public static void SetCursorFriction(float frictionValue)`

**Purpose:** Sets the value or state of `cursor friction`.

### GetClickKeys
`public static InputKey GetClickKeys()`

**Purpose:** Gets the current value of `click keys`.

### SetRumbleEffect
`public static void SetRumbleEffect(float lowFrequencyLevels, float lowFrequencyDurations, int numLowFrequencyElements, float highFrequencyLevels, float highFrequencyDurations, int numHighFrequencyElements)`

**Purpose:** Sets the value or state of `rumble effect`.

### SetTriggerFeedback
`public static void SetTriggerFeedback(byte leftTriggerPosition, byte leftTriggerStrength, byte rightTriggerPosition, byte rightTriggerStrength)`

**Purpose:** Sets the value or state of `trigger feedback`.

### SetTriggerWeaponEffect
`public static void SetTriggerWeaponEffect(byte leftStartPosition, byte leftEnd_position, byte leftStrength, byte rightStartPosition, byte rightEndPosition, byte rightStrength)`

**Purpose:** Sets the value or state of `trigger weapon effect`.

### SetTriggerVibration
`public static void SetTriggerVibration(float leftTriggerAmplitudes, float leftTriggerFrequencies, float leftTriggerDurations, int numLeftTriggerElements, float rightTriggerAmplitudes, float rightTriggerFrequencies, float rightTriggerDurations, int numRightTriggerElements)`

**Purpose:** Sets the value or state of `trigger vibration`.

### SetLightbarColor
`public static void SetLightbarColor(float red, float green, float blue)`

**Purpose:** Sets the value or state of `lightbar color`.

## Usage Example

```csharp
Input.IsPlaystation(controllerType);
```

## See Also

- [Complete Class Catalog](../catalog)