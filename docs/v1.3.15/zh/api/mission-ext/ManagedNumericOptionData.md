<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedNumericOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedNumericOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ManagedNumericOptionData : ManagedOptionData, INumericOptionData, IOptionData`
**Base:** `ManagedOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedNumericOptionData.cs`

## 概述

`ManagedNumericOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetMinValue
```csharp
public float GetMinValue()
```

### GetMaxValue
```csharp
public float GetMaxValue()
```

### GetIsDiscrete
```csharp
public bool GetIsDiscrete()
```

### GetDiscreteIncrementInterval
```csharp
public int GetDiscreteIncrementInterval()
```

### GetShouldUpdateContinuously
```csharp
public bool GetShouldUpdateContinuously()
```

## 使用示例

```csharp
// ManagedNumericOptionData (Data) 的典型用法
new ManagedNumericOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)