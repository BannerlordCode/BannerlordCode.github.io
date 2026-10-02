---
title: "QuestProgressVisualWidget"
description: "QuestProgressVisualWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 11 个（方法 1、属性 9、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs。"
---
# QuestProgressVisualWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class QuestProgressVisualWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs`

## 概述

QuestProgressVisualWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 QuestProgressVisualWidget → Widget。public/protected 成员共 11 个：1 方法、9 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestProgressVisualWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest），继承链 QuestProgressVisualWidget → Widget。成员构成以属性为主（属性 9/11，方法 1/11），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestProgressVisualWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BarWidget` | `public Widget BarWidget` | 属性 |
| `SliderWidget` | `public Widget SliderWidget` | 属性 |
| `CheckboxVisualWidget` | `public Widget CheckboxVisualWidget` | 属性 |
| `QuestProgressVisualWidget` | `public QuestProgressVisualWidget(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `IsValid` | `public bool IsValid` | 属性 |
| `ProgressStoneWidth` | `public float ProgressStoneWidth` | 属性 |
| `ProgressStoneHeight` | `public float ProgressStoneHeight` | 属性 |
| `CurrentProgress` | `public int CurrentProgress` | 属性 |
| `TargetProgress` | `public int TargetProgress` | 属性 |
| `HorizontalSpacingBetweenStones` | `public int HorizontalSpacingBetweenStones` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestItemButtonWidget](../QuestItemButtonWidget)
- [同命名空间 QuestMarkerBrushWidget](../QuestMarkerBrushWidget)
- [同命名空间 QuestStageItemWidget](../QuestStageItemWidget)
