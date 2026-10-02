---
title: "CustomBattleSubModule"
description: "CustomBattleSubModule: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting MBSubModuleBase; 2 exposed members (2 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs."
---
# CustomBattleSubModule

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomBattleSubModule : MBSubModuleBase`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs`

## Overview

CustomBattleSubModule lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs. It is a public class, implementing/inheriting MBSubModuleBase; the inheritance chain is CustomBattleSubModule → MBSubModuleBase. It exposes 2 public/protected members: 2 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomBattleSubModule is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomBattleSubModule → MBSubModuleBase. The surface is method-led (methods 2/2, properties 0/2), so it mostly exposes operations. MBSubModuleBase on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomBattleSubModule.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnSubModuleLoad` | `protected override void OnSubModuleLoad()` | method |
| `OnApplicationTick` | `protected override void OnApplicationTick(float dt)` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
