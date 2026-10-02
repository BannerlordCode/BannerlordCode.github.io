---
title: "TroopTypeSelectionPopUpVM"
description: "TroopTypeSelectionPopUpVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 22 exposed members (12 methods, 10 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs."
---
# TroopTypeSelectionPopUpVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class TroopTypeSelectionPopUpVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs`

## Overview

TroopTypeSelectionPopUpVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is TroopTypeSelectionPopUpVM → ViewModel. It exposes 22 public/protected members: 12 methods, 10 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TroopTypeSelectionPopUpVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle) the module directory; inheritance chain TroopTypeSelectionPopUpVM → ViewModel. The surface is method-led (methods 12/22, properties 10/22), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/TroopTypeSelectionPopUpVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
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

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData)
- [same namespace CustomBattleData](../CustomBattleData)
- [same namespace CustomBattleHelper](../CustomBattleHelper)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide)
