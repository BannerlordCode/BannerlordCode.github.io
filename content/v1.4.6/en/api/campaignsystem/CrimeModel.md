---
title: "CrimeModel"
description: "CrimeModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<CrimeModel>; 12 exposed members (9 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs."
---
# CrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`

## Overview

CrimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CrimeModel>; the inheritance chain is CrimeModel → MBGameModel. It exposes 12 public/protected members: 9 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrimeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain CrimeModel → MBGameModel. The surface is method-led (methods 9/12, properties 2/12), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DeclareWarCrimeRatingThreshold` | `public abstract float DeclareWarCrimeRatingThreshold` | property |
| `GetMaxCrimeRating` | `public abstract float GetMaxCrimeRating();` | method |
| `GetMinAcceptableCrimeRating` | `public abstract float GetMinAcceptableCrimeRating(IFaction faction);` | method |
| `GetCrimeRatingAfterPunishment` | `public abstract float GetCrimeRatingAfterPunishment();` | method |
| `DoesPlayerHaveAnyCrimeRating` | `public abstract bool DoesPlayerHaveAnyCrimeRating(IFaction faction);` | method |
| `IsPlayerCrimeRatingSevere` | `public abstract bool IsPlayerCrimeRatingSevere(IFaction faction);` | method |
| `IsPlayerCrimeRatingModerate` | `public abstract bool IsPlayerCrimeRatingModerate(IFaction faction);` | method |
| `IsPlayerCrimeRatingMild` | `public abstract bool IsPlayerCrimeRatingMild(IFaction faction);` | method |
| `GetCost` | `public abstract float GetCost(IFaction faction, CrimeModel.PaymentMethod paymentMethod, float minimumCrimeRating);` | method |
| `GetDailyCrimeRatingChange` | `public abstract ExplainedNumber GetDailyCrimeRatingChange(IFaction faction, bool includeDescriptions = false);` | method |
| `uint` | `public enum PaymentMethod : uint` | property |
| `uint` | `public enum PaymentMethod : uint` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
