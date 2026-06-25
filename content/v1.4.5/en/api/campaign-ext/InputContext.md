---
title: "InputContext"
description: "Auto-generated class reference for InputContext."
---
# InputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public class InputContext : IInputContext`
**Base:** `IInputContext`
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/InputContext.cs`

## Overview

`InputContext` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsKeysAllowed` | `public bool IsKeysAllowed { get; set; }` |
| `IsMouseButtonAllowed` | `public bool IsMouseButtonAllowed { get; set; }` |
| `IsMouseWheelAllowed` | `public bool IsMouseWheelAllowed { get; set; }` |
| `MouseOnMe` | `public bool MouseOnMe { get; set; }` |

## Key Methods

### GetPointerX
`public int GetPointerX()`

**Purpose:** Reads and returns the pointer x value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetPointerX();
```

### GetPointerY
`public int GetPointerY()`

**Purpose:** Reads and returns the pointer y value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetPointerY();
```

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**Purpose:** Reads and returns the pointer position value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetPointerPosition();
```

### GetPointerPositionVec2
`public Vec2 GetPointerPositionVec2()`

**Purpose:** Reads and returns the pointer position vec2 value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetPointerPositionVec2();
```

### RegisterHotKeyCategory
`public void RegisterHotKeyCategory(GameKeyContext category)`

**Purpose:** Registers hot key category with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
inputContext.RegisterHotKeyCategory(category);
```

### IsCategoryRegistered
`public bool IsCategoryRegistered(GameKeyContext category)`

**Purpose:** Determines whether the this instance is in the category registered state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsCategoryRegistered(category);
```

### RegisterDownKeys
`public void RegisterDownKeys()`

**Purpose:** Registers down keys with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
inputContext.RegisterDownKeys();
```

### UnregisterReleasedKeys
`public void UnregisterReleasedKeys()`

**Purpose:** Unregisters released keys from the current system.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
inputContext.UnregisterReleasedKeys();
```

### ResetLastDownKeys
`public void ResetLastDownKeys()`

**Purpose:** Returns last down keys to its default or initial condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
inputContext.ResetLastDownKeys();
```

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsHotKeyDown("example");
```

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsGameKeyDown(0);
```

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key down immediate state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsGameKeyDownImmediate(0);
```

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key pressed state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsHotKeyPressed("example");
```

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key pressed state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsGameKeyPressed(0);
```

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key released state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsHotKeyReleased("example");
```

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key released state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsGameKeyReleased(0);
```

### GetGameKeyState
`public float GetGameKeyState(int gameKey)`

**Purpose:** Reads and returns the game key state value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetGameKeyState(0);
```

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key double pressed state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsHotKeyDoublePressed("example");
```

### GetGameKeyAxis
`public float GetGameKeyAxis(GameAxisKey gameKey)`

**Purpose:** Reads and returns the game key axis value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetGameKeyAxis(gameKey);
```

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameKey)`

**Purpose:** Reads and returns the game key axis value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetGameKeyAxis("example");
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**Purpose:** Reads and returns the key state value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetKeyState(key);
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**Purpose:** Determines whether the this instance is in the key down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsKeyDown(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**Purpose:** Determines whether the this instance is in the key pressed state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**Purpose:** Determines whether the this instance is in the key released state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsKeyReleased(key);
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**Purpose:** Reads and returns the mouse move x value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**Purpose:** Reads and returns the mouse move y value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetMouseMoveY();
```

### GetNormalizedMouseMoveX
`public float GetNormalizedMouseMoveX()`

**Purpose:** Reads and returns the normalized mouse move x value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetNormalizedMouseMoveX();
```

### GetNormalizedMouseMoveY
`public float GetNormalizedMouseMoveY()`

**Purpose:** Reads and returns the normalized mouse move y value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetNormalizedMouseMoveY();
```

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**Purpose:** Reads and returns the controller right stick state value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetControllerRightStickState();
```

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**Purpose:** Reads and returns the controller left stick state value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetControllerLeftStickState();
```

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Reads and returns the is mouse active value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetIsMouseActive();
```

### GetIsMouseDown
`public bool GetIsMouseDown()`

**Purpose:** Reads and returns the is mouse down value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetIsMouseDown();
```

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**Purpose:** Reads and returns the mouse position pixel value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetMousePositionPixel();
```

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**Purpose:** Reads and returns the delta mouse scroll value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetDeltaMouseScroll();
```

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**Purpose:** Reads and returns the is controller connected value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetIsControllerConnected();
```

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**Purpose:** Reads and returns the mouse position ranged value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetMousePositionRanged();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**Purpose:** Reads and returns the mouse sensitivity value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetMouseSensitivity();
```

### IsControlDown
`public bool IsControlDown()`

**Purpose:** Determines whether the this instance is in the control down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsControlDown();
```

### IsShiftDown
`public bool IsShiftDown()`

**Purpose:** Determines whether the this instance is in the shift down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsShiftDown();
```

### IsAltDown
`public bool IsAltDown()`

**Purpose:** Determines whether the this instance is in the alt down state or condition.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.IsAltDown();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Reads and returns the click keys value held by the this instance.

```csharp
// Obtain an instance of InputContext from the subsystem API first
InputContext inputContext = ...;
var result = inputContext.GetClickKeys();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
InputContext inputContext = ...;
inputContext.GetPointerX();
```

## See Also

- [Area Index](../)