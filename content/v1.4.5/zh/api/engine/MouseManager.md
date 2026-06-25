---
title: "MouseManager"
description: "MouseManager 的自动生成类参考。"
---
# MouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MouseManager`
**Base:** 无
**File:** `bin/TaleWorlds.Engine/TaleWorlds.Engine/MouseManager.cs`

## 概述

`MouseManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MouseManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ActivateMouseCursor
`public static void ActivateMouseCursor(CursorType mouseId)`

**用途 / Purpose:** 激活mouse cursor对应的资源、状态或功能。

```csharp
// 静态调用，不需要实例
MouseManager.ActivateMouseCursor(mouseId);
```

### SetMouseCursor
`public static void SetMouseCursor(CursorType mouseId, string mousePath)`

**用途 / Purpose:** 为 mouse cursor 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MouseManager.SetMouseCursor(mouseId, "example");
```

### ShowCursor
`public static void ShowCursor(bool show)`

**用途 / Purpose:** 显示cursor对应的界面或元素。

```csharp
// 静态调用，不需要实例
MouseManager.ShowCursor(false);
```

### LockCursorAtCurrentPosition
`public static void LockCursorAtCurrentPosition(bool lockCursor)`

**用途 / Purpose:** 调用 LockCursorAtCurrentPosition 对应的操作。

```csharp
// 静态调用，不需要实例
MouseManager.LockCursorAtCurrentPosition(false);
```

### LockCursorAtPosition
`public static void LockCursorAtPosition(float x, float y)`

**用途 / Purpose:** 调用 LockCursorAtPosition 对应的操作。

```csharp
// 静态调用，不需要实例
MouseManager.LockCursorAtPosition(0, 0);
```

### UnlockCursor
`public static void UnlockCursor()`

**用途 / Purpose:** 调用 UnlockCursor 对应的操作。

```csharp
// 静态调用，不需要实例
MouseManager.UnlockCursor();
```

## 使用示例

```csharp
var manager = MouseManager.Current;
```

## 参见

- [本区域目录](../)