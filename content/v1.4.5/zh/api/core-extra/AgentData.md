---
title: "AgentData"
description: "agent 生成参数包，一个纯链式构建器。16 个私有 setter 属性 + 16 个返回 this 的配置方法，供 AgentBuildData 与 LocationCharacter 逐层转交。它有一个真实的源码缺陷：Race() 误把 GenderOverriden 置为 true，而 OwnerParty/AgentOwnerParty 在 1.4.5 全树零调用方。"
---

# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** 无
**File:** `TaleWorlds.Core/AgentData.cs`

## 概述

`AgentData` 是一个**纯数据容器 + 链式构建器**：16 个私有 setter 的只读属性，16 个返回 `this` 的配置方法，零个查询方法、零个生命周期钩子、零个状态机。它回答的是「**即将生成的这个 agent 长什么样**」——是哪个角色、什么种族、什么怪物外形、穿什么、用哪个随机种子、年龄几何、衣服什么颜色、要不要马要不要武器。

它承担的环节是**campaign 层到 mission 层之间的参数传递**。`SimpleAgentOrigin` / `PartyAgentOrigin` 描述「这个单位从哪来」，`AgentData` 描述「这个单位的外观与装备怎么定」，而真正执行生成的是 [AgentBuildData](../../mission-ext/AgentBuildData)（它把每个方法原样转发给内部的 `AgentData`）与 `Mission.CreateAgentInternal`。**关键约束是：所有属性都是 `private set`，构造完就只能通过链式方法改，所以整个类型是「一次性构建」的**——你可以反复改，但没有任何地方会告诉你「现在太晚了」。

## 心智模型

把它当成**一张交给 Mission 的「角色外观工单」**，而不是一个活着的对象。它没有任何行为，唯一的「智能」在于**那些配置方法与属性的配对关系**——而这里正是本页要重点讲的地方。

**心智模型的核心是「三对必须成对出现的标志」。** `AgentData` 里有三组「值 + 是否被覆盖」的配对：`AgentAge` / `AgeOverriden`、`AgentBodyProperties` / `BodyPropertiesOverriden`、`AgentIsFemale` / `GenderOverriden`。消费方不看值，看**标志**——`Mission.cs:4089` 是 `float num = (agentBuildData.AgeOverriden ? ((float)agentBuildData.AgentAge) : agentCharacter.Age);`，也就是「没覆盖就回落到角色自身的年龄」。所以调 `Age(20)` 之所以有用，不是因为 `AgentAge` 变成了 20，而是因为 `AgeOverriden` 变成了 true。**只设值不设标志是不可能的**（三个方法都同时写两者），**只读标志不读值则毫无意义**。

由此推出五条必须记住的结论。第一，**`Race(int)` 有一个真实的源码缺陷**：`AgentData.cs:185-190` 里它的函数体是 `AgentRace = race; GenderOverriden = true; return this;`——**它把 `GenderOverriden` 置成了 true，而不是某个 race-overridden 标志**。后果是：一旦你调了 `.Race(x)`，这个 agent 就被标记为「性别已被覆盖」，而 `AgentIsFemale` 仍是 `default(bool)` = false。`Mission` 侧据此会用「男性」而不是种族数据里的性别。**这是全类型最值得记住的一条。** 第二，**`Character(...)` 只改 `AgentCharacter`，不同步刷新派生数据**：`AgentData.cs:76-80` 只有一句 `AgentCharacter = characterObject; return this;`。而构造器（`:57-74`）里是会同时算 `AgentRace = characterObject.Race` 与 `AgentMonster = FaceGen.GetBaseMonsterFromRace(AgentRace)` 的。**先构造再 `.Character()`，会留下一份与新角色不匹配的种族与怪物外形。** 第三，**`OwnerParty` 与 `AgentOwnerParty` 在 1.4.5 是死成员**：全树搜索 `OwnerParty(` 只命中 `AgentData.cs:88` 的定义本身，`AgentOwnerParty` 的读取也只出现在声明与赋值处。`AgentBuildData` 根本没有转发这个方法。**它是一个公开但无人使用的 API。** 第四，**`TroopOrigin(...)` 有条件地改种子**：`AgentData.cs:171-174` 只在 `troopOrigin?.Troop != null && !troopOrigin.Troop.IsHero` 时才 `EquipmentSeed(troopOrigin.Seed)`，所以**英雄永远拿不到 origin 的种子**。第五，**`ClothingColor1/2` 的默认哨兵是 `uint.MaxValue`**（`:70-71`），不是 0。判「有没有指定过颜色」要判 `!= uint.MaxValue`，判 `!= 0` 会把「显式指定纯黑」和「没指定」混为一谈。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `AgentData(IAgentOriginBase)` | `public AgentData(IAgentOriginBase agentOrigin)` | **推荐的构造器**。它转调 `this(agentOrigin.Troop)` 之后再额外写入 `AgentOrigin`、`AgentCharacter` 与 `AgentEquipmentSeed = agentOrigin.Seed`。`HeroAgentSpawnCampaignBehavior.cs:106-116` 全部走这条路径。 |
| `AgentData(BasicCharacterObject)` | `public AgentData(BasicCharacterObject characterObject)` | 裸角色构造器。除赋值 `AgentCharacter` 外还会算 `AgentRace` 与 `AgentMonster = FaceGen.GetBaseMonsterFromRace(AgentRace)`（`:61`），并把两个颜色置成 `uint.MaxValue`。**`AgentOrigin` 保持 null**，`AgentBuildData.cs:141` 走这条。 |
| `Character` / `Monster` | `public AgentData Character(BasicCharacterObject)` / `public AgentData Monster(Monster)` | 覆写角色与怪物外形。**`Character` 是陷阱**：它只改 `AgentCharacter`，不会重算 `AgentRace` / `AgentMonster`，所以「先构造、后换角色」会留下过期的种族数据。`Monster` 则被 `NotableHelperCharacterCampaignBehavior.cs:76` 等大量用来把外观换成带 `_with_suffix` 的变体。 |
| `Age` / `AgeOverriden` | `public AgentData Age(int age)` / `public bool AgeOverriden { get; private set; }` | 覆盖年龄。**消费方只看标志不看值**（`Mission.cs:4089`）。`NotableHelperCharacterCampaignBehavior.cs:76` 用 `.Age(MBRandom.RandomInt(minimumAge, maximumAge))` 造出「村里既有年轻人也有老人」。 |
| `IsFemale` / `GenderOverriden` | `public AgentData IsFemale(bool isFemale)` / `public bool GenderOverriden { get; private set; }` | 覆盖性别。**注意 `Race(int)` 也会误置 `GenderOverriden = true`**（源码缺陷，见心智模型）。正常调用方是 `LocationCharacter.cs:66` 附近与 `AgentBuildData`。 |
| `BodyProperties` / `BodyPropertiesOverriden` | `public AgentData BodyProperties(BodyProperties)` / `public bool BodyPropertiesOverriden { get; private set; }` | 覆盖体型/面部特征。`LocationCharacter.cs:66` 会在构造器内部自动调一次（用 `Character.GetBodyProperties(Character.Equipment, seed)`），所以**这个值经常在你没察觉时已被设过**。 |
| `Race` | `public AgentData Race(int race)` | 设置 `AgentRace`。**它有一处真实缺陷：函数体里写的是 `GenderOverriden = true;`**，等价于顺手把性别也标成「已覆盖」，而 `AgentIsFemale` 保持 false。`AgentBuildData.cs:336` 是它唯一的转发方。 |
| `NoHorses` / `NoWeapons` / `NoArmor` / `FixedEquipment` / `CivilianEquipment` | 五个 `public AgentData Xxx(bool)` | 一组「装备供给开关」。`NoHorses` 在全树被调用 4 次（都是大地图 NPC）；`NoWeapons` / `NoArmor` **只有 `AgentBuildData.cs:258/264` 的转发，托管侧零直接调用**——即需要它们必须经 `AgentBuildData`。`FixedEquipment` 与 `CivilianEquipment` 由 `Mission.cs:4188/4192` 在生成时设置。 |
| `OwnerParty` / `AgentOwnerParty` | `public AgentData OwnerParty(IBattleCombatant owner)` / `public IBattleCombatant AgentOwnerParty { get; private set; }` | **在 1.4.5 是死成员。** 全树 `OwnerParty(` 只命中定义本身，`AgentOwnerParty` 无任何读取方，`AgentBuildData` 也不转发它。写它不会报错，但也不会有任何效果。 |
| `Equipment` / `EquipmentSeed` / `PrepareImmediately` | `public AgentData Equipment(Equipment)` / `EquipmentSeed(int)` / `SetPrepareImmediately()` | 覆盖装备、指定随机种子、要求立即准备外观。`PrepareImmediately` 是全类型被读得最多的标志（10 处），`Mission` 与 `AgentBuildData` 都会查它决定外观生成时机。 |
| `ClothingColor1` / `ClothingColor2` | `public AgentData ClothingColor1(uint color)` / `ClothingColor2(uint)` | 覆写衣服颜色。**默认值是 `uint.MaxValue`（`:70-71`），不是 0**——判「是否指定过」要用 `uint.MaxValue` 作哨兵。`HeroAgentSpawnCampaignBehavior.cs:95` 一次性设置两者。 |
| `TroopOrigin` / `MountKey` / `AgentOrigin` | `public AgentData TroopOrigin(IAgentOriginBase)` / `MountKey(string)` / `public IAgentOriginBase AgentOrigin { get; private set; }` | 回填来源与坐骑键。`TroopOrigin` **只在 Troop 非空且非英雄时才写 `EquipmentSeed`**（`:171-174`），所以英雄拿不到 origin 种子。`MountKey` 对应 `Mission.cs:4459` 的 `MountCreationKey.GetRandomMountKeyString`。 |

## 真实示例

最常见的两条构造路径——带 origin 的（大地图 NPC）与裸角色的（战场的）：

```csharp
// Path 1: from an origin. HeroAgentSpawnCampaignBehavior.cs:106-116 shape.
Hero wanderer = Hero.MainHero;
AgentData fromOrigin = new AgentData(new SimpleAgentOrigin(wanderer.CharacterObject))
    .ClothingColor1(0x7F7F7Fu)
    .ClothingColor2(0x202020u);

// Path 2: from a bare character, then override the look.
AgentData fromCharacter = new AgentData(wanderer.CharacterObject)
    .Monster(monsterWithSuffix)
    .NoHorses(noHorses: true)
    .Age(MBRandom.RandomInt(18, 65));

Debug.Print("race = " + fromCharacter.AgentRace, 0);
Debug.Print("monster = " + fromCharacter.AgentMonster, 0);
```

经 `AgentBuildData` 转交——这是 battle 里唯一正确的用法，因为 `Mission.SpawnAgent` 吃的是 `AgentBuildData`：

```csharp
AgentBuildData buildData = new AgentBuildData(new AgentData(new SimpleAgentOrigin(shopWorker)))
    .Team(Mission.Current.AttackerTeam)
    .Controller(AgentControllerType.AI)
    .InitialFrameFromSpawnPointEntity(spawnEntity);

Agent spawned = Mission.Current.SpawnAgent(buildData);
Debug.Print("spawned agent index = " + spawned.Index, 0);
```

本页最重要的两处陷阱，单独演示：

```csharp
BasicCharacterObject worker = MBObjectManager.Instance.GetObject<BasicCharacterObject>("artisan");
Monster orc = MBObjectManager.Instance.GetObject<Monster>("orc");

// Trap 1: Race() silently flips GenderOverriden -- see AgentData, line 188.
AgentData withRace = new AgentData(worker).Race(worker.Race);
Debug.Print("after Race(): AgentRace=" + withRace.AgentRace
    + " GenderOverriden=" + withRace.GenderOverriden, 0);

// Trap 2: Character() does NOT refresh AgentRace / AgentMonster, so the race
// and monster set above are now stale relative to the swapped-in character.
AgentData swapped = new AgentData(worker).Monster(orc).Character(worker);
Debug.Print("stale race still = " + swapped.AgentRace, 0);

// Trap 3: the colour sentinel is uint.MaxValue, not 0.
AgentData plain = new AgentData(worker);
bool colourWasSpecified = plain.AgentClothingColor1 != uint.MaxValue;
Debug.Print("colour specified = " + colourWasSpecified, 0);
```

## 风险与边界

- **`Race(int)` 有真实缺陷。** `AgentData.cs:185-190` 的函数体是 `AgentRace = race; GenderOverriden = true;`，把性别也标成已覆盖，而 `AgentIsFemale` 保持 `false`。**调用 `.Race()` 等于顺带声明「这个单位是男性」。** 这是原版源码的行为，不是文档笔误。
- **`Character()` 不重算派生数据。** 构造器会算 `AgentRace` 与 `AgentMonster`，`Character()` 不会。所以「构造 → `.Character(other)`」会留下与新角色不匹配的种族与怪物外形。**要换角色就重新 `new`。**
- **`OwnerParty` / `AgentOwnerParty` 在 1.4.5 无任何调用方。** 全树 `OwnerParty(` 只命中定义行，`AgentOwnerParty` 无读取方，`AgentBuildData` 也不转发。它是公开但未接线的 API，依赖它等于依赖一个不会生效的契约。
- **`TroopOrigin()` 对英雄不写种子。** `:171-174` 的条件是 `troopOrigin?.Troop != null && !troopOrigin.Troop.IsHero`，所以**英雄的外观随机性永远来自 `BasicCharacterObject` 自己**。
- **颜色哨兵是 `uint.MaxValue`。** `:70-71` 把两个颜色初始化为 `uint.MaxValue`。用 `!= 0` 判「是否指定过颜色」会混淆「未指定」与「显式纯黑」。
- **所有 setter 都是 `private`。** 配置入口只有那 16 个链式方法，且**没有任何「已提交」标志**。你可以生成后再改 `AgentData`，但 `Mission` 是否重新读取取决于它自己——**没有机制告诉你太晚了。**
- **三个覆盖标志只被 `Mission` 侧消费，托管侧无校验。** `AgeOverriden` / `BodyPropertiesOverriden` / `GenderOverriden` 为 false 时消费方会回落到 `agentCharacter` 的自身数据，所以「设了值但标志为 false」在结构上不可能出现，**除非你自己去改这些 `private set`（改不了）**。
- **`AgentData(BasicCharacterObject)` 不设 `AgentOrigin`。** 该路径下 `AgentOrigin` 为 null，而 `IAgentOriginBase` 相关的下游（traits、`Troop`）会拿不到数据。`PartyAgentOrigin` / `SimpleAgentOrigin` 路径才有。
- **`NoWeapons` / `NoArmor` 托管侧零调用。** 它们的唯一使用是 `AgentBuildData.cs:258/264` 的转发。**要启用它们必须经 `AgentBuildData`，直接对 `AgentData` 调在当前版本等于死代码。**
- **它不进存档。** 全树没有 `AgentSaveData` 那样为它注册 `SaveableTypeDefiner` 的记录——生成参数是即时数据，读档时重新走一遍流程。

## 跨版本提示

`AgentData.cs` 在 1.4.5 是 197 行、16 个属性 + 18 个方法（含两个构造器），是该版本原始源码形态。1.4.x 后期版本把 `AgentData` 拆成了 `AgentData` 与 `AgentVisualData`（视觉参数独立），`BodyProperties` / `ClothingColor*` / `Age` 这些后来搬去了后者——**这是跨版本迁移最容易踩的坑：同一个 `.BodyProperties(...)` 调用在 1.4.5 之后返回的类型可能不再是 `AgentData`**。跨版本核对清单因此是三项：`Chain` 方法的返回类型是否仍能继续链式调用（`AgentBuildData` 依赖返回 `this`）；`Race()` 的 `GenderOverriden` 缺陷是否已被修（源码行数变化大有助于判断）；以及 `OwnerParty` / `AgentOwnerParty` 是否终于接上了读取方。

## 依赖关系

- 包装层：[AgentBuildData](../../mission-ext/AgentBuildData) 持有一个 `AgentData` 并把每个链式方法原样转发（`AgentBuildData.cs:126-142` 是构造器，`:150-342` 是转发方法群）
- 消费层：`Mission.CreateAgentInternal` / `Mission.SpawnAgent`（`Mission.cs:4074`）按这些参数生成 agent；`Mission.cs:4089` 读 `AgeOverriden`
- 来源对象：[IAgentOriginBase](../IAgentOriginBase) 的具体实现 `SimpleAgentOrigin`、`PartyAgentOrigin`、`BasicBattleAgentOrigin`（前者两个在 `../../campaign/`）
- 承载数据：[Monster](../Monster)（外形）、[BodyProperties](../BodyProperties)（体型）、[Equipment](../Equipment)（装备）、[BasicCharacterObject](../BasicCharacterObject)（角色）
- 大地图落地：[LocationCharacter](../../campaign/LocationCharacter) 的构造器会在内部调一次 `AgentData.BodyProperties(...)`（`LocationCharacter.cs:66`）
- 控制权与能力：[AgentControllerType](../AgentControllerType) 与 [AgentFlag](../AgentFlag) 在生成时由 `Agent.Build` 决定
- 随机源：`MBRandom.RandomInt` 提供年龄等随机参数（见 `NotableHelperCharacterCampaignBehavior.cs:76`）
- 桶首页：[core-extra API 分区](../)