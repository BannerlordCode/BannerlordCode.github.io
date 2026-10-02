---
title: "PartyGroupAgentOrigin"
description: "PartyGroupAgentOrigin：TaleWorlds.CampaignSystem 的 public 类，继承 IAgentOriginBase；公开成员 17 个（方法 5、属性 12、字段 0）。源文件 TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs。"
---
# PartyGroupAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class PartyGroupAgentOrigin : IAgentOriginBase`
**File:** `TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs`

## 概述

PartyGroupAgentOrigin 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs。它是一个 public 类，实现/继承 IAgentOriginBase，继承链为 PartyGroupAgentOrigin → IAgentOriginBase。public/protected 成员共 17 个：5 方法、12 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：PartyGroupAgentOrigin 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.AgentOrigins），继承链 PartyGroupAgentOrigin → IAgentOriginBase。成员构成以属性为主（属性 12/17，方法 5/17），对外主要以状态读取接口暴露。继承链上的 IAgentOriginBase 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/AgentOrigins/PartyGroupAgentOrigin.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Party` | `public PartyBase Party` | 属性 |
| `BattleCombatant` | `public IBattleCombatant BattleCombatant` | 属性 |
| `Banner` | `public Banner Banner` | 属性 |
| `UniqueSeed` | `public int UniqueSeed` | 属性 |
| `Troop` | `public CharacterObject Troop` | 属性 |
| `TroopDesc` | `public UniqueTroopDescriptor TroopDesc` | 属性 |
| `Rank` | `public int Rank` | 属性 |
| `IsUnderPlayersCommand` | `public bool IsUnderPlayersCommand` | 属性 |
| `IsInSameArmyAsPlayer` | `public bool IsInSameArmyAsPlayer` | 属性 |
| `FactionColor` | `public uint FactionColor` | 属性 |
| `FactionColor2` | `public uint FactionColor2` | 属性 |
| `Seed` | `public int Seed` | 属性 |
| `SetWounded` | `public void SetWounded()` | 方法 |
| `SetKilled` | `public void SetKilled()` | 方法 |
| `SetRouted` | `public void SetRouted(bool isOrderRetreat)` | 方法 |
| `OnAgentRemoved` | `public void OnAgentRemoved(float agentHealth)` | 方法 |
| `SetBanner` | `public void SetBanner(Banner banner)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 PartyAgentOrigin](../PartyAgentOrigin)
- [同命名空间 SimpleAgentOrigin](../SimpleAgentOrigin)
