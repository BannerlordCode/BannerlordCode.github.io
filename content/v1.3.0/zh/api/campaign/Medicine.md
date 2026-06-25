---
title: "Medicine"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Medicine`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Medicine

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Medicine`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Medicine` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SelfMedication` | `public static PerkObject SelfMedication { get; }` |
| `PreventiveMedicine` | `public static PerkObject PreventiveMedicine { get; }` |
| `TriageTent` | `public static PerkObject TriageTent { get; }` |
| `WalkItOff` | `public static PerkObject WalkItOff { get; }` |
| `Sledges` | `public static PerkObject Sledges { get; }` |
| `DoctorsOath` | `public static PerkObject DoctorsOath { get; }` |
| `BestMedicine` | `public static PerkObject BestMedicine { get; }` |
| `GoodLogdings` | `public static PerkObject GoodLogdings { get; }` |
| `SiegeMedic` | `public static PerkObject SiegeMedic { get; }` |
| `Veterinarian` | `public static PerkObject Veterinarian { get; }` |
| `PristineStreets` | `public static PerkObject PristineStreets { get; }` |
| `BushDoctor` | `public static PerkObject BushDoctor { get; }` |
| `PerfectHealth` | `public static PerkObject PerfectHealth { get; }` |
| `HealthAdvise` | `public static PerkObject HealthAdvise { get; }` |
| `PhysicianOfPeople` | `public static PerkObject PhysicianOfPeople { get; }` |
| `CleanInfrastructure` | `public static PerkObject CleanInfrastructure { get; }` |
| `CheatDeath` | `public static PerkObject CheatDeath { get; }` |
| `FortitudeTonic` | `public static PerkObject FortitudeTonic { get; }` |
| `HelpingHands` | `public static PerkObject HelpingHands { get; }` |
| `BattleHardened` | `public static PerkObject BattleHardened { get; }` |
| `MinisterOfHealth` | `public static PerkObject MinisterOfHealth { get; }` |

## 使用示例

```csharp
var example = new Medicine();
```

## 参见

- [完整类目录](../catalog)