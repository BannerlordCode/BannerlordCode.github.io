---
title: "MissionMainAgentCheerBarkControllerVM"
description: "MissionMainAgentCheerBarkControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD, inheriting ViewModel; 12 exposed members (6 methods, 5 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentCheerBarkControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionMainAgentCheerBarkControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentCheerBarkControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentCheerBarkControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`, inheritance chain MissionMainAgentCheerBarkControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `MissionMainAgentCheerBarkControllerVM` | `public MissionMainAgentCheerBarkControllerVM(Action<int>onSelectCheer, Action<int>onSelectBark)` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SelectItem` | `public void SelectItem(int itemIndex, int subNodeIndex = -1)` | method |
| `ExecuteActivate` | `public void ExecuteActivate()` | method |
| `ExecuteDeactivate` | `public void ExecuteDeactivate(bool applySelection)` | method |
| `OnNodeFocused` | `public void OnNodeFocused(CheerBarkNodeItemVM focusedNode)` | method |
| `OnNodeTooltipToggled` | `public void OnNodeTooltipToggled(CheerBarkNodeItemVM node)` | method |
| `IsActive` | `public bool IsActive` | property |
| `DisabledReasonText` | `public string DisabledReasonText` | property |
| `SelectedNodeText` | `public string SelectedNodeText` | property |
| `IsNodesCategories` | `public bool IsNodesCategories` | property |
| `MBBindingList` | `public MBBindingList<CheerBarkNodeItemVM>Nodes` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM/)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM/)
- [same namespace CrosshairVM](../CrosshairVM/)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM/)
