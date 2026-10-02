---
title: "PersuasionResultChanceContainerListPanel"
description: "PersuasionResultChanceContainerListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 BrushListPanel；公开成员 9 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs。"
---
# PersuasionResultChanceContainerListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class PersuasionResultChanceContainerListPanel : BrushListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs`

## 概述

PersuasionResultChanceContainerListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs。它是一个 public 类，实现/继承 BrushListPanel，继承链为 PersuasionResultChanceContainerListPanel → BrushListPanel。public/protected 成员共 9 个：1 方法、7 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PersuasionResultChanceContainerListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Conversation），继承链 PersuasionResultChanceContainerListPanel → BrushListPanel。成员构成以属性为主（属性 7/9，方法 1/9），对外主要以状态读取接口暴露。继承链上的 BrushListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Conversation/PersuasionResultChanceContainerListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `StayTime` | `public float StayTime` | 属性 |
| `CritFailWidget` | `public Widget CritFailWidget` | 属性 |
| `FailWidget` | `public Widget FailWidget` | 属性 |
| `SuccessWidget` | `public Widget SuccessWidget` | 属性 |
| `CritSuccessWidget` | `public Widget CritSuccessWidget` | 属性 |
| `IsResultReady` | `public bool IsResultReady` | 属性 |
| `PersuasionResultChanceContainerListPanel` | `public PersuasionResultChanceContainerListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | 方法 |
| `ResultIndex` | `public int ResultIndex` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ConversationItemImageWidget](../ConversationItemImageWidget)
- [同命名空间 ConversationNameButtonWidget](../ConversationNameButtonWidget)
- [同命名空间 ConversationOptionListPanel](../ConversationOptionListPanel)
- [同命名空间 ConversationPersuasionProgressRichTextWidget](../ConversationPersuasionProgressRichTextWidget)
