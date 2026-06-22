<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TauntIndexData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TauntIndexData

**Namespace:** TaleWorlds.MountAndBlade.Diamond.Lobby.LocalData
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct TauntIndexData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/Lobby/LocalData/TauntIndexData.cs`

## 概述

`TauntIndexData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `TauntId` | `public string TauntId { get; set; }` |
| `TauntIndex` | `public int TauntIndex { get; set; }` |

## 主要方法

### Equals
```csharp
public override bool Equals(object obj)
```

### GetHashCode
```csharp
public override int GetHashCode()
```

## 使用示例

```csharp
// TauntIndexData (Data) 的典型用法
new TauntIndexData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)