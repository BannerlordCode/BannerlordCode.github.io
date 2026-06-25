---
title: "LayeredWindowController"
description: "LayeredWindowController 的自动生成类参考。"
---
# LayeredWindowController

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class LayeredWindowController`
**Base:** 无
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/LayeredWindowController.cs`

## 概述

`LayeredWindowController` 是一个控制器，重点不在存储数据，而在接收输入后把系统推向下一个状态。

## 心智模型

把 `LayeredWindowController` 当作一个 Controller 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetSize
`public void SetSize(int width, int height)`

**用途 / Purpose:** **用途 / Purpose:** 为 size 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 LayeredWindowController 实例
LayeredWindowController layeredWindowController = ...;
layeredWindowController.SetSize(0, 0);
```

### PostRender
`public void PostRender()`

**用途 / Purpose:** **用途 / Purpose:** 调用 PostRender 对应的操作。

```csharp
// 先通过子系统 API 拿到 LayeredWindowController 实例
LayeredWindowController layeredWindowController = ...;
layeredWindowController.PostRender();
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** **用途 / Purpose:** 在 finalize 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 LayeredWindowController 实例
LayeredWindowController layeredWindowController = ...;
layeredWindowController.OnFinalize();
```

## 使用示例

```csharp
var controller = Mission.Current.GetMissionBehavior<LayeredWindowController>();
```

## 参见

- [本区域目录](../)