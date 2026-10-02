---
title: "MultiplayerPollComponent"
description: "MultiplayerPollComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 7 exposed members (5 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerPollComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerPollComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerPollComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerPollComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 7 public/protected members: 5 methods, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerPollComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerPollComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 5/7, properties 0/7), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerPollComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnMissionTick` | `public override void OnMissionTick(float dt)` | method |
| `Vote` | `public void Vote(bool accepted)` | method |
| `RequestKickPlayerPoll` | `public void RequestKickPlayerPoll(NetworkCommunicator peer, bool banPlayer)` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `MinimumParticipantCountRequired` | `public const int MinimumParticipantCountRequired` | field |
| `Type` | `public enum Type` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
