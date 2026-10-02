---
title: "CustomGameManager"
description: "CustomGameManager: a public class in TaleWorlds.MountAndBlade.CustomBattle, inheriting MBGameManager; 3 exposed members (3 methods, 0 properties, 0 fields). Source: TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs."
---
# CustomGameManager

**Namespace:** `TaleWorlds.MountAndBlade.CustomBattle`
**Module:** `TaleWorlds.MountAndBlade.CustomBattle`
**Type:** `public class CustomGameManager : MBGameManager`
**File:** `TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs`

## Overview

CustomGameManager lives in the TaleWorlds.MountAndBlade.CustomBattle module, source file TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs. It is a public class, implementing/inheriting MBGameManager; the inheritance chain is CustomGameManager → MBGameManager. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CustomGameManager is a top-level type in TaleWorlds.MountAndBlade.CustomBattle, namespace matching the module directory; inheritance chain CustomGameManager → MBGameManager. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. MBGameManager on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.CustomBattle/CustomGameManager.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DoLoadingForGameManager` | `protected override void DoLoadingForGameManager(GameManagerLoadingSteps gameManagerLoadingStep, out GameManagerLoadingSteps nextStep)` | method |
| `OnAfterCampaignStart` | `public override void OnAfterCampaignStart(Game game)` | method |
| `OnLoadFinished` | `public override void OnLoadFinished()` | method |

## See Also

- [↑ mountandblade-custombattle module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace ArmyCompositionGroupVM](../ArmyCompositionGroupVM)
- [same namespace ArmyCompositionItemVM](../ArmyCompositionItemVM)
- [same namespace CPUBenchmarkMissionLogic](../CPUBenchmarkMissionLogic)
- [same namespace CPUBenchmarkMissionSpawnHandler](../CPUBenchmarkMissionSpawnHandler)
