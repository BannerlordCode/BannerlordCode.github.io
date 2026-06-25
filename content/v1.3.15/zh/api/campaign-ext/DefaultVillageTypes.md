---
title: "DefaultVillageTypes"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultVillageTypes`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultVillageTypes

**Namespace:** TaleWorlds.CampaignSystem.Settlements
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultVillageTypes`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Settlements/DefaultVillageTypes.cs`

## 概述

`DefaultVillageTypes` 位于 `TaleWorlds.CampaignSystem.Settlements`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ConsumableRawItems` | `public IList<ItemObject> ConsumableRawItems { get; }` |
| `EuropeHorseRanch` | `public static VillageType EuropeHorseRanch { get; }` |
| `BattanianHorseRanch` | `public static VillageType BattanianHorseRanch { get; }` |
| `SturgianHorseRanch` | `public static VillageType SturgianHorseRanch { get; }` |
| `VlandianHorseRanch` | `public static VillageType VlandianHorseRanch { get; }` |
| `SteppeHorseRanch` | `public static VillageType SteppeHorseRanch { get; }` |
| `DesertHorseRanch` | `public static VillageType DesertHorseRanch { get; }` |
| `WheatFarm` | `public static VillageType WheatFarm { get; }` |
| `Lumberjack` | `public static VillageType Lumberjack { get; }` |
| `ClayMine` | `public static VillageType ClayMine { get; }` |
| `SaltMine` | `public static VillageType SaltMine { get; }` |
| `IronMine` | `public static VillageType IronMine { get; }` |
| `Fisherman` | `public static VillageType Fisherman { get; }` |
| `CattleRange` | `public static VillageType CattleRange { get; }` |
| `SheepFarm` | `public static VillageType SheepFarm { get; }` |
| `HogFarm` | `public static VillageType HogFarm { get; }` |
| `VineYard` | `public static VillageType VineYard { get; }` |
| `FlaxPlant` | `public static VillageType FlaxPlant { get; }` |
| `DateFarm` | `public static VillageType DateFarm { get; }` |
| `OliveTrees` | `public static VillageType OliveTrees { get; }` |
| `SilkPlant` | `public static VillageType SilkPlant { get; }` |
| `SilverMine` | `public static VillageType SilverMine { get; }` |

## 使用示例

```csharp
var value = new DefaultVillageTypes();
```

## 参见

- [完整类目录](../catalog)