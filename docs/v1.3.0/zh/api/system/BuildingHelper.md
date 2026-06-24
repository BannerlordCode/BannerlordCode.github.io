<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BuildingHelper`
- [← 本领域 / 返回 system](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
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

**用途 / Purpose:** 处理 `check if building is complete` 相关逻辑。

### ChangeDefaultBuilding
`public static void ChangeDefaultBuilding(Building newDefault, Town town)`

**用途 / Purpose:** 处理 `change default building` 相关逻辑。

### ChangeCurrentBuildingQueue
`public static void ChangeCurrentBuildingQueue(List<Building> buildings, Town town)`

**用途 / Purpose:** 处理 `change current building queue` 相关逻辑。

### GetProgressOfBuilding
`public static float GetProgressOfBuilding(Building building, Town town)`

**用途 / Purpose:** 获取 `progress of building` 的当前值。

### GetDaysToComplete
`public static int GetDaysToComplete(Building building, Town town)`

**用途 / Purpose:** 获取 `days to complete` 的当前值。

### GetTierOfBuilding
`public static int GetTierOfBuilding(BuildingType buildingType, Town town)`

**用途 / Purpose:** 获取 `tier of building` 的当前值。

### BoostBuildingProcessWithGold
`public static void BoostBuildingProcessWithGold(int gold, Town town)`

**用途 / Purpose:** 处理 `boost building process with gold` 相关逻辑。

## 使用示例

```csharp
BuildingHelper.Initialize();
```

## 参见

- [完整类目录](../catalog)