---
title: "QuestItemButtonWidget"
description: "QuestItemButtonWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ButtonWidget；公开成员 15 个（方法 1、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs。"
---
# QuestItemButtonWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class QuestItemButtonWidget : ButtonWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs`

## 概述

QuestItemButtonWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs。它是一个 public 类，实现/继承 ButtonWidget，继承链为 QuestItemButtonWidget → ButtonWidget。public/protected 成员共 15 个：1 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：QuestItemButtonWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Quest），继承链 QuestItemButtonWidget → ButtonWidget。成员构成以属性为主（属性 13/15，方法 1/15），对外主要以状态读取接口暴露。继承链上的 ButtonWidget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Quest/QuestItemButtonWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MainStoryLineItemBrush` | `public Brush MainStoryLineItemBrush` | 属性 |
| `NavalStorylineItemBrush` | `public Brush NavalStorylineItemBrush` | 属性 |
| `NormalItemBrush` | `public Brush NormalItemBrush` | 属性 |
| `QuestItemButtonWidget` | `public QuestItemButtonWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `IsCompleted` | `public bool IsCompleted` | 属性 |
| `IsMainStoryLineQuest` | `public bool IsMainStoryLineQuest` | 属性 |
| `IsNavalStorylineQuest` | `public bool IsNavalStorylineQuest` | 属性 |
| `IsRemainingDaysHidden` | `public bool IsRemainingDaysHidden` | 属性 |
| `QuestNameText` | `public TextWidget QuestNameText` | 属性 |
| `QuestDateText` | `public TextWidget QuestDateText` | 属性 |
| `QuestNameYOffset` | `public int QuestNameYOffset` | 属性 |
| `QuestNameXOffset` | `public int QuestNameXOffset` | 属性 |
| `QuestDateYOffset` | `public int QuestDateYOffset` | 属性 |
| `QuestDateXOffset` | `public int QuestDateXOffset` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 QuestMarkerBrushWidget](../QuestMarkerBrushWidget)
- [同命名空间 QuestProgressVisualWidget](../QuestProgressVisualWidget)
- [同命名空间 QuestStageItemWidget](../QuestStageItemWidget)
