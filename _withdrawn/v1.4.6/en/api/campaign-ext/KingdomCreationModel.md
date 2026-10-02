---
title: "KingdomCreationModel"
description: "KingdomCreationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<KingdomCreationModel>; 7 exposed members (3 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KingdomCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

KingdomCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<KingdomCreationModel>; the inheritance chain is KingdomCreationModel → MBGameModel → GameModel. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomCreationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain KingdomCreationModel → MBGameModel → GameModel. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom` | property |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom` | property |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom` | property |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies` | property |
| `IsPlayerKingdomCreationPossible` | `public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject>explanations);` | method |
| `IsPlayerKingdomAbdicationPossible` | `public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject>explanations);` | method |
| `IEnumerable` | `public abstract IEnumerable<CultureObject>GetAvailablePlayerKingdomCultures();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
