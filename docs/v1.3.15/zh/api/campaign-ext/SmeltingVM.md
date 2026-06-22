<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SmeltingVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SmeltingVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`SmeltingVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting.Smelting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponTypeName` | `public string WeaponTypeName { get; set; }` |
| `WeaponTypeCode` | `public string WeaponTypeCode { get; set; }` |
| `CurrentSelectedItem` | `public SmeltingItemVM CurrentSelectedItem { get; set; }` |
| `IsAnyItemSelected` | `public bool IsAnyItemSelected { get; set; }` |
| `SmeltableItemList` | `public MBBindingList<SmeltingItemVM> SmeltableItemList { get; set; }` |
| `SelectAllHint` | `public HintViewModel SelectAllHint { get; set; }` |
| `SortController` | `public SmeltingSortControllerVM SortController { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshList

```csharp
public void RefreshList()
```

### TrySmeltingSelectedItems

```csharp
public void TrySmeltingSelectedItems(Hero currentCraftingHero)
```

### SaveItemLockStates

```csharp
public void SaveItemLockStates()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)