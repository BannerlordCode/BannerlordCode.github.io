---
title: "TwoHanded"
description: "TwoHanded 的自动生成类参考。"
---
# TwoHanded

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TwoHanded`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`TwoHanded` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `StrongGrip` | `public static PerkObject StrongGrip { get; }` |
| `WoodChopper` | `public static PerkObject WoodChopper { get; }` |
| `OnTheEdge` | `public static PerkObject OnTheEdge { get; }` |
| `HeadBasher` | `public static PerkObject HeadBasher { get; }` |
| `ShowOfStrength` | `public static PerkObject ShowOfStrength { get; }` |
| `BaptisedInBlood` | `public static PerkObject BaptisedInBlood { get; }` |
| `BeastSlayer` | `public static PerkObject BeastSlayer { get; }` |
| `ShieldBreaker` | `public static PerkObject ShieldBreaker { get; }` |
| `Confidence` | `public static PerkObject Confidence { get; }` |
| `Berserker` | `public static PerkObject Berserker { get; }` |
| `ProjectileDeflection` | `public static PerkObject ProjectileDeflection { get; }` |
| `Terror` | `public static PerkObject Terror { get; }` |
| `Hope` | `public static PerkObject Hope { get; }` |
| `RecklessCharge` | `public static PerkObject RecklessCharge { get; }` |
| `ThickHides` | `public static PerkObject ThickHides { get; }` |
| `BladeMaster` | `public static PerkObject BladeMaster { get; }` |
| `Vandal` | `public static PerkObject Vandal { get; }` |
| `WayOfTheGreatAxe` | `public static PerkObject WayOfTheGreatAxe { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
TwoHanded instance = ...;
```

## 参见

- [本区域目录](../)