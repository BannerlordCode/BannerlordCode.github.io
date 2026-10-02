---
title: "MapInfoItemVM"
description: "MapInfoItemVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar, inheriting ViewModel; 10 exposed members (3 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MapInfoItemVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class MapInfoItemVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

MapInfoItemVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MapInfoItemVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 10 public/protected members: 3 methods, 5 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MapInfoItemVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`, inheritance chain MapInfoItemVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 5/10, methods 3/10), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapBar/MapInfoItemVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MapInfoItemVM` | `public MapInfoItemVM(string itemId, Func<List<TooltipProperty>>getTooltip)` | constructor |
| `MapInfoItemVM` | `public MapInfoItemVM(string itemId, TooltipTriggerVM tooltipTrigger)` | constructor |
| `ExecuteBeginHint` | `public void ExecuteBeginHint()` | method |
| `ExecuteEndHint` | `public void ExecuteEndHint()` | method |
| `SetOverriddenVisualId` | `public void SetOverriddenVisualId(string visualId)` | method |
| `HasWarning` | `public bool HasWarning` | property |
| `IntValue` | `public int IntValue` | property |
| `FloatValue` | `public float FloatValue` | property |
| `VisualId` | `public string VisualId` | property |
| `Value` | `public string Value` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace MapBarShortcuts](../MapBarShortcuts/)
- [same namespace MapBarVM](../MapBarVM/)
- [same namespace MapInfoVM](../MapInfoVM/)
- [same namespace MapNavigationItemVM](../MapNavigationItemVM/)
