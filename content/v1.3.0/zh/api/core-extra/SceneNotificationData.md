---
title: "SceneNotificationData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SceneNotificationData`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** 无
**File:** `TaleWorlds.Core/SceneNotificationData.cs`

## 概述

`SceneNotificationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `SceneNotificationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var value = new SceneNotificationData();
```

## 参见

- [完整类目录](../catalog)