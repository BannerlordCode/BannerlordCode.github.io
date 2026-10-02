---
title: "ICampaignMission"
description: "ICampaignMission: a public interface in TaleWorlds.CampaignSystem; 21 exposed members (16 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ICampaignMission.cs."
---
# ICampaignMission

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ICampaignMission`
**File:** `TaleWorlds.CampaignSystem/ICampaignMission.cs`

## Overview

ICampaignMission lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ICampaignMission.cs. It is a public interface; the inheritance chain is ICampaignMission. It exposes 21 public/protected members: 16 methods, 5 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ICampaignMission is a top-level type in TaleWorlds.CampaignSystem, namespace matching the module directory; inheritance chain ICampaignMission. The surface is method-led (methods 16/21, properties 5/21), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ICampaignMission.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `State` | `GameState State` | property |
| `AgentSupplier` | `IMissionTroopSupplier AgentSupplier` | property |
| `Location` | `Location Location` | property |
| `LastVisitedAlley` | `Alley LastVisitedAlley` | property |
| `Mode` | `MissionMode Mode` | property |
| `SetMissionMode` | `void SetMissionMode(MissionMode newMode, bool atStart);` | method |
| `OnCloseEncounterMenu` | `void OnCloseEncounterMenu();` | method |
| `AgentLookingAtAgent` | `bool AgentLookingAtAgent(IAgent agent1, IAgent agent2);` | method |
| `OnCharacterLocationChanged` | `void OnCharacterLocationChanged(LocationCharacter locationCharacter, Location fromLocation, Location toLocation);` | method |
| `OnProcessSentence` | `void OnProcessSentence();` | method |
| `OnConversationContinue` | `void OnConversationContinue();` | method |
| `CheckIfAgentCanFollow` | `bool CheckIfAgentCanFollow(IAgent agent);` | method |
| `AddAgentFollowing` | `void AddAgentFollowing(IAgent agent);` | method |
| `CheckIfAgentCanUnFollow` | `bool CheckIfAgentCanUnFollow(IAgent agent);` | method |
| `RemoveAgentFollowing` | `void RemoveAgentFollowing(IAgent agent);` | method |
| `OnConversationPlay` | `void OnConversationPlay(string idleActionId, string idleFaceAnimId, string reactionId, string reactionFaceAnimId, string soundPath);` | method |
| `OnConversationStart` | `void OnConversationStart(IAgent agent, bool setActionsInstantly);` | method |
| `OnConversationEnd` | `void OnConversationEnd(IAgent agent);` | method |
| `EndMission` | `void EndMission();` | method |
| `FadeOutCharacter` | `void FadeOutCharacter(CharacterObject characterObject);` | method |
| `OnGameStateChanged` | `void OnGameStateChanged();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ActionNotes](../ActionNotes)
- [same namespace AIBehaviorData](../AIBehaviorData)
- [same namespace Army](../Army)
- [same namespace AtmosphereGrid](../AtmosphereGrid)
