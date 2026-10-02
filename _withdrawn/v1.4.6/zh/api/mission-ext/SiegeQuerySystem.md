---
title: "SiegeQuerySystem"
description: "SiegeQuerySystem：TaleWorlds.MountAndBlade 的 public 类；公开成员 25 个（方法 4、属性 20、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/SiegeQuerySystem.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeQuerySystem

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SiegeQuerySystem`
**File:** `TaleWorlds.MountAndBlade/SiegeQuerySystem.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

SiegeQuerySystem 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/SiegeQuerySystem.cs。它是一个 public 类，继承链为 SiegeQuerySystem。public/protected 成员共 25 个：4 方法、20 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeQuerySystem 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 SiegeQuerySystem。成员构成以属性为主（属性 20/25，方法 4/25），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/SiegeQuerySystem.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `LeftRegionMemberCount` | `public int LeftRegionMemberCount` | 属性 |
| `LeftCloseAttackerCount` | `public int LeftCloseAttackerCount` | 属性 |
| `MiddleRegionMemberCount` | `public int MiddleRegionMemberCount` | 属性 |
| `MiddleCloseAttackerCount` | `public int MiddleCloseAttackerCount` | 属性 |
| `RightRegionMemberCount` | `public int RightRegionMemberCount` | 属性 |
| `RightCloseAttackerCount` | `public int RightCloseAttackerCount` | 属性 |
| `InsideAttackerCount` | `public int InsideAttackerCount` | 属性 |
| `LeftDefenderCount` | `public int LeftDefenderCount` | 属性 |
| `MiddleDefenderCount` | `public int MiddleDefenderCount` | 属性 |
| `RightDefenderCount` | `public int RightDefenderCount` | 属性 |
| `SiegeQuerySystem` | `public SiegeQuerySystem(Team team, IEnumerable<SiegeLane>lanes)` | 构造函数 |
| `Expire` | `public void Expire()` | 方法 |
| `DeterminePositionAssociatedSide` | `public int DeterminePositionAssociatedSide(Vec3 position)` | 方法 |
| `AreSidesRelated` | `public static bool AreSidesRelated(FormationAI.BehaviorSide side, int connectedSides)` | 方法 |
| `SideDistance` | `public static int SideDistance(int connectedSides, int side)` | 方法 |
| `LeftDefenderOrigin` | `public Vec3 LeftDefenderOrigin` | 属性 |
| `MidDefenderOrigin` | `public Vec3 MidDefenderOrigin` | 属性 |
| `RightDefenderOrigin` | `public Vec3 RightDefenderOrigin` | 属性 |
| `LeftAttackerOrigin` | `public Vec3 LeftAttackerOrigin` | 属性 |
| `MiddleAttackerOrigin` | `public Vec3 MiddleAttackerOrigin` | 属性 |
| `RightAttackerOrigin` | `public Vec3 RightAttackerOrigin` | 属性 |
| `LeftToMidDir` | `public Vec2 LeftToMidDir` | 属性 |
| `MidToLeftDir` | `public Vec2 MidToLeftDir` | 属性 |
| `MidToRightDir` | `public Vec2 MidToRightDir` | 属性 |
| `RightToMidDir` | `public Vec2 RightToMidDir` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
