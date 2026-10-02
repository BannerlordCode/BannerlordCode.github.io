---
title: "ChatLogItemWidget"
description: "ChatLogItemWidget：TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat 的 public 类，继承 Widget；公开成员 8 个（方法 1、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChatLogItemWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class ChatLogItemWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ChatLogItemWidget 位于 TaleWorlds.MountAndBlade.GauntletUI.Widgets 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs。它是一个 public 类，实现/继承 Widget，继承链为 ChatLogItemWidget → Widget → PropertyOwnerObject。public/protected 成员共 8 个：1 方法、5 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatLogItemWidget 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Chat`，继承链 ChatLogItemWidget → Widget → PropertyOwnerObject。成员构成以属性为主（属性 5/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI.Widgets/Chat/ChatLogItemWidget.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogItemWidget` | `public ChatLogItemWidget(UIContext context) : base(context)` | 构造函数 |
| `OnParallelUpdate` | `protected override void OnParallelUpdate(float dt)` | 方法 |
| `OneLineTextWidget` | `public RichTextWidget OneLineTextWidget` | 属性 |
| `CollapsableWidget` | `public ChatCollapsableListPanel CollapsableWidget` | 属性 |
| `ChatLine` | `public string ChatLine` | 属性 |
| `ChatLogWidget` | `public ChatLogWidget ChatLogWidget` | 属性 |
| `ChatMultiLineElement` | `public struct ChatMultiLineElement` | 属性 |
| `ChatMultiLineElement` | `public struct ChatMultiLineElement` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ChatCollapsableListPanel](../ChatCollapsableListPanel/)
- [同命名空间 ChatLogWidget](../ChatLogWidget/)
