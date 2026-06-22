<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `UpgradeTargetVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UpgradeTargetVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Party
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`UpgradeTargetVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Party` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `PrimaryActionInputKey` | `public InputKeyItemVM PrimaryActionInputKey { get; set; }` |
| `SecondaryActionInputKey` | `public InputKeyItemVM SecondaryActionInputKey { get; set; }` |
| `TertiaryActionInputKey` | `public InputKeyItemVM TertiaryActionInputKey { get; set; }` |
| `Requirements` | `public UpgradeRequirementsVM Requirements { get; set; }` |
| `TroopImage` | `public CharacterImageIdentifierVM TroopImage { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `AvailableUpgrades` | `public int AvailableUpgrades { get; set; }` |
| `IsAvailable` | `public bool IsAvailable { get; set; }` |
| `IsInsufficient` | `public bool IsInsufficient { get; set; }` |
| `IsHighlighted` | `public bool IsHighlighted { get; set; }` |
| `IsMarinerTroop` | `public bool IsMarinerTroop { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### Refresh

```csharp
public void Refresh(int upgradableAmount, bool isAvailable, bool isInsufficient, bool itemRequirementsMet, bool perkRequirementsMet, string hintString, bool isMarinerTroop)
```

### ExecuteUpgradeEncyclopediaLink

```csharp
public void ExecuteUpgradeEncyclopediaLink()
```

### ExecuteUpgrade

```csharp
public void ExecuteUpgrade()
```

### ExecuteSetFocused

```csharp
public void ExecuteSetFocused()
```

### ExecuteSetUnfocused

```csharp
public void ExecuteSetUnfocused()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)