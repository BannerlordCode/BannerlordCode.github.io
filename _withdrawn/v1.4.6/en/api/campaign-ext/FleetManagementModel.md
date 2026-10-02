---
title: "FleetManagementModel"
description: "FleetManagementModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<FleetManagementModel>; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FleetManagementModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class FleetManagementModel : MBGameModel<FleetManagementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

FleetManagementModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<FleetManagementModel>; the inheritance chain is FleetManagementModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: FleetManagementModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain FleetManagementModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/FleetManagementModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CanTroopsReturn` | `public abstract bool CanTroopsReturn();` | method |
| `GetReturnTimeForTroops` | `public abstract CampaignTime GetReturnTimeForTroops(Ship ship);` | method |
| `CanSendShipToPlayerClan` | `public abstract bool CanSendShipToPlayerClan(Ship ship, int playerShipsCount, int troopsCountToSend, out TextObject hint);` | method |
| `MinimumTroopCountRequiredToSendShips` | `public abstract int MinimumTroopCountRequiredToSendShips` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
