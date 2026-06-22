<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FavoriteServerData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FavoriteServerData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FavoriteServerData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/FavoriteServerData.cs`

## 概述

`FavoriteServerData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Address` | `public string Address { get; set; }` |
| `Port` | `public int Port { get; set; }` |
| `GameType` | `public string GameType { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## 主要方法

### CreateFrom
```csharp
public static FavoriteServerData CreateFrom(GameServerEntry serverEntry)
```

### HasSameContentWith
```csharp
public override bool HasSameContentWith(MultiplayerLocalData other)
```

### HasSameContentWith
```csharp
public bool HasSameContentWith(GameServerEntry serverEntry)
```

## 使用示例

```csharp
// FavoriteServerData (Data) 的典型用法
new FavoriteServerData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)