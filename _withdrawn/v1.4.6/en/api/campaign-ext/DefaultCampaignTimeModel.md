---
title: "DefaultCampaignTimeModel"
description: "DefaultCampaignTimeModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting CampaignTimeModel; 11 exposed members (0 methods, 11 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCampaignTimeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultCampaignTimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs. It is a public class, implementing/inheriting CampaignTimeModel; the inheritance chain is DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel → GameModel. It exposes 11 public/protected members: 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCampaignTimeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel → GameModel. The surface is property-led (properties 11/11, methods 0/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CampaignStartTime` | `public override CampaignTime CampaignStartTime` | property |
| `SunRise` | `public override int SunRise` | property |
| `SunSet` | `public override int SunSet` | property |
| `TimeTicksPerMillisecond` | `public override long TimeTicksPerMillisecond` | property |
| `MillisecondInSecond` | `public override int MillisecondInSecond` | property |
| `SecondsInMinute` | `public override int SecondsInMinute` | property |
| `MinutesInHour` | `public override int MinutesInHour` | property |
| `HoursInDay` | `public override int HoursInDay` | property |
| `DaysInWeek` | `public override int DaysInWeek` | property |
| `WeeksInSeason` | `public override int WeeksInSeason` | property |
| `SeasonsInYear` | `public override int SeasonsInYear` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CampaignTimeModel](../CampaignTimeModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
