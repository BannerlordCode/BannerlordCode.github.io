---
title: "DefaultPartySpeedCalculatingModel"
description: "DefaultPartySpeedCalculatingModel: a public class in TaleWorlds.CampaignSystem, inheriting PartySpeedModel; 4 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs."
---
# DefaultPartySpeedCalculatingModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartySpeedCalculatingModel : PartySpeedModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs`

## Overview

DefaultPartySpeedCalculatingModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs. It is a public class, implementing/inheriting PartySpeedModel; the inheritance chain is DefaultPartySpeedCalculatingModel → PartySpeedModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 2 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartySpeedCalculatingModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartySpeedCalculatingModel → PartySpeedModel → MBGameModel. The surface is method-led (methods 2/4, properties 2/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartySpeedCalculatingModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BaseSpeed` | `public override float BaseSpeed` | property |
| `MinimumSpeed` | `public override float MinimumSpeed` | property |
| `CalculateBaseSpeed` | `public override ExplainedNumber CalculateBaseSpeed(MobileParty mobileParty, bool includeDescriptions = false, int additionalTroopOnFootCount = 0, int additionalTroopOnHorseCount = 0)` | method |
| `CalculateFinalSpeed` | `public override ExplainedNumber CalculateFinalSpeed(MobileParty mobileParty, ExplainedNumber finalSpeed)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartySpeedModel](../PartySpeedModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
