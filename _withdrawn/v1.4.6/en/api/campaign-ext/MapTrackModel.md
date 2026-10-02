---
title: "MapTrackModel"
description: "MapTrackModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<MapTrackModel>; 11 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapTrackModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapTrackModel : MBGameModel<MapTrackModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

MapTrackModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapTrackModel>; the inheritance chain is MapTrackModel → MBGameModel → GameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapTrackModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain MapTrackModel → MBGameModel → GameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapTrackModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
