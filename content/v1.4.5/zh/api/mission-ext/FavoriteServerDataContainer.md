---
title: "FavoriteServerDataContainer"
description: "FavoriteServerDataContainer 的自动生成类参考。"
---
# FavoriteServerDataContainer

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerDataContainer : MultiplayerLocalDataContainer<FavoriteServerData>`
**Base:** `MultiplayerLocalDataContainer<FavoriteServerData>`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/FavoriteServerDataContainer.cs`

## 概述

`FavoriteServerDataContainer` 位于 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### TryGetServerData
`public bool TryGetServerData(GameServerEntry serverEntry, out FavoriteServerData favoriteServerData)`

**用途 / Purpose:** 尝试获取 「get server data」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 FavoriteServerDataContainer 实例
FavoriteServerDataContainer favoriteServerDataContainer = ...;
var result = favoriteServerDataContainer.TryGetServerData(serverEntry, favoriteServerData);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FavoriteServerDataContainer favoriteServerDataContainer = ...;
favoriteServerDataContainer.TryGetServerData(serverEntry, favoriteServerData);
```

## 参见

- [本区域目录](../)