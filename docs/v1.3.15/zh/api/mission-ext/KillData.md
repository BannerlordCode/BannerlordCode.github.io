<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `KillData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# KillData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.MultiplayerBadges
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct KillData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/MultiplayerBadges/KillData.cs`

## 概述

`KillData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `KillerId` | `public PlayerId KillerId { get; set; }` |
| `VictimId` | `public PlayerId VictimId { get; set; }` |
| `KillerFaction` | `public string KillerFaction { get; set; }` |
| `VictimFaction` | `public string VictimFaction { get; set; }` |
| `KillerTroop` | `public string KillerTroop { get; set; }` |
| `VictimTroop` | `public string VictimTroop { get; set; }` |

## 使用示例

```csharp
// KillData (Data) 的典型用法
new KillData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)