<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanMembersVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanMembersVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanMembersVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement.Categories` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsAnyValidMemberSelected` | `public bool IsAnyValidMemberSelected { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `FamilyText` | `public string FamilyText { get; set; }` |
| `TraitsText` | `public string TraitsText { get; set; }` |
| `SkillsText` | `public string SkillsText { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `LocationText` | `public string LocationText { get; set; }` |
| `CompanionsText` | `public string CompanionsText { get; set; }` |
| `Companions` | `public MBBindingList<ClanLordItemVM> Companions { get; set; }` |
| `Family` | `public MBBindingList<ClanLordItemVM> Family { get; set; }` |
| `CurrentSelectedMember` | `public ClanLordItemVM CurrentSelectedMember { get; set; }` |
| `SortController` | `public ClanMembersSortControllerVM SortController { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### RefreshMembersList

```csharp
public void RefreshMembersList()
```

### SelectMember

```csharp
public void SelectMember(Hero hero)
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)