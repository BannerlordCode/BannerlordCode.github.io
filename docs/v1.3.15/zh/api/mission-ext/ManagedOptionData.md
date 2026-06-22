<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ManagedOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ManagedOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options.ManagedOptions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class ManagedOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ManagedOptions/ManagedOptionData.cs`

## 概述

`ManagedOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要方法

### GetDefaultValue
```csharp
public virtual float GetDefaultValue()
```

### Commit
```csharp
public void Commit()
```

### GetValue
```csharp
public float GetValue(bool forceRefresh)
```

### SetValue
```csharp
public void SetValue(float value)
```

### GetOptionType
```csharp
public object GetOptionType()
```

### IsNative
```csharp
public bool IsNative()
```

### IsAction
```csharp
public bool IsAction()
```

### GetIsDisabledAndReasonID
```csharp
public ValueTuple<string, bool> GetIsDisabledAndReasonID()
```

## 使用示例

```csharp
// ManagedOptionData (Data) 的典型用法
new ManagedOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)