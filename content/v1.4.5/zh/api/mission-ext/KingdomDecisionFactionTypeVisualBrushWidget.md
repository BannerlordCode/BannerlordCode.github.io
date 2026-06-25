---
title: "KingdomDecisionFactionTypeVisualBrushWidget"
description: "KingdomDecisionFactionTypeVisualBrushWidget 的自动生成类参考。"
---
# KingdomDecisionFactionTypeVisualBrushWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionFactionTypeVisualBrushWidget`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomDecisionFactionTypeVisualBrushWidget.cs`

## 概述

`KingdomDecisionFactionTypeVisualBrushWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `KingdomDecisionFactionTypeVisualBrushWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `FactionName` | `public string FactionName { get; set; }` |

## 主要方法

### KingdomDecisionFactionTypeVisualBrushWidget
`public class KingdomDecisionFactionTypeVisualBrushWidget(UIContext context)`

**用途 / Purpose:** **用途 / Purpose:** 调用 KingdomDecisionFactionTypeVisualBrushWidget 对应的操作。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionFactionTypeVisualBrushWidget 实例
KingdomDecisionFactionTypeVisualBrushWidget kingdomDecisionFactionTypeVisualBrushWidget = ...;
var result = kingdomDecisionFactionTypeVisualBrushWidget.KingdomDecisionFactionTypeVisualBrushWidget(context);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
KingdomDecisionFactionTypeVisualBrushWidget widget = ...;
```

## 参见

- [本区域目录](../)