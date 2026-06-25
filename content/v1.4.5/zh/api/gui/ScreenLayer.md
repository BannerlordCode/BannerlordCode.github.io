---
title: "ScreenLayer"
description: "ScreenLayer 的自动生成类参考。"
---
# ScreenLayer

**Namespace:** TaleWorlds.ScreenSystem
**Module:** TaleWorlds.ScreenSystem
**Type:** `public abstract class ScreenLayer : IComparable`
**Base:** `IComparable`
**File:** `bin/TaleWorlds.ScreenSystem/TaleWorlds.ScreenSystem/ScreenLayer.cs`

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

**用途 / Purpose:** 调用 DrawDebugInfo 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.DrawDebugInfo();
```

### EarlyProcessEvents
`public virtual void EarlyProcessEvents(InputType handledInputs)`

**用途 / Purpose:** 调用 EarlyProcessEvents 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.EarlyProcessEvents(handledInputs);
```

### ProcessEvents
`public virtual void ProcessEvents()`

**用途 / Purpose:** 调用 ProcessEvents 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.ProcessEvents();
```

### HitTest
`public virtual bool HitTest(Vector2 position)`

**用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
var result = screenLayer.HitTest(position);
```

### HitTest
`public virtual bool HitTest()`

**用途 / Purpose:** 调用 HitTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
var result = screenLayer.HitTest();
```

### FocusTest
`public virtual bool FocusTest()`

**用途 / Purpose:** 调用 FocusTest 对应的操作。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
var result = screenLayer.FocusTest();
```

### IsFocusedOnInput
`public virtual bool IsFocusedOnInput()`

**用途 / Purpose:** 判断当前对象是否处于 focused on input 状态或条件。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
var result = screenLayer.IsFocusedOnInput();
```

### OnOnScreenKeyboardDone
`public virtual void OnOnScreenKeyboardDone(string inputText)`

**用途 / Purpose:** 在 on screen keyboard done 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.OnOnScreenKeyboardDone("example");
```

### OnOnScreenKeyboardCanceled
`public virtual void OnOnScreenKeyboardCanceled()`

**用途 / Purpose:** 在 on screen keyboard canceled 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.OnOnScreenKeyboardCanceled();
```

### CompareTo
`public int CompareTo(object obj)`

**用途 / Purpose:** 将当前对象与传入实例比较大小或顺序。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
var result = screenLayer.CompareTo(obj);
```

### UpdateLayout
`public virtual void UpdateLayout()`

**用途 / Purpose:** 重新计算并更新 layout 的最新表示。

```csharp
// 先通过子系统 API 拿到 ScreenLayer 实例
ScreenLayer screenLayer = ...;
screenLayer.UpdateLayout();
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ScreenLayer instance = ...;
```

## 参见

- [本区域目录](../)