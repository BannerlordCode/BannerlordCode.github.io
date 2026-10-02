---
title: "MapConversationAgent"
description: "MapConversationAgent: a public class in TaleWorlds.CampaignSystem, inheriting IAgent; 11 exposed members (5 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs."
---
# MapConversationAgent

**Namespace:** `TaleWorlds.CampaignSystem.Conversation`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class MapConversationAgent : IAgent`
**File:** `TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs`

## Overview

MapConversationAgent lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs. It is a public class, implementing/inheriting IAgent; the inheritance chain is MapConversationAgent → IAgent. It exposes 11 public/protected members: 5 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapConversationAgent is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Conversation) the module directory; inheritance chain MapConversationAgent → IAgent. The surface is method-led (methods 5/11, properties 5/11), so it mostly exposes operations. IAgent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Conversation/MapConversationAgent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CampaignMapConversation](../CampaignMapConversation)
- [same namespace ConversationAnimationManager](../ConversationAnimationManager)
- [same namespace ConversationAnimData](../ConversationAnimData)
- [same namespace ConversationCharacterData](../ConversationCharacterData)
