---
title: "HeroAgentLocationModel"
description: "HeroAgentLocationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<HeroAgentLocationModel>; 4 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs."
---
# HeroAgentLocationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HeroAgentLocationModel : MBGameModel<HeroAgentLocationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs`

## Overview

HeroAgentLocationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HeroAgentLocationModel>; the inheritance chain is HeroAgentLocationModel → MBGameModel. It exposes 4 public/protected members: 2 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HeroAgentLocationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain HeroAgentLocationModel → MBGameModel. The surface is method-led (methods 2/4, properties 1/4), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HeroAgentLocationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WillBeListedInOverlay` | `public abstract bool WillBeListedInOverlay(LocationCharacter locationCharacter);` | method |
| `GetLocationForHero` | `public abstract Location GetLocationForHero(Hero hero, Settlement settlement, out HeroAgentLocationModel.HeroLocationDetail heroSpawnDetail);` | method |
| `HeroLocationDetail` | `public enum HeroLocationDetail` | property |
| `HeroLocationDetail` | `public enum HeroLocationDetail` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
