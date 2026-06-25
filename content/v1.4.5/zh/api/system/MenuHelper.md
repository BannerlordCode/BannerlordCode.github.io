---
title: "MenuHelper"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MenuHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MenuHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MenuHelper`
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## 概述

`MenuHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MenuHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetOptionProperties
`public static bool SetOptionProperties(MenuCallbackArgs args, bool canPlayerDo, bool shouldBeDisabled, TextObject disabledText)`

**用途 / Purpose:** 设置 `option properties` 的值或状态。

### SetIssueAndQuestDataForHero
`public static void SetIssueAndQuestDataForHero(MenuCallbackArgs args, Hero hero)`

**用途 / Purpose:** 设置 `issue and quest data for hero` 的值或状态。

### SetIssueAndQuestDataForLocations
`public static void SetIssueAndQuestDataForLocations(MenuCallbackArgs args, List<Location> locations)`

**用途 / Purpose:** 设置 `issue and quest data for locations` 的值或状态。

### CheckAndOpenNextLocation
`public static bool CheckAndOpenNextLocation(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `check and open next location` 相关逻辑。

### DecideMenuState
`public static void DecideMenuState()`

**用途 / Purpose:** 处理 `decide menu state` 相关逻辑。

### EncounterAttackCondition
`public static bool EncounterAttackCondition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter attack condition` 相关逻辑。

### EncounterCaptureEnemyCondition
`public static bool EncounterCaptureEnemyCondition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter capture enemy condition` 相关逻辑。

### EncounterAttackConsequence
`public static void EncounterAttackConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter attack consequence` 相关逻辑。

### CheckEnemyAttackableHonorably
`public static void CheckEnemyAttackableHonorably(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `check enemy attackable honorably` 相关逻辑。

### EncounterOrderAttackCondition
`public static bool EncounterOrderAttackCondition(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter order attack condition` 相关逻辑。

### EncounterOrderAttackConsequence
`public static void EncounterOrderAttackConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter order attack consequence` 相关逻辑。

### EncounterCaptureTheEnemyOnConsequence
`public static void EncounterCaptureTheEnemyOnConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** 处理 `encounter capture the enemy on consequence` 相关逻辑。

### EncounterLeaveConsequence
`public static void EncounterLeaveConsequence()`

**用途 / Purpose:** 处理 `encounter leave consequence` 相关逻辑。

### GetEncounterCultureBackgroundMesh
`public static string GetEncounterCultureBackgroundMesh(CultureObject encounterCulture)`

**用途 / Purpose:** 获取 `encounter culture background mesh` 的当前值。

## 使用示例

```csharp
MenuHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)