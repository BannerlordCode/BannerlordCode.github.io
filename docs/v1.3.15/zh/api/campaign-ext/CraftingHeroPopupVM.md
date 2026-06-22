<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingHeroPopupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingHeroPopupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingHeroPopupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `SelectHeroText` | `public string SelectHeroText { get; set; }` |
| `CraftingHeroes` | `public MBBindingList<CraftingAvailableHeroItemVM> CraftingHeroes { get; }` |
| `ExitInputKey` | `public InputKeyItemVM ExitInputKey { get; set; }` |


## 主要方法

### ExecuteOpenPopup

```csharp
public void ExecuteOpenPopup()
```

### ExecuteClosePopup

```csharp
public void ExecuteClosePopup()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### SetExitInputKey

```csharp
public void SetExitInputKey(HotKey hotKey)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)