---
title: "AgentBehaviorGroup"
description: "Mission 中一组 agent 行为的抽象容器：以泛型 AddBehavior/GetBehavior/HasBehavior 做按类型注册与查询，用 GetScore 参与组间竞争，用 ScriptedBehavior 支持脚本强制接管，具体分组策略由 DailyBehaviorGroup 等子类实现。"
---
# AgentBehaviorGroup

**命名空间：** `SandBox.Missions.AgentBehaviors`  
**模块：** `SandBox.Missions`  
**类型：** `public abstract class AgentBehaviorGroup`  
**源文件：** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AgentBehaviorGroup.cs`（202 行）

## 概述

`AgentBehaviorGroup` 是任务（Mission）里**一组 agent 行为的容器与调度单元**。它自己不是行为，也不决定「该做什么」——它只负责：持有若干 `AgentBehavior`（`Behaviors` 列表）、用泛型接口按类型注册/查询它们、在同一时刻只让一个行为处于激活态、以及向上层的 `AgentNavigator` 暴露一个 `GetScore()` 分数参与「哪一组该接管这个 agent」的竞争。

它是 `abstract` 的，基类里所有「怎么选行为」的逻辑都是空实现：`Tick`（`AgentBehaviorGroup.cs:170`）、`ConversationTick`（`:174`）、`OnAgentRemoved`（`:178`）、`GetScore`（`:194`）、`ForceThink`（`:199`）都只是 `virtual` 空壳。真正的分组策略由子类定义：

| 子类 | 策略 |
|------|------|
| `DailyBehaviorGroup` | 按 `GetAvailability` 加权随机挑一个日常行为（闲逛/站岗/跟随…） |
| `InterruptingBehaviorGroup` | 挑可用度最高的行为做打断（战斗/逃跑等） |
| `AlarmedBehaviorGroup` | 潜行/警戒链，维护 `AlarmFactor` 并写 `AIStateFlag` |

`AgentNavigator` 持有多个 group，用 `GetScore()` 挑最高分的那一组激活（`AgentNavigator.cs:542` `RefreshBehaviorGroups`、`AgentNavigator.cs:562` `ActivateGroup`）。

## 心智模型

把它想成**「一个 agent 在某一类情境下的行为菜单 + 一个单选开关」**，而不是一个状态机。

1. **容器维度：组**——一个 agent 同时可以有多组行为（日常、打断、警戒…）。同一时刻只有一组 `IsActive == true`，由 `AgentNavigator.RefreshBehaviorGroups` 按 `GetScore()` 选出（`AgentNavigator.cs:542`）。所以「这个 agent 现在在干什么」= 激活组里的激活行为。
2. **容器维度：行为**——组内是一个 `List<AgentBehavior> Behaviors`（`AgentBehaviorGroup.cs:12`）。基类约定**同一时刻最多一个行为激活**：`SetScriptedBehavior`（`:120`）与子类的 `Tick` 都会先 `DisableAllBehaviors()` 再点亮一个。
3. **为什么用泛型而不是按名字查**——行为是编译期已知的具体 C# 类型，没有字符串注册表。`AddBehavior<T>()` / `GetBehavior<T>()` / `HasBehavior<T>()` 用类型本身当 key，好处是：① 不用维护字符串常量，不会拼错；② 编译器保证你拿到的是 `T`，不用转型；③ 去重靠 `GetType()`，一个组里同一运行时类型只会有一个实例。代价是**无法在运行时按配置名动态查找**——那需要 mod 自己维护 `名字 → 类型` 映射。
4. **泛型匹配用 `is T`，不是精确类型**——`GetBehavior<T>()`（`:75`）与 `HasBehavior<T>()`（`:87`）用 `is` 判断，所以传基类/接口 `T` 能命中子类实例；而 `AddBehavior<T>()`（`:58`）的去重是**精确 `GetType()` 比较**。两者语义不一致，是常见的困惑来源。
5. **注册顺序 = 列表顺序 = 优先级顺序**——`GetActiveBehavior()`（`:158`）返回**列表中第一个**激活的行为。子类挑选行为时通常也是从前往后遍历，所以「先 Add 的排在前面」。
6. **脚本接管**——`ScriptedBehavior`（`:22`）是一个「强制指定」槽：一旦设置，子类 `Tick` 会跳过正常选择逻辑、直接点亮它（见 `DailyBehaviorGroup.cs:16` 起、`InterruptingBehaviorGroup.cs:12` 起）。这是任务脚本（过场、对话、剧情）压过 AI 自主选择的官方后门。

## 怎么用

### 怎么拿到

- **源树路径：** `Modules.SandBox/SandBox/SandBox.Missions.AgentBehaviors/AgentBehaviorGroup.cs`（共 202 行）
- **声明处：** `AgentBehaviorGroup.cs:8`（类声明）、`:49`（构造函数）
- **运行时入口：** 不要自己 `new`（构造函数是 `protected`）。从 agent 拿 `AgentNavigator`，再按类型取组：
  - `agent.GetComponent<CampaignAgentComponent>().AgentNavigator` → `AgentNavigator.GetBehaviorGroup<T>()`（`AgentNavigator.cs:492`）
  - 取「当前正在生效的组」用 `AgentNavigator.GetActiveBehaviorGroup()`（`AgentNavigator.cs:603`）
  - 组的注册由 `BehaviorSets` 完成，例如 `BehaviorSets.cs:13`–`:15` 依次注册 `DailyBehaviorGroup` / `InterruptingBehaviorGroup` / `AlarmedBehaviorGroup`；`AgentNavigator.AddBehaviorGroup<T>()`（`AgentNavigator.cs:478`）会自己 `Activator.CreateInstance` 并去重。
- **写自己的组：** 继承 `AgentBehaviorGroup`，实现 `Tick` 与 `GetScore`，并在 mod 的 Mission 初始化里用 `agentNavigator.AddBehaviorGroup<MyGroup>()` 注册。构造函数签名必须是 `(AgentNavigator navigator, Mission mission)`，因为 `AgentNavigator.AddBehaviorGroup` 与 `AddBehavior` 都靠 `Activator.CreateInstance` 按这个签名实例化。

### 典型用法

- **给某个 agent 加一个自定义行为**：`group.AddBehavior<MyBehavior>()`，然后 `group.SetScriptedBehavior<MyBehavior>()` 强制它接管。行为类需要有一个接收 `AgentBehaviorGroup` 的构造函数（`AddBehavior<T>` 内部是 `Activator.CreateInstance(typeof(T), this)`）。
- **查某行为是否已注册**：先 `HasBehavior<T>()` 再决定 `AddBehavior<T>()`；或直接 `GetBehavior<T>()` 判空——后者更常见（见 `SandBoxHelpers.cs:30`–`:33`）。
- **临时关闭所有行为**：`DisableAllBehaviors()`（`:150`），注意它**不会**清空 `ScriptedBehavior`，脚本槽仍然指着那个行为，子类 `Tick` 下一帧会把它重新点亮。
- **彻底移除一个行为**：`RemoveBehavior<T>()`（`:99`），它同时处理「移除的是当前脚本行为」的情况（把 `ScriptedBehavior` 置 `null`）。
- **从激活组上取行为再操作**：官方模式见 `SandBoxHelpers.MissionHelper.FollowAgent`（`SandBoxHelpers.cs:30` 起）——取激活组 → `GetBehavior<FollowAgentBehavior>()` → 没有就 `AddBehavior<FollowAgentBehavior>()` → `SetScriptedBehavior<FollowAgentBehavior>()` → 设目标。

### 坑

- **`AddBehavior<T>` 是「取或建」，不是「总是新建」。** 如果同类型已存在，它直接返回已有实例（`AgentBehaviorGroup.cs:63`–`:69` 的 `GetType()` 去重）。若你依赖「每次调用都得到新对象」来重置状态，会失望。
- **`AddBehavior<T>` 要求 `T` 有 `(AgentBehaviorGroup)` 构造函数。** 没有的话 `Activator.CreateInstance` 抛异常，且 `as T` 为 `null` 时函数静默返回 `null`。
- **`RemoveBehavior<T>` 的循环有跳跃。** 它在 `for (i = 0; i < Count; i++)` 里 `RemoveAt(i)` 但不 `i--`（`AgentBehaviorGroup.cs:101`–`:111`），所以移除元素后紧邻的下一个元素会被跳过。组内同一类型通常只有一个，实际影响有限，但一次移除多个匹配项时不要指望它全清干净。
- **`GetBehavior<T>` 用 `is`、`AddBehavior<T>` 用精确 `GetType()`。** 用基类做 `T` 时，查询能命中子类实例，但 `AddBehavior` 仍会新增一个——两者不对称。
- **`IsActive` 的 setter 有副作用。** 赋值会在变化时调用 `OnActivate()` / `OnDeactivate()`（`AgentBehaviorGroup.cs:24`–`:45`），而基类 `OnDeactivate()` 会把组内所有行为设为不激活（`:186`）。所以在组被停用时手工保留「上次激活的行为」是无效的。
- **不要绕过 `AgentNavigator` 直接 `IsActive = true`。** 组间互斥由 `ActivateGroup` 统一处理（`AgentNavigator.cs:562`），手工点亮会导致多个组同时激活。
- **`Behaviors` 是 public `List`。** 直接 `Add`/`Remove` 会绕过 `AddBehavior` 的去重和 `RemoveBehavior` 的脚本槽清理，尽量走方法。

## 关键成员

### Navigator（`:10`）
`public AgentNavigator Navigator` —— 反向指回持有本组的导航器，是 `OwnerAgent` 的来源，也是行为查 `Mission` 之外上下文时的跳板。

### Behaviors（`:12`）
`public List<AgentBehavior> Behaviors` —— 组内行为列表，构造时初始化为空（`:52`）。顺序即遍历顺序，`GetActiveBehavior()` 取其中第一个激活项。

### CheckBehaviorTime（`:14`）
`protected float CheckBehaviorTime = 5f` —— 子类决定「多久重新思考一次选哪个行为」的默认间隔，`DailyBehaviorGroup` 会按选中的行为覆盖它。

### CheckBehaviorTimer（`:16`）
`protected Timer CheckBehaviorTimer` —— 配合上一个字段的计时器，由子类 `SetCheckBehaviorTimer` 设置并在 `Tick` 里 `Check(Mission.CurrentTime)`。

### _isActive（`:18`）
`private bool _isActive` —— `IsActive` 的背衬字段。构造时显式置 `false`（`:54`），保证新组默认不激活。

### OwnerAgent（`:20`）
`public Agent OwnerAgent => Navigator.OwnerAgent` —— 本组服务的 agent 的快捷访问器，等价于 `Navigator.OwnerAgent`。

### ScriptedBehavior（`:22`）
`public AgentBehavior ScriptedBehavior { get; private set; }` —— 脚本强制指定的行为槽。非 `null` 时子类 `Tick` 会跳过自主选择直接点亮它。只能通过 `SetScriptedBehavior<T>()` / `DisableScriptedBehavior()` 修改（setter 是 private）。

### IsActive（`:24`）
`public bool IsActive` —— 组是否激活。setter 在值变化时调用 `OnActivate()` / `OnDeactivate()`，基类 `OnDeactivate()` 会清空组内所有行为的激活态。由 `AgentNavigator.ActivateGroup` 设置，**不要手工乱设**。

### Mission（`:47`）
`public Mission Mission { get; private set; }` —— 本组所属的任务实例，构造时注入，供子类查场景、计时与 MissionBehavior。

### 构造函数（`:49`）
`protected AgentBehaviorGroup(AgentNavigator navigator, Mission mission)` —— 写入 `Mission`、新建空 `Behaviors`、写入 `Navigator`，并把 `_isActive` 置 `false`、`ScriptedBehavior` 置 `null`。`protected` ⇒ 只能被子类调用；`Activator.CreateInstance` 依赖这个签名。

### AddBehavior&lt;T&gt;（`:58`）
`public T AddBehavior<T>() where T : AgentBehavior` —— **按类型注册（取或建）**。用 `Activator.CreateInstance(typeof(T), this)` 建实例；若组内已有**精确同类型**实例则直接返回它，否则追加到 `Behaviors`。返回 `null` 表示创建失败。

### GetBehavior&lt;T&gt;（`:75`）
`public T GetBehavior<T>() where T : AgentBehavior` —— **按类型查询**，用 `is T` 匹配（能命中子类），未找到返回 `null`。这是官方代码里最常用的查询（如 `SandBoxHelpers.cs:30`、`ClanMemberRolesCampaignBehavior.cs:334`）。

### HasBehavior&lt;T&gt;（`:87`）
`public bool HasBehavior<T>() where T : AgentBehavior` —— 与 `GetBehavior<T>` 同样的 `is T` 匹配，只返回存在性，不实例化也不返回对象。

### RemoveBehavior&lt;T&gt;（`:99`）
`public void RemoveBehavior<T>() where T : AgentBehavior` —— 移除所有匹配项：先停用，若它是 `ScriptedBehavior` 则清空脚本槽，再 `RemoveAt`；若被移除者原本是激活的，调用 `ForceThink(0f)` 让子类立刻重选。注意前文「坑」里说的循环跳跃。

### SetScriptedBehavior&lt;T&gt;（`:120`）
`public void SetScriptedBehavior<T>() where T : AgentBehavior` —— 把第一个匹配项设为脚本行为，调用 `ForceThink(0f)`，并把**其余所有行为**停用。找不到匹配项时不做任何事（不会抛异常）。

### DisableScriptedBehavior（`:140`）
`public void DisableScriptedBehavior()` —— 停用脚本行为、把 `ScriptedBehavior` 置 `null`，再 `ForceThink(0f)`。用于脚本结束时把控制权还给 AI。

### DisableAllBehaviors（`:150`）
`public void DisableAllBehaviors()` —— 停用组内全部行为，但**不清空 `ScriptedBehavior`**。子类在挑选新行为前会先调它，保证互斥。

### GetActiveBehavior（`:158`）
`public AgentBehavior GetActiveBehavior()` —— 返回 `Behaviors` 中第一个 `IsActive` 的行为，没有则 `null`。`AgentNavigator.GetActiveBehavior()` 会转发到激活组的这个方法。

### Tick（`:170`）
`public virtual void Tick(float dt, bool isSimulation)` —— 每帧主循环。基类空实现；子类在此实现「选行为 + 推进行为」。由 `AgentNavigator.TickBehaviorGroups`（`AgentNavigator.cs:579`）对**所有**组调用，而不是只调激活组。

### ConversationTick（`:174`）
`public virtual void ConversationTick()` —— 对话专用 tick。基类空实现；子类通常转发给当前激活的行为。

### OnAgentRemoved（`:178`）
`public virtual void OnAgentRemoved(Agent agent)` —— agent 被移出任务时的回调。基类空实现，供需要清理引用的子类重写。

### OnActivate（`:182`）
`protected virtual void OnActivate()` —— 组被激活时的钩子，基类空实现。

### OnDeactivate（`:186`）
`protected virtual void OnDeactivate()` —— 组被停用时调用，基类**会停用组内全部行为**。子类可重写以追加清理，但注意调用 `base.OnDeactivate()`。

### GetScore（`:194`）
`public virtual float GetScore(bool isSimulation)` —— 组间竞争的分数。基类返回 `0f`（即「不参与」）。`AgentNavigator.RefreshBehaviorGroups` 只激活分数 `> 0` 的最高分组（`AgentNavigator.cs:542`）。

### ForceThink（`:199`）
`public virtual void ForceThink(float inSeconds)` —— 请求子类立即重新决策（`inSeconds` 通常传 `0f`）。基类空实现；`RemoveBehavior` / `SetScriptedBehavior` / `DisableScriptedBehavior` 都会调用它。

## 真实示例

官方最典型的用法是 `SandBoxHelpers.MissionHelper.FollowAgent`：从 agent 拿激活组，确保跟随行为存在，然后用脚本槽强制接管。

```csharp
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

// 摘自 SandBoxHelpers.cs:30 起的官方模式
AgentBehaviorGroup activeGroup = agent
    .GetComponent<CampaignAgentComponent>()
    .AgentNavigator.GetActiveBehaviorGroup();

if (activeGroup != null)
{
    FollowAgentBehavior follow = activeGroup.GetBehavior<FollowAgentBehavior>();
    if (follow == null)
    {
        follow = activeGroup.AddBehavior<FollowAgentBehavior>(); // 取或建
    }
    activeGroup.SetScriptedBehavior<FollowAgentBehavior>();      // 强制接管
    follow.SetTargetAgent(target);
}
```

自定义一个组并注册（构造函数必须是 `(AgentNavigator, Mission)`，因为 `Activator.CreateInstance` 会按此签名实例化）：

```csharp
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.MountAndBlade;

public sealed class MyGuardGroup : AgentBehaviorGroup
{
    public MyGuardGroup(AgentNavigator navigator, Mission mission)
        : base(navigator, mission) { }

    public override float GetScore(bool isSimulation)
        => HasBehavior<StandGuardBehavior>() ? 0.5f : 0f;

    public override void Tick(float dt, bool isSimulation)
    {
        if (!IsActive) return;
        if (ScriptedBehavior != null) { ScriptedBehavior.IsActive = true; return; }
        if (!HasBehavior<StandGuardBehavior>()) AddBehavior<StandGuardBehavior>();
        if (GetActiveBehavior() == null) GetBehavior<StandGuardBehavior>().IsActive = true;
    }
}

// 注册：AgentNavigator 会自己 CreateInstance 并去重
agentNavigator.AddBehaviorGroup<MyGuardGroup>();
```

## 参见

- [AgentBehavior](../AgentBehavior) — 组内被容纳的元素，泛型接口的约束类型
- [AlarmedBehaviorGroup](../AlarmedBehaviorGroup) — 子类之一，警戒链的具体分组策略与 `AlarmFactor` 生产者
- [DailyBehaviorGroup](../DailyBehaviorGroup) — 子类之一，日常行为的加权随机选择策略
- [InterruptingBehaviorGroup](../InterruptingBehaviorGroup) — 子类之一，按可用度挑选打断行为
- [AgentNavigator](../../gameplay/AgentNavigator) — 持有多个组的上级调度器，负责组间竞争与激活
- [FollowAgentBehavior](../FollowAgentBehavior) — 官方最典型的 `AddBehavior` + `SetScriptedBehavior` 用例

## 导航

- [本区域目录](../)
- **上级：** [AgentNavigator](../../gameplay/AgentNavigator)
- **子类：** [DailyBehaviorGroup](../DailyBehaviorGroup) · [InterruptingBehaviorGroup](../InterruptingBehaviorGroup) · [AlarmedBehaviorGroup](../AlarmedBehaviorGroup)
- **相关：** [AgentBehavior](../AgentBehavior) · [FollowAgentBehavior](../FollowAgentBehavior)
