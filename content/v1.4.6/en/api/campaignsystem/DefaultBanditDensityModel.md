---
title: "DefaultBanditDensityModel"
description: "DefaultBanditDensityModel: a public class in TaleWorlds.CampaignSystem, inheriting BanditDensityModel; 13 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs."
---
# DefaultBanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBanditDensityModel : BanditDensityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs`

## Overview

DefaultBanditDensityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs. It is a public class, implementing/inheriting BanditDensityModel; the inheritance chain is DefaultBanditDensityModel → BanditDensityModel → MBGameModel. It exposes 13 public/protected members: 4 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBanditDensityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBanditDensityModel → BanditDensityModel → MBGameModel. The surface is property-led (properties 9/13, methods 4/13), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | property |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout` | property |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout` | property |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction` | property |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction` | property |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission` | property |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout` | property |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout` | property |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission` | property |
| `GetMinimumTroopCountForHideoutMission` | `public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | method |
| `GetMaxSupportedNumberOfLootersForClan` | `public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | method |
| `GetMaximumTroopCountForHideoutMission` | `public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | method |
| `IsPositionInsideNavalSafeZone` | `public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BanditDensityModel](../BanditDensityModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
