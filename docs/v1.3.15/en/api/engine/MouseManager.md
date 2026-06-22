<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MouseManager`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MouseManager`
**Base:** none
**File:** `TaleWorlds.Engine/MouseManager.cs`

## Overview

`MouseManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### ActivateMouseCursor
```csharp
public static void ActivateMouseCursor(CursorType mouseId)
```

### SetMouseCursor
```csharp
public static void SetMouseCursor(CursorType mouseId, string mousePath)
```

### ShowCursor
```csharp
public static void ShowCursor(bool show)
```

### LockCursorAtCurrentPosition
```csharp
public static void LockCursorAtCurrentPosition(bool lockCursor)
```

### LockCursorAtPosition
```csharp
public static void LockCursorAtPosition(float x, float y)
```

### UnlockCursor
```csharp
public static void UnlockCursor()
```

## Usage Example

```csharp
// Typical usage of MouseManager (Manager)
MouseManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)