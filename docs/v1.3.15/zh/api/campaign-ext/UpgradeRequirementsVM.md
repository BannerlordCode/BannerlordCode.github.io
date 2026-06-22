<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UpgradeRequirementsVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeRequirementsVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`UpgradeRequirementsVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `IsItemRequirementMet` | `public bool IsItemRequirementMet { get; set; }` |
| `IsPerkRequirementMet` | `public bool IsPerkRequirementMet { get; set; }` |
| `HasItemRequirement` | `public bool HasItemRequirement { get; set; }` |
| `HasPerkRequirement` | `public bool HasPerkRequirement { get; set; }` |
| `PerkRequirement` | `public string PerkRequirement { get; set; }` |
| `ItemRequirement` | `public string ItemRequirement { get; set; }` |
| `ItemRequirementHint` | `public HintViewModel ItemRequirementHint { get; set; }` |
| `PerkRequirementHint` | `public HintViewModel PerkRequirementHint { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### SetItemRequirement

```csharp
public void SetItemRequirement(ItemCategory category)
```

### SetPerkRequirement

```csharp
public void SetPerkRequirement(PerkObject perk)
```

### SetRequirementsMet

```csharp
public void SetRequirementsMet(bool isItemRequirementMet, bool isPerkRequirementMet)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)