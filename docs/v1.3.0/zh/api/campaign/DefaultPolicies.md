<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultPolicies`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# DefaultPolicies

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultPolicies`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/DefaultPolicies.cs`

## 概述

`DefaultPolicies` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `LandTax` | `public static PolicyObject LandTax { get; }` |
| `StateMonopolies` | `public static PolicyObject StateMonopolies { get; }` |
| `SacredMajesty` | `public static PolicyObject SacredMajesty { get; }` |
| `Magistrates` | `public static PolicyObject Magistrates { get; }` |
| `DebasementOfTheCurrency` | `public static PolicyObject DebasementOfTheCurrency { get; }` |
| `PrecarialLandTenure` | `public static PolicyObject PrecarialLandTenure { get; }` |
| `CrownDuty` | `public static PolicyObject CrownDuty { get; }` |
| `ImperialTowns` | `public static PolicyObject ImperialTowns { get; }` |
| `RoyalCommissions` | `public static PolicyObject RoyalCommissions { get; }` |
| `RoyalGuard` | `public static PolicyObject RoyalGuard { get; }` |
| `WarTax` | `public static PolicyObject WarTax { get; }` |
| `RoyalPrivilege` | `public static PolicyObject RoyalPrivilege { get; }` |
| `Senate` | `public static PolicyObject Senate { get; }` |
| `LordsPrivyCouncil` | `public static PolicyObject LordsPrivyCouncil { get; }` |
| `MilitaryCoronae` | `public static PolicyObject MilitaryCoronae { get; }` |
| `FeudalInheritance` | `public static PolicyObject FeudalInheritance { get; }` |
| `Serfdom` | `public static PolicyObject Serfdom { get; }` |
| `NobleRetinues` | `public static PolicyObject NobleRetinues { get; }` |
| `CastleCharters` | `public static PolicyObject CastleCharters { get; }` |
| `Bailiffs` | `public static PolicyObject Bailiffs { get; }` |
| `HuntingRights` | `public static PolicyObject HuntingRights { get; }` |
| `RoadTolls` | `public static PolicyObject RoadTolls { get; }` |
| `Marshals` | `public static PolicyObject Marshals { get; }` |
| `CouncilOfTheCommons` | `public static PolicyObject CouncilOfTheCommons { get; }` |
| `ForgivenessOfDebts` | `public static PolicyObject ForgivenessOfDebts { get; }` |
| `Citizenship` | `public static PolicyObject Citizenship { get; }` |
| `TribunesOfThePeople` | `public static PolicyObject TribunesOfThePeople { get; }` |
| `GrazingRights` | `public static PolicyObject GrazingRights { get; }` |
| `Lawspeakers` | `public static PolicyObject Lawspeakers { get; }` |
| `TrialByJury` | `public static PolicyObject TrialByJury { get; }` |
| `Cantons` | `public static PolicyObject Cantons { get; }` |
| `LandGrantsForVeteran` | `public static PolicyObject LandGrantsForVeteran { get; }` |

## 使用示例

```csharp
var example = new DefaultPolicies();
```

## 参见

- [完整类目录](../catalog)