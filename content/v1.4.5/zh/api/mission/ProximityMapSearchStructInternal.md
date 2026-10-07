---
title: "ProximityMapSearchStructInternal"
description: "邻近格搜索的游标与边界四元组：五个可写字段 + 一个把索引换回 Agent 的方法——注意 SearchDistSq 是【平方】距离，而 GetCurrentAgent 会走全任务线性查找。"
---

# ProximityMapSearchStructInternal

**Namespace:** `TaleWorlds.MountAndBlade`（嵌套在 `AgentProximityMap` 内）
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal struct ProximityMapSearchStructInternal`（嵌套于 `AgentProximityMap`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentProximityMap.cs`

## 概述

`ProximityMapSearchStructInternal` 是 19 行、6 个成员的可变结构体，声明在 `AgentProximityMap.cs:28-46`。它装的是一次邻近格搜索的**游标与边界**：`CurrentElementIndex`（`:30`）、`Loc`（`:32`）、`GridMin` / `GridMax`（`:34`/`:36`）、`SearchPos`（`:38`）、`SearchDistSq`（`:40`），以及一个把索引换回 Agent 的方法 `GetCurrentAgent`（`:42-45`）。

它被外层的 `ProximityMapSearchStruct` 包着 —— 后者还多两个字段 `LoopAllAgents` 与 `LastAgentLoopIndex` / `LastFoundAgent`（见 `:60`-`:75` 的 `BeginSearch` 内部用法）。**本结构体就是那个更大结构体里的一个「网格搜索」子块**（`result.SearchStructInternal`）。

## 心智模型

把它当成**「一个可变的搜索状态机」**。三条推论：

第一,**五个字段全是可写的，没有只读属性。** 它是 `struct` 而非 `class`，所以 `SearchPos = searchPos`（`AgentProximityMap.cs:65`）这类赋值是**直接改内存**，不经过任何 setter/校验。**这与 [AgentHelper](../AgentHelper/) 那种「内部只读 + 外部方法」的风格正好相反。**

第二,`SearchDistSq` 存的是**平方距离**。`:66` 写的是 `searchRadius * searchRadius`，`:73` 比较的是 `DistanceSquared(searchPos)`。**所以读这个字段时不要再平方一次** —— 而名字里的 `Sq` 后缀就是唯一的提示。

第三,`GetCurrentAgent` 走的是**全任务线性查找**。`:44` 是 `mission.FindAgentWithIndex(CurrentElementIndex)` —— **它不是从网格里直接取，而是按索引回任务查。** 所以每前进一格都要付一次查找成本。**我没有读 `FindAgentWithIndex` 的实现**，因此不断言它是 O(1) 哈希还是 O(n) 扫描。

## 如何使用

**怎么拿到它**：**只能由 `AgentProximityMap` 的搜索方法填充**，mod 编译期拿不到（`internal struct` + 嵌套）。

字段与它们在 `BeginSearch`（`AgentProximityMap.cs:54-75`）里被怎么填：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// :60  ProximityMapSearchStruct result = default(ProximityMapSearchStruct);   ← 整块清零
// :62  result.LoopAllAgents = searchRadius > num;                              半径超上限时退化为遍历全部
// :65  result.SearchStructInternal.SearchPos   = searchPos;                     搜索中心
// :66  result.SearchStructInternal.SearchDistSq = searchRadius * searchRadius; ★平方，不是半径
// :70  while (agents.Count > result.LastAgentLoopIndex)
// :73      agent.Position.AsVec2.DistanceSquared(searchPos) <= result.SearchStructInternal.SearchDistSq
//            ↑ 比较侧也是平方，两边配平
Debug.Print("SearchDistSq 是平方：填时乘、比较时不乘", 0);
```

`extendRangeByBiggestAgentPadding` 那个可选参数的实际效果：

```csharp
// :56-59
//   if (extendRangeByBiggestAgentPadding)
//       searchRadius += mission.GetBiggestAgentCollisionPadding() + 1f;
// 也就是说：搜「谁在我附近」时，可能把半径撑大到【任务里最胖那个 Agent 的碰撞半径 + 1】
// 而 CanSearchRadius（:48-52）只判 searchRadius <= mission.ProximityMapMaxSearchRadius()
//   ★ 两者检查的时机不同：CanSearchRadius 在 BeginSearch 之外，而 :58 的撑大在 BeginSearch 之内
Debug.Print("BeginSearch 内部会撑大半径，而 CanSearchRadius 检查的是撑大之前的值", 0);
```

**用它最容易踩的一条**：**`extendRangeByBiggestAgentPadding: true` 会让搜索半径悄悄变大，而 `CanSearchRadius` 检查的是变大之前的值。** `:58` 的 `searchRadius += GetBiggestAgentCollisionPadding() + 1f` 发生在 `BeginSearch` **内部**，而 `CanSearchRadius`（`:48-52`）是独立方法。**所以「先 `CanSearchRadius(50f)` 通过、再 `BeginSearch(…, 50f, true)`」并不能保证搜索范围仍在上限内** —— 撑大后的实际半径可能超过 `ProximityMapMaxSearchRadius()`，此时 `:62` 的 `LoopAllAgents` 会变成 true，退化成遍历全部 Agent（`result.LoopAllAgents`）。**性能从邻近格查找掉到全量遍历，而没有任何告警。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CurrentElementIndex` | `internal int CurrentElementIndex` | **当前遍历到的 Agent 索引**（`:30`）。它是 `GetCurrentAgent`（`:44`）的唯一输入。**`default(ProximityMapSearchStruct)` 之后是 0** —— 所以一个未初始化的结构体第一次调 `GetCurrentAgent` 会去查索引 0 的 Agent。 |
| `Loc` | `internal Vec2i Loc` | 当前格子坐标（`:32`）。**`Vec2i`（TaleWorlds.Core）而非 `Vec3` —— 搜索是二维的。** |
| `GridMin` / `GridMax` | `internal Vec2i GridMin` / `GridMax` | 搜索范围在网格坐标下的两个角（`:34`/`:36`）。**`default` 之后都是 `(0,0)`**，所以未初始化的结构体边界是空的。 |
| `SearchPos` | `internal Vec2 SearchPos` | 搜索中心的世界坐标（`:38`），`BeginSearch` 的 `:65` 写入。**`Vec2` 不是 `Vec3`**，所以高度不参与。 |
| `SearchDistSq` | `internal float SearchDistSq` | **平方半径**（`:40`）。`:66` 写入 `searchRadius * searchRadius`，`:73` 与 `DistanceSquared` 比较。**名字里的 `Sq` 是唯一提示，读它时不要再平方。** |
| `GetCurrentAgent` | `internal Agent GetCurrentAgent(Mission mission)` | **唯一的成员方法（`:42-45`）。** `:44` 是 `mission.FindAgentWithIndex(CurrentElementIndex)`。**它不接收也不使用本结构体的其他字段**，所以你可以传一个与 `CurrentElementIndex` 不对应的 `mission`。**`mission` 无 null 检查。** |

## 真实示例

`default` 之后五个字段各是什么（这一条决定「忘记初始化」的表现）：

```csharp
// default(ProximityMapSearchStruct) 之后：
//   CurrentElementIndex = 0     -> GetCurrentAgent 会去查索引 0 的 Agent
//   Loc = (0, 0)                Vec2i 默认
//   GridMin = (0, 0)            Vec2i 默认
//   GridMax = (0, 0)            Vec2i 默认
//   SearchPos = (0, 0)          Vec2 默认
//   SearchDistSq = 0f           -> 与任何 DistanceSquared 比较都是 <= 0 成立（除非距离恰为 0）
// 而 AgentProximityMap.cs:60 正是用 default(ProximityMapSearchStruct) 起手，然后逐个覆盖
Debug.Print("default 之后边界全空、索引为 0、DistSq 为 0", 0);
```

`LoopAllAgents` 的退化条件（本结构体所在的更大结构体上）：

```csharp
// :61  float num = mission.ProximityMapMaxSearchRadius();
// :62  result.LoopAllAgents = searchRadius > num;
// :63-68  若为 true，走 :65/:66/:67/:68 的初始化并直接进 :70 的 while 遍历全部 agents
// :69      AgentReadOnlyList agents = mission.Agents;
// :70-75   while (agents.Count > result.LastAgentLoopIndex) { …按 DistanceSquared 过滤… }
// 而 :58 的 extendRangeByBiggestAgentCollisionPadding 会在 :62 之前就把 searchRadius 撑大
// => 撑大后可能越过 :61 的上限，:62 变 true，搜索从「网格邻域」退化为「全量遍历」
Debug.Print("半径被撑大越过上限 => 静默退化为全量遍历", 0);
```

## 风险与边界

- **`internal struct` 嵌套类型，编译期不可引用。** `:28`。
- **五个字段全可写、无校验。** `struct` + 公开字段，赋值是直接写内存。
- **`SearchDistSq` 是平方。** `:40`/`:66`/`:73`。**再平方一次会得到四次方。**
- **`GetCurrentAgent` 走 `mission.FindAgentWithIndex`。** `:44`。**我没有读它的实现**，故不断言它是否 O(1)。
- **`mission` 无 null 检查。** `:44` 直接解引用。
- **`default` 之后边界为空、索引为 0。** 所以忘记初始化不会立刻崩，而是**只搜到（或错误地命中）索引 0 的 Agent**。
- **`extendRangeByBiggestAgentPadding` 会撑大半径且时机在上限检查之外。** `:56-59` 与 `:61-62` 的先后。**这正是「最容易踩的一条」。**
- **`Vec2i` / `Vec2` 而非 `Vec3`。** `:32`/`:34`/`:36`/`:38`。**搜索是严格二维的**，跨楼层的 Agent 不在这一层里。**我没有读网格构建代码**，故不断言它如何处理多层建筑。
- **本结构体是更大结构的子块。** 外层 `ProximityMapSearchStruct` 还有 `LoopAllAgents` / `LastAgentLoopIndex` / `LastFoundAgent`，**它们不在本类型里**。
- **`CanSearchRadius`（`:48-52`）是独立的 `public static`。** 它读 `Mission.Current.ProximityMapMaxSearchRadius()` —— **静态依赖 `Mission.Current`**，不在任务里会空引用。

## 依赖关系

- 宿主：`bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentProximityMap.cs:28-46`（本类型）、`:48-52`（`CanSearchRadius`）、`:54-75`（`BeginSearch`，它填充本结构体）
- 载荷：[Vec2i](../../core-extra/Vec2i/)、[Vec2](../../core-extra/Vec2/)、[Agent](../Agent/)、[Mission](../Mission/)（`FindAgentWithIndex`、`Agents`、`ProximityMapMaxSearchRadius`、`GetBiggestAgentCollisionPadding`）、`AgentReadOnlyList`
- 同桶：[AgentHelper](../AgentHelper/)、[ItemType](../ItemType/)、[HitType](../HitType/)、[PlayerTypes](../PlayerTypes/)、[MBNetworkPeer](../MBNetworkPeer/)、[DynamicNavmeshLocalIds](../DynamicNavmeshLocalIds/)、[PerkAssemblyCollection](../PerkAssemblyCollection/)、[TacticOption](../TacticOption/)
- 桶首页：[mission API 分区](../)