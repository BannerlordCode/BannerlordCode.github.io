---
title: "MissionTime"
description: "以 MissionTimeTracker 的 tick 表示 Mission 内时间的值类型；用于构造未来时间点、比较时序和把 tick 转换为秒/分/小时。"
---

# MissionTime

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public struct MissionTime : IComparable<MissionTime>`  
**Base:** `IComparable<MissionTime>`  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionTime.cs`

## 一句话职责

它用不可变的 long tick 快照表示 Mission 内的时间点，并提供当前时间、未来时间、相对经过时间和单位转换，让行为可以安全比较时序而不是自己维护浮点秒数。

## 心智模型

`MissionTime` 是时间点值，不是会自己推进的计时器。`MissionTimeTracker` 由 `Mission` 每帧推进；`MissionTime.Now` 和 `MissionTime.DeltaTime` 只是从当前 tracker 读取快照。`SecondsFromNow` / `MillisecondsFromNow` 在当前 Mission 时间上加偏移，`Seconds` / `Minutes` / `Hours` 则从零点构造一个持续量值。

`IsFuture`、`IsPast`、`IsNow` 和 `ElapsedSeconds` 会再次读取当前活动 Mission 的 tracker，因此它们只能在 Mission 生命周期内解释。`NumberOfTicks` 与 `ToSeconds` 等纯值读取可以用于比较或传递，但不要把任意 long tick 当作 Campaign 时间或存档时间。

## 何时用，何时不用

**适合使用：**

- 在 Mission behavior 中保存“下一次检查时间”，用 `MissionTime.SecondsFromNow` 创建并在 tick 中判断 `IsPast`。
- 需要比较两个 Mission 时间点、计算 `ElapsedSeconds`，或把时间转换为秒/分/小时。
- 让 [`MissionTimer`](../MissionTimer) 和其他 Mission 系统共享同一 tick 时钟。

**不要这样用：**

- 不要在没有 `Mission.Current` 时调用 `Now`、`DeltaTime`、`SecondsFromNow`、`IsPast` 或 `ElapsedSeconds`。
- 不要把 `MissionTime` 当 CampaignTime、现实时间或可持久化的跨 Mission 时钟。
- 不要自己递增 `NumberOfTicks`；它是只读快照，真正的推进由 [`MissionTimeTracker`](../MissionTimeTracker) 和 `Mission` 完成。

## 成员说明

| 成员 | 用途、副作用与调用时机 |
|---|---|
| `NumberOfTicks` | 返回内部 tick 值；只读，每秒使用 `10,000,000` tick。 |
| `Now` / `DeltaTime` | 从当前 Mission tracker 读取当前时间和最近一帧增量；只能在活动 Mission 内读取。 |
| `Zero` | 返回零 tick 值；不代表当前 Mission 已启动。 |
| `IsFuture` / `IsPast` / `IsNow` | 用当前 Mission 时间比较此快照；访问时依赖 `Mission.Current`。 |
| `ElapsedHours` / `ElapsedSeconds` / `ElapsedMilliseconds` | 计算当前 Mission 时间减此快照的经过量；不能跨 Mission 使用。 |
| `ToHours` / `ToMinutes` / `ToSeconds` / `ToMilliseconds` | 把快照自身的 tick 值转换为单位，不重新读取当前 Mission。 |
| `MillisecondsFromNow(float)` / `SecondsFromNow(float)` | 从当前 Mission 时间创建未来时间点；要求活动 Mission。 |
| `Milliseconds(float)` / `Seconds(float)` / `Minutes(float)` / `Hours(float)` | 从零点创建单位值，可与其他 `MissionTime` 做加减。 |
| `CompareTo`、比较运算符、`Equals` | 比较 tick 顺序或相等性；不会推进时钟。 |
| `MissionTime(long)` | 从原始 tick 构造值；只在确实掌握 tick 契约时使用。 |

## 依赖关系

- **时钟拥有者：** [`Mission`](../../mission/Mission) 创建并推进 [`MissionTimeTracker`](../MissionTimeTracker)。
- **读取入口：** `Now` / `DeltaTime` 直接读取 tracker；`IsPast` 和 `ElapsedSeconds` 间接读取当前 Mission。
- **计时器下游：** [`MissionTimer`](../MissionTimer) 用 `MissionTime` 保存起点；短 elapsed 窗口也可选择 [`BasicMissionTimer`](../BasicMissionTimer)。
- **生命周期边界：** [`MissionBehavior`](../../mission/MissionBehavior) 的初始化和 tick 回调是常见获取路径；Campaign 存档系统不持有此运行时值。

## 真实示例

下面的模式来自 Mission 行为中使用 `MissionTime.SecondsFromNow` 和 `IsPast` 的源码路径：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class NextCheckBehavior : MissionBehavior
{
    private MissionTime _nextCheck;

    public override void OnBehaviorInitialize()
    {
        _nextCheck = MissionTime.SecondsFromNow(10f);
    }

    public override void OnMissionTick(float dt)
    {
        if (_nextCheck.IsPast)
        {
            _nextCheck = MissionTime.SecondsFromNow(10f);
        }
    }
}
```

如果需要测量最近一帧，而不是保存未来时间点，可在同一 Mission tick 中读取 `MissionTime.DeltaTime.ToSeconds`；不要用 Campaign 时间替代 Mission tick。

## 版本注记

1.3.15 与 1.4.5 的公开时间单位和工厂方法保持同一核心语义：每秒 `10,000,000` tick，并提供 `Now`、`SecondsFromNow`、单位构造和比较运算。1.4.5 的生命周期风险以当前 `Mission` 与 `MissionTimeTracker` 调用点为准。

## 风险与崩溃边界

1. 静态 `Now`、`DeltaTime`、`SecondsFromNow` 以及 `IsPast`/`ElapsedSeconds` 会间接访问 `Mission.Current`；在地图层、模块加载阶段或 Mission 清理后调用可能空引用崩溃。
2. `DeltaTime` 是 tracker 最近一次 tick 的增量，不是现实世界帧时间；在错误阶段读取可能得到旧值。
3. `MissionTime` 不会自动保存或跨场景恢复。把它塞进 Campaign 单例或存档对象会把短命 Mission 时间污染到长期状态。
4. 不要把 `Seconds(10f)` 与 `SecondsFromNow(10f)` 混用：前者是从零点构造的持续量，后者是相对当前 Mission 的未来时间点。
5. 原始 tick 使用 long，但单位转换返回 float/double；长时间 Mission 或高精度比较应保留 tick/使用合适的转换属性，不要反复在浮点秒和 tick 间来回舍入。

## 导航

- ↑ 父级：[Mission-ext 模块目录](../)
- ↔ 同区：[`BasicMissionTimer`](../BasicMissionTimer) · [`MissionTimer`](../MissionTimer) · [`MissionTimeTracker`](../MissionTimeTracker)
- 宿主：[`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior)
- 架构：[开发者路线图](../../../architecture/developer-roadmap) · [崩溃边界](../../../architecture/crash-boundary)
- 规范：[文档契约](../../../architecture/doc-contract)
- 中文/English：[`MissionTime`](../../../../en/api/mission-ext/MissionTime)
