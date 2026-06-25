---
title: "Roguery"
description: "Roguery 的自动生成类参考。"
---
# Roguery

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Roguery`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Roguery` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `NoRestForTheWicked` | `public static PerkObject NoRestForTheWicked { get; }` |
| `SweetTalker` | `public static PerkObject SweetTalker { get; }` |
| `TwoFaced` | `public static PerkObject TwoFaced { get; }` |
| `DeepPockets` | `public static PerkObject DeepPockets { get; }` |
| `InBestLight` | `public static PerkObject InBestLight { get; }` |
| `KnowHow` | `public static PerkObject KnowHow { get; }` |
| `Promises` | `public static PerkObject Promises { get; }` |
| `Manhunter` | `public static PerkObject Manhunter { get; }` |
| `Scarface` | `public static PerkObject Scarface { get; }` |
| `WhiteLies` | `public static PerkObject WhiteLies { get; }` |
| `SmugglerConnections` | `public static PerkObject SmugglerConnections { get; }` |
| `PartnersInCrime` | `public static PerkObject PartnersInCrime { get; }` |
| `OneOfTheFamily` | `public static PerkObject OneOfTheFamily { get; }` |
| `SaltTheEarth` | `public static PerkObject SaltTheEarth { get; }` |
| `Carver` | `public static PerkObject Carver { get; }` |
| `RansomBroker` | `public static PerkObject RansomBroker { get; }` |
| `ArmsDealer` | `public static PerkObject ArmsDealer { get; }` |
| `DirtyFighting` | `public static PerkObject DirtyFighting { get; }` |
| `DashAndSlash` | `public static PerkObject DashAndSlash { get; }` |
| `FleetFooted` | `public static PerkObject FleetFooted { get; }` |
| `RogueExtraordinaire` | `public static PerkObject RogueExtraordinaire { get; }` |

## 使用示例

```csharp
// 从对应子系统 API 获取实例
Roguery instance = ...;
```

## 参见

- [本区域目录](../)