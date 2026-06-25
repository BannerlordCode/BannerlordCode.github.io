---
title: "ExecutionRelationModel"
description: "ExecutionRelationModel 的自动生成类参考。"
---
# ExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ExecutionRelationModel : MBGameModel<ExecutionRelationModel>`
**Base:** `MBGameModel<ExecutionRelationModel>`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ExecutionRelationModel.cs`

## 概述

`ExecutionRelationModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `ExecutionRelationModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `HeroKillingHeroClanRelationPenalty` | `public abstract int HeroKillingHeroClanRelationPenalty { get; }` |
| `HeroKillingHeroFriendRelationPenalty` | `public abstract int HeroKillingHeroFriendRelationPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFactionRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroClanRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFriendRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroHonorPenalty` | `public abstract int PlayerExecutingHeroHonorPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenalty` | `public abstract int PlayerExecutingHeroFactionRelationPenalty { get; }` |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public abstract int PlayerExecutingHeroHonorableNobleRelationPenalty { get; }` |
| `PlayerExecutingHeroClanRelationPenalty` | `public abstract int PlayerExecutingHeroClanRelationPenalty { get; }` |
| `PlayerExecutingHeroFriendRelationPenalty` | `public abstract int PlayerExecutingHeroFriendRelationPenalty { get; }` |

## 主要方法

### GetRelationChangeForExecutingHero
`public abstract int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**用途 / Purpose:** 读取并返回当前对象中 relation change for executing hero 的结果。

```csharp
// 先通过子系统 API 拿到 ExecutionRelationModel 实例
ExecutionRelationModel executionRelationModel = ...;
var result = executionRelationModel.GetRelationChangeForExecutingHero(victim, hero, showQuickNotification);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
ExecutionRelationModel instance = ...;
```

## 参见

- [本区域目录](../)