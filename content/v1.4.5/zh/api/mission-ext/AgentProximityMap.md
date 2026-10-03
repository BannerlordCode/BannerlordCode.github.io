---
title: "AgentProximityMap"
description: "半径查询的游标工具类：BeginSearch 起一个搜索句柄、FindNext 前进、LastFoundAgent 给结果，小半径走 native 邻近图、超半径退化为全表遍历。"
---

# AgentProximityMap

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentProximityMap`
**Base:** 无（静态工具类形态，但没有 `static class`）
**File:** `TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## 概述

`AgentProximityMap` 提供「找出离某点一定半径内所有 [Agent](../../mission/Agent/)」的**游标式**查询。它不缓存任何东西，查询状态全部装在返回值 `ProximityMapSearchStruct` 里——这是一个 `struct`，由 `BeginSearch` 产出、由 `FindNext` 通过 `ref` 推进。调用方读它的 `LastFoundAgent`，非 null 就处理，处理完调一次 `FindNext` 拿下一个。

它内部有两条完全不同的实现路径，由 `BeginSearch` 里的一个判断分流：搜索半径不超过 `mission.ProximityMapMaxSearchRadius()` 时走 **native 侧的邻近加速图**（`mission.ProximityMapBeginSearch` / `mission.ProximityMapFindNext`，两者在 `Mission.cs` 上都是 `internal`）；超半径则**退化成线性遍历 `mission.Agents`**。`LoopAllAgents` 这个 `internal` 字段标记当前走的是哪条。

## 心智模型

把它当成**「不是 LINQ 的空间查询」**，四个推论：

第一，**必须 `ref` 传递并用 `while (LastFoundAgent != null)` 循环**，这是唯一正确用法。引擎自己的写法在 `Mission.cs:4816` 的 `IsPlayerCloseToAnEnemy`、`FlagDominationSpawnFrameBehavior.cs:91`、`LadderQueueManager.cs:344` 三处，形状完全一致。

第二，**搜索半径过大不会报错，只会静默降级**。超半径时 `result.LoopAllAgents = true`，走 C# 端遍历 `mission.Agents` 逐个 `DistanceSquared` 比较。功能正确但 O(n)，200 人战场每帧查几次就够卡了。

第三，**`CanSearchRadius` 有个签名与实现不一致的坑**：形参是 `searchRadius`，实现里用的却是 `Mission.Current.ProximityMapMaxSearchRadius()`——**它读的是全局当前任务，不接收 mission 参数**。在没有当前任务（任务外、主菜单）时 `Mission.Current` 为 null，直接 NRE。想在指定任务上判断，必须自己调 `mission.ProximityMapMaxSearchRadius()`，可那是 `internal`。

第四，**`ProximityMapSearchStruct` 是 struct，但它的字段大多是 `internal`**。外部能用的只有 `LastFoundAgent`（`public` getter / `internal` setter）。`SearchStructInternal` / `LoopAllAgents` / `LastAgentLoopIndex` 全部 `internal`，所以**不能缓存一个句柄跨任务复用**——里面的 native 状态指针指向发起查询时的任务。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CanSearchRadius` | `public static bool CanSearchRadius(float searchRadius)` | 判断给定半径是否落在 native 邻近图的覆盖范围内（`searchRadius <= mission.ProximityMapMaxSearchRadius()`）。用于在设计查询前决定要不要缩小半径。**注意它内部用的是 `Mission.Current` 而不是形参**——任务外调用 NRE。 |
| `BeginSearch` | `public static ProximityMapSearchStruct BeginSearch(Mission mission, Vec2 searchPos, float searchRadius, bool extendRangeByBiggestAgentCollisionPadding = false)` | 起一次查询。`extendRangeByBiggestAgentCollisionPadding` 为 true 时半径会加上 `mission.GetBiggestAgentCollisionPadding() + 1f`——用来把「最胖的 Agent 的碰撞半径」算进去，避免漏掉紧贴着边界的大块头。返回的句柄已经把第一个命中项填好，`LastFoundAgent` 非 null 就说明有结果。 |
| `FindNext` | `public static void FindNext(Mission mission, ref ProximityMapSearchStruct searchStruct)` | 把句柄推进到下一个命中项。native 路径调 `mission.ProximityMapFindNext(ref SearchStructInternal)` 再 `RefreshLastFoundAgent`；全表路径自己递增 `LastAgentLoopIndex` 并继续扫。**遍历结束的信号是 `LastFoundAgent` 变成 null**，所以循环条件永远写 `!= null` 而不是 `do/while`。 |
| `ProximityMapSearchStruct.LastFoundAgent` | `public Agent LastFoundAgent { get; internal set; }` | 唯一的公开数据面。**setter 是 `internal`**，外部只能读不能写——这条约束正是「必须走 `FindNext`」的强制机制。类型是 `Agent`，不是索引。 |
| `ProximityMapSearchStruct` | `public struct ProximityMapSearchStruct` | 游标句柄。内含 `internal ProximityMapSearchStructInternal SearchStructInternal`（native 侧游标）、`internal bool LoopAllAgents`、`internal int LastAgentLoopIndex`。`internal void RefreshLastFoundAgent(Mission mission)` 用 `SearchStructInternal.GetCurrentAgent(mission)` 刷新公开面，而 `GetCurrentAgent` 内部是 `mission.FindAgentWithIndex(CurrentElementIndex)`。 |

## 真实示例

标准三段式——`Mission.IsPlayerCloseToAnEnemy`（`Mission.cs:4809`）的原样形状：

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

Mission mission = Mission.Current;
Agent mainAgent = mission.MainAgent;
if (mainAgent == null)
{
    return;
}

Vec3 position = mainAgent.Position;
float radius = 5f;
AgentProximityMap.ProximityMapSearchStruct searchStruct = AgentProximityMap.BeginSearch(mission, position.AsVec2, radius);
while (searchStruct.LastFoundAgent != null)
{
    Agent found = searchStruct.LastFoundAgent;
    if (found != mainAgent && found.Position.DistanceSquared(position) <= radius * radius)
    {
        Debug.Print("enemy near: index=" + found.Index + " health=" + found.Health, 0);
    }
    AgentProximityMap.FindNext(mission, ref searchStruct);
}
```

统计一定半径内的敌方数量——用 `extendRangeByBiggestAgentCollisionPadding` 把大块头的碰撞半径算进去：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.MountAndBlade.Missions;

Mission mission = Mission.Current;
Agent mainAgent = mission.MainAgent;
Team enemyTeam = mission.PlayerEnemyTeam;
AgentProximityMap.ProximityMapSearchStruct searchStruct = AgentProximityMap.BeginSearch(
    mission, mainAgent.Position.AsVec2, 8f, extendRangeByBiggestAgentCollisionPadding: true);
int closeEnemies = 0;
while (searchStruct.LastFoundAgent != null)
{
    Agent found = searchStruct.LastFoundAgent;
    if (found != mainAgent && found.Team == enemyTeam && found.IsEnemyOf(mainAgent))
    {
        closeEnemies++;
    }
    AgentProximityMap.FindNext(mission, ref searchStruct);
}
Debug.Print("enemies within 8m = " + closeEnemies, 0);
```

先判断半径是否会退化成全表遍历——注意 `CanSearchRadius` 读的是 `Mission.Current`，所以只能在任务内调用：

```csharp
using TaleWorlds.MountAndBlade;

if (Mission.Current == null)
{
    return;
}
if (!AgentProximityMap.CanSearchRadius(3f))
{
    Debug.Print("radius 3m exceeds the native proximity map, the search will loop all agents", 0);
}
```

在没有 `Mission.Current` 的环境里自己做一次等价判断（`Mission.ProximityMapMaxSearchRadius` 是 `internal`，modder 只能靠 `CanSearchRadius`）：

```csharp
using TaleWorlds.MountAndBlade;

// Mission.ProximityMapMaxSearchRadius() 是 internal，外部拿不到；只能用 public 的 CanSearchRadius
if (Mission.Current != null && !AgentProximityMap.CanSearchRadius(20f))
{
    Debug.Print("20m is beyond the fast path, throttle the call site yourself", 0);
}
```

## 风险与边界

- **过大的半径静默降级成 O(n)。** `LoopAllAgents` 为 true 时是 C# 端线性扫 `mission.Agents`。功能没错，但每帧调用会明显掉帧。
- **`CanSearchRadius` 用 `Mission.Current` 而不是形参。** 只有一个参数、没有 mission 参数。任务外调用 NRE；多任务场景下它判断的是当前任务而不是你手里的那个任务。
- **句柄不能跨任务、不能缓存。** `SearchStructInternal` 里是 native 侧的索引与搜索参数，`internal` 字段外部不可见也无法重置。用完就丢。
- **`ProximityMapSearchStruct` 是 struct，`FindNext` 走 `ref`。** 必须声明为局部变量并用 `ref` 传，不能写成 `foreach` 的迭代变量或属性——`ref` 要求一个真正的存储位置。
- **`LastFoundAgent` 的 setter 是 `internal`。** 外部无法手动结束遍历——唯一的终止条件是它自己变 null。
- **内部 struct 是 `internal`。** `ProximityMapSearchStructInternal` 带 `[EngineStruct("Managed_proximity_map_search_struct")]` 但类型本身 `internal`，modder 完全碰不到，也无法自己构造合法句柄。
- **结果是 `Agent` 引用，不是索引。** Agent 在遍历过程中被移除时，拿到的是当时的引用——中间态要自己判 `IsActive()`。
- **不做过滤。** 它只按距离返回，敌我、存活、状态一律由调用方自己判（引擎的三处用法都在循环里做二次筛选）。

## 依赖关系

- 查询状态：`ProximityMapSearchStruct`（本文件的嵌套 `public struct`）与其 `internal` 的 `ProximityMapSearchStructInternal`（带 `[EngineStruct("Managed_proximity_map_search_struct")]` 标记，直接过 native）
- native 边界：[Mission](../../mission/Mission/) 的 `internal ProximityMapBeginSearch` / `internal ProximityMapFindNext` / `internal ProximityMapMaxSearchRadius`（`Mission.cs:1704` / `:1709` / `:1739`），以及 public 的 `GetBiggestAgentCollisionPadding`（`:1714`）；再往下是 `IMBMission` 的同名 native 方法
- 结果类型：[Agent](../../mission/Agent/) 的 `Position` / `Index` / `Health` / `IsActive()`，以及 `Mission.FindAgentWithIndex(int)`（`:5138`）把 native 索引换回托管对象
- 容器：`AgentReadOnlyList<Agent>`（`mission.Agents`，`Mission.cs:1381`）是全表路径遍历的对象
- 官方用法样例：`Mission.IsPlayerCloseToAnEnemy`（`Mission.cs:4809`）、`FlagDominationSpawnFrameBehavior.cs:91`、`LadderQueueManager.cs:344`
- 平行方案：`[AgentController](../AgentController/)` 与 [AgentComponent](../AgentComponent/) 管的是行为扩展，本类管的是空间查询，两者无关
- 桶首页：[mission-ext API 分区](../)
