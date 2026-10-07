---
title: "AgentNavigator"
description: "SandBox 任务场景中单个 Agent 的导航与行为调度中枢：统一管理目标点/目标机器、每帧移动驱动、预制体显隐以及行为组与行为的增删查取。"
---
# AgentNavigator

**命名空间：** `SandBox`
**模块：** `SandBox`
**类型：** `public sealed class AgentNavigator`
**基类：** 无（sealed，不继承）
**源文件：** `SandBox/AgentNavigator.cs`（声明见第 17 行）

## 概述

AgentNavigator 是 SandBox 任务场景（城镇、村庄、酒馆、竞技场等 Mission）里"一个 agent 该怎么走、该做什么、身上该挂什么"的运行时中枢。Mission 层为每个参与场景演出的 Agent 配一个 AgentNavigator，把原本散落在 AI 系统里的三件事收拢到同一个对象上：

1. **目标管理**：当前要走向哪台可用机器（UsableMachine）、哪个世界坐标（WorldPosition）、哪个朝向（Vec2）、哪个实体（GameEntity），以及是否已经到达。这些都以只读属性暴露，见 `SandBox/AgentNavigator.cs:20`（TargetUsableMachine）、`:25`（TargetPosition）、`:30`（TargetDirection）、`:35`（TargetEntity）。
2. **行为调度**：通过泛型方法增删查取行为组（AgentBehaviorGroup）与行为（AgentBehavior），并维护"当前活跃行为/活跃行为组"的概念，见 `SandBox/AgentNavigator.cs:410`、`:425`、`:438`、`:535`、`:548`。
3. **视觉附件**：角色骨骼上的预制体（Prefab）与特殊物品的显隐，例如手里的火把、端着的酒杯、扛着的货物，见 `SandBox/AgentNavigator.cs:311`、`:344`、`:381`。

它同时承担"每帧驱动"的职责：`Tick(float dt, bool isSimulation = false)`（`SandBox/AgentNavigator.cs:196`）会读取当前目标、交给移动逻辑、刷新行为组，是场景里 agent 动起来的实际推手。因此它既不是纯数据容器，也不是纯 AI 决策器，而是**导航状态 + 行为编排 + 视觉表现**三者之间的粘合层。

典型生命周期：Mission 创建 Agent 时构造 navigator（`SandBox/AgentNavigator.cs:83` 或 `:95`），场景运行期反复 Tick 与切换目标，Agent 离场时由 `OnAgentRemoved(Agent agent)`（`SandBox/AgentNavigator.cs:120`）清理。

## 心智模型

把 AgentNavigator 想成挂在每个 Agent 身上的一个**小型调度台**，它自己不做路径寻路、也不做行为决策，只做四件事：

- **它是一张"目标票据"的持有者。** 所有 Target* 属性都是 `{ get; private set; }`，外部只能通过 `SetTarget` / `SetTargetFrame` / `ClearTarget` 三个入口改写。这意味着"谁在什么时候改了目标"是可追踪的：想换目标就调 SetTarget，想收工就 ClearTarget，不要在别处偷偷改。
- **它是一棵按类型索引的行为树。** 行为组不是用字符串或下标管理，而是用泛型类型做键：`AddBehaviorGroup<T>`（`SandBox/AgentNavigator.cs:410`）注册，`GetBehaviorGroup<T>`（`:425`）取回，`RemoveBehaviorGroup<T>`（`:470`）注销，`HasBehaviorGroup<T>`（`:454`）探测。同一类型只能存在一份，这决定了"要加两种相似行为"时必须先各自定义成不同的组类型。
- **它有两个时间尺度。** 慢尺度是行为组：一组行为在一段时间内负责 agent 的决策（例如"守卫巡逻""酒馆闲聊""惊慌逃散"）；快尺度是 `Tick`：每帧检查目标是否到达、是否要转向、是否要隐藏手上网格。`RefreshBehaviorGroups(bool isSimulation)`（`SandBox/AgentNavigator.cs:482`）是两者之间的桥，负责把当前活跃组的行为重新算一遍。
- **它是"表演"与"逻辑"的交界。** 逻辑侧只关心 agent 走到了没有（`IsTargetReached`，`:242`）；表演侧关心骨骼上的预制体露没露（`SetPrefabVisibility`，`:311`）。同一对象同时管两边，所以你在改目标时也要想到视觉状态需不需要跟着变（`HoldAndHideRecentlyUsedMeshes`，`:266` / `RecoverRecentlyUsedMeshes`，`:279`）。
- **活跃行为是"算出来的"，不是"设进去的"。** 没有 `SetActiveBehavior` 这样的方法，只有 `GetActiveBehavior()`（`:535`）与 `GetActiveBehaviorGroup()`（`:548`）去问。也就是说活跃项由行为组自身的优先级逻辑决定，你只能读取、刷新、或通过增删行为组来间接影响。

一句话：**目标靠 Set/Clear，行为靠泛型组，表现靠 Visibility，节拍靠 Tick。**

## 怎么用

### 怎么拿到

AgentNavigator 由 SandBox 场景代码在 Agent 建立时构造，不由外部直接 new 给已有 Agent。两条构造路径：

- `public AgentNavigator(Agent agent, LocationCharacter locationCharacter)` —— `SandBox/AgentNavigator.cs:83`。这是场景里最常用的入口：它会顺带把 LocationCharacter 上的 SpecialTargetTag、PrefabNamesForBones、SpecialItem、MemberOfAlley 搬进来，并调用 `SetItemsVisibility(true)` 与 `SetSpecialItem()`，即"带装备出场"的那条路。
- `public AgentNavigator(Agent agent)` —— `SandBox/AgentNavigator.cs:95`。主构造函数，负责初始化 `_mission`、`_conversationHandler`、OwnerAgent 以及内部的各个字典与列表；上一条构造函数最终会走到这里。

入口所在的源树位置：`SandBox/AgentNavigator.cs`，与之协作的命名空间为 `SandBox.Conversation`、`SandBox.Conversation.MissionLogics`、`SandBox.Missions.AgentBehaviors`，以及 `TaleWorlds.MountAndBlade`、`TaleWorlds.Engine`、`TaleWorlds.Library`、`TaleWorlds.CampaignSystem.Settlements`（含 `.Locations`）。

如果你的 mod 需要访问某个 Agent 的 navigator，正确做法是从 SandBox 的 Mission 行为体系里拿到它（Mission 侧在 Agent 创建/移除时同步创建与销毁，见 `SandBox/AgentNavigator.cs:120` 的 `OnAgentRemoved`），而不是自己构造第二个实例——同一 Agent 上存在两个 navigator 会导致目标与行为状态互相覆盖。

### 典型用法

**1）让 agent 走向一台机器（最常用）**

用 `SetTarget(UsableMachine usableMachine, bool isInitialTarget = false, Agent.AIScriptedFrameFlags customFlags = ...)`（`SandBox/AgentNavigator.cs:129`）。`isInitialTarget: true` 表示这是该 agent 的初始目标，会在到达后触发"待机/换岗"式的行为切换；`customFlags` 用来给这次移动叠加脚本化帧标志（例如禁止某些动作）。设置后用 `GetDistanceToTarget(UsableMachine target)`（`:231`）做距离判断，用 `IsTargetReached()`（`:242`）判断是否到位。

**2）只想走到一个坐标/朝向**

用 `SetTargetFrame(WorldPosition position, float rotation, float rangeThreshold = 1f, float rotationThreshold = -10f, ...)`（`SandBox/AgentNavigator.cs:168`）。适合"站到某点并面朝某方向"的演出需求，`rangeThreshold` 控制位置容差，`rotationThreshold` 控制朝向容差。

**3）每帧驱动**

`Tick(float dt, bool isSimulation = false)`（`SandBox/AgentNavigator.cs:196`）内部会走 `HandleMovement()`（`:253`）处理移动。**必须每帧调用**，否则 agent 会停在原地、行为组也不会刷新。`isSimulation` 为 true 时表示当前是模拟（非渲染）帧。

**4）编排行为**

先注册组：`AddBehaviorGroup<T>() where T : AgentBehaviorGroup`（`:410`）；再用 `GetBehaviorGroup<T>()`（`:425`）拿到实例去配置；需要单个行为时用 `GetBehavior<T>() where T : AgentBehavior`（`:438`）。运行中改了配置就调 `RefreshBehaviorGroups(bool isSimulation)`（`:482`）让活跃行为重算。要打断当前决策、让 agent 立刻重新想一次，用 `ForceThink(float inSeconds)`（`:401`）。

**5）控制身上的东西**

`SetPrefabVisibility(sbyte realBoneIndex, string prefabName, bool isVisible)`（`:311`）按骨骼索引 + 预制体名精确控制，配对的读取方法是 `GetPrefabVisibility(...)`（`:336`）。想一次性处理"最近用过的网格"用 `HoldAndHideRecentlyUsedMeshes()`（`:266`）与 `RecoverRecentlyUsedMeshes()`（`:279`）。整体开关用 `SetItemsVisibility(bool isVisible)`（`:381`）。`SetSpecialItem()`（`:344`）负责把当前特殊物品实体化。想判断 agent 手上是不是拿着东西，用 `IsCarryingSomething()`（`:305`）。

**6）视觉可达性判断**

`CanSeeAgent(Agent otherAgent)`（`SandBox/AgentNavigator.cs:289`）用于判断本 agent 是否能看到另一个 agent——常见于对话触发、警觉行为、以及"被看见才反应"的演出逻辑。

### 坑

- **属性全是只读的。** TargetUsableMachine、TargetPosition、TargetDirection、TargetEntity、MemberOfAlley、CharacterHasVisiblePrefabs 都是 `{ get; private set; }`（`SandBox/AgentNavigator.cs:20`、`:25`、`:30`、`:35`、`:40`、`:65`）。直接赋值编译不过，必须走 `SetTarget` / `SetTargetFrame` / `ClearTarget`（`:190`）这条正规通道。
- **SpecialTargetTag 是唯一带 setter 的。** 它设在 `SandBox/AgentNavigator.cs:45`，赋值时会通知当前活跃行为的 `OnSpecialTargetChanged()`。这意味着"改标签"是一次有副作用的操作，不要在一次 Tick 里反复改。
- **`_agentState` 命名带下划线但它是 public 属性。** 见 `SandBox/AgentNavigator.cs:60`，类型是内部的 `NavigationState` 枚举（`:606`）。它只是状态读数，不要试图用它来驱动逻辑。
- **行为组按类型唯一。** `AddBehaviorGroup<T>()`（`:410`）用类型做键，同类型重复添加不会得到两个组。要并行存在两套相似行为，必须定义成两个不同的组类型。
- **活跃行为不能直接设。** 只有 `GetActiveBehavior()`（`:535`）与 `GetActiveBehaviorGroup()`（`:548`）两个读取口。想让某个行为生效，正确路径是注册/移除行为组并 `RefreshBehaviorGroups`（`:482`），而不是去"设置活跃项"。
- **Tick 漏调是静默失败。** 没有异常、没有日志，agent 就是不动。排查"NPC 站桩"时先确认 navigator 的 Tick 是否每帧到达。
- **类是 sealed 的。** `public sealed class AgentNavigator`（`SandBox/AgentNavigator.cs:17`），无法继承扩展；要加自定义逻辑只能通过自定义 AgentBehaviorGroup / AgentBehavior 注入，而不是派生 navigator。
- **视觉状态与目标状态是两套。** 改了目标不代表手上网格会自动收好；`HoldAndHideRecentlyUsedMeshes()`（`:266`）与 `SetItemsVisibility(false)`（`:381`）需要你自己在合适的时机调用，否则会出现"人走了但道具留在原地/粘在身上"的观感问题。
- **Agent 离场要走 `OnAgentRemoved`。** 见 `SandBox/AgentNavigator.cs:120`。如果自行销毁 Agent 而不经过这条路径，内部字典里会留下悬空引用。
- **`OnStopUsingGameObject()`（`:112`）会清空目标。** 如果你在机器交互结束后还依赖 TargetUsableMachine 做后续判断，要在它被调用前把需要的值取走。

## 关键成员

| 成员 | 用途 |
| --- | --- |
| `AgentNavigator(Agent agent, LocationCharacter locationCharacter)` `SandBox/AgentNavigator.cs:83` | 场景侧主入口构造：搬迁 LocationCharacter 的标签、预制体名、特殊物品、所属巷道，并让装备可见 |
| `AgentNavigator(Agent agent)` `SandBox/AgentNavigator.cs:95` | 主构造函数：初始化 mission 引用、对话处理器、OwnerAgent 与内部容器 |
| `TargetUsableMachine` `SandBox/AgentNavigator.cs:20` | 当前目标可用机器（只读） |
| `TargetPosition` `SandBox/AgentNavigator.cs:25` | 目标世界坐标（只读） |
| `TargetDirection` `SandBox/AgentNavigator.cs:30` | 目标朝向向量（只读） |
| `TargetEntity` `SandBox/AgentNavigator.cs:35` | 目标实体（只读） |
| `MemberOfAlley` `SandBox/AgentNavigator.cs:40` | agent 所属的巷道，用于公共区域归属判断（只读） |
| `SpecialTargetTag` `SandBox/AgentNavigator.cs:45` | 特殊目标标签；唯一带 setter 的成员，赋值时通知活跃行为 |
| `_agentState` `SandBox/AgentNavigator.cs:60` | 当前导航状态读数（NavigationState 枚举） |
| `CharacterHasVisiblePrefabs` `SandBox/AgentNavigator.cs:65` | 角色当前是否有可见预制体（只读） |
| `SetTarget(...)` `SandBox/AgentNavigator.cs:129` | 设置目标机器，可标记为初始目标并附加脚本化帧标志 |
| `SetTargetFrame(...)` `SandBox/AgentNavigator.cs:168` | 设置目标坐标 + 朝向 + 位置/朝向容差 |
| `ClearTarget()` `SandBox/AgentNavigator.cs:190` | 清除当前目标 |
| `Tick(float dt, bool isSimulation)` `SandBox/AgentNavigator.cs:196` | 每帧驱动导航与行为组刷新 |
| `GetDistanceToTarget(UsableMachine)` `SandBox/AgentNavigator.cs:231` | 计算到目标机器的距离 |
| `IsTargetReached()` `SandBox/AgentNavigator.cs:242` | 判断是否已到达目标 |
| `HandleMovement()` `SandBox/AgentNavigator.cs:253` | 内部移动处理（由 Tick 调用） |
| `HoldAndHideRecentlyUsedMeshes()` `SandBox/AgentNavigator.cs:266` | 收起最近使用的网格（如放下手里的道具） |
| `RecoverRecentlyUsedMeshes()` `SandBox/AgentNavigator.cs:279` | 恢复之前收起的网格 |
| `CanSeeAgent(Agent)` `SandBox/AgentNavigator.cs:289` | 判断本 agent 是否能看到另一个 agent |
| `IsCarryingSomething()` `SandBox/AgentNavigator.cs:305` | 判断是否携带物品 |
| `SetPrefabVisibility(sbyte, string, bool)` `SandBox/AgentNavigator.cs:311` | 按骨骼索引 + 预制体名设置可见性 |
| `GetPrefabVisibility(sbyte, string)` `SandBox/AgentNavigator.cs:336` | 读取指定预制体的可见性 |
| `SetSpecialItem()` `SandBox/AgentNavigator.cs:344` | 生成/设置当前特殊物品 |
| `SetItemsVisibility(bool)` `SandBox/AgentNavigator.cs:381` | 批量开关物品可见性 |
| `SetCommonArea(Alley)` `SandBox/AgentNavigator.cs:391` | 设置 agent 的公共区域归属 |
| `ForceThink(float)` `SandBox/AgentNavigator.cs:401` | 强制 agent 在指定秒数内重新思考决策 |
| `AddBehaviorGroup<T>()` `SandBox/AgentNavigator.cs:410` | 注册行为组（按类型唯一） |
| `GetBehaviorGroup<T>()` `SandBox/AgentNavigator.cs:425` | 取回已注册的行为组实例 |
| `GetBehavior<T>()` `SandBox/AgentNavigator.cs:438` | 取回某个行为实例 |
| `HasBehaviorGroup<T>()` `SandBox/AgentNavigator.cs:454` | 探测某行为组是否已注册 |
| `RemoveBehaviorGroup<T>()` `SandBox/AgentNavigator.cs:470` | 注销行为组 |
| `RefreshBehaviorGroups(bool)` `SandBox/AgentNavigator.cs:482` | 重算行为组与活跃行为 |
| `GetActiveBehavior()` `SandBox/AgentNavigator.cs:535` | 获取当前活跃行为 |
| `GetActiveBehaviorGroup()` `SandBox/AgentNavigator.cs:548` | 获取当前活跃行为组 |
| `NavigationState`（枚举） `SandBox/AgentNavigator.cs:606` | 导航状态取值集合 |
| `OnStopUsingGameObject()` `SandBox/AgentNavigator.cs:112` | 停止使用 GameObject 时清空目标 |
| `OnAgentRemoved(Agent)` `SandBox/AgentNavigator.cs:120` | Agent 被移除时的清理钩子 |

## 真实示例

```csharp
// 1) 构造：把 LocationCharacter 的装备与标签一并带进导航器（SandBox/AgentNavigator.cs:83）
var navigator = new AgentNavigator(agent, locationCharacter);

// 2) 给一个初始目标机器，并附加本次移动的脚本化帧标志（SandBox/AgentNavigator.cs:129）
navigator.SetTarget(usableMachine, isInitialTarget: true);

// 3) 场景循环里每帧驱动；漏掉这一步 agent 会静止不动（SandBox/AgentNavigator.cs:196）
navigator.Tick(dt, isSimulation: false);

// 4) 到位后收工：清目标 + 收起手上道具 + 强制重想（:190 / :266 / :401）
if (navigator.IsTargetReached())
{
    navigator.ClearTarget();
    navigator.HoldAndHideRecentlyUsedMeshes();
    navigator.ForceThink(0.5f);
}

// 5) 需要换一种行为时，注册行为组并重算（SandBox/AgentNavigator.cs:410 / :482）
if (!navigator.HasBehaviorGroup<AgentBehaviorGroup>())
{
    navigator.AddBehaviorGroup<AgentBehaviorGroup>();
}
navigator.RefreshBehaviorGroups(isSimulation: false);
```

## 参见

- [Agent](../../mission/Agent)
- [Mission](../../mission/Mission)
- [Campaign](../../campaign/Campaign)

## 导航

- ↑ [版本首页](../../../)
- ↑ [API 参考](../../)
- ↔ [架构总览](../../../architecture/)
