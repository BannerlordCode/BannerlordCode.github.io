---
title: "KillData"
description: "KillData：TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges 的 public 结构体；公开成员 6 个（方法 0、属性 6、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# KillData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public struct KillData`
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

KillData 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs。它是一个 public 结构体，继承链为 KillData。public/protected 成员共 6 个：6 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：KillData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges`，继承链 KillData。成员构成以属性为主（属性 6/6，方法 0/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `KillerId` | `public PlayerId KillerId` | 属性 |
| `VictimId` | `public PlayerId VictimId` | 属性 |
| `KillerFaction` | `public string KillerFaction` | 属性 |
| `VictimFaction` | `public string VictimFaction` | 属性 |
| `KillerTroop` | `public string KillerTroop` | 属性 |
| `VictimTroop` | `public string VictimTroop` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 Badge](../Badge/)
- [同命名空间 BadgeCondition](../BadgeCondition/)
- [同命名空间 BadgeManager](../BadgeManager/)
- [同命名空间 BadgeOwnerKillTracker](../BadgeOwnerKillTracker/)
