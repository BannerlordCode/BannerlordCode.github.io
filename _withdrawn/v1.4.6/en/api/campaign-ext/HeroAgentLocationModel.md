---
title: "HeroAgentLocationModel"
description: "HeroAgentLocationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<HeroAgentLocationModel>; 4 exposed members (2 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HeroAgentLocationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

HeroAgentLocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HeroAgentLocationModel>; the inheritance chain is HeroAgentLocationModel → MBGameModel → GameModel. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroAgentLocationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain HeroAgentLocationModel → MBGameModel → GameModel. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WillBeListedInOverlay` | `public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter);` | method |
| `GetLocationForHero` | `public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail);` | method |
| `HeroLocationDetail` | `public enum HeroLocationDetail` | property |
| `HeroLocationDetail` | `public enum HeroLocationDetail` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
