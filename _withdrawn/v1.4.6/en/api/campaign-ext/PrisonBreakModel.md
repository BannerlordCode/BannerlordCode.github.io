---
title: "PrisonBreakModel"
description: "PrisonBreakModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<PrisonBreakModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PrisonBreakModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PrisonBreakModel : MBGameModel<PrisonBreakModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

PrisonBreakModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PrisonBreakModel>; the inheritance chain is PrisonBreakModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PrisonBreakModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain PrisonBreakModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PrisonBreakModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetNumberOfGuardsToSpawn` | `public abstract int GetNumberOfGuardsToSpawn(Settlement settlement);` | method |
| `CanPlayerStagePrisonBreak` | `public abstract bool CanPlayerStagePrisonBreak(Settlement settlement);` | method |
| `GetPrisonBreakStartCost` | `public abstract int GetPrisonBreakStartCost(Hero prisonerHero);` | method |
| `GetRelationRewardOnPrisonBreak` | `public abstract int GetRelationRewardOnPrisonBreak(Hero prisonerHero);` | method |
| `GetRogueryRewardOnPrisonBreak` | `public abstract float GetRogueryRewardOnPrisonBreak(Hero prisonerHero, bool isSuccess);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
