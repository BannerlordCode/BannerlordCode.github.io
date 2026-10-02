---
title: "BattleMoraleModel"
description: "BattleMoraleModel：TaleWorlds.MountAndBlade.ComponentInterfaces 的 public 类，继承 MBGameModel<BattleMoraleModel>；公开成员 19 个（方法 10、属性 0、字段 9）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# BattleMoraleModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public abstract class BattleMoraleModel : MBGameModel<BattleMoraleModel>`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

BattleMoraleModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BattleMoraleModel>，继承链为 BattleMoraleModel → MBGameModel → GameModel。public/protected 成员共 19 个：10 方法、9 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BattleMoraleModel 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.ComponentInterfaces`，继承链 BattleMoraleModel → MBGameModel → GameModel。成员构成以方法为主（方法 10/19，属性 0/19），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/BattleMoraleModel.cs 的方法体或该类型的深写页确认。

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

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel/)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel/)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel/)
- [同命名空间 AutoBlockModel](../AutoBlockModel/)
