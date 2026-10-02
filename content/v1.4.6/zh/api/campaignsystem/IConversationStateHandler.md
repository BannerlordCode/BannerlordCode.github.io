---
title: "IConversationStateHandler"
description: "IConversationStateHandler：TaleWorlds.CampaignSystem 的 public 接口；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs。"
---
# IConversationStateHandler

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface IConversationStateHandler`
**File:** `TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs`

## 概述

IConversationStateHandler 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs。它是一个 public 接口，继承链为 IConversationStateHandler。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IConversationStateHandler 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.Conversation），继承链 IConversationStateHandler。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/IConversationStateHandler.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnConversationInstall` | `void OnConversationInstall();` | 方法 |
| `OnConversationUninstall` | `void OnConversationUninstall();` | 方法 |
| `OnConversationActivate` | `void OnConversationActivate();` | 方法 |
| `OnConversationDeactivate` | `void OnConversationDeactivate();` | 方法 |
| `OnConversationContinue` | `void OnConversationContinue();` | 方法 |
| `ExecuteConversationContinue` | `void ExecuteConversationContinue();` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 CampaignMapConversation](../CampaignMapConversation)
- [同命名空间 ConversationAnimationManager](../ConversationAnimationManager)
- [同命名空间 ConversationAnimData](../ConversationAnimData)
- [同命名空间 ConversationCharacterData](../ConversationCharacterData)
