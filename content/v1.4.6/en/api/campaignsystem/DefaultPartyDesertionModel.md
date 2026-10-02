---
title: "DefaultPartyDesertionModel"
description: "DefaultPartyDesertionModel: a public class in TaleWorlds.CampaignSystem, inheriting PartyDesertionModel; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs."
---
# DefaultPartyDesertionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyDesertionModel : PartyDesertionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs`

## Overview

DefaultPartyDesertionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs. It is a public class, implementing/inheriting PartyDesertionModel; the inheritance chain is DefaultPartyDesertionModel → PartyDesertionModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyDesertionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPartyDesertionModel → PartyDesertionModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyDesertionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMoraleThresholdForTroopDesertion` | `public override int GetMoraleThresholdForTroopDesertion()` | method |
| `GetDesertionChanceForTroop` | `public override float GetDesertionChanceForTroop(MobileParty mobileParty, in TroopRosterElement troopRosterElement)` | method |
| `GetTroopsToDesert` | `public override TroopRoster GetTroopsToDesert(MobileParty mobileParty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PartyDesertionModel](../PartyDesertionModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
