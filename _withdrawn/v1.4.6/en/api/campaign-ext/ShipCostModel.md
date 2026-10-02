---
title: "ShipCostModel"
description: "ShipCostModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<ShipCostModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ShipCostModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ShipCostModel : MBGameModel<ShipCostModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

ShipCostModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ShipCostModel>; the inheritance chain is ShipCostModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ShipCostModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain ShipCostModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ShipCostModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetShipTradeValue` | `public abstract float GetShipTradeValue(Ship ship, PartyBase seller, PartyBase buyer);` | method |
| `GetShipRepairCost` | `public abstract float GetShipRepairCost(Ship ship, PartyBase owner);` | method |
| `GetShipUpgradePieceCost` | `public abstract int GetShipUpgradePieceCost(Ship ship, ShipUpgradePiece piece, PartyBase owner);` | method |
| `GetShipSellingPenalty` | `public abstract float GetShipSellingPenalty();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
