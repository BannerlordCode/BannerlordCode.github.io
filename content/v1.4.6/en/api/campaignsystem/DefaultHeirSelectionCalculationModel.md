---
title: "DefaultHeirSelectionCalculationModel"
description: "DefaultHeirSelectionCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting HeirSelectionCalculationModel; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs."
---
# DefaultHeirSelectionCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHeirSelectionCalculationModel : HeirSelectionCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs`

## Overview

DefaultHeirSelectionCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs. It is a public class, implementing/inheriting HeirSelectionCalculationModel; the inheritance chain is DefaultHeirSelectionCalculationModel → HeirSelectionCalculationModel → MBGameModel. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHeirSelectionCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultHeirSelectionCalculationModel → HeirSelectionCalculationModel → MBGameModel. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHeirSelectionCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HighestSkillPoint` | `public override int HighestSkillPoint` | property |
| `CalculateHeirSelectionPoint` | `public override int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface HeirSelectionCalculationModel](../HeirSelectionCalculationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
