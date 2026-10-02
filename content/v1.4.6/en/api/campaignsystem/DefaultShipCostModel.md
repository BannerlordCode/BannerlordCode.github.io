---
title: "DefaultShipCostModel"
description: "DefaultShipCostModel: a public class in TaleWorlds.CampaignSystem, inheriting ShipCostModel; 4 exposed members (4 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs."
---
# DefaultShipCostModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultShipCostModel : ShipCostModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs`

## Overview

DefaultShipCostModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs. It is a public class, implementing/inheriting ShipCostModel; the inheritance chain is DefaultShipCostModel → ShipCostModel → MBGameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultShipCostModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultShipCostModel → ShipCostModel → MBGameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultShipCostModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetShipTradeValue` | `public override float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer)` | method |
| `GetShipRepairCost` | `public override float GetShipRepairCost(Ship ship, PartyBase owner)` | method |
| `GetShipUpgradePieceCost` | `public override int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner)` | method |
| `GetShipSellingPenalty` | `public override float GetShipSellingPenalty()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface ShipCostModel](../ShipCostModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
