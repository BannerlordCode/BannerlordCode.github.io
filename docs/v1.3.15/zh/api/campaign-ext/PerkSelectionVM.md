<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `PerkSelectionVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PerkSelectionVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`PerkSelectionVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.CharacterDeveloper.PerkSelection` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; set; }` |
| `AvailablePerks` | `public MBBindingList<PerkSelectionItemVM> AvailablePerks { get; set; }` |


## 主要方法

### SetCurrentSelectionPerk

```csharp
public void SetCurrentSelectionPerk(PerkVM perk)
```

### ResetSelectedPerks

```csharp
public void ResetSelectedPerks()
```

### ApplySelectedPerks

```csharp
public void ApplySelectedPerks()
```

### IsPerkSelected

```csharp
public bool IsPerkSelected(PerkObject perk)
```

### IsAnyPerkSelected

```csharp
public bool IsAnyPerkSelected()
```

### ExecuteDeactivate

```csharp
public void ExecuteDeactivate()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)