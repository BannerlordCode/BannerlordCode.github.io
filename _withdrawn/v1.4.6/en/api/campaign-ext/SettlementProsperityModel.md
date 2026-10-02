---
title: "SettlementProsperityModel"
description: "SettlementProsperityModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<SettlementProsperityModel>; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SettlementProsperityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SettlementProsperityModel : MBGameModel<SettlementProsperityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

SettlementProsperityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SettlementProsperityModel>; the inheritance chain is SettlementProsperityModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SettlementProsperityModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain SettlementProsperityModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementProsperityModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CalculateProsperityChange` | `public abstract ExplainedNumber CalculateProsperityChange(Town fortification, bool includeDescriptions = false);` | method |
| `CalculateHearthChange` | `public abstract ExplainedNumber CalculateHearthChange(Village village, bool includeDescriptions = false);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
