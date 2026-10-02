---
title: "MissionAgentTakenDamageItemVM"
description: "MissionAgentTakenDamageItemVM: a public class in TaleWorlds.MountAndBlade.ViewModelCollection, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageItemVM.cs."
---
# MissionAgentTakenDamageItemVM

**Namespace:** `TaleWorlds.MountAndBlade.ViewModelCollection.HUD`
**Module:** `TaleWorlds.MountAndBlade.ViewModelCollection`
**Type:** `public class MissionAgentTakenDamageItemVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageItemVM.cs`

## Overview

MissionAgentTakenDamageItemVM lives in the TaleWorlds.MountAndBlade.ViewModelCollection module, source file TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageItemVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is MissionAgentTakenDamageItemVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionAgentTakenDamageItemVM is a top-level type in TaleWorlds.MountAndBlade.ViewModelCollection, namespace differing from (TaleWorlds.MountAndBlade.ViewModelCollection.HUD) the module directory; inheritance chain MissionAgentTakenDamageItemVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.ViewModelCollection/HUD/MissionAgentTakenDamageItemVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MissionAgentTakenDamageItemVM` | `public MissionAgentTakenDamageItemVM(Camera missionCamera, Vec3 affectorAgentPos, int damage, bool isRanged, Action<MissionAgentTakenDamageItemVM>onRemove)` | constructor |
| `ExecuteRemove` | `public void ExecuteRemove()` | method |
| `Damage` | `public int Damage` | property |
| `IsRanged` | `public bool IsRanged` | property |
| `IsBehind` | `public bool IsBehind` | property |
| `ScreenPosOfAffectorAgent` | `public Vec2 ScreenPosOfAffectorAgent` | property |

## See Also

- [↑ mountandblade-viewmodelcollection module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CheerBarkNodeItemVM](../CheerBarkNodeItemVM)
- [same namespace ControllerEquippedItemVM](../ControllerEquippedItemVM)
- [same namespace CrosshairVM](../CrosshairVM)
- [same namespace EquipmentActionItemVM](../EquipmentActionItemVM)
