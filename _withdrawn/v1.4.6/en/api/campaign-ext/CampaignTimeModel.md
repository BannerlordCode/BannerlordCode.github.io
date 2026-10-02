---
title: "CampaignTimeModel"
description: "CampaignTimeModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CampaignTimeModel>; 11 exposed members (0 methods, 11 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignTimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CampaignTimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CampaignTimeModel>; the inheritance chain is CampaignTimeModel → MBGameModel → GameModel. It exposes 11 public/protected members: 11 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CampaignTimeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CampaignTimeModel → MBGameModel → GameModel. The surface is property-led (properties 11/11, methods 0/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CampaignStartTime` | `public abstract CampaignTime CampaignStartTime` | property |
| `SunRise` | `public abstract int SunRise` | property |
| `SunSet` | `public abstract int SunSet` | property |
| `TimeTicksPerMillisecond` | `public abstract long TimeTicksPerMillisecond` | property |
| `MillisecondInSecond` | `public abstract int MillisecondInSecond` | property |
| `SecondsInMinute` | `public abstract int SecondsInMinute` | property |
| `MinutesInHour` | `public abstract int MinutesInHour` | property |
| `HoursInDay` | `public abstract int HoursInDay` | property |
| `DaysInWeek` | `public abstract int DaysInWeek` | property |
| `WeeksInSeason` | `public abstract int WeeksInSeason` | property |
| `SeasonsInYear` | `public abstract int SeasonsInYear` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
