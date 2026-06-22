<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `EncyclopediaUnitPageVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EncyclopediaUnitPageVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`EncyclopediaUnitPageVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Encyclopedia.Pages` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Skills` | `public MBBindingList<EncyclopediaSkillVM> Skills { get; set; }` |
| `PropertiesList` | `public MBBindingList<StringItemWithHintVM> PropertiesList { get; set; }` |
| `EquipmentSetSelector` | `public SelectorVM<EncyclopediaUnitEquipmentSetSelectorItemVM> EquipmentSetSelector { get; set; }` |
| `CurrentSelectedEquipmentSet` | `public EncyclopediaUnitEquipmentSetSelectorItemVM CurrentSelectedEquipmentSet { get; set; }` |
| `UnitCharacter` | `public CharacterViewModel UnitCharacter { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `Tree` | `public EncyclopediaTroopTreeNodeVM Tree { get; set; }` |
| `TreeDisplayErrorText` | `public string TreeDisplayErrorText { get; set; }` |
| `EquipmentSetText` | `public string EquipmentSetText { get; set; }` |
| `HasErrors` | `public bool HasErrors { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### GetName

```csharp
public override string GetName()
```

### GetNavigationBarURL

```csharp
public override string GetNavigationBarURL()
```

### ExecuteSwitchBookmarkedState

```csharp
public override void ExecuteSwitchBookmarkedState()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)