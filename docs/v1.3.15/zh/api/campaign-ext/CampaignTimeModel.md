<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignTimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**Base:** `MBGameModel<CampaignTimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs`

## 概述

`CampaignTimeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<CampaignTimeModel>(new MyCampaignTimeModel())` 注册，以改变其计算逻辑。

## 主要属性

| Name | Signature |
|------|-----------|
| `CampaignStartTime` | `public abstract CampaignTime CampaignStartTime { get; }` |
| `SunRise` | `public abstract int SunRise { get; }` |
| `SunSet` | `public abstract int SunSet { get; }` |
| `TimeTicksPerMillisecond` | `public abstract long TimeTicksPerMillisecond { get; }` |
| `MillisecondInSecond` | `public abstract int MillisecondInSecond { get; }` |
| `SecondsInMinute` | `public abstract int SecondsInMinute { get; }` |
| `MinutesInHour` | `public abstract int MinutesInHour { get; }` |
| `HoursInDay` | `public abstract int HoursInDay { get; }` |
| `DaysInWeek` | `public abstract int DaysInWeek { get; }` |
| `WeeksInSeason` | `public abstract int WeeksInSeason { get; }` |
| `SeasonsInYear` | `public abstract int SeasonsInYear { get; }` |

## 使用示例

```csharp
// CampaignTimeModel (Model) 的典型用法
Game.Current.ReplaceModel<CampaignTimeModel>(new MyCampaignTimeModel());
```

## 参见

- [完整类目录](../catalog)