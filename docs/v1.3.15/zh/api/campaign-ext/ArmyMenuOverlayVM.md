<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArmyMenuOverlayVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ArmyMenuOverlayVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`ArmyMenuOverlayVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |
| `ManageArmyHint` | `public HintViewModel ManageArmyHint { get; set; }` |
| `Cohesion` | `public int Cohesion { get; set; }` |
| `IsCohesionWarningEnabled` | `public bool IsCohesionWarningEnabled { get; set; }` |
| `CanManageArmy` | `public bool CanManageArmy { get; set; }` |
| `IsPlayerArmyLeader` | `public bool IsPlayerArmyLeader { get; set; }` |
| `ManCountText` | `public string ManCountText { get; set; }` |
| `Food` | `public int Food { get; set; }` |
| `PartyList` | `public MBBindingList<GameMenuPartyItemVM> PartyList { get; set; }` |
| `CohesionHint` | `public BasicTooltipViewModel CohesionHint { get; set; }` |
| `ManCountHint` | `public BasicTooltipViewModel ManCountHint { get; set; }` |
| `FoodHint` | `public BasicTooltipViewModel FoodHint { get; set; }` |
| `IssueList` | `public MBBindingList<StringItemWithHintVM> IssueList { get; }` |


## 主要方法

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

### OnFrameTick

```csharp
public override void OnFrameTick(float dt)
```

### Refresh

```csharp
public sealed override void Refresh()
```

### ExecuteOpenArmyManagement

```csharp
public void ExecuteOpenArmyManagement()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)