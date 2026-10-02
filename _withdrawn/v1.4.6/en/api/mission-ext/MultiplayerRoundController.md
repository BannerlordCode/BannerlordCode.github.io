---
title: "MultiplayerRoundController"
description: "MultiplayerRoundController: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork, IRoundComponent; 22 exposed members (8 methods, 8 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerRoundController.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerRoundController

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerRoundController : MissionNetwork, IRoundComponent, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundController.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerRoundController lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerRoundController.cs. It is a public class, implementing/inheriting MissionNetwork, IRoundComponent, IMissionBehavior; the inheritance chain is MultiplayerRoundController → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 22 public/protected members: 8 methods, 8 properties, 6 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerRoundController lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerRoundController → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 8/22, properties 8/22), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerRoundController.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnRoundStarted;` | `public event Action OnRoundStarted;` | event |
| `OnPreparationEnded;` | `public event Action OnPreparationEnded;` | event |
| `OnPreRoundEnding;` | `public event Action OnPreRoundEnding;` | event |
| `OnRoundEnding;` | `public event Action OnRoundEnding;` | event |
| `OnPostRoundEnded;` | `public event Action OnPostRoundEnded;` | event |
| `OnCurrentRoundStateChanged;` | `public event Action OnCurrentRoundStateChanged;` | event |
| `RoundCount` | `public int RoundCount` | property |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | property |
| `RoundEndReason` | `public RoundEndReason RoundEndReason` | property |
| `IsMatchEnding` | `public bool IsMatchEnding` | property |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime` | property |
| `RemainingRoundTime` | `public float RemainingRoundTime` | property |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState` | property |
| `IsRoundInProgress` | `public bool IsRoundInProgress` | property |
| `EnableEquipmentUpdate` | `public void EnableEquipmentUpdate()` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | method |
| `OnPreDisplayMissionTick` | `public override void OnPreDisplayMissionTick(float dt)` | method |
| `HandleLateNewClientAfterLoadingFinished` | `protected override void HandleLateNewClientAfterLoadingFinished(NetworkCommunicator networkPeer)` | method |
| `HandleClientEventCultureSelect` | `public bool HandleClientEventCultureSelect(NetworkCommunicator peer, CultureVoteClient message)` | method |
| `HandleNewClientAfterSynchronized` | `protected override void HandleNewClientAfterSynchronized(NetworkCommunicator networkPeer)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionNetwork](../MissionNetwork/)
- [base / interface IRoundComponent](../IRoundComponent/)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
