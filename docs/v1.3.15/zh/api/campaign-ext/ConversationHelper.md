<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConversationHelper`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ConversationHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs`

## 概述

`ConversationHelper` 是一个静态工具类，提供辅助方法。

## 主要方法

### HeroRefersToHero
```csharp
public static string HeroRefersToHero(Hero talkTroop, Hero referringTo, bool uppercaseFirst)
```

### GetHeroRelationToHeroTextShort
```csharp
public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)
```

### GetConversationCharacterPartyLeader
```csharp
public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)
```

## 使用示例

```csharp
// ConversationHelper (Helper) 的典型用法
ConversationHelper./* static helper method */();;
```

## 参见

- [完整类目录](../catalog)