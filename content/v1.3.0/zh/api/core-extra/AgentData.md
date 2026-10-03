---
title: "AgentData"
description: "18 个 fluent 方法 + 21 个只读属性的外观描述构建器：new AgentData(origin) 之后一路链下去生成 LocationCharacter，是城镇 NPC 生成流程的标准入口；Race() 里有一个把 GenderOverriden 误置 true 的官方 bug。"
---

# AgentData

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public class AgentData`
**Base:** 无（仅隐式 `System.Object`；无基类、无接口、无析构函数）
**File:** `TaleWorlds.Core/AgentData.cs`（全文 275 行 / 9984 字节）

> 核对记录：读了 `TaleWorlds.Core/AgentData.cs`（9984 B，全文 21 属性 + 2 构造 + 18 fluent 逐个抄）+ `TaleWorlds.MountAndBlade/AgentBuildData.cs`（`public AgentData AgentData { get; private set; }` 与 20 个转发属性）+ `TaleWorlds.CampaignSystem/Settlements/Locations/LocationCharacter.cs:83-91`（唯一业务消费方）+ `SandBox/CampaignBehaviors/` 下 `CommonTownsfolkCampaignBehavior`（20+ 处）、`CommonVillagersCampaignBehavior`、`GuardsCampaignBehavior`、`AlleyCampaignBehavior`、`BoardGameCampaignBehavior`、`ArenaMasterCampaignBehavior`、`BarberCampaignBehavior`、`ClanMemberRolesCampaignBehavior`、`PrisonBreakCampaignBehavior` + `TaleWorlds.Core/FaceGen.cs:83` 的 `GetBaseMonsterFromRace`。约 35 min。最难判断点：18 个 fluent 方法里有 4 个是「设一个值 + 顺带置一个 Overriden 标志」的组合（`BodyProperties` / `Age` / `IsFemale` / `TroopOrigin`），而 `Race(int)` 明显是复制粘贴留下的 bug——它把 `GenderOverriden` 置成了 true 而不是新增一个 `RaceOverriden`。

## 概述

`AgentData` 是**「一个单位长什么样」的描述对象**，一个纯数据容器 + 一条 fluent 链。它没有行为、没有校验、没有生命周期管理，唯一的工作方式是：**用两个构造函数之一起步，用 18 个链式方法逐项设置，最后整体交给别人。**

它有两个构造函数：

- `public AgentData(IAgentOriginBase agentOrigin)` ——**主路径**。`: this(agentOrigin.Troop)` 委托给下面那个，然后补三件事：`this.AgentOrigin = agentOrigin;`、`this.AgentCharacter = agentOrigin.Troop;`、`this.AgentEquipmentSeed = agentOrigin.Seed;`。
- `public AgentData(BasicCharacterObject characterObject)` ——**裸构造**。它把 `AgentRace = characterObject.Race`、`AgentMonster = FaceGen.GetBaseMonsterFromRace(this.AgentRace)` 填好，其余字段全部显式置默认值（`AgentOwnerParty = null`、`AgentEquipmentSeed = 0`、四个 bool 全 `false`、两个颜色 `uint.MaxValue`、`BodyPropertiesOverriden = false`、`GenderOverriden = false`）。

**注意它不设 `AgentMountKey`、不设 `AgentBodyProperties`、不设 `AgentAge`、不设 `AgentIsFemale`、不设 `AgeOverriden`。** 这些字段在 `BasicCharacterObject` 那条构造路径上是 `null` / `0` / `false`——**C# 会把它们初始化成默认值，构造函数里没写不等于「不会被读」**。`AgentBuildData` 转发 20 个属性给外部时读到的一律是这些默认值。

**它不是任务期对象。** 它是**大地图上城镇 NPC 生成点的配置**：[LocationCharacter](../../campaign/LocationCharacter) 的第一个构造参数就是它。而任务内的单位生成走的是 [AgentBuildData](../../mission-ext/AgentBuildData)——后者**内部持有一个 `AgentData`** 并把 20 个属性原样转发过来。**「地图 NPC」和「任务 NPC」用的是同一份数据形状，只是载体不同。**

## 心智模型

把它当成**「一份可以被链式填写的外观规格单」**，并且认清四组必须成对出现的字段。

**第一组，外观三件套：`AgentCharacter` / `AgentMonster` / `AgentRace`。** 默认由 `FaceGen.GetBaseMonsterFromRace(characterObject.Race)` 从种族反推怪物，但 `.Monster(monster)` 可以覆盖——**官方在所有城镇行为里都这么做**，因为不同派系/场景要用不同的怪物变体（`FaceGen.GetMonsterWithSuffix(race, "_settlement_slow")`）。`.Race(int)` 能覆盖种族。

**第二组，装备四开关 + 覆盖件：`AgentNoHorses` / `AgentNoWeapons` / `AgentNoArmor` / `AgentFixedEquipment` / `AgentCivilianEquipment` / `AgentOverridenEquipment` / `AgentEquipmentSeed`。** 前四个是「不要 X」的布尔开关，第五个是「用平民装备」，第六个是「直接给一套 `Equipment`」，第七个是随机种子。**它们不是互斥的**——官方 `GuardsCampaignBehavior.cs:344` 就同时调了 `.Equipment(randomEquipmentElements)` 和 `.NoHorses(true)`。

**第三组，外观覆盖三对：`(BodyPropertiesOverriden, AgentBodyProperties)` / `(AgeOverriden, AgentAge)` / `(GenderOverriden, AgentIsFemale)`。** 这是本类最需要小心的结构：**值和标志位成对，但只有 fluent 方法会顺手置标志位。** 你直接写属性是不行的（setter 是 `private`），只能走 fluent 方法——好消息是**只要你走 fluent 方法，标志位一定被置上**，你不需要手动管。

**第四组，染色：`AgentClothingColor1` / `AgentClothingColor2`。** 默认 `uint.MaxValue`（意思是「用默认色」）。`LocationCharacter.cs:88-91` 会依据 `overrideBodyProperties` 与 `isFixedCharacter` 用 `GetDeterministicHashCode()` 决定是否真正覆盖。

**所以整条链的心智模型是：`new AgentData(origin)` 起步 → 逐项 `.Xxx(value)` → 返回值一路 `return this` 传给 `LocationCharacter`。** 全树官方调用点都是这个形状，长度从 2 段到 4 段不等。

## 关键成员

### 21 个属性（全部 `{ get; private set; }`，外部只读）

| 属性 | 类型 | 默认值（`BasicCharacterObject` 构造路径） | 这个属性是做什么用的 |
| --- | --- | --- | --- |
| `AgentCharacter` | `BasicCharacterObject` | 构造函数实参 | **主角色**：这个 NPC 是谁。`LocationCharacter.Character` 就是它。 |
| `AgentMonster` | [Monster](../Monster) | `FaceGen.GetBaseMonsterFromRace(AgentRace)` | 外观怪物。`.Monster(...)` 覆盖成带后缀的变体，是所有官方调用点必调的一步。 |
| `AgentOwnerParty` | `IBattleCombatant` | `null` | 所属阵营。仅 `.OwnerParty(IBattleCombatant owner)` 能设，官方城镇行为**不调**——它是给自定义/战斗场景用的。 |
| `AgentOverridenEquipment` | [Equipment](../Equipment) | `null` | 直接覆盖整套装备。`.Equipment(equipment)` 设置。 |
| `AgentEquipmentSeed` | `int` | `0`（`IAgentOriginBase` 路径下是 `agentOrigin.Seed`） | 装备随机种子。`TroopOrigin()` 在 `Troop.IsHero` 为假时也会补一次。 |
| `AgentNoHorses` | `bool` | `false` | 不给马。官方守卫（`GuardsCampaignBehavior`、巷战恶棍、囚犯）几乎都调 `.NoHorses(true)`。 |
| `AgentMountKey` | `string` | `null`（构造函数**不初始化**） | 指定坐骑。`.MountKey(string)` 设置，官方不用。 |
| `AgentNoWeapons` | `bool` | `false` | 不给武器。`.NoWeapons(bool)` 设置。 |
| `AgentNoArmor` | `bool` | `false` | 不给护甲。`.NoArmor(bool)` 设置。 |
| `AgentFixedEquipment` | `bool` | `false` | 装备固定不变（不允许后续变化）。`.FixedEquipment(bool)` 设置。 |
| `AgentCivilianEquipment` | `bool` | `false` | 使用平民装备而非战斗装备。`.CivilianEquipment(bool)` 设置，与 `LocationCharacter` 的 `useCivilianEquipment` 形参是两个独立开关。 |
| `AgentClothingColor1` | `uint` | `uint.MaxValue` | 服装色 1。`uint.MaxValue` 是「未指定」的哨兵值。 |
| `AgentClothingColor2` | `uint` | `uint.MaxValue` | 服装色 2。同上。 |
| `BodyPropertiesOverriden` | `bool` | `false` | **`AgentBodyProperties` 的有效标志位**。只有 fluent `.BodyProperties(...)` 会置 `true`。 |
| `AgentBodyProperties` | `BodyProperties` | `null`（构造函数不初始化） | 体型覆盖值。 |
| `AgeOverriden` | `bool` | `false`（构造函数**不显式设**，靠 C# 默认值） | **`AgentAge` 的有效标志位**。只有 fluent `.Age(int)` 会置 `true`。 |
| `AgentAge` | `int` | `0`（构造函数不初始化） | 年龄覆盖值。官方城镇行为全部用它做 `MBRandom.RandomInt(num, num2)` 的随机老年化。 |
| `GenderOverriden` | `bool` | `false` | **性别与种族的共享标志位**（因为有那个 bug，见下）。`.IsFemale(bool)` 和 `.Race(int)` 都会置它。 |
| `AgentIsFemale` | `bool` | `false`（构造函数不初始化） | 性别覆盖值。 |
| `AgentRace` | `int` | `characterObject.Race` | 种族编号。`.Race(int race)` 设置。 |
| `AgentOrigin` | `IAgentOriginBase` | `IAgentOriginBase` 路径下是实参；`BasicCharacterObject` 路径下 **`null`** | 单位来源，携带 `BattleCombatant` / `Seed` / `Banner` / 四个装备标签。`.TroopOrigin(IAgentOriginBase)` 设置。 |

### 2 个构造函数

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| 主构造 | `public AgentData(IAgentOriginBase agentOrigin) : this(agentOrigin.Troop)` | **官方主流路径**：67 个 `new AgentData(` 里 64 个走这条。委托给下面那个之后补 `AgentOrigin` / `AgentCharacter` / `AgentEquipmentSeed`。**注意它会解引用 `agentOrigin`，传 `null` 立刻 NRE**——裸构造留下的 `AgentOrigin == null` 只在裸构造路径上才成立。 |
| 裸构造 | `public AgentData(BasicCharacterObject characterObject)` | 只填 `AgentCharacter` / `AgentRace` / `AgentMonster`，其余全部显式默认值。**1.3.0 全树 67 个 `new AgentData(` 调用点里只有 3 个走这条**：`AgentBuildData.cs:366`（[AgentBuildData](../../mission-ext/AgentBuildData) 的对应构造器）与 `SandBox/Missions/MissionLogics/Hideout/HideoutAmbushMissionController.cs:271` / `:282`（潜行暗杀任务的「强行生成」的敌人）。其余 64 个全是带 `IAgentOriginBase` 的主构造。 |

### 18 个 fluent 方法（全部 `return this`）

| 方法 | 签名 | 同时置的标志位 | 这个方法是做什么用的 |
| --- | --- | --- | --- |
| `Character` | `public AgentData Character(BasicCharacterObject characterObject)` | 无 | 换主角色。**只改 `AgentCharacter`，不动 `AgentRace` / `AgentMonster`**——换人不换脸，官方几乎不用。 |
| `Monster` | `public AgentData Monster(Monster monster)` | 无 | 换外观怪物。**官方调用点里出现频率最高的 fluent 方法**（每个城镇行为都在用）。 |
| `OwnerParty` | `public AgentData OwnerParty(IBattleCombatant owner)` | 无 | 设所属阵营。官方不用，给自定义场景用。 |
| `Equipment` | `public AgentData Equipment(Equipment equipment)` | 无 | 直接覆盖装备。`GuardsCampaignBehavior.cs:344` 的形态：`.Equipment(randomEquipmentElements).Monster(monsterWithSuffix).NoHorses(true)`。 |
| `EquipmentSeed` | `public AgentData EquipmentSeed(int seed)` | 无 | 设装备种子。`TroopOrigin()` 内部会调它。 |
| `NoHorses` | `public AgentData NoHorses(bool noHorses)` | 无 | 不给马。 |
| `NoWeapons` | `public AgentData NoWeapons(bool noWeapons)` | 无 | 不给武器。 |
| `NoArmor` | `public AgentData NoArmor(bool noArmor)` | 无 | 不给护甲。 |
| `FixedEquipment` | `public AgentData FixedEquipment(bool fixedEquipment)` | 无 | 装备固定。 |
| `CivilianEquipment` | `public AgentData CivilianEquipment(bool civilianEquipment)` | 无 | 用平民装备。 |
| `ClothingColor1` | `public AgentData ClothingColor1(uint color)` | 无 | 服装色 1。 |
| `ClothingColor2` | `public AgentData ClothingColor2(uint color)` | 无 | 服装色 2。 |
| `BodyProperties` | `public AgentData BodyProperties(BodyProperties bodyProperties)` | `BodyPropertiesOverriden = true` | 体型覆盖 + 置标志位。 |
| `Age` | `public AgentData Age(int age)` | `AgeOverriden = true` | 年龄覆盖 + 置标志位。**官方 20+ 处**都是 `.Age(MBRandom.RandomInt(num, num2))` 做随机化外观。 |
| `TroopOrigin` | `public AgentData TroopOrigin(IAgentOriginBase troopOrigin)` | 无（但会顺带调 `EquipmentSeed`） | 设来源。**内部有一段条件逻辑**：`if (((troopOrigin != null) ? troopOrigin.Troop : null) != null && !troopOrigin.Troop.IsHero) { this.EquipmentSeed(troopOrigin.Seed); }` ——**英雄不采用 origin 的种子**（英雄有独立的英雄技能/装备逻辑）。 |
| `IsFemale` | `public AgentData IsFemale(bool isFemale)` | `GenderOverriden = true` | 性别覆盖 + 置标志位。 |
| `Race` | `public AgentData Race(int race)` | **`GenderOverriden = true`（bug）** | 设种族。**它置的是性别标志位**，所以 `.Race(3)` 之后 `GenderOverriden` 会是 `true` 而 `AgentIsFemale` 仍是构造时的值。 |
| `MountKey` | `public AgentData MountKey(string mountKey)` | 无 | 指定坐骑。 |

## 真实示例

最标准的官方形态——守卫（`GuardsCampaignBehavior.cs:344` 与 `:386` 的组合）：

```csharp
public LocationCharacter CreateGuard(CharacterObject guardRosterElement, Banner banner, Equipment randomEquipmentElements)
{
    Monster monsterWithSuffix = FaceGen.GetMonsterWithSuffix(guardRosterElement.Race, "_settlement");
    // 三段链：覆盖装备 → 换外观怪物 → 不给马
    AgentData agentData = new AgentData(new SimpleAgentOrigin(guardRosterElement, -1, banner, default(UniqueTroopDescriptor)))
        .Equipment(randomEquipmentElements)
        .Monster(monsterWithSuffix)
        .NoHorses(true);
    return new LocationCharacter(
        agentData,
        new LocationCharacter.AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddStandGuardBehaviors),
        "sp_guard",
        true,
        0,
        ActionSetCode.GenerateActionSetNameWithSuffix(agentData.AgentMonster, agentData.AgentIsFemale, "_guard"),
        false, false, null, false, false, true, null, false);
}
```

同一份装备上的槽位微调（官方 `GuardsCampaignBehavior.cs:333-341` 在造 `randomEquipmentElements` 时的写法，`Equipment.AddEquipmentToSlotWithoutAgent` 在 `Equipment.cs:627`）：

```csharp
if (unarmed)
{
    // 0..5 是武器与扩展武器槽，8 是 Horse 槽；全是 default 表示「掏空」
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(0, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(1, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(2, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(3, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(4, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(5, default(EquipmentElement));
    randomEquipmentElements.AddEquipmentToSlotWithoutAgent(8, default(EquipmentElement));
}
```

随机老年化外观——官方每个市民生成点都在做（`CommonTownsfolkCampaignBehavior.cs:372` 的形态）：

```csharp
int num = 20;      // 起始年龄
int num2 = 45;     // 结束年龄
LocationCharacter locationCharacter = new LocationCharacter(
    new AgentData(new SimpleAgentOrigin(townsman, -1, null, default(UniqueTroopDescriptor)))
        .Monster(randomTownsManActionSetAndMonster.Item2)
        .Age(MBRandom.RandomInt(num, num2)),
    new LocationCharacter.AddBehaviorsDelegate(SandBoxManager.Instance.AgentBehaviorManager.AddOutdoorWandererBehaviors),
    "npc_common", false, relation, randomTownsManActionSetAndMonster.Item1, true, false, null, false, false, true, null, false);
```

囚犯：英雄来源 + 年龄覆盖 + 不给马（`PrisonBreakCampaignBehavior.cs:56` 的形态）：

```csharp
AgentData agentData = new AgentData(new SimpleAgentOrigin(this._prisonerHero.CharacterObject, -1, null, default(UniqueTroopDescriptor)))
    .Age((int)this._prisonerHero.CharacterObject.Age)
    .NoHorses(true);
```

读回设置结果——**注意 `AgeOverriden` 才是「年龄被覆盖了」的判据，`AgentAge` 单独为 0 说明不了任何事**：

```csharp
public static void DescribeAgentData(AgentData data)
{
    if (data.AgeOverriden)
    {
        MBDebug.Print("[MyMod] 年龄被覆盖为 " + data.AgentAge);
    }
    if (data.GenderOverriden)
    {
        MBDebug.Print("[MyMod] 性别被覆盖为 female=" + data.AgentIsFemale);
    }
    if (data.BodyPropertiesOverriden)
    {
        MBDebug.Print("[MyMod] 体型被覆盖");
    }
    MBDebug.Print("[MyMod] race=" + data.AgentRace + " monster=" + (data.AgentMonster != null ? data.AgentMonster.StringId : "null"));
}
```

## 风险与边界

- **`Race(int)` 有官方 bug：置错了标志位。** 它的实现是 `this.AgentRace = race; this.GenderOverriden = true; return this;` ——**没有 `RaceOverriden` 这个字段**。后果：`.Race(3)` 之后 `GenderOverriden` 变成 `true` 而 `AgentIsFemale` 保持原值，下游读到「性别被覆盖」但读到的是未覆盖的值。**这个 bug 在 1.3.0、1.3.15、1.4.6、1.4.7、1.5.3 全程未修**（`grep -n -A5 "public AgentData Race(int race)"` 逐版确认）。
- **`.Character(...)` 不联动 `AgentRace` / `AgentMonster`。** 换人不换脸，反过来 `.Race(...)` 也不改怪物（`AgentMonster` 在构造函数里就定型了）。想「换种族顺便换脸」必须两步都调。
- **`TroopOrigin(...)` 有条件副作用。** 它会看 `troopOrigin.Troop.IsHero`——**英雄不继承 origin 的 `Seed`**，非英雄才继承。所以同一条链上 `new AgentData(origin)` 已经设过一次种子，`TroopOrigin(heroOrigin)` 之后种子**不会被覆盖**。英雄与非英雄的装备随机化行为不同，这是有意的。
- **构造函数不初始化全部字段。** `AgentMountKey` / `AgentAge` / `AgentIsFemale` / `AgentBodyProperties` 在 `BasicCharacterObject` 构造路径上从未被赋值，只有 C# 的默认值（`null` / `0` / `false`）。**读它们之前先看对应的 `*Overriden` 标志位**，别拿 `AgentAge == 0` 当「年龄是 0」。
- **`AgentClothingColor1/2` 的 `uint.MaxValue` 是哨兵不是颜色。** 「未指定染色」与「染色为白」在这个值上无法区分。`LocationCharacter.cs:88-91` 会依据 `overrideBodyProperties` 与 `isFixedCharacter` 决定是否真的覆盖。
- **不是线程安全的 builder。** 它是可变对象，没有 `Clone`、没有不可变版本。两个线程同时链同一个实例会互相踩。官方只在 `CampaignBehavior` 的单线程构造期用。
- **`OwnerParty` 在 1.3.0 无任何调用点。** 别指望它是城镇生成的必需项——它更像是给任务侧或自定义场景留的口子。
- **`new AgentData(null)` 立即 NRE。** 主构造第一行就是 `: this(agentOrigin.Troop)`。
- **改 `AgentData` 不会影响已生成的 agent。** 它是生成点的配置；NPC 一旦生成，改配置对象不会刷新他。**重新进入任务**或走该行为的重新初始化流程才会生效。
- **`IsCivilianEquipment` 与 `LocationCharacter` 的 `useCivilianEquipment` 是两个开关。** 前者是 `AgentData` 上的属性，后者是 `LocationCharacter` 构造函数第 7 个形参。官方 `GuardsCampaignBehavior.cs:386` 传的是 `false`（不用平民装备），而 `.CivilianEquipment(true)` 也要单独调。**两个都不设就是「用 AgentData 的默认」。**
- **1.3.15 起多了一个 `PrepareImmediately`。** 它带同名 fluent 方法 `SetPrepareImmediately()`。**1.3.0 里没有**，所以从 1.3.0 抄到新版本的代码不受影响，反向（新版本抄回 1.3.0）会编译失败。

## 跨版本提示

`AgentData.cs` 在 1.3.0（275 行 / 9984 字节）与 1.3.15 / 1.4.6 / 1.4.7 / 1.5.3（288 行 / 10415 字节）**只差一个成员**：1.3.15 起在 `BodyPropertiesOverriden` 之前插入了

```csharp
public bool PrepareImmediately { get; private set; }        // Token: 0x1700000E RID: 14
...
public AgentData SetPrepareImmediately()                      // Token: 0x060003C2 RID: 60
{
    this.PrepareImmediately = true;
    return this;
}
```

**其余 20 个属性、2 个构造函数、18 个 fluent 方法（21 + 18 + 2 = 41 个成员里只加了 2 个）签名与实现逐字未变**——1.3.15 与 1.5.3 的 md5 完全一致（`4af3f5f9…`）。1.3.0 的构造函数 `public AgentData(IAgentOriginBase agentOrigin) : this(agentOrigin.Troop)` 在 1.3.15 里被拆成了两行格式（`: this(...)` 换行），**语义不变**。

`bannerlord-1.4.5/` 那棵树保存的是去掉了 `// Token:` 注释的精简版，只有 197 行 / 4329 字节——**存储格式差异，不是成员被裁剪**。

`Race(int)` 的 `GenderOverriden = true` bug 在五个版本里逐字相同，**升级不会自动修好它**。而 `PrepareImmediately` 是新加的语义——它控制生成后是否立刻准备表现层。**你在 1.3.0 上验证过的生成流程升到 1.3.15+ 时，默认不调 `SetPrepareImmediately()` 的行为与 1.3.0 一致；只有当你主动调用它才会改变时机。**

## 依赖关系

- 起步依赖：[IAgentOriginBase](../IAgentOriginBase) 提供 `Troop`（决定 `AgentCharacter` / `AgentRace`）与 `Seed`（决定 `AgentEquipmentSeed`）；官方实现有 [SimpleAgentOrigin](../../campaign/SimpleAgentOrigin) / [PartyAgentOrigin](../../campaign/PartyAgentOrigin) / [PartyGroupAgentOrigin](../../campaign/PartyGroupAgentOrigin) / [BasicBattleAgentOrigin](../../mission-ext/BasicBattleAgentOrigin) / [CustomBattleAgentOrigin](../../mission-ext/CustomBattleAgentOrigin)
- 唯一业务消费方：[LocationCharacter](../../campaign/LocationCharacter) 的第 1 个构造参数，`LocationCharacter.cs:85-91` 读 `AgentData` 决定体型种子与表现层准备
- 任务侧载体：[AgentBuildData](../../mission-ext/AgentBuildData) 的 `public AgentData AgentData { get; private set; }` 与它的 20 个转发属性，让同一份数据能进入 `Mission.SpawnAgent`
- 外观推导：[FaceGen](../FaceGen) 的 `GetBaseMonsterFromRace(int race)` 是 `AgentMonster` 的默认值来源，`GetMonsterWithSuffix(race, suffix)` 是官方变体怪物
- 配套常量：[ActionSetCode](../ActionSetCode) 用 `AgentData.AgentMonster` 与 `AgentData.AgentIsFemale` 拼动作集名，两者在官方调用点里总是一起出现
- 存档同族：[AgentSaveData](../AgentSaveData) 是同一程序集里另一个「描述一个单位」的纯数据类型，但那个是任务期快照、这个是大地图配置
- 桶首页：[core-extra API 分区](../)