<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionNameMarkerTargetBaseVM`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MissionNameMarkerTargetBaseVM

**Namespace:** SandBox.ViewModelCollection.Missions.NameMarker
**Module:** SandBox.ViewModelCollection
**Type:** `public abstract class MissionNameMarkerTargetBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `SandBox.ViewModelCollection/Missions/NameMarker/MissionNameMarkerTargetBaseVM.cs`

## 概述

`MissionNameMarkerTargetBaseVM` 位于 `SandBox.ViewModelCollection.Missions.NameMarker`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `SandBox.ViewModelCollection.Missions.NameMarker` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Quests` | `public MBBindingList<QuestMarkerVM> Quests { get; set; }` |
| `ScreenPosition` | `public Vec2 ScreenPosition { get; set; }` |
| `Name` | `public string Name { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `NameType` | `public string NameType { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsTracked` | `public bool IsTracked { get; set; }` |
| `IsQuestMainStory` | `public bool IsQuestMainStory { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |
| `IsFriendly` | `public bool IsFriendly { get; set; }` |
| `IsPersistent` | `public bool IsPersistent { get; set; }` |

## 主要方法

### UpdatePosition
`public abstract void UpdatePosition(Camera missionCamera)`

**用途 / Purpose:** 更新 `position` 的状态或数据。

### Equals
`public abstract bool Equals(MissionNameMarkerTargetBaseVM other)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetEnabledState
`public void SetEnabledState(bool enabled)`

**用途 / Purpose:** 设置 `enabled state` 的值或状态。

## 使用示例

```csharp
var implementation = new CustomMissionNameMarkerTargetBaseVM();
```

## 参见

- [完整类目录](../catalog)