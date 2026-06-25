---
title: "FavoriteServerData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FavoriteServerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData/FavoriteServerData.cs`

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

**用途 / Purpose:** 创建一个 `from` 实例或对象。

### HasSameContentWith
`public override bool HasSameContentWith(MultiplayerLocalData other)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

### HasSameContentWith
`public bool HasSameContentWith(GameServerEntry serverEntry)`

**用途 / Purpose:** 判断当前对象是否包含/拥有 `same content with`。

## 使用示例

```csharp
var value = new FavoriteServerData();
```

## 参见

- [完整类目录](../catalog)