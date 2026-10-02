---
title: "DefaultDifficultyModel"
description: "DefaultDifficultyModel: a public class in TaleWorlds.CampaignSystem, inheriting DifficultyModel; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs."
---
# DefaultDifficultyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultDifficultyModel : DifficultyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs`

## Overview

DefaultDifficultyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs. It is a public class, implementing/inheriting DifficultyModel; the inheritance chain is DefaultDifficultyModel → DifficultyModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultDifficultyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultDifficultyModel → DifficultyModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultDifficultyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPlayerTroopsReceivedDamageMultiplier` | `public override float GetPlayerTroopsReceivedDamageMultiplier()` | method |
| `GetPlayerRecruitSlotBonus` | `public override int GetPlayerRecruitSlotBonus()` | method |
| `GetPlayerMapMovementSpeedBonusMultiplier` | `public override float GetPlayerMapMovementSpeedBonusMultiplier()` | method |
| `GetStealthDifficultyMultiplier` | `public override float GetStealthDifficultyMultiplier()` | method |
| `GetDisguiseDifficultyMultiplier` | `public override float GetDisguiseDifficultyMultiplier()` | method |
| `GetCombatAIDifficultyMultiplier` | `public override float GetCombatAIDifficultyMultiplier()` | method |
| `GetPersuasionBonusChance` | `public override float GetPersuasionBonusChance()` | method |
| `GetClanMemberDeathChanceMultiplier` | `public override float GetClanMemberDeathChanceMultiplier()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface DifficultyModel](../DifficultyModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
