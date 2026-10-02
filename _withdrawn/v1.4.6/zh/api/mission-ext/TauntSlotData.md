---
title: "TauntSlotData"
description: "TauntSlotData：TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData 的 public 类，继承 MultiplayerLocalData；公开成员 4 个（方法 1、属性 2、字段 0）。canonical 桶 mission-ext。源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TauntSlotData

**Namespace:** `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`
**Module:** `TaleWorlds.MountAndBlade.Diamond`
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## 概述

TauntSlotData 位于 TaleWorlds.MountAndBlade.Diamond 模块，源文件 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs。它是一个 public 类，实现/继承 MultiplayerLocalData，继承链为 TauntSlotData → MultiplayerLocalData。public/protected 成员共 4 个：1 方法、2 属性、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TauntSlotData 落在 canonical 桶 `mission-ext`（命中规则 `rule:TaleWorlds.MountAndBlade`），命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，继承链 TauntSlotData → MultiplayerLocalData。成员构成以属性为主（属性 2/4，方法 1/4），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlayerId` | `public string PlayerId` | 属性 |
| `List` | `public List<TauntIndexData>TauntIndices` | 属性 |
| `TauntSlotData` | `public TauntSlotData(string playerId)` | 构造函数 |
| `HasSameContentWith` | `public override bool HasSameContentWith(MultiplayerLocalData other)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MultiplayerLocalData](../MultiplayerLocalData/)
- [同命名空间 FavoriteServerData](../FavoriteServerData/)
- [同命名空间 FavoriteServerDataContainer](../FavoriteServerDataContainer/)
- [同命名空间 MatchHistoryData](../MatchHistoryData/)
- [同命名空间 MatchHistoryDataContainer](../MatchHistoryDataContainer/)
