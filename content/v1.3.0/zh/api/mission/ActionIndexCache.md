---
title: "ActionIndexCache"
description: "动作索引的只读值类型：单个 int 包一层，提供 209 个预烘焙的静态动作名（act_none / act_pickup_* / act_command_* 等），只有 Create(string) 与 GetName() 两个方向的方法，int 构造器是 internal 所以 mod 无法从裸索引反建。"
---

# ActionIndexCache

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public readonly struct ActionIndexCache : IEquatable<ActionIndexCache>`
**Base:** 无（值类型，仅隐式 `System.Object`；实现 `IEquatable<ActionIndexCache>`）
**File:** `TaleWorlds.MountAndBlade/ActionIndexCache.cs`（701 行；结构体本体只占前 73 行，其余 628 行全是静态字段）

## 概述

`ActionIndexCache` 就是**一个 int 加上一副包装**。整个结构体只有一个字段 `public int Index { get; }`，它的全部价值不在字段本身，而在两件事：让 int 能安全地穿过动画系统的 API（`Agent.SetActionChannel`、`Agent.GetCurrentAction`、`MBActionSet.AreActionsAlternatives` 的参数类型全是它），以及把引擎里 208 个动作名在**类型初始化时**全部解析成索引、做成 `static readonly` 常量暴露出来。

文件里 209 个 `public static readonly ActionIndexCache` 字段构成整个公开面：第一个是 `act_none = new ActionIndexCache(-1)`——注意它是唯一**不**走 `Create(...)` 的字段，直接用那个 `internal` 构造器把索引钉成 `-1`；剩下 208 个全是 `ActionIndexCache.Create("动作名")` 的形式，名字与字段名一字不差（`act_pickup_down_begin` 的字符串就是 `"act_pickup_down_begin"`）。按命名前缀分组，最密的是 `act_pickup_*` 50 个（拾取动作按 上/中/下 × 左/右 × 蹲姿 展开）、`act_command_*` 13 个、`act_greeting_*` 12 个、`act_cheering_low_N` 10 个、`act_cheering_high_N` 8 个、`act_horse_command_*` 7 个，其余是 `act_usage_ladder_*`（梯子）、`act_usage_trebuchet_*`（投石机）、`act_stagger_*`（踉跄）、`act_smithing_machine_*`（铁匠铺）等零散族。

方向只有两个：`Create(string)` 名字→索引，`GetName()` 索引→名字。中间那条「拿一个裸 int 造一个 cache」的构造函数 `internal ActionIndexCache(int actionIndex)` 是 **internal**，mod 引用不到——这意味着**你无法把引擎给的数字索引重新包装回 `ActionIndexCache`**。这不是遗漏，是刻意的单向门：mod 只能引用已烘焙好的 208 个名字，或自己 `Create` 一个新的。

## 心智模型

把它当成**「动作名的编译期常量表」**就对了，别的都顺。

**第一层：208 个常量在类型初始化时一次性烘焙。** 每个字段的初值都是 `Create("名字")`，`Create` 内部 `if (!string.IsNullOrWhiteSpace(actName)) return new ActionIndexCache(actName); return ActionIndexCache.act_none;`，私有构造器 `ActionIndexCache(string name)` 只有一行 `this.Index = MBAnimation.GetActionCodeWithName(name);`。而 [MBAnimation](../../mission-ext/MBAnimation) 的同名静态方法转手调 `MBAPI.IMBAnimation.GetActionCodeWithName(name)` 进 native。所以**第一次碰到这个类型的任何一个成员**（哪怕只是读 `act_none`）都会触发 208 次 native 查询。托管层自己一次都不缓存结果——缓存全部落在这些 `static readonly` 字段上。

**第二层：`Agent` 侧只跟索引打交道，不跟名字打交道。** [Agent](../Agent) 的 `GetCurrentAction(int channelNo)` 实现是 `return new ActionIndexCache((channelNo == 0) ? AgentHelper.GetChannel0CurrentActionIndex(this._channel0CurrentActionPointer) : AgentHelper.GetChannel1CurrentActionIndex(this._channel1CurrentActionPointer));`——它用的正是那个 **internal** 构造器。所以引擎每帧都在给你造新 cache，而你的 mod 只能拿它去和那 208 个常量比较。反方向 `Agent.SetActionChannel` 的头两行是 `int index = actionIndexCache.Index;` 再 `MBAPI.IMBAgent.SetActionChannel(this.GetPtr(), channelNo, index + actionShift, ...)`——**`actionShift` 会让最终送进引擎的索引不等于 `Index`**，所以不要用「setter 之后立刻读 `GetCurrentAction` 应当等于我传进去的值」来验证，那条等式不成立。

**第三层：相等性只认 `Index`。** `Equals(ActionIndexCache other)` 是 `this.Index == other.Index`，`operator ==`/`operator !=` 同样是裸 `Index` 比较，`GetHashCode()` 是 `this.Index.GetHashCode()`。三者互相自洽，所以拿它当 `Dictionary` 的键、放进 `HashSet<ActionIndexCache>` 都是安全的。

顺着这三条，唯一真正需要小心的地方浮出来了：**「查不到」和「是 act_none」在这个类型里是同一个值**。`GetName()` 在 `Index != -1` 时调 native 反查，否则返回一个**硬编码的字面量** `"act_none"`；而 native 对一个它不认识的名字返回什么，托管层无从判断、也无从拦截。一个只存在于你 mod 动画表、但 native 没注册的名字，`Create` 不会抛异常，它会安静地给你一个 `-1` 或别的值，于是 `GetName()` 打印出 `"act_none"`——你会以为动画加载失败，其实是名字拼错了。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Index` | `public int Index { get; }` | 结构体里唯一的字段，构造时定死（`readonly`）。它是送进 native 动画系统的那份原始整数。 |
| `Create` | `public static ActionIndexCache Create(string actName)` | 名字 → cache 的唯一公开入口。空白/空串直接返回 `act_none`，否则走私有字符串构造器去 native 解析。 |
| `GetName` | `public string GetName()` | 索引 → 名字。`Index == -1` 时返回**硬编码**的 `"act_none"` 而不是回读字段；否则调 `MBAPI.IMBAnimation.GetActionNameWithCode(this.Index)`。 |
| `Equals(ActionIndexCache)` | `public bool Equals(ActionIndexCache other)` | 强类型相等，只有 `Index == Index` 一句。它是 `IEquatable<T>` 的实现，也是 `Dictionary`/`HashSet` 实际走的那条路。 |
| `Equals(object)` | `public override bool Equals(object obj)` | 无条件 `return this.Equals((ActionIndexCache)obj);`。**不做类型检查、不判 null**。 |
| `operator ==` / `operator !=` | `public static bool operator ==(ActionIndexCache action0, ActionIndexCache action1)` | 与强类型 `Equals` 同义（裸 `Index` 比较），没有额外的常量折叠或特殊分支。 |
| `GetHashCode` | `public override int GetHashCode()` | `return this.Index.GetHashCode();`，与相等性定义严格一致，没有额外混入。 |
| 私有构造器 | `private ActionIndexCache(string name)` | 唯一会调用 native 的路径：`this.Index = MBAnimation.GetActionCodeWithName(name);` |
| internal 构造器 | `internal ActionIndexCache(int actionIndex)` | 引擎内部专用。`act_none` 字段和 [Agent](../Agent).`GetCurrentAction` 都走它。**mod 不可见**。 |
| `act_none` | `public static readonly ActionIndexCache act_none` | 唯一一个不走 `Create` 的字段，`Index` 被钉死为 `-1`。在所有动作字段里最先声明。 |
| 其余 208 个静态字段 | `public static readonly ActionIndexCache act_pickup_down_begin` 等 | 每个都在类型初始化时经 `Create("同名字符串")` 烘焙。字段名与动作名严格一致，可直接 grep 定位。 |

## 真实示例

最常见的三种用法：读当前动作做分支、强行切动作、把自定义动作按名字建出来用。

```csharp
using TaleWorlds.MountAndBlade;

public class MyAnimationWatcher : MissionBehavior
{
    public override void OnMissionTick(float dt)
    {
        Agent agent = Agent.Main;
        if (agent == null)
        {
            return;
        }
        // 用预烘焙常量比较当前动作；GetCurrentAction 每次都会 new 一个 cache
        if (agent.GetCurrentAction(0) == ActionIndexCache.act_guard_cautious_look_around_1)
        {
            // 用另一个常量强制切走。in 参数可以按值传，不用 ref
            agent.SetActionChannel(0, ActionIndexCache.act_stand_1, true);
        }
        // 名字 → cache 的自定义路径
        ActionIndexCache custom = ActionIndexCache.Create("act_my_custom_idle");
        if (agent.GetCurrentAction(1) == custom)
        {
            agent.SetActionChannel(1, ActionIndexCache.act_none);
        }
    }
}
```

第二段是「当作哈希键用」。它能成立，是因为 `GetHashCode` 与 `Equals` 都只认 `Index`：

```csharp
Dictionary<ActionIndexCache, float> cheerWeights = new Dictionary<ActionIndexCache, float>
{
    { ActionIndexCache.act_cheering_low_01, 0.6f },
    { ActionIndexCache.act_cheering_high_01, 1.0f },
};

ActionIndexCache current = agent.GetCurrentAction(0);
if (cheerWeights.TryGetValue(current, out float weight))
{
    agent.SetActionChannel(1, ActionIndexCache.act_cheer_1, false, 0, weight);
}
```

第三段是走 [MBActionSet](../../mission-ext/MBActionSet) 的「这两个动作是不是同一个动作的变体」判断——官方 `FleeBehavior.cs:33` 就是这个形状：

```csharp
MBActionSet actionSet = ownerAgent.ActionSet;
ActionIndexCache currentAction = ownerAgent.GetCurrentAction(1);
if (!actionSet.AreActionsAlternatives(currentAction, ActionIndexCache.act_scared_idle_1)
    && !actionSet.AreActionsAlternatives(currentAction, ActionIndexCache.act_scared_reaction_1))
{
    ownerAgent.SetActionChannel(1, ActionIndexCache.act_scared_reaction_1);
}
```

注意 `MBActionSet.AreActionsAlternatives` 的签名是 `public bool AreActionsAlternatives(in ActionIndexCache actionCode1, in ActionIndexCache actionCode2)`，它把两个 `Index` 原样送进 native，由引擎侧的动画别名表决定——托管层比较不了动画是否等价。

## 风险与边界

- **`Equals(object)` 会抛异常，不是返回 false。** 实现是无条件 `this.Equals((ActionIndexCache)obj)`。传一个非 `ActionIndexCache` 的装箱对象得到 `InvalidCastException`，传 `null` 得到 `NullReferenceException`（拆箱 null）。`Dictionary`/`HashSet` 因为走 `IEquatable<T>` 的强类型路径是安全的，但 `object.Equals(a, null)`、`object.Equals(a, "foo")` 会炸。
- **`internal ActionIndexCache(int)` mod 不可见。** 引擎每帧 `Agent.GetCurrentAction` 造出来的是任意索引的 cache，你拿到的 `Index` 可能是 208 个常量之外的数，也无法自己包一个新的来对比。只能 `ActionIndexCache.Create(name)` 或直接读 `.Index` 跟别的整数比。
- **`Create` 对未知名字不报错。** 它只挡空串和纯空白，非空白但 native 不认识的名字会走完 `MBAnimation.GetActionCodeWithName` 拿到 native 的返回值。托管层没有「名字不存在」的反馈通道，出错只会在动画播放不出来的时候体现。
- **`GetName()` 在 `Index == -1` 时返回字面量 `"act_none"`，不读 `act_none` 字段。** 所以「名字没查到」和「确实是 act_none」在返回值上无法区分；同时 `act_none.GetName()` 也返回 `"act_none"`，这条自洽路径依赖 native 对 `-1` 也返回不了别的名字。
- **类型初始化不是免费的。** 208 个 `Create` 各做一次 native 查询，且全部发生在「第一次触碰本类型」的瞬间。热路径上第一次读 `ActionIndexCache.act_stand_1` 会带上这份一次性开销，之后才是纯字段读。
- **`SetActionChannel` 里的 `actionShift` 会改写最终索引。** `int index = actionIndexCache.Index;` 之后送进 native 的是 `index + actionShift`。别用「设完立刻读回来应相等」做断言。
- **没有 `IComparable`，也没有与 `int` 的运算符。** 想按索引排序得自己拿 `.Index` 排；想比较大小写 `a < b`，编译不过。
- **字段名即动作名。** 208 个字段全部是 `Create("<同名字符串>")`，所以定位一个动作只要 `grep "act_xxx"`；但反过来说，mod 里拼错一个字段名就是编译错误，而不是运行期静默失败——这一点比 `Create` 的字符串安全。

## 跨版本提示

这一页所在的 `bannerlord-1.3.0` 里是 209 个静态字段、701 行文件。往后的版本动作表持续增长（新增的攻城器械动作、海战动作、v1.5 之后的胡-f 动画都会追加新字段），但**形状不变**：单 `int` 字段、`readonly struct`、实现 `IEquatable<Self>`、只有 `Create`/`GetName` 两个方向的方法、`internal` 构造器保持 internal。跨版本要盯的风险有两类：

一是**某个动作被改名**。因为字段名和字符串常量严格同名，重命名必然两边一起改，你的 `ActionIndexCache.act_old_name` 会直接编译失败——这是编译期可见的失败，比运行期好处理。

二是**动作索引被重排**。`Index` 的数值来自 native 的 `GetActionCodeWithName`，跨版本不保证稳定；如果你把 `agent.GetCurrentAction(0).Index` 存进存档或网络消息里当长期标识用，升级后就会指向别的动作。**永远存动作名，不要存索引。**

## 依赖关系

- 生产者：[MBAnimation](../../mission-ext/MBAnimation) 的 `GetActionCodeWithName` 是唯一把名字变成索引的托管入口，`GetName()` 反向走 native
- 原生接口：[IMBAnimation](../IMBAnimation) 声明 `GetActionCodeWithName(string)` 与 `GetActionNameWithCode(int)`，本类型的双向转换都压在这两个函数上
- 消费方 A：[Agent](../Agent) 的 `GetCurrentAction(int)` 用 internal 构造器造 cache，`SetActionChannel(int, in ActionIndexCache, ...)` 消费它
- 消费方 B：[MBActionSet](../../mission-ext/MBActionSet) 的 `AreActionsAlternatives(in ActionIndexCache, in ActionIndexCache)` 把两个索引送进 native 别名表
- 同桶姊妹页：[MissionBehavior](../MissionBehavior) 是上面示例里挂载 `OnMissionTick` 的地方
- 桶首页：[mission API 分区](../)