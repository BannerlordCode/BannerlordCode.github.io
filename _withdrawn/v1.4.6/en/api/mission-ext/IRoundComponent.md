---
title: "IRoundComponent"
description: "IRoundComponent: a public interface in TaleWorlds.MountAndBlade, inheriting IMissionBehavior; 12 exposed members (0 methods, 6 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/IRoundComponent.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IRoundComponent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IRoundComponent : IMissionBehavior`
**File:** `TaleWorlds.MountAndBlade/IRoundComponent.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

IRoundComponent lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/IRoundComponent.cs. It is a public interface, implementing/inheriting IMissionBehavior; the inheritance chain is IRoundComponent → IMissionBehavior. It exposes 12 public/protected members: 6 properties, 6 events.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IRoundComponent lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain IRoundComponent → IMissionBehavior. The surface is property-led (properties 6/12, methods 0/12), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/IRoundComponent.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnRoundStarted;` | `event Action OnRoundStarted;` | event |
| `OnPreparationEnded;` | `event Action OnPreparationEnded;` | event |
| `OnPreRoundEnding;` | `event Action OnPreRoundEnding;` | event |
| `OnRoundEnding;` | `event Action OnRoundEnding;` | event |
| `OnPostRoundEnded;` | `event Action OnPostRoundEnded;` | event |
| `OnCurrentRoundStateChanged;` | `event Action OnCurrentRoundStateChanged;` | event |
| `LastRoundEndRemainingTime` | `float LastRoundEndRemainingTime` | property |
| `RemainingRoundTime` | `float RemainingRoundTime` | property |
| `CurrentRoundState` | `MultiplayerRoundState CurrentRoundState` | property |
| `RoundCount` | `int RoundCount` | property |
| `RoundWinner` | `BattleSideEnum RoundWinner` | property |
| `RoundEndReason` | `RoundEndReason RoundEndReason` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IMissionBehavior](../IMissionBehavior/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
