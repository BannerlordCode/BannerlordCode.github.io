---
title: "DefaultEmissaryModel"
description: "DefaultEmissaryModel: a public class in TaleWorlds.CampaignSystem, inheriting EmissaryModel; 2 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs."
---
# DefaultEmissaryModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEmissaryModel : EmissaryModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs`

## Overview

DefaultEmissaryModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs. It is a public class, implementing/inheriting EmissaryModel; the inheritance chain is DefaultEmissaryModel → EmissaryModel → MBGameModel. It exposes 2 public/protected members: 1 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultEmissaryModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultEmissaryModel → EmissaryModel → MBGameModel. The surface is method-led (methods 1/2, properties 1/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultEmissaryModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EmissaryRelationBonusForMainClan` | `public override int EmissaryRelationBonusForMainClan` | property |
| `IsEmissary` | `public override bool IsEmissary(Hero hero)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface EmissaryModel](../EmissaryModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
