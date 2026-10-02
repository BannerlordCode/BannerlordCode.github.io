---
title: "DefaultPartyTransitionModel"
description: "DefaultPartyTransitionModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting PartyTransitionModel; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPartyTransitionModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyTransitionModel : PartyTransitionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultPartyTransitionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs. It is a public class, implementing/inheriting PartyTransitionModel; the inheritance chain is DefaultPartyTransitionModel → PartyTransitionModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPartyTransitionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultPartyTransitionModel → PartyTransitionModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTransitionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetFleetTravelTimeToSettlement` | `public override CampaignTime GetFleetTravelTimeToSettlement(MobileParty mobileParty, Settlement targetSettlement)` | method |
| `GetTransitionTimeDisembarking` | `public override CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty)` | method |
| `GetTransitionTimeForEmbarking` | `public override CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface PartyTransitionModel](../PartyTransitionModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
