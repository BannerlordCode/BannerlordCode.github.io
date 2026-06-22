<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemVM`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemVM

**命名空间:** TaleWorlds.Core.ViewModelCollection
**模块:** TaleWorlds.Core
**类型:** 类 class class
**领域:** 核心数据 Core

## 概述

> 本页为自动生成的存根。`ItemVM` 是 `TaleWorlds.Core.ViewModelCollection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TypeId` | `public int TypeId { get; }` |
| `Version` | `public int Version { get; set; }` |
| `ItemType` | `public EquipmentIndex ItemType { get; }` |
| `ImageIdentifier` | `public ItemImageIdentifierVM ImageIdentifier { get; set; }` |
| `StringId` | `public string StringId { get; set; }` |
| `ItemDescription` | `public string ItemDescription { get; set; }` |
| `IsFiltered` | `public bool IsFiltered { get; set; }` |
| `ItemCost` | `public int ItemCost { get; set; }` |
| `TypeName` | `public string TypeName { get; set; }` |
| `PreviewHint` | `public HintViewModel PreviewHint { get; set; }` |
| `EquipHint` | `public HintViewModel EquipHint { get; set; }` |
| `UnequipHint` | `public HintViewModel UnequipHint { get; set; }` |
| `SlaughterHint` | `public BasicTooltipViewModel SlaughterHint { get; set; }` |
| `DonateHint` | `public BasicTooltipViewModel DonateHint { get; set; }` |
| `BuyAndEquipHint` | `public BasicTooltipViewModel BuyAndEquipHint { get; set; }` |
| `SellHint` | `public BasicTooltipViewModel SellHint { get; set; }` |
| `BuyHint` | `public BasicTooltipViewModel BuyHint { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecutePreviewItem

```csharp
public void ExecutePreviewItem()
```

### ExecuteUnequipItem

```csharp
public void ExecuteUnequipItem()
```

### ExecuteEquipItem

```csharp
public void ExecuteEquipItem()
```

### ReleaseStaticContent

```csharp
public static void ReleaseStaticContent()
```

### ExecuteRefreshTooltip

```csharp
public void ExecuteRefreshTooltip()
```

### ExecuteCancelTooltip

```csharp
public void ExecuteCancelTooltip()
```

### ExecuteBuyItem

```csharp
public void ExecuteBuyItem()
```

### ExecuteSelectItem

```csharp
public void ExecuteSelectItem()
```

### GetItemTypeWithItemObject

```csharp
public EquipmentIndex GetItemTypeWithItemObject()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)