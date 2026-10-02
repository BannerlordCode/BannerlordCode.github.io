---
title: "DefaultCharacterStatsModel"
description: "DefaultCharacterStatsModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting CharacterStatsModel; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCharacterStatsModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCharacterStatsModel : CharacterStatsModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultCharacterStatsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs. It is a public class, implementing/inheriting CharacterStatsModel; the inheritance chain is DefaultCharacterStatsModel → CharacterStatsModel → MBGameModel → GameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultCharacterStatsModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultCharacterStatsModel → CharacterStatsModel → MBGameModel → GameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultCharacterStatsModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaxCharacterTier` | `public override int MaxCharacterTier` | property |
| `WoundedHitPointLimit` | `public override int WoundedHitPointLimit(Hero hero)` | method |
| `GetTier` | `public override int GetTier(CharacterObject character)` | method |
| `MaxHitpoints` | `public override ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface CharacterStatsModel](../CharacterStatsModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
