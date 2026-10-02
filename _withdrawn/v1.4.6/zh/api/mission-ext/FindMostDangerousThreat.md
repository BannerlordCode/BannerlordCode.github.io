---
title: "FindMostDangerousThreat"
description: "FindMostDangerousThreat：TaleWorlds.MountAndBlade.DividableTasks 的 public 类，继承 DividableTask；公开成员 4 个（方法 3、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FindMostDangerousThreat

**Namespace:** `TaleWorlds.MountAndBlade.DividableTasks`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class FindMostDangerousThreat : DividableTask`
**File:** `TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FindMostDangerousThreat 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs。它是一个 public 类，实现/继承 DividableTask，继承链为 FindMostDangerousThreat → DividableTask。public/protected 成员共 4 个：3 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FindMostDangerousThreat 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.DividableTasks`，继承链 FindMostDangerousThreat → DividableTask。成员构成以方法为主（方法 3/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/DividableTasks/FindMostDangerousThreat.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FindMostDangerousThreat` | `public FindMostDangerousThreat(DividableTask continueToTask = null) : base(continueToTask)` | 构造函数 |
| `UpdateExtra` | `protected override bool UpdateExtra()` | 方法 |
| `Prepare` | `public void Prepare(List<Threat>threats, RangedSiegeWeapon weapon)` | 方法 |
| `GetResult` | `public Threat GetResult(out Agent targetAgent)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 DividableTask](../DividableTask/)
- [同命名空间 FormationSearchThreatTask](../FormationSearchThreatTask/)
