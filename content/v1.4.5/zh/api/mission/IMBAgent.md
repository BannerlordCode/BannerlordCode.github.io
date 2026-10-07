---
title: "IMBAgent"
description: "Agent 的 245 个原生绑定：96 个 get_ 里有 90 个在 Agent.cs 有真实读取调用，剩下 6 个被托管侧缓存字段替代——get_position 走的根本不是这条路。"
---

# IMBAgent

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `internal interface IMBAgent`（`[ScriptingInterfaceBase]`）
**Base:** 无
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBAgent.cs`

## 概述

`IMBAgent` 是 745 行、**245 个 `[EngineMethod]` 绑定**的纯声明接口——**一个方法体都没有**。它是 C# 托管侧与原生侧之间关于「Agent」的全部契约，实现落在 `Bannerlord.Native.dll` 里，**而那个 dll 不在源码树中**。

接口本身带 `[ScriptingInterfaceBase]`（`:8`），也就是 [ScriptingInterfaceBase](../ScriptingInterfaceBase/) 标记的 28 个可脚本化接口之一。**通过 `MBAPI.GetObject<IMBAgent>()`（`MBAPI.cs:84` → `:70-77`）拿到实例，按类型全名查字典。**

## 心智模型

把它当成**「`Agent` 的原生控制面」**。三条推论：

第一,**245 个绑定里 235 个在托管侧有真实调用点，10 个没有。** 我实测 `grep -rn "MBAPI.IMBAgent\." --include=*.cs bannerlord-1.4.5` → **235 个不同方法名被调用**。这 235 个里 **91 次出现在 `Agent.cs`**、1 次在 `DefaultBattleMissionAgentSpawnLogic.cs`、1 次在 `SpawningBehaviorBase.cs`。**所以「改 `Agent` 的什么会走到这个接口」的答案基本就是「读 `Agent.cs`」。**

第二,**96 个 `get_` 里有 90 个有托管读取调用，6 个没有——而这 6 个不是遗漏，是被托管侧缓存替代了。** 详见「关键成员」。

第三,**`get_` 前缀只保证「原生那边叫这个名字」，不保证「托管侧从它读值」。** `get_position`（`:171`）就是反例：`Agent.Position`（`Agent.cs:680`）走的是 `AgentHelper.GetAgentPosition(PositionPointer)`——**直接解引用原生指针，完全绕开 `IMBAgent`**（对照 [AgentHelper](../AgentHelper/)）。

## 如何使用

**怎么拿到它**：**编译期拿不到。** 它是 `internal interface`，mod 写不出 `IMBAgent` 这个符号。能观察到的只有间接后果：`Agent` 上那 235 个转发到它的公开属性与方法。

复现「哪些绑定有托管调用点」这个判断（这是本页所有结论的来源）：

```csharp
using System.Linq;
using System.Reflection;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 统计方法（对引擎程序集反射）：
//   var iface = asm.GetType("TaleWorlds.MountAndBlade.IMBAgent");
//   245 个 [EngineMethod("…")] 绑定 = get_ 96 / set_ 79 / 动词 70
//   其中 235 个在托管侧有调用点，91 次出现在 Agent.cs
// 下面这段在 mod 里能跑：数出 Agent 上有多少个方法是原生转发
int nativeForwarders = typeof(Agent).GetMethods(BindingFlags.Public | BindingFlags.NonPublic | BindingFlags.Instance)
    .Count(m => m.GetCustomAttributes().Any(a => a.GetType().Name == "EngineMethod"));
Debug.Print("Agent 上带 EngineMethod 属性的转发方法数 = " + nativeForwarders, 0);
```

**用它最容易踩的一条**：**`get_look_agent`（`:51`）在托管侧有缓存镜像，所以 `Agent.GetLookAgent()` 读的是托管字段、不是原生值。** `Agent.cs:2870` 是 `return _lookAgentCache;`，而 `_lookAgentCache` 全树只有 3 处：`:560` 声明、`:2447` 在 `SetLookAgent` 里赋值、`:2870` 读出。**`SetLookAgent`（`:2445-2449`）先写托管缓存（`:2447`）再调原生（`:2448`）。** 也就是说：**原生侧若单方面改变了「正在看向谁」，托管侧读到的是旧值。** 这是本页唯一一处「读到的值可能与原生不一致」的确证位置。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `[ScriptingInterfaceBase]` | `IMBAgent.cs:8` | 把它标记为「可脚本化」——**这 245 个绑定就是脚本层能看到的全部**。28 个 IMB* 接口共有此标记，见 [ScriptingInterfaceBase](../ScriptingInterfaceBase/)。 |
| 245 个 `[EngineMethod]` 绑定 | 全部形如 `[EngineMethod("native_name", false, null, false)]` + 一个方法签名 | `get_` 96 个 / `set_` 79 个 / 动词名 70 个（无 `get_`/`set_` 前缀，如 `die` `:104`、`make_dead` `:107`、`is_enemy` `:71`）。**第一参数是原生侧的方法名字符串，不是 C# 方法名** —— 两者只有约定关系，改 C# 名不影响绑定，改字符串会断。 |
| 96 个 `get_` 中【有】托管读取调用的 90 个 | 形如 `Agent GetMovementFlags(UIntPtr agentPointer)`（`:12`） | **这 90 个是「改 `Agent` 的什么会走到这里」的正面清单。** 样例：`GetMovementFlags`（`:12` → `Agent.cs:937`）、`GetMovementInputVector`（`:18` → `Agent.cs:949`）、`GetCollisionCapsule`（`:24` → `Agent.cs:962`）、`GetAgentVisuals`（`:30` → `Agent.cs:982`）、`GetTargetAgent`（`:54` → `Agent.cs:2875`）、`GetFiringOrder`（`:87` → `Agent.cs:2473`）。**注意第一个形参几乎总是 `UIntPtr` —— 那是 `Agent.GetPtr()`。** |
| 96 个 `get_` 中【无】托管读取调用的 6 个 | 见下 | **这 6 个是本页最有价值的部分**——它们各自有一个替代实现路径，逐个说明。 |
| `GetPosition` | `[EngineMethod("get_position", …)] Vec3 GetPosition(UIntPtr)`（`:171`） | **被 `AgentHelper` 绕过。** `Agent.cs:680` 是 `public Vec3 Position => AgentHelper.GetAgentPosition(PositionPointer);`——**直接解引用原生指针，不经 `IMBAgent`**。这是 96 个 `get_` 里唯一「有绑定、有托管读取、但读取不走这条绑定」的一个。 |
| `GetTeam` | `[EngineMethod("get_team", …)] int GetTeam(UIntPtr)`（`:150`） | **被托管字段替代，而且返回类型就不一样。** 原生侧返回的是 **`int`**（`:150` 是 `int GetTeam(UIntPtr agentPointer);`），而托管侧 `Agent.cs:875` 的 `public Team Team { get; private set; }` 是一个 `Team` 对象、由托管层自己存。**⇒ 两者不是同一个东西：绑定给的是队伍索引，属性给的是队伍对象，而后者根本不经原生。** |
| `GetMountAgent` | `[EngineMethod("get_mount_agent", …)] Agent GetMountAgent(UIntPtr)`（`:249`） | **被 `[MBCallback]` 维护的托管缓存替代。** `Agent.MountAgent` 的 getter（`Agent.cs:1003-1006`）转调 `GetMountAgentAux()`（`:5290-5293`），后者 `return _cachedMountAgent;`。缓存写入点是 `Agent.cs:1814-1817` 的 `[MBCallback(null, true)] internal void UpdateMountAgentCache(Agent)`，`:1816` 赋值。**⇒ 骑乘关系由原生侧通过回调推回托管侧，getter 从不问原生。** 而对应的 `set_mount_agent`（`:251-252`，形参是 `int mountAgentIndex`）**确实被调用**：`Agent.cs:5298`。 |
| `GetLookAgent` | `[EngineMethod("get_look_agent", …)] Agent GetLookAgent(UIntPtr)`（`:51`） | **被托管缓存替代（最需要注意的一个）。** `Agent.GetLookAgent()`（`Agent.cs:2868-2871`）`return _lookAgentCache;`。写入点是 `SetLookAgent`（`Agent.cs:2445-2449`）：`:2447` 写托管缓存、`:2448` 调 `MBAPI.IMBAgent.SetLookAgent(...)`。**⇒ 只有「显式调 `SetLookAgent`」才会更新这个值。** |
| `GetStateFlags` | `[EngineMethod("get_state_flags", …)] … GetStateFlags(UIntPtr)`（`:237`） | **托管侧没有任何包装。** `grep "GetStateFlags" Agent.cs` 零命中。 |
| `GetNativeActionIndex` | `[EngineMethod("get_native_action_index", …)] int GetNativeActionIndex(string actionName)`（`:681`） | **形参不是 `UIntPtr` 而是 `string actionName`，且托管侧零包装。** `grep "NativeActionIndex" Agent.cs` 只命中 `:490` 的 `DefaultTauntActions` 数组（那是 `ActionIndexCache.act_taunt_cheer_*`，与本绑定无关）。**所以这个绑定在托管侧完全没有入口。** |

## 真实示例

96 个 `get_` 的三分法（这是本页的核心结论）：

```csharp
// IMBAgent.cs 共 96 个 get_ 绑定：
//   90 个 —— Agent.cs 等处有真实调用（91 次在 Agent.cs，1 次 DefaultBattleMissionAgentSpawnLogic.cs，1 次 SpawningBehaviorBase.cs）
//    6 个 —— 没有调用，逐个有解释：
//      get_position           (:171)  被 AgentHelper 绕过：Agent.cs:680 直接 AgentHelper.GetAgentPosition(PositionPointer)
//      get_team               (:150)  被托管字段替代：Agent.cs:875 是 { get; private set; } 自动属性
//                                    注意类型也不同 —— 绑定返回 int GetTeam(UIntPtr)，
//                                    而 Agent.Team 是 Team 对象、根本不经原生
//      get_mount_agent        (:249)  被 [MBCallback] 缓存替代：Agent.cs:1005 -> GetMountAgentAux() -> return _cachedMountAgent (:5292)
//                                    缓存由 Agent.cs:1814-1817 的 UpdateMountAgentCache 维护（:1816 赋值）
//      get_look_agent         (:51)   被托管缓存替代：Agent.cs:2870 return _lookAgentCache
//                                    唯一写入点 Agent.cs:2447（SetLookAgent 内），原生写 :2448
//      get_state_flags        (:237)  托管侧零包装：grep "GetStateFlags" Agent.cs = 0
//      get_native_action_index (:681)  托管侧零包装，且形参是 string actionName 而非 UIntPtr
Debug.Print("90 有调用 / 3 被托管缓存或字段替代 / 3 零包装", 0);
```

「get_ 绑定被调用」与「getter 形参不是 UIntPtr」的两种形态（后者只有 1 个）：

```csharp
// 绝大多数 get_ 绑定的首形参是 UIntPtr（= Agent.GetPtr()）：
//   IMBAgent.cs:12   Agent GetMovementFlags(UIntPtr agentPointer);
//   IMBAgent.cs:681  int GetNativeActionIndex(string actionName);   ← 唯一的例外，按动作名查
// 245 个绑定里有 241 个含 UIntPtr
Debug.Print("241/245 含 UIntPtr；get_native_action_index 是唯一的 string 首参", 0);
```

## 风险与边界

- **`internal interface`，编译期不可引用。** 245 个绑定只有通过 `MBAPI.IMBAgent` 才能间接到达，而 `MBAPI.IMBAgent` 也是 `internal static`（`MBAPI.cs:12`）。
- **零方法体。** 实现全在 `Bannerlord.Native.dll`，**不在源码树里**。所以本页**没有一条断言来自原生实现**。
- **`[EngineMethod]` 的第一参数是原生名，不是 C# 名。** 改 C# 方法名不断绑定，改字符串断。**这两者的耦合只靠约定，没有编译期检查。**
- **6 个 `get_` 无托管调用点，其中 3 个是缓存替代。** 这意味着 **`Agent` 上看起来「读的是原生」的那几个属性，实际读的是托管镜像。** 见「最容易踩的一条」。
- **`get_team` 的返回类型与 `Agent.Team` 不同。** `:150` 是 `int GetTeam(UIntPtr)`（队伍索引），`Agent.cs:875` 是 `Team Team`。**所以「Agent 的队伍」这个值在托管侧根本不是从原生读来的。**
- **`get_position` 不走 `IMBAgent`。** `Agent.cs:680` 走 `AgentHelper`。**所以改 `Agent.Position` 的读法与改其余 90 个 `get_` 完全不同。**
- **`get_native_action_index` 是 245 个绑定里唯一不带 `UIntPtr` 首参的 `get_`。** `:681` 的形参是 `string actionName`。
- **`set_mount_agent` 的形参是 `int mountAgentIndex` 而非 `Agent`。** `:252`。**所以「设置骑乘」走的是索引传递，`:5298` 的 `SetMountAgent` 负责换算。**
- **那 10 个无调用点的绑定（235/245）我未逐个说明。** 我只对 6 个 `get_` 做了逐个归因；**其余 4 个（1 个 `set_` + 3 个动词）我列出了名单但未逐个查**，故不断言。

## 参见

- 标记它可脚本化的特性：[ScriptingInterfaceBase](../ScriptingInterfaceBase/)（28 个 IMB* 接口之一）
- 托管侧唯一消费方：[Agent](../Agent/)（91 次调用点；`Agent.cs:680` 的 `Position` 绕过本接口、`Agent.cs:875` 的 `Team` 不经原生、`:1005`/`:5292` 的骑乘走缓存、`:2870` 的注视走缓存）
- 直接指针旁路：[AgentHelper](../AgentHelper/)（`GetAgentPosition` 等 12 个方法都直接解引用 `UIntPtr`）
- 兄弟接口：[IMBMission](../IMBMission/)（116 个绑定，同一机制）
- 缓存回调的形态：`Agent.cs:1813` 的 `[MBCallback(null, true)]`（托管侧回调注册）
- 桶首页：[mission API 分区](../)