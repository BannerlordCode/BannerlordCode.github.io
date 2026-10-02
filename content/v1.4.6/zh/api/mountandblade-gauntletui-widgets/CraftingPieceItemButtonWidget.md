---
title: "CraftingPieceItemButtonWidget"
description: "CraftingPieceItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 7 个（方法 0、属性 6、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs。"
---
# CraftingPieceItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CraftingPieceItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs`

## 概述

CraftingPieceItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 CraftingPieceItemButtonWidget → ButtonWidget。public/protected 成员共 7 个：6 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CraftingPieceItemButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Crafting），继承链 CraftingPieceItemButtonWidget → ButtonWidget。成员构成以属性为主（属性 6/7，方法 0/7），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Crafting/CraftingPieceItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CraftingPieceItemButtonWidget` | `public CraftingPieceItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `ImageIdentifier` | `public ImageIdentifierWidget ImageIdentifier` | 属性 |
| `PlayerHasPiece` | `public bool PlayerHasPiece` | 属性 |
| `HasPieceBrush` | `public Brush HasPieceBrush` | 属性 |
| `DontHavePieceBrush` | `public Brush DontHavePieceBrush` | 属性 |
| `HasPieceMaterialBrush` | `public Brush HasPieceMaterialBrush` | 属性 |
| `DontHavePieceMaterialBrush` | `public Brush DontHavePieceMaterialBrush` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CardSelectionPopupButtonWidget](../CardSelectionPopupButtonWidget)
- [同命名空间 CraftedWeaponDesignResultListPanel](../CraftedWeaponDesignResultListPanel)
- [同命名空间 CraftingCardHighlightBrushWidget](../CraftingCardHighlightBrushWidget)
- [同命名空间 CraftingDifficultyBarParentWidget](../CraftingDifficultyBarParentWidget)
