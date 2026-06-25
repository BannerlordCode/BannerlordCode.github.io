---
title: "DefaultCulturalFeats"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCulturalFeats`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultCulturalFeats

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCulturalFeats`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultCulturalFeats.cs`

## Overview

`DefaultCulturalFeats` lives in `TaleWorlds.CampaignSystem.CharacterDevelopment` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CharacterDevelopment` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Usage Example

```csharp
var example = new DefaultCulturalFeats();
```

## See Also

- [Complete Class Catalog](../catalog)