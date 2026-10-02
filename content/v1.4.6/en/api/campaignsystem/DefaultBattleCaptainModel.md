---
title: "DefaultBattleCaptainModel"
description: "DefaultBattleCaptainModel: a public class in TaleWorlds.CampaignSystem, inheriting BattleCaptainModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs."
---
# DefaultBattleCaptainModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBattleCaptainModel : BattleCaptainModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs`

## Overview

DefaultBattleCaptainModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs. It is a public class, implementing/inheriting BattleCaptainModel; the inheritance chain is DefaultBattleCaptainModel → BattleCaptainModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultBattleCaptainModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultBattleCaptainModel → BattleCaptainModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultBattleCaptainModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetCaptainRatingForTroopUsages` | `public override float GetCaptainRatingForTroopUsages(Hero hero, TroopUsageFlags flag, out List<PerkObject>compatiblePerks)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BattleCaptainModel](../BattleCaptainModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
