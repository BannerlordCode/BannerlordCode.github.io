---
title: "MultiplayerGameNotificationsComponent"
description: "MultiplayerGameNotificationsComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork; 16 exposed members (15 methods, 1 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs."
---
# MultiplayerGameNotificationsComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerGameNotificationsComponent : MissionNetwork`
**File:** `TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs`

## Overview

MultiplayerGameNotificationsComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs. It is a public class, implementing/inheriting MissionNetwork; the inheritance chain is MultiplayerGameNotificationsComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 16 public/protected members: 15 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerGameNotificationsComponent is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MultiplayerGameNotificationsComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 15/16, properties 1/16), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerGameNotificationsComponent.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NotificationCount` | `public static int NotificationCount` | property |
| `WarmupEnding` | `public void WarmupEnding()` | method |
| `GameOver` | `public void GameOver(Team winnerTeam)` | method |
| `PreparationStarted` | `public void PreparationStarted()` | method |
| `FlagsXRemoved` | `public void FlagsXRemoved(FlagCapturePoint removedFlag)` | method |
| `FlagXRemaining` | `public void FlagXRemaining(FlagCapturePoint remainingFlag)` | method |
| `FlagsWillBeRemovedInXSeconds` | `public void FlagsWillBeRemovedInXSeconds(int timeLeft)` | method |
| `FlagXCapturedByTeamX` | `public void FlagXCapturedByTeamX(SynchedMissionObject flag, Team capturingTeam)` | method |
| `GoldCarriedFromPreviousRound` | `public void GoldCarriedFromPreviousRound(int carriedGoldAmount, NetworkCommunicator syncToPeer)` | method |
| `PlayerIsInactive` | `public void PlayerIsInactive(NetworkCommunicator peer)` | method |
| `FormationAutoFollowEnforced` | `public void FormationAutoFollowEnforced(NetworkCommunicator peer)` | method |
| `PollRejected` | `public void PollRejected(MultiplayerPollRejectReason reason)` | method |
| `PlayerKicked` | `public void PlayerKicked(NetworkCommunicator kickedPeer)` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `HandleNewClientConnect` | `protected override void HandleNewClientConnect(PlayerConnectionInfo clientConnectionInfo)` | method |
| `HandlePlayerDisconnect` | `protected override void HandlePlayerDisconnect(NetworkCommunicator networkPeer)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionNetwork](../MissionNetwork)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
