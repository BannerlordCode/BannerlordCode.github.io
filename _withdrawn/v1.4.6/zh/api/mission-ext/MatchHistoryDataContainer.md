---
title: "MatchHistoryDataContainer"
description: "MatchHistoryDataContainer：TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData 的 public 类，继承 MultiplayerLocalDataContainer<MatchHistoryData>；公开成员 7 个（方法 6、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MatchHistoryDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

MatchHistoryDataContainer 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs。它是一个 public 类，实现/继承 MultiplayerLocalDataContainer<MatchHistoryData>，继承链为 MatchHistoryDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData。public/protected 成员共 7 个：6 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：MatchHistoryDataContainer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，继承链 MatchHistoryDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData。成员构成以方法为主（方法 6/7，属性 0/7），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MatchHistoryDataContainer` | `public MatchHistoryDataContainer()` | 构造函数 |
| `GetSaveDirectoryName` | `protected override string GetSaveDirectoryName()` | 方法 |
| `GetSaveFileName` | `protected override string GetSaveFileName()` | 方法 |
| `OnBeforeRemoveEntry` | `protected override void OnBeforeRemoveEntry(MatchHistoryData item, out bool canRemoveEntry)` | 方法 |
| `OnBeforeAddEntry` | `protected override void OnBeforeAddEntry(MatchHistoryData item, out bool canAddEntry)` | 方法 |
| `List` | `protected override List<MatchHistoryData>DeserializeInCompatibilityMode(string serializedJson)` | 方法 |
| `TryGetHistoryData` | `public bool TryGetHistoryData(string matchId, out MatchHistoryData historyData)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
- [同命名空间 FavoriteServerData](../FavoriteServerData/)
- [同命名空间 FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [同命名空间 MatchHistoryData](../MatchHistoryData/)
- [同命名空间 PlayerInfo](../PlayerInfo/)
