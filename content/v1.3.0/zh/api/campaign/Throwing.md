---
title: "Throwing"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Throwing`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Throwing

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Throwing`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Throwing` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `QuickDraw` | `public static PerkObject QuickDraw { get; }` |
| `ShieldBreaker` | `public static PerkObject ShieldBreaker { get; }` |
| `Hunter` | `public static PerkObject Hunter { get; }` |
| `FlexibleFighter` | `public static PerkObject FlexibleFighter { get; }` |
| `MountedSkirmisher` | `public static PerkObject MountedSkirmisher { get; }` |
| `PerfectTechnique` | `public static PerkObject PerfectTechnique { get; }` |
| `RunningThrow` | `public static PerkObject RunningThrow { get; }` |
| `KnockOff` | `public static PerkObject KnockOff { get; }` |
| `WellPrepared` | `public static PerkObject WellPrepared { get; }` |
| `Skirmisher` | `public static PerkObject Skirmisher { get; }` |
| `Focus` | `public static PerkObject Focus { get; }` |
| `LastHit` | `public static PerkObject LastHit { get; }` |
| `HeadHunter` | `public static PerkObject HeadHunter { get; }` |
| `SlingingCompetitions` | `public static PerkObject SlingingCompetitions { get; }` |
| `Saddlebags` | `public static PerkObject Saddlebags { get; }` |
| `Splinters` | `public static PerkObject Splinters { get; }` |
| `Resourceful` | `public static PerkObject Resourceful { get; }` |
| `LongReach` | `public static PerkObject LongReach { get; }` |
| `WeakSpot` | `public static PerkObject WeakSpot { get; }` |
| `Impale` | `public static PerkObject Impale { get; }` |
| `UnstoppableForce` | `public static PerkObject UnstoppableForce { get; }` |

## 使用示例

```csharp
var example = new Throwing();
```

## 参见

- [完整类目录](../catalog)