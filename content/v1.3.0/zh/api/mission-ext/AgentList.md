---
title: "AgentList"
description: "名字里带 ReadOnly、实际上继承自 List<Agent> 的三构造壳：Mission 的 _activeAgents 与 _allAgents 就是它，两个字段都是私有、对外暴露的是 AgentReadOnlyList。"
---

# AgentList

**Namespace:** TaleWorlds.MountAndBlade.Missions
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentList : AgentReadOnlyList`
**Base:** `AgentReadOnlyList`
**File:** `TaleWorlds.MountAndBlade/Missions/AgentList.cs`（全文 24 行）

## 概述

`AgentList` 全文只有三个构造器，没有任何成员：

```csharp
public class AgentList : AgentReadOnlyList
{
    public AgentList(int capacity) : base(capacity) { }
    public AgentList(IEnumerable<Agent> collection) : base(collection) { }
    public AgentList(List<Agent> collection) : base(collection) { }
}
```

它存在的意义是给 [Mission](../../mission/Mission) 的两个私有字段一个具名类型。`Mission.cs:2297-2298` 建它们：

```csharp
this._activeAgents = new AgentList(256);
this._allAgents = new AgentList(256);
```

`Mission.cs:7215` / `Mission.cs:7263` 声明它们：

```csharp
private AgentList _activeAgents;
private AgentList _allAgents;
```

## 心智模型

把它当成**「Mission 的两份 Agent 名册」**，然后立刻拆掉名字里的误导。

心智模型只有三块，第一块是本页最重要的一条。

**第一块：它其实完全可变，「ReadOnly」是名字骗人。** 继承链是 `AgentList` → `AgentReadOnlyList` → `MBReadOnlyList<Agent>` → `List<Agent>`（`TaleWorlds.Library/MBReadOnlyList.cs:8`，那一行是 `public class MBReadOnlyList<T> : List<T>`）。链上**没有任何一层覆写 `Add` / `Remove` / `Clear`**，也没有任何 `ReadOnlyCollection` 包装。所以 `AgentList` 实例上的 `Add`、`RemoveAt`、`Clear`、`Sort` 全都是真实可用的 public 方法。

这个事实有个直接后果：`Mission` 的对外属性声明的是**基类**而不是 `AgentList`：

```csharp
// Mission.cs:1806
public AgentReadOnlyList AllAgents { get { return this._allAgents; } }

// Mission.cs:1830
public AgentReadOnlyList Agents { get { return this._activeAgents; } }
```

返回类型是 `AgentReadOnlyList`——**但那也只是命名上的只读**。你拿到它之后可以直接 `Clear()`，然后 [Mission](../../mission/Mission) 内部的遍历（`Mission.cs:542` / `Mission.cs:546` 的 `foreach`）就会看到空名单。没有 `NotSupportedException` 保护，没有 `_isReadOnly` 检查。

**第二块：两份名单的差别只在「活着没有」。** `_allAgents` 在 Agent 创建时被 `Add`（`Mission.cs:3663-3664`），Agent 移除时才 `Remove`（`Mission.cs:2552`）。`_activeAgents` 同样在创建时 `Add`，但 `Agent.cs` 侧的移除路径（`Mission.cs:2598`）会把它摘掉。任务结束时（`Mission.cs:561-562`）和重置时（`Mission.cs:3416-3417`）两份一起 `Clear`。所以：

- `Mission.AllAgents` = 「这个任务里存在过的 Agent」
- `Mission.Agents` = 「这个任务里当前活着的 Agent」

这两个属性在战斗中途**长度不同**，而它们只是同一个类型的两个实例。

**第三块：容量 256 是初始值，不是上限。** `List<T>` 的容量只是预分配，改用 `Add` 超了会自动扩容。所以不要因为「容量 256」就假设一个任务最多 256 人。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentList(int)` | `public AgentList(int capacity) : base(capacity)` | 预分配容量的构造。`Mission` 用 `new AgentList(256)` 建两份名册。 |
| `AgentList(IEnumerable<Agent>)` | `public AgentList(IEnumerable<Agent> collection) : base(collection)` | 从任意序列拷贝构造。与下一个重载构成**二义性陷阱**，见风险段。 |
| `AgentList(List<Agent>)` | `public AgentList(List<Agent> collection) : base(collection)` | 从 `List<Agent>` 拷贝构造。**这个重载不是多余的**——`List<Agent>` 同时满足上面那个参数类型，不写它的话实参会走 `IEnumerable` 重载；写出它才能走更精确的 `List<T>` 版本。 |

类里**没有声明任何成员**——没有属性、没有方法、没有索引器覆写。全部能力来自 `List<Agent>`。

## 真实示例

安全的读法——只遍历，不动结构：

```csharp
using TaleWorlds.MountAndBlade;

public static int CountLivingHumans(Mission mission)
{
    int humans = 0;
    // Agents 的静态类型是 AgentReadOnlyList，但运行时对象是 AgentList（可变）
    foreach (Agent agent in mission.Agents)
    {
        if (agent.IsHuman && agent.IsActive())
        {
            humans++;
        }
    }
    return humans;
}
```

自己造一份独立副本用于筛选——这是「需要一个可变容器做中间结果」时的正解（注意用的是 `Mission.AllAgents` 而非 `Agents`，这样不会漏掉已经阵亡但仍在场上的单位）：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public static List<Agent> CollectRangedOnSide(Mission mission, BattleSideEnum side)
{
    AgentList buffer = new AgentList(mission.AllAgents.Count);
    foreach (Agent agent in mission.AllAgents)
    {
        if (agent.IsHuman && agent.Team != null && agent.Team.Side == side && agent.WieldedWeapon.IsRangedWeapon)
        {
            buffer.Add(agent);
        }
    }
    return new List<Agent>(buffer);
}
```

传 `List<Agent>` 时会命中哪个重载，可以这样验证并明确用命名参数之外的方式约束——**最稳的做法是先把变量声明成 `IEnumerable<Agent>` 之外的精确类型**：

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public static AgentList CopyFromList(List<Agent> source)
{
    // 静态类型是 List<Agent>，精确命中 AgentList(List<Agent>) 重载
    return new AgentList(source);
}
```

## 风险与边界

- **「ReadOnly」不成立。** `MBReadOnlyList<T>` 直接继承 `List<T>`，链上没有任何写保护。`mission.Agents.Clear()` 会编译通过、会执行成功、会直接破坏 [Mission](../../mission/Mission) 的内部遍历。**永远把它当只读用，靠自律而不是靠类型。**
- **`AgentList(IEnumerable<Agent>)` 和 `AgentList(List<Agent>)` 二义。** `List<Agent>` 同时匹配两个重载，C# 选**更具体的那个**（`List<Agent>`），所以行为上没问题；但如果你重构时删掉后者，同一份调用会静默改走 `IEnumerable` 版本。这两个构造器是刻意成对的，别只留一个。
- **`Mission.AllAgents` / `Mission.Agents` 返回的是基类静态类型。** 声明类型是 `AgentReadOnlyList`，但运行时对象是 `AgentList`——所以你能写 `.Clear()`。**这是本类型最容易造成事故的一点**，因为「返回类型看起来只读」和「运行时完全可变」同时成立。
- **不要在遍历时增删。** `Mission.cs:542` / `Mission.cs:546` 是 `foreach (Agent agent in this._activeAgents)`。你在回调里 `Remove` 掉某个 Agent 会让这个枚举器失效，`List<T>` 的 foreach 会抛 `InvalidOperationException`。
- **两个字段都是 private，你不该试图 new 一个替上去。** `AgentList` 是 public 是因为类型本身要可见，但替换 Mission 的名单没有任何入口。
- **容量 256 不是上限。** 超了自动扩容，别按 256 做任何假设。
- **命名空间是 `TaleWorlds.MountAndBlade.Missions`，不是 `TaleWorlds.MountAndBlade`。** 需要 `using TaleWorlds.MountAndBlade.Missions;`，与 `Agent` 本体不同。
- **它只装 Agent，没有任何 Agent 特有的行为。** 没有按队伍/存活状态过滤的辅助方法——那些筛选全在 [Mission](../../mission/Mission) 上（如 `GetNearbyAgents` / `GetNearbyAllyAgents`）。

## 怎么用

### 怎么拿到它

`public class AgentList : AgentReadOnlyList`（`TaleWorlds.MountAndBlade/Missions/AgentList.cs:7`），三个构造器、无成员。**你几乎不需要自己 new 它**——`Mission` 在建立时已经 `new AgentList(256)` 造了两份名册，通过 `Mission.Agents` 与 `Mission.AllAgents` 交给你。真正该 new 的是它作为**收集器**的用法，这和 `Mission` 自己的用法是同一个形状。

### 典型用法

上面「真实示例」两段都是「从名册里筛出一份普通 `List<Agent>` 副本」。反过来用它才是它作为 `MBList` 同族的本职：当收集器。下面这段把本局接过的玩家累积起来，`Mission` 内部两份名册用的就是这个容量预分配形状：

```csharp
public class MySeenPlayerTracker : MissionBehavior
{
    // Mission 自己就是 new AgentList(256) 建名册；你照同一形状造一份收集器
    private readonly AgentList _seen = new AgentList(64);

    public override void OnAgentControllerChanged(Agent agent, AgentControllerType oldController)
    {
        if (agent == null || agent.Controller != AgentControllerType.Player)
        {
            return;
        }
        // Contains 走的是继承来的 List<T>，O(n)；这份名册很小，不必自己维护 HashSet
        if (this._seen.Contains(agent))
        {
            return;
        }
        this._seen.Add(agent);
    }

    public int SeenCount()
    {
        return this._seen.Count;
    }
}
```

与上面「真实示例」的差别：那两段的 `AgentList` 都是**中转容器**——造出来只是为了把筛选结果装进去，最后立刻 `new List<Agent>(buffer)` 拷走丢掉；这里它是**长期持有的累积器**，只在构造器里用一次容量预分配，之后靠 `Add` / `Contains` 增量维护，并用 `Count` 直接回答查询。

### 最容易踩的坑

**「ReadOnly」不成立。** `MBReadOnlyList<T>` 直接继承 `List<T>`，链上没有任何写保护。`mission.Agents.Clear()` 会编译通过、会执行成功、会直接破坏 [Mission](../../mission/Mission) 的内部遍历。**永远把它当只读用，靠自律而不是靠类型。**

## 跨版本提示

`AgentList` 的三个构造器和 `AgentReadOnlyList` 的三个构造器在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 逐字一致，`MBReadOnlyList<T> : List<T>` 这条继承关系也从未变过。也就是说：**这个「假只读」在所有版本里都成立**，你的防御性代码要一直写下去。

变化点在**持有方**：`Mission._activeAgents` / `_allAgents` 的容量常量（1.3.0 是 256）和增删时机在后续版本里被调整过（例如增援系统的引入会影响 `_allAgents` 的增长节奏）。这不影响 `AgentList` 本身的 API，但会影响你对名单长度的预期。

真正要盯的是 `MBReadOnlyList<T>` 的基类。如果哪天 TaleWorlds 把它改成真正继承 `IReadOnlyList<T>`，**你那些「运行时可变」的假设会立刻变成 `NotSupportedException`**——写在 mod 里的清空操作会在升级后崩。当前版本下这不会发生。

## 依赖关系

- 继承链：[AgentReadOnlyList](../AgentReadOnlyList) → `MBReadOnlyList<Agent>` → `List<Agent>`（`TaleWorlds.Library`）
- 持有方：[Mission](../../mission/Mission) 的私有 `_activeAgents` / `_allAgents`，对外以 `Agents` / `AllAgents` 两个属性暴露
- 元素类型：[Agent](../../mission/Agent)，[Mission](../../mission/Mission) 提供基于这两个名单的筛选方法（`GetNearbyAgents` / `GetNearbyAllyAgents` 等）
- 平行结构：[CorpseAgentInfos](../CorpseAgentInfo) 一族的 `MBReadOnlyList<T>` 承载同理，`MBReadOnlyList` 的命名问题在整个任务模块里是系统性的
- 桶首页：[mission-ext API 分区](../)