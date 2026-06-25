---
title: "KingdomDecisionPermissionModel"
description: "KingdomDecisionPermissionModel 的自动生成类参考。"
---
# KingdomDecisionPermissionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class KingdomDecisionPermissionModel : MBGameModel<KingdomDecisionPermissionModel>`
**Base:** `MBGameModel<KingdomDecisionPermissionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/KingdomDecisionPermissionModel.cs`

## 概述

`KingdomDecisionPermissionModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `KingdomDecisionPermissionModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### IsPolicyDecisionAllowed
`public abstract bool IsPolicyDecisionAllowed(PolicyObject policy)`

**用途 / Purpose:** 判断当前对象是否处于 「policy decision allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsPolicyDecisionAllowed(policy);
```

### IsWarDecisionAllowedBetweenKingdoms
`public abstract bool IsWarDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 「war decision allowed between kingdoms」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsWarDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsPeaceDecisionAllowedBetweenKingdoms
`public abstract bool IsPeaceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 「peace decision allowed between kingdoms」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsPeaceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsStartAllianceDecisionAllowedBetweenKingdoms
`public abstract bool IsStartAllianceDecisionAllowedBetweenKingdoms(Kingdom kingdom1, Kingdom kingdom2, out TextObject reason)`

**用途 / Purpose:** 判断当前对象是否处于 「start alliance decision allowed between kingdoms」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsStartAllianceDecisionAllowedBetweenKingdoms(kingdom1, kingdom2, reason);
```

### IsAnnexationDecisionAllowed
`public abstract bool IsAnnexationDecisionAllowed(Settlement annexedSettlement)`

**用途 / Purpose:** 判断当前对象是否处于 「annexation decision allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsAnnexationDecisionAllowed(annexedSettlement);
```

### IsExpulsionDecisionAllowed
`public abstract bool IsExpulsionDecisionAllowed(Clan expelledClan)`

**用途 / Purpose:** 判断当前对象是否处于 「expulsion decision allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsExpulsionDecisionAllowed(expelledClan);
```

### IsKingSelectionDecisionAllowed
`public abstract bool IsKingSelectionDecisionAllowed(Kingdom kingdom)`

**用途 / Purpose:** 判断当前对象是否处于 「king selection decision allowed」 状态或条件。

```csharp
// 先通过子系统 API 拿到 KingdomDecisionPermissionModel 实例
KingdomDecisionPermissionModel kingdomDecisionPermissionModel = ...;
var result = kingdomDecisionPermissionModel.IsKingSelectionDecisionAllowed(kingdom);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
KingdomDecisionPermissionModel instance = ...;
```

## 参见

- [本区域目录](../)