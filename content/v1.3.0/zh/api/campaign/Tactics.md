---
title: "Tactics"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Tactics`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Tactics

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Tactics`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Tactics` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `TightFormations` | `public static PerkObject TightFormations { get; }` |
| `LooseFormations` | `public static PerkObject LooseFormations { get; }` |
| `ExtendedSkirmish` | `public static PerkObject ExtendedSkirmish { get; }` |
| `DecisiveBattle` | `public static PerkObject DecisiveBattle { get; }` |
| `SmallUnitTactics` | `public static PerkObject SmallUnitTactics { get; }` |
| `HordeLeader` | `public static PerkObject HordeLeader { get; }` |
| `LawKeeper` | `public static PerkObject LawKeeper { get; }` |
| `Coaching` | `public static PerkObject Coaching { get; }` |
| `SwiftRegroup` | `public static PerkObject SwiftRegroup { get; }` |
| `Improviser` | `public static PerkObject Improviser { get; }` |
| `OnTheMarch` | `public static PerkObject OnTheMarch { get; }` |
| `CallToArms` | `public static PerkObject CallToArms { get; }` |
| `PickThemOfTheWalls` | `public static PerkObject PickThemOfTheWalls { get; }` |
| `MakeThemPay` | `public static PerkObject MakeThemPay { get; }` |
| `EliteReserves` | `public static PerkObject EliteReserves { get; }` |
| `Encirclement` | `public static PerkObject Encirclement { get; }` |
| `PreBattleManeuvers` | `public static PerkObject PreBattleManeuvers { get; }` |
| `Besieged` | `public static PerkObject Besieged { get; }` |
| `Counteroffensive` | `public static PerkObject Counteroffensive { get; }` |
| `Gensdarmes` | `public static PerkObject Gensdarmes { get; }` |
| `TacticalMastery` | `public static PerkObject TacticalMastery { get; }` |

## 使用示例

```csharp
var example = new Tactics();
```

## 参见

- [完整类目录](../catalog)