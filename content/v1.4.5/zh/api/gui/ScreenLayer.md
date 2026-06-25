---
title: "ScreenLayer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ScreenLayer`
- [← 本领域 / 返回 gui](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenLayer : IComparable`
**Base:** `IComparable`
**File:** `Bannerlord.Source/bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenLayer.cs`

## 概述

`ScreenLayer` 位于 `TaleWorlds.ScreenSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.ScreenSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Input` | `public InputContext Input { get; }` |
| `InputRestrictions` | `public InputRestrictions InputRestrictions { get; }` |
| `LastActiveState` | `public bool LastActiveState { get; }` |
| `IsFinalized` | `public bool IsFinalized { get; }` |
| `IsActive` | `public bool IsActive { get; }` |
| `IsHitThisFrame` | `public bool IsHitThisFrame { get; set; }` |
| `IsFocusLayer` | `public bool IsFocusLayer { get; set; }` |
| `ActiveCursor` | `public CursorType ActiveCursor { get; set; }` |
| `ScreenOrderInLastFrame` | `public int ScreenOrderInLastFrame { get; set; }` |

## 主要方法

### DrawDebugInfo
`public virtual void DrawDebugInfo()`

**用途 / Purpose:** 处理 `draw debug info` 相关逻辑。

### EarlyProcessEvents
`public virtual void EarlyProcessEvents(InputType handledInputs)`

**用途 / Purpose:** 处理 `early process events` 相关逻辑。

### ProcessEvents
`public virtual void ProcessEvents()`

**用途 / Purpose:** 处理 `process events` 相关逻辑。

### HitTest
`public virtual bool HitTest(Vector2 position)`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### HitTest
`public virtual bool HitTest()`

**用途 / Purpose:** 处理 `hit test` 相关逻辑。

### FocusTest
`public virtual bool FocusTest()`

**用途 / Purpose:** 处理 `focus test` 相关逻辑。

### IsFocusedOnInput
`public virtual bool IsFocusedOnInput()`

**用途 / Purpose:** 处理 `is focused on input` 相关逻辑。

### OnOnScreenKeyboardDone
`public virtual void OnOnScreenKeyboardDone(string inputText)`

**用途 / Purpose:** 当 `on screen keyboard done` 事件触发时调用此方法。

### OnOnScreenKeyboardCanceled
`public virtual void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 当 `on screen keyboard canceled` 事件触发时调用此方法。

### CompareTo
`public int CompareTo(object obj)`

**用途 / Purpose:** 处理 `compare to` 相关逻辑。

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 更新 `layout` 的状态或数据。

## 使用示例

```csharp
var implementation = new CustomScreenLayer();
```

## 参见

- [完整类目录](../catalog)