<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyBadgeItemVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyBadgeItemVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyBadgeItemVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyBadgeItemVM.cs`

## 概述

`MPLobbyBadgeItemVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Badge` | `public Badge Badge { get; }` |
| `Name` | `public string Name { get; set; }` |
| `Description` | `public string Description { get; set; }` |
| `BadgeConditionsText` | `public string BadgeConditionsText { get; set; }` |
| `Conditions` | `public MBBindingList<StringPairItemVM> Conditions { get; set; }` |
| `BadgeId` | `public string BadgeId { get; set; }` |
| `IsEarned` | `public bool IsEarned { get; set; }` |
| `IsSelected` | `public bool IsSelected { get; set; }` |
| `HasNotification` | `public bool HasNotification { get; set; }` |
| `IsBeingChanged` | `public bool IsBeingChanged { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `InspectProgressKey` | `public InputKeyItemVM InspectProgressKey { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RefreshKeyBindings
`public void RefreshKeyBindings(HotKey inspectProgressKey)`

**用途 / Purpose:** 刷新 `key bindings` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### UpdateWith
`public void UpdateWith(Badge badge)`

**用途 / Purpose:** 更新 `with` 的状态或数据。

### UpdateIsSelected
`public void UpdateIsSelected()`

**用途 / Purpose:** 更新 `is selected` 的状态或数据。

### SetGroup
`public void SetGroup(MPLobbyAchievementBadgeGroupVM group, Action<MPLobbyAchievementBadgeGroupVM> onBadgeProgressInfoRequested)`

**用途 / Purpose:** 设置 `group` 的值或状态。

## 使用示例

```csharp
var value = new MPLobbyBadgeItemVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)