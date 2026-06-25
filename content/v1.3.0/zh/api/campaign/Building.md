---
title: "Building"
description: "Building 的自动生成类参考。"
---
# Building

**Namespace:** TaleWorlds.CampaignSystem.Settlements.Buildings
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Building`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/Buildings/Building.cs`

## 概述

`Building` 位于 `TaleWorlds.CampaignSystem.Settlements.Buildings`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements.Buildings` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Explanation` | `public TextObject Explanation { get; }` |
| `BuildingType` | `public BuildingType BuildingType { get; }` |
| `Town` | `public Town Town { get; }` |
| `CurrentLevel` | `public int CurrentLevel { get; set; }` |

## 主要方法

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
var result = building.GetHashCode();
```

### GetConstructionCost
`public int GetConstructionCost()`

**用途 / Purpose:** 读取并返回当前对象中 「construction cost」 的结果。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
var result = building.GetConstructionCost();
```

### LevelUp
`public void LevelUp()`

**用途 / Purpose:** 处理与 「level up」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
building.LevelUp();
```

### LevelDown
`public void LevelDown()`

**用途 / Purpose:** 处理与 「level down」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
building.LevelDown();
```

### HitPointChanged
`public void HitPointChanged(float change)`

**用途 / Purpose:** 响应 「hit point changed」 事件并执行相关处理。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
building.HitPointChanged(0);
```

### AddEffectOfBuilding
`public void AddEffectOfBuilding(BuildingEffectEnum buildingEffect, ref ExplainedNumber result)`

**用途 / Purpose:** 将 「effect of building」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
building.AddEffectOfBuilding(buildingEffect, result);
```

### GetBonusExplanation
`public TextObject GetBonusExplanation()`

**用途 / Purpose:** 读取并返回当前对象中 「bonus explanation」 的结果。

```csharp
// 先通过子系统 API 拿到 Building 实例
Building building = ...;
var result = building.GetBonusExplanation();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Building building = ...;
building.GetHashCode();
```

## 参见

- [本区域目录](../)