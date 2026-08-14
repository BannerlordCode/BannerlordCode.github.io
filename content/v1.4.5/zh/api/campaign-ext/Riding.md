---
title: "Riding"
description: "Riding 的自动生成类参考。"
---
# Riding

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Riding`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Riding` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `FullSpeed` | `public static PerkObject FullSpeed { get; }` |
| `NimbleSteed` | `public static PerkObject NimbleSteed { get; }` |
| `WellStraped` | `public static PerkObject WellStraped { get; }` |
| `Veterinary` | `public static PerkObject Veterinary { get; }` |
| `NomadicTraditions` | `public static PerkObject NomadicTraditions { get; }` |
| `DeeperSacks` | `public static PerkObject DeeperSacks { get; }` |
| `Sagittarius` | `public static PerkObject Sagittarius { get; }` |
| `SweepingWind` | `public static PerkObject SweepingWind { get; }` |
| `ReliefForce` | `public static PerkObject ReliefForce { get; }` |
| `MountedWarrior` | `public static PerkObject MountedWarrior { get; }` |
| `HorseArcher` | `public static PerkObject HorseArcher { get; }` |
| `Shepherd` | `public static PerkObject Shepherd { get; }` |
| `Breeder` | `public static PerkObject Breeder { get; }` |
| `ThunderousCharge` | `public static PerkObject ThunderousCharge { get; }` |
| `AnnoyingBuzz` | `public static PerkObject AnnoyingBuzz { get; }` |
| `MountedPatrols` | `public static PerkObject MountedPatrols { get; }` |
| `CavalryTactics` | `public static PerkObject CavalryTactics { get; }` |
| `DauntlessSteed` | `public static PerkObject DauntlessSteed { get; }` |
| `ToughSteed` | `public static PerkObject ToughSteed { get; }` |
| `TheWayOfTheSaddle` | `public static PerkObject TheWayOfTheSaddle { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
Riding instance = ...;
```

## 参见

- [本区域目录](../)