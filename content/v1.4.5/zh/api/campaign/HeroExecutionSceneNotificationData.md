---
title: "HeroExecutionSceneNotificationData"
description: "HeroExecutionSceneNotificationData 的自动生成类参考。"
---
# HeroExecutionSceneNotificationData

**Namespace:** TaleWorlds.CampaignSystem.SceneInformationPopupTypes
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroExecutionSceneNotificationData : SceneNotificationData`
**Base:** `SceneNotificationData`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SceneInformationPopupTypes/HeroExecutionSceneNotificationData.cs`

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

**用途 / Purpose:** 读取并返回当前对象中 「scene notification characters」 的结果。

```csharp
// 先通过子系统 API 拿到 HeroExecutionSceneNotificationData 实例
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
var result = heroExecutionSceneNotificationData.GetSceneNotificationCharacters();
```

### OnCloseAction
`public override void OnCloseAction()`

**用途 / Purpose:** 在 「close action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroExecutionSceneNotificationData 实例
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
heroExecutionSceneNotificationData.OnCloseAction();
```

### OnAffirmativeAction
`public override void OnAffirmativeAction()`

**用途 / Purpose:** 在 「affirmative action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 HeroExecutionSceneNotificationData 实例
HeroExecutionSceneNotificationData heroExecutionSceneNotificationData = ...;
heroExecutionSceneNotificationData.OnAffirmativeAction();
```

### CreateForPlayerExecutingHero
`public static HeroExecutionSceneNotificationData CreateForPlayerExecutingHero(Hero dyingHero, Action onAffirmativeAction, RelevantContextType relevantContextType = RelevantContextType.Any, bool showNegativeOption = true)`

**用途 / Purpose:** 构建一个新的 「for player executing hero」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroExecutionSceneNotificationData.CreateForPlayerExecutingHero(dyingHero, onAffirmativeAction, relevantContextType.Any, false);
```

### CreateForInformingPlayer
`public static HeroExecutionSceneNotificationData CreateForInformingPlayer(Hero executingHero, Hero dyingHero, RelevantContextType relevantContextType = RelevantContextType.Any, Action onClose = null)`

**用途 / Purpose:** 构建一个新的 「for informing player」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
HeroExecutionSceneNotificationData.CreateForInformingPlayer(executingHero, dyingHero, relevantContextType.Any, null);
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
HeroExecutionSceneNotificationData entry = ...;
```

## 参见

- [本区域目录](../)