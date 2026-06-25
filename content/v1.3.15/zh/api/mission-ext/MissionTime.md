---
title: MissionTime
description: MissionTime - 战斗任务内的时间表示与计算结构体
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MissionTime`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionTime
**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** struct（实?

`IComparable&lt;MissionTime&gt;

`?
## 概述
`MissionTime

` 是战斗任务（Mission）内的时间表示结构体，以 tick（滴答）为基本单位? tick = 100 纳秒?0000 ticks = 1 毫秒?0000000 ticks = 1 秒。它提供了丰富的时间运算、比较和转换功能，用于在战斗中精确控制时间相关的逻辑（如冷却计时、动画时间、状态持续时间等）?
## 心智模型
`MissionTime

` 内部存储一?

`long _numberOfTicks

`，所有时间运算都基于此值。`Mission.Current.MissionTimeTracker

` 提供当前任务时间。`Now

` 获取当前时间点，

`DeltaTime

` 获取本帧时间增量。`IsFuture

`/

`IsPast

`/

`IsNow

` 通过比较当前时间与自?tick 判断时间关系。`MillisecondsFromNow

` ?

`SecondsFromNow

` 用于计算未来时间点（?3 秒后执行"）。结构体支持加减运算和全部比较运算符?
## 主要属?\| 属?\| 类型 \| 说明 \|
\|------\|------\|------\|
\| 

`NumberOfTicks

` \| 

`long

` \| 底层 tick 数（只读?\|
\| 

`IsFuture

` \| 

`bool

` \| 当前时间是否在此时间点之?\|
\| 

`IsPast

` \| 

`bool

` \| 当前时间是否在此时间点之?\|
\| 

`IsNow

` \| 

`bool

` \| 是否正好是当前时?\|
\| 

`ElapsedHours

` \| 

`float

` \| 距当前时间已过的小时?\|
\| 

`ElapsedSeconds

` \| 

`float

` \| 距当前时间已过的秒数 \|
\| 

`ElapsedMilliseconds

` \| 

`float

` \| 距当前时间已过的毫秒?\|
\| 

`ToHours

` \| 

`double

` \| 转换为小时数 \|
\| 

`ToMinutes

` \| 

`double

` \| 转换为分钟数 \|
\| 

`ToSeconds

` \| 

`double

` \| 转换为秒?\|
\| 

`ToMilliseconds

` \| 

`double

` \| 转换为毫秒数 \|
\| 

`Now

` \| 

`MissionTime

` (static) \| 当前任务时间 \|
\| 

`DeltaTime

` \| 

`MissionTime

` (static) \| 本帧时间增量 \|
\| 

`Zero

` \| 

`MissionTime

` (static) \| 零时间点 \|

## 主要方法
### MillisecondsFromNow
`

`

`csharp
public static MissionTime MillisecondsFromNow(float valueInMilliseconds)
`

`

`
返回从当前时间起指定毫秒数后的时间点?
### SecondsFromNow
`

`

`csharp
public static MissionTime SecondsFromNow(float valueInSeconds)
`

`

`
返回从当前时间起指定秒数后的时间点?
### Milliseconds / Seconds / Minutes / Hours
`

`

`csharp
public static MissionTime Milliseconds(float valueInMilliseconds)
public static MissionTime Seconds(float valueInSeconds)
public static MissionTime Minutes(float valueInMinutes)
public static MissionTime Hours(float valueInHours)
`

`

`
从绝对值创?

`MissionTime

`（不从当前时间偏移）?
### CompareTo / Equals
`

`

`csharp
public int CompareTo(MissionTime other)
public bool Equals(MissionTime other)
`

`

`
实现比较和相等性判断。同时重载了 

`&lt;

`、`&gt;

`、`&lt;=

`、`&gt;=

`、`==

`、`!=

` 运算符和 

`+

`、`-

` 运算符?
## 使用示例
### 示例: 技能冷却计?**场景**: 实现一?5 秒冷却的技能，冷却期间不可再次使用?

`

`

`csharp
public class SkillWithCooldown
{
    private MissionTime _lastUseTime;
    private const float CooldownSeconds = 5f;
    
    public bool CanUse =&gt; _lastUseTime.ElapsedSeconds &gt;= CooldownSeconds;
    
    public void Use()
    {
        if (!CanUse) return;
        _lastUseTime = MissionTime.Now;
        // 执行技能逻辑...
    }
    
    public float RemainingCooldown
    {
        get
        {
            float elapsed = _lastUseTime.ElapsedSeconds;
            return MathF.Max(0f, CooldownSeconds - elapsed);
        }
    }
    
    // 使用 MillisecondsFromNow 设置定时?    public MissionTime GetCooldownEndTime()
    {
        return MissionTime.SecondsFromNow(CooldownSeconds);
    }
}
`

`

`
**要点**: 

`MissionTime

` 是结构体，赋值是值拷贝；

`ElapsedSeconds

` 等属性基于当前时间动态计算，无需手动更新；常?

`TimeTicksPerSecond

` 等可用于手动 tick 计算?
## 参见
- [完整类目录](../catalog-engine)
- [本领域目录](../catalog-engine)
- [API 目录](../)
- [SDK 总览](../../architecture/sdk-overview)
