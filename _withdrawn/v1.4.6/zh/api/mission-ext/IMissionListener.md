---
title: "IMissionListener"
description: "IMissionListener：TaleWorlds.MountAndBlade 的 public 接口；公开成员 7 个（方法 7、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/IMissionListener.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# IMissionListener

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public interface IMissionListener`
**File:** `TaleWorlds.MountAndBlade/IMissionListener.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

IMissionListener 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/IMissionListener.cs。它是一个 public 接口，继承链为 IMissionListener。public/protected 成员共 7 个：7 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：IMissionListener 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade`，继承链 IMissionListener。成员构成以方法为主（方法 7/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/IMissionListener.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnEquipItemsFromSpawnEquipmentBegin` | `void OnEquipItemsFromSpawnEquipmentBegin(Agent agent, Agent.CreationType creationType);` | 方法 |
| `OnEquipItemsFromSpawnEquipment` | `void OnEquipItemsFromSpawnEquipment(Agent agent, Agent.CreationType creationType);` | 方法 |
| `OnEndMission` | `void OnEndMission();` | 方法 |
| `OnMissionModeChange` | `void OnMissionModeChange(MissionMode oldMissionMode, bool atStart);` | 方法 |
| `OnConversationCharacterChanged` | `void OnConversationCharacterChanged();` | 方法 |
| `OnResetMission` | `void OnResetMission();` | 方法 |
| `OnDeploymentPlanMade` | `void OnDeploymentPlanMade(Team team, bool isFirstPlan);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 ActionIndexCache](../ActionIndexCache/)
- [同命名空间 AgentBuildData](../AgentBuildData/)
- [同命名空间 AgentCapsuleData](../AgentCapsuleData/)
- [同命名空间 AgentCommonAILogic](../AgentCommonAILogic/)
