---
title: "MapParleyAnimationParentBrushWidget"
description: "MapParleyAnimationParentBrushWidget 的自动生成类参考。"
---
# MapParleyAnimationParentBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MapParleyAnimationParentBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Map.Parley/MapParleyAnimationParentBrushWidget.cs`

## 概述

`MapParleyAnimationParentBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `MapParleyAnimationParentBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AnimationDuration` | `public float AnimationDuration { get; set; }` |

## 主要方法

### MapParleyAnimationParentBrushWidget
`public class MapParleyAnimationParentBrushWidget(UIContext context)`

**用途 / Purpose:** 调用 MapParleyAnimationParentBrushWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 MapParleyAnimationParentBrushWidget 实例
MapParleyAnimationParentBrushWidget mapParleyAnimationParentBrushWidget = ...;
var result = mapParleyAnimationParentBrushWidget.MapParleyAnimationParentBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
MapParleyAnimationParentBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)