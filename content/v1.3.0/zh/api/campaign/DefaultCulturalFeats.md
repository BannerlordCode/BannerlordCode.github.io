---
title: "DefaultCulturalFeats"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCulturalFeats`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCulturalFeats

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCulturalFeats`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultCulturalFeats.cs`

## 概述

`DefaultCulturalFeats` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `AseraiTraderFeat` | `public static FeatObject AseraiTraderFeat { get; }` |
| `AseraiDesertFeat` | `public static FeatObject AseraiDesertFeat { get; }` |
| `AseraiIncreasedWageFeat` | `public static FeatObject AseraiIncreasedWageFeat { get; }` |
| `BattanianForestSpeedFeat` | `public static FeatObject BattanianForestSpeedFeat { get; }` |
| `BattanianMilitiaFeat` | `public static FeatObject BattanianMilitiaFeat { get; }` |
| `BattanianConstructionFeat` | `public static FeatObject BattanianConstructionFeat { get; }` |
| `EmpireGarrisonWageFeat` | `public static FeatObject EmpireGarrisonWageFeat { get; }` |
| `EmpireArmyInfluenceFeat` | `public static FeatObject EmpireArmyInfluenceFeat { get; }` |
| `EmpireVillageHearthFeat` | `public static FeatObject EmpireVillageHearthFeat { get; }` |
| `KhuzaitRecruitUpgradeFeat` | `public static FeatObject KhuzaitRecruitUpgradeFeat { get; }` |
| `KhuzaitAnimalProductionFeat` | `public static FeatObject KhuzaitAnimalProductionFeat { get; }` |
| `KhuzaitDecreasedTaxFeat` | `public static FeatObject KhuzaitDecreasedTaxFeat { get; }` |
| `SturgianGrainProductionFeat` | `public static FeatObject SturgianGrainProductionFeat { get; }` |
| `SturgianArmyInfluenceCostFeat` | `public static FeatObject SturgianArmyInfluenceCostFeat { get; }` |
| `SturgianDecisionPenaltyFeat` | `public static FeatObject SturgianDecisionPenaltyFeat { get; }` |
| `VlandianRenownMercenaryFeat` | `public static FeatObject VlandianRenownMercenaryFeat { get; }` |
| `VlandianCastleVillageProductionFeat` | `public static FeatObject VlandianCastleVillageProductionFeat { get; }` |
| `VlandianArmyInfluenceFeat` | `public static FeatObject VlandianArmyInfluenceFeat { get; }` |

## 使用示例

```csharp
var example = new DefaultCulturalFeats();
```

## 参见

- [完整类目录](../catalog)