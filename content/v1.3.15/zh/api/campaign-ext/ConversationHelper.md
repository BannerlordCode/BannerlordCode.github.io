---
title: "ConversationHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs`

## 概述

`ConversationHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `ConversationHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### HeroRefersToHero
`public static string HeroRefersToHero(Hero talkTroop, Hero referringTo, bool uppercaseFirst)`

**用途 / Purpose:** 处理 `hero refers to hero` 相关逻辑。

### GetHeroRelationToHeroTextShort
`public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**用途 / Purpose:** 获取 `hero relation to hero text short` 的当前值。

### GetConversationCharacterPartyLeader
`public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)`

**用途 / Purpose:** 获取 `conversation character party leader` 的当前值。

## 使用示例

```csharp
ConversationHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)