---
title: "DefaultDelayedTeleportationModel"
description: "DefaultDelayedTeleportationModel: a public class in TaleWorlds.CampaignSystem, inheriting DelayedTeleportationModel; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs."
---
# DefaultDelayedTeleportationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDelayedTeleportationModel : DelayedTeleportationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs`

## Overview

DefaultDelayedTeleportationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs. It is a public class, implementing/inheriting DelayedTeleportationModel; the inheritance chain is DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDelayedTeleportationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultDelayedTeleportationModel → DelayedTeleportationModel → MBGameModel. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultDelayedTeleportationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultTeleportationSpeed` | `public override float DefaultTeleportationSpeed` | property |
| `GetTeleportationDelayAsHours` | `public override ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target)` | method |
| `CanPerformImmediateTeleport` | `public override bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DelayedTeleportationModel](../DelayedTeleportationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
