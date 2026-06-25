---
title: "MouseManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MouseManager`
- [← 本领域 / 返回 engine](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MouseManager

**Namespace:** TaleWorlds.Engine
**Module:** TaleWorlds.Engine
**Type:** `public static class MouseManager`
**Base:** 无
**File:** `TaleWorlds.Engine/MouseManager.cs`

## 概述

`MouseManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MouseManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ActivateMouseCursor
`public static void ActivateMouseCursor(CursorType mouseId)`

**用途 / Purpose:** 处理 `activate mouse cursor` 相关逻辑。

### SetMouseCursor
`public static void SetMouseCursor(CursorType mouseId, string mousePath)`

**用途 / Purpose:** 设置 `mouse cursor` 的值或状态。

### ShowCursor
`public static void ShowCursor(bool show)`

**用途 / Purpose:** 处理 `show cursor` 相关逻辑。

### LockCursorAtCurrentPosition
`public static void LockCursorAtCurrentPosition(bool lockCursor)`

**用途 / Purpose:** 处理 `lock cursor at current position` 相关逻辑。

### LockCursorAtPosition
`public static void LockCursorAtPosition(float x, float y)`

**用途 / Purpose:** 处理 `lock cursor at position` 相关逻辑。

### UnlockCursor
`public static void UnlockCursor()`

**用途 / Purpose:** 处理 `unlock cursor` 相关逻辑。

## 使用示例

```csharp
var manager = MouseManager.Current;
```

## 参见

- [完整类目录](../catalog)