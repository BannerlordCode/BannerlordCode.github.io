---
title: "CampaignMapConversation"
description: "CampaignMapConversation 的自动生成类参考。"
---
# CampaignMapConversation

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class CampaignMapConversation`
**Base:** 无
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Conversation/CampaignMapConversation.cs`

## 概述

`CampaignMapConversation` 位于 `TaleWorlds.CampaignSystem.Conversation`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Conversation` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OpenConversation
`public static void OpenConversation(ConversationCharacterData playerCharacterData, ConversationCharacterData conversationPartnerData)`

**用途 / Purpose:** **用途 / Purpose:** 打开conversation对应的资源或界面。

```csharp
// 静态调用，不需要实例
CampaignMapConversation.OpenConversation(playerCharacterData, conversationPartnerData);
```

## 使用示例

```csharp
CampaignMapConversation.OpenConversation(playerCharacterData, conversationPartnerData);
```

## 参见

- [本区域目录](../)