---
title: "DefaultDelayedTeleportationModel"
description: "DefaultDelayedTeleportationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting DelayedTeleportationModel; 3 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultDelayedTeleportationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultDelayedTeleportationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs. It is a public class, implementing/inheriting DelayedTeleportationModel; the inheritance chain is DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel → GameModel. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDelayedTeleportationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel → GameModel. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed` | property |
| `GetTeleportationDelayAsHours` | `public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)` | method |
| `CanPerformImmediateTeleport` | `public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface DelayedTeleportationModel](../DelayedTeleportationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
