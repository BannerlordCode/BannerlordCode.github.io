<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SettlementAction`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementAction

**命名空间:** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块:** TaleWorlds.CampaignSystem
**类型:** `public enum SettlementAction`
**领域:** campaign-ext

## 概述

`SettlementAction` 位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 枚举值

| Name |
|------|
| `RecruitTroops` |
| `Craft` |
| `WalkAroundTheArena` |
| `JoinTournament` |
| `WatchTournament` |
| `Trade` |
| `WaitInSettlement` |

## 使用示例

```csharp
SettlementAction example = SettlementAction.RecruitTroops;
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
