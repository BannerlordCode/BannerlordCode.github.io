<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntSlotData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntSlotData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class TauntSlotData : MultiplayerLocalData`
**Base:** `MultiplayerLocalData`
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntSlotData.cs`

## 概述

`TauntSlotData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `PlayerId` | `public string PlayerId { get; set; }` |
| `TauntIndices` | `public List<TauntIndexData> TauntIndices { get; set; }` |

## 主要方法

### HasSameContentWith
```csharp
public override bool HasSameContentWith(MultiplayerLocalData other)
```

## 使用示例

```csharp
// TauntSlotData (Data) 的典型用法
new TauntSlotData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)