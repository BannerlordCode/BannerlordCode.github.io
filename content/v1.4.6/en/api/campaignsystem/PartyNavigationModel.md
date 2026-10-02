---
title: "PartyNavigationModel"
description: "PartyNavigationModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<PartyNavigationModel>; 5 exposed members (5 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs."
---
# PartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs`

## Overview

PartyNavigationModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<PartyNavigationModel>; the inheritance chain is PartyNavigationModel → MBGameModel. It exposes 5 public/protected members: 5 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PartyNavigationModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain PartyNavigationModel → MBGameModel. The surface is method-led (methods 5/5, properties 0/5), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/PartyNavigationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CanPlayerNavigateToPosition` | `public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType);` | method |
| `GetEmbarkDisembarkThresholdDistance` | `public abstract float GetEmbarkDisembarkThresholdDistance();` | method |
| `IsTerrainTypeValidForNavigationType` | `public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType);` | method |
| `int[]GetInvalidTerrainTypesForNavigationType` | `public abstract int[]GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType);` | method |
| `HasNavalNavigationCapability` | `public abstract bool HasNavalNavigationCapability(MobileParty mobileParty);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
