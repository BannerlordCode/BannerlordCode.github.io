<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyBadgeSelectionPopupVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeSelectionPopupVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeSelectionPopupVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeSelectionPopupVM.cs`

## 概述

`MPLobbyBadgeSelectionPopupVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveNotifications` | `public List<LobbyNotification> ActiveNotifications { get; }` |
| `CancelInputKey` | `public InputKeyItemVM CancelInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasNotifications` | `public bool HasNotifications { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `BadgesText` | `public string BadgesText { get; set; }` |
| `SpecialBadgesText` | `public string SpecialBadgesText { get; set; }` |
| `AchievementBadgesText` | `public string AchievementBadgesText { get; set; }` |
| `Badges` | `public MBBindingList<MPLobbyBadgeItemVM> Badges { get; set; }` |
| `AchivementBadgeGroups` | `public MBBindingList<MPLobbyAchievementBadgeGroupVM> AchivementBadgeGroups { get; set; }` |
| `InspectedBadge` | `public MPLobbyBadgeItemVM InspectedBadge { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**用途 / Purpose:** 刷新 `key bindings` 的显示或缓存。

### UpdateBadges
`public async void UpdateBadges(bool shouldClear = false)`

**用途 / Purpose:** 更新 `badges` 的状态或数据。

### UpdateBadgeSelection
`public void UpdateBadgeSelection()`

**用途 / Purpose:** 更新 `badge selection` 的状态或数据。

### OnNotificationReceived
`public void OnNotificationReceived(LobbyNotification notification)`

**用途 / Purpose:** 当 `notification received` 事件触发时调用此方法。

### OnBadgeInspected
`public void OnBadgeInspected(MPLobbyBadgeItemVM badge)`

**用途 / Purpose:** 当 `badge inspected` 事件触发时调用此方法。

### Open
`public void Open()`

**用途 / Purpose:** 处理 `open` 相关逻辑。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetCancelInputKey
`public void SetCancelInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `cancel input key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyBadgeSelectionPopupVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)