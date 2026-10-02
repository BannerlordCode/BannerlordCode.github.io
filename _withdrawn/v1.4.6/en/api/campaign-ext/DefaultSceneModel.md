---
title: "DefaultSceneModel"
description: "DefaultSceneModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting SceneModel; 2 exposed members (2 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSceneModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSceneModel : SceneModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultSceneModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs. It is a public class, implementing/inheriting SceneModel; the inheritance chain is DefaultSceneModel → SceneModel → MBGameModel → GameModel. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultSceneModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultSceneModel → SceneModel → MBGameModel → GameModel. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultSceneModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetBattleSceneForMapPatch` | `public override string GetBattleSceneForMapPatch(MapPatchData mapPatch, bool isNavalEncounter)` | method |
| `GetConversationSceneForMapPosition` | `public override string GetConversationSceneForMapPosition(CampaignVec2 campaignPosition)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface SceneModel](../SceneModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
