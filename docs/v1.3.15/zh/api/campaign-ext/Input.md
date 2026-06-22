<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Input`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# Input

**命名空间:** TaleWorlds.InputSystem
**模块:** TaleWorlds.InputSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`Input` 是 `TaleWorlds.InputSystem` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

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


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)