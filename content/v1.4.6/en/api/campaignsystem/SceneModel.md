---
title: "SceneModel"
description: "SceneModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<SceneModel>; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs."
---
# SceneModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SceneModel : MBGameModel<SceneModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs`

## Overview

SceneModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<SceneModel>; the inheritance chain is SceneModel → MBGameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SceneModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain SceneModel → MBGameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/SceneModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetConversationSceneForMapPosition` | `public abstract string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition);` | method |
| `GetBattleSceneForMapPatch` | `public abstract string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
