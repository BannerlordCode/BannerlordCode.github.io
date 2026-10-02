---
title: "VoiceChatHandler"
description: "VoiceChatHandler: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 12 exposed members (7 methods, 0 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/VoiceChatHandler.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# VoiceChatHandler

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class VoiceChatHandler : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/VoiceChatHandler.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

VoiceChatHandler lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/VoiceChatHandler.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is VoiceChatHandler → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 12 public/protected members: 7 methods, 1 fields, 4 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: VoiceChatHandler lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain VoiceChatHandler → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 7/12, properties 0/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/VoiceChatHandler.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnVoiceRecordStarted;` | `public event Action OnVoiceRecordStarted;` | event |
| `OnVoiceRecordStopped;` | `public event Action OnVoiceRecordStopped;` | event |
| `bool>OnPeerVoiceStatusUpdated;` | `public event Action<MissionPeer, bool>OnPeerVoiceStatusUpdated;` | event |
| `Action` | `public event Action<MissionPeer>OnPeerMuteStatusUpdated;` | event |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | method |
| `OnPlayerDisconnectedFromServer` | `public override void OnPlayerDisconnectedFromServer(NetworkCommunicator networkPeer)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |
| `VoiceFrameRawSizeInBytes` | `public const int VoiceFrameRawSizeInBytes` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
