---
title: "MatchHistoryDataContainer"
description: "MatchHistoryDataContainer 的自动生成类参考。"
---
# MatchHistoryDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MatchHistoryDataContainer : MultiplayerLocalDataContainer<MatchHistoryData>`
**Base:** `MultiplayerLocalDataContainer<MatchHistoryData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/MatchHistoryDataContainer.cs`

## 概述

`MatchHistoryDataContainer` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TryGetHistoryData
`public bool TryGetHistoryData(string matchId, out MatchHistoryData historyData)`

**用途 / Purpose:** 尝试获取 「get history data」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MatchHistoryDataContainer 实例
MatchHistoryDataContainer matchHistoryDataContainer = ...;
var result = matchHistoryDataContainer.TryGetHistoryData("example", historyData);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MatchHistoryDataContainer matchHistoryDataContainer = ...;
matchHistoryDataContainer.TryGetHistoryData("example", historyData);
```

## 参见

- [本区域目录](../)