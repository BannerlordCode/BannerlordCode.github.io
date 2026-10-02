---
title: "MissionMainAgentCheerBarkControllerVM"
description: "MissionMainAgentCheerBarkControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 12 exposed members (6 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs."
---
# MissionMainAgentCheerBarkControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentCheerBarkControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs`

## Overview

MissionMainAgentCheerBarkControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentCheerBarkControllerVM → ViewModel. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentCheerBarkControllerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionMainAgentCheerBarkControllerVM → ViewModel. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionMainAgentCheerBarkControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
