<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SmeltingItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SmeltingItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `EquipmentElement` | `public EquipmentElement EquipmentElement { get; }` |
| `Visual` | `public ItemImageIdentifierVM Visual { get; set; }` |
| `Yield` | `public MBBindingList<CraftingResourceItemVM> Yield { get; set; }` |
| `InputMaterials` | `public MBBindingList<CraftingResourceItemVM> InputMaterials { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `NumOfItems` | `public int NumOfItems { get; set; }` |
| `HasMoreThanOneItem` | `public bool HasMoreThanOneItem { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `LockHint` | `public HintViewModel LockHint { get; set; }` |
| `IsLocked` | `public bool IsLocked { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

### ExecuteShowItemTooltip

```csharp
public void ExecuteShowItemTooltip()
```

### ExecuteHideItemTooltip

```csharp
public void ExecuteHideItemTooltip()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)