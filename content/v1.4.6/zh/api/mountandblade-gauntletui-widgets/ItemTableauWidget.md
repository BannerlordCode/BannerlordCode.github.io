---
title: "ItemTableauWidget"
description: "ItemTableauWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextureWidget；公开成员 12 个（方法 6、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs。"
---
# ItemTableauWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ItemTableauWidget : TextureWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs`

## 概述

ItemTableauWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs。它是一个 public 类，实现/继承 TextureWidget，继承链为 ItemTableauWidget → TextureWidget。public/protected 成员共 12 个：6 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ItemTableauWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 ItemTableauWidget → TextureWidget。成员构成以方法为主（方法 6/12，属性 5/12），对外主要以操作入口暴露。继承链上的 TextureWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ItemTableauWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ItemModifierId` | `public string ItemModifierId` | 属性 |
| `StringId` | `public string StringId` | 属性 |
| `InitialTiltRotation` | `public float InitialTiltRotation` | 属性 |
| `InitialPanRotation` | `public float InitialPanRotation` | 属性 |
| `BannerCode` | `public string BannerCode` | 属性 |
| `ItemTableauWidget` | `public ItemTableauWidget(UIContext context) : base(context)` | 构造函数 |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | 方法 |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | 方法 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnRightStickMovement` | `protected override void OnRightStickMovement()` | 方法 |
| `OnMouseReleased` | `protected override void OnMouseReleased(bool isFromInput)` | 方法 |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | 方法 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
