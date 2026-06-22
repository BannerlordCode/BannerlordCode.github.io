<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `GauntletView`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GauntletView

**命名空间:** TaleWorlds.GauntletUI.Data
**模块:** TaleWorlds.GauntletUI
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`GauntletView` 是 `TaleWorlds.GauntletUI.Data` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `GauntletMovie` | `public GauntletMovie GauntletMovie { get; }` |
| `ItemTemplateUsageWithData` | `public ItemTemplateUsageWithData ItemTemplateUsageWithData { get; set; }` |
| `ViewModelPath` | `public BindingPath ViewModelPath { get; }` |
| `ViewModelPathString` | `public string ViewModelPathString { get; }` |
| `Parent` | `public GauntletView Parent { get; }` |
| `DisplayName` | `public string DisplayName { get; }` |


## 主要方法

### AddChild

```csharp
public void AddChild(GauntletView child)
```

### RemoveChild

```csharp
public void RemoveChild(GauntletView child)
```

### SwapChildrenAtIndeces

```csharp
public void SwapChildrenAtIndeces(GauntletView child1, GauntletView child2)
```

### RefreshBinding

```csharp
public void RefreshBinding()
```

### RefreshBindingWithChildren

```csharp
public void RefreshBindingWithChildren()
```

### ReleaseBindingWithChildren

```csharp
public void ReleaseBindingWithChildren()
```

### BindData

```csharp
public void BindData(string property, BindingPath path)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)