---
title: "MenuHelper"
description: "MenuHelper 的自动生成类参考。"
---
# MenuHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class MenuHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/MenuHelper.cs`

## 概述

`MenuHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `MenuHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### SetOptionProperties
`public static bool SetOptionProperties(MenuCallbackArgs args, bool canPlayerDo, bool shouldBeDisabled, TextObject disabledText)`

**用途 / Purpose:** **用途 / Purpose:** 为 option properties 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MenuHelper.SetOptionProperties(args, false, false, disabledText);
```

### SetIssueAndQuestDataForHero
`public static void SetIssueAndQuestDataForHero(MenuCallbackArgs args, Hero hero)`

**用途 / Purpose:** **用途 / Purpose:** 为 issue and quest data for hero 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MenuHelper.SetIssueAndQuestDataForHero(args, hero);
```

### SetIssueAndQuestDataForLocations
`public static void SetIssueAndQuestDataForLocations(MenuCallbackArgs args, List<Location> locations)`

**用途 / Purpose:** **用途 / Purpose:** 为 issue and quest data for locations 赋新值，并同步更新对象内部状态。

```csharp
// 静态调用，不需要实例
MenuHelper.SetIssueAndQuestDataForLocations(args, locations);
```

### CheckAndOpenNextLocation
`public static bool CheckAndOpenNextLocation(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 检查and open next location在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MenuHelper.CheckAndOpenNextLocation(args);
```

### DecideMenuState
`public static void DecideMenuState()`

**用途 / Purpose:** **用途 / Purpose:** 调用 DecideMenuState 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.DecideMenuState();
```

### EncounterAttackCondition
`public static bool EncounterAttackCondition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterAttackCondition 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterAttackCondition(args);
```

### EncounterCaptureEnemyCondition
`public static bool EncounterCaptureEnemyCondition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterCaptureEnemyCondition 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterCaptureEnemyCondition(args);
```

### EncounterAttackConsequence
`public static void EncounterAttackConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterAttackConsequence 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterAttackConsequence(args);
```

### CheckEnemyAttackableHonorably
`public static void CheckEnemyAttackableHonorably(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 检查enemy attackable honorably在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
MenuHelper.CheckEnemyAttackableHonorably(args);
```

### EncounterOrderAttackCondition
`public static bool EncounterOrderAttackCondition(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterOrderAttackCondition 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterOrderAttackCondition(args);
```

### EncounterOrderAttackConsequence
`public static void EncounterOrderAttackConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterOrderAttackConsequence 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterOrderAttackConsequence(args);
```

### EncounterCaptureTheEnemyOnConsequence
`public static void EncounterCaptureTheEnemyOnConsequence(MenuCallbackArgs args)`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterCaptureTheEnemyOnConsequence 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterCaptureTheEnemyOnConsequence(args);
```

### EncounterLeaveConsequence
`public static void EncounterLeaveConsequence()`

**用途 / Purpose:** **用途 / Purpose:** 调用 EncounterLeaveConsequence 对应的操作。

```csharp
// 静态调用，不需要实例
MenuHelper.EncounterLeaveConsequence();
```

### GetEncounterCultureBackgroundMesh
`public static string GetEncounterCultureBackgroundMesh(CultureObject encounterCulture)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 encounter culture background mesh 的结果。

```csharp
// 静态调用，不需要实例
MenuHelper.GetEncounterCultureBackgroundMesh(encounterCulture);
```

## 使用示例

```csharp
MenuHelper.Initialize();
```

## 参见

- [本区域目录](../)