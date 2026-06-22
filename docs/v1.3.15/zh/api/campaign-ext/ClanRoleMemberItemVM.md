<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanRoleMemberItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleMemberItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanRoleMemberItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `RelevantSkill` | `public SkillObject RelevantSkill { get; }` |
| `RelevantSkillValue` | `public int RelevantSkillValue { get; }` |
| `Member` | `public ClanPartyMemberItemVM Member { get; set; }` |
| `Hint` | `public HintViewModel Hint { get; set; }` |
| `IsRemoveAssigneeOption` | `public bool IsRemoveAssigneeOption { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### ExecuteAssignHeroToRole

```csharp
public void ExecuteAssignHeroToRole()
```

### GetEffectsList

```csharp
public string GetEffectsList(PartyRole role)
```

### IsHeroAssignableForRole

```csharp
public static bool IsHeroAssignableForRole(Hero hero, PartyRole role, MobileParty party)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)