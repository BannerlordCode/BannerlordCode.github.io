---
title: "CampaignAgentComponent"
description: "Sandbox AgentComponent 桥接层：连接战役所有权、AgentNavigator 创建、AI tick 和战斗士气输入。"
---
# CampaignAgentComponent

**Namespace:** `SandBox`
<br>**Module:** `SandBox`
<br>**Type:** `public class CampaignAgentComponent : AgentComponent`
<br>**Base:** `AgentComponent`
<br>**File:** `Modules.SandBox/SandBox/Sandbox/CampaignAgentComponent.cs`

## 一句话职责

`CampaignAgentComponent` 是挂在战役 [`Agent`](../../mission/Agent) 上的 Sandbox 组件：暴露所属 [`PartyBase`](../../campaign/PartyBase)，创建 Agent 的 [`AgentNavigator`](../../gameplay/AgentNavigator)，转发移除/停止使用/tick 生命周期，并提供战斗士气计算所需的实时值。

## 心智模型

这个组件是引擎 `AgentComponent` 列表与 Sandbox 战役行为之间的适配层。[`CampaignMissionComponent`](../CampaignMissionComponent) 在 `OnAgentCreated` 中添加它；它不创建 Agent，也不是 Campaign 存档对象。[`MissionAgentHandler`](../MissionAgentHandler) 会在生成并配置 Agent 后调用 `CreateAgentNavigator` 重载。

它管理两层状态：

- `AgentNavigator` 是可选的 Mission 临时状态，负责这个 Agent 的导航目标、行为组、临时 prefab 和特殊物品。
- `OwnerParty` 与两个士气方法从 `Agent.Origin` 和当前 `MapEvent` 读取战役/战斗上下文，每次运行时计算，不会作为存档字段复制到组件中。

组件的 `OnTick` 有明确门禁：只有 `Agent.Mission.AllowAiTicking` 为真且 Agent 受 AI 控制时，才 tick 导航器。玩家控制的 Agent、暂停的 AI 阶段或没有导航器的 Agent，都不会通过这个组件进入导航循环。

## 何时用，何时不用

**适合使用：**

- 已经取得一个存活的战役 Agent，需要读取它的 Sandbox 导航器或所属 Party 时。
- 自定义 Sandbox Mission 创建了 Agent，并且明确需要一个新的 `AgentNavigator` 时。
- 需要观察 Sandbox 组件在地图战斗或围城突击中提供给 Agent 系统的准确士气输入时。
- 组件/生命周期回调需要把 Agent 移除或停止使用游戏对象事件转发给导航器时。

**不适合使用：**

- 要创建 Agent、Party、Hero 或 Campaign 实体时；使用所属 Mission 的生成流程或 Campaign API。
- 要修改持久 Party 士气或 Campaign 状态时；这些方法只计算临时 Agent 输入，持久状态应放入 Campaign 行为，并遵守对应 Model/Action 契约。
- 要实现通用 Agent 导航时；只有带有此组件的战役 Agent 才有 Sandbox 导航桥接。
- 正常游戏中要替换导航器时；`CreateAgentNavigator` 会覆盖属性并遗弃旧导航器的行为组和目标。
- 要手动 tick AI 时；让组件的 `OnTick` 和 Mission 生命周期提供正常节奏。

## 依赖关系

**上游：**

- [`CampaignMissionComponent`](../CampaignMissionComponent) 在战役 Mission 的 `OnAgentCreated` 路径中调用 `Agent.AddComponent(new CampaignAgentComponent(agent))`。
- [`MissionAgentHandler`](../MissionAgentHandler) 在生成/配置地点角色 Agent 后创建导航器。
- [`Agent`](../../mission/Agent) 提供 `Mission`、`Origin`、AI 控制状态和组件所有权。
- [`LocationCharacter`](../../campaign/LocationCharacter) 为地点角色重载提供可选的视觉和行为上下文。

**下游：**

- [`AgentNavigator`](../../gameplay/AgentNavigator) 接收实时 Agent 和 Mission，并持有导航/行为组运行时状态。
- [`Mission`](../../mission/Mission) 控制 AI tick 门禁并持有 Agent 的场景生命周期。
- [`PartyBase`](../../campaign/PartyBase) 与 [`MapEvent`](../../campaign/MapEvent) 提供所有者、围城、阵营和相对兵力输入。
- Sandbox 行为和 Mission handler 通过 `agent.GetComponent<CampaignAgentComponent>()` 读取 `AgentNavigator`。

## 真实获取路径

组件由游戏安装；mod 应从 Agent 读取它，不要再构造第二个组件：

```csharp
using SandBox;
using SandBox.Missions.AgentBehaviors;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.MountAndBlade;

Agent agent = Agent.Main;
CampaignAgentComponent component =
    agent?.GetComponent<CampaignAgentComponent>();

if (component != null)
{
    AgentNavigator navigator = component.AgentNavigator;
    PartyBase ownerParty = component.OwnerParty;
    if (navigator != null)
    {
        AgentBehaviorGroup activeGroup =
            navigator.GetActiveBehaviorGroup();
    }
}
```

只有在 Campaign Mission 组件处理过 Agent 创建后，才能保证这个组件存在。如果自定义 Agent 生成流程明确还没有导航器，应在 Agent 拥有有效 Mission 和视觉状态后调用一次 `component.CreateAgentNavigator()`；不要在构造函数中或 Mission 初始化前调用。

## 公开状态

### `AgentNavigator`

`public AgentNavigator AgentNavigator { get; private set; }` 返回为此组件创建的可选导航器。setter 是私有的；新挂载或刻意精简的战役 Agent 返回 `null` 是合法状态。两个 `CreateAgentNavigator` 重载都会替换这个属性。

```csharp
AgentNavigator navigator = component.AgentNavigator; // 可能为 null
if (navigator != null)
{
    AgentBehaviorGroup group = navigator.GetActiveBehaviorGroup();
}
```

### `OwnerParty`

`public PartyBase OwnerParty { get; }` 读取 `Agent.Origin.BattleCombatant` 并转换为 `PartyBase`。Agent 没有 origin、combatant 不是 Party，或不在 Campaign Party 流程中时，它可能为 `null`。不要把它当作持久所有权赋值，也不要在 Agent 被移除后继续缓存。

```csharp
PartyBase ownerParty = component.OwnerParty; // 可能为 null，使用前判空
if (ownerParty != null)
{
    // 仅作为读取上下文，不要把它当作可持久化的所有权
}
```

## 导航器创建与生命周期

### `CreateAgentNavigator(LocationCharacter locationCharacter)`

构造 `new AgentNavigator(Agent, locationCharacter)`，赋给 `AgentNavigator` 并返回。地点角色重载会传递特殊目标标签、骨骼 prefab 映射、特殊物品和 alley 上下文，然后执行导航器的初始视觉/装备设置。

应在 Sandbox `MissionAgentHandler` 相同的阶段调用，也就是 Agent 的场景视觉和 `LocationCharacter` 数据就绪之后。重复调用会替换旧导航器，不会迁移行为组、机器目标或临时视觉状态。

```csharp
// 仅在 Agent 场景视觉与 LocationCharacter 就绪后调用（与 MissionAgentHandler 同阶段）
AgentNavigator navigator = component.CreateAgentNavigator(locationCharacter);
```

### `CreateAgentNavigator()`

构造 `new AgentNavigator(Agent)`，赋给 `AgentNavigator` 并返回空的地点角色上下文。Sandbox 对不来自 `LocationCharacter`、但仍需要行为/导航的 Agent 使用这个重载。

返回对象仍然只属于当前 Mission。创建它不会注册新 Agent、挂载 Campaign 行为，也不会让 Agent 变成 AI 控制。

```csharp
// 对不来自 LocationCharacter 但仍需导航/行为的 Agent 使用；返回对象只属于当前 Mission
AgentNavigator navigator = component.CreateAgentNavigator();
```

### `OnAgentRemoved(Agent agent)`

把被移除 Agent 的通知转发给 `AgentNavigator?.OnAgentRemoved(agent)`。这样行为组可以在相关 Agent 离开 Mission 时释放运行时目标引用。组件不会保存或复活被移除的 Agent。

```csharp
// 引擎在 Agent 离开 Mission 时调用；组件转发给导航器以释放运行时目标引用
AgentNavigator navigator = component.AgentNavigator;
navigator?.OnAgentRemoved(agent); // 等价于组件内部的转发
```

### `OnStopUsingGameObject()`

所有者受 AI 控制时，把停止使用游戏对象事件转发给 `AgentNavigator?.OnStopUsingGameObject()`。玩家控制的 Agent 不进入这个分支。回调会清除导航器中的机器目标状态，不是所有行为组的通用重置。

```csharp
// 仅当所有者受 AI 控制时由引擎调用；清除导航器中的机器目标状态
AgentNavigator navigator = component.AgentNavigator;
navigator?.OnStopUsingGameObject();
```

### `OnTick(float dt)`

覆盖 `AgentComponent.OnTick`。只有 `Agent.Mission.AllowAiTicking` 和 `Agent.IsAIControlled` 同时为真时，才调用 `AgentNavigator?.Tick(dt)`。没有导航器时不会 tick，玩家控制的 Agent 也不会通过这里运行导航器。

不要手动调用它来绕过 Mission 的暂停/结束状态。如果自定义模拟需要不同节奏，应明确拥有那套模拟，不要和正常 Agent 组件生命周期混用。

```csharp
// 引擎每个 AI tick 调用；其门禁等价于：
if (agent.Mission.AllowAiTicking && agent.IsAIControlled)
    component.AgentNavigator?.Tick(dt);
```

## 士气输入

### `GetMoraleDecreaseConstant()`

根据所有者当前 `MapEvent` 返回临时的 Agent 士气下降倍率：

- 没有 owner party、没有 map event，或事件不是围城突击时返回 `1f`。
- owner party 不在 map event 的进攻方 party 列表中时返回 `0.5f`。
- owner party 在进攻方列表中时返回 `0.33f`。

此方法不修改 Party 士气，也不保存结果；它只是当前战斗上下文存在时供 Agent 士气系统使用的输入。

```csharp
float decrease = component.GetMoraleDecreaseConstant();
```

### `GetMoraleAddition()`

根据当前 `MapEvent` 返回临时的士气加成：

- owner party 没有 map event 时返回 `0f`。
- 有活动事件且 Party 是 mobile 时，加上 `(OwnerParty.MobileParty.Morale - 50f) / 2f`。
- 使用 `MapEvent.GetStrengthsRelativeToParty(OwnerParty.Side, ...)` 得到相对兵力后，加上 `relativeStrength / (relativeStrength + opposingStrength) * 10f - 5f`。

它只读取当前 Party/事件值，没有存档或写入副作用；随着战斗和 Party 士气变化，同一方法的结果也会变化。

```csharp
float addition = component.GetMoraleAddition();
```

## 风险与崩溃边界

- 直接构造 `CampaignAgentComponent` 不会把它安装进 Agent。只有拥有自定义 Agent 创建流程时才使用 `Agent.AddComponent`；不要给已有 Agent 添加重复组件。
- `AgentNavigator` 可以为 `null`，并且会被 `CreateAgentNavigator` 替换。重复创建可能遗弃活动机器 detachment、行为组状态或原生视觉组件引用。
- `OwnerParty` 依赖 `Agent.Origin` 和当前 combatant 类型。读取 `MapEvent`、`Side` 或 `MobileParty` 前必须判空。
- 两个士气方法是实时读取。不要从存档代码调用，也不要把返回值当作持久士气修改。
- `OnTick` 必须处在 Agent/Mission 生命周期门禁下。暂停、结束或移除 Mission 时手动 tick，可能访问已经释放的导航器状态或重复原生移动工作。
- `OnAgentRemoved` 和 `OnStopUsingGameObject` 会转发到运行时状态。延迟回调若继续持有组件，必须停止使用其导航器。
- 组件没有 `SyncData` 契约。Campaign 状态应保存到已注册 Campaign 行为中；新 Mission 打开时重新创建 Mission Agent 组件和导航器。

## 参见与双向导航

- ↑ 父级：[Campaign extension 模块索引](../)
- ↔ 导航器：[AgentNavigator](../../gameplay/AgentNavigator) · [CampaignMissionComponent](../CampaignMissionComponent)
- Agent 生命周期：[Agent](../../mission/Agent) · [Mission](../../mission/Mission) · [MissionAgentHandler](../MissionAgentHandler)
- Campaign 上下文：[PartyBase](../../campaign/PartyBase) · [MapEvent](../../campaign/MapEvent) · [LocationCharacter](../../campaign/LocationCharacter)
- 文档契约：[Doc Contract](../../../architecture/doc-contract)
- 中文/English：[CampaignAgentComponent](../../../../en/api/campaign-ext/CampaignAgentComponent)
