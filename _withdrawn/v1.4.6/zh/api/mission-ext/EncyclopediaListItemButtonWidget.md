---
title: "EncyclopediaListItemButtonWidget"
description: "EncyclopediaListItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia 的 public 类，继承 ButtonWidget；公开成员 8 个（方法 1、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# EncyclopediaListItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaListItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

EncyclopediaListItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 EncyclopediaListItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。public/protected 成员共 8 个：1 方法、6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaListItemButtonWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`，继承链 EncyclopediaListItemButtonWidget → ButtonWidget → ImageWidget → BrushWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 6/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaListItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ListItemNameTextWidget` | `public TextWidget ListItemNameTextWidget` | 属性 |
| `ListComparedValueTextWidget` | `public TextWidget ListComparedValueTextWidget` | 属性 |
| `InfoAvailableItemNameBrush` | `public Brush InfoAvailableItemNameBrush` | 属性 |
| `InfoUnvailableItemNameBrush` | `public Brush InfoUnvailableItemNameBrush` | 属性 |
| `IsInfoAvailable` | `public bool IsInfoAvailable` | 属性 |
| `EncyclopediaListItemButtonWidget` | `public EncyclopediaListItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnThisLateUpdate` | `public void OnThisLateUpdate(float dt)` | 方法 |
| `ListItemId` | `public string ListItemId` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 ButtonWidget](../../gui/ButtonWidget/)
- [同命名空间 EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget/)
- [同命名空间 EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget/)
- [同命名空间 EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget/)
- [同命名空间 EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget/)
