---
title: "MapConversationAgent"
description: "MapConversationAgent: a public class in TaleWorlds.CampaignSystem.Conversation, inheriting IAgent; 11 exposed members (5 methods, 5 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapConversationAgent

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapConversationAgent : IAgent`
**File:** `TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.Conversation)

## Overview

MapConversationAgent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs. It is a public class, implementing/inheriting IAgent; the inheritance chain is MapConversationAgent → IAgent. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationAgent lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.Conversation`), namespace `TaleWorlds.CampaignSystem.Conversation`, inheritance chain MapConversationAgent → IAgent. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapConversationAgent` | `public MapConversationAgent(CharacterObject characterObject)` | constructor |
| `Character` | `public BasicCharacterObject Character` | property |
| `IsEnemyOf` | `public bool IsEnemyOf(IAgent agent)` | method |
| `IsFriendOf` | `public bool IsFriendOf(IAgent agent)` | method |
| `State` | `public AgentState State` | property |
| `Team` | `public IMissionTeam Team` | property |
| `Origin` | `public IAgentOriginBase Origin` | property |
| `Age` | `public float Age` | property |
| `IsActive` | `public bool IsActive()` | method |
| `SetAsConversationAgent` | `public void SetAsConversationAgent(bool set)` | method |
| `OnConversationStarted` | `public void OnConversationStarted()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IAgent](../../core-extra/IAgent/)
- [same namespace CampaignMapConversation](../CampaignMapConversation/)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager/)
- [same namespace ConversationAnimData](../ConversationAnimData/)
- [same namespace ConversationCharacterData](../ConversationCharacterData/)
