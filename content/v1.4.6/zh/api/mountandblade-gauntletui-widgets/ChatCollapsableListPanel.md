---
title: "ChatCollapsableListPanel"
description: "ChatCollapsableListPanel：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 ListPanel；公开成员 8 个（方法 3、属性 4、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs。"
---
# ChatCollapsableListPanel

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatCollapsableListPanel : ListPanel`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs`

## 概述

ChatCollapsableListPanel 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs。它是一个 public 类，实现/继承 ListPanel，继承链为 ChatCollapsableListPanel → ListPanel。public/protected 成员共 8 个：3 方法、4 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatCollapsableListPanel 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat），继承链 ChatCollapsableListPanel → ListPanel。成员构成以属性为主（属性 4/8，方法 3/8），对外主要以状态读取接口暴露。继承链上的 ListPanel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatCollapsableListPanel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsLinesVisible` | `public bool IsLinesVisible` | 属性 |
| `ChatCollapsableListPanel` | `public ChatCollapsableListPanel(UIContext context) : base(context)` | 构造函数 |
| `OnMousePressed` | `protected override void OnMousePressed()` | 方法 |
| `OnPreviewMousePressed` | `protected override bool OnPreviewMousePressed()` | 方法 |
| `OnChildAdded` | `protected override void OnChildAdded(Widget child)` | 方法 |
| `Alpha` | `public float Alpha` | 属性 |
| `LineColor` | `public Color LineColor` | 属性 |
| `ParentChatLogWidget` | `public ChatLogWidget ParentChatLogWidget` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatLogItemWidget](../ChatLogItemWidget)
- [同命名空间 ChatLogWidget](../ChatLogWidget)
