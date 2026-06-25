---
title: "CraftedWeaponDesignResultListPanel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftedWeaponDesignResultListPanel`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CraftedWeaponDesignResultListPanel

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedWeaponDesignResultListPanel : ListPanel`
**Base:** `ListPanel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.GauntletUI.Widgets/TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting/CraftedWeaponDesignResultListPanel.cs`

## 概述

`CraftedWeaponDesignResultListPanel` 位于 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ChangeValueTextWidget` | `public CounterTextBrushWidget ChangeValueTextWidget { get; set; }` |
| `ValueTextWidget` | `public CounterTextBrushWidget ValueTextWidget { get; set; }` |
| `GoldEffectorTextWidget` | `public RichTextWidget GoldEffectorTextWidget { get; set; }` |
| `PositiveChangeBrush` | `public Brush PositiveChangeBrush { get; set; }` |
| `NegativeChangeBrush` | `public Brush NegativeChangeBrush { get; set; }` |
| `NeutralBrush` | `public Brush NeutralBrush { get; set; }` |
| `FadeInTimeIndexOffset` | `public float FadeInTimeIndexOffset { get; set; }` |
| `FadeInTime` | `public float FadeInTime { get; set; }` |
| `CounterStartTime` | `public float CounterStartTime { get; set; }` |
| `LabelTextWidget` | `public RichTextWidget LabelTextWidget { get; set; }` |
| `InitValue` | `public float InitValue { get; set; }` |
| `ChangeAmount` | `public float ChangeAmount { get; set; }` |
| `IsExceedingBeneficial` | `public bool IsExceedingBeneficial { get; set; }` |
| `TargetValue` | `public float TargetValue { get; set; }` |
| `IsOrderResult` | `public bool IsOrderResult { get; set; }` |

## 使用示例

```csharp
var example = new CraftedWeaponDesignResultListPanel();
```

## 参见

- [完整类目录](../catalog)