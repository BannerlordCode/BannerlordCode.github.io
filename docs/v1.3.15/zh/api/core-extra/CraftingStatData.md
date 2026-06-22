<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingStatData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingStatData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public struct CraftingStatData`
**Base:** 无
**File:** `TaleWorlds.Core/CraftingStatData.cs`

## 概述

`CraftingStatData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsValid` | `public bool IsValid { get { return this.MaxValue >= 0f; }` |

## 使用示例

```csharp
// CraftingStatData (Data) 的典型用法
new CraftingStatData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)