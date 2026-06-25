---
title: "MouseManager"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MouseManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `activate mouse cursor`.

### SetMouseCursor
`public static void SetMouseCursor(CursorType mouseId, string mousePath)`

**Purpose:** Sets the value or state of `mouse cursor`.

### ShowCursor
`public static void ShowCursor(bool show)`

**Purpose:** Handles logic related to `show cursor`.

### LockCursorAtCurrentPosition
`public static void LockCursorAtCurrentPosition(bool lockCursor)`

**Purpose:** Handles logic related to `lock cursor at current position`.

### LockCursorAtPosition
`public static void LockCursorAtPosition(float x, float y)`

**Purpose:** Handles logic related to `lock cursor at position`.

### UnlockCursor
`public static void UnlockCursor()`

**Purpose:** Handles logic related to `unlock cursor`.

## Usage Example

```csharp
var manager = MouseManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)