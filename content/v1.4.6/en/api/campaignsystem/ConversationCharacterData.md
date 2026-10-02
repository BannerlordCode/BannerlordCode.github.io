---
title: "ConversationCharacterData"
description: "ConversationCharacterData: a public struct in TaleWorlds.CampaignSystem, inheriting ISerializableObject; 1 exposed members (0 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs."
---
# ConversationCharacterData

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public struct ConversationCharacterData : ISerializableObject`
**File:** `TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs`

## Overview

ConversationCharacterData lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs. It is a public struct, implementing/inheriting ISerializableObject; the inheritance chain is ConversationCharacterData → ISerializableObject. It exposes 1 public/protected members: 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ConversationCharacterData is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Conversation) the module directory; inheritance chain ConversationCharacterData → ISerializableObject. The surface is method-led (methods 0/1, properties 0/1), so it mostly exposes operations. ISerializableObject on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/ConversationCharacterData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `ConversationCharacterData` | `public ConversationCharacterData(CharacterObject character, PartyBase party = null, bool noHorse = false, bool noWeapon = false, bool spawnAfterFight = false, bool isCivilianEquipmentRequiredForLeader = false, bool isCivilianEquipmentRequiredForBodyGuardCharacters = false, bool noBodyguards = false)` | constructor |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMapConversation](../CampaignMapConversation)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager)
- [same namespace ConversationAnimData](../ConversationAnimData)
- [same namespace ConversationHelper](../ConversationHelper)
