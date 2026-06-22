<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ActionOptionData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActionOptionData

**Namespace:** TaleWorlds.MountAndBlade.Options
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ActionOptionData : IOptionData`
**Base:** `IOptionData`
**File:** `TaleWorlds.MountAndBlade/Options/ActionOptionData.cs`

## 概述

`ActionOptionData` 是一个数据结构/DTO，持有结构化字段。构造它以传递或序列化数据。

## 主要属性

| Name | Signature |
|------|-----------|
| `OnAction` | `public Action OnAction { get; }` |

## 主要方法

### Commit
```csharp
public void Commit()
```

### GetDefaultValue
```csharp
public float GetDefaultValue()
```

### GetOptionType
```csharp
public object GetOptionType()
```

### GetValue
```csharp
public float GetValue(bool forceRefresh)
```

### IsNative
```csharp
public bool IsNative()
```

### SetValue
```csharp
public void SetValue(float value)
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
// ActionOptionData (Data) 的典型用法
new ActionOptionData { /* fill fields */ };;
```

## 参见

- [完整类目录](../catalog)