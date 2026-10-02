---
title: "MapVisibilityModel"
description: "MapVisibilityModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<MapVisibilityModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapVisibilityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

MapVisibilityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapVisibilityModel>; the inheritance chain is MapVisibilityModel → MBGameModel → GameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapVisibilityModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain MapVisibilityModel → MBGameModel → GameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MaximumSeeingRange` | `public abstract float MaximumSeeingRange();` | method |
| `GetPartySeeingRangeBase` | `public abstract float GetPartySeeingRangeBase(MobileParty party);` | method |
| `GetPartySpottingRange` | `public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false);` | method |
| `GetPartySpottingRatioForMainPartySeeingRange` | `public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party);` | method |
| `GetHideoutSpottingDistance` | `public abstract float GetHideoutSpottingDistance();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace AllianceModel](../AllianceModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
