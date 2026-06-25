---
title: "MobilePartyAIModel"
description: "MobilePartyAIModel 的自动生成类参考。"
---
# MobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class MobilePartyAIModel : MBGameModel<MobilePartyAIModel>`
**Base:** `MBGameModel<MobilePartyAIModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/MobilePartyAIModel.cs`

## 概述

`MobilePartyAIModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `MobilePartyAIModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `AiCheckInterval` | `public abstract float AiCheckInterval { get; }` |
| `FleeToNearbyPartyRadius` | `public abstract float FleeToNearbyPartyRadius { get; }` |
| `FleeToNearbySettlementRadius` | `public abstract float FleeToNearbySettlementRadius { get; }` |
| `HideoutPatrolDistanceAsDays` | `public abstract float HideoutPatrolDistanceAsDays { get; }` |
| `FortificationPatrolDistanceAsDays` | `public abstract float FortificationPatrolDistanceAsDays { get; }` |
| `VillagePatrolDistanceAsDays` | `public abstract float VillagePatrolDistanceAsDays { get; }` |
| `SettlementDefendingNearbyPartyCheckRadius` | `public abstract float SettlementDefendingNearbyPartyCheckRadius { get; }` |
| `SettlementDefendingWaitingPositionRadius` | `public abstract float SettlementDefendingWaitingPositionRadius { get; }` |
| `NeededFoodsInDaysThresholdForMilitaryAction` | `public abstract float NeededFoodsInDaysThresholdForMilitaryAction { get; }` |

## 主要方法

### ShouldConsiderAvoiding
`public abstract bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobilePartyAIModel 实例
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### ShouldConsiderAttacking
`public abstract bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobilePartyAIModel 实例
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### GetPatrolRadius
`public abstract float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**用途 / Purpose:** 读取并返回当前对象中 「patrol radius」 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyAIModel 实例
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### ShouldPartyCheckInitiativeBehavior
`public abstract bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 MobilePartyAIModel 实例
MobilePartyAIModel mobilePartyAIModel = ...;
var result = mobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public abstract void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**用途 / Purpose:** 读取并返回当前对象中 「best initiative behavior」 的结果。

```csharp
// 先通过子系统 API 拿到 MobilePartyAIModel 实例
MobilePartyAIModel mobilePartyAIModel = ...;
mobilePartyAIModel.GetBestInitiativeBehavior(mobileParty, bestInitiativeBehavior, bestInitiativeTargetParty, bestInitiativeBehaviorScore, averageEnemyVec);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
MobilePartyAIModel instance = ...;
```

## 参见

- [本区域目录](../)