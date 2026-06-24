<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyAchievementBadgeGroupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyAchievementBadgeGroupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyAchievementBadgeGroupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyAchievementBadgeGroupVM.cs`

## 概述

`MPLobbyAchievementBadgeGroupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsProgressComplete` | `public bool IsProgressComplete { get; set; }` |
| `ProgressCompletedText` | `public string ProgressCompletedText { get; set; }` |
| `CurrentProgress` | `public int CurrentProgress { get; set; }` |
| `TotalProgress` | `public int TotalProgress { get; set; }` |
| `ShownBadgeItem` | `public MPLobbyBadgeItemVM ShownBadgeItem { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**用途 / Purpose:** 刷新 `key bindings` 的显示或缓存。

### OnGroupBadgeAdded
`public void OnGroupBadgeAdded(MPLobbyBadgeItemVM badgeItem)`

**用途 / Purpose:** 当 `group badge added` 事件触发时调用此方法。

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**用途 / Purpose:** 更新 `badge selection` 的状态或数据。

## 使用示例

```csharp
var value = new MPLobbyAchievementBadgeGroupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)