---
title: "DefaultRansomValueCalculationModel"
description: "DefaultRansomValueCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting RansomValueCalculationModel; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs."
---
# DefaultRansomValueCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultRansomValueCalculationModel : RansomValueCalculationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs`

## Overview

DefaultRansomValueCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs. It is a public class, implementing/inheriting RansomValueCalculationModel; the inheritance chain is DefaultRansomValueCalculationModel → RansomValueCalculationModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultRansomValueCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultRansomValueCalculationModel → RansomValueCalculationModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultRansomValueCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrisonerRansomValue` | `public override int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface RansomValueCalculationModel](../RansomValueCalculationModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
