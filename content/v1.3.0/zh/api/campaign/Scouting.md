---
title: "Scouting"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Scouting`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Scouting

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Scouting`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Scouting` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DayTraveler` | `public static PerkObject DayTraveler { get; }` |
| `Pathfinder` | `public static PerkObject Pathfinder { get; }` |
| `NightRunner` | `public static PerkObject NightRunner { get; }` |
| `WaterDiviner` | `public static PerkObject WaterDiviner { get; }` |
| `ForestKin` | `public static PerkObject ForestKin { get; }` |
| `DesertBorn` | `public static PerkObject DesertBorn { get; }` |
| `ForcedMarch` | `public static PerkObject ForcedMarch { get; }` |
| `Unburdened` | `public static PerkObject Unburdened { get; }` |
| `Tracker` | `public static PerkObject Tracker { get; }` |
| `Ranger` | `public static PerkObject Ranger { get; }` |
| `MountedScouts` | `public static PerkObject MountedScouts { get; }` |
| `Patrols` | `public static PerkObject Patrols { get; }` |
| `Foragers` | `public static PerkObject Foragers { get; }` |
| `BeastWhisperer` | `public static PerkObject BeastWhisperer { get; }` |
| `VillageNetwork` | `public static PerkObject VillageNetwork { get; }` |
| `RumourNetwork` | `public static PerkObject RumourNetwork { get; }` |
| `VantagePoint` | `public static PerkObject VantagePoint { get; }` |
| `KeenSight` | `public static PerkObject KeenSight { get; }` |
| `Vanguard` | `public static PerkObject Vanguard { get; }` |
| `Rearguard` | `public static PerkObject Rearguard { get; }` |
| `UncannyInsight` | `public static PerkObject UncannyInsight { get; }` |

## 使用示例

```csharp
var example = new Scouting();
```

## 参见

- [完整类目录](../catalog)