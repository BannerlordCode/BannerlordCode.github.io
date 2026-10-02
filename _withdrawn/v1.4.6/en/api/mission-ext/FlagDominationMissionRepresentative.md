---
title: "FlagDominationMissionRepresentative"
description: "FlagDominationMissionRepresentative: a public class in TaleWorlds.MountAndBlade.MissionRepresentatives, inheriting MissionRepresentativeBase; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FlagDominationMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

FlagDominationMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FlagDominationMissionRepresentative lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.MissionRepresentatives`, inheritance chain FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent → IEntityComponent. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetGoldAmountForVisual` | `public int GetGoldAmountForVisual()` | method |
| `UpdateSelectedClassServer` | `public void UpdateSelectedClassServer(Agent agent)` | method |
| `CheckIfSurvivedLastRoundAndReset` | `public bool CheckIfSurvivedLastRoundAndReset()` | method |
| `GetGoldGainsFromKillData` | `public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)` | method |
| `GetGoldGainFromKillDataAndUpdateFlags` | `public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)` | method |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase/)
- [same namespace DuelMissionRepresentative](../DuelMissionRepresentative/)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative/)
- [same namespace SiegeMissionRepresentative](../SiegeMissionRepresentative/)
- [same namespace TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative/)
