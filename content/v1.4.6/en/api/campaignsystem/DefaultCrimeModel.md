---
title: "DefaultCrimeModel"
description: "DefaultCrimeModel: a public class in TaleWorlds.CampaignSystem, inheriting CrimeModel; 10 exposed members (9 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs."
---
# DefaultCrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCrimeModel : CrimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs`

## Overview

DefaultCrimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs. It is a public class, implementing/inheriting CrimeModel; the inheritance chain is DefaultCrimeModel → CrimeModel → MBGameModel. It exposes 10 public/protected members: 9 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCrimeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultCrimeModel → CrimeModel → MBGameModel. The surface is method-led (methods 9/10, properties 1/10), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCrimeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoesPlayerHaveAnyCrimeRating` | `public override bool DoesPlayerHaveAnyCrimeRating(IFaction faction)` | method |
| `IsPlayerCrimeRatingSevere` | `public override bool IsPlayerCrimeRatingSevere(IFaction faction)` | method |
| `IsPlayerCrimeRatingModerate` | `public override bool IsPlayerCrimeRatingModerate(IFaction faction)` | method |
| `IsPlayerCrimeRatingMild` | `public override bool IsPlayerCrimeRatingMild(IFaction faction)` | method |
| `GetCost` | `public override float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating)` | method |
| `GetDailyCrimeRatingChange` | `public override ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false)` | method |
| `DeclareWarCrimeRatingThreshold` | `public override float DeclareWarCrimeRatingThreshold` | property |
| `GetMaxCrimeRating` | `public override float GetMaxCrimeRating()` | method |
| `GetMinAcceptableCrimeRating` | `public override float GetMinAcceptableCrimeRating(IFaction faction)` | method |
| `GetCrimeRatingAfterPunishment` | `public override float GetCrimeRatingAfterPunishment()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface CrimeModel](../CrimeModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
