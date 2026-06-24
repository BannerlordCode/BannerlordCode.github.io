<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationVM.cs`

## 概述

`MapNotificationVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `FocusedNotificationItem` | `public MapNotificationItemBaseVM FocusedNotificationItem { get; set; }` |
| `NotificationItems` | `public MBBindingList<MapNotificationItemBaseVM> NotificationItems { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### RegisterMapNotificationType
`public void RegisterMapNotificationType(Type data, Type item)`

**用途 / Purpose:** 处理 `register map notification type` 相关逻辑。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnFrameTick
`public void OnFrameTick(float dt)`

**用途 / Purpose:** 当 `frame tick` 事件触发时调用此方法。

### OnMenuModeTick
`public void OnMenuModeTick(float dt)`

**用途 / Purpose:** 当 `menu mode tick` 事件触发时调用此方法。

### AddMapNotification
`public void AddMapNotification(InformationData data)`

**用途 / Purpose:** 向当前集合/状态中添加 `map notification`。

### RemoveAllNotifications
`public void RemoveAllNotifications()`

**用途 / Purpose:** 从当前集合/状态中移除 `all notifications`。

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `remove input key` 的值或状态。

## 使用示例

```csharp
var value = new MapNotificationVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)