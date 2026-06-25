---
title: "FavoriteServerData"
description: "FavoriteServerData 的自动生成类参考。"
---
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/FavoriteServerData.cs`

## 概述

`FavoriteServerData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `FavoriteServerData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### CreateFrom
`public static FavoriteServerData CreateFrom(GameServerEntry serverEntry)`

**用途 / Purpose:** 构建一个新的 「from」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
FavoriteServerData.CreateFrom(serverEntry);
```

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** 判断当前对象是否已经持有 「same content with」。

```csharp
// 先通过子系统 API 拿到 FavoriteServerData 实例
FavoriteServerData favoriteServerData = ...;
var result = favoriteServerData.HasSameContentWith(other);
```

### HasSameContentWith
`public bool HasSameContentWith(GameServerEntry serverEntry)`

**用途 / Purpose:** 判断当前对象是否已经持有 「same content with」。

```csharp
// 先通过子系统 API 拿到 FavoriteServerData 实例
FavoriteServerData favoriteServerData = ...;
var result = favoriteServerData.HasSameContentWith(serverEntry);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
FavoriteServerData entry = ...;
```

## 参见

- [本区域目录](../)