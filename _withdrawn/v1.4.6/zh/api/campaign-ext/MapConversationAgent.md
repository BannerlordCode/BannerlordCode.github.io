---
title: "MapConversationAgent"
description: "MapConversationAgent：TaleWorlds.CampaignSystem.Conversation 的 public 类，继承 IAgent；公开成员 11 个（方法 5、属性 5、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationAgent

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapConversationAgent : IAgent`
**File:** `TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## 概述

MapConversationAgent 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs。它是一个 public 类，实现/继承 IAgent，继承链为 MapConversationAgent → IAgent。public/protected 成员共 11 个：5 方法、5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MapConversationAgent 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.Conversation`），命名空间 `TaleWorlds.CampaignSystem.Conversation`，继承链 MapConversationAgent → IAgent。成员构成以方法为主（方法 5/11，属性 5/11），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapConversationAgent` | `public MapConversationAgent(CharacterObject characterObject)` | 构造函数 |
| `Character` | `public BasicCharacterObject Character` | 属性 |
| `IsEnemyOf` | `public bool IsEnemyOf(IAgent agent)` | 方法 |
| `IsFriendOf` | `public bool IsFriendOf(IAgent agent)` | 方法 |
| `State` | `public AgentState State` | 属性 |
| `Team` | `public IMissionTeam Team` | 属性 |
| `Origin` | `public IAgentOriginBase Origin` | 属性 |
| `Age` | `public float Age` | 属性 |
| `IsActive` | `public bool IsActive()` | 方法 |
| `SetAsConversationAgent` | `public void SetAsConversationAgent(bool set)` | 方法 |
| `OnConversationStarted` | `public void OnConversationStarted()` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IAgent](../../core-extra/IAgent/)
- [同命名空间 CampaignMapConversation](../CampaignMapConversation/)
- [同命名空间 ConversationAnimationManager](../ConversationAnimationManager/)
- [同命名空间 ConversationAnimData](../ConversationAnimData/)
- [同命名空间 ConversationCharacterData](../ConversationCharacterData/)
