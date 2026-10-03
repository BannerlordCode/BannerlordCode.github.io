---
title: "ActionStage"
description: "Agent 内嵌枚举：攻击通道上动作走到哪一步的 8 个阶段值（None=-1 起，NumActionStages 收尾），由 Agent.GetCurrentActionStage 读出，服务于自动格挡与手柄震动。"
---

# ActionStage

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public enum ActionStage`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/Agent.cs`（枚举本体在 Agent.cs:6354，共 9 个成员）

## 概述

`ActionStage` 回答的是一个很窄的问题：**攻击动作现在走到哪一步了**。它跟「在做哪种动作」（[ActionCodeType](../ActionCodeType)）是两个维度——一个是名词，一个是时序上的位置。

它是 `Agent` 的嵌套枚举，成员只有 9 个：

| 成员 | 值 |
| --- | --- |
| `None` | -1 |
| `AttackReady` | 0 |
| `AttackQuickReady` | 1 |
| `AttackRelease` | 2 |
| `ReloadMidPhase` | 3 |
| `ReloadLastPhase` | 4 |
| `Defend` | 5 |
| `DefendParry` | 6 |
| `NumActionStages` | 7 |

唯一的读取入口和 [ActionCodeType](../ActionCodeType) 完全对称，也在 [Agent](../../mission/Agent) 上（`Agent.cs:2891`）：

```csharp
public Agent.ActionStage GetCurrentActionStage(int channelNo)
{
    return (Agent.ActionStage)MBAPI.IMBAgent.GetCurrentActionStage(this.GetPtr(), channelNo);
}
```

官方用它的地方只有三类：自动格挡模型（把敌人「正在蓄力或已出手」判成可格挡窗口）、View 层手柄震动反馈、以及联机快速攻击的时间窗检测。

## 心智模型

把它当成**攻击时间轴上的采样点**，而不是一个持续状态。整条心智模型是三条规则。

**规则一：只有 0/1/2 三个阶段跟攻击窗口有关，其余是装填和防御的阶段。** `AttackReady` 表示攻击已起手但还没进入不可撤回的区间，`AttackQuickReady` 表示轻攻击的快速窗口，`AttackRelease` 表示打击帧已经发生。`ReloadMidPhase` / `ReloadLastPhase` 是装填的两个采样点，`Defend` / `DefendParry` 是防御的两个阶段。`NumActionStages = 7` 是哨兵，**不是有效阶段**。

**规则二：`None = -1` 是「这条通道上现在没有阶段」，它由 native 主动上报，不是没赋值。** 所以判空要写 `stage == Agent.ActionStage.None`，不能只写 `stage != Agent.ActionStage.AttackReady`——那会把 `Defend`、`ReloadMidPhase` 全算进去。

**规则三：读通道 1，不是通道 0。** 官方全部读法都是 `GetCurrentActionStage(1)`：

- [CustomBattleAutoBlockModel](../CustomBattleAutoBlockModel)（`CustomBattleAutoBlockModel.cs:20-21`）读通道 1，取 `AttackReady` / `AttackQuickReady` / `AttackRelease` 三者判断敌人是否处于可被格挡的窗口。
- `MissionGamepadEffectsView`（`MissionGamepadEffectsView.cs:247-356`）读通道 1，按 `AttackReady` / `AttackRelease` / `ReloadMidPhase` / `ReloadLastPhase` 选择震动强度，`None` 与两个装填阶段被归为「不震」。
- `MissionMainAgentController`（`MissionMainAgentController.cs:706`）读通道 1 的 `AttackReady` 参与第一人称瞄准辅助。
- [Agent](../../mission/Agent) 自己在 `TickParallel` 里读通道 1 的 `AttackQuickReady`（`Agent.cs:4931`）打时间戳，在 `Agent.cs:3513` 用 0.75 秒窗口判断这次快速攻击是不是联机预测造成的重复。

**规则四（本桶特有的坑）：反编译产物里的数字字面量不能照抄。** 同族的 `Sandbox/GameComponents/SandboxAutoBlockModel.cs:22` 反编译出来是 `currentActionStage == null || currentActionStage == 1 || currentActionStage == 2`。这段**照抄进你的 C# 是编译不过的**——枚举不能和 `int` 直接比较，`== null` 对非空枚举也没有意义。它是反编译器把 `Agent.ActionStage.None` / `AttackReady` / `AttackQuickReady` 内联成常量后的产物。**要写就照兄弟类 `CustomBattleAutoBlockModel` 的具名写法**，那份是原始源码形状。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | -1 | 通道上没有阶段。View 层拿它做「不震」的判据（`MissionGamepadEffectsView.cs:248`）。 |
| `AttackReady` | 0 | 攻击已起手、未进入不可撤回区间。这是自动格挡窗口的**最早**入口，也是手柄震动开始点。 |
| `AttackQuickReady` | 1 | 轻攻击的快速攻击窗口。[Agent](../../mission/Agent) 用它在 `TickParallel` 里给 `_lastMultiplayerQuickReadyDetectedTime` 打时间戳（`Agent.cs:4931`）。 |
| `AttackRelease` | 2 | 打击帧已发生。震动的高强度段（`MissionGamepadEffectsView.cs:318`），也是联机重复攻击窗口判定的目标阶段（`Agent.cs:3513`）。 |
| `ReloadMidPhase` | 3 | 装填前半程。View 层把它和 `ReloadLastPhase` 一起归到「不震」（`MissionGamepadEffectsView.cs:248`）。 |
| `ReloadLastPhase` | 4 | 装填后半程，武器即将可用。 |
| `Defend` | 5 | 防御动作进行中。 |
| `DefendParry` | 6 | 招架帧。 |
| `NumActionStages` | 7 | 阶段数哨兵，**不是有效阶段**。任何 `stage < NumActionStages` 的写法会把它自己排除掉，但 native 不会报 7。 |

## 真实示例

自动格挡模型里最标准的一段——判断眼前这个敌人是否已进入可格挡窗口（`CustomBattleAutoBlockModel.cs:19-22` 的原始形状）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public bool IsInBlockableWindow(Agent attacker, Agent mainAgent)
{
    Agent.ActionStage stage = attacker.GetCurrentActionStage(1);
    bool inWindow = stage == Agent.ActionStage.AttackReady
        || stage == Agent.ActionStage.AttackQuickReady
        || stage == Agent.ActionStage.AttackRelease;
    return inWindow && attacker.IsEnemyOf(mainAgent);
}
```

`IsEnemyOf` 是 [Agent](../../mission/Agent) 上真实存在的成员，`GetCurrentActionStage` 就在同一个类上，所以这段可以直接编译。

在时间轴上做「刚出手」的检测——这是 `Agent.cs:3513` 那个联机防重复的形状：

```csharp
using TaleWorlds.MountAndBlade;

public static bool JustReleasedRecently(Agent agent, float nowMissionTime, float quickReadyTime)
{
    if (agent.GetCurrentActionStage(1) != Agent.ActionStage.AttackRelease)
    {
        return false;
    }
    return nowMissionTime - quickReadyTime < 0.75f;
}
```

需要遍历一批人时，务必显式跳过 `None` 与 `NumActionStages`：

```csharp
using TaleWorlds.MountAndBlade;

public int CountAgentsInRelease(AgentReadOnlyList agents)
{
    int count = 0;
    foreach (Agent agent in agents)
    {
        Agent.ActionStage stage = agent.GetCurrentActionStage(1);
        if (stage == Agent.ActionStage.AttackRelease)
        {
            count++;
        }
    }
    return count;
}
```

## 风险与边界

- **枚举和 `int` 不能直接比较。** `stage == 2` 编译失败。网上或反编译产物里的数字字面量写法必须换成 `Agent.ActionStage.AttackRelease`。`SandboxAutoBlockModel` 那份反编译产物（`== null || == 1 || == 2`）就是这类不能照抄的代码。
- **`None = -1`，不是 0。** 忘记判 `None` 会把「没有阶段」当成某个阶段；`stage >= Agent.ActionStage.AttackReady` 这种数值比较在 `None` 上直接为 false，看起来「安全」，实则语义完全错了。
- **`NumActionStages` 不是有效阶段。** 用 `(int)stage < (int)Agent.ActionStage.NumActionStages` 做范围检查在语义上成立，但它检查的是「已知值」，native 报的越界值仍然会穿透到你的 `switch` 并静默落进 `default`。
- **`GetCurrentActionStage` 同样不做范围校验。** 它是 native `int` 的直接强转。写防御性代码时显式 `Enum.IsDefined(typeof(Agent.ActionStage), stage)`，或者干脆只用具名比较。
- **读错通道。** 官方读法全是通道 1。读通道 0 拿到的不是「另一个阶段的攻击」，而是下马一类的动作——`None` 几乎恒为真。
- **别拿它判断动作种类。** 「有没有在攻击」用 [ActionCodeType](../ActionCodeType)，「攻击到哪一步」用本枚举。两个维度混用会得到时序上看起来合理但实际错误的结论。
- **这是 `Agent` 的嵌套类型，写全名要带 `Agent.` 前缀。**
- **联机下有预测延迟。** 阶段值来自本地 native，客户端与服务端之间存在预测窗口。写网络相关的判定时把它当成本地观测量，不要当成权威状态。

## 跨版本提示

1.3.0 的 9 个成员（`None = -1` 到 `NumActionStages = 7`）在 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 的 `Agent.cs` 里保持同一顺序与同一赋值。读取入口 `Agent.GetCurrentActionStage(int channelNo)` 的签名在这几个版本间没有变化。

实际会变的是**新版本在 `DefendParry` 之后追加阶段**，此时 `NumActionStages` 跟着增大，中间插入会让你的数值区间判断失效。因此：用具名比较（推荐），或者用 `NumActionStages` 而不是写死 7；并且 `switch` 永远带 `default:` 分支，这样新阶段出现时是「走默认」而不是「静默漏判」。

`CustomBattleAutoBlockModel` 这类消费方在新版本里也会跟着扩 `if` 条件，如果你 fork 了它，升级时要重新对照一遍当前版本的具名阶段列表。

## 依赖关系

- 读取入口：[Agent](../../mission/Agent) 的 `GetCurrentActionStage(int channelNo)` 是托管层唯一读法，返回值由 `MBAPI.IMBAgent.GetCurrentActionStage` 直接转型
- 相邻维度：[ActionCodeType](../ActionCodeType) 描述同一通道上的动作**种类**，两者互不替代
- 官方消费方：[CustomBattleAutoBlockModel](../CustomBattleAutoBlockModel) 的自动格挡窗口判断是唯一一处纯托管的具名写法范本
- 视图侧消费：`MissionGamepadEffectsView` / `MissionMainAgentController`（`TaleWorlds.MountAndBlade.View` 程序集）按阶段选择震动与瞄准辅助
- 联机时间窗：[Agent](../../mission/Agent) 的 `TickParallel` 与 `Agent.cs:3513` 用 `AttackQuickReady` / `AttackRelease` 做快速攻击的重复抑制
- 桶首页：[mission-ext API 分区](../)