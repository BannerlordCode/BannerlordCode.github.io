---
title: "FavoriteServerDataContainer"
description: "FavoriteServerDataContainer：TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData 的 public 类，继承 MultiplayerLocalDataContainer<FavoriteServerData>；公开成员 3 个（方法 3、属性 0、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# FavoriteServerDataContainer

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class FavoriteServerDataContainer : MultiplayerLocalDataContainer<FavoriteServerData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

FavoriteServerDataContainer 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs。它是一个 public 类，实现/继承 MultiplayerLocalDataContainer<FavoriteServerData>，继承链为 FavoriteServerDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData。public/protected 成员共 3 个：3 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：FavoriteServerDataContainer 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，继承链 FavoriteServerDataContainer → MultiplayerLocalDataContainer → MultiplayerLocalData。成员构成以方法为主（方法 3/3，属性 0/3），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerDataContainer.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetSaveDirectoryName` | `protected override string GetSaveDirectoryName()` | 方法 |
| `GetSaveFileName` | `protected override string GetSaveFileName()` | 方法 |
| `TryGetServerData` | `public bool TryGetServerData(GameServerEntry serverEntry, out FavoriteServerData favoriteServerData)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MultiplayerLocalDataContainer](../MultiplayerLocalDataContainer__1/)
- [同命名空间 FavoriteServerData](../FavoriteServerData/)
- [同命名空间 MatchHistoryData](../MatchHistoryData/)
- [同命名空间 MatchHistoryDataContainer](../MatchHistoryDataContainer/)
- [同命名空间 PlayerInfo](../PlayerInfo/)
