---
title: "DefaultPrisonBreakModel"
description: "DefaultPrisonBreakModel: a public class in TaleWorlds.CampaignSystem, inheriting PrisonBreakModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs."
---
# DefaultPrisonBreakModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPrisonBreakModel : PrisonBreakModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs`

## Overview

DefaultPrisonBreakModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs. It is a public class, implementing/inheriting PrisonBreakModel; the inheritance chain is DefaultPrisonBreakModel → PrisonBreakModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultPrisonBreakModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultPrisonBreakModel → PrisonBreakModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultPrisonBreakModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNumberOfGuardsToSpawn` | `public override int GetNumberOfGuardsToSpawn(Settlement settlement)` | method |
| `CanPlayerStagePrisonBreak` | `public override bool CanPlayerStagePrisonBreak(Settlement settlement)` | method |
| `GetPrisonBreakStartCost` | `public override int GetPrisonBreakStartCost(Hero prisonerHero)` | method |
| `GetRelationRewardOnPrisonBreak` | `public override int GetRelationRewardOnPrisonBreak(Hero prisonerHero)` | method |
| `GetRogueryRewardOnPrisonBreak` | `public override float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface PrisonBreakModel](../PrisonBreakModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
