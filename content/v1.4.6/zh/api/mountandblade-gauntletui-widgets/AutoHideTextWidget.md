---
title: "AutoHideTextWidget"
description: "AutoHideTextWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextWidget；公开成员 3 个（方法 1、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs。"
---
# AutoHideTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AutoHideTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs`

## 概述

AutoHideTextWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 AutoHideTextWidget → TextWidget。public/protected 成员共 3 个：1 方法、1 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AutoHideTextWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 AutoHideTextWidget → TextWidget。成员构成以方法为主（方法 1/3，属性 1/3），对外主要以操作入口暴露。继承链上的 TextWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/AutoHideTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AutoHideTextWidget` | `public AutoHideTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `WidgetToHideIfEmpty` | `public Widget WidgetToHideIfEmpty` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
- [同命名空间 BannerTableauWidget](../BannerTableauWidget)
