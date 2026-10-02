---
title: "MultiplayerLocalDataManager"
description: "MultiplayerLocalDataManager：TaleWorlds.MountAndBlade.Diamond.Lobby 的 public 类；公开成员 7 个（方法 3、属性 4、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MultiplayerLocalDataManager

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MultiplayerLocalDataManager`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MultiplayerLocalDataManager 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs。它是一个 public 类，继承链为 MultiplayerLocalDataManager。public/protected 成员共 7 个：3 方法、4 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MultiplayerLocalDataManager 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby`，继承链 MultiplayerLocalDataManager。成员构成以属性为主（属性 4/7，方法 3/7），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Instance` | `public static MultiplayerLocalDataManager Instance` | 属性 |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData` | 属性 |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory` | 属性 |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers` | 属性 |
| `InitializeManager` | `public static void InitializeManager()` | 方法 |
| `FinalizeManager` | `public static void FinalizeManager()` | 方法 |
| `Tick` | `public async void Tick(float dt)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [同命名空间 MultiplayerLocalData](../MultiplayerLocalData/)
- [同命名空间 MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
