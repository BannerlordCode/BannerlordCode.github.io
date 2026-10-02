---
title: "SiegeMissionRepresentative"
description: "SiegeMissionRepresentative: a public class in TaleWorlds.MountAndBlade, inheriting MissionRepresentativeBase; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs."
---
# SiegeMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs`

## Overview

SiegeMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeMissionRepresentative is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.MissionRepresentatives) the module directory; inheritance chain SiegeMissionRepresentative → MissionRepresentativeBase → PeerComponent. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. PeerComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/SiegeMissionRepresentative.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnAgentSpawned` | `public override void OnAgentSpawned()` | method |
| `GetGoldGainsFromKillDataAndUpdateFlags` | `public int GetGoldGainsFromKillDataAndUpdateFlags(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isRanged, bool isFriendly)` | method |
| `GetGoldGainsFromObjectiveAssist` | `public int GetGoldGainsFromObjectiveAssist(GameEntity objectiveMostParentEntity, float contributionRatio, bool isCompleted)` | method |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase)
- [same namespace DuelMissionRepresentative](../DuelMissionRepresentative)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative)
- [same namespace FlagDominationMissionRepresentative](../FlagDominationMissionRepresentative)
- [same namespace TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative)
