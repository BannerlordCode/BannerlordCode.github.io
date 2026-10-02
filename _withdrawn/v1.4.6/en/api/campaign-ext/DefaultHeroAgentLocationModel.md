---
title: "DefaultHeroAgentLocationModel"
description: "DefaultHeroAgentLocationModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting HeroAgentLocationModel; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultHeroAgentLocationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHeroAgentLocationModel : HeroAgentLocationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultHeroAgentLocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs. It is a public class, implementing/inheriting HeroAgentLocationModel; the inheritance chain is DefaultHeroAgentLocationModel → HeroAgentLocationModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHeroAgentLocationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultHeroAgentLocationModel → HeroAgentLocationModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHeroAgentLocationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WillBeListedInOverlay` | `public override bool WillBeListedInOverlay(LocationCharacter locationCharacter)` | method |
| `GetLocationForHero` | `public override Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroLocationDetail)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface HeroAgentLocationModel](../HeroAgentLocationModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
