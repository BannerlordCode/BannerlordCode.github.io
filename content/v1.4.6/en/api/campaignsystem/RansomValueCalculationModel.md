---
title: "RansomValueCalculationModel"
description: "RansomValueCalculationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<RansomValueCalculationModel>; 1 exposed members (1 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs."
---
# RansomValueCalculationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class RansomValueCalculationModel : MBGameModel<RansomValueCalculationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs`

## Overview

RansomValueCalculationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<RansomValueCalculationModel>; the inheritance chain is RansomValueCalculationModel → MBGameModel. It exposes 1 public/protected members: 1 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RansomValueCalculationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain RansomValueCalculationModel → MBGameModel. The surface is method-led (methods 1/1, properties 0/1), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/RansomValueCalculationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PrisonerRansomValue` | `public abstract int PrisonerRansomValue(CharacterObject prisoner, Hero sellerHero = null);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
