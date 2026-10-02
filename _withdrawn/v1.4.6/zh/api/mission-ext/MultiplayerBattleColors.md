---
title: "MultiplayerBattleColors"
description: "MultiplayerBattleColors：TaleWorlds.MountAndBlade.Missions.Multiplayer 的 public 结构体；公开成员 5 个（方法 2、属性 1、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerBattleColors

**Namespace:** `TaleWorlds.MountAndBlade.Missions.Multiplayer`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct MultiplayerBattleColors`
**File:** `TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerBattleColors 位于 TaleWorlds.MountAndBlade 模块，源文件 TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs。它是一个 public 结构体，继承链为 MultiplayerBattleColors。public/protected 成员共 5 个：2 方法、1 属性、1 构造函数、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerBattleColors 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Missions.Multiplayer`，继承链 MultiplayerBattleColors。成员构成以方法为主（方法 2/5，属性 1/5），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade/Missions/Multiplayer/MultiplayerBattleColors.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MultiplayerBattleColors` | `public MultiplayerBattleColors(MultiplayerBattleColors.MultiplayerCultureColorInfo attackerColors, MultiplayerBattleColors.MultiplayerCultureColorInfo defenderColors)` | 构造函数 |
| `CreateWith` | `public static MultiplayerBattleColors CreateWith(BasicCultureObject attackerCulture, BasicCultureObject defenderCulture)` | 方法 |
| `GetPeerColors` | `public MultiplayerBattleColors.MultiplayerCultureColorInfo GetPeerColors(MissionPeer peer)` | 方法 |
| `MultiplayerCultureColorInfo` | `public readonly struct MultiplayerCultureColorInfo` | 属性 |
| `MultiplayerCultureColorInfo` | `public readonly struct MultiplayerCultureColorInfo` | 嵌套类型 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
