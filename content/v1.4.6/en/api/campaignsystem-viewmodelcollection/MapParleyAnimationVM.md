---
title: "MapParleyAnimationVM"
description: "MapParleyAnimationVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection, inheriting ViewModel; 5 exposed members (2 methods, 2 properties, 0 fields). Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs."
---
# MapParleyAnimationVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapParleyAnimationVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs`

## Overview

MapParleyAnimationVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapParleyAnimationVM → ViewModel. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapParleyAnimationVM is a top-level type in TaleWorlds.CampaignSystem.ViewModelCollection, namespace differing from (TaleWorlds.CampaignSystem.ViewModelCollection.Map.Parley) the module directory; inheritance chain MapParleyAnimationVM → ViewModel. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/Parley/MapParleyAnimationVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MapParleyAnimationVM` | `public MapParleyAnimationVM(PartyBase parleyedParty, float animationDuration)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ParleyText` | `public string ParleyText` | property |
| `AnimationDuration` | `public float AnimationDuration` | property |

## See Also

- [↑ campaignsystem-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
