---
title: "BuildingHelper"
description: "BuildingHelper 的自动生成类参考。"
---
# BuildingHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BuildingHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BuildingHelper.cs`

## 概述

`BuildingHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BuildingHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CheckIfBuildingIsComplete
`public static void CheckIfBuildingIsComplete(Building building)`

**用途 / Purpose:** 检查「if building is complete」在当前对象中是否成立。

```csharp
// 静态调用，不需要实例
BuildingHelper.CheckIfBuildingIsComplete(building);
```

### ChangeDefaultBuilding
`public static void ChangeDefaultBuilding(Building newDefault, Town town)`

**用途 / Purpose:** 处理与 「change default building」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BuildingHelper.ChangeDefaultBuilding(newDefault, town);
```

### ChangeCurrentBuildingQueue
`public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)`

**用途 / Purpose:** 处理与 「change current building queue」 相关的逻辑。

```csharp
// 静态调用，不需要实例
BuildingHelper.ChangeCurrentBuildingQueue(buildings, town);
```

### GetProgressOfBuilding
`public static float GetProgressOfBuilding(Building building, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「progress of building」 的结果。

```csharp
// 静态调用，不需要实例
BuildingHelper.GetProgressOfBuilding(building, town);
```

### GetDaysToComplete
`public static int GetDaysToComplete(Building building, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「days to complete」 的结果。

```csharp
// 静态调用，不需要实例
BuildingHelper.GetDaysToComplete(building, town);
```

### GetTierOfBuilding
`public static int GetTierOfBuilding(BuildingType buildingType, Town town)`

**用途 / Purpose:** 读取并返回当前对象中 「tier of building」 的结果。

```csharp
// 静态调用，不需要实例
BuildingHelper.GetTierOfBuilding(buildingType, town);
```

### BoostBuildingProcessWithGold
`public static void BoostBuildingProcessWithGold(int gold, Town town)`

**用途 / Purpose:** 提升「building process with gold」的数值或强度。

```csharp
// 静态调用，不需要实例
BuildingHelper.BoostBuildingProcessWithGold(0, town);
```

## 使用示例

```csharp
BuildingHelper.Initialize();
```

## 参见

- [本区域目录](../)