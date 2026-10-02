---
title: "SiegeStrategyActionModel"
description: "SiegeStrategyActionModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SiegeStrategyActionModel>; 3 exposed members (1 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs."
---
# SiegeStrategyActionModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SiegeStrategyActionModel : MBGameModel<SiegeStrategyActionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs`

## Overview

SiegeStrategyActionModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SiegeStrategyActionModel>; the inheritance chain is SiegeStrategyActionModel → MBGameModel. It exposes 3 public/protected members: 1 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SiegeStrategyActionModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SiegeStrategyActionModel → MBGameModel. The surface is method-led (methods 1/3, properties 1/3), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeStrategyActionModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetLogicalActionForStrategy` | `public abstract void GetLogicalActionForStrategy(ISiegeEventSide side, out SiegeStrategyActionModel.SiegeAction siegeAction, out SiegeEngineType siegeEngineType, out int deploymentIndex, out int reserveIndex);` | method |
| `SiegeAction` | `public enum SiegeAction` | property |
| `SiegeAction` | `public enum SiegeAction` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
