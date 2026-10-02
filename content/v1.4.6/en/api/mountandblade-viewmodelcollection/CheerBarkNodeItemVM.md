---
title: "CheerBarkNodeItemVM"
description: "CheerBarkNodeItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 16 exposed members (5 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs."
---
# CheerBarkNodeItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CheerBarkNodeItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs`

## Overview

CheerBarkNodeItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CheerBarkNodeItemVM → ViewModel. It exposes 16 public/protected members: 5 methods, 9 properties, 2 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CheerBarkNodeItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain CheerBarkNodeItemVM → ViewModel. The surface is property-led (properties 9/16, methods 5/16), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CheerBarkNodeItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CheerBarkNodeItemVM` | `public CheerBarkNodeItemVM(string tauntVisualName, TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)` | constructor |
| `CheerBarkNodeItemVM` | `public CheerBarkNodeItemVM(TextObject nodeName, string nodeId, HotKey key, bool consoleOnlyShortcut = false, TauntUsageManager.TauntUsage.TauntUsageFlag disabledReason = TauntUsageManager.TauntUsage.TauntUsageFlag.None)` | constructor |
| `ClearSelectionRecursive` | `public void ClearSelectionRecursive()` | method |
| `ExecuteFocused` | `public void ExecuteFocused()` | method |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `AddSubNode` | `public void AddSubNode(CheerBarkNodeItemVM subNode)` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `ShortcutKey` | `public InputKeyItemVM ShortcutKey` | property |
| `MBBindingList` | `public MBBindingList<CheerBarkNodeItemVM>SubNodes` | property |
| `CheerNameText` | `public string CheerNameText` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `HasSubNodes` | `public bool HasSubNodes` | property |
| `TypeAsString` | `public string TypeAsString` | property |
| `TauntVisualName` | `public string TauntVisualName` | property |
| `SelectedNodeText` | `public string SelectedNodeText` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
- [same namespace MissionAgentLockItemVM](../MissionAgentLockItemVM)
