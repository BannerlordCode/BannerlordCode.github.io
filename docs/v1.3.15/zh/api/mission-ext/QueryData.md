<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `QueryData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# QueryData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class QueryData<T> : IQueryData`
**Base:** `IQueryData`
**File:** `TaleWorlds.MountAndBlade/QueryData.cs`

## 概述

`QueryData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `Value` | `public T Value { get; }` |

## 主要方法

### Evaluate
```csharp
public void Evaluate(float currentTime)
```

### SetValue
```csharp
public void SetValue(T value, float currentTime)
```

### GetCachedValue
```csharp
public T GetCachedValue()
```

### GetCachedValueUnlessTooOld
```csharp
public T GetCachedValueUnlessTooOld()
```

### GetCachedValueWithMaxAge
```csharp
public T GetCachedValueWithMaxAge(float age)
```

### Expire
```csharp
public void Expire()
```

### SetupSyncGroup
```csharp
public static void SetupSyncGroup(params IQueryData groupItems)
```

### SetSyncGroup
```csharp
public void SetSyncGroup(IQueryData syncGroup)
```

## 使用示例

```csharp
// QueryData (Data) 的典型用法
new QueryData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)