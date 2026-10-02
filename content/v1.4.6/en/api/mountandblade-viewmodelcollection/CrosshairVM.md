---
title: "CrosshairVM"
description: "CrosshairVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 19 exposed members (4 methods, 14 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs."
---
# CrosshairVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class CrosshairVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs`

## Overview

CrosshairVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CrosshairVM → ViewModel. It exposes 19 public/protected members: 4 methods, 14 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CrosshairVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain CrosshairVM → ViewModel. The surface is property-led (properties 14/19, methods 4/19), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/CrosshairVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CrosshairVM` | `public CrosshairVM()` | constructor |
| `SetProperties` | `public void SetProperties(double accuracy, double scale)` | method |
| `SetArrowProperties` | `public void SetArrowProperties(double topArrowOpacity, double rightArrowOpacity, double bottomArrowOpacity, double leftArrowOpacity)` | method |
| `SetReloadProperties` | `public void SetReloadProperties(in StackArray.StackArray10FloatFloatTuple reloadPhases, int reloadPhaseCount)` | method |
| `ShowHitMarker` | `public void ShowHitMarker(bool isVictimDead, bool isHumanoidHeadShot)` | method |
| `IsVisible` | `public bool IsVisible` | property |
| `IsReloadPhasesVisible` | `public bool IsReloadPhasesVisible` | property |
| `IsHitMarkerVisible` | `public bool IsHitMarkerVisible` | property |
| `IsVictimDead` | `public bool IsVictimDead` | property |
| `IsHumanoidHeadshot` | `public bool IsHumanoidHeadshot` | property |
| `TopArrowOpacity` | `public double TopArrowOpacity` | property |
| `MBBindingList` | `public MBBindingList<ReloadPhaseItemVM>ReloadPhases` | property |
| `BottomArrowOpacity` | `public double BottomArrowOpacity` | property |
| `RightArrowOpacity` | `public double RightArrowOpacity` | property |
| `LeftArrowOpacity` | `public double LeftArrowOpacity` | property |
| `IsTargetInvalid` | `public bool IsTargetInvalid` | property |
| `CrosshairAccuracy` | `public double CrosshairAccuracy` | property |
| `CrosshairScale` | `public double CrosshairScale` | property |
| `CrosshairType` | `public int CrosshairType` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
- [same namespace MissionAgentLockItemVM](../MissionAgentLockItemVM)
