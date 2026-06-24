<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyBadgeProgressInformationVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeProgressInformationVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeProgressInformationVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile/MPLobbyBadgeProgressInformationVM.cs`

## 概述

`MPLobbyBadgeProgressInformationVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.Profile` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `PreviousTabInputKey` | `public InputKeyItemVM PreviousTabInputKey { get; set; }` |
| `NextTabInputKey` | `public InputKeyItemVM NextTabInputKey { get; set; }` |
| `ShownBadgeCount` | `public int ShownBadgeCount { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanIncreaseBadgeIndices` | `public bool CanIncreaseBadgeIndices { get; set; }` |
| `CanDecreaseBadgeIndices` | `public bool CanDecreaseBadgeIndices { get; set; }` |
| `ClickToCloseText` | `public string ClickToCloseText { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `BadgeGroup` | `public MPLobbyAchievementBadgeGroupVM BadgeGroup { get; set; }` |
| `AvailableBadgeIDs` | `public MBBindingList<StringPairItemVM> AvailableBadgeIDs { get; set; }` |

## 主要方法

### OpenWith
`public void OpenWith(MPLobbyAchievementBadgeGroupVM badgeGroup)`

**用途 / Purpose:** 处理 `open with` 相关逻辑。

### ExecuteClosePopup
`public void ExecuteClosePopup()`

**用途 / Purpose:** 执行 `close popup` 操作或流程。

### ExecuteIncreaseActiveBadgeIndices
`public void ExecuteIncreaseActiveBadgeIndices()`

**用途 / Purpose:** 执行 `increase active badge indices` 操作或流程。

### ExecuteDecreaseActiveBadgeIndices
`public void ExecuteDecreaseActiveBadgeIndices()`

**用途 / Purpose:** 执行 `decrease active badge indices` 操作或流程。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### SetPreviousTabInputKey
`public void SetPreviousTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `previous tab input key` 的值或状态。

### SetNextTabInputKey
`public void SetNextTabInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `next tab input key` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyBadgeProgressInformationVM();
value.OpenWith(badgeGroup);
```

## 参见

- [完整类目录](../catalog)