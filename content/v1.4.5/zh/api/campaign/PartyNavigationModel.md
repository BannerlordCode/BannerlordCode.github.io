---
title: "PartyNavigationModel"
description: "PartyNavigationModel 的自动生成类参考。"
---
# PartyNavigationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PartyNavigationModel : MBGameModel<PartyNavigationModel>`
**Base:** `MBGameModel<PartyNavigationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyNavigationModel.cs`

## 概述

`PartyNavigationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `PartyNavigationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### CanPlayerNavigateToPosition
`public abstract bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 检查当前对象是否满足 player navigate to position 的前置条件。

```csharp
// 先通过子系统 API 拿到 PartyNavigationModel 实例
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.CanPlayerNavigateToPosition(vec2, navigationType);
```

### GetEmbarkDisembarkThresholdDistance
`public abstract float GetEmbarkDisembarkThresholdDistance()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 embark disembark threshold distance 的结果。

```csharp
// 先通过子系统 API 拿到 PartyNavigationModel 实例
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.GetEmbarkDisembarkThresholdDistance();
```

### IsTerrainTypeValidForNavigationType
`public abstract bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否处于 terrain type valid for navigation type 状态或条件。

```csharp
// 先通过子系统 API 拿到 PartyNavigationModel 实例
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.IsTerrainTypeValidForNavigationType(terrainType, navigationType);
```

### GetInvalidTerrainTypesForNavigationType
`public abstract int GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 invalid terrain types for navigation type 的结果。

```csharp
// 先通过子系统 API 拿到 PartyNavigationModel 实例
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.GetInvalidTerrainTypesForNavigationType(navigationType);
```

### HasNavalNavigationCapability
`public abstract bool HasNavalNavigationCapability(MobileParty mobileParty)`

**用途 / Purpose:** **用途 / Purpose:** 判断当前对象是否已经持有 naval navigation capability。

```csharp
// 先通过子系统 API 拿到 PartyNavigationModel 实例
PartyNavigationModel partyNavigationModel = ...;
var result = partyNavigationModel.HasNavalNavigationCapability(mobileParty);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
PartyNavigationModel instance = ...;
```

## 参见

- [本区域目录](../)