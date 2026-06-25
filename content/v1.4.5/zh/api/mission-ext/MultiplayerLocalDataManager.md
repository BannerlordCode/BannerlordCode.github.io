---
title: "MultiplayerLocalDataManager"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MultiplayerLocalDataManager`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MultiplayerLocalDataManager

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerLocalDataManager`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby/MultiplayerLocalDataManager.cs`

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

**用途 / Purpose:** 初始化 `manager` 的状态、资源或绑定。

### FinalizeManager
`public static void FinalizeManager()`

**用途 / Purpose:** 处理 `finalize manager` 相关逻辑。

### Tick
`public async void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

## 使用示例

```csharp
var manager = MultiplayerLocalDataManager.Current;
```

## 参见

- [完整类目录](../catalog)