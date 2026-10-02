---
title: "DefaultPartyShipLimitModel"
description: "DefaultPartyShipLimitModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyShipLimitModel; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyShipLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyShipLimitModel : PartyShipLimitModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyShipLimitModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs. It is a public class, implementing/inheriting PartyShipLimitModel; the inheritance chain is DefaultPartyShipLimitModel → PartyShipLimitModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyShipLimitModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyShipLimitModel → PartyShipLimitModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyShipLimitModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetIdealShipNumber` | `public override int GetIdealShipNumber(MobileParty mobileParty)` | method |
| `GetIdealShipNumber` | `public override int GetIdealShipNumber(Clan clan)` | method |
| `GetShipPriority` | `public override float GetShipPriority(MobileParty mobileParty, Ship ship, bool isSelling)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyShipLimitModel](../PartyShipLimitModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
