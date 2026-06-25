---
title: "AccessDetails"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `AccessDetails`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AccessDetails

**命名空间:** TaleWorlds.CampaignSystem.ComponentInterfaces
**模块:** TaleWorlds.CampaignSystem
**类型:** `public struct AccessDetails`
**领域:** campaign-ext

## 概述

`AccessDetails` 位于 `TaleWorlds.CampaignSystem.ComponentInterfaces`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CanMainHeroEnterSettlement
`public abstract void CanMainHeroEnterSettlement(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter settlement`。

### CanMainHeroEnterLordsHall
`public abstract void CanMainHeroEnterLordsHall(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter lords hall`。

### CanMainHeroEnterDungeon
`public abstract void CanMainHeroEnterDungeon(Settlement settlement, out SettlementAccessModel.AccessDetails accessDetails)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero enter dungeon`。

### CanMainHeroAccessLocation
`public abstract bool CanMainHeroAccessLocation(Settlement settlement, string locationId, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero access location`。

### CanMainHeroDoSettlementAction
`public abstract bool CanMainHeroDoSettlementAction(Settlement settlement, SettlementAccessModel.SettlementAction settlementAction, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 判断当前对象是否可以执行 `main hero do settlement action`。

### IsRequestMeetingOptionAvailable
`public abstract bool IsRequestMeetingOptionAvailable(Settlement settlement, out bool disableOption, out TextObject disabledText)`

**用途 / Purpose:** 处理 `is request meeting option available` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 AccessDetails 实例，再调用它的公开方法
var value = new AccessDetails();
value.CanMainHeroEnterSettlement(settlement, accessDetails);
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-campaign)
