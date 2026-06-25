---
title: "MouseManager"
description: "Auto-generated class reference for MouseManager."
---
# MouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MouseManager`
**Base:** none
**File:** `TaleWorlds.Engine/MouseManager.cs`

## Overview

`MouseManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MouseManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### ActivateMouseCursor
`public static void ActivateMouseCursor(CursorType mouseId)`

**Purpose:** **Purpose:** Activates the resource, state, or feature associated with mouse cursor.

```csharp
// Static call; no instance required
MouseManager.ActivateMouseCursor(mouseId);
```

### SetMouseCursor
`public static void SetMouseCursor(CursorType mouseId, string mousePath)`

**Purpose:** **Purpose:** Assigns a new value to mouse cursor and updates the object's internal state.

```csharp
// Static call; no instance required
MouseManager.SetMouseCursor(mouseId, "example");
```

### ShowCursor
`public static void ShowCursor(bool show)`

**Purpose:** **Purpose:** Displays the UI or element associated with cursor.

```csharp
// Static call; no instance required
MouseManager.ShowCursor(false);
```

### LockCursorAtCurrentPosition
`public static void LockCursorAtCurrentPosition(bool lockCursor)`

**Purpose:** **Purpose:** Executes the LockCursorAtCurrentPosition logic.

```csharp
// Static call; no instance required
MouseManager.LockCursorAtCurrentPosition(false);
```

### LockCursorAtPosition
`public static void LockCursorAtPosition(float x, float y)`

**Purpose:** **Purpose:** Executes the LockCursorAtPosition logic.

```csharp
// Static call; no instance required
MouseManager.LockCursorAtPosition(0, 0);
```

### UnlockCursor
`public static void UnlockCursor()`

**Purpose:** **Purpose:** Executes the UnlockCursor logic.

```csharp
// Static call; no instance required
MouseManager.UnlockCursor();
```

## Usage Example

```csharp
var manager = MouseManager.Current;
```

## See Also

- [Area Index](../)