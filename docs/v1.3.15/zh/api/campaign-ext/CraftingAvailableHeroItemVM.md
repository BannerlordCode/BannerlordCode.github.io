<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CraftingAvailableHeroItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CraftingAvailableHeroItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`CraftingAvailableHeroItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.WeaponCrafting` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HeroData` | `public HeroVM HeroData { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `CurrentStamina` | `public float CurrentStamina { get; set; }` |
| `MaxStamina` | `public int MaxStamina { get; set; }` |
| `StaminaPercentage` | `public string StaminaPercentage { get; set; }` |
| `SmithySkillLevel` | `public int SmithySkillLevel { get; set; }` |
| `CraftingPerks` | `public MBBindingList<CraftingPerkVM> CraftingPerks { get; set; }` |
| `PerksText` | `public string PerksText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshStamina

```csharp
public void RefreshStamina()
```

### RefreshOrderAvailability

```csharp
public void RefreshOrderAvailability(CraftingOrder order)
```

### RefreshSkills

```csharp
public void RefreshSkills()
```

### RefreshPerks

```csharp
public void RefreshPerks()
```

### ExecuteSelection

```csharp
public void ExecuteSelection()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)