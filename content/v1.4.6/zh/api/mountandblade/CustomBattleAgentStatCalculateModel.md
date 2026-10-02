---
title: "CustomBattleAgentStatCalculateModel"
description: "CustomBattleAgentStatCalculateModel：TaleWorlds.MountAndBlade 的 public 类，继承 AgentStatCalculateModel；公开成员 12 个（方法 12、属性 0、字段 0）。源文件 TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs。"
---
# CustomBattleAgentStatCalculateModel

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleAgentStatCalculateModel : AgentStatCalculateModel`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs`

## 概述

CustomBattleAgentStatCalculateModel 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs。它是一个 public 类，实现/继承 AgentStatCalculateModel，继承链为 CustomBattleAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel。public/protected 成员共 12 个：12 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleAgentStatCalculateModel 是 TaleWorlds.MountAndBlade 的顶层类型，命名空间与模块目录一致，继承链 CustomBattleAgentStatCalculateModel → AgentStatCalculateModel → MBGameModel。成员构成以方法为主（方法 12/12，属性 0/12），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CustomBattleAgentStatCalculateModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetDifficultyModifier` | `public override float GetDifficultyModifier()` | 方法 |
| `CanAgentRideMount` | `public override bool CanAgentRideMount(Agent agent, Agent targetMount)` | 方法 |
| `InitializeAgentStats` | `public override void InitializeAgentStats(Agent agent, Equipment spawnEquipment, AgentDrivenProperties agentDrivenProperties, AgentBuildData agentBuildData)` | 方法 |
| `UpdateAgentStats` | `public override void UpdateAgentStats(Agent agent, AgentDrivenProperties agentDrivenProperties)` | 方法 |
| `GetWeaponDamageMultiplier` | `public override float GetWeaponDamageMultiplier(Agent agent, WeaponComponentData weapon)` | 方法 |
| `GetEquipmentStealthBonus` | `public override float GetEquipmentStealthBonus(Agent agent)` | 方法 |
| `GetSneakAttackMultiplier` | `public override float GetSneakAttackMultiplier(Agent agent, WeaponComponentData weapon)` | 方法 |
| `GetKnockBackResistance` | `public override float GetKnockBackResistance(Agent agent)` | 方法 |
| `GetKnockDownResistance` | `public override float GetKnockDownResistance(Agent agent, StrikeType strikeType = StrikeType.Invalid)` | 方法 |
| `GetDismountResistance` | `public override float GetDismountResistance(Agent agent)` | 方法 |
| `GetWeaponInaccuracy` | `public override float GetWeaponInaccuracy(Agent agent, WeaponComponentData weapon, int weaponSkill)` | 方法 |
| `GetBreatheHoldMaxDuration` | `public override float GetBreatheHoldMaxDuration(Agent agent, float baseBreatheHoldMaxDuration)` | 方法 |

## 参见

- [↑ mountandblade 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 AgentStatCalculateModel](../AgentStatCalculateModel)
- [同命名空间 ActionIndexCache](../ActionIndexCache)
- [同命名空间 AgentBuildData](../AgentBuildData)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic)
