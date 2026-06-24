<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StonePileRecord`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# StonePileRecord

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public struct StonePileRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**领域:** mission-ext

## 概述

`StonePileRecord` 位于 `TaleWorlds.MountAndBlade`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

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
// 先从游戏状态中拿到一个 StonePileRecord 实例，再调用它的公开方法
var value = new StonePileRecord();
value.SetAmmo(0);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
