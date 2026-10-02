---
title: "BattleInitializationModel"
description: "BattleInitializationModel：TaleWorlds.MountAndBlade 的 public 类，继承 MBGameModel<BattleInitializationModel>；公开成员 8 个（方法 6、属性 1、字段 1）。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs。"
---
# BattleInitializationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleInitializationModel : MBGameModel<BattleInitializationModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs`

## 概述

BattleInitializationModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BattleInitializationModel>，继承链为 BattleInitializationModel → MBGameModel。public/protected 成员共 8 个：6 方法、1 属性、1 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleInitializationModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ComponentInterfaces），继承链 BattleInitializationModel → MBGameModel。成员构成以方法为主（方法 6/8，属性 1/8），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleInitializationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BypassPlayerDeployment` | `public static bool BypassPlayerDeployment` | 属性 |
| `List` | `public abstract List<FormationClass>GetAllAvailableTroopTypes();` | 方法 |
| `CanPlayerSideDeployWithOrderOfBattleAux` | `protected abstract bool CanPlayerSideDeployWithOrderOfBattleAux();` | 方法 |
| `CanPlayerSideDeployWithOrderOfBattle` | `public bool CanPlayerSideDeployWithOrderOfBattle()` | 方法 |
| `InitializeModel` | `public void InitializeModel()` | 方法 |
| `FinalizeModel` | `public void FinalizeModel()` | 方法 |
| `SetBypassPlayerDeployment` | `public static void SetBypassPlayerDeployment(bool value)` | 方法 |
| `MinimumTroopCountForPlayerDeployment` | `public const int MinimumTroopCountForPlayerDeployment` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [同命名空间 AutoBlockModel](../AutoBlockModel)
