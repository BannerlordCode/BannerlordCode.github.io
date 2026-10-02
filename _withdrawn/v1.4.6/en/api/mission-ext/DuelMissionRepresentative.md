---
title: "DuelMissionRepresentative"
description: "DuelMissionRepresentative: a public class in TaleWorlds.MountAndBlade.MissionRepresentatives, inheriting MissionRepresentativeBase; 15 exposed members (11 methods, 3 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DuelMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DuelMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

DuelMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is DuelMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. It exposes 15 public/protected members: 11 methods, 3 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DuelMissionRepresentative lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionRepresentatives`, inheritance chain DuelMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. The surface is method-led (methods 11/15, properties 3/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/DuelMissionRepresentative.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Bounty` | `public int Bounty` | property |
| `Score` | `public int Score` | property |
| `NumberOfWins` | `public int NumberOfWins` | property |
| `Initialize` | `public override void Initialize()` | method |
| `AddRemoveMessageHandlers` | `public void AddRemoveMessageHandlers(GameNetwork.NetworkMessageHandlerRegisterer.RegisterMode mode)` | method |
| `OnInteraction` | `public void OnInteraction()` | method |
| `DuelRequested` | `public void DuelRequested(Agent requesterAgent, TroopType selectedAreaTroopType)` | method |
| `CheckHasRequestFromAndRemoveRequestIfNeeded` | `public bool CheckHasRequestFromAndRemoveRequestIfNeeded(MissionPeer requestOwner)` | method |
| `OnDuelPreparation` | `public void OnDuelPreparation(MissionPeer requesterPeer, MissionPeer requesteePeer)` | method |
| `OnObjectFocused` | `public void OnObjectFocused(IFocusable focusedObject)` | method |
| `OnObjectFocusLost` | `public void OnObjectFocusLost()` | method |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | method |
| `ResetBountyAndNumberOfWins` | `public void ResetBountyAndNumberOfWins()` | method |
| `OnDuelWon` | `public void OnDuelWon(float gainedScore)` | method |
| `DuelPrepTime` | `public const int DuelPrepTime` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase/)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative/)
- [same namespace FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative/)
- [same namespace SiegeMissionRepresentative](../SiegeMissionRepresentative/)
- [same namespace TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative/)
