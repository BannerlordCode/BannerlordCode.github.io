---
title: "SceneNotificationData"
description: "SceneNotificationData 的自动生成类参考。"
---
# SceneNotificationData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class SceneNotificationData`
**Base:** 无
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/SceneNotificationData.cs`

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
| `RelevantContext` | `public virtual RelevantContextType RelevantContext { get; }` |
| `SceneProperties` | `public virtual NotificationSceneProperties SceneProperties { get; }` |

## 主要方法

### SceneNotificationCharacter
`public readonly struct SceneNotificationCharacter(BasicCharacterObject character, Equipment overriddenEquipment = null, BodyProperties overriddenBodyProperties = default(BodyProperties), bool useCivilianEquipment = false, uint customColor1 = uint.MaxValue, uint customColor2 = uint.MaxValue, bool useHorse = false)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.SceneNotificationCharacter(character, null, default(BodyProperties), false, 0, 0, false);
```

### SceneNotificationShip
`public readonly struct SceneNotificationShip(string shipPrefabId, List<ShipVisualSlotInfo> shipUpgrades, float shipHitPointRatio, uint sailColor1, uint sailColor2, int shipSeed)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.SceneNotificationShip("example", shipUpgrades, 0, 0, 0, 0);
```

### OnAffirmativeAction
`public virtual void OnAffirmativeAction()`

**用途 / Purpose:** 在 「affirmative action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnAffirmativeAction();
```

### OnNegativeAction
`public virtual void OnNegativeAction()`

**用途 / Purpose:** 在 「negative action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnNegativeAction();
```

### OnCloseAction
`public virtual void OnCloseAction()`

**用途 / Purpose:** 在 「close action」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
sceneNotificationData.OnCloseAction();
```

### GetBanners
`public virtual Banner GetBanners()`

**用途 / Purpose:** 读取并返回当前对象中 「banners」 的结果。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetBanners();
```

### GetSceneNotificationCharacters
`public virtual SceneNotificationCharacter GetSceneNotificationCharacters()`

**用途 / Purpose:** 读取并返回当前对象中 「scene notification characters」 的结果。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetSceneNotificationCharacters();
```

### GetShips
`public virtual SceneNotificationShip GetShips()`

**用途 / Purpose:** 读取并返回当前对象中 「ships」 的结果。

```csharp
// 先通过子系统 API 拿到 SceneNotificationData 实例
SceneNotificationData sceneNotificationData = ...;
var result = sceneNotificationData.GetShips();
```

## 使用示例

```csharp
// 该数据对象通常由战役/任务 API 返回
SceneNotificationData entry = ...;
```

## 参见

- [本区域目录](../)