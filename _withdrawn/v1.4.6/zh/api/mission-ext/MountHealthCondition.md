---
title: "MountHealthCondition"
description: "MountHealthCondition：TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions 的 public 类，继承 MPPerkCondition；公开成员 6 个（方法 3、属性 1、字段 1）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/MountHealthCondition.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MountHealthCondition

**Namespace:** `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`
**Module:** `TaleWorlds.MountAndBlade.Multiplayer`
**Type:** `public class MountHealthCondition : MPPerkCondition`
**File:** `TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/MountHealthCondition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MountHealthCondition 位于 TaleWorlds.MountAndBlade.Multiplayer 模块，源文件 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/MountHealthCondition.cs。它是一个 public 类，实现/继承 MPPerkCondition，继承链为 MountHealthCondition → MPPerkCondition。public/protected 成员共 6 个：3 方法、1 属性、1 字段、1 构造函数。 反编译器把该类型拆到了 2 个源文件，签名已合并。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MountHealthCondition 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions`，继承链 MountHealthCondition → MPPerkCondition。成员构成以方法为主（方法 3/6，属性 1/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds/MountAndBlade/Network/Gameplay/Perks/Conditions/MountHealthCondition.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `EventFlags` | `public override MPPerkCondition.PerkEventFlags EventFlags` | 属性 |
| `MountHealthCondition` | `protected MountHealthCondition()` | 构造函数 |
| `Deserialize` | `protected override void Deserialize(XmlNode node)` | 方法 |
| `Check` | `public override bool Check(MissionPeer peer)` | 方法 |
| `Check` | `public override bool Check(Agent agent)` | 方法 |
| `StringType` | `protected static string StringType` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MPPerkCondition](../MPPerkCondition/)
- [同命名空间 AgentStatusCondition](../AgentStatusCondition/)
- [同命名空间 BannerBearerCondition](../BannerBearerCondition/)
- [同命名空间 ClosestFlagCondition](../ClosestFlagCondition/)
- [同命名空间 ControllerCondition](../ControllerCondition/)
