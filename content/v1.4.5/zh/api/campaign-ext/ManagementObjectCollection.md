---
title: "ManagementObjectCollection"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagementObjectCollection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ManagementObjectCollection

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class ManagementObjectCollection : ICollection, IEnumerable, IDisposable`
**Base:** `ICollection`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/ManagementObjectCollection.cs`

## 概述

`ManagementObjectCollection` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public ManagementBaseObject Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## 主要方法

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** 处理 `move next` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(ManagementBaseObject objectCollection, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### Dispose
`public void Dispose()`

**用途 / Purpose:** 处理 `dispose` 相关逻辑。

### GetEnumerator
`public ManagementObjectEnumerator GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

## 使用示例

```csharp
ManagementObjectCollection example = ManagementObjectCollection.Current;
```

## 参见

- [完整类目录](../catalog)