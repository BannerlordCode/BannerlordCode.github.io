---
title: "QualifierDataEnumerator"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QualifierDataEnumerator`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QualifierDataEnumerator

**命名空间:** System.Management
**模块:** System.Management
**类型:** `public class QualifierDataEnumerator : IEnumerator`
**Base:** `IEnumerator`
**领域:** campaign-ext

## 概述

`QualifierDataEnumerator` 位于 `System.Management`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `System.Management` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Current` | `public QualifierData Current { get; }` |
| `Count` | `public int Count { get; }` |
| `IsSynchronized` | `public bool IsSynchronized { get; }` |
| `this` | `public virtual QualifierData this { get; }` |
| `SyncRoot` | `public object SyncRoot { get; }` |

## 主要方法

### MoveNext
`public bool MoveNext()`

**用途 / Purpose:** 处理 `move next` 相关逻辑。

### Reset
`public void Reset()`

**用途 / Purpose:** 将 `reset` 重置为初始状态。

### Add
`public virtual void Add(string qualifierName, object qualifierValue)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### Add
`public virtual void Add(string qualifierName, object qualifierValue, bool isAmended, bool propagatesToInstance, bool propagatesToSubclass, bool isOverridable)`

**用途 / Purpose:** 向当前集合/状态中添加 `add`。

### CopyTo
`public void CopyTo(Array array, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### CopyTo
`public void CopyTo(QualifierData qualifierArray, int index)`

**用途 / Purpose:** 处理 `copy to` 相关逻辑。

### GetEnumerator
`public QualifierDataEnumerator GetEnumerator()`

**用途 / Purpose:** 获取 `enumerator` 的当前值。

### Remove
`public virtual void Remove(string qualifierName)`

**用途 / Purpose:** 从当前集合/状态中移除 `remove`。

## 使用示例

```csharp
QualifierDataEnumerator example = QualifierDataEnumerator.Current;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
