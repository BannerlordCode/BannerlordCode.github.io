---
title: "DelayedTeleportationModel"
description: "DelayedTeleportationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<DelayedTeleportationModel>; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs."
---
# DelayedTeleportationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class DelayedTeleportationModel : MBGameModel<DelayedTeleportationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs`

## Overview

DelayedTeleportationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<DelayedTeleportationModel>; the inheritance chain is DelayedTeleportationModel → MBGameModel. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DelayedTeleportationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain DelayedTeleportationModel → MBGameModel. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/DelayedTeleportationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DefaultTeleportationSpeed` | `public abstract float DefaultTeleportationSpeed` | property |
| `GetTeleportationDelayAsHours` | `public abstract ExplainedNumber GetTeleportationDelayAsHours(Hero teleportingHero, PartyBase target);` | method |
| `CanPerformImmediateTeleport` | `public abstract bool CanPerformImmediateTeleport(Hero hero, MobileParty targetMobileParty, Settlement targetSettlement);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
