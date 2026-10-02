---
title: "DefaultMapTrackModel"
description: "DefaultMapTrackModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MapTrackModel; 11 exposed members (10 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMapTrackModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapTrackModel : MapTrackModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMapTrackModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs. It is a public class, implementing/inheriting MapTrackModel; the inheritance chain is DefaultMapTrackModel → MapTrackModel → MBGameModel → GameModel. It exposes 11 public/protected members: 10 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMapTrackModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMapTrackModel → MapTrackModel → MBGameModel → GameModel. The surface is method-led (methods 10/11, properties 1/11), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMapTrackModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxTrackLife` | `public override float MaxTrackLife` | property |
| `GetMaxTrackSpottingDistanceForMainParty` | `public override float GetMaxTrackSpottingDistanceForMainParty()` | method |
| `CanPartyLeaveTrack` | `public override bool CanPartyLeaveTrack(MobileParty mobileParty)` | method |
| `GetTrackLife` | `public override int GetTrackLife(MobileParty mobileParty)` | method |
| `GetTrackDetectionDifficultyForMainParty` | `public override float GetTrackDetectionDifficultyForMainParty(Track track, float trackSpottingDistance)` | method |
| `GetSkillFromTrackDetected` | `public override float GetSkillFromTrackDetected(Track track)` | method |
| `GetSkipTrackChance` | `public override float GetSkipTrackChance(MobileParty mobileParty)` | method |
| `TrackTitle` | `public override TextObject TrackTitle(Track track)` | method |
| `string>>GetTrackDescription` | `public override IEnumerable<ValueTuple<TextObject, string>>GetTrackDescription(Track track)` | method |
| `GetTrackColor` | `public override uint GetTrackColor(Track track)` | method |
| `GetTrackScale` | `public override float GetTrackScale(Track track)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapTrackModel](../MapTrackModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
