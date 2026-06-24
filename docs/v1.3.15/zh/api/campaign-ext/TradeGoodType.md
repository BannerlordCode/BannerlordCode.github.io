<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `TradeGoodType`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TradeGoodType

**命名空间:** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块:** TaleWorlds.CampaignSystem
**类型:** `public enum TradeGoodType`
**领域:** campaign-ext

## 概述

`TradeGoodType` 位于 `TaleWorlds.CampaignSystem.CampaignBehaviors`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.CampaignBehaviors` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Grain` |
| `Wood` |
| `Meat` |
| `Wool` |
| `Cheese` |
| `Iron` |
| `Salt` |
| `Spice` |
| `Raw_Silk` |
| `Fish` |
| `Flax` |
| `Grape` |
| `Hides` |
| `Clay` |
| `Date_Fruit` |
| `Bread` |
| `Beer` |
| `Wine` |
| `Tools` |
| `Pottery` |
| `Cloth` |
| `Linen` |
| `Leather` |
| `Velvet` |
| `Saddle_Horse` |
| `Steppe_Horse` |
| `Hunter` |
| `Desert_Horse` |
| `Charger` |
| `War_Horse` |

## 使用示例

```csharp
TradeGoodType example = TradeGoodType.Grain;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
