---
title: "WalkModeItemVM"
description: "WalkModeItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 12 exposed members (6 methods, 5 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs."
---
# WalkModeItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class WalkModeItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs`

## Overview

WalkModeItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is WalkModeItemVM → ViewModel. It exposes 12 public/protected members: 6 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: WalkModeItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode) the module directory; inheritance chain WalkModeItemVM → ViewModel. The surface is method-led (methods 6/12, properties 5/12), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/WalkModeItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `WalkModeItemVM` | `public WalkModeItemVM(string typeId, TextObject description, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, Action<WalkModeItemVM>onToggle)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `OnEnabled` | `public void OnEnabled()` | method |
| `ToggleState` | `public void ToggleState()` | method |
| `ToggleInputKey` | `public InputKeyItemVM ToggleInputKey` | property |
| `SetToggleInputKey` | `public void SetToggleInputKey(HotKey hotKey, bool isHotKeyConsoleOnly)` | method |
| `SetToggleInputKey` | `public void SetToggleInputKey(GameKey gameKey, bool isHotKeyConsoleOnly)` | method |
| `IsActive` | `public bool IsActive` | property |
| `IsDisabled` | `public bool IsDisabled` | property |
| `Description` | `public string Description` | property |
| `TypeId` | `public string TypeId` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace MissionMainAgentWalkModeControllerVM](../MissionMainAgentWalkModeControllerVM)
