---
title: "MapVisibilityModel"
description: "MapVisibilityModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<MapVisibilityModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs."
---
# MapVisibilityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class MapVisibilityModel : MBGameModel<MapVisibilityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs`

## Overview

MapVisibilityModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<MapVisibilityModel>; the inheritance chain is MapVisibilityModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapVisibilityModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain MapVisibilityModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/MapVisibilityModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaximumSeeingRange` | `public abstract float MaximumSeeingRange();` | method |
| `GetPartySeeingRangeBase` | `public abstract float GetPartySeeingRangeBase(MobileParty party);` | method |
| `GetPartySpottingRange` | `public abstract ExplainedNumber GetPartySpottingRange(MobileParty party, bool includeDescriptions = false);` | method |
| `GetPartySpottingRatioForMainPartySeeingRange` | `public abstract float GetPartySpottingRatioForMainPartySeeingRange(MobileParty party);` | method |
| `GetHideoutSpottingDistance` | `public abstract float GetHideoutSpottingDistance();` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
