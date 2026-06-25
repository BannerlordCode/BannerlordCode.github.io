---
title: "SettlementNameplateItemWidget"
description: "SettlementNameplateItemWidget 的自动生成类参考。"
---
# SettlementNameplateItemWidget

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SettlementNameplateItemWidget : Widget`
**Base:** `Widget`
**File:** `bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Nameplate/SettlementNameplateItemWidget.cs`

## 概述

`SettlementNameplateItemWidget` 是一个 Gauntlet UI 控件——在 Gauntlet XML/.prefab 中使用或代码创建的 UI 元素。继承 Widget 可构建自定义控件；实例经控件树访问。

## 心智模型

把 `SettlementNameplateItemWidget` 当作一个 Widget 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsOverWidget` | `public bool IsOverWidget { get; }` |
| `QuestType` | `public int QuestType { get; set; }` |
| `IssueType` | `public int IssueType { get; set; }` |
| `InspectedIconWidget` | `public Widget InspectedIconWidget { get; set; }` |
| `PortIconWidget` | `public Widget PortIconWidget { get; set; }` |
| `SettlementPartiesGridWidget` | `public GridWidget SettlementPartiesGridWidget { get; set; }` |
| `MapEventVisualWidget` | `public MapEventVisualBrushWidget MapEventVisualWidget { get; set; }` |
| `WidgetToShow` | `public Widget WidgetToShow { get; set; }` |
| `SettlementBannerWidget` | `public MaskedTextureWidget SettlementBannerWidget { get; set; }` |
| `SettlementNameTextWidget` | `public TextWidget SettlementNameTextWidget { get; set; }` |
| `ParleyIconWidget` | `public Widget ParleyIconWidget { get; set; }` |

## 主要方法

### ParallelUpdate
`public void ParallelUpdate(float dt)`

**用途 / Purpose:** 调用 ParallelUpdate 对应的操作。

```csharp
// 先通过子系统 API 拿到 SettlementNameplateItemWidget 实例
SettlementNameplateItemWidget settlementNameplateItemWidget = ...;
settlementNameplateItemWidget.ParallelUpdate(0);
```

## 使用示例

```csharp
// 在 Gauntlet 控件树或 Movie 中获取该控件实例
SettlementNameplateItemWidget widget = ...;
```

## 参见

- [本区域目录](../)