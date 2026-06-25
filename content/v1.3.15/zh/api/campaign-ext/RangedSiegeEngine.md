---
title: "RangedSiegeEngine"
description: "RangedSiegeEngine 的自动生成类参考。"
---
# RangedSiegeEngine

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class RangedSiegeEngine`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## 概述

`RangedSiegeEngine` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NextTimeEngineCanBombard` | `public CampaignTime NextTimeEngineCanBombard { get; }` |
| `AlreadyFired` | `public bool AlreadyFired { get; }` |
| `CurrentTargetType` | `public SiegeBombardTargets CurrentTargetType { get; }` |
| `CurrentTargetIndex` | `public int CurrentTargetIndex { get; }` |
| `PreviousDamagedTargetType` | `public SiegeBombardTargets PreviousDamagedTargetType { get; }` |
| `PreviousTargetIndex` | `public int PreviousTargetIndex { get; }` |
| `LastBombardTime` | `public CampaignTime LastBombardTime { get; }` |
| `NextProjectileCollisionTime` | `public CampaignTime NextProjectileCollisionTime { get; }` |
| `IsReadyToFire` | `public bool IsReadyToFire { get; }` |

## 主要方法

### Hold
`public void Hold()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Hold 对应的操作。

```csharp
// 先通过子系统 API 拿到 RangedSiegeEngine 实例
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Hold();
```

### Reload
`public void Reload()`

**用途 / Purpose:** **用途 / Purpose:** 调用 Reload 对应的操作。

```csharp
// 先通过子系统 API 拿到 RangedSiegeEngine 实例
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Reload();
```

### OnFireDecisionTaken
`public void OnFireDecisionTaken(SiegeEvent siegeEvent, BattleSideEnum battleSide, int targetSlotIndex, SiegeBombardTargets targetType)`

**用途 / Purpose:** **用途 / Purpose:** 在 fire decision taken 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 RangedSiegeEngine 实例
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.OnFireDecisionTaken(siegeEvent, battleSide, 0, targetType);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
RangedSiegeEngine rangedSiegeEngine = ...;
rangedSiegeEngine.Hold();
```

## 参见

- [本区域目录](../)