---
title: "AgentProximityMap"
description: "「找出半径内所有 Agent」的双通道实现：半径够小走 native 网格加速（O(格子数)），半径超限自动退化成遍历全场（O(全体人数)）。调用方只看到一个统一的 BeginSearch / FindNext 游标。"
---

# AgentProximityMap

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentProximityMap`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## 概述

全文 113 行，**零实例成员**——除了两个嵌套类型之外全是 `public static` 方法。它解决的问题只有一个：「给我圆心、给我半径，把里面的 Agent 都列出来」。

关键在于它有**两条物理路径**，而调用方看不到区别：

- 半径够小：走 native 侧的网格加速。`mission.ProximityMapBeginSearch(searchPos, searchRadius)`（`AgentProximityMap.cs:83`）返回一个内部游标，`mission.ProximityMapFindNext(ref ...)`（`AgentProximityMap.cs:109`）逐个推进。
- 半径超过 native 网格上限时放弃加速：**改成遍历 `mission.Agents` 全场**（循环体在 `AgentProximityMap.cs:69` 到 `:79`），靠 `DistanceSquared` 判半径（判定式在 `AgentProximityMap.cs:73`）。

判定就在一行：`result.LoopAllAgents = searchRadius > num;`（`AgentProximityMap.cs:62`）。native 侧的实际入口是 `IMBMission.cs:318` 的 `[EngineMethod("agent_proximity_map_begin_search", ...)]`，中间经过 `Mission.cs:1704` 的转发。

v1.4.5 的四个真实调用点（实测 grep）：

| 调用点 | 半径 | 备注 |
| --- | --- | --- |
| `Mission.cs:4816` | `distance` | 通用「找附近 Agent」入口 |
| `Mission.cs:5628` | `num` | **唯一传 `extendRangeByBiggestAgentCollisionPadding: true` 的地方** |
| `LadderQueueManager.cs:344` | `30f` | 云梯排队找附近人 |
| `FlagDominationSpawnFrameBehavior.cs:91` | `2f` | 占领旗 |

## 心智模型

把它当成**「一个游标，两个引擎」**，不是「一张地图」。四条推论：

第一，**`BeginSearch` 已经返回了第一个命中项，你必须先读再调 `FindNext`。** 这是最容易漏的一步。`BeginSearch` 内部已经做了第一次查找：native 路径靠 `result.RefreshLastFoundAgent(mission)`（`AgentProximityMap.cs:84`），退化路径靠 while 循环首次命中后 `break`（`AgentProximityMap.cs:75-76`）。**正确的循环形状是「先 `while (struct.LastFoundAgent != null)` 干活，再 `FindNext`」，而不是「先 `FindNext` 再干活」。** 写反了你会永远漏掉最近的那个 Agent。

第二，**结束的信号是 `LastFoundAgent == null`，不是「有没有 more」。** 没有 `HasNext`、没有 `Count`、没有索引。两个分支的终止条件都是「扫完了」：native 分支靠 native 返回空游标，退化分支靠 `agents.Count > LastAgentLoopIndex` 变假（`AgentProximityMap.cs:70`）。

第三，**游标是有状态的，而且是有两份状态的。** 走 native 路径时索引进 `ProximityMapSearchStructInternal.CurrentElementIndex`（`AgentProximityMap.cs:30`）；走退化路径时索引进 `ProximityMapSearchStruct.LastAgentLoopIndex`（`AgentProximityMap.cs:16`）。**后者是 `public struct` —— 值类型。`FindNext` 的形参是 `ref ProximityMapSearchStruct searchStruct`（`AgentProximityMap.cs:89`），所以必须把同一个 struct 变量反复传进去。** 传一个副本进去，游标不会前进，你会死循环。

第四，**半径是有上限的，超过就静默降级，不报错。** `CanSearchRadius`（`AgentProximityMap.cs:48`）只是让你**能提前问一句**，它不做任何拦截。真正的分流在 `AgentProximityMap.cs:62`。**所以传一个 500f 的半径不会失败，只会让这一帧退化成遍历全场所有 Agent。** 在 500 人战场里逐帧这么干，是实打实的掉帧来源，而且没有任何警告。

还有一条边界：`extendRangeByBiggestAgentCollisionPadding`（`AgentProximityMap.cs:54` 的第四个参数）在**进分流判定之前**就把半径加大了（`AgentProximityMap.cs:58`）。也就是说，**你以为自己搜的是 `num`，实际搜的是 `num + 最大碰撞半径 + 1`**，而这个放大后的值才是拿去和上限比的。**放大可能把一次本该走网格的搜索推进退化路径。**

## 如何使用

**拿法：** 纯静态方法，不 new。标准三段式：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public static void LogAgentsAround(Mission mission, Vec2 center, float radius)
{
    // 先问一句，避免误触发全场遍历
    if (!AgentProximityMap.CanSearchRadius(radius))
    {
        MBDebug.Print("radius " + radius + " exceeds proximity map limit; this will be O(n) fallback", 0);
    }

    // BeginSearch 内部已经定位到第一个命中项（AgentProximityMap.cs:84 / :75）
    AgentProximityMap.ProximityMapSearchStruct search =
        AgentProximityMap.BeginSearch(mission, center, radius);

    // 先读、后推进 —— 顺序反了就漏掉最近的那个
    while (search.LastFoundAgent != null)
    {
        Agent found = search.LastFoundAgent;
        MBDebug.Print("nearby agent index = " + found.Index, 0);

        // 同一个 struct 变量，靠 ref 传回去推进游标
        AgentProximityMap.FindNext(mission, ref search);
    }
}
```

需要把「碰撞体积也算进去」时（对照 `Mission.cs:5628` 的唯一用法）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static void LogAgentsWithPadding(Mission mission, Vec2 center, float radius)
{
    // 第四个参数为 true 时，半径会先加上最大碰撞半径再加 1（AgentProximityMap.cs:58），
    // 而且这个放大是发生在与上限比较【之前】的，可能把搜索推进退化路径。
    AgentProximityMap.ProximityMapSearchStruct search =
        AgentProximityMap.BeginSearch(
            mission, center, radius,
            extendRangeByBiggestAgentCollisionPadding: true);

    int count = 0;
    while (search.LastFoundAgent != null)
    {
        count++;
        AgentProximityMap.FindNext(mission, ref search);
    }
    MBDebug.Print("with padding found " + count, 0);
}
```

逐帧使用时的性能护栏（这是本类最实际的用法）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public class MyModNearbyWatcher : MissionLogic
{
    private const float WatchRadius = 6f;   // 刻意留在上限内，走 native 网格

    public override void OnMissionTick(float dt)
    {
        Agent me = Mission.Current.MainAgent;
        if (me == null || !me.IsActive())
        {
            return;
        }

        // 每帧都调，所以半径必须小。CanSearchRadius 的实现在 AgentProximityMap.cs:48
        if (!AgentProximityMap.CanSearchRadius(WatchRadius))
        {
            return;
        }

        AgentProximityMap.ProximityMapSearchStruct search =
            AgentProximityMap.BeginSearch(Mission.Current, me.Position.AsVec2, WatchRadius);

        int count = 0;
        while (search.LastFoundAgent != null)
        {
            count++;
            AgentProximityMap.FindNext(Mission.Current, ref search);
        }

        // 超过 8 个就说明半径给大了，考虑调小
    }
}
```

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 类声明 | `public class AgentProximityMap`（`AgentProximityMap.cs:8`） | 无基类、无静态构造、无实例成员。四个 `using` 里 `TaleWorlds.DotNet`（`:2`）提供 `Vec2i`，`TaleWorlds.MountAndBlade.Missions`（`:4`）提供 `AgentReadOnlyList`。**它不是「地图」对象，是一组静态入口。** |
| `ProximityMapSearchStruct` | `public struct ProximityMapSearchStruct`（`AgentProximityMap.cs:10`） | 公开游标。**是值类型**——复制它等于复制一份游标状态。四个字段见下三行。 |
| `SearchStructInternal` | `internal ProximityMapSearchStructInternal SearchStructInternal`（`AgentProximityMap.cs:12`） | native 路径的游标。**`internal`**，外部程序集读不到也改不了，只能整体传 `ref` 给 `FindNext`。 |
| `LoopAllAgents` | `internal bool LoopAllAgents`（`AgentProximityMap.cs:14`） | **决定走哪条路的开关**，在 `AgentProximityMap.cs:62` 赋值。`internal` 字段外部不可见，所以**你无法从外部判断这次搜索是不是已经退化成全场遍历**——这是排查掉帧时的信息盲区。 |
| `LastAgentLoopIndex` | `internal int LastAgentLoopIndex`（`AgentProximityMap.cs:16`） | 退化路径的索引进度，`FindNext` 在 `AgentProximityMap.cs:93` 递增。**同样 `internal`。** |
| `LastFoundAgent` | `public Agent LastFoundAgent { get; internal set; }`（`AgentProximityMap.cs:18`） | **整个 API 唯一的公开数据。** `internal set` —— 你能读不能写。**它为 null 就是搜索结束**，这是唯一的终止判据。 |
| `RefreshLastFoundAgent` | `internal void RefreshLastFoundAgent(Mission mission)`（`AgentProximityMap.cs:20`） | 把内部游标的 `CurrentElementIndex` 翻译成一个 `Agent` 对象并写进 `LastFoundAgent`。**只在 native 路径被调**（`AgentProximityMap.cs:84` 和 `:110`）；退化路径直接赋值，不走这里。 |
| `ProximityMapSearchStructInternal` | `[Serializable] [EngineStruct("Managed_proximity_map_search_struct", false, null)] internal struct ProximityMapSearchStructInternal`（`AgentProximityMap.cs:26-28`） | **跨 native 边界传的结构体。** 特性声明它对应 native 结构 `Managed_proximity_map_search_struct`。字段 `CurrentElementIndex`（`:30`）、`Loc`（`:32`）、`GridMin`（`:34`）、`GridMax`（`:36`）、`SearchPos`（`:38`）、`SearchDistSq`（`:40`）——后四个是网格搜索状态，**只在 native 路径下有意义**。 |
| `GetCurrentAgent` | `internal Agent GetCurrentAgent(Mission mission)`（`AgentProximityMap.cs:42`） | `mission.FindAgentWithIndex(CurrentElementIndex)`。**index 失效时返回的是 null 而不是抛异常**——所以 Agent 中途被移除时，搜索会安静地提前结束。 |
| `CanSearchRadius` | `public static bool CanSearchRadius(float searchRadius)`（`AgentProximityMap.cs:48`） | 纯查询：`searchRadius <= Mission.Current.ProximityMapMaxSearchRadius()`。**注意它读的是 `Mission.Current`，不是形参里的 mission**——传着 A 局的 mission 却问 B 局的半径时，你拿到的永远是 `Mission.Current` 的值。 |
| `BeginSearch` | `public static ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)`（`AgentProximityMap.cs:54`） | **唯一的入口。** 可选的碰撞半径放大在 `AgentProximityMap.cs:58` 生效，**早于**上限比较。返回的 struct 里已经有第一个命中项。 |
| `FindNext` | `public static void FindNext(Mission mission, ref ProximityMapSearchStruct searchStruct)`（`AgentProximityMap.cs:89`） | 推进游标。`ref` 是必需的（值类型）。退化分支自己 `++` 并遍历（`:93-105`），native 分支转交引擎（`:109`）再刷新（`:110`）。 |

## 真实示例

先量一下「我传的半径到底走没走网格」——这是本类最容易白白掉帧的地方：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public static void ReportSearchPath(Mission mission, Vec2 center, float radius)
{
    float limit = mission.ProximityMapMaxSearchRadius();

    MBDebug.Print("radius=" + radius
                + " limit=" + limit
                + " path=" + (radius > limit ? "LINEAR FALLBACK (O(n))" : "native grid"), 0);

    // 和 BeginSearch 内部的判定式完全一致，见 AgentProximityMap.cs:62
}
```

统计「附近有几个人」，并演示漏掉第一项的后果：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public static int CountNearby(Mission mission, Vec2 center, float radius)
{
    AgentProximityMap.ProximityMapSearchStruct search =
        AgentProximityMap.BeginSearch(mission, center, radius);

    // ❌ 错误写法：先推进再干活，最近的那个被永久跳过
    // AgentProximityMap.FindNext(mission, ref search);

    int count = 0;
    while (search.LastFoundAgent != null)
    {
        count++;
        AgentProximityMap.FindNext(mission, ref search);   // ✅ 干活之后才推进
    }
    return count;
}
```

拿「最近的」而不是「全部」——`AgentProximityMap` 不保证距离序，所以别假设第一个最近：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

public static Agent FindNearestAgent(Mission mission, Vec2 center, float radius)
{
    AgentProximityMap.ProximityMapSearchStruct search =
        AgentProximityMap.BeginSearch(mission, center, radius);

    Agent nearest = search.LastFoundAgent;
    float bestSq = nearest != null
        ? nearest.Position.AsVec2.DistanceSquared(center)
        : float.MaxValue;

    while (search.LastFoundAgent != null)
    {
        float d = search.LastFoundAgent.Position.AsVec2.DistanceSquared(center);
        if (d < bestSq)
        {
            bestSq = d;
            nearest = search.LastFoundAgent;
        }
        AgentProximityMap.FindNext(mission, ref search);
    }

    // 退化路径是按 mission.Agents 的下标顺序扫的（AgentProximityMap.cs:72），
    // native 路径是网格遍历 —— 两者都不保证距离序，所以上面那次比较是必须的。
    return nearest;
}
```

## 风险与边界

- **`BeginSearch` 已经返回首个命中项。** 先 `FindNext` 会漏掉它。循环形状必须是「先干活、后推进」。
- **终止判据只有 `LastFoundAgent == null`。** 没有 `HasNext`、没有 `Count`。
- **`ProximityMapSearchStruct` 是值类型。** `FindNext` 的形参是 `ref`，必须反复传**同一个变量**。传副本 = 游标不前进 = 死循环。
- **半径超限静默降级为 O(n) 全场遍历**（`AgentProximityMap.cs:62`）。不报错、不警告。逐帧这么干会掉帧。
- **`CanSearchRadius` 读 `Mission.Current` 而不是形参 mission**（`AgentProximityMap.cs:50`）。跨 mission 提问会拿到错的答案。
- **碰撞半径放大早于上限比较**（`AgentProximityMap.cs:56-58` 在 `:62` 之前）。你以为搜的是 `num`，实际是 `num + 最大碰撞半径 + 1`，而且这可能把搜索推进退化路径。
- **`LoopAllAgents` 与 `LastAgentLoopIndex` 都是 `internal`。** 外部无法判断这次搜索走了哪条路——排查掉帧时只能自己先调 `CanSearchRadius` 预估。
- **不含自身、不含过滤条件。** 它只按位置过滤，不排除 `userAgent`、不排除死亡 Agent、不看阵营。**所有筛选都要你自己在循环里做。**
- **`GetCurrentAgent` 遇到失效 index 返回 null**（`AgentProximityMap.cs:44` 的 `FindAgentWithIndex`）。Agent 中途被移除会让搜索提前静默结束。
- **纯二维。** 形参是 `Vec2`，高度不参与判定。**攻城塔上下两层同一 XY 的两个 Agent 会被算成同一个。**
- **不是地图。** 类名里的 Map 指的是 native 侧的网格加速结构，托管侧没有任何地图数据。

## 依赖关系

- 本类：`AgentProximityMap.cs:8` 类头、`:10`/`:26` 两个嵌套类型、`:20` 游标刷新、`:42` index→Agent、`:48` 半径询问、`:54` 入口、`:62` 路径分流、`:83` native 起始、`:89` 推进
- native 边界：[IMBMission](../../mission/IMBMission/) 的 `ProximityMapBeginSearch`（`IMBMission.cs:318` 带 `[EngineMethod("agent_proximity_map_begin_search", ...)]`）与 `ProximityMapFindNext`（`IMBMission.cs:321`）
- 托管转发：[Mission](../../mission/Mission/) 上的 `ProximityMapBeginSearch`，声明在 `Mission.cs:1704`
- 同一个转发层上的 `ProximityMapMaxSearchRadius`，声明在 `Mission.cs:1709`
- 同一个转发层上的 `ProximityMapFindNext`，声明在 `Mission.cs:1739`
- 四个调用点：`Mission.cs:4816`（通用附近查询）、`Mission.cs:5628`（唯一带碰撞放大）、`LadderQueueManager.cs:344`、`FlagDominationSpawnFrameBehavior.cs:91`
- 返回的 Agent 类型：[Agent](../../mission/Agent/)；列表类型 [AgentReadOnlyList](../AgentReadOnlyList/)（`TaleWorlds.MountAndBlade.Missions`）
- 向量类型：[Vec2](../../core-extra/Vec2/) 与 [Vec2i](../../core-extra/Vec2i/)（`TaleWorlds.DotNet`）
- 另外三个调用点：[LadderQueueManager](../LadderQueueManager/)（`LadderQueueManager.cs:344`）与 [FlagDominationSpawnFrameBehavior](../FlagDominationSpawnFrameBehavior/)（`FlagDominationSpawnFrameBehavior.cs:91`）
- 使用者模式参考：[MissionLogic](../MissionLogic/)（逐帧挂载）
- 桶首页：[mission-ext API 分区](../)