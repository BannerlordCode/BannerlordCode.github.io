---
title: "DefaultPartyNavigationModel"
description: "DefaultPartyNavigationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyNavigationModel; 6 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyNavigationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs. It is a public class, implementing/inheriting PartyNavigationModel; the inheritance chain is DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel → GameModel. It exposes 6 public/protected members: 5 methods, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyNavigationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel → GameModel. The surface is method-led (methods 5/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetEmbarkDisembarkThresholdDistance` | `public override float GetEmbarkDisembarkThresholdDistance()` | method |
| `DefaultPartyNavigationModel` | `public DefaultPartyNavigationModel()` | constructor |
| `int[]GetInvalidTerrainTypesForNavigationType` | `public override int[]GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)` | method |
| `IsTerrainTypeValidForNavigationType` | `public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)` | method |
| `HasNavalNavigationCapability` | `public override bool HasNavalNavigationCapability(MobileParty mobileParty)` | method |
| `CanPlayerNavigateToPosition` | `public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyNavigationModel](../PartyNavigationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
