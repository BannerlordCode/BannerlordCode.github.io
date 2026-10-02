---
title: "PrisonBreakModel"
description: "PrisonBreakModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PrisonBreakModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs."
---
# PrisonBreakModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs`

## Overview

PrisonBreakModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PrisonBreakModel>; the inheritance chain is PrisonBreakModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonBreakModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PrisonBreakModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetNumberOfGuardsToSpawn` | `public abstract int GetNumberOfGuardsToSpawn(Settlement settlement);` | method |
| `CanPlayerStagePrisonBreak` | `public abstract bool CanPlayerStagePrisonBreak(Settlement settlement);` | method |
| `GetPrisonBreakStartCost` | `public abstract int GetPrisonBreakStartCost(Hero prisonerHero);` | method |
| `GetRelationRewardOnPrisonBreak` | `public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero);` | method |
| `GetRogueryRewardOnPrisonBreak` | `public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
