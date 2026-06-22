<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerJoinGameData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerJoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerJoinGameData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerJoinGameData.cs`

## 概述

`PlayerJoinGameData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerData` | `public PlayerData PlayerData { get; set; }` |
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `Name` | `public string Name { get; }` |
| `PartyId` | `public Guid? PartyId { get; }` |
| `UsedCosmetics` | `public Dictionary<string, List<string>> UsedCosmetics { get; }` |
| `IpAddress` | `public string IpAddress { get; }` |
| `IsAdmin` | `public bool IsAdmin { get; }` |

## 主要方法

### ToString
```csharp
public override string ToString()
```

## 使用示例

```csharp
// PlayerJoinGameData (Data) 的典型用法
new PlayerJoinGameData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)