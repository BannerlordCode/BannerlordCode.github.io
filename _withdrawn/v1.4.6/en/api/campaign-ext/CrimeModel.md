---
title: "CrimeModel"
description: "CrimeModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<CrimeModel>; 12 exposed members (9 methods, 2 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CrimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CrimeModel : MBGameModel<CrimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

CrimeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CrimeModel>; the inheritance chain is CrimeModel → MBGameModel → GameModel. It exposes 12 public/protected members: 9 methods, 2 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrimeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain CrimeModel → MBGameModel → GameModel. The surface is method-led (methods 9/12, properties 2/12), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CrimeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
