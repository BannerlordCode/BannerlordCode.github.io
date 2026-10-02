---
title: "HideoutModel"
description: "HideoutModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<HideoutModel>; 6 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs."
---
# HideoutModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs`

## Overview

HideoutModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HideoutModel>; the inheritance chain is HideoutModel → MBGameModel. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain HideoutModel → MBGameModel. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration` | property |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime` | property |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime` | property |
| `GetRogueryXpGainAsGhost` | `public abstract float GetRogueryXpGainAsGhost();` | method |
| `GetRogueryXpGainOnHideoutMissionEnd` | `public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded);` | method |
| `GetSendTroopsSuccessChance` | `public abstract float GetSendTroopsSuccessChance(Hideout hideout);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
