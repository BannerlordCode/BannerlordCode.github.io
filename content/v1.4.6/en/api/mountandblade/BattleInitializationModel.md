---
title: "BattleInitializationModel"
description: "BattleInitializationModel: a public class in TaleWorlds.MountAndBlade, inheriting MBGameModel<BattleInitializationModel>; 8 exposed members (6 methods, 1 properties, 1 fields). Source: TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs."
---
# BattleInitializationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## Overview

BattleInitializationModel lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<BattleInitializationModel>; the inheritance chain is BattleInitializationModel → MBGameModel. It exposes 8 public/protected members: 6 methods, 1 properties, 1 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: BattleInitializationModel is a top-level type in TaleWorlds.MountAndBlade, namespace differing from (TaleWorlds.MountAndBlade.ComponentInterfaces) the module directory; inheritance chain BattleInitializationModel → MBGameModel. The surface is method-led (methods 6/8, properties 1/8), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BypassPlayerDeployment` | `public static bool BypassPlayerDeployment` | property |
| `List` | `public abstract List<FormationClass>GetAllAvailableTroopTypes();` | method |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected abstract bool CanPlayerSideDeployWithOrderOfBattleAux();` | method |
| `CanPlayerSideDeployWithOrderOfBattle` | `public bool CanPlayerSideDeployWithOrderOfBattle()` | method |
| `InitializeModel` | `public void InitializeModel()` | method |
| `FinalizeModel` | `public void FinalizeModel()` | method |
| `SetBypassPlayerDeployment` | `public static void SetBypassPlayerDeployment(bool value)` | method |
| `MinimumTroopCountForPlayerDeployment` | `public const int MinimumTroopCountForPlayerDeployment` | field |

## See Also

- [↑ mountandblade module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentApplyDamageModel](../AgentApplyDamageModel)
- [same namespace AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [same namespace ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [same namespace AutoBlockModel](../AutoBlockModel)
