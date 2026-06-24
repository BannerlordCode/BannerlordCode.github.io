<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `VillageStates`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# VillageStates

**命名空间:** TaleWorlds.CampaignSystem.Settlements
**模块:** TaleWorlds.CampaignSystem
**类型:** `public enum VillageStates`
**领域:** campaign-ext

## 概述

`VillageStates` 位于 `TaleWorlds.CampaignSystem.Settlements`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.Settlements` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `Normal` |
| `BeingRaided` |
| `ForcedForVolunteers` |
| `ForcedForSupplies` |

## 使用示例

```csharp
VillageStates example = VillageStates.Normal;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
