---
title: "ValuationModel"
description: "ValuationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<ValuationModel>; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs."
---
# ValuationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ValuationModel : MBGameModel<ValuationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs`

## Overview

ValuationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<ValuationModel>; the inheritance chain is ValuationModel → MBGameModel. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ValuationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain ValuationModel → MBGameModel. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/ValuationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetValueOfTroop` | `public abstract float GetValueOfTroop(CharacterObject troop);` | method |
| `GetMilitaryValueOfParty` | `public abstract float GetMilitaryValueOfParty(MobileParty party);` | method |
| `GetValueOfHero` | `public abstract float GetValueOfHero(Hero hero);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
