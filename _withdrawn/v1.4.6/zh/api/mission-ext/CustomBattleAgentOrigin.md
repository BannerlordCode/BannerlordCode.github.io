---
title: "CustomBattleAgentOrigin"
description: "CustomBattleAgentOrigin：TaleWorlds.MountAndBlade 的 public 类，继承 IAgentOriginBase；公开成员 16 个（方法 5、属性 10、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CustomBattleAgentOrigin

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class CustomBattleAgentOrigin : IAgentOriginBase`
**File:** `TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

CustomBattleAgentOrigin 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs。它是一个 public 类，实现/继承 IAgentOriginBase，继承链为 CustomBattleAgentOrigin → IAgentOriginBase。public/protected 成员共 16 个：5 方法、10 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CustomBattleAgentOrigin 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 CustomBattleAgentOrigin → IAgentOriginBase。成员构成以属性为主（属性 10/16，方法 5/16），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/CustomBattleAgentOrigin.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CustomBattleCombatant` | `public CustomBattleCombatant CustomBattleCombatant` | 属性 |
| `Troop` | `public BasicCharacterObject Troop` | 属性 |
| `Rank` | `public int Rank` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand` | 属性 |
| `IsInSameArmyAsPlayer` | `public bool IsInSameArmyAsPlayer` | 属性 |
| `FactionColor` | `public uint FactionColor` | 属性 |
| `FactionColor2` | `public uint FactionColor2` | 属性 |
| `Seed` | `public int Seed` | 属性 |
| `UniqueSeed` | `public int UniqueSeed` | 属性 |
| `CustomBattleAgentOrigin` | `public CustomBattleAgentOrigin(CustomBattleCombatant customBattleCombatant, BasicCharacterObject characterObject, CustomBattleTroopSupplier troopSupplier, bool isPlayerSide, int rank = -1, UniqueTroopDescriptor uniqueNo = default(UniqueTroopDescriptor))` | 构造函数 |
| `SetWounded` | `public void SetWounded()` | 方法 |
| `SetKilled` | `public void SetKilled()` | 方法 |
| `SetRouted` | `public void SetRouted(bool isOrderRetreat)` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(float agentHealth)` | 方法 |
| `SetBanner` | `public void SetBanner(Banner banner)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IAgentOriginBase](../../core-extra/IAgentOriginBase/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
