<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GroupedOptionCategoryVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GroupedOptionCategoryVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GroupedOptionCategoryVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `AllOptions` | `public IEnumerable<GenericOptionDataVM> AllOptions { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsResetSupported` | `public bool IsResetSupported { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `Groups` | `public MBBindingList<OptionGroupVM> Groups { get; set; }` |
| `BaseOptions` | `public MBBindingList<GenericOptionDataVM> BaseOptions { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ResetData

```csharp
public void ResetData()
```

### ExecuteResetToDefault

```csharp
public void ExecuteResetToDefault()
```

### GetOption

```csharp
public GenericOptionDataVM GetOption(ManagedOptions.ManagedOptionsType optionType)
```

### GetOption

```csharp
public GenericOptionDataVM GetOption(NativeOptions.NativeOptionsType optionType)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)