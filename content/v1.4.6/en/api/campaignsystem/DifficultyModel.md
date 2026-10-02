---
title: "DifficultyModel"
description: "DifficultyModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<DifficultyModel>; 8 exposed members (8 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs."
---
# DifficultyModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class DifficultyModel : MBGameModel<DifficultyModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs`

## Overview

DifficultyModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<DifficultyModel>; the inheritance chain is DifficultyModel → MBGameModel. It exposes 8 public/protected members: 8 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DifficultyModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain DifficultyModel → MBGameModel. The surface is method-led (methods 8/8, properties 0/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/DifficultyModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetPlayerTroopsReceivedDamageMultiplier` | `public abstract float GetPlayerTroopsReceivedDamageMultiplier();` | method |
| `GetPlayerRecruitSlotBonus` | `public abstract int GetPlayerRecruitSlotBonus();` | method |
| `GetPlayerMapMovementSpeedBonusMultiplier` | `public abstract float GetPlayerMapMovementSpeedBonusMultiplier();` | method |
| `GetCombatAIDifficultyMultiplier` | `public abstract float GetCombatAIDifficultyMultiplier();` | method |
| `GetPersuasionBonusChance` | `public abstract float GetPersuasionBonusChance();` | method |
| `GetClanMemberDeathChanceMultiplier` | `public abstract float GetClanMemberDeathChanceMultiplier();` | method |
| `GetStealthDifficultyMultiplier` | `public abstract float GetStealthDifficultyMultiplier();` | method |
| `GetDisguiseDifficultyMultiplier` | `public abstract float GetDisguiseDifficultyMultiplier();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
