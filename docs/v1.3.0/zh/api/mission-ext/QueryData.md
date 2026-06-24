<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QueryData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

## 概述

`QueryData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `QueryData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Value` | `public T Value { get; }` |

## 主要方法

### Evaluate
`public void Evaluate(float currentTime)`

**用途 / Purpose:** 处理 `evaluate` 相关逻辑。

### SetValue
`public void SetValue(T value, float currentTime)`

**用途 / Purpose:** 设置 `value` 的值或状态。

### GetCachedValue
`public T GetCachedValue()`

**用途 / Purpose:** 获取 `cached value` 的当前值。

### GetCachedValueUnlessTooOld
`public T GetCachedValueUnlessTooOld()`

**用途 / Purpose:** 获取 `cached value unless too old` 的当前值。

### GetCachedValueWithMaxAge
`public T GetCachedValueWithMaxAge(float age)`

**用途 / Purpose:** 获取 `cached value with max age` 的当前值。

### Expire
`public void Expire()`

**用途 / Purpose:** 处理 `expire` 相关逻辑。

### SetupSyncGroup
`public static void SetupSyncGroup(params IQueryData groupItems)`

**用途 / Purpose:** 设置 `up sync group` 的值或状态。

### SetSyncGroup
`public void SetSyncGroup(IQueryData syncGroup)`

**用途 / Purpose:** 设置 `sync group` 的值或状态。

## 使用示例

```csharp
var value = new QueryData();
```

## 参见

- [完整类目录](../catalog)