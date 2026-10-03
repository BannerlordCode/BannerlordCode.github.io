---
title: "AgentBuildData"
description: "生成 Agent 的建造参数包：约 45 个链式 setter 描述「造谁、在哪、朝哪、编进哪支阵型、穿什么」，最终由 Mission.SpawnAgent 一次性消费。"
---

# AgentBuildData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentBuildData`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`

## 概述

`AgentBuildData` 是「造一个 [Agent](../../mission/Agent/) 需要的所有决定」的打包类，395 行里只有一个私有无参构造、三个公开构造、以及约 45 个**返回 `this` 的链式 setter**。它被 [Mission](../../mission/Mission/) 的 `SpawnAgent(AgentBuildData, bool)` 一次性消费——`Mission.cs:4074` 之后是一整段顺序读取：先读 `AgentCharacter` 判空、再读 `AgentIndexOverriden` / `AgentIndex` 决定 native 索引、然后 `AgeOverriden` / `BodyPropertiesOverriden` / `GenderOverriden` 三个布尔决定要不要覆盖、`SetTeam` / `SetClothingColor1` / `SetRandomizeColors`、最后读 `AgentFormation` 与 `AgentInitialPosition` 决定站位。

数据本身分两半：**约 21 个属性是 `=> AgentData.X` 的转发**，真正的存储在 [AgentData](../../core-extra/AgentData/) 里（装备、怪物、颜色、体型、年龄、性别、种族）；剩下约 24 个是它自己的 `private set` 私有属性（控制方、队伍、阵型、初始位置与朝向、index 覆盖、旗帜、网络 peer）。搞混这两半是本类最常见的误读。

## 心智模型

把它当成**「建造订单」而不是「Agent 的描述」**，四个推论：

第一，**它是单向的：写进去，spawn 一次，扔掉。** 全树没有任何一处会长期持有它。`Mission.SpawnAgent` 读完之后就完成了使命，之后 Agent 的状态变了（比如掉血、换装）不会回写。**它是建造单不是活体引用。**

第二，**私有无参构造是所有默认值来源**。`private AgentBuildData()` 设了 `AgentController = AgentControllerType.AI`、`AgentTeam = TaleWorlds.MountAndBlade.Team.Invalid`、`AgentFormation = null`、`AgentMissionPeer = null`、`AgentFormationTroopSpawnIndex = -1`、`UseFaceCache = false`、`FaceCacheId = 0`。三个公开构造都先 `: this()` 再赋 `AgentData`——所以走公开构造时这些默认值一定成立。

第三，**三个公开构造对应三种「从哪来」**。`AgentBuildData(AgentData)` 让你复用已有的 AgentData（最常用）；`AgentBuildData(IAgentOriginBase)` 从一支部队来源生成（内部 `new AgentData(agentOrigin)`）；`AgentBuildData(BasicCharacterObject)` 从一个裸角色生成（内部 `new AgentData(characterObject)`）。

第四，**`RandomizeColors` 不是字段而是计算属性**。它的逻辑是：`AgentCharacter != null && !AgentCharacter.IsHero` 时返回 `AgentMissionPeer == null`，否则返回 false。语义是「这是一个非英雄的野兵 / NPC 兵，且它不是联机对端的兵——那才让引擎随机化它的衣服颜色」。**英雄和联机玩家的兵永远不随机。**

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentData` | `public AgentData AgentData { get; private set; }` | 底层数据包，承载装备、怪物、颜色、体型、年龄、性别、种族等。下面所有 `=> AgentData.X` 的属性都读它。`private set`，只能通过三个公开构造填。 |
| `AgentData(AgentData)` | 构造器 | 复用已有 [AgentData](../../core-extra/AgentData/) 的入口。想在别人已经调好装备/体型之后再改阵型/站位时用这个。 |
| `AgentData(IAgentOriginBase)` | 构造器 | 从一支部队来源（`origin`）生成，内部 `new AgentData(agentOrigin)`。`AgentOrigin` 属性会因此有值，而 `SpawnAgent` 里 `agent.Origin = agentBuildData.AgentOrigin` 就会执行——**没走这个构造的 Agent 没有 Origin，战绩与击杀记账会缺一块**。 |
| `AgentData(BasicCharacterObject)` | 构造器 | 从裸角色对象生成，内部 `new AgentData(characterObject)`。适合「场上凭空造一个没有部队来源的 NPC」。 |
| `InitialPosition` / `InitialDirection` | `public AgentBuildData InitialPosition(in Vec3 position)` / `InitialDirection(in Vec2 direction)` | 显式指定初始世界坐标与朝向，**形参带 `in`，调用时也必须写 `in`**。`SpawnAgent` 里先看 `agentBuildData.AgentInitialPosition.HasValue`：有值就直接 `new WorldPosition(...)` 建阵型站位；没值才走部署计划 / 玩家出生帧那一大段回退逻辑。 |
| `InitialFrameFromSpawnPointEntity` | `public AgentBuildData InitialFrameFromSpawnPointEntity(GameEntity entity)` 与 `...(WeakGameEntity entity)` 两个重载 | 从场景里的出生点实体一次性取位置与朝向：`entity.GetGlobalFrame()`，位置取 `origin`，朝向取 `rotation.f.AsVec2.Normalized()`。**两个重载接收不同的实体类型**，选错了编译不过——刚创建的强引用用 `GameEntity`，弱引用用 `WeakGameEntity`。 |
| `Formation` | `public AgentBuildData Formation(Formation formation)` | 把这个 Agent 编进指定阵型。`SpawnAgent` 会检查 `agentFormation != null && !agentFormation.HasBeenPositioned`——阵型已经摆好位置时这次设置被跳过。 |
| `Controller` / `Team` | `public AgentBuildData Controller(AgentControllerType controller)` / `Team(Team team)` | 谁控制这个 Agent、属于哪支队。默认值是 `AgentControllerType.AI` 与 `Team.Invalid`——**忘记设 Team 会得到一个不属于任何一方的游离 Agent**。 |
| `Index` / `MountIndex` | `public AgentBuildData Index(int index)` / `MountIndex(int mountIndex)` | 覆盖 native 侧的 Agent 索引与坐骑索引。`SpawnAgent` 里 `AgentIndexOverriden` 为 true 时才把 `AgentIndex` 传给 `CreateAgent` 的 `forcedAgentIndex`——**覆盖索引会和既有 Agent 冲突，导致两个 Agent 抢同一个下标**。 |
| `VisualsIndex` | `public AgentBuildData VisualsIndex(int index)` | 指定复用哪一份 [AgentVisuals](../AgentVisuals/) 视觉资源。多人战场里同兵种复用视觉是省性能的主要手段。 |
| `MissionPeer` / `OwningMissionPeer` | `public AgentBuildData MissionPeer(MissionPeer missionPeer)` / `OwningMissionPeer(MissionPeer missionPeer)` | 联机对端归属。`MissionPeer` 参与 `RandomizeColors` 的计算；两者都对战斗记账有意义。**单人任务里传 null 是正常路径。** |
| `Equipment` / `MissionEquipment` | `public AgentBuildData Equipment(Equipment equipment)` / `MissionEquipment(MissionEquipment missionEquipment)` | 指定生成时的装备底表。前者是战役侧的静态装备，后者是任务内动态（含已装备武器实例）的装备。**`MissionEquipment` 没有对应的读属性**，它是 `AgentOverridenSpawnMissionEquipment` 的唯一写入口。 |
| `RandomizeColors` | `public bool RandomizeColors`（只读） | 计算属性：`AgentCharacter != null && !AgentCharacter.IsHero` 时返回 `AgentMissionPeer == null`。**英雄与联机对端的兵不随机化颜色。** `SpawnAgent` 里 `agent.SetRandomizeColors(...)` 直接吃这个值。 |
| `UseFaceCache` / `FaceCacheId` | `public bool UseFaceCache { get; set; }` / `public int FaceCacheId { get; set; }` | **全类仅有的两个公开可写属性**（其余全部 `private set` 或只读）。控制是否复用缓存中的脸部生成结果与用哪一份缓存——多人战场同兵种共享脸部是常见优化。 |
| `Banner` / `BannerItem` / `BannerReplacementWeaponItem` | 三个对应 setter | 给这个 Agent 挂旗帜 / 旗帜物品 / 替换用的武器物品。三个都写 `private set` 属性，`SpawnAgent` 之后再消费。 |
| `CanSpawnOutsideOfMissionBoundary` | `public AgentBuildData CanSpawnOutsideOfMissionBoundary(bool canSpawn)` | 允许在任务边界外生成（用于大地图无缝过渡、追击战）。默认 false。 |
| `FormationTroopSpawnCount` / `FormationTroopSpawnIndex` | 两个对应 setter | 声明「本队一共有多少个 spawn 点单位」「我是第几个」。`FormationTroopSpawnIndex` 默认值是 `-1`（私有构造里设的），这是「未设置」的哨兵值。 |

## 真实示例

最常见的三段式：链式 setter 造参数，然后 `SpawnAgent`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public void SpawnReinforcementUnit(BasicCharacterObject troop, Team team, Formation formation)
{
    AgentBuildData buildData = new AgentBuildData(troop)
        .Team(team)
        .Controller(AgentControllerType.AI)
        .Formation(formation)
        .IsReinforcement(true)
        .UseFaceCache(true)
        .FaceCacheId(3);

    Agent spawned = Mission.Current.SpawnAgent(buildData);
    Debug.Print("spawned agent index = " + spawned.Index, 0);
}
```

从一支部队来源生成，让 Agent 带上 Origin（战绩记账必需）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public void SpawnFromOrigin(IAgentOriginBase origin, Team team)
{
    AgentBuildData buildData = new AgentBuildData(origin)
        .Team(team)
        .Controller(AgentControllerType.AI)
        .TroopOrigin(origin)
        .SpawnsIntoOwnFormation(true);
    Agent spawned = Mission.Current.SpawnAgent(buildData);
    Debug.Print("origin seeded agent, index = " + spawned.Index, 0);
}
```

从场景出生点实体取位置与朝向——注意 `in` 形参和实体类型重载：

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

GameEntity spawnPoint = Mission.Current.Scene.FindEntityWithTag("my_spawn_point");
if (spawnPoint == null)
{
    return;
}
AgentBuildData buildData = new AgentBuildData(troop)
    .Team(mission.PlayerEnemyTeam)
    .InitialFrameFromSpawnPointEntity(spawnPoint)
    .CanSpawnOutsideOfMissionBoundary(true);
Mission.Current.SpawnAgent(buildData);
```

先读一遍参数再决定要不要覆盖——这就是 `SpawnAgent` 内部读的那批字段：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

AgentBuildData buildData = new AgentBuildData(Hero.MainHero.CharacterObject)
    .Team(mission.AttackerTeam)
    .Index(31)
    .MountIndex(47);

Debug.Print("controller = " + buildData.AgentController, 0);
Debug.Print("team side = " + buildData.AgentTeam.Side + " indexOverriden = " + buildData.AgentIndexOverriden, 0);
Debug.Print("randomizeColors = " + buildData.RandomizeColors + " faceCache = " + buildData.UseFaceCache, 0);
```

## 风险与边界

- **单向建造单，不是活体引用。** spawn 之后 Agent 的任何变化都不回写；把它当「Agent 的数据源」会读到过期值。
- **默认值里 `AgentTeam = Team.Invalid`。** 忘记 `.Team(...)` 会造出不属于任何一方的 Agent，后续 `SetTeam` 传 Invalid 的行为不可预期。
- **`in` 形参不能省。** `InitialPosition(in Vec3)` / `InitialDirection(in Vec2)` 在调用处也必须写 `in`。
- **`InitialFrameFromSpawnPointEntity` 有两个重载。** `GameEntity` 与 `WeakGameEntity` 不通用，选错编译失败。
- **`Index` 覆盖会和既有 Agent 抢 native 下标。** `AgentIndexOverriden` 为 true 时 `SpawnAgent` 把 `AgentIndex` 直接当 `forcedAgentIndex` 传给 `CreateAgent`，重复下标的后果是索引语义错乱，不是友好异常。
- **`Mission.SpawnAgent` 在 `AgentCharacter == null` 时抛 `MBNullParameterException("npcCharacterObject")`。** 走 `AgentBuildData(BasicCharacterObject null)` 或 origin 里没有 troop 时容易踩。
- **`SpawnAgent` 会顺手改你的参数对象。** 源码里在年龄为 0 时会 `agentBuildData.Age(29)`，年龄过小时会 `agentBuildData.Age(27)`——**你的建造单在 spawn 之后已经被改过了**。同一个 buildData 复用两次会得到不同结果。
- **`MissionEquipment` 没有读属性。** 写进去就看不到，只能从 `Agent` 侧读。
- **`RandomizeColors` 是只读计算值**，没有 setter。想改只能改 `MissionPeer` 或换角色。
- **不是存档数据。** 全类无 `[Serializable]`、无 `SyncData`；任务结束即丢弃。

## 依赖关系

- 底层存储：[AgentData](../../core-extra/AgentData/)（`TaleWorlds.Core`）承载装备、怪物、颜色、体型、年龄、性别、种族；本类约一半属性是它的转发
- 消费入口：[Mission](../../mission/Mission/) 的 `SpawnAgent(AgentBuildData, bool)`（`Mission.cs:4074`）是全树唯一的消费者，此外还有 `Agent.Build(AgentBuildData)` 与 `InitialFrameFromSpawnPointEntity` 依赖的 `GameEntity` / `WeakGameEntity`
- 阵型落点：[Formation](../../mission/Formation/) 的 `HasBeenPositioned` / `SetPositioning`，以及 `Mission` 的 `_deploymentPlan`（`IsPlanMade` / `HasPlayerSpawnFrame`）
- 身份标识：[AgentControllerType](../../core-extra/AgentControllerType/) 描述控制权、[Team](../../mission/Team/) 与 [BattleSideEnum](../../core-extra/BattleSideEnum/) 描述归属、[MissionPeer](../MissionPeer/) 描述联机对端
- 视觉侧：链式 setter 里的 `VisualsIndex` / `UseFaceCache` / `FaceCacheId` 最终影响 [AgentVisuals](../AgentVisuals/) 与 [AgentVisualsData](../AgentVisualsData/) 的创建
- 身体参数：spawn 时引擎另外用 [AgentSpawnData](../AgentSpawnData/) 与 [AgentCapsuleData](../AgentCapsuleData/) 从 Monster 侧取身体/碰撞数据，与本类不重叠
- 桶首页：[mission-ext API 分区](../)
