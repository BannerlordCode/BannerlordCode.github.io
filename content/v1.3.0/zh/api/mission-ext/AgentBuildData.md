---
title: "AgentBuildData"
description: "Agent 生成参数的流式构造器：每个方法返回 this 以便链式调用，其中一部分只转发给内部的 AgentData；DefaultVisualOrderProvider 之外的所有 SpawnAgent 都吃这个对象。"
---

# AgentBuildData

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class AgentBuildData`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.MountAndBlade/AgentBuildData.cs`（全文 655 行）

## 概述

`AgentBuildData` 是 **「造一个 Agent 需要的所有参数」的打包对象**，采用流式（fluent）构造。655 行里大约一半是 public 属性、一半是链式 setter。

它被 [Mission](../../mission/Mission) 的 `SpawnAgent(AgentBuildData, bool spawnFromAgentVisuals = false)`（`Mission.cs:3706`）消费。官方的每一个生成调用都是一条长链，例如 `ArenaPracticeFightMissionController.cs:107`：

```csharp
base.Mission.SpawnAgent(
    new AgentBuildData(CharacterObject.PlayerCharacter)
        .Team(base.Mission.PlayerTeam)
        .InitialFrameFromSpawnPointEntity(gameEntity)
        .NoHorses(true)
        .CivilianEquipment(true)
        .TroopOrigin(new SimpleAgentOrigin(CharacterObject.PlayerCharacter, -1, null, default(UniqueTroopDescriptor)))
        .Controller(2),
    false);
```

**注意最后那个 `Controller(2)`**：反编译把 `AgentControllerType.Player` 内联成了数字。写自己的代码请用 `AgentControllerType.Player`——枚举在 `TaleWorlds.Core`，形状是 `None`(0) / `AI`(1) / `Player`(2) / `Count`(3)。

## 心智模型

把它当成**「一条 `SpawnAgent` 调用的参数列表」**，然后掌握三条规则。

**规则一：链式方法有两种实现，一种转发给 `AgentData`。** 第一种是**直接写字段**：

```csharp
public AgentBuildData Controller(AgentControllerType controller)
{
    this.AgentController = controller;
    return this;
}
```

第二种是**转发给内部的 `AgentData`**：

```csharp
public AgentBuildData Character(BasicCharacterObject characterObject)
{
    this.AgentData.Character(characterObject);
    return this;
}

public AgentBuildData MountKey(string mountKey)
{
    this.AgentData.MountKey(mountKey);
    return this;
}
```

属于「转发给 `AgentData`」的成员是：`Character` / `MountKey`（以及 `Equipment` / `CivilianEquipment` / `NoHorses` / `NoWeapons` / `NoArmor` / `FixedEquipment` / `ClothingColor1` / `ClothingColor2` / `BodyProperties` / `Age` / `IsFemale` / `Race` 那一批，它们最终也落到 `AgentData`）。**这意味着本类的一半属性是从 `AgentData` 转发读出来的**，`AgentData` 才是真正存这些值的地方。

**规则二：`AgentData` 是必需的，三个构造器都保证它非 null。** 本类有**一个私有无参构造器 + 三个 public 构造器**，三个都先 `: this()` 调它：

```csharp
private AgentBuildData()
{
    this.AgentController = AgentControllerType.AI;
    this.AgentTeam = TaleWorlds.MountAndBlade.Team.Invalid;
    this.AgentFormation = null;
    this.AgentMissionPeer = null;
    this.AgentFormationTroopSpawnIndex = -1;
}

public AgentBuildData(AgentData agentData) : this() { this.AgentData = agentData; }
public AgentBuildData(IAgentOriginBase agentOrigin) : this() { this.AgentData = new AgentData(agentOrigin); }
public AgentBuildData(BasicCharacterObject characterObject) : this() { this.AgentData = new AgentData(characterObject); }
```

私有无参构造里的五行是**全部默认值**：`Controller = AI`、`Team = Team.Invalid`、`Formation = null`、`MissionPeer = null`、`FormationTroopSpawnIndex = -1`。**其余字段是 `default`**——也就是 0 / false / null。**这就是「不调链式方法会得到什么」的唯一权威答案。**

**规则三：`AgentBuildData` 只在生成那一刻有用，之后就丢了。** 它不是活对象的配置载体。`SpawnAgent` 读它、建好 Agent、把它扔掉。**想改已存在的 Agent 的属性请直接用 [Agent](../../mission/Agent) 的成员**，别指望留着这个对象。

## 关键成员

### 构造器（4 个）

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 私有无参 | `private AgentBuildData()` | 建立五行默认值。**外部不可调用**——这是为什么外部必须从下面三个构造器进。 |
| `AgentBuildData(AgentData)` | `public AgentBuildData(AgentData agentData) : this()` | 直接接管一个已有的 [AgentData](../../core-extra/AgentData)。**它不判 null**——传 null 进来，`Character(...)` 之类的转发方法会在第一次调用时 NRE。 |
| `AgentBuildData(IAgentOriginBase)` | `public AgentBuildData(IAgentOriginBase agentOrigin) : this()` | 内部 `new AgentData(agentOrigin)`。用官方 `SimpleAgentOrigin` 走这条。 |
| `AgentBuildData(BasicCharacterObject)` | `public AgentBuildData(BasicCharacterObject characterObject) : this()` | 内部 `new AgentData(characterObject)`。**最常用的一条。** |

### 身份与控制（属性 + 链式方法）

| 属性 | 链式方法 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentData` | — | `public AgentData AgentData { get; private set; }`。**唯一被 set 赋值的构造器级字段**，其余一切都围着它转。 |
| `AgentCharacter` | `Character(BasicCharacterObject)` | 转发 `AgentData`。**`SpawnAgent` 的第一个硬守卫就是它**：`if (agentCharacter == null) throw new MBNullParameterException("npcCharacterObject");` |
| `AgentMonster` | `Monster(Monster)` | 直接写字段。`SpawnAgent` 里 `CreateAgent(agentBuildData.AgentMonster, ...)` 直接用它——**为 null 会崩在 `CreateAgent` 里**。 |
| `AgentController` | `Controller(AgentControllerType)` | 默认 `AI`。传 `Player` 就会给这个 Agent 挂上玩家控制器。 |
| `AgentTeam` | `Team(Team)` | 默认 `Team.Invalid`（不是 null，是一个哨兵值）。 |
| `AgentFormation` | `Formation(Formation)` | 默认 `null`。给了它 Agent 才会进编队。 |
| `AgentOrigin` | `TroopOrigin(IAgentOriginBase)` | 直接写字段。[Mission](../../mission/Mission) 用它建立阵营/兵种溯源，联机同步时也要它。 |
| `AgentIndex` / `AgentIndexOverriden` | `Index(int)` | `Index()` 会**同时**写值并把 `AgentIndexOverriden` 置 `true`。`SpawnAgent` 里 `if (agentBuildData.AgentIndexOverriden) { forcedAgentIndex = agentBuildData.AgentIndex; }`——**没调过 `Index()` 就用自动分配的索引**。 |
| `AgentMountIndex` / `AgentMountIndexOverriden` | `MountIndex(int)` | 与 `Index` 同样的成对设计。 |

### 位置与朝向

| 属性 | 链式方法 | 说明 |
| --- | --- | --- |
| `AgentInitialPosition` | `InitialPosition(in Vec3 position)` | `Vec3?` 可空。**参数是 `in Vec3`，所以必须传变量，不能传字面量。** |
| `AgentInitialDirection` | `InitialDirection(in Vec2 direction)` | `Vec2?` 可空。同样 `in`。 |
| — | `InitialFrameFromSpawnPointEntity(GameEntity)` / `InitialFrameFromSpawnPointEntity(WeakGameEntity)` | **两个重载做同一件事**：取实体的 `GetGlobalFrame()`，把 `origin` 写进位置、`rotation.f.AsVec2.Normalized()` 写进方向。官方的「从刷怪点生成」写法。 |

### 装备与外观

| 属性 | 链式方法 | 说明 |
| --- | --- | --- |
| `AgentOverridenSpawnEquipment` | `Equipment(Equipment)` | `Equipment` 结构，转发给 `AgentData`。 |
| `AgentOverridenSpawnMissionEquipment` | `MissionEquipment(MissionEquipment)` | 直接写字段。 |
| `AgentEquipmentSeed` | `EquipmentSeed(int)` | 直接写字段。`SpawnAgent` 里 `agent.BodyPropertiesSeed = agentBuildData.AgentEquipmentSeed;`。**同一颗种子同时决定体型与装备**，所以同种子生成出的人装备一样。 |
| `AgentNoHorses` | `NoHorses(bool)` | 转发 `AgentData`。官方对话/换装场景大量用 `NoHorses(true)`。 |
| `AgentNoWeapons` | `NoWeapons(bool)` | 转发 `AgentData`。 |
| `AgentNoArmor` | `NoArmor(bool)` | 转发 `AgentData`。 |
| `AgentFixedEquipment` | `FixedEquipment(bool)` | 转发 `AgentData`。 |
| `AgentCivilianEquipment` | `CivilianEquipment(bool)` | 转发 `AgentData`。 |
| `AgentClothingColor1` / `AgentClothingColor2` | `ClothingColor1(uint)` / `ClothingColor2(uint)` | 队伍配色。官方 `MissionAgentHandler.cs:941` 传的是 `agentSettlementColors.Item1` / `Item2`。 |
| `BodyPropertiesOverriden` / `AgentBodyProperties` | `BodyProperties(BodyProperties)` | 成对设计（同 `Index`）。`SpawnAgent` 里 `if (agentBuildData.BodyPropertiesOverriden) { agent.UpdateBodyProperties(...); }`。 |
| `AgeOverriden` / `AgentAge` | `Age(int)` | 成对设计。`SpawnAgent` 里有一段**自动纠正**：`if (num == 0f) { agentBuildData.Age(29); } else if (MBBodyProperties.GetMaturityType(num) < BodyMeshMaturityType.Teenager && (Mode == Battle || Duel || Tournament || Stealth)) { agentBuildData.Age(27); }`——**战斗类任务里未成年模型会被强制改成 27 岁**。 |
| `GenderOverriden` / `AgentIsFemale` | `IsFemale(bool)` | 成对设计。`SpawnAgent` 里 `agentBuildData.GenderOverriden ? agentBuildData.AgentIsFemale : agentCharacter.IsFemale`。 |
| `AgentRace` | `Race(int)` | 转发 `AgentData`。 |

### 联机与生成点

| 属性 | 链式方法 | 说明 |
| --- | --- | --- |
| `AgentMissionPeer` | `MissionPeer(MissionPeer)` | 默认 `null`。`RandomizeColors` 的判据之一。 |
| `OwningAgentMissionPeer` | `OwningMissionPeer(MissionPeer)` | 主人 peer，用于坐骑/战马归属。 |
| `AgentIsReinforcement` | `IsReinforcement(bool)` | 增援标记，影响部署计划。 |
| `AgentSpawnsIntoOwnFormation` | `SpawnsIntoOwnFormation(bool)` | 生成时是否直接进自己所属编队。 |
| `AgentSpawnsUsingOwnTroopClass` | `SpawnsUsingOwnTroopClass(bool)` | 是否用自身兵种类的阵型。 |
| `MakeUnitStandOutDistance` | `MakeUnitStandOutOfFormationDistance(float)` | 方法名是 `OutOf`，属性名是 `Out`，**命名不一致**。 |
| `AgentFormationTroopSpawnCount` | `FormationTroopSpawnCount(int)` | 一批生成时的总数。 |
| `AgentFormationTroopSpawnIndex` | `FormationTroopSpawnIndex(int)` | 默认 `-1`。 |
| `AgentCanSpawnOutsideOfMissionBoundary` | `CanSpawnOutsideOfMissionBoundary(bool)` | 允许在任务边界外生成（攻城外的增援）。 |
| `AgentVisualsIndex` | `VisualsIndex(int)` | 直接写字段。 |
| `AgentBanner` / `AgentBannerItem` / `AgentBannerReplacementWeaponItem` | `Banner(Banner)` / `BannerItem(ItemObject)` / `BannerReplacementWeaponItem(ItemObject)` | 三个旗子相关字段，全部直接写。 |

### 派生属性

| 成员 | 签名 | 说明 |
| --- | --- | --- |
| `RandomizeColors` | `public bool RandomizeColors { get { return this.AgentCharacter != null && !this.AgentCharacter.IsHero && this.AgentMissionPeer == null; } }` | **只读的派生属性，getter 里三个条件**：有角色、不是英雄、没有 mission peer。**英雄和联网玩家永远拿到 `false`**（即不随机配色）——这是「英雄服装固定」的机制实现。 |

## 真实示例

最常见的形状——从刷怪点生成一个 AI 步兵（形状照官方 `MissionAgentHandler.cs:938-941` 的链）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static Agent SpawnFootman(Mission mission, Team team, BasicCharacterObject troop, GameEntity spawnPoint)
{
    MatrixFrame frame = spawnPoint.GetGlobalFrame();
    Vec3 origin = frame.origin;
    Vec2 facing = frame.rotation.f.AsVec2;
    AgentBuildData buildData = new AgentBuildData(trop)
        .Team(team)
        .InitialPosition(origin)
        .InitialDirection(facing)
        .CivilianEquipment(false)
        .NoHorses(true);
    return mission.SpawnAgent(buildData, false);
}
```

`InitialPosition` / `InitialDirection` 的参数是 `in`，所以**必须传变量**——上面先建 `origin` / `facing` 正是为此。troop 的来源由调用方给（沙盒里通常来自 `Campaign.Current.Models.PartyModel` 之类，本页不展开）。

英雄化生成——注意 `Controller` 要用具名枚举而不是官方反编译产物里那个 `2`：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static Agent SpawnHeroAt(Mission mission, BasicCharacterObject hero, Team team, Vec3 position)
{
    AgentBuildData buildData = new AgentBuildData(hero)
        .Team(team)
        .InitialPosition(position)
        .Controller(AgentControllerType.Player);
    return mission.SpawnAgent(buildData, false);
}
```

判断「这次生成会不会随机配色」——`RandomizeColors` 是只读的派生属性，构造完就能问：

```csharp
using TaleWorlds.MountAndBlade;

public static bool WillRandomizeColors(BasicCharacterObject character)
{
    AgentBuildData probe = new AgentBuildData(character);
    return probe.RandomizeColors;
}
```

## 风险与边界

- **`AgentCharacter` 为 null 会抛 `MBNullParameterException`。** `SpawnAgent` 的第一件事就是 `if (agentCharacter == null) throw new MBNullParameterException("npcCharacterObject");`——注意**异常消息里的参数名是硬编码的 `npcCharacterObject`**，即使你传的是 `BasicCharacterObject`。排查时别被这个名字误导。
- **`InitialPosition` / `InitialDirection` 参数是 `in Vec3` / `in Vec2`。** **不能传字面量**——`InitialPosition(new Vec3(0,0,0,0))` 编译失败，必须先建局部变量。这是最常见的编译错误。
- **战斗类任务里 `Age` 会被覆盖成 27。** `SpawnAgent` 的逻辑是：`Age` 为 0 → 强制 29；`MBBodyProperties.GetMaturityType(age) < BodyMeshMaturityType.Teenager` 且任务模式是 `Battle` / `Duel` / `Tournament` / `Stealth` → 强制 27。**你在外面设的年龄在战斗任务里不作数。**
- **`Index` / `MountIndex` / `BodyProperties` / `Age` / `IsFemale` 都是成对设计。** 调了链式方法才会置对应的 `*Overriden` 标志，而 `SpawnAgent` 只看标志。**只读 `AgentIndex` 而不调 `Index()` 得到的永远是 0。**
- **`Team` 默认是 `Team.Invalid` 而不是 null。** 所以 `if (buildData.AgentTeam == null)` 永远为假——判空前先看是不是 `Team.Invalid`。
- **`AgentMonster` 为 null 会在 `CreateAgent` 里崩。** `SpawnAgent` 不检查它。
- **`AgentBuildData(AgentData)` 不判 null。** 传 null 进来，第一次调 `Character(...)` 之类的转发方法时 NRE。
- **链式方法返回 `this`，可以复用。** 官方就这么干：`ArenaDuelMissionController.cs:67` 建一个 `agentBuildData`，然后 `:70` 再 `agentBuildData.Team(...).InitialPosition(...)` 派生一条。**所以一份 `AgentBuildData` 可以连续 spawn 多个 Agent**——这既是特性也是陷阱，改了共享字段会影响后续所有生成。
- **`MakeUnitStandOutOfFormationDistance` 的方法名与属性名不一致**（方法带 `Out`，属性不带）。搜方法名时找不到属性。
- **`RandomizeColors` 是只读派生属性。** 你不能设置它，只能满足它的三个前置条件来改变结果。
- **本类没有 `Dispose`、没有校验、没有任何行为。** 它是一次性参数包，`SpawnAgent` 之后就无用了。
- **构造器里的默认值只有五行是显式写的。** 其余全是 `default`（0 / false / null）。**「不设置」与「设置为 0」在本类里不可区分**——除非那个字段有配套的 `*Overriden` 标志。

## 跨版本提示

`AgentBuildData` 的 655 行在 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3 里的**成员集合一致**（三个 public 构造器、一个 private 无参构造、约 40 个 public 属性、约 40 个链式方法），所以**你的生成代码在 1.3 → 1.5 之间不会编译失败**。

会变的有三处：

1. **`Mission.SpawnAgent` 内部的新增处理。** 新版本会读更多 `AgentBuildData` 字段（例如海战、攻城的新生成需求）。**新增字段默认 `default`——不调新方法就是旧行为**，所以向后兼容。
2. **`Age` 自动纠正规则的模式清单。** 1.3.0 是 `Battle` / `Duel` / `Tournament` / `Stealth` 四种；新版本可能加进新任务模式。**如果你依赖「在某个任务模式里能生成少年模型」，升级后可能被静默改掉。**
3. **`AgentControllerType` 的形状。** 它在 1.3.0 到 1.5.3 逐字一致（`None` / `AI` / `Player` / `Count`），所以 `.Controller(AgentControllerType.Player)` 是安全的。反过来说——**别抄官方反编译产物里的 `.Controller(2)`**，那是内联后的数字，换个版本就可能对不上。

实践建议：**只用三个 public 构造器 + 具名枚举 + `in` 参数的局部变量写法**，这三样在所有版本都稳定。

## 依赖关系

- 唯一消费者：[Mission](../../mission/Mission) 的 `SpawnAgent(AgentBuildData, bool spawnFromAgentVisuals = false)`（`Mission.cs:3706`），内部再调 `CreateAgent` 与 `agent.InitializeAgentProperties(spawnEquipment, agentBuildData)`
- 内部存储：[AgentData](../../core-extra/AgentData) 存角色、装备、外观等一半参数；另一半由本类自己的字段存
- 参数类型：`BasicCharacterObject` / `Monster` / `Equipment` / `MissionEquipment` / `BodyProperties` / `Team` / `Formation` / `Banner` / `ItemObject` / `IAgentOriginBase` / `MissionPeer` / `GameEntity` / `WeakGameEntity` / `Vec3` / `Vec2`（全部 `TaleWorlds.Core` 或 `TaleWorlds.Library`）
- 枚举：[AgentControllerType](../../core-extra/AgentControllerType)（`None`/`AI`/`Player`/`Count`）
- 下游属性计算：[AgentDrivenProperties](../AgentDrivenProperties) 的 `InitializeDrivenProperties(Agent, Equipment, AgentBuildData)` 把本对象作为第三个参数传给 [AgentStatCalculateModel](../AgentStatCalculateModel) 的 `InitializeAgentStats`
- 官方调用范例：`SandBox/Missions/MissionLogics/MissionAgentHandler.cs:938`、`ArenaDuelMissionController.cs:67`、`ConversationMissionLogic.cs:213`、`CheckpointMissionLogic.cs:163`、`DisguiseMissionLogic.cs:424`
- 桶首页：[mission-ext API 分区](../)