---
title: "CustomBattleSiegeMachineVM"
description: "CustomBattleSiegeMachineVM: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting ViewModel; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs."
---
# CustomBattleSiegeMachineVM

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSiegeMachineVM : ViewModel`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs`

## Overview

CustomBattleSiegeMachineVM lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is CustomBattleSiegeMachineVM → ViewModel. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSiegeMachineVM is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace differing from (TaleWorlds.MountAndBlade.CustomBattle.CustomBattle) the module directory; inheritance chain CustomBattleSiegeMachineVM → ViewModel. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. ViewModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattle/CustomBattleSiegeMachineVM.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SiegeEngineType` | `public SiegeEngineType SiegeEngineType` | property |
| `CustomBattleSiegeMachineVM` | `public CustomBattleSiegeMachineVM(SiegeEngineType machineType, Action<CustomBattleSiegeMachineVM>onSelection, Action<CustomBattleSiegeMachineVM>onResetSelection)` | constructor |
| `SetMachineType` | `public void SetMachineType(SiegeEngineType machine)` | method |
| `IsRanged` | `public bool IsRanged` | property |
| `MachineID` | `public string MachineID` | property |
| `Name` | `public string Name` | property |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace CustomBattleCompositionData](../CustomBattleCompositionData)
- [same namespace CustomBattleData](../CustomBattleData)
- [same namespace CustomBattleHelper](../CustomBattleHelper)
- [same namespace CustomBattlePlayerSide](../CustomBattlePlayerSide)
