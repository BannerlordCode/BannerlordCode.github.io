---
title: "ChatLogWidget"
description: "ChatLogWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets 的 public 类，继承 Widget；公开成员 17 个（方法 3、属性 13、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs。"
---
# ChatLogWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatLogWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs`

## 概述

ChatLogWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ChatLogWidget → Widget。public/protected 成员共 17 个：3 方法、13 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatLogWidget 是 TaleWorlds.MountAndBlade.GauntletUI.Widgets 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat），继承链 ChatLogWidget → Widget。成员构成以属性为主（属性 13/17，方法 3/17），对外主要以状态读取接口暴露。继承链上的 Widget 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogWidget` | `public ChatLogWidget(UIContext context) : base(context)` | 构造函数 |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | 方法 |
| `RegisterMultiLineElement` | `public void RegisterMultiLineElement(ChatCollapsableListPanel element)` | 方法 |
| `RemoveMultiLineElement` | `public void RemoveMultiLineElement(ChatCollapsableListPanel element)` | 方法 |
| `IsChatDisabled` | `public bool IsChatDisabled` | 属性 |
| `FinishedResizing` | `public bool FinishedResizing` | 属性 |
| `FullyShowChat` | `public bool FullyShowChat` | 属性 |
| `FullyShowChatWithTyping` | `public bool FullyShowChatWithTyping` | 属性 |
| `TextInputWidget` | `public EditableTextWidget TextInputWidget` | 属性 |
| `Scrollbar` | `public ScrollbarWidget Scrollbar` | 属性 |
| `ScrollablePanel` | `public ScrollablePanel ScrollablePanel` | 属性 |
| `ResizerWidget` | `public Widget ResizerWidget` | 属性 |
| `ResizeFrameWidget` | `public Widget ResizeFrameWidget` | 属性 |
| `SizeX` | `public float SizeX` | 属性 |
| `SizeY` | `public float SizeY` | 属性 |
| `MessageHistoryList` | `public ListPanel MessageHistoryList` | 属性 |
| `IsMPChatLog` | `public bool IsMPChatLog` | 属性 |

## 参见

- [↑ mountandblade-gauntletui-widgets 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ChatCollapsableListPanel](../ChatCollapsableListPanel)
- [同命名空间 ChatLogItemWidget](../ChatLogItemWidget)
