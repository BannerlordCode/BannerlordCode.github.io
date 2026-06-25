---
title: "MPOnSpawnPerkEffectBase"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPOnSpawnPerkEffectBase`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPOnSpawnPerkEffectBase

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPOnSpawnPerkEffectBase : MPPerkEffectBase, IOnSpawnPerkEffect`
**Base:** `MPPerkEffectBase`
**File:** `TaleWorlds.MountAndBlade/MPOnSpawnPerkEffectBase.cs`

## 概述

`MPOnSpawnPerkEffectBase` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### GetTroopCountMultiplier
`public virtual float GetTroopCountMultiplier()`

**用途 / Purpose:** 获取 `troop count multiplier` 的当前值。

### GetExtraTroopCount
`public virtual int GetExtraTroopCount()`

**用途 / Purpose:** 获取 `extra troop count` 的当前值。

### GetAlternativeEquipments
`public virtual List<ValueTuple<EquipmentIndex, EquipmentElement>> GetAlternativeEquipments(bool isPlayer, List<ValueTuple<EquipmentIndex, EquipmentElement>> alternativeEquipments, bool getAll = false)`

**用途 / Purpose:** 获取 `alternative equipments` 的当前值。

### GetDrivenPropertyBonusOnSpawn
`public virtual float GetDrivenPropertyBonusOnSpawn(bool isPlayer, DrivenProperty drivenProperty, float baseValue)`

**用途 / Purpose:** 获取 `driven property bonus on spawn` 的当前值。

### GetHitpoints
`public virtual float GetHitpoints(bool isPlayer)`

**用途 / Purpose:** 获取 `hitpoints` 的当前值。

## 使用示例

```csharp
var implementation = new CustomMPOnSpawnPerkEffectBase();
```

## 参见

- [完整类目录](../catalog)