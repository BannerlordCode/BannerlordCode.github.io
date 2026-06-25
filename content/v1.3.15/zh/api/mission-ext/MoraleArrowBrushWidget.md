---
title: "MoraleArrowBrushWidget"
description: "MoraleArrowBrushWidget 的自动生成类参考。"
---
# MoraleArrowBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Multiplayer.HUD
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MoraleArrowBrushWidget : BrushWidget`
**Base:** `BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Multiplayer/HUD/MoraleArrowBrushWidget.cs`

## 概述

`MoraleArrowBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MoraleArrowBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `LeftSideArrow` | `public bool LeftSideArrow { get; set; }` |
| `BaseHorizontalExtendRange` | `public float BaseHorizontalExtendRange { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |

## 主要方法

### SetFlowLevel
`public void SetFlowLevel(int flow)`

**用途 / Purpose:** 为 「flow level」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MoraleArrowBrushWidget 实例
MoraleArrowBrushWidget moraleArrowBrushWidget = ...;
moraleArrowBrushWidget.SetFlowLevel(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MoraleArrowBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)