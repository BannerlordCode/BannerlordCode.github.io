---
title: "AgeModel"
description: "AgeModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<AgeModel>; 8 exposed members (1 methods, 7 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs."
---
# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`

## Overview

AgeModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AgeModel>; the inheritance chain is AgeModel → MBGameModel. It exposes 8 public/protected members: 1 methods, 7 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgeModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain AgeModel → MBGameModel. The surface is property-led (properties 7/8, methods 1/8), so it mostly exposes state for reading. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
- [same namespace BanditDensityModel](../BanditDensityModel)
