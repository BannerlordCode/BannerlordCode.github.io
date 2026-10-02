---
title: "MissionMultiplayerTeamDeathmatchClient"
description: "MissionMultiplayerTeamDeathmatchClient: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBaseClient; 11 exposed members (6 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs."
---
# MissionMultiplayerTeamDeathmatchClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerTeamDeathmatchClient : MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs`

## Overview

MissionMultiplayerTeamDeathmatchClient lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBaseClient; the inheritance chain is MissionMultiplayerTeamDeathmatchClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 11 public/protected members: 6 methods, 4 properties, 1 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerTeamDeathmatchClient is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerTeamDeathmatchClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is method-led (methods 6/11, properties 4/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerTeamDeathmatchClient.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Action` | `public event Action<GoldGain>OnGoldGainEvent;` | event |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | property |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | property |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | property |
| `GameType` | `public override MultiplayerGameType GameType` | property |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | method |
| `AfterStart` | `public override void AfterStart()` | method |
| `AddRemoveMessageHandlers` | `protected override void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegistererContainer registerer)` | method |
| `GetGoldAmount` | `public override int GetGoldAmount()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
