---
title: "AgeModel"
description: "AgeModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<AgeModel>; 8 exposed members (1 methods, 7 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

AgeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AgeModel>; the inheritance chain is AgeModel → MBGameModel → GameModel. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgeModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain AgeModel → MBGameModel → GameModel. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `BecomeInfantAge` | `public abstract int BecomeInfantAge` | property |
| `BecomeChildAge` | `public abstract int BecomeChildAge` | property |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge` | property |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge` | property |
| `BecomeOldAge` | `public abstract int BecomeOldAge` | property |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge` | property |
| `MaxAge` | `public abstract int MaxAge` | property |
| `GetAgeLimitForLocation` | `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "");` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [same namespace BanditDensityModel](../BanditDensityModel/)
