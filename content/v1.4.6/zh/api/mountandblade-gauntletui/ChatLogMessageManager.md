---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MessageManagerBase；公开成员 8 个（方法 5、属性 1、字段 0）。源文件 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs。"
---
# ChatLogMessageManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## 概述

ChatLogMessageManager 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs。它是一个 public 类，实现/继承 MessageManagerBase，继承链为 ChatLogMessageManager → MessageManagerBase。public/protected 成员共 8 个：5 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatLogMessageManager 是 TaleWorlds.MountAndBlade.GauntletUI 的顶层类型，命名空间与模块目录一致，继承链 ChatLogMessageManager → MessageManagerBase。成员构成以方法为主（方法 5/8，属性 1/8），对外主要以操作入口暴露。继承链上的 MessageManagerBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogMessageManager` | `public ChatLogMessageManager(MPChatVM chatDataSource)` | 构造函数 |
| `Update` | `public void Update()` | 方法 |
| `PostWarningLine` | `protected override void PostWarningLine(string text)` | 方法 |
| `PostSuccessLine` | `protected override void PostSuccessLine(string text)` | 方法 |
| `PostMessageLineFormatted` | `protected override void PostMessageLineFormatted(string text, uint color)` | 方法 |
| `PostMessageLine` | `protected override void PostMessageLine(string text, uint color)` | 方法 |
| `ChatLineData` | `public struct ChatLineData` | 属性 |
| `ChatLineData` | `public struct ChatLineData` | 嵌套类型 |

## 参见

- [↑ mountandblade-gauntletui 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView)
- [同命名空间 GauntletChatLogView](../GauntletChatLogView)
