---
title: "KingdomCreationModel"
description: "KingdomCreationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<KingdomCreationModel>; 7 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs."
---
# KingdomCreationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class KingdomCreationModel : MBGameModel<KingdomCreationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs`

## Overview

KingdomCreationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<KingdomCreationModel>; the inheritance chain is KingdomCreationModel → MBGameModel. It exposes 7 public/protected members: 3 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomCreationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain KingdomCreationModel → MBGameModel. The surface is property-led (properties 4/7, methods 3/7), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomCreationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MinimumClanTierToCreateKingdom` | `public abstract int MinimumClanTierToCreateKingdom` | property |
| `MinimumNumberOfSettlementsOwnedToCreateKingdom` | `public abstract int MinimumNumberOfSettlementsOwnedToCreateKingdom` | property |
| `MinimumTroopCountToCreateKingdom` | `public abstract int MinimumTroopCountToCreateKingdom` | property |
| `MaximumNumberOfInitialPolicies` | `public abstract int MaximumNumberOfInitialPolicies` | property |
| `IsPlayerKingdomCreationPossible` | `public abstract bool IsPlayerKingdomCreationPossible(out List<TextObject>explanations);` | method |
| `IsPlayerKingdomAbdicationPossible` | `public abstract bool IsPlayerKingdomAbdicationPossible(out List<TextObject>explanations);` | method |
| `IEnumerable` | `public abstract IEnumerable<CultureObject>GetAvailablePlayerKingdomCultures();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
