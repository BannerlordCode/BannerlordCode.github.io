---
title: "TroopTypeSelectionPopUpVM"
description: "TroopTypeSelectionPopUpVM: a public class in TaleWorlds.MountAndBlade.CustomBattle.CustomBattle, inheriting ViewModel; 22 exposed members (12 methods, 10 properties, 0 fields). Canonical bucket custombattle. Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TroopTypeSelectionPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs`
**Bucket:** `custombattle` (rule:TaleWorlds.MountAndBlade.CustomBattle)

## Overview

TroopTypeSelectionPopUpVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TroopTypeSelectionPopUpVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 22 public/protected members: 12 methods, 10 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopTypeSelectionPopUpVM lands in canonical bucket `custombattle` (matched rule `rule:TaleWorlds.MountAndBlade.CustomBattle`), namespace `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`, inheritance chain TroopTypeSelectionPopUpVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 12/22, properties 10/22), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OpenPopUp` | `public void OpenPopUp(string title, MBBindingList<CustomBattleTroopTypeVM>troops)` | method |
| `OnItemSelectionToggled` | `public void OnItemSelectionToggled(CustomBattleTroopTypeVM item)` | method |
| `ExecuteSelectAll` | `public void ExecuteSelectAll()` | method |
| `ExecuteBackToDefault` | `public void ExecuteBackToDefault()` | method |
| `ExecuteCancel` | `public void ExecuteCancel()` | method |
| `ExecuteDone` | `public void ExecuteDone()` | method |
| `ExecuteReset` | `public void ExecuteReset()` | method |
| `SetCancelInputKey` | `public void SetCancelInputKey(HotKey hotkey)` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(HotKey hotkey)` | method |
| `SetResetInputKey` | `public void SetResetInputKey(HotKey hotkey)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey` | property |
| `ResetInputKey` | `public InputKeyItemVM ResetInputKey` | property |
| `MBBindingList` | `public MBBindingList<CustomBattleTroopTypeVM>Items` | property |
| `Title` | `public string Title` | property |
| `DoneLbl` | `public string DoneLbl` | property |
| `CancelLbl` | `public string CancelLbl` | property |
| `SelectAllLbl` | `public string SelectAllLbl` | property |
| `BackToDefaultLbl` | `public string BackToDefaultLbl` | property |
| `IsOpen` | `public bool IsOpen` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData/)
- [same namespace CustomBattleData](../CustomBattleData/)
- [same namespace CustomBattleHelper](../CustomBattleHelper/)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide/)
