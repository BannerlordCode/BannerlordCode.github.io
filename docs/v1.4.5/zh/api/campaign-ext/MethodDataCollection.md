<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MethodDataCollection`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MethodDataCollection

**Namespace:** System.Management
**Module:** System.Management
**Type:** `public class MethodDataCollection : ICollection, IEnumerable`
**Base:** `ICollection`
**File:** `Bannerlord.Source/bin/System.Management/System.Management/MethodDataCollection.cs`

## 概述

`MethodDataCollection` 位于 `System.Management`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public MethodData Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `this` | `public virtual MethodData this { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## 主要方法

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** 处理 `move next` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Add
`public virtual void Add(string methodName)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public virtual void Add(string methodName, ManagementBaseObject inParameters, ManagementBaseObject outParameters)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(MethodData methodArray, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### GetEnumerator
`public MethodDataEnumerator GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### Remove
`public virtual void Remove(string methodName)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

## 使用示例

```csharp
MethodDataCollection example = MethodDataCollection.Current;
```

## 参见

- [完整类目录](../catalog)