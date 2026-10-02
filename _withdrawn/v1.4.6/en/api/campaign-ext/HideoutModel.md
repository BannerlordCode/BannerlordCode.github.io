---
title: "HideoutModel"
description: "HideoutModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<HideoutModel>; 6 exposed members (3 methods, 3 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# HideoutModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class HideoutModel : MBGameModel<HideoutModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

HideoutModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<HideoutModel>; the inheritance chain is HideoutModel → MBGameModel → GameModel. It exposes 6 public/protected members: 3 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: HideoutModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain HideoutModel → MBGameModel → GameModel. The surface is method-led (methods 3/6, properties 3/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/HideoutModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `HideoutHiddenDuration` | `public abstract CampaignTime HideoutHiddenDuration` | property |
| `CanAttackHideoutStartTime` | `public abstract int CanAttackHideoutStartTime` | property |
| `CanAttackHideoutEndTime` | `public abstract int CanAttackHideoutEndTime` | property |
| `GetRogueryXpGainAsGhost` | `public abstract float GetRogueryXpGainAsGhost();` | method |
| `GetRogueryXpGainOnHideoutMissionEnd` | `public abstract float GetRogueryXpGainOnHideoutMissionEnd(bool isSucceeded);` | method |
| `GetSendTroopsSuccessChance` | `public abstract float GetSendTroopsSuccessChance(Hideout hideout);` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
