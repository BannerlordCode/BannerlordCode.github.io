---
title: "EncyclopediaSearchBarBrushWidget"
description: "EncyclopediaSearchBarBrushWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushWidget；公开成员 7 个（方法 2、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs。"
---
# EncyclopediaSearchBarBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class EncyclopediaSearchBarBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs`

## 概述

EncyclopediaSearchBarBrushWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs。它是一个 public 类，实现/继承 BrushWidget，继承链为 EncyclopediaSearchBarBrushWidget → BrushWidget。public/protected 成员共 7 个：2 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：EncyclopediaSearchBarBrushWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Encyclopedia），继承链 EncyclopediaSearchBarBrushWidget → BrushWidget。成员构成以属性为主（属性 4/7，方法 2/7），对外主要以状态读取接口暴露。继承链上的 BrushWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Encyclopedia/EncyclopediaSearchBarBrushWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EncyclopediaSearchBarBrushWidget` | `public EncyclopediaSearchBarBrushWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `ShowResults` | `public bool ShowResults` | 属性 |
| `SearchInputWidget` | `public EditableTextWidget SearchInputWidget` | 属性 |
| `SearchResultPanel` | `public ScrollablePanel SearchResultPanel` | 属性 |
| `MinCharAmountToShowResults` | `public int MinCharAmountToShowResults` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 EncyclopediaCharacterTableauWidget](../EncyclopediaCharacterTableauWidget)
- [同命名空间 EncyclopediaDividerButtonWidget](../EncyclopediaDividerButtonWidget)
- [同命名空间 EncyclopediaFilterListItemButtonWidget](../EncyclopediaFilterListItemButtonWidget)
- [同命名空间 EncyclopediaHeroTraitVisualWidget](../EncyclopediaHeroTraitVisualWidget)
