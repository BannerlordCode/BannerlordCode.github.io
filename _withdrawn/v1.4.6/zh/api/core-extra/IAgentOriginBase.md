---
title: "IAgentOriginBase"
description: "IAgentOriginBase：TaleWorlds.Core 的 public 接口；公开成员 20 个（方法 7、属性 13、字段 0）。canonical 桶 core-extra。源文件 TaleWorlds.Core/IAgentOriginBase.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IAgentOriginBase

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IAgentOriginBase`
**File:** `TaleWorlds.Core/IAgentOriginBase.cs`
**Bucket:** `core-extra` (rule:TaleWorlds.Core)

## 概述

IAgentOriginBase 位于 TaleWorlds.Core 模块，源文件 TaleWorlds.Core/IAgentOriginBase.cs。它是一个 public 接口，继承链为 IAgentOriginBase。public/protected 成员共 20 个：7 方法、13 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IAgentOriginBase 落在 canonical 桶 `core-extra`（命中规则 `rule:TaleWorlds.Core`），命名空间 `TaleWorlds.Core`，继承链 IAgentOriginBase。成员构成以属性为主（属性 13/20，方法 7/20），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.Core/IAgentOriginBase.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IsUnderPlayersCommand` | `bool IsUnderPlayersCommand` | 属性 |
| `IsInSameArmyAsPlayer` | `bool IsInSameArmyAsPlayer` | 属性 |
| `FactionColor` | `uint FactionColor` | 属性 |
| `FactionColor2` | `uint FactionColor2` | 属性 |
| `BattleCombatant` | `IBattleCombatant BattleCombatant` | 属性 |
| `UniqueSeed` | `int UniqueSeed` | 属性 |
| `Seed` | `int Seed` | 属性 |
| `Banner` | `Banner Banner` | 属性 |
| `Troop` | `BasicCharacterObject Troop` | 属性 |
| `HasThrownWeapon` | `bool HasThrownWeapon` | 属性 |
| `HasHeavyArmor` | `bool HasHeavyArmor` | 属性 |
| `HasShield` | `bool HasShield` | 属性 |
| `HasSpear` | `bool HasSpear` | 属性 |
| `SetWounded` | `void SetWounded();` | 方法 |
| `SetKilled` | `void SetKilled();` | 方法 |
| `SetRouted` | `void SetRouted(bool isOrderRetreat);` | 方法 |
| `OnAgentRemoved` | `void OnAgentRemoved(float agentHealth);` | 方法 |
| `OnScoreHit` | `void OnScoreHit(BasicCharacterObject victim, BasicCharacterObject formationCaptain, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon);` | 方法 |
| `SetBanner` | `void SetBanner(Banner banner);` | 方法 |
| `GetTraitsMask` | `TroopTraitsMask GetTraitsMask();` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionSetCode](../ActionSetCode/)
- [同命名空间 AgentAttackType](../AgentAttackType/)
- [同命名空间 AgentControllerType](../AgentControllerType/)
- [同命名空间 AgentData](../AgentData/)
