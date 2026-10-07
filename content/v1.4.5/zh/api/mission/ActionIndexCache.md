---
title: "ActionIndexCache"
description: "把原生动画名解析成的整数动作码包成 readonly struct：约 210 个预烘焙的静态 act_* 字段，加上一个公开构造不到的 Index，让 Agent 的动作通道能按整数比对和播放。"
---

# ActionIndexCache

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public readonly struct ActionIndexCache : IEquatable<ActionIndexCache>`
**Base:** `IEquatable<ActionIndexCache>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ActionIndexCache.cs`

## 概述

原生动画系统里，一个动作是用字符串名（如 `act_idle_unarmed_1`）在 C++ 侧登记的，但每帧都拿字符串去比对太慢。`ActionIndexCache` 就是在托管侧做一次名称→整数的翻译，并把结果包成一个 `readonly struct`：整个类只有一个数据成员 `Index`（`ActionIndexCache.cs:437`，`public int Index { get; }`），以及约 210 个在静态构造里预先解析好的 `act_*` 字段（`ActionIndexCache.cs:7` 到 `:434`）。

翻译本身发生在 `private ActionIndexCache(string name)`（`:445`），它调用 `MBAnimation.GetActionCodeWithName(name)`；`MBAnimation.cs:124` 是公开静态入口，`:128` 才真正转到 `MBAPI.IMBAnimation.GetActionCodeWithName(name)`，也就是 `IMBAnimation.cs:66` 声明的那个原生方法。

消费侧全在 [Agent](../Agent/) 上：`Agent.SetActionChannel(int, in ActionIndexCache, ...)`（`Agent.cs:2368`）吃它来播动画，`Agent.GetCurrentAction(int)`（`Agent.cs:2748`）返回它来查当前动作，`Agent.MakeDead(bool, ActionIndexCache, int)`（`Agent.cs:4663`）用它选死亡动作。网络侧 `MakeAgentDead` 消息把它当载荷传输，收到时用内部构造 `new ActionIndexCache(GameNetworkMessage.ReadIntFromPacket(...))`（`MakeAgentDead.cs:34`）直接从一个 int 复原——**这就是为什么它是 struct 而不是 class：网络上只需要传 4 个字节。**

## 心智模型

把它当成**「动画名的编译期常量表」而不是「动画对象」**。四条推论：

第一，**它没有任何行为**。类里没有一个方法会改变动画系统的状态。`SetActionChannel` 收下它之后，真正干活的是 native 侧；`ActionIndexCache` 全程只是被传递的一个整数。

第二，**`act_*` 字段是在类型首次被触碰时一次性解析的**。它们是 `static readonly`（`:7`–`:434`），赋值全部发生在静态构造 `static ActionIndexCache()`（`:492`）里。这意味着 `ActionIndexCache.act_idle_unarmed_1` 第一次被读时会触发整个表的解析，包含两百多次跨 P/Invoke 进 native 的调用。**在静态初始化敏感的地方（另一个类型的静态构造里）读 `act_*` 有触发类型初始化死锁的风险。**

第三，**`act_none` 是用 `new ActionIndexCache(-1)` 造出来的，不是 `Create` 出来的**（`:494`）。因为 `Create` 遇到空名返回的也是 `act_none`，所以 `-1` 是「无动作」的哨兵值。`GetName()`（`:452`）专门判 `Index != -1`，为假时硬编码返回字符串 `"act_none"`。**`GetName()` 永远返回非空字符串。**

第四，**`Equals(object)` 里有一个没有防护的拆箱转换**。`:459` 直接写 `return Equals((ActionIndexCache)obj);`。如果传进来的是 `null` 或别的类型，这里抛的是 `InvalidCastException` 而不是返回 `false`——**这是全类唯一一处「看起来像标准 Equals、实际不满足 Equals 契约」的地方**，`obj.Equals(别的类型)` 或 `obj.Equals(null)` 都会炸。

边界条件还有两条值得记住：字段名和它缓存的原生名**不一定相同**——`act_raid_jump` 这个字段在 `:708` 实际执行的是 `Create("act_raid_jump_1")`，所以它的 `GetName()` 返回的是 `"act_raid_jump_1"`；以及 `Create` 对 `null`/空白字符串走 `act_none`，但对拼错的非空名字**不报错**，只是让 `Index` 拿到一个无效码，之后播放时无声失败。

## 如何使用

**怎么拿到它**：三条路，按推荐顺序。

1. **直接用静态字段**（绝大多数情况）。`ActionIndexCache.act_idle_unarmed_1`，定义在 `ActionIndexCache.cs:431`。这是唯一零成本、不触发运行时查找的用法。
2. **按名字解析你自己的动作**：`ActionIndexCache.Create(string actName)`（`:433`）。用于 mod 自带的 action 定义文件里出现、但表里没有的 `act_*`。
3. **从一个已有 int 复原**：`internal ActionIndexCache(int actionIndex)`（`:449`）。**`internal` 意味着你的 mod 编译不过去**——只有游戏自己的程序集能用（例如 `MakeAgentDead.cs:34` 收包时）。想从网络包自己造一个，只能走 `Create` 重新按名字解析。

**跑得通的片段**：给 Agent 换动作通道，用 `in` 传参——`SetActionChannel` 的第二个形参声明成 `in ActionIndexCache`，调用处也必须写 `in`。

```csharp
using TaleWorlds.MountAndBlade;

// 第 1 通道换成站立待机；动作来自 ActionIndexCache.cs:423 的预烘焙字段
public void ForceIdle(Agent agent)
{
    agent.SetActionChannel(1, in ActionIndexCache.act_stand_1, true);
}

// 按名字解析一个表里没有的动作
public static ActionIndexCache ResolveCustomAct()
{
    ActionIndexCache cache = ActionIndexCache.Create("act_my_mod_custom_strike");
    Debug.Print("resolved index = " + cache.Index + " name = " + cache.GetName(), 0);
    return cache;
}
```

**最容易踩的一条**：不要写 `if (action == ActionIndexCache.act_none)` 然后指望空值安全。`==` 走的是 `operator ==`（`:465`），它比的是 `Index`；而如果 `action` 是通过 `default(ActionIndexCache)` 得到的，**它的 `Index` 是 0 不是 -1**，不等于 `act_none`。想要「无动作」语义就必须显式写 `ActionIndexCache.act_none`，因为只有它才是 `-1`。

## 关键成员

整个类只有九类成员。约 210 个 `act_*` 字段按语义分组列在下面，每组列出源码里能查到的代表行号，不逐个罗列全部 210 行。

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Index` | `public int Index { get; }`（`:437`） | 唯一的真实数据：一个 native 动作码。`-1` 是 `act_none` 的哨兵值，`0` 是 `default` 的值——两者语义不同，别混。 |
| `Create` | `public static ActionIndexCache Create(string actName)`（`:433`） | 唯一公开的工厂。空/空白名返回 `act_none`；非空名走 `MBAnimation.GetActionCodeWithName`（`MBAnimation.cs:124`）解析。拼错名字不抛异常，只是拿到无效码。 |
| `private ActionIndexCache(string name)` | 私有构造（`:445`） | 把名字转成整数的那一步。只能由 `Create` 调用（以及静态构造里间接调用）。 |
| `internal ActionIndexCache(int actionIndex)` | 内部构造（`:449`） | 从已有 int 直接造，不做名称解析。网络收包路径用它（`MakeAgentDead.cs:34`）。**mod 编译不过这个构造。** |
| `GetName` | `public string GetName()`（`:452`） | 反查：`Index != -1` 时走 `MBAPI.IMBAnimation.GetActionNameWithCode(Index)`（`IMBAnimation.cs:69`），否则返回字面量 `"act_none"`。**永不返回 null。** |
| `Equals(object)` | `public override bool Equals(object obj)`（`:459`） | 内部直接 `(ActionIndexCache)obj` 拆箱。传 null 或其它类型抛 `InvalidCastException`——**不满足 Equals 契约**，不要拿它跟异类型比较。 |
| `Equals(ActionIndexCache)` | `public bool Equals(ActionIndexCache other)`（`:463`） | 真正的比较：`Index == other.Index`。走 `IEquatable<ActionIndexCache>`，装箱-free。 |
| `operator ==` / `operator !=` | `public static bool operator ==(ActionIndexCache action0, ActionIndexCache action1)`（`:465`）/ `!=`（`:470`） | 逐 `Index` 比较。两个操作数都是值类型，没有 null 陷阱；`default` 与 `act_none` 不相等。 |
| `GetHashCode` | `public override int GetHashCode()`（`:475`） | 直接返回 `Index.GetHashCode()`。所以两个 `Index` 相同的缓存值在 `Dictionary<ActionIndexCache, T>` / `HashSet` 里会互相替换——**这是对的，它们本来就是同一个动作**。 |
| `static ActionIndexCache()` | 静态构造（`:492`） | 一次性把所有 `act_*` 字段解析完。首次触碰任意 `act_*` 字段即触发，含两百多次跨 P/Invoke 调用。 |
| `act_none` | `public static readonly ActionIndexCache act_none`（`:7`，`:494` 赋值） | `Index == -1`。**唯一代表「无动作」的值**。`Agent.cs:2242` 的 `SetActionChannel(0, in ActionIndexCache.act_none, ...)` 就是用它清空通道。 |
| `act_*（约 200 个动作字段）` | 见下表分组 | 预烘焙的动作缓存。按名字前缀分组，全部在 `:492`–`:708` 赋值。 |

`act_*` 字段分组（组内成员都是 `public static readonly ActionIndexCache`，值在静态构造里由 `Create("同名")` 得到）：

| 组 | 命名前缀 | 代表字段与行号 | 用途 |
| --- | --- | --- | --- |
| 拾取 | `act_pickup_*` | `act_pickup_down_begin`（`:9`）、`act_pickup_from_right_middle_horseback_left_end`（`:41`） | 弯腰捡东西的各种起手/收手，按高度（down/middle/up）、左右手、是否在马背上四个维度组合。 |
| 攻城器械 | `act_usage_trebuchet_*` / `act_usage_ladder_*` / `act_usage_batteringram_*` | `act_usage_trebuchet_reload`（`:63`）、`act_usage_ladder_push_back`（`:79`）、`act_usage_batteringram_left_slowest`（`:87`） | 投石车装填/发射、梯子升降/推、撞槌推撞。带 `_idle` 后缀的是等待态。 |
| 受击/硬直 | `act_stagger_*` / `act_strike_*` / `act_row_strike` | `act_stagger_forward`（`:91`）、`act_strike_bent_over`（`:85`）、`act_row_strike`（`:87` 区段起） | 受击硬直，按方向编号 `_2`/`_3` 是不同强度的版本。 |
| 指令 | `act_command_*` / `act_horse_command_*` | `act_command`（`:113`）、`act_command_2h_leftstance`（`:119`）、`act_horse_command_follow_bow`（`:131`） | 待命姿势。按武器（unarmed/1h/2h/bow）与 stance（left stance/右持）组合，horse 版是骑乘时的对应动作。 |
| 待机/行走 | `act_idle_unarmed_1`（`:425`）、`act_stand_1`（`:423`）、`act_walk_idle_1h_with_shield_left_stance`（`:426`）、`act_crouch_walk_idle_unarmed`（`:427`）、`act_beggar_idle`（`:428`） | — | 部署阶段与和平阶段的默认循环姿势。 |
| 地图攻击 | `act_map_attack_*` / `act_map_mount_attack_*` / `act_map_rider_*_attack_*` | `act_map_attack_1h`（`:697`）、`act_map_mount_attack_spear`（`:694`）、`act_map_rider_camel_attack_2h_swing`（`:689`） | 大地图遭遇战（非 Mission）里的挥击。rider 前缀是骑手/骆驼，mount 前缀是马匹本身。 |
| 交涉/剧情 | `act_conversation_*_loop`（`:441`–`:446`）、`act_greeting_*`（`:452`–`:465`）、`act_argue_trio_*`（`:514`–`:518`）、`act_cutscene_npc_argue_player_1`（`:705`） | — | 过场动画与对话循环，通常由 cutscene 逻辑直接指定。 |
| 欢呼/嘲讽 | `act_taunt_cheer_1..4`（`:520`–`:523`）、`act_cheering_low_01..10`（`:525`–`:534`）、`act_cheering_high_01..08`（`:535`–`:542`） | — | 观众欢呼与士兵嘲讽。`Agent.DefaultTauntActions`（`Agent.cs:490`）用的就是 `act_taunt_cheer_1..4`。 |
| 铁匠 | `act_smithing_machine_anvil_start`（`:506`）等 | — | 铁匠铺动画，分 5 段（`:506`–`:509`）。 |

## 真实示例

查当前动作、换成待机，并且尊重「当前通道已经有动作」的判断——这是 `Agent.cs:2597` 的真实写法：

```csharp
using TaleWorlds.MountAndBlade;

public static class TauntAndIdle
{
    // 通道 1 上已经有动作且权重大于 0 时才强行切换，避免和正在播放的招式打架
    public static void TryForceIdle(Agent agent)
    {
        ActionIndexCache current = agent.GetCurrentAction(1);
        if (current != ActionIndexCache.act_none)
        {
            agent.GetActionChannelWeight(1);
            agent.SetActionChannel(1, in ActionIndexCache.act_idle_unarmed_1, true);
        }
    }
}
```

按名字解析并校验一个自定义动作是否存在——`GetName()` 回读可以发现拼错的字段：

```csharp
using TaleWorlds.MountAndBlade;

public static bool ActionExists(string actionName)
{
    ActionIndexCache cache = ActionIndexCache.Create(actionName);
    if (cache == ActionIndexCache.act_none)
    {
        Debug.Print("action name was empty: " + actionName, 0);
        return false;
    }
    string roundTripped = cache.GetName();
    bool ok = string.Equals(roundTripped, actionName, System.StringComparison.Ordinal);
    Debug.Print("action '" + actionName + "' round-tripped as '" + roundTripped + "'", 0);
    return ok;
}
```

用预烘焙字段组装 `Agent` 的默认嘲讽动作数组（对应 `Agent.cs:490`）：

```csharp
using TaleWorlds.MountAndBlade;

public static ActionIndexCache[] BuildTauntSet()
{
    return new[]
    {
        ActionIndexCache.act_taunt_cheer_1,
        ActionIndexCache.act_taunt_cheer_2,
        ActionIndexCache.act_taunt_cheer_3,
        ActionIndexCache.act_taunt_cheer_4
    };
}
```

## 风险与边界

- **`Equals(object)` 会因异类型参数抛 `InvalidCastException`**（`:459`）。放进 `List.Contains` / `Assert.Equal` 这类会传 `object` 的 API 前要意识到这点。
- **`default(ActionIndexCache).Index == 0`，不是 -1。** 只有 `act_none` 才是 `-1`。判「无动作」要显式比 `act_none`。
- **`Create` 对拼错的非空名字不报错。** 它返回的 struct 完全合法，只是 `Index` 是无效码，播放时静默失败。要验证就用 `GetName()` 回读。
- **`act_raid_jump` 的 `GetName()` 返回 `"act_raid_jump_1"`**，因为静态构造里写的就是 `Create("act_raid_jump_1")`（`:708`）。按字段名反推名字会错。
- **触发静态构造有代价。** 首次读任意 `act_*` 会跑两百多次 P/Invoke。在别的类型静态构造里读它有类型初始化死锁风险。
- **`internal` 构造对 mod 不可见。** 想从网络 int 复原，只能 `Create` 按名字重新解析。
- **它不是动画播放的入口。** 播放走 `Agent.SetActionChannel`（`Agent.cs:2368`），本类只负责搬运整数。

## 依赖关系

- 解析/反查的实际落点：[MBAnimation](../../mission-ext/MBAnimation/) 的静态 `GetActionCodeWithName`（`MBAnimation.cs:124`），以及本页内的 [IMBAnimation](../IMBAnimation/) 声明的原生方法 `GetActionCodeWithName`（`IMBAnimation.cs:66`）/ `GetActionNameWithCode`（`IMBAnimation.cs:69`）
- 消费入口：[Agent](../Agent/) 的 `SetActionChannel`（`Agent.cs:2368`）、`GetCurrentAction`（`Agent.cs:2748`）、`MakeDead`（`Agent.cs:4663`）、`DefaultTauntActions`（`Agent.cs:490`）
- 网络侧：`NetworkMessages.FromServer/MakeAgentDead.cs:34` 用 `internal` 构造从 int 复原，说明它被设计成可序列化的四字节载荷
- 上下游：[MissionBehavior](../MissionBehavior/) 只能在 Mission 行为回调里驱动动画通道；[Formation](../Formation/) 与本类无直接关系，队列与动作由 Agent 自己排
- 桶首页：[mission API 分区](../)
