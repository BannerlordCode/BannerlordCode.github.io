<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GameKeyOptionCategoryVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameKeyOptionCategoryVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`GameKeyOptionCategoryVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.GameOptions.GameKeys` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `ResetText` | `public string ResetText { get; set; }` |
| `GameKeyGroups` | `public MBBindingList<GameKeyGroupVM> GameKeyGroups { get; set; }` |
| `AuxiliaryKeyGroups` | `public MBBindingList<AuxiliaryKeyGroupVM> AuxiliaryKeyGroups { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### IsChanged

```csharp
public bool IsChanged()
```

### ExecuteResetToDefault

```csharp
public void ExecuteResetToDefault()
```

### OnDone

```csharp
public void OnDone()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Cancel

```csharp
public void Cancel()
```

### ApplyValues

```csharp
public void ApplyValues()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)