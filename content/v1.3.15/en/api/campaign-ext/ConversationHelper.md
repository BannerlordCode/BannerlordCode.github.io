---
title: "ConversationHelper"
description: "Auto-generated class reference for ConversationHelper."
---
# ConversationHelper

**Namespace:** TaleWorlds.CampaignSystem.Conversation
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ConversationHelper`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs`

## Overview

`ConversationHelper` is a helper class that usually provides static logic which does not depend on instance state.

## Mental Model

Treat `ConversationHelper` as a Helper-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HeroRefersToHero
`public static string HeroRefersToHero(Hero talkTroop, Hero referringTo, bool uppercaseFirst)`

**Purpose:** Executes the HeroRefersToHero logic.

```csharp
// Static call; no instance required
ConversationHelper.HeroRefersToHero(talkTroop, referringTo, false);
```

### GetHeroRelationToHeroTextShort
`public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**Purpose:** Reads and returns the hero relation to hero text short value held by the this instance.

```csharp
// Static call; no instance required
ConversationHelper.GetHeroRelationToHeroTextShort(queriedHero, baseHero, false);
```

### GetConversationCharacterPartyLeader
`public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)`

**Purpose:** Reads and returns the conversation character party leader value held by the this instance.

```csharp
// Static call; no instance required
ConversationHelper.GetConversationCharacterPartyLeader(party);
```

## Usage Example

```csharp
ConversationHelper.Initialize();
```

## See Also

- [Area Index](../)