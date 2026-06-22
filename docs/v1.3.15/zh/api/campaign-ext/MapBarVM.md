<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MapBarVM

**命名空间:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**模块:** TaleWorlds.CampaignSystem
**类型:** 类 class class
**领域:** 战役系统 Campaign

## 概述

> 本页为自动生成的存根。`MapBarVM` 是 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `MapInfo` | `public MapInfoVM MapInfo { get; set; }` |
| `MapTimeControl` | `public MapTimeControlVM MapTimeControl { get; set; }` |
| `MapNavigation` | `public MapNavigationVM MapNavigation { get; set; }` |
| `IsGatherArmyVisible` | `public bool IsGatherArmyVisible { get; set; }` |
| `IsInInfoMode` | `public bool IsInInfoMode { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanGatherArmy` | `public bool CanGatherArmy { get; set; }` |
| `GatherArmyHint` | `public HintViewModel GatherArmyHint { get; set; }` |
| `IsCameraCentered` | `public bool IsCameraCentered { get; set; }` |
| `CurrentScreen` | `public string CurrentScreen { get; set; }` |
| `TutorialNotification` | `public ElementNotificationVM TutorialNotification { get; set; }` |


## 主要方法

### Initialize

```csharp
public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)
```

### RefreshValues

```csharp
public override void RefreshValues()
```

### OnRefresh

```csharp
public void OnRefresh()
```

### Tick

```csharp
public void Tick(float dt)
```

### ExecuteArmyManagement

```csharp
public void ExecuteArmyManagement()
```

### OnFinalize

```csharp
public override void OnFinalize()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)