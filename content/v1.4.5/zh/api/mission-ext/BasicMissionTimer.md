---
title: "BasicMissionTimer"
description: "基于 MBCommon Mission 总时钟记录经过秒数的轻量计时器；适合 Mission 行为内部的短延迟和周期检查，不提供 MissionTime 的网络同步语义。"
---

# BasicMissionTimer

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public class BasicMissionTimer`  
**Base:** 无  
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/BasicMissionTimer.cs`

## 一句话职责

它在创建时记住 `MBCommon.GetTotalMissionTime()`，随后用同一总时钟计算已经过去的秒数，供 Mission 内部行为做短延迟、轮询和冷却检查。

## 心智模型

`BasicMissionTimer` 是一个很小的“起点 + 已过去时间”对象。构造函数和 `Reset()` 都把当前总 Mission 时间保存到私有 `_startTime`；`ElapsedTime` 每次读取时用当前总时间减去起点；`Set(newElapsedTime)` 则反推起点，使读取结果从指定的已过去秒数开始。

它不拥有 Mission，也不推进时钟，不保存 duration，不做网络偏差修正。引擎和 Mission 行为推进总时钟，计时器只读取它。因此它适合战斗内的短暂窗口，例如竞技场结束延迟、Agent 受击后的短保护期或每隔几秒重新检查一次；需要绝对 `MissionTime`、未来时间点、剩余 duration 或联机同步时，应使用 [`MissionTime`](../MissionTime) / [`MissionTimer`](../MissionTimer)。

## 何时用，何时不用

**适合使用：**

- 在 `MissionBehavior` 或 `MissionLogic` 已经挂载并进入生命周期后测量短暂 elapsed 秒数。
- 只需要“距离上次重置过去多久”，而不需要对外显示剩余 duration 或服务器时钟同步时。
- 在 `OnMissionTick` 中检查 `ElapsedTime`，达到阈值后调用 `Reset()` 开始下一周期。

**不要这样用：**

- 不要把它当作 Campaign 时间、存档时间或跨 Mission 的持久计时器。
- 不要用它代替需要 `MissionTime.Now`、`SecondsFromNow`、`IsFuture`/`IsPast` 或网络同步的逻辑。
- 不要在模块加载阶段或脱离 Mission 的代码中创建它并假设总时钟有有效语义；它的实现直接依赖 `MBCommon.GetTotalMissionTime()`。

## 成员说明

| 成员 | 用途、副作用与调用时机 |
|---|---|
| `BasicMissionTimer()` | 以当前 `MBCommon.GetTotalMissionTime()` 为起点创建对象；应在 Mission 行为已建立后创建。 |
| `ElapsedTime` | 返回当前总 Mission 时间减起点的秒数；只读，不会重置或推进时钟。 |
| `Reset()` | 把起点改为当前总 Mission 时间；适合一次周期触发后重新计时。 |
| `Set(float newElapsedTime)` | 反推起点，使下一次 `ElapsedTime` 约等于传入值；它不是设置一个 duration。 |

## 依赖关系

- **时钟来源：** `ElapsedTime`、构造函数、`Reset` 和 `Set` 都读取 `MBCommon.GetTotalMissionTime()`。
- **宿主：** [`Mission`](../../mission/Mission) 推进场景生命周期；通常由 [`MissionBehavior`](../../mission/MissionBehavior) 或 [`MissionLogic`](../MissionLogic) 持有计时器。
- **相邻选择：** [`MissionTime`](../MissionTime) 提供 tick 值和未来时间点；[`MissionTimer`](../MissionTimer) 提供 duration、剩余秒数和同步读取。
- **下游：** Arena、Tournament、Agent 和 Mission logic 用 `ElapsedTime` 判断短窗口；计时器本身不会调用 `EndMission` 或发事件。

## 真实示例

源码中的竞技场和 Tournament Mission logic 都在行为字段中保存 `BasicMissionTimer`，并在 Mission tick 中读取 `ElapsedTime`。下面是同一真实获取路径的最小写法：

```csharp
using TaleWorlds.MountAndBlade;

public sealed class RepeatingWindowBehavior : MissionBehavior
{
    private BasicMissionTimer _windowTimer;

    public override void OnBehaviorInitialize()
    {
        _windowTimer = new BasicMissionTimer();
    }

    public override void OnMissionTick(float dt)
    {
        if (_windowTimer.ElapsedTime > 4f)
        {
            _windowTimer.Reset();
        }
    }
}
```

这里的 `Reset()` 是行为自己的周期边界；它不会改变 Mission 的全局时钟，也不会让其他 behavior 的计时器重置。

## 风险与崩溃边界

1. 计时器的起点是浮点总时间快照，不是 Campaign 存档字段；把它保存到长期对象或跨 Mission 复用会得到过期的时间语义。
2. `Set(4f)` 表示“让 `ElapsedTime` 看起来已经过去约 4 秒”，不是“再等待 4 秒”；需要未来截止点时使用 `MissionTime.SecondsFromNow(4f)`。
3. `ElapsedTime` 达到阈值不会自动触发任何回调。必须由拥有它的 behavior 在正确的 Mission 生命周期中执行后续动作。
4. Mission 结束或 behavior 被移除后，不要把计时器放入静态集合继续轮询；这会把短命场景状态泄漏到下一场 Mission。
5. 它不应用 `MissionTimeTracker.GetLastSyncDifference()`；联机结果或客户端倒计时不能只依赖它。

## 导航

- ↑ 父级：[Mission-ext 模块目录](../)
- ↔ 同区：[`MissionTime`](../MissionTime) · [`MissionTimer`](../MissionTimer) · [`MissionTimeTracker`](../MissionTimeTracker)
- 宿主：[`Mission`](../../mission/Mission) · [`MissionBehavior`](../../mission/MissionBehavior) · [`MissionLogic`](../MissionLogic)
- 架构：[开发者路线图](../../../architecture/developer-roadmap) · [崩溃边界](../../../architecture/crash-boundary)
- 规范：[文档契约](../../../architecture/doc-contract)
- 中文/English：[BasicMissionTimer](../../../../en/api/mission-ext/BasicMissionTimer)
