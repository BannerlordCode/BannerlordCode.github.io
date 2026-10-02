---
title: "BanditDensityModel"
description: "BanditDensityModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<BanditDensityModel>; 13 exposed members (4 methods, 9 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs."
---
# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## Overview

BanditDensityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BanditDensityModel>; the inheritance chain is BanditDensityModel → MBGameModel. It exposes 13 public/protected members: 4 methods, 9 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BanditDensityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain BanditDensityModel → MBGameModel. The surface is property-led (properties 9/13, methods 4/13), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaxSupportedNumberOfLootersForClan` | `public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan);` | method |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | property |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout` | property |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout` | property |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction` | property |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction` | property |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission` | property |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout` | property |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout` | property |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission` | property |
| `GetMinimumTroopCountForHideoutMission` | `public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault);` | method |
| `GetMaximumTroopCountForHideoutMission` | `public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault);` | method |
| `IsPositionInsideNavalSafeZone` | `public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
