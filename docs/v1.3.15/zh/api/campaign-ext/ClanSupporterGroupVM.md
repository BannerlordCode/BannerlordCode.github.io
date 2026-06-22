<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanSupporterGroupVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanSupporterGroupVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanSupporterGroupVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Supporters` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TitleText` | `public string TitleText { get; set; }` |
| `TotalInfluenceBonus` | `public float TotalInfluenceBonus { get; }` |
| `InfluenceBonusDescription` | `public string InfluenceBonusDescription { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TotalInfluence` | `public string TotalInfluence { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `Supporters` | `public MBBindingList<ClanSupporterItemVM> Supporters { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### AddSupporter

```csharp
public void AddSupporter(Hero hero)
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteSelect

```csharp
public void ExecuteSelect()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)