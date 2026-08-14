---
title: "DefaultKingdomDecisionPermissionModel"
description: "DefaultKingdomDecisionPermissionModel 的自动生成类参考。"
---
# DefaultKingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultKingdomDecisionPermissionModel : KingdomDecisionPermissionModel`
**Base:** `KingdomDecisionPermissionModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultKingdomDecisionPermissionModel.cs`

## 概述

`DefaultKingdomDecisionPermissionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultKingdomDecisionPermissionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPolicyDecisionAllowed
`public override bool IsPolicyDecisionAllowed(PolicyObject policy)`

**用途 / Purpose:** 判断当前对象是否处于 policy decision allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsWarDecisionAllowedBetweenKingdoms
`public override bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 war decision allowed between kingdoms 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public override bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 peace decision allowed between kingdoms 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsAnnexationDecisionAllowed
`public override bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**用途 / Purpose:** 判断当前对象是否处于 annexation decision allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public override bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**用途 / Purpose:** 判断当前对象是否处于 expulsion decision allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public override bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**用途 / Purpose:** 判断当前对象是否处于 king selection decision allowed 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public override bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 start alliance decision allowed between kingdoms 状态或条件。

```csharp
// 先通过子系统 API 拿到 DefaultKingdomDecisionPermissionModel 实例
DefaultKingdomDecisionPermissionModel defaultKingdomDecisionPermissionModel = ...;
var result = defaultKingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultKingdomDecisionPermissionModel>(new MyDefaultKingdomDecisionPermissionModel());
```

## 参见

- [本区域目录](../)