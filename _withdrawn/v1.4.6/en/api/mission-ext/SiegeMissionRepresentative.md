---
title: "SiegeMissionRepresentative"
description: "SiegeMissionRepresentative: a public class in TaleWorlds.MountAndBlade.MissionRepresentatives, inheriting MissionRepresentativeBase; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SiegeMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeMissionRepresentative lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionRepresentatives`, inheritance chain SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | method |
| `GetGoldGainsFromKillDataAndUpdateFlags` | `public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)` | method |
| `GetGoldGainsFromObjectiveAssist` | `public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)` | method |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase/)
- [same namespace DuelMissionRepresentative](../DuelMissionRepresentative/)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative/)
- [same namespace FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative/)
- [same namespace TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative/)
