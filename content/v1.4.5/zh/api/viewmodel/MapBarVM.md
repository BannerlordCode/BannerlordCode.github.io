---
title: "MapBarVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapBarVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapBarVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapBarVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapBarVM.cs`

## 概述

`MapBarVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

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
`public void Initialize(INavigationHandler navigationHandler, IMapStateHandler mapStateHandler, Func<MapBarShortcuts> getMapBarShortcuts, Action openArmyManagement)`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnRefresh
`public void OnRefresh()`

**用途 / Purpose:** 当 `refresh` 事件触发时调用此方法。

### Tick
`public void Tick(float dt)`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### ExecuteArmyManagement
`public void ExecuteArmyManagement()`

**用途 / Purpose:** 执行 `army management` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MapBarVM();
value.Initialize(navigationHandler, mapStateHandler, getMapBarShortcuts, openArmyManagement);
```

## 参见

- [完整类目录](../catalog)