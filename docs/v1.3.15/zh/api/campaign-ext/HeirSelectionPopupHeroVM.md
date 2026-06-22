<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeirSelectionPopupHeroVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HeirSelectionPopupHeroVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`HeirSelectionPopupHeroVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.HeirSelectionPopup` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Hero` | `public Hero Hero { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Age` | `public int Age { get; set; }` |
| `Culture` | `public string Culture { get; set; }` |
| `Occupation` | `public string Occupation { get; set; }` |
| `RelationToMainHero` | `public string RelationToMainHero { get; set; }` |
| `Model` | `public HeroViewModel Model { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Traits` | `public MBBindingList<EncyclopediaTraitItemVM> Traits { get; set; }` |
| `Attributes` | `public MBBindingList<MarriageOfferPopupHeroAttributeVM> Attributes { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `OtherSkills` | `public MBBindingList<EncyclopediaSkillVM> OtherSkills { get; set; }` |
| `HasOtherSkills` | `public bool HasOtherSkills { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)