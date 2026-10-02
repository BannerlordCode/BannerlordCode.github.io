---
title: "DefaultCampaignTimeModel"
description: "DefaultCampaignTimeModel: a public class in TaleWorlds.CampaignSystem, inheriting CampaignTimeModel; 11 exposed members (0 methods, 11 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs."
---
# DefaultCampaignTimeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`

## Overview

DefaultCampaignTimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs. It is a public class, implementing/inheriting CampaignTimeModel; the inheritance chain is DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel. It exposes 11 public/protected members: 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCampaignTimeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel. The surface is property-led (properties 11/11, methods 0/11), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CampaignTimeModel](../CampaignTimeModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
