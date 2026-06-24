<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Charm`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Charm

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Charm`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Charm` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Virile` | `public static PerkObject Virile { get; }` |
| `SelfPromoter` | `public static PerkObject SelfPromoter { get; }` |
| `Oratory` | `public static PerkObject Oratory { get; }` |
| `Warlord` | `public static PerkObject Warlord { get; }` |
| `ForgivableGrievances` | `public static PerkObject ForgivableGrievances { get; }` |
| `MeaningfulFavors` | `public static PerkObject MeaningfulFavors { get; }` |
| `InBloom` | `public static PerkObject InBloom { get; }` |
| `YoungAndRespectful` | `public static PerkObject YoungAndRespectful { get; }` |
| `Firebrand` | `public static PerkObject Firebrand { get; }` |
| `FlexibleEthics` | `public static PerkObject FlexibleEthics { get; }` |
| `EffortForThePeople` | `public static PerkObject EffortForThePeople { get; }` |
| `SlickNegotiator` | `public static PerkObject SlickNegotiator { get; }` |
| `GoodNatured` | `public static PerkObject GoodNatured { get; }` |
| `Tribute` | `public static PerkObject Tribute { get; }` |
| `MoralLeader` | `public static PerkObject MoralLeader { get; }` |
| `NaturalLeader` | `public static PerkObject NaturalLeader { get; }` |
| `PublicSpeaker` | `public static PerkObject PublicSpeaker { get; }` |
| `Parade` | `public static PerkObject Parade { get; }` |
| `Camaraderie` | `public static PerkObject Camaraderie { get; }` |
| `ImmortalCharm` | `public static PerkObject ImmortalCharm { get; }` |

## 使用示例

```csharp
var example = new Charm();
```

## 参见

- [完整类目录](../catalog)