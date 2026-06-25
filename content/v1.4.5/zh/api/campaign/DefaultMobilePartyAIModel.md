---
title: "DefaultMobilePartyAIModel"
description: "DefaultMobilePartyAIModel 的自动生成类参考。"
---
# DefaultMobilePartyAIModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultMobilePartyAIModel : MobilePartyAIModel`
**Base:** `MobilePartyAIModel`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultMobilePartyAIModel.cs`

## 概述

`DefaultMobilePartyAIModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultMobilePartyAIModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### ShouldConsiderAttacking
`public override bool ShouldConsiderAttacking(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 调用 ShouldConsiderAttacking 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAttacking(party, targetParty);
```

### ShouldConsiderAvoiding
`public override bool ShouldConsiderAvoiding(MobileParty party, MobileParty targetParty)`

**用途 / Purpose:** 调用 ShouldConsiderAvoiding 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldConsiderAvoiding(party, targetParty);
```

### GetPatrolRadius
`public override float GetPatrolRadius(MobileParty mobileParty, CampaignVec2 patrolPoint)`

**用途 / Purpose:** 读取并返回当前对象中 patrol radius 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetPatrolRadius(mobileParty, patrolPoint);
```

### GetSettlementNearbyThreatAndAllyCheckRadius
`public override float GetSettlementNearbyThreatAndAllyCheckRadius(Settlement settlement, bool isPort)`

**用途 / Purpose:** 读取并返回当前对象中 settlement nearby threat and ally check radius 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.GetSettlementNearbyThreatAndAllyCheckRadius(settlement, false);
```

### ShouldPartyCheckInitiativeBehavior
`public override bool ShouldPartyCheckInitiativeBehavior(MobileParty mobileParty)`

**用途 / Purpose:** 调用 ShouldPartyCheckInitiativeBehavior 对应的操作。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
var result = defaultMobilePartyAIModel.ShouldPartyCheckInitiativeBehavior(mobileParty);
```

### GetBestInitiativeBehavior
`public override void GetBestInitiativeBehavior(MobileParty mobileParty, out AiBehavior bestInitiativeBehavior, out MobileParty bestInitiativeTargetParty, out float bestInitiativeBehaviorScore, out Vec2 averageEnemyVec)`

**用途 / Purpose:** 读取并返回当前对象中 best initiative behavior 的结果。

```csharp
// 先通过子系统 API 拿到 DefaultMobilePartyAIModel 实例
DefaultMobilePartyAIModel defaultMobilePartyAIModel = ...;
defaultMobilePartyAIModel.GetBestInitiativeBehavior(mobileParty, bestInitiativeBehavior, bestInitiativeTargetParty, bestInitiativeBehaviorScore, averageEnemyVec);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultMobilePartyAIModel>(new MyDefaultMobilePartyAIModel());
```

## 参见

- [本区域目录](../)