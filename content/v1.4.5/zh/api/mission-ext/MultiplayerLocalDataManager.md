---
title: "MultiplayerLocalDataManager"
description: "MultiplayerLocalDataManager 的自动生成类参考。"
---
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/MultiplayerLocalDataManager.cs`

## 概述

`MultiplayerLocalDataManager` 是一个管理器：它拥有子系统的生命周期、查找入口和跨对象协调职责。

## 心智模型

把 `MultiplayerLocalDataManager` 当作一个 Manager 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Instance` | `public static MultiplayerLocalDataManager Instance { get; }` |
| `TauntSlotData` | `public TauntSlotDataContainer TauntSlotData { get; }` |
| `MatchHistory` | `public MatchHistoryDataContainer MatchHistory { get; }` |
| `FavoriteServers` | `public FavoriteServerDataContainer FavoriteServers { get; }` |

## 主要方法

### InitializeManager
`public static void InitializeManager()`

**用途 / Purpose:** 为 manager 初始化必要的资源、状态或绑定。

```csharp
// 静态调用，不需要实例
MultiplayerLocalDataManager.InitializeManager();
```

### FinalizeManager
`public static void FinalizeManager()`

**用途 / Purpose:** 调用 FinalizeManager 对应的操作。

```csharp
// 静态调用，不需要实例
MultiplayerLocalDataManager.FinalizeManager();
```

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 MultiplayerLocalDataManager 实例
MultiplayerLocalDataManager multiplayerLocalDataManager = ...;
multiplayerLocalDataManager.Tick(0);
```

## 使用示例

```csharp
var manager = MultiplayerLocalDataManager.Current;
```

## 参见

- [本区域目录](../)