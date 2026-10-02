---
title: "MultiplayerRoundComponent"
description: "MultiplayerRoundComponent: a public class in TaleWorlds.MountAndBlade, inheriting MissionNetwork, IRoundComponent; 18 exposed members (2 methods, 6 properties, 4 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerRoundComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MultiplayerRoundComponent : MissionNetwork, IRoundComponent, IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MultiplayerRoundComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs. It is a public class, implementing/inheriting MissionNetwork, IRoundComponent, IMissionBehavior; the inheritance chain is MultiplayerRoundComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. It exposes 18 public/protected members: 2 methods, 6 properties, 4 fields, 6 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MultiplayerRoundComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain MultiplayerRoundComponent → MissionNetwork → MissionLogic → MissionBehavior → IMissionBehavior. The surface is property-led (properties 6/18, methods 2/18), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MultiplayerRoundComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnRoundStarted;` | `public event Action OnRoundStarted;` | event |
| `OnPreparationEnded;` | `public event Action OnPreparationEnded;` | event |
| `OnPreRoundEnding;` | `public event Action OnPreRoundEnding;` | event |
| `OnRoundEnding;` | `public event Action OnRoundEnding;` | event |
| `OnPostRoundEnded;` | `public event Action OnPostRoundEnded;` | event |
| `OnCurrentRoundStateChanged;` | `public event Action OnCurrentRoundStateChanged;` | event |
| `RemainingRoundTime` | `public float RemainingRoundTime` | property |
| `LastRoundEndRemainingTime` | `public float LastRoundEndRemainingTime` | property |
| `CurrentRoundState` | `public MultiplayerRoundState CurrentRoundState` | property |
| `RoundCount` | `public int RoundCount` | property |
| `RoundWinner` | `public BattleSideEnum RoundWinner` | property |
| `RoundEndReason` | `public RoundEndReason RoundEndReason` | property |
| `AfterStart` | `public override void AfterStart()` | method |
| `OnUdpNetworkHandlerClose` | `protected override void OnUdpNetworkHandlerClose()` | method |
| `RoundEndDelayTime` | `public const int RoundEndDelayTime` | field |
| `RoundEndWaitTime` | `public const int RoundEndWaitTime` | field |
| `MatchEndWaitTime` | `public const int MatchEndWaitTime` | field |
| `WarmupEndWaitTime` | `public const int WarmupEndWaitTime` | field |

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
