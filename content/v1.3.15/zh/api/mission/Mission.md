---
title: "Mission"
description: "战斗/场景实例的全局入口：当前任务、状态、队伍、Agent 与 MissionObject 的协调中心。"
---
# Mission

**Namespace:** TaleWorlds.MountAndBlade  
**Module:** TaleWorlds.MountAndBlade  
**Type:** `public class Mission : ISceneStateHolder`  
**Base:** —  
**File:** `TaleWorlds.MountAndBlade/Mission.cs`

## 概述

`Mission` 代表 Bannerlord 中**一个正在运行的战斗或场景实例**：战场、竞技场、攻城战、酒馆场景、藏身处奇袭、大地图遭遇战等都属于 Mission。它负责：

- 维护当前场景 (`Scene`) 和运行状态 (`Mission.State`)
- 管理 `Agent`（战场上的士兵、玩家、马匹等）
- 管理 `Team` 与 `Formation`
- 维护 `MissionObject`（如攻城器械、门、旗帜、触发器等）
- 通过 `Mission.Current` 提供全局访问

如果说 `Campaign` 是战役地图的“世界对象”，那么 `Mission` 就是战斗/场景层的世界对象。

## 心智模型

把 `Mission` 看作**“当前场景的沙盒控制器”**：

- 不要自己 `new Mission()`；Mission 由引擎在加载场景时创建，通过 `Mission.Current` 访问。
- 如果 `Mission.Current == null`，说明当前不在任何场景/战斗中。
- 它本身是**实时单例**：切换场景（从大地图进入战斗、从战斗返回大地图）会创建新的 Mission 实例。
- 修改 Mission 行为通常通过 `MissionBehavior` 子类；直接操作 `Mission` 适合获取信息或触发即时效果（刷 Agent、改变天气、结束战斗等）。

## 如何访问 Mission

```csharp
Mission mission = Mission.Current;
if (mission == null) return;

// 常见访问方式
Agent mainAgent = mission.MainAgent;
List<Agent> agents = mission.Agents.ToList();
Team playerTeam = mission.PlayerTeam;
MissionObject missionObject = mission.GetMissionBehavior<MyMissionBehavior>();
```

## 核心属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `Mission.Current` | `Mission` | 当前场景实例。 |
| `MainAgent` | `Agent` | 玩家控制的 Agent（第一人称/第三人称角色）。 |
| `PlayerTeam` | `Team` | 玩家所在队伍。 |
| `Teams` | `MBList<Team>` | 当前 Mission 中的所有队伍。 |
| `Agents` | `MBList<Agent>` | 所有 Agent。 |
| `MissionObjects` | `IEnumerable<MissionObject>` | 所有 MissionObject。 |
| `CurrentState` | `Mission.State` | 当前状态：`Playing`、`Over`、`Ending` 等。 |
| `Scene` | `Scene` | 底层场景对象；可用来放特效、查询地形等。 |
| `CurrentTime` | `float` | Mission 开始后的累计秒数。 |
| `Mode` | `MissionMode` | 任务模式：战斗、竞技场、对话、 stealth 等。 |

## 主要方法

### `public static Mission Current { get; }`
全局访问点。在 `MissionBehavior` 里通常开头就判断 `Mission.Current != null`。

### `public T GetMissionBehavior<T>() where T : MissionBehavior`
按类型获取附加在当前 Mission 上的 `MissionBehavior` 实例。

```csharp
var myBehavior = Mission.Current.GetMissionBehavior<MyMissionBehavior>();
myBehavior?.TriggerSpecialEvent();
```

### `public Agent SpawnAgent(IAgentOriginBase agentOrigin, ...)`
在场景中生成一个 Agent。这是刷兵、召唤增援、生成特殊单位的常用入口。

```csharp
Agent agent = Mission.Current.SpawnAgent(
    new PartyAgentOrigin(Clan.PlayerClan.Party, characterObject),
    isPlayerSide: true,
    hasMount: false);
```

### `public void EndMission()` / `public void EndMissionAsVictorious()` / `public void EndMissionAsDefeated()`
提前结束当前 Mission。常用于自定义任务达成目标后强制退出战斗。

```csharp
public void OnBossKilled()
{
    Mission.Current.EndMissionAsVictorious();
}
```

### `public void AddMissionObject(MissionObject missionObject)`
向场景添加 MissionObject。

```csharp
var flag = new MyCustomFlag();
Mission.Current.AddMissionObject(flag);
```

### `public Team GetTeam(TeamSideEnum teamSide)`
按阵营侧获取队伍。

```csharp
Team defenderTeam = Mission.Current.GetTeam(TeamSideEnum.Defender);
```

## 典型用法示例

### 示例 1：在每帧更新中检测玩家 Agent

```csharp
public override void OnMissionTick(float dt)
{
    base.OnMissionTick(dt);

    Agent main = Mission.Current?.MainAgent;
    if (main == null || !main.IsActive()) return;

    if (main.Health < main.HealthLimit * 0.25f)
    {
        // 玩家残血触发某个效果
    }
}
```

### 示例 2：自定义 MissionBehavior 里 spawn 一支小队

```csharp
public class MySpawnBehavior : MissionBehavior
{
    public override MissionBehaviorType BehaviorType => MissionBehaviorType.Other;

    public void SpawnReinforcements()
    {
        CharacterObject troop = MBObjectManager.Instance.GetObject<CharacterObject>("imperial_recruit");
        for (int i = 0; i < 5; i++)
        {
            Agent agent = Mission.Current.SpawnAgent(
                new PartyAgentOrigin(Clan.PlayerClan.Party, troop),
                isPlayerSide: true,
                hasMount: false);
        }
    }
}
```

### 示例 3：获取所有敌人 Agent

```csharp
var enemies = Mission.Current.Agents
    .Where(a => a.IsActive() && a.Team.Side != Mission.Current.PlayerTeam.Side)
    .ToList();
```

## 跨版本提示

- v1.3.0 / v1.3.15 / v1.4.5：`Mission.Current` 与核心 API 保持稳定；v1.4.5 将部分网络同步逻辑拆分到 `MissionNetworkHelper`。
- 跨版本兼容写法：尽量通过 `Mission.Current` 访问，避免直接构造 `Mission` 或访问内部字段。

## 参见

- [MissionBehavior](../MissionBehavior/) — 自定义 Mission 生命周期与事件
- [Agent](../Agent/) — 战场上的单个单位
- [Team](../Team/) — 队伍与阵营
- [Formation](../Formation/) — 编队系统
- [MissionObject](../../mission-ext/MissionObject/) — 场景对象与交互物
