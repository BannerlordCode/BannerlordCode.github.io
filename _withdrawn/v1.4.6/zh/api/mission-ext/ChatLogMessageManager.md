---
title: "ChatLogMessageManager"
description: "ChatLogMessageManager：TaleWorlds.MountAndBlade.GauntletUI 的 public 类，继承 MessageManagerBase；公开成员 8 个（方法 5、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ChatLogMessageManager

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI`
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

ChatLogMessageManager 位于 TaleWorlds.MountAndBlade.GauntletUI 模块，源文件 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs。它是一个 public 类，实现/继承 MessageManagerBase，继承链为 ChatLogMessageManager → MessageManagerBase → DotNetObject。public/protected 成员共 8 个：5 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatLogMessageManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.GauntletUI`，继承链 ChatLogMessageManager → MessageManagerBase → DotNetObject。成员构成以方法为主（方法 5/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MessageManagerBase](../../engine/MessageManagerBase/)
- [同命名空间 GamepadCursorViewModel](../GamepadCursorViewModel/)
- [同命名空间 GauntletBannerBuilderScreen](../GauntletBannerBuilderScreen/)
- [同命名空间 GauntletCameraFadeView](../GauntletCameraFadeView/)
- [同命名空间 GauntletChatLogView](../GauntletChatLogView/)
