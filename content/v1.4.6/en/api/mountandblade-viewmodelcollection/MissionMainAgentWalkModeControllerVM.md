---
title: "MissionMainAgentWalkModeControllerVM"
description: "MissionMainAgentWalkModeControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 14 exposed members (7 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs."
---
# MissionMainAgentWalkModeControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs`

## Overview

MissionMainAgentWalkModeControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentWalkModeControllerVM → ViewModel. It exposes 14 public/protected members: 7 methods, 3 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentWalkModeControllerVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode) the module directory; inheritance chain MissionMainAgentWalkModeControllerVM → ViewModel. The surface is method-led (methods 7/14, properties 3/14), so it mostly exposes operations. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionMainAgentWalkModeControllerVM` | `public MissionMainAgentWalkModeControllerVM()` | constructor |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `AddWalkMode` | `public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, HotKey hotKey, bool isHotkeyConsoleOnly)` | method |
| `AddWalkMode` | `public void AddWalkMode(string typeId, TextObject name, MissionMainAgentWalkModeControllerVM.GetIsWalkModeActivatedDelegate getIsActive, MissionMainAgentWalkModeControllerVM.SetIsWalkModeActivatedDelegate setIsActive, MissionMainAgentWalkModeControllerVM.GetCanChangeWalkModeActivatedDelegate canChangeActive, GameKey hotKey, bool isHotkeyConsoleOnly)` | method |
| `SetEnabled` | `public void SetEnabled(bool isEnabled)` | method |
| `MBBindingList` | `public MBBindingList<WalkModeItemVM>ControlModes` | property |
| `LastUsedItem` | `public WalkModeItemVM LastUsedItem` | property |
| `IsEnabled` | `public bool IsEnabled` | property |
| `GetIsWalkModeActivatedDelegate` | `public delegate bool GetIsWalkModeActivatedDelegate();` | method |
| `SetIsWalkModeActivatedDelegate` | `public delegate void SetIsWalkModeActivatedDelegate(bool value);` | method |
| `GetCanChangeWalkModeActivatedDelegate` | `public delegate bool GetCanChangeWalkModeActivatedDelegate();` | method |
| `GetIsWalkModeActivatedDelegate` | `public delegate bool GetIsWalkModeActivatedDelegate()` | nested type |
| `SetIsWalkModeActivatedDelegate` | `public delegate void SetIsWalkModeActivatedDelegate(bool value)` | nested type |
| `GetCanChangeWalkModeActivatedDelegate` | `public delegate bool GetCanChangeWalkModeActivatedDelegate()` | nested type |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace WalkModeItemVM](../WalkModeItemVM)
