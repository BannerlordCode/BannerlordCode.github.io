<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitVolunteerVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RecruitVolunteerVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `OwnerHero` | `public Hero OwnerHero { get; }` |
| `VolunteerTroops` | `public List<CharacterObject> VolunteerTroops { get; }` |
| `GoldCost` | `public int GoldCost { get; }` |
| `Troops` | `public MBBindingList<RecruitVolunteerTroopVM> Troops { get; set; }` |
| `Owner` | `public RecruitVolunteerOwnerVM Owner { get; set; }` |
| `CanRecruit` | `public bool CanRecruit { get; set; }` |
| `ButtonIsVisible` | `public bool ButtonIsVisible { get; set; }` |
| `QuantityText` | `public string QuantityText { get; set; }` |
| `RecruitText` | `public string RecruitText { get; set; }` |
| `RecruitHint` | `public HintViewModel RecruitHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteRecruit

```csharp
public void ExecuteRecruit(RecruitVolunteerTroopVM troop)
```

### ExecuteRemoveFromCart

```csharp
public void ExecuteRemoveFromCart(RecruitVolunteerTroopVM troop)
```

### OnRecruitMoveToCart

```csharp
public void OnRecruitMoveToCart(RecruitVolunteerTroopVM troop)
```

### OnRecruitRemovedFromCart

```csharp
public void OnRecruitRemovedFromCart(RecruitVolunteerTroopVM troop)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)