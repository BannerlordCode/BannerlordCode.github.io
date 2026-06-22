<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Input`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Input

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `Input` is a class in the `TaleWorlds.InputSystem` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public static bool IsPlaystation(this Input.ControllerTypes controllerType)
```

### Initialize

```csharp
public static void Initialize(IInputManager inputManager, IInputContext debugInput)
```

### UpdateKeyData

```csharp
public static void UpdateKeyData(byte keyData)
```

### GetMouseMoveX

```csharp
public static float GetMouseMoveX()
```

### GetMouseMoveY

```csharp
public static float GetMouseMoveY()
```

### GetNormalizedMouseMoveX

```csharp
public static float GetNormalizedMouseMoveX()
```

### GetNormalizedMouseMoveY

```csharp
public static float GetNormalizedMouseMoveY()
```

### GetGyroX

```csharp
public static float GetGyroX()
```

### GetGyroY

```csharp
public static float GetGyroY()
```

### GetGyroZ

```csharp
public static float GetGyroZ()
```

### GetKeyState

```csharp
public static Vec2 GetKeyState(InputKey key)
```

### IsKeyPressed

```csharp
public static bool IsKeyPressed(InputKey key)
```

### IsKeyDown

```csharp
public static bool IsKeyDown(InputKey key)
```

### IsKeyDownImmediate

```csharp
public static bool IsKeyDownImmediate(InputKey key)
```

### IsKeyReleased

```csharp
public static bool IsKeyReleased(InputKey key)
```

### IsControlOrShiftNotDown

```csharp
public static bool IsControlOrShiftNotDown()
```

### GetPrimaryControllerType

```csharp
public static Input.ControllerTypes GetPrimaryControllerType()
```

### GetFirstKeyPressedInRange

```csharp
public static int GetFirstKeyPressedInRange(int startKeyNo)
```

### GetFirstKeyDownInRange

```csharp
public static int GetFirstKeyDownInRange(int startKeyNo)
```

### GetFirstKeyReleasedInRange

```csharp
public static int GetFirstKeyReleasedInRange(int startKeyNo)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)