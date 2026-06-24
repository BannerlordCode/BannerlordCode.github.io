<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTimeControlVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTimeControlVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapTimeControlVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar/MapTimeControlVM.cs`

## 概述

`MapTimeControlVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapBar` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsInBattleSimulation` | `public bool IsInBattleSimulation { get; set; }` |
| `IsInRecruitment` | `public bool IsInRecruitment { get; set; }` |
| `IsEncyclopediaOpen` | `public bool IsEncyclopediaOpen { get; set; }` |
| `IsInArmyManagement` | `public bool IsInArmyManagement { get; set; }` |
| `IsInTownManagement` | `public bool IsInTownManagement { get; set; }` |
| `IsInHideoutTroopManage` | `public bool IsInHideoutTroopManage { get; set; }` |
| `IsInMap` | `public bool IsInMap { get; set; }` |
| `IsInCampaignOptions` | `public bool IsInCampaignOptions { get; set; }` |
| `IsEscapeMenuOpened` | `public bool IsEscapeMenuOpened { get; set; }` |
| `IsMarriageOfferPopupActive` | `public bool IsMarriageOfferPopupActive { get; set; }` |
| `IsHeirSelectionPopupActive` | `public bool IsHeirSelectionPopupActive { get; set; }` |
| `IsMapCheatsActive` | `public bool IsMapCheatsActive { get; set; }` |
| `IsMapIncidentActive` | `public bool IsMapIncidentActive { get; set; }` |
| `IsOverlayContextMenuEnabled` | `public bool IsOverlayContextMenuEnabled { get; set; }` |
| `TimeOfDayHint` | `public BasicTooltipViewModel TimeOfDayHint { get; set; }` |
| `IsCurrentlyPausedOnMap` | `public bool IsCurrentlyPausedOnMap { get; set; }` |
| `IsCenterPanelEnabled` | `public bool IsCenterPanelEnabled { get; set; }` |
| `Time` | `public double Time { get; set; }` |
| `PausedText` | `public string PausedText { get; set; }` |
| `Date` | `public string Date { get; set; }` |
| `TimeFlowState` | `public int TimeFlowState { get; set; }` |
| `PauseHint` | `public BasicTooltipViewModel PauseHint { get; set; }` |
| `PlayHint` | `public BasicTooltipViewModel PlayHint { get; set; }` |
| `FastForwardHint` | `public BasicTooltipViewModel FastForwardHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### Refresh
`public void Refresh()`

**用途 / Purpose:** 刷新 `refresh` 的显示或缓存。

### ExecuteTimeControlChange
`public void ExecuteTimeControlChange(int selectedTimeSpeed)`

**用途 / Purpose:** 执行 `time control change` 操作或流程。

### ExecuteResetCamera
`public void ExecuteResetCamera()`

**用途 / Purpose:** 执行 `reset camera` 操作或流程。

## 使用示例

```csharp
var value = new MapTimeControlVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)