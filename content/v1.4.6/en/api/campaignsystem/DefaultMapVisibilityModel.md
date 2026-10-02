---
title: "DefaultMapVisibilityModel"
description: "DefaultMapVisibilityModel: a public class in TaleWorlds.CampaignSystem, inheriting MapVisibilityModel; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs."
---
# DefaultMapVisibilityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`

## Overview

DefaultMapVisibilityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs. It is a public class, implementing/inheriting MapVisibilityModel; the inheritance chain is DefaultMapVisibilityModel → MapVisibilityModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMapVisibilityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultMapVisibilityModel → MapVisibilityModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSeeingRange` | `public override float MaximumSeeingRange()` | method |
| `GetPartySeeingRangeBase` | `public override float GetPartySeeingRangeBase(MobileParty party)` | method |
| `GetPartySpottingRange` | `public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)` | method |
| `GetPartySpottingRatioForMainPartySeeingRange` | `public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)` | method |
| `GetHideoutSpottingDistance` | `public override float GetHideoutSpottingDistance()` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface MapVisibilityModel](../MapVisibilityModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
