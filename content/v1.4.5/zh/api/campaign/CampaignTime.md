---
title: "CampaignTime"
description: "以 CampaignTimeModel 配置的 tick 表示战役绝对时间和持续时间，供日常调度、截止日期、昼夜判断与存档数据共享同一时间轴。"
---
# CampaignTime

**命名空间:** `TaleWorlds.CampaignSystem`
**模块:** `TaleWorlds.CampaignSystem`
**类型:** `public struct CampaignTime : IComparable<CampaignTime>`
**基类:** `System.ValueType`；实现 `IComparable<CampaignTime>`
**文件:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/CampaignTime.cs`

## 概述

`CampaignTime` 是不可变的战役时间值。它内部保存一个 `long` tick 数，`Now` 从 `Campaign.Current.MapTimeTracker` 读取当前绝对位置，`DeltaTime` 表示上一帧推进的时间；分钟、小时、日、周、季和年都由当前 `CampaignTimeModel` 的换算常量解释。它既能表示“何时发生”的绝对时间，也能表示从零点开始的持续时间。

## 心智模型

先区分三种值：`CampaignTime.Now` 是当前时刻，`CampaignTime.Days(3f)` 是三天的持续时间，`CampaignTime.DaysFromNow(3f)` 才是三天后的截止时刻。时间轴由 Campaign 创建并在地图 tick 中推进，`CampaignTime.Initialize()` 从 `Campaign.Current.Models.CampaignTimeModel` 装载日历和 tick 常量；mod 不应自己初始化、修改内部 tick 或硬编码一周/一季的天数。

## ↑ 父级导航

- [Campaign API 索引](../)
- [战役系统架构](../../../architecture/)

## ↔ 同级导航

- [Campaign](../Campaign)：拥有当前 Campaign 和地图时间跟踪器。
- [CampaignTimeModel](../CampaignTimeModel)：提供日历、日出日落与 tick 换算配置。
- [MapTimeTracker](../MapTimeTracker)：保存 `_numTicks` 与本次 tick 的增量。

## Children / 相关入口

- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager) - 将 `DeltaTime` 转换为小时/日增量并驱动周期 ticker。
- [CampaignBehaviorBase](../CampaignBehaviorBase) - 战役行为在 `SyncData` 中保存包含 `CampaignTime` 的字段。
- [SaveManager](../../save-system/SaveManager) - 相关时间字段最终随 Campaign 存档。
- [Hero](../Hero) - 死亡日、出生和年龄逻辑使用同一时间轴。

## 依赖关系

`CampaignTime.Now` 和 `DeltaTime` 向上依赖正在运行的 [Campaign](../Campaign) 及其 [MapTimeTracker](../MapTimeTracker)；`Initialize()` 依赖 [CampaignTimeModel](../CampaignTimeModel)，后者由 `Campaign.Models` 提供。向下游，[CampaignPeriodicEventManager](../CampaignPeriodicEventManager) 用 `DeltaTime.ToHours`/`ToDays` 驱动 hourly 和 daily ticker，[Campaign](../Campaign) 自己负责从日期判断 weekly dispatch；Campaign 行为把时间值写进 [IDataStore](../IDataStore)，而 `Hero`、`MobileParty`、Issue 和 Action 把绝对时刻保存为业务字段。

## 生命周期、调度与存档风险

- 在主菜单或 Campaign 尚未创建时访问 `Now`、`DeltaTime` 和 `Elapsed*UntilNow` 可能因 `Campaign.Current` 为空而失败；把这些读取放进 Campaign 事件、行为或明确的会话生命周期中。`IsDayTime`/`IsNightTime` 对已有的值读取实例 tick，但仍依赖 `Initialize()` 已装载的日历常量；未初始化时不要把零值常量当作有效昼夜判断。
- `Zero` 是 tick 为零的值，常用于初始化字段；`Never` 是 `long.MaxValue` 哨兵，不是一个会自动“永不触发”的调度器。比较截止日期时必须先识别 `Never`，不要把它当普通日期做剩余时间显示。
- `FromNow` 工厂读取当前地图 tick；不要在保存回调、异步回调或旧实体清理后延迟使用捕获的“现在”，需要比较时重新取 `CampaignTime.Now`。
- 日历常量由 Model 决定。默认快速模式会把 `DaysInWeek` 和 `WeeksInSeason` 改成不同值，直接写死 `7` 或 `3` 会让周、季、年和日期显示错位。
- `_numTicks` 由 `[SaveableField(2)]` 持久化。自定义 Campaign 行为应通过 `IDataStore.SyncData` 保存 `CampaignTime`，不要把 `ToDays` 的浮点值当唯一存档键，也不要用 `DateTime` 拼一条不受战役 tick 控制的时间轴。

## 公共成员说明

### 当前时刻与换算

`Now` 读取地图当前 tick，`DeltaTime` 读取最近一次 `MapTimeTracker.Tick` 写入的增量。`ToMilliseconds` 到 `ToYears` 把同一绝对 tick 转为不同单位；`Elapsed*UntilNow` 计算当前时间减去该值，`Remaining*FromNow` 计算该值减去当前时间。过去的时间可以产生负的 Remaining 值，这是比较结果而不是异常。

### 工厂、哨兵与比较

`Milliseconds`、`Seconds`、`Minutes`、`Hours`、`Days`、`Weeks`、`Years` 从零点构造持续时间；对应的 `*FromNow` 工厂把持续时间加到 `CurrentTicks`。`+` 和 `-` 可组合持续时间或时间值，但业务语义由调用者保证。`IsFuture`、`IsPast`、`IsNow`、比较运算符和 `CompareTo` 都只比较内部 tick。

### 日历与显示

`GetHourOfDay`、`GetDayOfWeek`、`GetDayOfSeason`、`GetDayOfYear`、`GetWeekOfSeason`、`GetSeasonOfYear` 和 `GetYear` 使用 Model 已装载的常量。`IsDayTime` 以 `SunRise`/`SunSet` 的整点判断，`IsNightTime` 是它的反值。`StringSameAs` 只比较是否落在同一个战役日，而不是完整 tick 相等；`ToString()` 使用 `str_date_format` 和 `str_season_*` 文本生成本地化日期。

## 真实示例

### 在 Campaign 行为中清理超过 15 天的记录

这是 `TournamentCampaignBehavior` 的真实模式：记录创建时的 `CampaignTime`，加载/每日处理时用 `ElapsedDaysUntilNow` 判断，而不是缓存一个现实世界时间。

```csharp
private Dictionary<Town, CampaignTime> _lastCreatedTournamentDatesInTowns = new Dictionary<Town, CampaignTime>();

private void OnGameLoaded(CampaignGameStarter campaignGameStarter)
{
    foreach (KeyValuePair<Town, CampaignTime> item in _lastCreatedTournamentDatesInTowns.ToList())
    {
        if (item.Value.ElapsedDaysUntilNow >= 15f)
        {
            _lastCreatedTournamentDatesInTowns.Remove(item.Key);
        }
    }
}

private void RememberTournament(Town town)
{
    CampaignTime creationTime = CampaignTime.Now;
    _lastCreatedTournamentDatesInTowns[town] = creationTime;
}

private void OnTownRebelliousStateChanged(Town town, bool rebelliousState)
{
    if (town.InRebelliousState)
    {
        TournamentGame tournamentGame = Campaign.Current.TournamentManager.GetTournamentGame(town);
        if (tournamentGame != null)
        {
            Campaign.Current.TournamentManager.ResolveTournament(tournamentGame, town);
        }
    }
}
```

### 构造一个三天后的绝对截止时刻

持续时间与绝对时刻要明确分开；截止时刻可以保存到行为字段，再用 `IsPast` 或 `RemainingDaysFromNow` 检查。

```csharp
private CampaignTime CreateDeadline()
{
    CampaignTime deadline = CampaignTime.DaysFromNow(3f);
    if (deadline.IsFuture && CampaignTime.Now < deadline)
    {
        return deadline;
    }
    return CampaignTime.Never;
}
```

## 参见

- [Campaign API 索引](../)
- [Campaign](../Campaign)
- [CampaignTimeModel](../CampaignTimeModel)
- [CampaignPeriodicEventManager](../CampaignPeriodicEventManager)
- [CampaignBehaviorBase](../CampaignBehaviorBase)
