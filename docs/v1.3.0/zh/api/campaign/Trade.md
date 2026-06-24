<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Trade`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Trade

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class Trade`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterDevelopment/DefaultPerks.cs`

## 概述

`Trade` 位于 `TaleWorlds.CampaignSystem.CharacterDevelopment`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CharacterDevelopment` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Appraiser` | `public static PerkObject Appraiser { get; }` |
| `WholeSeller` | `public static PerkObject WholeSeller { get; }` |
| `CaravanMaster` | `public static PerkObject CaravanMaster { get; }` |
| `MarketDealer` | `public static PerkObject MarketDealer { get; }` |
| `TravelingRumors` | `public static PerkObject TravelingRumors { get; }` |
| `LocalConnection` | `public static PerkObject LocalConnection { get; }` |
| `DistributedGoods` | `public static PerkObject DistributedGoods { get; }` |
| `Tollgates` | `public static PerkObject Tollgates { get; }` |
| `ArtisanCommunity` | `public static PerkObject ArtisanCommunity { get; }` |
| `GreatInvestor` | `public static PerkObject GreatInvestor { get; }` |
| `MercenaryConnections` | `public static PerkObject MercenaryConnections { get; }` |
| `ContentTrades` | `public static PerkObject ContentTrades { get; }` |
| `InsurancePlans` | `public static PerkObject InsurancePlans { get; }` |
| `RapidDevelopment` | `public static PerkObject RapidDevelopment { get; }` |
| `GranaryAccountant` | `public static PerkObject GranaryAccountant { get; }` |
| `TradeyardForeman` | `public static PerkObject TradeyardForeman { get; }` |
| `SwordForBarter` | `public static PerkObject SwordForBarter { get; }` |
| `SelfMadeMan` | `public static PerkObject SelfMadeMan { get; }` |
| `SilverTongue` | `public static PerkObject SilverTongue { get; }` |
| `SpringOfGold` | `public static PerkObject SpringOfGold { get; }` |
| `ManOfMeans` | `public static PerkObject ManOfMeans { get; }` |
| `TrickleDown` | `public static PerkObject TrickleDown { get; }` |
| `EverythingHasAPrice` | `public static PerkObject EverythingHasAPrice { get; }` |

## 使用示例

```csharp
var example = new Trade();
```

## 参见

- [完整类目录](../catalog)