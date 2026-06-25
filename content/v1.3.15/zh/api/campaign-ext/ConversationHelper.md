---
title: "ConversationHelper"
description: "ConversationHelper 的自动生成类参考。"
---
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

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 静态调用，不需要实例
ConversationHelper.HeroRefersToHero(talkTroop, referringTo, false);
```

### GetHeroRelationToHeroTextShort
`public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**用途 / Purpose:** 读取并返回当前对象中 「hero relation to hero text short」 的结果。

```csharp
// 静态调用，不需要实例
ConversationHelper.GetHeroRelationToHeroTextShort(queriedHero, baseHero, false);
```

### GetConversationCharacterPartyLeader
`public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)`

**用途 / Purpose:** 读取并返回当前对象中 「conversation character party leader」 的结果。

```csharp
// 静态调用，不需要实例
ConversationHelper.GetConversationCharacterPartyLeader(party);
```

## 使用示例

```csharp
ConversationHelper.Initialize();
```

## 参见

- [本区域目录](../)