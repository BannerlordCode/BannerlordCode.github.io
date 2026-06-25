---
title: "ScrollbarInterpolationController"
description: "ScrollbarInterpolationController 的自动生成类参考。"
---
# ScrollbarInterpolationController

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `class ScrollbarInterpolationController`
**Base:** 无
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ScrollablePanel.cs`

## 概述

`ScrollbarInterpolationController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `ScrollbarInterpolationController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInterpolating` | `public bool IsInterpolating { get; }` |

## 主要方法

### SetControlledScrollbar
`public void SetControlledScrollbar(ScrollbarWidget scrollbar)`

**用途 / Purpose:** **用途 / Purpose:** 为 controlled scrollbar 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ScrollbarInterpolationController 实例
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.SetControlledScrollbar(scrollbar);
```

### StartInterpolation
`public void StartInterpolation(float targetValue, float duration)`

**用途 / Purpose:** **用途 / Purpose:** 启动interpolation流程或状态机。

```csharp
// 先通过子系统 API 拿到 ScrollbarInterpolationController 实例
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.StartInterpolation(0, 0);
```

### StopInterpolation
`public void StopInterpolation()`

**用途 / Purpose:** **用途 / Purpose:** 停止interpolation流程或状态机。

```csharp
// 先通过子系统 API 拿到 ScrollbarInterpolationController 实例
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.StopInterpolation();
```

### GetValue
`public float GetValue()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 value 的结果。

```csharp
// 先通过子系统 API 拿到 ScrollbarInterpolationController 实例
ScrollbarInterpolationController scrollbarInterpolationController = ...;
var result = scrollbarInterpolationController.GetValue();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** **用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 ScrollbarInterpolationController 实例
ScrollbarInterpolationController scrollbarInterpolationController = ...;
scrollbarInterpolationController.Tick(0);
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<ScrollbarInterpolationController>();
```

## 参见

- [本区域目录](../)