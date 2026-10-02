---
title: "MissionMultiplayerGameModeDuelClient"
description: "MissionMultiplayerGameModeDuelClient: a public class in TaleWorlds.MountAndBlade, inheriting MissionMultiplayerGameModeBaseClient; 15 exposed members (7 methods, 8 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs."
---
# MissionMultiplayerGameModeDuelClient

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MissionMultiplayerGameModeDuelClient : MissionMultiplayerGameModeBaseClient`
**File:** `TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs`

## Overview

MissionMultiplayerGameModeDuelClient lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs. It is a public class, implementing/inheriting MissionMultiplayerGameModeBaseClient; the inheritance chain is MissionMultiplayerGameModeDuelClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 15 public/protected members: 7 methods, 8 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMultiplayerGameModeDuelClient is a top-level type in TaleWorlds.MountAndBlade, namespace matching the module directory; inheritance chain MissionMultiplayerGameModeDuelClient → MissionMultiplayerGameModeBaseClient → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is property-led (properties 8/15, methods 7/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionMultiplayerGameModeDuelClient.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsGameModeUsingGold` | `public override bool IsGameModeUsingGold` | property |
| `IsGameModeTactical` | `public override bool IsGameModeTactical` | property |
| `IsGameModeUsingRoundCountdown` | `public override bool IsGameModeUsingRoundCountdown` | property |
| `IsGameModeUsingAllowCultureChange` | `public override bool IsGameModeUsingAllowCultureChange` | property |
| `IsGameModeUsingAllowTroopChange` | `public override bool IsGameModeUsingAllowTroopChange` | property |
| `GameType` | `public override MultiplayerGameType GameType` | property |
| `IsInDuel` | `public bool IsInDuel` | property |
| `MyRepresentative` | `public DuelMissionRepresentative MyRepresentative` | property |
| `GetGoldAmount` | `public override int GetGoldAmount()` | method |
| `OnGoldAmountChangedForRepresentative` | `public override void OnGoldAmountChangedForRepresentative(MissionRepresentativeBase representative, int goldAmount)` | method |
| `OnBehaviorInitialize` | `public override void OnBehaviorInitialize()` | method |
| `OnRemoveBehavior` | `public override void OnRemoveBehavior()` | method |
| `OnAgentRemoved` | `public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)` | method |
| `CanRequestCultureChange` | `public override bool CanRequestCultureChange()` | method |
| `CanRequestTroopChange` | `public override bool CanRequestTroopChange()` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionMultiplayerGameModeBaseClient](../MissionMultiplayerGameModeBaseClient)
- [same namespace ActionIndexCache](../ActionIndexCache)
- [same namespace AgentBuildData](../AgentBuildData)
- [same namespace AgentCapsuleData](../AgentCapsuleData)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic)
