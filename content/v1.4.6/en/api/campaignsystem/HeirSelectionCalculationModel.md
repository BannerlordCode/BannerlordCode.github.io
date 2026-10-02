---
title: "HeirSelectionCalculationModel"
description: "HeirSelectionCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<HeirSelectionCalculationModel>; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs."
---
# HeirSelectionCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HeirSelectionCalculationModel : MBGameModel<HeirSelectionCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs`

## Overview

HeirSelectionCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HeirSelectionCalculationModel>; the inheritance chain is HeirSelectionCalculationModel → MBGameModel. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeirSelectionCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain HeirSelectionCalculationModel → MBGameModel. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HeirSelectionCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HighestSkillPoint` | `public abstract int HighestSkillPoint` | property |
| `CalculateHeirSelectionPoint` | `public abstract int CalculateHeirSelectionPoint(Hero candidateHeir, Hero deadHero, ref Hero maxSkillHero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
