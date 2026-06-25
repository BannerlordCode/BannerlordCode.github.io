---
title: "EmptyInputContext"
description: "Auto-generated class reference for EmptyInputContext."
---
# EmptyInputContext

**Namespace:** TaleWorlds.InputSystem
**Module:** TaleWorlds.InputSystem
**Type:** `public sealed class EmptyInputContext : IInputContext`
**Base:** `IInputContext`
**File:** `bin/TaleWorlds.InputSystem/TaleWorlds.InputSystem/EmptyInputContext.cs`

## Overview

`EmptyInputContext` lives in `TaleWorlds.InputSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.InputSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetPointerX
`public int GetPointerX()`

**Purpose:** Reads and returns the pointer x value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerX();
```

### GetPointerY
`public int GetPointerY()`

**Purpose:** Reads and returns the pointer y value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerY();
```

### GetPointerPosition
`public Vector2 GetPointerPosition()`

**Purpose:** Reads and returns the pointer position value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetPointerPosition();
```

### IsGameKeyDown
`public bool IsGameKeyDown(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyDown(0);
```

### IsGameKeyDownImmediate
`public bool IsGameKeyDownImmediate(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key down immediate state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyDownImmediate(0);
```

### IsGameKeyPressed
`public bool IsGameKeyPressed(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key pressed state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyPressed(0);
```

### IsGameKeyReleased
`public bool IsGameKeyReleased(int gameKey)`

**Purpose:** Determines whether the this instance is in the game key released state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsGameKeyReleased(0);
```

### GetGameKeyAxis
`public float GetGameKeyAxis(string gameAxisKey)`

**Purpose:** Reads and returns the game key axis value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetGameKeyAxis("example");
```

### IsHotKeyDown
`public bool IsHotKeyDown(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyDown("example");
```

### IsHotKeyReleased
`public bool IsHotKeyReleased(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key released state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyReleased("example");
```

### IsHotKeyPressed
`public bool IsHotKeyPressed(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key pressed state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyPressed("example");
```

### IsHotKeyDoublePressed
`public bool IsHotKeyDoublePressed(string hotKey)`

**Purpose:** Determines whether the this instance is in the hot key double pressed state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsHotKeyDoublePressed("example");
```

### GetKeyState
`public Vec2 GetKeyState(InputKey key)`

**Purpose:** Reads and returns the key state value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetKeyState(key);
```

### IsKeyDown
`public bool IsKeyDown(InputKey key)`

**Purpose:** Determines whether the this instance is in the key down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyDown(key);
```

### IsKeyPressed
`public bool IsKeyPressed(InputKey key)`

**Purpose:** Determines whether the this instance is in the key pressed state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyPressed(key);
```

### IsKeyReleased
`public bool IsKeyReleased(InputKey key)`

**Purpose:** Determines whether the this instance is in the key released state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsKeyReleased(key);
```

### GetMouseMoveX
`public float GetMouseMoveX()`

**Purpose:** Reads and returns the mouse move x value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseMoveX();
```

### GetMouseMoveY
`public float GetMouseMoveY()`

**Purpose:** Reads and returns the mouse move y value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseMoveY();
```

### GetIsMouseActive
`public bool GetIsMouseActive()`

**Purpose:** Reads and returns the is mouse active value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetIsMouseActive();
```

### GetMousePositionPixel
`public Vec2 GetMousePositionPixel()`

**Purpose:** Reads and returns the mouse position pixel value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMousePositionPixel();
```

### GetDeltaMouseScroll
`public float GetDeltaMouseScroll()`

**Purpose:** Reads and returns the delta mouse scroll value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetDeltaMouseScroll();
```

### GetIsControllerConnected
`public bool GetIsControllerConnected()`

**Purpose:** Reads and returns the is controller connected value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetIsControllerConnected();
```

### GetMousePositionRanged
`public Vec2 GetMousePositionRanged()`

**Purpose:** Reads and returns the mouse position ranged value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMousePositionRanged();
```

### GetMouseSensitivity
`public float GetMouseSensitivity()`

**Purpose:** Reads and returns the mouse sensitivity value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetMouseSensitivity();
```

### IsControlDown
`public bool IsControlDown()`

**Purpose:** Determines whether the this instance is in the control down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsControlDown();
```

### IsShiftDown
`public bool IsShiftDown()`

**Purpose:** Determines whether the this instance is in the shift down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsShiftDown();
```

### IsAltDown
`public bool IsAltDown()`

**Purpose:** Determines whether the this instance is in the alt down state or condition.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.IsAltDown();
```

### GetControllerRightStickState
`public Vec2 GetControllerRightStickState()`

**Purpose:** Reads and returns the controller right stick state value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetControllerRightStickState();
```

### GetControllerLeftStickState
`public Vec2 GetControllerLeftStickState()`

**Purpose:** Reads and returns the controller left stick state value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetControllerLeftStickState();
```

### GetClickKeys
`public InputKey GetClickKeys()`

**Purpose:** Reads and returns the click keys value held by the this instance.

```csharp
// Obtain an instance of EmptyInputContext from the subsystem API first
EmptyInputContext emptyInputContext = ...;
var result = emptyInputContext.GetClickKeys();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EmptyInputContext emptyInputContext = ...;
emptyInputContext.GetPointerX();
```

## See Also

- [Area Index](../)