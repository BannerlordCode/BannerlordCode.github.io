<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `NotificationSceneProperties`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# NotificationSceneProperties

**命名空间:** TaleWorlds.Core
**模块:** TaleWorlds.Core
**类型:** `public struct NotificationSceneProperties`
**领域:** core-extra

## 概述

`NotificationSceneProperties` 位于 `TaleWorlds.Core`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SceneID` | `public virtual string SceneID { get; }` |
| `SoundEventPath` | `public virtual string SoundEventPath { get; }` |
| `TitleText` | `public virtual TextObject TitleText { get; }` |
| `AffirmativeDescriptionText` | `public virtual TextObject AffirmativeDescriptionText { get; }` |
| `NegativeDescriptionText` | `public virtual TextObject NegativeDescriptionText { get; }` |
| `AffirmativeHintText` | `public virtual TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public virtual TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeTitleText` | `public virtual TextObject AffirmativeTitleText { get; }` |
| `NegativeTitleText` | `public virtual TextObject NegativeTitleText { get; }` |
| `AffirmativeText` | `public virtual TextObject AffirmativeText { get; }` |
| `NegativeText` | `public virtual TextObject NegativeText { get; }` |
| `IsAffirmativeOptionShown` | `public virtual bool IsAffirmativeOptionShown { get; }` |
| `IsNegativeOptionShown` | `public virtual bool IsNegativeOptionShown { get; }` |
| `PauseActiveState` | `public virtual bool PauseActiveState { get; }` |
| `RelevantContext` | `public virtual SceneNotificationData.RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual SceneNotificationData.NotificationSceneProperties SceneProperties { get; }` |

## 主要方法

### OnAffirmativeAction
`public virtual void OnAffirmativeAction()`

**用途 / Purpose:** 当 `affirmative action` 事件触发时调用此方法。

### OnNegativeAction
`public virtual void OnNegativeAction()`

**用途 / Purpose:** 当 `negative action` 事件触发时调用此方法。

### OnCloseAction
`public virtual void OnCloseAction()`

**用途 / Purpose:** 当 `close action` 事件触发时调用此方法。

### GetBanners
`public virtual Banner GetBanners()`

**用途 / Purpose:** 获取 `banners` 的当前值。

### GetSceneNotificationCharacters
`public virtual SceneNotificationData.SceneNotificationCharacter GetSceneNotificationCharacters()`

**用途 / Purpose:** 获取 `scene notification characters` 的当前值。

### GetShips
`public virtual SceneNotificationData.SceneNotificationShip GetShips()`

**用途 / Purpose:** 获取 `ships` 的当前值。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 NotificationSceneProperties 实例，再调用它的公开方法
var value = new NotificationSceneProperties();
value.OnAffirmativeAction();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-core)
