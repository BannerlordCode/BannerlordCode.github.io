---
title: "HeroExecutionSceneNotificationData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HeroExecutionSceneNotificationData`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

## 概述

`HeroExecutionSceneNotificationData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `HeroExecutionSceneNotificationData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `Executer` | `public Hero Executer { get; }` |
| `Victim` | `public Hero Victim { get; }` |
| `IsNegativeOptionShown` | `public override bool IsNegativeOptionShown { get; }` |
| `TitleText` | `public override TextObject TitleText { get; }` |
| `AffirmativeText` | `public override TextObject AffirmativeText { get; }` |
| `AffirmativeTitleText` | `public override TextObject AffirmativeTitleText { get; }` |
| `AffirmativeHintText` | `public override TextObject AffirmativeHintText { get; }` |
| `AffirmativeHintTextExtended` | `public override TextObject AffirmativeHintTextExtended { get; }` |
| `AffirmativeDescriptionText` | `public override TextObject AffirmativeDescriptionText { get; }` |
| `RelevantContext` | `public override RelevantContextType RelevantContext { get; }` |

## 主要方法

### GetSceneNotificationCharacters
`public override SceneNotificationCharacter GetSceneNotificationCharacters()`

**用途 / Purpose:** 获取 `scene notification characters` 的当前值。

### OnCloseAction
`public override void OnCloseAction()`

**用途 / Purpose:** 当 `close action` 事件触发时调用此方法。

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

**用途 / Purpose:** 当 `affirmative action` 事件触发时调用此方法。

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, RelevantContextType relevantContextType = RelevantContextType.Any, bool showNegativeOption = true)`

**用途 / Purpose:** 创建一个 `for player executing hero` 实例或对象。

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, RelevantContextType relevantContextType = RelevantContextType.Any, Action onClose = null)`

**用途 / Purpose:** 创建一个 `for informing player` 实例或对象。

## 使用示例

```csharp
var value = new HeroExecutionSceneNotificationData();
```

## 参见

- [完整类目录](../catalog)