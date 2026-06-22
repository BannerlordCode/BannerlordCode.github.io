<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CampaignTime`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CampaignTime

**命名空间:** TaleWorlds.CampaignSystem  
**模块:** TaleWorlds.CampaignSystem  
**类型:** struct（实现 `IComparable<CampaignTime>`）  
**文件:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CampaignTime.cs`

`CampaignTime` 是战役时间系统的时间点/时间长度值类型。mod 在做"X 天后""距今多久""到期"等时间计算时几乎都用到它。

## 概述

`CampaignTime` 不可变，内部以毫秒存储。常用入口是静态 `Now`（当前时刻）、`Never`（永不）、`DeltaTime`（本帧增量）。时间长度通过静态工厂创建（如 `CampaignTime.HoursFromNow(24)`），或用 `Elapsed*UntilNow` / `Remaining*FromNow` / `To*` 属性换算。支持全部比较运算符。

## 静态成员

| 名称 | 类型 | 描述 |
|------|------|------|
| Now | CampaignTime | 当前战役时刻 |
| Never | CampaignTime | "永不"哨兵值 |
| DeltaTime | CampaignTime | 本帧时间增量 |
| DaysInSeason | int | 每季节天数 |
| DaysInYear | int | 每年天数 |

## 主要属性

| 名称 | 类型 | 描述 |
|------|------|------|
| IsFuture | bool | 是否在未来 |
| IsPast | bool | 是否已过去 |
| IsNow | bool | 是否就是现在 |
| IsDayTime / IsNightTime | bool | 是否白天/夜晚 |
| CurrentHourInDay | float | 当日第几小时 |
| ElapsedMillisecondsUntilNow / ElapsedSecondsUntilNow / ElapsedHoursUntilNow / ElapsedDaysUntilNow / ElapsedWeeksUntilNow / ElapsedSeasonsUntilNow / ElapsedYearsUntilNow | float | 距今已流逝的时间（各单位） |
| RemainingMillisecondsFromNow / RemainingSecondsFromNow / RemainingHoursFromNow / RemainingDaysFromNow / RemainingWeeksFromNow / RemainingSeasonsFromNow / RemainingYearsFromNow | float | 距今剩余的时间（各单位） |
| ToMilliseconds / ToSeconds / ToMinutes / ToHours / ToDays / ToWeeks / ToSeasons | double | 转为各单位的数值 |

## 运算符与比较

```csharp
public static bool operator <(CampaignTime x, CampaignTime y);
public static bool operator >(CampaignTime x, CampaignTime y);
public static bool operator <=(CampaignTime x, CampaignTime y);
public static bool operator >=(CampaignTime x, CampaignTime y);
public static bool operator ==(CampaignTime x, CampaignTime y);
public static bool operator !=(CampaignTime x, CampaignTime y);
public int CompareTo(CampaignTime other);
```

## 使用示例

```csharp
// 当前时刻与"3 天后"
CampaignTime now = CampaignTime.Now;
CampaignTime deadline = now + CampaignTime.HoursFromNow(72);  // 3 天

// 判断是否到期
if (deadline.IsPast)
{
    InformationManager.DisplayMessage(new InformationMessage("已过期"));
}

// 距今剩余天数
float daysLeft = deadline.RemainingDaysFromNow;

// 比较两个时间
if (hero.DeathDay != CampaignTime.Never && hero.DeathDay < now)
{
    // 已死亡
}
```

::: tip 提示
源码中还提供 `HoursFromNow` / `DaysFromNow` / `SecondsFromNow` 等静态工厂，以及 `+`/`-` 运算，用于构造时间长度。详见源文件。
:::

## 参见

- [Hero](../campaign/Hero.md)
- [Campaign](./Campaign.md)
- [Town](./Town.md)
