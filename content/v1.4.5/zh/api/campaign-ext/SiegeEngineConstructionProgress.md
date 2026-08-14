---
title: "SiegeEngineConstructionProgress"
description: "SiegeEngineConstructionProgress 的自动生成类参考。"
---
# SiegeEngineConstructionProgress

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeEngineConstructionProgress`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Siege/SiegeEvent.cs`

## 概述

`SiegeEngineConstructionProgress` 位于 `TaleWorlds.CampaignSystem.Siege`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Siege` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `Hitpoints` | `public float Hitpoints { get; }` |
| `Progress` | `public float Progress { get; }` |
| `RangedSiegeEngine` | `public SiegeEvent.RangedSiegeEngine RangedSiegeEngine { get; }` |
| `RedeploymentProgress` | `public float RedeploymentProgress { get; }` |
| `MaxHitPoints` | `public float MaxHitPoints { get; }` |
| `IsConstructed` | `public bool IsConstructed { get; }` |
| `IsBeingRedeployed` | `public bool IsBeingRedeployed { get; }` |

## 主要方法

### SetRedeploymentProgress
`public void SetRedeploymentProgress(float redeploymentProgress)`

**用途 / Purpose:** 为 redeployment progress 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEngineConstructionProgress 实例
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRedeploymentProgress(0);
```

### SetHitpoints
`public void SetHitpoints(float hitPoints)`

**用途 / Purpose:** 为 hitpoints 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEngineConstructionProgress 实例
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetHitpoints(0);
```

### SetProgress
`public void SetProgress(float progress)`

**用途 / Purpose:** 为 progress 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEngineConstructionProgress 实例
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetProgress(0);
```

### SetRangedSiegeEngine
`public void SetRangedSiegeEngine(SiegeEvent.RangedSiegeEngine rangedSiegeEngine)`

**用途 / Purpose:** 为 ranged siege engine 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SiegeEngineConstructionProgress 实例
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRangedSiegeEngine(rangedSiegeEngine);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SiegeEngineConstructionProgress siegeEngineConstructionProgress = ...;
siegeEngineConstructionProgress.SetRedeploymentProgress(0);
```

## 参见

- [本区域目录](../)