<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `JoinGameData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# JoinGameData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class JoinGameData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/JoinGameData.cs`

## 概述

`JoinGameData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `GameServerProperties` | `public GameServerProperties GameServerProperties { get; set; }` |
| `PeerIndex` | `public int PeerIndex { get; set; }` |
| `SessionKey` | `public int SessionKey { get; set; }` |

## 使用示例

```csharp
// JoinGameData (Data) 的典型用法
new JoinGameData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)