---
title: "DefaultAgeModel"
description: "DefaultAgeModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting AgeModel; 21 exposed members (1 methods, 7 properties, 13 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultAgeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAgeModel : AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultAgeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs. It is a public class, implementing/inheriting AgeModel; the inheritance chain is DefaultAgeModel → AgeModel → MBGameModel → GameModel. It exposes 21 public/protected members: 1 methods, 7 properties, 13 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultAgeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultAgeModel → AgeModel → MBGameModel → GameModel. The surface is property-led (properties 7/21, methods 1/21), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BecomeInfantAge` | `public override int BecomeInfantAge` | property |
| `BecomeChildAge` | `public override int BecomeChildAge` | property |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge` | property |
| `HeroComesOfAge` | `public override int HeroComesOfAge` | property |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge` | property |
| `BecomeOldAge` | `public override int BecomeOldAge` | property |
| `MaxAge` | `public override int MaxAge` | property |
| `GetAgeLimitForLocation` | `public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | method |
| `TavernVisitorTag` | `public const string TavernVisitorTag` | field |
| `TavernDrinkerTag` | `public const string TavernDrinkerTag` | field |
| `SlowTownsmanTag` | `public const string SlowTownsmanTag` | field |
| `TownsfolkCarryingStuffTag` | `public const string TownsfolkCarryingStuffTag` | field |
| `BroomsWomanTag` | `public const string BroomsWomanTag` | field |
| `DancerTag` | `public const string DancerTag` | field |
| `BeggarTag` | `public const string BeggarTag` | field |
| `ChildTag` | `public const string ChildTag` | field |
| `TeenagerTag` | `public const string TeenagerTag` | field |
| `InfantTag` | `public const string InfantTag` | field |
| `NotaryTag` | `public const string NotaryTag` | field |
| `BarberTag` | `public const string BarberTag` | field |
| `AlleyGangMemberTag` | `public const string AlleyGangMemberTag` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AgeModel](../AgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel/)
