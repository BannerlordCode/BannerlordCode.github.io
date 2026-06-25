---
title: "ConversationHelper"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ConversationHelper`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Handles logic related to `hero refers to hero`.

### GetHeroRelationToHeroTextShort
`public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)`

**Purpose:** Gets the current value of `hero relation to hero text short`.

### GetConversationCharacterPartyLeader
`public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)`

**Purpose:** Gets the current value of `conversation character party leader`.

## Usage Example

```csharp
ConversationHelper.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)