---
title: "MonsterMissionData"
description: "MonsterMissionData：TaleWorlds.MountAndBlade 的 public 类，继承 IMonsterMissionData；公开成员 6 个（方法 0、属性 5、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/MonsterMissionData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MonsterMissionData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class MonsterMissionData : IMonsterMissionData`
**File:** `TaleWorlds.MountAndBlade/MonsterMissionData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MonsterMissionData 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/MonsterMissionData.cs。它是一个 public 类，实现/继承 IMonsterMissionData，继承链为 MonsterMissionData → IMonsterMissionData。public/protected 成员共 6 个：5 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MonsterMissionData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 MonsterMissionData → IMonsterMissionData。成员构成以属性为主（属性 5/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/MonsterMissionData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Monster` | `public Monster Monster` | 属性 |
| `BodyCapsule` | `public CapsuleData BodyCapsule` | 属性 |
| `CrouchedBodyCapsule` | `public CapsuleData CrouchedBodyCapsule` | 属性 |
| `ActionSet` | `public MBActionSet ActionSet` | 属性 |
| `FemaleActionSet` | `public MBActionSet FemaleActionSet` | 属性 |
| `MonsterMissionData` | `public MonsterMissionData(Monster monster)` | 构造函数 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 IMonsterMissionData](../../core-extra/IMonsterMissionData/)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
