---
title: "FlagDominationMissionRepresentative"
description: "FlagDominationMissionRepresentative: a public class in TaleWorlds.MountAndBlade, inheriting MissionRepresentativeBase; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs."
---
# FlagDominationMissionRepresentative

**Namespace:** `TaleWorlds.MountAndBlade.MissionRepresentatives`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FlagDominationMissionRepresentative : MissionRepresentativeBase`
**File:** `TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs`

## Overview

FlagDominationMissionRepresentative lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs. It is a public class, implementing/inheriting MissionRepresentativeBase; the inheritance chain is FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FlagDominationMissionRepresentative is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.MissionRepresentatives) the module directory; inheritance chain FlagDominationMissionRepresentative → MissionRepresentativeBase → PeerComponent. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. PeerComponent on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/MissionRepresentatives/FlagDominationMissionRepresentative.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetGoldAmountForVisual` | `public int GetGoldAmountForVisual()` | method |
| `UpdateSelectedClassServer` | `public void UpdateSelectedClassServer(Agent agent)` | method |
| `CheckIfSurvivedLastRoundAndReset` | `public bool CheckIfSurvivedLastRoundAndReset()` | method |
| `GetGoldGainsFromKillData` | `public int GetGoldGainsFromKillData(MPPerkObject.MPPerkHandler killerPerkHandler, MPPerkObject.MPPerkHandler assistingHitterPerkHandler, MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist, bool isFriendly)` | method |
| `GetGoldGainFromKillDataAndUpdateFlags` | `public int GetGoldGainFromKillDataAndUpdateFlags(MultiplayerClassDivisions.MPHeroClass victimClass, bool isAssist)` | method |
| `GetGoldGainsFromAllyDeathReward` | `public int GetGoldGainsFromAllyDeathReward(int baseAmount)` | method |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MissionRepresentativeBase](../MissionRepresentativeBase)
- [same namespace DuelMissionRepresentative](../DuelMissionRepresentative)
- [same namespace FFAMissionRepresentative](../FFAMissionRepresentative)
- [same namespace SiegeMissionRepresentative](../SiegeMissionRepresentative)
- [same namespace TeamDeathmatchMissionRepresentative](../TeamDeathmatchMissionRepresentative)
