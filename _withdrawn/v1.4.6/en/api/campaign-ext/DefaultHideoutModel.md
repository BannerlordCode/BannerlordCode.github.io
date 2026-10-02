---
title: "DefaultHideoutModel"
description: "DefaultHideoutModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting HideoutModel; 6 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultHideoutModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultHideoutModel : HideoutModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultHideoutModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs. It is a public class, implementing/inheriting HideoutModel; the inheritance chain is DefaultHideoutModel → HideoutModel → MBGameModel → GameModel. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultHideoutModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultHideoutModel → HideoutModel → MBGameModel → GameModel. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultHideoutModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HideoutHiddenDuration` | `public override CampaignTime HideoutHiddenDuration` | property |
| `CanAttackHideoutStartTime` | `public override int CanAttackHideoutStartTime` | property |
| `CanAttackHideoutEndTime` | `public override int CanAttackHideoutEndTime` | property |
| `GetRogueryXpGainAsGhost` | `public override float GetRogueryXpGainAsGhost()` | method |
| `GetRogueryXpGainOnHideoutMissionEnd` | `public override float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded)` | method |
| `GetSendTroopsSuccessChance` | `public override float GetSendTroopsSuccessChance(Hideout hideout)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface HideoutModel](../HideoutModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
