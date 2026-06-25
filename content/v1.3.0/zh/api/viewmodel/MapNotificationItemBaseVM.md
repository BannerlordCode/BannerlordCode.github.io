---
title: "MapNotificationItemBaseVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MapNotificationItemBaseVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MapNotificationItemBaseVM

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MapNotificationItemBaseVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/Map/MapNotificationTypes/MapNotificationItemBaseVM.cs`

## 概述

`MapNotificationItemBaseVM` 位于 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NavigationHandler` | `public INavigationHandler NavigationHandler { get; }` |
| `Data` | `public InformationData Data { get; }` |
| `RemoveInputKey` | `public InputKeyItemVM RemoveInputKey { get; set; }` |
| `IsFocused` | `public bool IsFocused { get; set; }` |
| `NotificationIdentifier` | `public string NotificationIdentifier { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `ForceInspection` | `public bool ForceInspection { get; set; }` |
| `DescriptionText` | `public string DescriptionText { get; set; }` |
| `SoundId` | `public string SoundId { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### SetNavigationHandler
`public void SetNavigationHandler(INavigationHandler navigationHandler)`

**用途 / Purpose:** 设置 `navigation handler` 的值或状态。

### SetFastMoveCameraToPosition
`public void SetFastMoveCameraToPosition(Action<CampaignVec2> fastMoveCameraToPosition)`

**用途 / Purpose:** 设置 `fast move camera to position` 的值或状态。

### ExecuteAction
`public void ExecuteAction()`

**用途 / Purpose:** 执行 `action` 操作或流程。

### ExecuteRemove
`public void ExecuteRemove()`

**用途 / Purpose:** 执行 `remove` 操作或流程。

### ExecuteSetFocused
`public void ExecuteSetFocused()`

**用途 / Purpose:** 执行 `set focused` 操作或流程。

### ExecuteSetUnfocused
`public void ExecuteSetUnfocused()`

**用途 / Purpose:** 执行 `set unfocused` 操作或流程。

### ManualRefreshRelevantStatus
`public virtual void ManualRefreshRelevantStatus()`

**用途 / Purpose:** 处理 `manual refresh relevant status` 相关逻辑。

### SetRemoveInputKey
`public void SetRemoveInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `remove input key` 的值或状态。

## 使用示例

```csharp
var value = new MapNotificationItemBaseVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)