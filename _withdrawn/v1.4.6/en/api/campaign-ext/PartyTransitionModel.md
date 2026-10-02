---
title: "PartyTransitionModel"
description: "PartyTransitionModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PartyTransitionModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PartyTransitionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyTransitionModel : MBGameModel<PartyTransitionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PartyTransitionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyTransitionModel>; the inheritance chain is PartyTransitionModel → MBGameModel → GameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyTransitionModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PartyTransitionModel → MBGameModel → GameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyTransitionModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetTransitionTimeForEmbarking` | `public abstract CampaignTime GetTransitionTimeForEmbarking(MobileParty mobileParty);` | method |
| `GetTransitionTimeDisembarking` | `public abstract CampaignTime GetTransitionTimeDisembarking(MobileParty mobileParty);` | method |
| `GetFleetTravelTimeToSettlement` | `public abstract CampaignTime GetFleetTravelTimeToSettlement(MobileParty mobileParty, Settlement targetSettlement);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
