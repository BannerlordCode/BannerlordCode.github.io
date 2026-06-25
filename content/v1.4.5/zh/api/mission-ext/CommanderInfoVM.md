---
title: "CommanderInfoVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CommanderInfoVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# CommanderInfoVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CommanderInfoVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions/CommanderInfoVM.cs`

## 概述

`CommanderInfoVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.HUDExtensions` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AllyControlPoints` | `public MBBindingList<CapturePointVM> AllyControlPoints { get; set; }` |
| `NeutralControlPoints` | `public MBBindingList<CapturePointVM> NeutralControlPoints { get; set; }` |
| `EnemyControlPoints` | `public MBBindingList<CapturePointVM> EnemyControlPoints { get; set; }` |
| `AllyTeamColor` | `public string AllyTeamColor { get; set; }` |
| `AllyTeamColorSecondary` | `public string AllyTeamColorSecondary { get; set; }` |
| `EnemyTeamColor` | `public string EnemyTeamColor { get; set; }` |
| `EnemyTeamColorSecondary` | `public string EnemyTeamColorSecondary { get; set; }` |
| `AllyMoraleIncreaseLevel` | `public int AllyMoraleIncreaseLevel { get; set; }` |
| `EnemyMoraleIncreaseLevel` | `public int EnemyMoraleIncreaseLevel { get; set; }` |
| `AllyMoralePercentage` | `public int AllyMoralePercentage { get; set; }` |
| `EnemyMoralePercentage` | `public int EnemyMoralePercentage { get; set; }` |
| `AllyMemberCount` | `public int AllyMemberCount { get; set; }` |
| `EnemyMemberCount` | `public int EnemyMemberCount { get; set; }` |
| `PowerLevelComparer` | `public PowerLevelComparer PowerLevelComparer { get; set; }` |
| `UsePowerComparer` | `public bool UsePowerComparer { get; set; }` |
| `UseMoraleComparer` | `public bool UseMoraleComparer { get; set; }` |
| `ShowTacticalInfo` | `public bool ShowTacticalInfo { get; set; }` |
| `AreMoralesIndependent` | `public bool AreMoralesIndependent { get; set; }` |
| `ShowControlPointStatus` | `public bool ShowControlPointStatus { get; set; }` |

## 主要方法

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### UpdateWarmupDependentFlags
`public void UpdateWarmupDependentFlags(bool isInWarmup)`

**用途 / Purpose:** 更新 `warmup dependent flags` 的状态或数据。

### OnUpdateMorale
`public void OnUpdateMorale(BattleSideEnum side, float morale)`

**用途 / Purpose:** 当 `update morale` 事件触发时调用此方法。

### OnTeamChanged
`public void OnTeamChanged()`

**用途 / Purpose:** 当 `team changed` 事件触发时调用此方法。

### RefreshColors
`public void RefreshColors(string allyTeamColor, string allyTeamColorSecondary, string enemyTeamColor, string enemyTeamColorSecondary)`

**用途 / Purpose:** 刷新 `colors` 的显示或缓存。

## 使用示例

```csharp
var value = new CommanderInfoVM();
value.OnFinalize();
```

## 参见

- [完整类目录](../catalog)