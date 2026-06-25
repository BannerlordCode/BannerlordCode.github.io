---
title: "Bow"
description: "Bow 的自动生成类参考。"
---
# Bow

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Bow`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Bow` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `BowControl` | `public static PerkObject BowControl { get; }` |
| `DeadAim` | `public static PerkObject DeadAim { get; }` |
| `Bodkin` | `public static PerkObject Bodkin { get; }` |
| `RangersSwiftness` | `public static PerkObject RangersSwiftness { get; }` |
| `RapidFire` | `public static PerkObject RapidFire { get; }` |
| `QuickAdjustments` | `public static PerkObject QuickAdjustments { get; }` |
| `MerryMen` | `public static PerkObject MerryMen { get; }` |
| `MountedArchery` | `public static PerkObject MountedArchery { get; }` |
| `Trainer` | `public static PerkObject Trainer { get; }` |
| `StrongBows` | `public static PerkObject StrongBows { get; }` |
| `Discipline` | `public static PerkObject Discipline { get; }` |
| `HunterClan` | `public static PerkObject HunterClan { get; }` |
| `SkirmishPhaseMaster` | `public static PerkObject SkirmishPhaseMaster { get; }` |
| `EagleEye` | `public static PerkObject EagleEye { get; }` |
| `BullsEye` | `public static PerkObject BullsEye { get; }` |
| `RenownedArcher` | `public static PerkObject RenownedArcher { get; }` |
| `HorseMaster` | `public static PerkObject HorseMaster { get; }` |
| `DeepQuivers` | `public static PerkObject DeepQuivers { get; }` |
| `QuickDraw` | `public static PerkObject QuickDraw { get; }` |
| `NockingPoint` | `public static PerkObject NockingPoint { get; }` |
| `Deadshot` | `public static PerkObject Deadshot { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
Bow instance = ...;
```

## 参见

- [本区域目录](../)