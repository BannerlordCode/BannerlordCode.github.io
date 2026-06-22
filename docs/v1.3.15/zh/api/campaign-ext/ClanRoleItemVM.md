<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ClanRoleItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ClanRoleItemVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ClanRoleItemVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.ClanManagement` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Role` | `public PartyRole Role { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `Members` | `public MBBindingList<ClanRoleMemberItemVM> Members { get; set; }` |
| `EffectiveOwner` | `public ClanRoleMemberItemVM EffectiveOwner { get; set; }` |
| `NotAssignedHint` | `public HintViewModel NotAssignedHint { get; set; }` |
| `DisabledHint` | `public HintViewModel DisabledHint { get; set; }` |
| `IsNotAssigned` | `public bool IsNotAssigned { get; set; }` |
| `HasEffects` | `public bool HasEffects { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `AssignedMemberEffects` | `public string AssignedMemberEffects { get; set; }` |
| `NoEffectText` | `public string NoEffectText { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### Refresh

```csharp
public void Refresh()
```

### ExecuteToggleRoleSelection

```csharp
public void ExecuteToggleRoleSelection()
```

### SetEnabled

```csharp
public void SetEnabled(bool enabled, TextObject disabledHint)
```

### Compare

```csharp
public int Compare(ClanRoleMemberItemVM x, ClanRoleMemberItemVM y)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)