---
title: "DefaultHideoutModel"
description: "DefaultHideoutModel: a public class in TaleWorlds.CampaignSystem, inheriting HideoutModel; 6 exposed members (3 methods, 3 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs."
---
# DefaultHideoutModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHideoutModel : HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`

## Overview

DefaultHideoutModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs. It is a public class, implementing/inheriting HideoutModel; the inheritance chain is DefaultHideoutModel → HideoutModel → MBGameModel. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHideoutModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultHideoutModel → HideoutModel → MBGameModel. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration` | property |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime` | property |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime` | property |
| `GetRogueryXpGainAsGhost` | `public override float GetRogueryXpGainAsGhost()` | method |
| `GetRogueryXpGainOnHideoutMissionEnd` | `public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)` | method |
| `GetSendTroopsSuccessChance` | `public override float GetSendTroopsSuccessChance(Hideout hideout)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface HideoutModel](../HideoutModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
