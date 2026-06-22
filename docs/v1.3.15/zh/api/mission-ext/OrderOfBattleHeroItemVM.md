<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `OrderOfBattleHeroItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# OrderOfBattleHeroItemVM

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`OrderOfBattleHeroItemVM` 是 `TaleWorlds.MountAndBlade.ViewModelCollection.OrderOfBattle` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `BannerOfHero` | `public ItemObject BannerOfHero { get; }` |
| `IsAssignedBeforePlayer` | `public bool IsAssignedBeforePlayer { get; }` |
| `InitialFormation` | `public Formation InitialFormation { get; }` |
| `InitialFormationItem` | `public OrderOfBattleFormationItemVM InitialFormationItem { get; }` |
| `CurrentAssignedFormationItem` | `public OrderOfBattleFormationItemVM CurrentAssignedFormationItem { get; set; }` |
| `MismatchedAssignmentDescriptionText` | `public string MismatchedAssignmentDescriptionText { get; set; }` |
| `IsAssignedToAFormation` | `public bool IsAssignedToAFormation { get; set; }` |
| `IsLeadingAFormation` | `public bool IsLeadingAFormation { get; set; }` |
| `HasMismatchedAssignment` | `public bool HasMismatchedAssignment { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `IsDisabled` | `public bool IsDisabled { get; set; }` |
| `IsShown` | `public bool IsShown { get; set; }` |
| `IsMainHero` | `public bool IsMainHero { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `Tooltip` | `public BasicTooltipViewModel Tooltip { get; set; }` |
| `IsHighlightActive` | `public bool IsHighlightActive { get; set; }` |


## 主要方法

### SetInitialFormation

```csharp
public void SetInitialFormation(OrderOfBattleFormationItemVM formation)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnAssignmentRemoved

```csharp
public void OnAssignmentRemoved()
```

### RefreshInformation

```csharp
public void RefreshInformation()
```

### RefreshAssignmentInfo

```csharp
public void RefreshAssignmentInfo()
```

### SetIsPreAssigned

```csharp
public void SetIsPreAssigned(bool isPreAssigned)
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)