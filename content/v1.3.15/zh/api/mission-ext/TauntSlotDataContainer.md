---
title: "TauntSlotDataContainer"
description: "TauntSlotDataContainer 的自动生成类参考。"
---
# TauntSlotDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotDataContainer : MultiplayerLocalDataContainer<TauntSlotData>`
**Base:** `MultiplayerLocalDataContainer<TauntSlotData>`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotDataContainer.cs`

## 概述

`TauntSlotDataContainer` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTauntIndicesForPlayer
`public MBReadOnlyList<TauntIndexData> GetTauntIndicesForPlayer(string playerId)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 taunt indices for player 的结果。

```csharp
// 先通过子系统 API 拿到 TauntSlotDataContainer 实例
TauntSlotDataContainer tauntSlotDataContainer = ...;
var result = tauntSlotDataContainer.GetTauntIndicesForPlayer("example");
```

### SetTauntIndicesForPlayer
`public void SetTauntIndicesForPlayer(string playerId, List<TauntIndexData> tauntIndices)`

**用途 / Purpose:** **用途 / Purpose:** 为 taunt indices for player 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 TauntSlotDataContainer 实例
TauntSlotDataContainer tauntSlotDataContainer = ...;
tauntSlotDataContainer.SetTauntIndicesForPlayer("example", tauntIndices);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
TauntSlotDataContainer tauntSlotDataContainer = ...;
tauntSlotDataContainer.GetTauntIndicesForPlayer("example");
```

## 参见

- [本区域目录](../)