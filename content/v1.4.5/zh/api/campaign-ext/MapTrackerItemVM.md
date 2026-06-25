---
title: "MapTrackerItemVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapTrackerItemVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapTrackerItemVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MapTrackerItemVM<T> : MapTrackerItemVM where T : ITrackableCampaignObject`
**Base:** `MapTrackerItemVM where T : ITrackableCampaignObject`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker/MapTrackerItemVM.cs`

## 概述

`MapTrackerItemVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.Tracker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `CanToggleTrack` | `public bool CanToggleTrack { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsBehind` | `public bool IsBehind { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `TrackerType` | `public string TrackerType { get; set; }` |
| `PartyPosition` | `public Vec2 PartyPosition { get; set; }` |
| `FactionVisual` | `public BannerImageIdentifierVM FactionVisual { get; set; }` |
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |

## 主要方法

### UpdateProperties
`public void UpdateProperties()`

**用途 / Purpose:** 更新 `properties` 的状态或数据。

### UpdatePosition
`public void UpdatePosition(float screenX, float screenY, float screenW)`

**用途 / Purpose:** 更新 `position` 的状态或数据。

### ExecuteToggleTrack
`public void ExecuteToggleTrack()`

**用途 / Purpose:** 执行 `toggle track` 操作或流程。

### ExecuteGoToPosition
`public void ExecuteGoToPosition()`

**用途 / Purpose:** 执行 `go to position` 操作或流程。

### ExecuteShowTooltip
`public void ExecuteShowTooltip()`

**用途 / Purpose:** 执行 `show tooltip` 操作或流程。

### ExecuteHideTooltip
`public void ExecuteHideTooltip()`

**用途 / Purpose:** 执行 `hide tooltip` 操作或流程。

### RefreshBinding
`public void RefreshBinding()`

**用途 / Purpose:** 刷新 `binding` 的显示或缓存。

## 使用示例

```csharp
var implementation = new CustomMapTrackerItemVM();
```

## 参见

- [完整类目录](../catalog)