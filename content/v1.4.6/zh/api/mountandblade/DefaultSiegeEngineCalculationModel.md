---
title: "DefaultSiegeEngineCalculationModel"
description: "DefaultSiegeEngineCalculationModel：TaleWorlds.MountAndBlade 的 public 类，继承 MissionSiegeEngineCalculationModel；公开成员 3 个（方法 3、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs。"
---
# DefaultSiegeEngineCalculationModel

**Namespace:** `TaleWorlds.MountAndBlade.ComponentInterfaces`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class DefaultSiegeEngineCalculationModel : MissionSiegeEngineCalculationModel`
**File:** `TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs`

## 概述

DefaultSiegeEngineCalculationModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs。它是一个 public 类，实现/继承 MissionSiegeEngineCalculationModel，继承链为 DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSiegeEngineCalculationModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录不同（TaleWorlds.MountAndBlade.ComponentInterfaces），继承链 DefaultSiegeEngineCalculationModel → MissionSiegeEngineCalculationModel → MBGameModel。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/ComponentInterfaces/DefaultSiegeEngineCalculationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CalculateReloadSpeed` | `public override float CalculateReloadSpeed(Agent userAgent, float baseSpeed)` | 方法 |
| `CalculateShipSiegeWeaponAmmoCount` | `public override int CalculateShipSiegeWeaponAmmoCount(IShipOrigin shipOrigin, Agent captain, RangedSiegeWeapon weapon)` | 方法 |
| `CalculateDamage` | `public override int CalculateDamage(Agent attackerAgent, float baseDamage)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 MissionSiegeEngineCalculationModel](../MissionSiegeEngineCalculationModel)
- [同命名空间 AgentApplyDamageModel](../AgentApplyDamageModel)
- [同命名空间 AgentDecideKilledOrUnconsciousModel](../AgentDecideKilledOrUnconsciousModel)
- [同命名空间 ApplyWeatherEffectsModel](../ApplyWeatherEffectsModel)
- [同命名空间 AutoBlockModel](../AutoBlockModel)
