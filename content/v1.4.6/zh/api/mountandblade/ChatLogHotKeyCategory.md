---
title: "ChatLogHotKeyCategory"
description: "ChatLogHotKeyCategory：TaleWorlds.MountAndBlade 的 public 类，继承 GameKeyContext；公开成员 8 个（方法 0、属性 0、字段 7）。源文件 TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs。"
---
# ChatLogHotKeyCategory

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public sealed class ChatLogHotKeyCategory : GameKeyContext`
**File:** `TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs`

## 概述

ChatLogHotKeyCategory 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs。它是一个 public 类（sealed），实现/继承 GameKeyContext，继承链为 ChatLogHotKeyCategory → GameKeyContext。public/protected 成员共 8 个：7 字段、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ChatLogHotKeyCategory 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 ChatLogHotKeyCategory → GameKeyContext。成员构成以方法为主（方法 0/8，属性 0/8），对外主要以操作入口暴露。继承链上的 GameKeyContext 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ChatLogHotKeyCategory.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ChatLogHotKeyCategory` | `public ChatLogHotKeyCategory() : base(" ", 116, GameKeyContext.GameKeyContextType.Default)` | 构造函数 |
| `CategoryId` | `public const string CategoryId` | 字段 |
| `InitiateAllChat` | `public const int InitiateAllChat` | 字段 |
| `InitiateTeamChat` | `public const int InitiateTeamChat` | 字段 |
| `FinalizeChat` | `public const int FinalizeChat` | 字段 |
| `CycleChatTypes` | `public const string CycleChatTypes` | 字段 |
| `FinalizeChatAlternative` | `public const string FinalizeChatAlternative` | 字段 |
| `SendMessage` | `public const string SendMessage` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
