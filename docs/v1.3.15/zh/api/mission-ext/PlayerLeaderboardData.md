<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PlayerLeaderboardData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerLeaderboardData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PlayerLeaderboardData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/PlayerLeaderboardData.cs`

## 概述

`PlayerLeaderboardData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public PlayerId PlayerId { get; set; }` |
| `RankId` | `public string RankId { get; set; }` |
| `Rating` | `public int Rating { get; set; }` |
| `Name` | `public string Name { get; set; }` |

## 使用示例

```csharp
// PlayerLeaderboardData (Data) 的典型用法
new PlayerLeaderboardData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)