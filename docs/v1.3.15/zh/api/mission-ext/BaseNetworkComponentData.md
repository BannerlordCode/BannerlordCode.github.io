<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BaseNetworkComponentData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BaseNetworkComponentData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BaseNetworkComponentData : UdpNetworkComponent`
**Base:** `UdpNetworkComponent`
**File:** `TaleWorlds.MountAndBlade/BaseNetworkComponentData.cs`

## 概述

`BaseNetworkComponentData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentBattleIndex` | `public int CurrentBattleIndex { get; }` |

## 主要方法

### UpdateCurrentBattleIndex
```csharp
public void UpdateCurrentBattleIndex(int currentBattleIndex)
```

## 使用示例

```csharp
// BaseNetworkComponentData (Data) 的典型用法
new BaseNetworkComponentData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)