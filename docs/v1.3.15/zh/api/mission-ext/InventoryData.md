<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `InventoryData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# InventoryData

**Namespace:** TaleWorlds.MountAndBlade.Diamond
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class InventoryData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade.Diamond/InventoryData.cs`

## 概述

`InventoryData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Items` | `public List<ItemData> Items { get; }` |

## 主要方法

### GetItemWithIndex
```csharp
public ItemData GetItemWithIndex(int itemIndex)
```

### DebugPrint
```csharp
public void DebugPrint()
```

## 使用示例

```csharp
// InventoryData (Data) 的典型用法
new InventoryData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)