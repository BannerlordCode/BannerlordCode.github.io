<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `DefaultCampaignTimeModel`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignTimeModel

**Namespace:** TaleWorlds.CampaignSystem.GameComponents
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**Base:** `CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`

## 概述

`DefaultCampaignTimeModel` 是一个游戏 Model——规则/覆盖点。modder 继承它并经 `Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel())` 注册，以改变其计算逻辑。

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
// DefaultCampaignTimeModel (Model) 的典型用法
Game.Current.ReplaceModel<DefaultCampaignTimeModel>(new MyDefaultCampaignTimeModel());
```

## 参见

- [完整类目录](../catalog)