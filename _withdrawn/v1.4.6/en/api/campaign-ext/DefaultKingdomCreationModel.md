---
title: "DefaultKingdomCreationModel"
description: "DefaultKingdomCreationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting KingdomCreationModel; 7 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultKingdomCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultKingdomCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs. It is a public class, implementing/inheriting KingdomCreationModel; the inheritance chain is DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel → GameModel. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultKingdomCreationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel → GameModel. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom` | property |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom` | property |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom` | property |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies` | property |
| `IsPlayerKingdomCreationPossible` | `public override bool IsPlayerKingdomCreationPossible(out List<TextObject>explanations)` | method |
| `IsPlayerKingdomAbdicationPossible` | `public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject>explanations)` | method |
| `IEnumerable` | `public override IEnumerable<CultureObject>GetAvailablePlayerKingdomCultures()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface KingdomCreationModel](../KingdomCreationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
