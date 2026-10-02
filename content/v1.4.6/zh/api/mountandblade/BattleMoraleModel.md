---
title: "BattleMoraleModel"
description: "BattleMoraleModel：TaleWorlds.MountAndBlade 的 public 类，继承 MBGameModel<BattleMoraleModel>；公开成员 19 个（方法 10、属性 0、字段 9）。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs。"
---
# BattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`

## 概述

BattleMoraleModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BattleMoraleModel>，继承链为 BattleMoraleModel → MBGameModel。public/protected 成员共 19 个：10 方法、9 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleMoraleModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ComponentInterfaces），继承链 BattleMoraleModel → MBGameModel。成员构成以方法为主（方法 10/19，属性 0/19），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `float>CalculateMaxMoraleChangeDueToAgentIncapacitated` | `public abstract ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentIncapacitated(Agent affectedAgent, AgentState affectedAgentState, Agent affectorAgent, in KillingBlow killingBlow);` | 方法 |
| `float>CalculateMaxMoraleChangeDueToAgentPanicked` | `public abstract ValueTuple<float, float>CalculateMaxMoraleChangeDueToAgentPanicked(Agent agent);` | 方法 |
| `CalculateMoraleChangeToCharacter` | `public abstract float CalculateMoraleChangeToCharacter(Agent agent, float maxMoraleChange);` | 方法 |
| `GetEffectiveInitialMorale` | `public abstract float GetEffectiveInitialMorale(Agent agent, float baseMorale);` | 方法 |
| `CanPanicDueToMorale` | `public abstract bool CanPanicDueToMorale(Agent agent);` | 方法 |
| `CalculateCasualtiesFactor` | `public abstract float CalculateCasualtiesFactor(BattleSideEnum battleSide);` | 方法 |
| `GetAverageMorale` | `public abstract float GetAverageMorale(Formation formation);` | 方法 |
| `CalculateMoraleChangeOnShipSunk` | `public abstract float CalculateMoraleChangeOnShipSunk(IShipOrigin shipOrigin);` | 方法 |
| `CalculateMoraleOnRamming` | `public abstract float CalculateMoraleOnRamming(Agent agent, IShipOrigin rammingShip, IShipOrigin rammedShip);` | 方法 |
| `CalculateMoraleOnShipsConnected` | `public abstract float CalculateMoraleOnShipsConnected(Agent agent, IShipOrigin ownerShip, IShipOrigin targetShip);` | 方法 |
| `BaseMoraleGainOnKill` | `public const float BaseMoraleGainOnKill` | 字段 |
| `BaseMoraleLossOnKill` | `public const float BaseMoraleLossOnKill` | 字段 |
| `BaseMoraleGainOnPanic` | `public const float BaseMoraleGainOnPanic` | 字段 |
| `BaseMoraleLossOnPanic` | `public const float BaseMoraleLossOnPanic` | 字段 |
| `MeleeWeaponMoraleMultiplier` | `public const float MeleeWeaponMoraleMultiplier` | 字段 |
| `RangedWeaponMoraleMultiplier` | `public const float RangedWeaponMoraleMultiplier` | 字段 |
| `SiegeWeaponMoraleMultiplier` | `public const float SiegeWeaponMoraleMultiplier` | 字段 |
| `BurningSiegeWeaponMoraleBonus` | `public const float BurningSiegeWeaponMoraleBonus` | 字段 |
| `CasualtyFactorRate` | `public const float CasualtyFactorRate` | 字段 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [同命名空间 AutoBlockModel](../AutoBlockModel)
