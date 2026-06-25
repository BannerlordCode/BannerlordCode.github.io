---
title: "StanceLink"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `StanceLink`
- [← 本领域 / 返回 campaign](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# StanceLink

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class StanceLink`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/StanceLink.cs`

## 概述

`StanceLink` 位于 `TaleWorlds.CampaignSystem`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.CampaignSystem` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsNeutral` | `public bool IsNeutral { get; }` |
| `IsAtWar` | `public bool IsAtWar { get; set; }` |
| `Faction1` | `public IFaction Faction1 { get; }` |
| `Faction2` | `public IFaction Faction2 { get; }` |
| `WarStartDate` | `public CampaignTime WarStartDate { get; }` |
| `PeaceDeclarationDate` | `public CampaignTime PeaceDeclarationDate { get; }` |
| `TroopCasualties1` | `public int TroopCasualties1 { get; set; }` |
| `TroopCasualties2` | `public int TroopCasualties2 { get; set; }` |
| `ShipCasualties1` | `public int ShipCasualties1 { get; set; }` |
| `ShipCasualties2` | `public int ShipCasualties2 { get; set; }` |
| `SuccessfulSieges1` | `public int SuccessfulSieges1 { get; set; }` |
| `SuccessfulSieges2` | `public int SuccessfulSieges2 { get; set; }` |
| `SuccessfulRaids1` | `public int SuccessfulRaids1 { get; set; }` |
| `SuccessfulRaids2` | `public int SuccessfulRaids2 { get; set; }` |
| `TotalTributePaidBy1` | `public int TotalTributePaidBy1 { get; set; }` |
| `TotalTributePaidBy2` | `public int TotalTributePaidBy2 { get; set; }` |
| `SuccessfulTownSieges1` | `public int SuccessfulTownSieges1 { get; set; }` |
| `SuccessfulTownSieges2` | `public int SuccessfulTownSieges2 { get; set; }` |

## 主要方法

### GetCasualties
`public int GetCasualties(IFaction faction)`

**用途 / Purpose:** 获取 `casualties` 的当前值。

### GetSuccessfulSieges
`public int GetSuccessfulSieges(IFaction faction)`

**用途 / Purpose:** 获取 `successful sieges` 的当前值。

### GetSuccessfulRaids
`public int GetSuccessfulRaids(IFaction faction)`

**用途 / Purpose:** 获取 `successful raids` 的当前值。

### GetTotalTributePaid
`public int GetTotalTributePaid(IFaction faction)`

**用途 / Purpose:** 获取 `total tribute paid` 的当前值。

### GetSuccessfulTownSieges
`public int GetSuccessfulTownSieges(IFaction faction)`

**用途 / Purpose:** 获取 `successful town sieges` 的当前值。

### GetDailyTributePaid
`public int GetDailyTributePaid(IFaction faction)`

**用途 / Purpose:** 获取 `daily tribute paid` 的当前值。

### SetDailyTributePaid
`public void SetDailyTributePaid(IFaction payer, int dailyTribute)`

**用途 / Purpose:** 设置 `daily tribute paid` 的值或状态。

## 使用示例

```csharp
var value = new StanceLink();
value.GetCasualties(faction);
```

## 参见

- [完整类目录](../catalog)