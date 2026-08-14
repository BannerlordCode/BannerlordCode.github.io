---
title: "BrushWidget"
description: "BrushWidget 的自动生成类参考。"
---
# BrushWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class BrushWidget : Widget`
**Base:** `Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/BrushWidget.cs`

## 概述

`BrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `BrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Brush` | `public Brush Brush { get; }` |
| `ReadOnlyBrush` | `public Brush ReadOnlyBrush { get; }` |
| `Sprite` | `public new Sprite Sprite { get; set; }` |
| `BrushRenderer` | `public BrushRenderer BrushRenderer { get; }` |

## 主要方法

### UpdateBrushes
`public override void UpdateBrushes(float dt)`

**用途 / Purpose:** 重新计算并更新 brushes 的最新表示。

```csharp
// 先通过子系统 API 拿到 BrushWidget 实例
BrushWidget brushWidget = ...;
brushWidget.UpdateBrushes(0);
```

### SetState
`public override void SetState(string stateName)`

**用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 BrushWidget 实例
BrushWidget brushWidget = ...;
brushWidget.SetState("example");
```

### UpdateAnimationPropertiesSubTask
`public override void UpdateAnimationPropertiesSubTask(float alphaFactor)`

**用途 / Purpose:** 重新计算并更新 animation properties sub task 的最新表示。

```csharp
// 先通过子系统 API 拿到 BrushWidget 实例
BrushWidget brushWidget = ...;
brushWidget.UpdateAnimationPropertiesSubTask(0);
```

### OnBrushChanged
`public virtual void OnBrushChanged()`

**用途 / Purpose:** 在 brush changed 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 BrushWidget 实例
BrushWidget brushWidget = ...;
brushWidget.OnBrushChanged();
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
BrushWidget widget = ...;
```

## 参见

- [本区域目录](../)