---
title: "DefaultCampaignTimeModel"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCampaignTimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**Base:** `CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`

## 概述

`DefaultCampaignTimeModel` 是一个规则模型，通常定义“系统该如何计算”。mod 开发者最常通过替换或继承它来改规则。

## 心智模型

把 `DefaultCampaignTimeModel` 当作一个 Model 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要属性

| Name | Signature |
|------|-----------|
| `CampaignStartTime` | `public override CampaignTime CampaignStartTime { get; }` |
| `SunRise` | `public override int SunRise { get; }` |
| `SunSet` | `public override int SunSet { get; }` |
| `TimeTicksPerMillisecond` | `public override long TimeTicksPerMillisecond { get; }` |
| `MillisecondInSecond` | `public override int MillisecondInSecond { get; }` |
| `SecondsInMinute` | `public override int SecondsInMinute { get; }` |
| `MinutesInHour` | `public override int MinutesInHour { get; }` |
| `HoursInDay` | `public override int HoursInDay { get; }` |
| `DaysInWeek` | `public override int DaysInWeek { get; }` |
| `WeeksInSeason` | `public override int WeeksInSeason { get; }` |
| `SeasonsInYear` | `public override int SeasonsInYear { get; }` |

## 使用示例

```csharp
Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());
```

## 参见

- [完整类目录](../catalog)