<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GenericOptionDataVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GenericOptionDataVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GenericOptionDataVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsNative` | `public bool IsNative { get; }` |
| `IsAction` | `public bool IsAction { get; }` |
| `Description` | `public string Description { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ImageIDs` | `public string ImageIDs { get; set; }` |
| `OptionTypeID` | `public int OptionTypeID { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |


## 主要方法

### UpdateData

```csharp
public virtual void UpdateData(bool initUpdate)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetOptionType

```csharp
public object GetOptionType()
```

### GetOptionData

```csharp
public IOptionData GetOptionData()
```

### ResetToDefault

```csharp
public void ResetToDefault()
```

### UpdateEnableState

```csharp
public void UpdateEnableState()
```

### UpdateValue

```csharp
public abstract void UpdateValue()
```

### Cancel

```csharp
public abstract void Cancel()
```

### IsChanged

```csharp
public abstract bool IsChanged()
```

### SetValue

```csharp
public abstract void SetValue(float value)
```

### ResetData

```csharp
public abstract void ResetData()
```

### ApplyValue

```csharp
public abstract void ApplyValue()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)