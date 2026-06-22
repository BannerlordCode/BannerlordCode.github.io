<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `RecruitVolunteerTroopVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# RecruitVolunteerTroopVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`RecruitVolunteerTroopVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Recruitment` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `Level` | `public string Level { get; set; }` |
| `CanBeRecruited` | `public bool CanBeRecruited { get; set; }` |
| `IsHiglightEnabled` | `public bool IsHiglightEnabled { get; set; }` |
| `Wage` | `public int Wage { get; set; }` |
| `Cost` | `public int Cost { get; set; }` |
| `IsInCart` | `public bool IsInCart { get; set; }` |
| `IsTroopEmpty` | `public bool IsTroopEmpty { get; set; }` |
| `PlayerHasEnoughRelation` | `public bool PlayerHasEnoughRelation { get; set; }` |
| `ImageIdentifier` | `public CharacterImageIdentifierVM ImageIdentifier { get; set; }` |
| `NameText` | `public string NameText { get; set; }` |
| `TierIconData` | `public StringItemWithHintVM TierIconData { get; set; }` |
| `TypeIconData` | `public StringItemWithHintVM TypeIconData { get; set; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### ExecuteRecruit

```csharp
public void ExecuteRecruit()
```

### ExecuteOpenEncyclopedia

```csharp
public void ExecuteOpenEncyclopedia()
```

### ExecuteRemoveFromCart

```csharp
public void ExecuteRemoveFromCart()
```

### ExecuteBeginHint

```csharp
public virtual void ExecuteBeginHint()
```

### ExecuteEndHint

```csharp
public virtual void ExecuteEndHint()
```

### ExecuteFocus

```csharp
public void ExecuteFocus()
```

### ExecuteUnfocus

```csharp
public void ExecuteUnfocus()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)