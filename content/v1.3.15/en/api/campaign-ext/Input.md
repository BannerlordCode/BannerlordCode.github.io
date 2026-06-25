---
title: "Input"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Input`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public static class Input`
**Area:** campaign-ext

## Overview

`Input` lives in `TaleWorlds.InputSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `InputState` | `public static InputState InputState { get; }` |
| `DebugInput` | `public static IInputContext DebugInput { get; }` |
| `InputManager` | `public static IInputManager InputManager { get; }` |
| `Resolution` | `public static Vec2 Resolution { get; }` |
| `DesktopResolution` | `public static Vec2 DesktopResolution { get; }` |
| `IsOnScreenKeyboardActive` | `public static bool IsOnScreenKeyboardActive { get; set; }` |
| `IsMouseActive` | `public static bool IsMouseActive { get; }` |
| `IsControllerConnected` | `public static bool IsControllerConnected { get; }` |
| `IsGamepadActive` | `public static bool IsGamepadActive { get; }` |
| `IsAnyTouchActive` | `public static bool IsAnyTouchActive { get; }` |
| `ControllerType` | `public static Input.ControllerTypes ControllerType { get; }` |
| `MouseMoveX` | `public static float MouseMoveX { get; }` |
| `MouseMoveY` | `public static float MouseMoveY { get; }` |
| `GyroX` | `public static float GyroX { get; }` |
| `GyroY` | `public static float GyroY { get; }` |
| `GyroZ` | `public static float GyroZ { get; }` |
| `MouseSensitivity` | `public static float MouseSensitivity { get; }` |
| `DeltaMouseScroll` | `public static float DeltaMouseScroll { get; }` |
| `MousePositionRanged` | `public static Vec2 MousePositionRanged { get; }` |
| `MousePositionPixel` | `public static Vec2 MousePositionPixel { get; }` |

## Key Methods

### IsPlaystation
`public static bool IsPlaystation(this Input.ControllerTypes controllerType)`

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
`public static Input.ControllerTypes GetPrimaryControllerType()`

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

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
Input.IsPlaystation(controllerType);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
