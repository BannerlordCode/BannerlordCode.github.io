---
title: "MissionConversationLogic"
description: "MissionConversationLogic: a public class in SandBox, inheriting MissionLogic; 21 exposed members (14 methods, 5 properties, 0 fields). Source: SandBox/Conversation/MissionLogics/MissionConversationLogic.cs."
---
# MissionConversationLogic

**Namespace:** `SandBox.Conversation.MissionLogics`
**Module:** `SandBox`
**Type:** `public class MissionConversationLogic : MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`

## Overview

MissionConversationLogic lives in the SandBox module, source file SandBox/Conversation/MissionLogics/MissionConversationLogic.cs. It is a public class, implementing/inheriting MissionLogic; the inheritance chain is MissionConversationLogic → MissionLogic. It exposes 21 public/protected members: 14 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionConversationLogic is a top-level type in SandBox, namespace differing from (SandBox.Conversation.MissionLogics) the module directory; inheritance chain MissionConversationLogic → MissionLogic. The surface is method-led (methods 14/21, properties 5/21), so it mostly exposes operations. MissionLogic on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Conversation/MissionLogics/MissionConversationLogic.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Current` | `public static MissionConversationLogic Current` | property |
| `State` | `public MissionState State` | property |
| `ConversationManager` | `public ConversationManager ConversationManager` | property |
| `IsReadyForConversation` | `public bool IsReadyForConversation` | property |
| `ConversationAgent` | `public Agent ConversationAgent` | property |
| `MissionConversationLogic` | `public MissionConversationLogic(CharacterObject teleportNearChar)` | constructor |
| `MissionConversationLogic` | `public MissionConversationLogic()` | constructor |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnAgentBuild` | `public override void OnAgentBuild(Agent agent, Banner banner)` | method |
| `SetSpawnArea` | `public void SetSpawnArea(Alley alley)` | method |
| `SetSpawnArea` | `public void SetSpawnArea(Workshop workshop)` | method |
| `SetSpawnArea` | `public void SetSpawnArea(string customTag)` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `EarlyStart` | `public override void EarlyStart()` | method |
| `OnEndMission` | `protected override void OnEndMission()` | method |
| `OnAgentInteraction` | `public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)` | method |
| `StartConversation` | `public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)` | method |
| `IsThereAgentAction` | `public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)` | method |
| `OnRenderingStarted` | `public override void OnRenderingStarted()` | method |
| `DisableStartConversation` | `public void DisableStartConversation(bool isDisabled)` | method |

## See Also

- [↑ sandbox module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ConversationMissionLogic](../ConversationMissionLogic)
