---
title: "BribeCalculationModel"
description: "BribeCalculationModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<BribeCalculationModel>; 4 exposed members (4 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BribeCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BribeCalculationModel : MBGameModel<BribeCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

BribeCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BribeCalculationModel>; the inheritance chain is BribeCalculationModel → MBGameModel → GameModel. It exposes 4 public/protected members: 4 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BribeCalculationModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain BribeCalculationModel → MBGameModel → GameModel. The surface is method-led (methods 4/4, properties 0/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/BribeCalculationModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetBribeToEnterLordsHall` | `public abstract int GetBribeToEnterLordsHall(Settlement settlement);` | method |
| `GetBribeToEnterDungeon` | `public abstract int GetBribeToEnterDungeon(Settlement settlement);` | method |
| `IsBribeNotNeededToEnterKeep` | `public abstract bool IsBribeNotNeededToEnterKeep(Settlement settlement);` | method |
| `IsBribeNotNeededToEnterDungeon` | `public abstract bool IsBribeNotNeededToEnterDungeon(Settlement settlement);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
