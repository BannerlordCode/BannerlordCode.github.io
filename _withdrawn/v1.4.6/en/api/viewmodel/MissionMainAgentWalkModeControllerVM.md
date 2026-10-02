---
title: "MissionMainAgentWalkModeControllerVM"
description: "MissionMainAgentWalkModeControllerVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode, inheriting ViewModel; 14 exposed members (7 methods, 3 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionMainAgentWalkModeControllerVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionMainAgentWalkModeControllerVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.MountAndBlade.ViewModelCollection)

## Overview

MissionMainAgentWalkModeControllerVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionMainAgentWalkModeControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 14 public/protected members: 7 methods, 3 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionMainAgentWalkModeControllerVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.MountAndBlade.ViewModelCollection`), namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.WalkMode`, inheritance chain MissionMainAgentWalkModeControllerVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is method-led (methods 7/14, properties 3/14), so it mostly exposes operations. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/WalkMode/MissionMainAgentWalkModeControllerVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace WalkModeItemVM](../WalkModeItemVM/)
