---
title: "TeamDeathmatchMissionRepresentative"
description: "TeamDeathmatchMissionRepresentative: a public class in TaleWorlds.MountAndBlade.MissionRepresentatives, inheriting MissionRepresentativeBase; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TeamDeathmatchMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TeamDeathmatchMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TeamDeathmatchMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is TeamDeathmatchMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TeamDeathmatchMissionRepresentative lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionRepresentatives`, inheritance chain TeamDeathmatchMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/TeamDeathmatchMissionRepresentative.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | method |
| `GetGoldGainsFromKillDataAndUpdateFlags` | `public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)` | method |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase/)
- [same namespace DuelMissionRepresentative](../DuelMissionRepresentative/)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative/)
- [same namespace FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative/)
- [same namespace SiegeMissionRepresentative](../SiegeMissionRepresentative/)
