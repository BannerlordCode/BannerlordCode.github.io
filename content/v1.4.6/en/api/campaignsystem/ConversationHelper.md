---
title: "ConversationHelper"
description: "ConversationHelper: a public class in TaleWorlds.CampaignSystem; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs."
---
# ConversationHelper

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public static class ConversationHelper`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs`

## Overview

ConversationHelper lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs. It is a public class; the inheritance chain is ConversationHelper. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationHelper is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Conversation) the module directory; inheritance chain ConversationHelper. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/ConversationHelper.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HeroRefersToHero` | `public static string HeroRefersToHero(Hero talkTroop, Hero referringTo, bool uppercaseFirst)` | method |
| `GetHeroRelationToHeroTextShort` | `public static string GetHeroRelationToHeroTextShort(Hero queriedHero, Hero baseHero, bool uppercaseFirst)` | method |
| `GetConversationCharacterPartyLeader` | `public static CharacterObject GetConversationCharacterPartyLeader(PartyBase party)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMapConversation](../CampaignMapConversation)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager)
- [same namespace ConversationAnimData](../ConversationAnimData)
- [same namespace ConversationCharacterData](../ConversationCharacterData)
