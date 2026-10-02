---
title: "DefaultMapVisibilityModel"
description: "DefaultMapVisibilityModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting MapVisibilityModel; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultMapVisibilityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultMapVisibilityModel : MapVisibilityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultMapVisibilityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs. It is a public class, implementing/inheriting MapVisibilityModel; the inheritance chain is DefaultMapVisibilityModel → MapVisibilityModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultMapVisibilityModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultMapVisibilityModel → MapVisibilityModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultMapVisibilityModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumSeeingRange` | `public override float MaximumSeeingRange()` | method |
| `GetPartySeeingRangeBase` | `public override float GetPartySeeingRangeBase(MobileParty party)` | method |
| `GetPartySpottingRange` | `public override ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false)` | method |
| `GetPartySpottingRatioForMainPartySeeingRange` | `public override float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party)` | method |
| `GetHideoutSpottingDistance` | `public override float GetHideoutSpottingDistance()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MapVisibilityModel](../MapVisibilityModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
