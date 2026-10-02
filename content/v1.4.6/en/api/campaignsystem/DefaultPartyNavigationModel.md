---
title: "DefaultPartyNavigationModel"
description: "DefaultPartyNavigationModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyNavigationModel; 6 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs."
---
# DefaultPartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`

## Overview

DefaultPartyNavigationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs. It is a public class, implementing/inheriting PartyNavigationModel; the inheritance chain is DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyNavigationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEmbarkDisembarkThresholdDistance` | `public override float GetEmbarkDisembarkThresholdDistance()` | method |
| `DefaultPartyNavigationModel` | `public DefaultPartyNavigationModel()` | constructor |
| `int[]GetInvalidTerrainTypesForNavigationType` | `public override int[]GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)` | method |
| `IsTerrainTypeValidForNavigationType` | `public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)` | method |
| `HasNavalNavigationCapability` | `public override bool HasNavalNavigationCapability(MobileParty mobileParty)` | method |
| `CanPlayerNavigateToPosition` | `public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyNavigationModel](../PartyNavigationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
