---
title: "CreditsWidget"
description: "CreditsWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 9 个（方法 5、属性 3、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs。"
---
# CreditsWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CreditsWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs`

## 概述

CreditsWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 CreditsWidget → Widget。public/protected 成员共 9 个：5 方法、3 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CreditsWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Credits），继承链 CreditsWidget → Widget。成员构成以方法为主（方法 5/9，属性 3/9），对外主要以操作入口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Credits/CreditsWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CreditsWidget` | `public CreditsWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `OnPreviewMouseScroll` | `protected override bool OnPreviewMouseScroll()` | 方法 |
| `OnPreviewRightStickMovement` | `protected override bool OnPreviewRightStickMovement()` | 方法 |
| `OnMouseScroll` | `protected override void OnMouseScroll()` | 方法 |
| `OnRightStickMovement` | `protected override void OnRightStickMovement()` | 方法 |
| `RootItemWidget` | `public Widget RootItemWidget` | 属性 |
| `ScrollPixelsPerSecond` | `public float ScrollPixelsPerSecond` | 属性 |
| `ManualScrollWaitTimer` | `public float ManualScrollWaitTimer` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CreditsItemWidget](../CreditsItemWidget)
- [同命名空间 CreditsTextWidget](../CreditsTextWidget)
