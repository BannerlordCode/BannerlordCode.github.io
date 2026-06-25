---
title: "Steward"
description: "Steward 的自动生成类参考。"
---
# Steward

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Steward`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Steward` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `WarriorsDiet` | `public static PerkObject WarriorsDiet { get; }` |
| `Frugal` | `public static PerkObject Frugal { get; }` |
| `SevenVeterans` | `public static PerkObject SevenVeterans { get; }` |
| `DrillSergant` | `public static PerkObject DrillSergant { get; }` |
| `Sweatshops` | `public static PerkObject Sweatshops { get; }` |
| `StiffUpperLip` | `public static PerkObject StiffUpperLip { get; }` |
| `PaidInPromise` | `public static PerkObject PaidInPromise { get; }` |
| `EfficientCampaigner` | `public static PerkObject EfficientCampaigner { get; }` |
| `GivingHands` | `public static PerkObject GivingHands { get; }` |
| `Logistician` | `public static PerkObject Logistician { get; }` |
| `Relocation` | `public static PerkObject Relocation { get; }` |
| `AidCorps` | `public static PerkObject AidCorps { get; }` |
| `Gourmet` | `public static PerkObject Gourmet { get; }` |
| `SoundReserves` | `public static PerkObject SoundReserves { get; }` |
| `ForcedLabor` | `public static PerkObject ForcedLabor { get; }` |
| `Contractors` | `public static PerkObject Contractors { get; }` |
| `ArenicosMules` | `public static PerkObject ArenicosMules { get; }` |
| `ArenicosHorses` | `public static PerkObject ArenicosHorses { get; }` |
| `MasterOfPlanning` | `public static PerkObject MasterOfPlanning { get; }` |
| `MasterOfWarcraft` | `public static PerkObject MasterOfWarcraft { get; }` |
| `PriceOfLoyalty` | `public static PerkObject PriceOfLoyalty { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
Steward instance = ...;
```

## 参见

- [本区域目录](../)