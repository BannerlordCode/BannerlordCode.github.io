---
title: "AgentAlarmStateEnum"
description: "潜行 HUD 标记项的告警状态枚举（6 值）：只由 MissionDisguiseMarkerItemVM.UpdateAlarmState 写入，四个值有生产路径、Suspicious 与 Visible 在 1.3.0 零消费点。"
---

# AgentAlarmStateEnum

**Namespace:** SandBox.ViewModelCollection.Missions.MainAgentDetection
**Module:** SandBox.ViewModelCollection
**Type:** `public enum AgentAlarmStateEnum`
**Base:** 无
**File:** `SandBox.ViewModelCollection/Missions/MainAgentDetection/MissionDisguiseMarkerItemVM.cs`（枚举本体在 :329-343）

## 概述

它是 [MissionDisguiseMarkerItemVM](../MissionDisguiseMarkerItemVM) 的**嵌套枚举**——声明在那个类体内，命名空间仍是 `SandBox.ViewModelCollection.Missions.MainAgentDetection`。代码里必须写全名 `MissionDisguiseMarkerItemVM.AgentAlarmStateEnum`，`using` 解决不了嵌套。

六个值，第一个显式赋值：

```csharp
public enum AgentAlarmStateEnum
{
    None = -1,        // :332
    Alarmed,          // :334  → 0
    Cautious,         // :336  → 1
    PatrollingCautious, // :338 → 2
    Suspicious,       // :340  → 3
    Visible           // :342  → 4
}
```

它描述的是「潜行模式下，一个被追踪的敌人当前有多警觉」。**注意它和 [AIStateFlag](../../mission-ext/AIStateFlag) 是两套东西**——后者是 `Agent` 上的 `uint` 位标记（`None=0` / `Cautious=1` / `PatrollingCautious=2` / `Alarmed=3` / `Paused=8`，`Agent.cs:6421`），是 AI 行为组真正读写的状态；本枚举是 UI 层把那个位标记翻译过来的**枚举化投影**，值也完全不同（`-1` 起头 vs `0` 起头）。

## 心智模型

整条链只有一段代码，就是 `MissionDisguiseMarkerItemVM.UpdateAlarmState`（`:54-88`）：

```csharp
private void UpdateAlarmState()
{
    Agent agent = this.OffenseInfo.Agent;
    AgentNavigator agentNavigator = agent.GetComponent<CampaignAgentComponent>().AgentNavigator;
    AlarmedBehaviorGroup alarmedBehaviorGroup = (agentNavigator != null) ? agentNavigator.GetBehaviorGroup<AlarmedBehaviorGroup>() : null;
    Agent.AIStateFlag aistateFlags = agent.AIStateFlags;
    if (aistateFlags.HasFlag(3))      { this._activeAlarmState = ...Alarmed; }
    else if (aistateFlags.HasFlag(1)) { this._activeAlarmState = ...Cautious; }
    else if (aistateFlags.HasFlag(2)) { this._activeAlarmState = ...PatrollingCautious; }
    else                             { this._activeAlarmState = ...None; }

    float num;
    if (aistateFlags.HasFlag(3)) { num = 1f; }
    else { num = MathF.Clamp(alarmedBehaviorGroup.AlarmFactor / 2f, 0f, 1f); }

    this.AlarmState = this._activeAlarmState.ToString();   // ← 本枚举唯一的「出口」
    this.AlarmProgress = (int)(num * 100f);
}
```

三个要点：

**第一，`HasFlag(3)` / `HasFlag(1)` / `HasFlag(2)` 里的字面量就是 `AIStateFlag` 的枚举值**，只是反编译后类型信息丢了。`HasFlag(3)` 即 `HasFlag(AIStateFlag.Alarmed)`（`Alarmed = 3` 是 `Cautious|PatrollingCautious` 两位组合）。

**第二，判断顺序是承重的，不能重排。** 因为 `Alarmed = 3` 包含 `Cautious(1)` 和 `PatrollingCautious(2)` 两位，`HasFlag(1)` 对 `Alarmed` 状态也为 true。代码先判 `Alarmed` 才让结果正确；**若把 `Cautious` 提到前面，所有告警敌人都会被显示成 Cautious**。这与 `Agent.IsAlarmed()` / `IsCautious()` / `IsPatrollingCautious()`（`Agent.cs:1967/1973/1979`，用 `(flags & Alarmed) == X` 精确相等）语义等价但**判定顺序相反**——引擎那边是先判严格相等，UI 这边是先判宽松包含再靠顺序排除。

**第三，本枚举唯一的出口是 `_activeAlarmState.ToString()`。** `AlarmState` 这个 string 属性是给 Gauntlet movie 用的，它拿到的是 `"None"` / `"Alarmed"` / `"Cautious"` / `"PatrollingCautious"` 这几个**英文标识符的字面量**。所以**改了枚举成员名就等于改了 UI 契约**——prefab 里写死的字符串会失配。

## 关键成员

| 成员 | 值 | 这个成员是做什么用的 |
| --- | --- | --- |
| `None` | `-1` | 唯一显式赋值的成员，也是「完全没警觉」的兜底。产出条件：`AIStateFlags` 的低两位（`Cautious\|PatrollingCautious` 掩码）是 0。此时 `AlarmProgress` 仍然来自 `AlarmedBehaviorGroup.AlarmFactor / 2`，**所以「状态是 None」不等于「进度条是 0」**——`AlarmFactor` 可以大于 0 而状态位还没翻转。 |
| `Alarmed` | 0 | 敌人已发现玩家。产出条件：`AIStateFlags.HasFlag(AIStateFlag.Alarmed)`。此时 `AlarmProgress` **被硬编码成 100**（`if (aistateFlags.HasFlag(3)) num = 1f;`），不走 `AlarmFactor` 计算——因为状态一旦翻转，渐进式进度条就没有意义了。 |
| `Cautious` | 1 | 敌人起疑但尚未锁定。产出条件：`HasFlag(Cautious)` 且不是 `Alarmed`。对应 `Agent.IsCautious()`。渐进进度，走 `AlarmFactor`。 |
| `PatrollingCautious` | 2 | 敌人以巡逻姿态高度警惕。产出条件：`HasFlag(PatrollingCautious)` 且不是 `Alarmed`。对应 `Agent.IsPatrollingCautious()`。注意 `AlarmedBehaviorGroup.cs:51` 里「是否巡逻」直接改变 `AlarmFactor` 的衰减速度（巡逻时每帧 -0.1，不可移动时 -0.25），**这个状态不只是个标签，它影响消退速度**。 |
| `Suspicious` | 3 | **在 1.3.0 里零生产、零消费。** `grep -rn "AgentAlarmStateEnum.Suspicious" --include=*.cs .` 零命中；`UpdateAlarmState` 的四条赋值分支永远到不了它，界面上也不会出现。 |
| `Visible` | 4 | **同样零生产、零消费。** 见上。 |

## 真实示例

**用法一：读 HUD 上某个标记项的状态（本枚举的唯一正当读法）。**

// 写法一：直接拿引擎自己的状态位，不经过 AlarmState 字符串反解。
using TaleWorlds.MountAndBlade;

public static bool IsAboutToSpot(Agent target)
{
    return target.AIStateFlags.HasFlag(Agent.AIStateFlag.Cautious)
        || target.AIStateFlags.HasFlag(Agent.AIStateFlag.PatrollingCautious);
}

// 写法二：要拿到强类型的本枚举，只能从 AlarmState 字符串反解。
using SandBox.ViewModelCollection.Missions.MainAgentDetection;

public static bool Alerted(MissionDisguiseMarkerItemVM marker)
{
    marker.RefreshVisuals();   // 内部会调 UpdateAlarmState，重算 AlarmState / AlarmProgress

    var state = (MissionDisguiseMarkerItemVM.AgentAlarmStateEnum)System.Enum.Parse(
        typeof(MissionDisguiseMarkerItemVM.AgentAlarmStateEnum), marker.AlarmState);

    return state == MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.Alarmed;
}
```

**这段代码暴露了一个真实的结构约束**：`AlarmState` 存的是 string 不是枚举，而 `_activeAlarmState` 是 `private`。所以**外部没有任何办法直接拿到强类型的枚举值**，`Enum.Parse` 是唯一路径（而读 `Agent.AIStateFlags` 则是绕过本枚举的旁路）。这也是为什么 `Suspicious` / `Visible` 永远不会出现在 `AlarmState` 里——不是没人读，而是没人**写**。

**用法二：自己实现一个更细的分级，复用引擎的 `AlarmFactor`。** `AlarmedBehaviorGroup.AlarmFactor` 才是真正的连续量，本枚举只是它的四档粗粒度投影：

```csharp
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public static class ModStealthAwareness
{
    // 与 UpdateAlarmState 同源：AlarmFactor 满 2 折算成 100%。
    public static int PercentFor(Agent agent)
    {
        AlarmedBehaviorGroup group = agent.GetComponent<CampaignAgentComponent>()
            .AgentNavigator.GetBehaviorGroup<AlarmedBehaviorGroup>();

        if (group == null)
        {
            return 0;
        }

        return (int)(System.Math.Clamp(group.AlarmFactor / 2f, 0f, 1f) * 100f);
    }

    // 想知道「精确处在哪两档之间」就直接读这个连续值，不要去凑枚举。
    public static string Describe(Agent agent)
    {
        int pct = PercentFor(agent);
        if (agent.AIStateFlags.HasFlag(Agent.AIStateFlag.Alarmed))
        {
            return "Alarmed";
        }
        return pct > 0 ? ("Alerting " + pct + "%") : "None";
    }
}
```

`MathF.Clamp(x, 0f, 1f)` 这一步是关键——`AlarmFactor` 可以超过 2（`AlarmedBehaviorGroup.cs:87` 是 `+= num3 * dt * 难度倍率`，无上限钳制），不钳就会得到超过 100 的进度条。

## 风险与边界

- **`Suspicious` 与 `Visible` 是死值，不要用。** 1.3.0 的 `UpdateAlarmState` 只有四条赋值分支，写进去的只有 `Alarmed` / `Cautious` / `PatrollingCautious` / `None`。写 `== Suspicious` 的判断**恒为 false**，`switch` 里的这两个分支**永远进不去**。它们是给后续版本预留的（1.3.0 的 UI 设计稿里可能有这两档但实现没跟上），但你不能指望它们会有值。
- **`UpdateAlarmState` 里有一处无判空的解引用。** 第 83 行 `num = MathF.Clamp(alarmedBehaviorGroup.AlarmFactor / 2f, 0f, 1f);` 在 `else` 分支里——**只要 `AIStateFlags` 没有 `Alarmed` 位就会走到**。而 `alarmedBehaviorGroup` 是第 58 行用 `(agentNavigator != null) ? agentNavigator.GetBehaviorGroup<AlarmedBehaviorGroup>() : null` 取的，**可能是 null**。所以：一个没有 `CampaignAgentComponent`、或者 navigator 上没挂 `AlarmedBehaviorGroup` 的 agent，只要调用 `RefreshVisuals()` 就会 `NullReferenceException`。`agent.GetComponent<CampaignAgentComponent>()` 那一步（`:57`）同样没判 null，navigator 为 null 时先崩在那里。
- **`AlarmState` 是字符串契约，成员名一改 UI 就失配。** `AlarmState = this._activeAlarmState.ToString()` 直接把枚举名当 Gauntlet prefab 的绑定值用。**不要 `using static` 之后重构成员名**，也不要在自己的分支里 `ToString()` 之后拿去做跨语言比较——本地化不作用于这个属性。
- **`None = -1` 让它不能用 0 做「未初始化」哨兵。** 其他成员是 0..4，只有 `None` 是 -1。如果你的代码用 `default(AgentAlarmStateEnum)` 作初值，拿到的是 `Alarmed(0)`——**一个最危险的状态**。务必显式初始化为 `None`，别依赖 `default`。
- **`AlarmProgress` 的语义在 `Alarmed` 前后不一致。** 未 `Alarmed` 时是 `AlarmFactor / 2` 的连续映射，`Alarmed` 时是硬编码 100。**从 99 跳到 100 是阶跃而不是渐变**，做进度条插值动画时会在这一帧突变。
- **和 `AIStateFlag` 混用会得到错误答案。** 本枚举的 `Cautious = 1` 恰好等于 `AIStateFlag.Cautious = 1`，但 `Alarmed` 是 0、`PatrollingCautious` 是 2，而 `AIStateFlag.Alarmed = 3`、`PatrollingCautious = 2`。**只有 `Cautious` 和 `PatrollingCautious` 数值巧合一致**，`Alarmed` 完全对不上（0 vs 3）。任何 `(int)` 层面的强转都是错的。
- **它是嵌套类型，不是命名空间级类型。** 完整写法 `MissionDisguiseMarkerItemVM.AgentAlarmStateEnum.X`。`using SandBox.ViewModelCollection.Missions.MainAgentDetection;` 只导入命名空间，导入不了嵌套类型——还得写 `using` 那个宿主类，或者直接写全名。
- **宿主类在 `SandBox.ViewModelCollection`，不是核心。** 裸战役（无 `SandBox` 模块）里这整个类型图都不存在。

## 跨版本提示

本枚举在 `bannerlord-1.3.0` / `1.4.6` / `1.4.7` / `1.5.3` 四棵树里**六个成员、顺序、值、显式赋值全部一致**——`None = -1` 之后是 `Alarmed` / `Cautious` / `PatrollingCautious` / `Suspicious` / `Visible`，1.3.0 与 1.5.3 的成员声明差集为空（逐行比对 public/protected 声明，含宿主类 `MissionDisguiseMarkerItemVM` 的 4 个 public 属性 `OffenseInfo` / `ScreenPosition` / `AlarmProgress` / `AlarmState`）。

宿主类 `MissionDisguiseMarkerItemVM.cs` 的文件大小从 1.3.0 到 1.5.3 有增长（约 6934B → 7056B），但**增长全部落在 private 成员与私有方法上，public 面一字未改**。也就是说**这两个死值（`Suspicious` / `Visible`）在 1.5.3 上依然没有生产路径**。

`Agent.AIStateFlag` 的 `None=0` / `Cautious=1` / `PatrollingCautious=2` / `Alarmed=3` / `Paused=8` 在这几棵树里也未变，所以 `UpdateAlarmState` 里那三个字面量 `3` / `1` / `2` 跨版本依然有效。1.3.15 与 1.4.5 两棵树不含 `SandBox.ViewModelCollection` 工程，无法作为中间版本对照。

**结论：mod 从 1.3.0 抄到 1.5.3 不用改任何一行。** 并且由于 `Suspicious` / `Visible` 在最新版本里仍然是死值，**依赖它们的逻辑在任何版本上都不会触发**。

## 依赖关系

- 宿主类：`MissionDisguiseMarkerItemVM`（同文件，`SandBox.ViewModelCollection`），本枚举是它的嵌套类型，`_activeAlarmState` 是它的私有字段、`AlarmState` / `AlarmProgress` 是它的 public 属性
- 唯一写入点：`MissionDisguiseMarkerItemVM.UpdateAlarmState()`（`:54-88`），由 `RefreshVisuals()` 调用
- 数据来源：[Agent](../../mission/Agent) 的 `AIStateFlags` 属性与 `Agent.AIStateFlag` 枚举（`Agent.cs:6421`，`uint` 位标记，`Alarmed = 3` 是 `1|2`）
- 连续量来源：[AlarmedBehaviorGroup](../AlarmedBehaviorGroup) 的 `AlarmFactor`（`SandBox/Missions/AgentBehaviors/AlarmedBehaviorGroup.cs:21`，`{ get; private set; }`，无上限，逐帧衰减 0.1 / 0.15 / 0.25）
- 路径依赖：`agent.GetComponent<CampaignAgentComponent>().AgentNavigator.GetBehaviorGroup<AlarmedBehaviorGroup>()`，中间两步都无判空
- 导航容器：[AgentNavigator](../../gameplay/AgentNavigator) 提供 `GetBehaviorGroup<T>()`
- 桶首页：[campaign-ext API 分区](../)