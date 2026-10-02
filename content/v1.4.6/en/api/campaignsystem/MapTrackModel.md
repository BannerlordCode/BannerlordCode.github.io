---
title: "MapTrackModel"
description: "MapTrackModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MapTrackModel>; 11 exposed members (10 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs."
---
# MapTrackModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`

## Overview

MapTrackModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapTrackModel>; the inheritance chain is MapTrackModel → MBGameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MapTrackModel → MBGameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxTrackLife` | `public abstract float MaxTrackLife` | property |
| `GetSkipTrackChance` | `public abstract float GetSkipTrackChance(MobileParty mobileParty);` | method |
| `GetMaxTrackSpottingDistanceForMainParty` | `public abstract float GetMaxTrackSpottingDistanceForMainParty();` | method |
| `CanPartyLeaveTrack` | `public abstract bool CanPartyLeaveTrack(MobileParty mobileParty);` | method |
| `GetTrackDetectionDifficultyForMainParty` | `public abstract float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance);` | method |
| `GetSkillFromTrackDetected` | `public abstract float GetSkillFromTrackDetected(Track track);` | method |
| `GetTrackLife` | `public abstract int GetTrackLife(MobileParty mobileParty);` | method |
| `TrackTitle` | `public abstract TextObject TrackTitle(Track track);` | method |
| `string>>GetTrackDescription` | `public abstract IEnumerable<ValueTuple<TextObject, string>>GetTrackDescription(Track track);` | method |
| `GetTrackColor` | `public abstract uint GetTrackColor(Track track);` | method |
| `GetTrackScale` | `public abstract float GetTrackScale(Track track);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
