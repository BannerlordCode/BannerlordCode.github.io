---
title: "DefaultKingdomCreationModel"
description: "DefaultKingdomCreationModel: a public class in TaleWorlds.CampaignSystem, inheriting KingdomCreationModel; 7 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs."
---
# DefaultKingdomCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultKingdomCreationModel : KingdomCreationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs`

## Overview

DefaultKingdomCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs. It is a public class, implementing/inheriting KingdomCreationModel; the inheritance chain is DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultKingdomCreationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultKingdomCreationModel → KingdomCreationModel → MBGameModel. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomCreationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumClanTierToCreateKingdom` | `public override int MinimumClanTierToCreateKingdom` | property |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public override int MinimumNumberOfSettlementsOwnedToCreateKingdom` | property |
| `MinimumTroopCountToCreateKingdom` | `public override int MinimumTroopCountToCreateKingdom` | property |
| `MaximumNumberOfInitialPolicies` | `public override int MaximumNumberOfInitialPolicies` | property |
| `IsPlayerKingdomCreationPossible` | `public override bool IsPlayerKingdomCreationPossible(out List<TextObject>explanations)` | method |
| `IsPlayerKingdomAbdicationPossible` | `public override bool IsPlayerKingdomAbdicationPossible(out List<TextObject>explanations)` | method |
| `IEnumerable` | `public override IEnumerable<CultureObject>GetAvailablePlayerKingdomCultures()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface KingdomCreationModel](../KingdomCreationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
