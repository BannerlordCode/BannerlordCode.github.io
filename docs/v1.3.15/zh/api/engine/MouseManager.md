<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MouseManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MouseManager`
**Base:** 无
**File:** `TaleWorlds.Engine/MouseManager.cs`

## 概述

`MouseManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要方法

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

## 使用示例

```csharp
// MouseManager (Manager) 的典型用法
MouseManager.Current;
```

## 参见

- [完整类目录](../catalog)