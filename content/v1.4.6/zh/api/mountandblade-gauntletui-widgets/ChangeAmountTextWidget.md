---
title: "ChangeAmountTextWidget"
description: "ChangeAmountTextWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 TextWidget；公开成员 7 个（方法 1、属性 5、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs。"
---
# ChangeAmountTextWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChangeAmountTextWidget : TextWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs`

## 概述

ChangeAmountTextWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs。它是一个 public 类，实现/继承 TextWidget，继承链为 ChangeAmountTextWidget → TextWidget。public/protected 成员共 7 个：1 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChangeAmountTextWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录一致，继承链 ChangeAmountTextWidget → TextWidget。成员构成以属性为主（属性 5/7，方法 1/7），对外主要以状态读取接口暴露。继承链上的 TextWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/ChangeAmountTextWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChangeAmountTextWidget` | `public ChangeAmountTextWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `Amount` | `public int Amount` | 属性 |
| `UseParentheses` | `public bool UseParentheses` | 属性 |
| `ShouldBeVisible` | `public bool ShouldBeVisible` | 属性 |
| `NegativeBrushName` | `public string NegativeBrushName` | 属性 |
| `PositiveBrushName` | `public string PositiveBrushName` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AutoHideRichTextWidget](../AutoHideRichTextWidget)
- [同命名空间 AutoHideTextWidget](../AutoHideTextWidget)
- [同命名空间 AutoHideZeroTextWidget](../AutoHideZeroTextWidget)
- [同命名空间 BannerlordCustomWidgetManager](../BannerlordCustomWidgetManager)
