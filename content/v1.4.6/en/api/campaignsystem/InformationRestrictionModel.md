---
title: "InformationRestrictionModel"
description: "InformationRestrictionModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<InformationRestrictionModel>; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs."
---
# InformationRestrictionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class InformationRestrictionModel : MBGameModel<InformationRestrictionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs`

## Overview

InformationRestrictionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<InformationRestrictionModel>; the inheritance chain is InformationRestrictionModel → MBGameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: InformationRestrictionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain InformationRestrictionModel → MBGameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/InformationRestrictionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoesPlayerKnowDetailsOf` | `public abstract bool DoesPlayerKnowDetailsOf(Settlement settlement);` | method |
| `DoesPlayerKnowDetailsOf` | `public abstract bool DoesPlayerKnowDetailsOf(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
