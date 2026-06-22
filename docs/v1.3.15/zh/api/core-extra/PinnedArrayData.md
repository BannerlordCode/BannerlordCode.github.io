<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PinnedArrayData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PinnedArrayData

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public struct PinnedArrayData<T>`
**Base:** 无
**File:** `TaleWorlds.Library/PinnedArrayData.cs`

## 概述

`PinnedArrayData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Handle` | `public GCHandle Handle { get { return this._handle; }` |

## 主要方法

### CheckIfTypeRequiresManualPinning
```csharp
public static bool CheckIfTypeRequiresManualPinning(Type type)
```

### Dispose
```csharp
public void Dispose()
```

## 使用示例

```csharp
// PinnedArrayData (Data) 的典型用法
new PinnedArrayData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)