---
title: "StonePile"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StonePile`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine, IDetachment`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/StonePile.cs`

## 概述

`StonePile` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed { get; }` |
| `Side` | `public virtual BattleSideEnum Side { get; }` |
| `MaxUserCount` | `public override int MaxUserCount { get; }` |
| `ReadAmmoCount` | `public int ReadAmmoCount { get; }` |
| `this` | `public StonePile.ThrowingPoint this { get; }` |

## 主要方法

### SetAmmo
`public void SetAmmo(int ammoLeft)`

**用途 / Purpose:** 设置 `ammo` 的值或状态。

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 处理 `after mission start` 相关逻辑。

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 获取 `action text for standing point` 的当前值。

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 获取 `description text` 的当前值。

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 创建一个 `a i behavior object` 实例或对象。

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** 处理 `is in range to check alternative points` 相关逻辑。

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** 获取 `best point alternative to` 的当前值。

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 获取 `tick requirement` 的当前值。

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 处理 `write to network` 相关逻辑。

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 处理 `read from network` 相关逻辑。

### CanUseAttackEntity
`public bool CanUseAttackEntity()`

**用途 / Purpose:** 判断当前对象是否可以执行 `use attack entity`。

## 使用示例

```csharp
var value = new StonePile();
value.SetAmmo(0);
```

## 参见

- [完整类目录](../catalog)