---
title: "KingdomDecisionOptionWidget"
description: "KingdomDecisionOptionWidget 的自动生成类参考。"
---
# KingdomDecisionOptionWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class KingdomDecisionOptionWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Kingdom/KingdomDecisionOptionWidget.cs`

## 概述

`KingdomDecisionOptionWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `KingdomDecisionOptionWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `SealVisualWidget` | `public Widget SealVisualWidget { get; set; }` |
| `StrengthWidget` | `public DecisionSupportStrengthListPanel StrengthWidget { get; set; }` |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter { get; set; }` |
| `IsAbstain` | `public bool IsAbstain { get; set; }` |
| `SealStartWidth` | `public float SealStartWidth { get; set; }` |
| `SealStartHeight` | `public float SealStartHeight { get; set; }` |
| `SealEndWidth` | `public float SealEndWidth { get; set; }` |
| `SealEndHeight` | `public float SealEndHeight { get; set; }` |
| `SealAnimLength` | `public float SealAnimLength { get; set; }` |
| `IsOptionSelected` | `public bool IsOptionSelected { get; set; }` |
| `IsKingsOption` | `public bool IsKingsOption { get; set; }` |

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
KingdomDecisionOptionWidget widget = ...;
```

## 参见

- [本区域目录](../)