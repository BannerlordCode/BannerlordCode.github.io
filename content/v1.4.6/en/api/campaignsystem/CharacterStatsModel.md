---
title: "CharacterStatsModel"
description: "CharacterStatsModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<CharacterStatsModel>; 4 exposed members (3 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs."
---
# CharacterStatsModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CharacterStatsModel : MBGameModel<CharacterStatsModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs`

## Overview

CharacterStatsModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<CharacterStatsModel>; the inheritance chain is CharacterStatsModel → MBGameModel. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CharacterStatsModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain CharacterStatsModel → MBGameModel. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/CharacterStatsModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxHitpoints` | `public abstract ExplainedNumber MaxHitpoints(CharacterObject character, bool includeDescriptions = false);` | method |
| `GetTier` | `public abstract int GetTier(CharacterObject character);` | method |
| `MaxCharacterTier` | `public abstract int MaxCharacterTier` | property |
| `WoundedHitPointLimit` | `public abstract int WoundedHitPointLimit(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
