---
title: "SimpleAgentOrigin"
description: "把一个 BasicCharacterObject（通常是不属于任何队伍的角色或无党派英雄）包装成战场层的身份来源 IAgentOriginBase，供 Mission 在生成 Agent 时读取角色、阵营色与是否听命于玩家；它不持有队伍花名册，多数战斗结果回调是空实现。"
---

# SimpleAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class SimpleAgentOrigin : IAgentOriginBase`  
**Base:** `IAgentOriginBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.AgentOrigins/SimpleAgentOrigin.cs`

## 一句话职责

`SimpleAgentOrigin` 把**一个角色对象**（`BasicCharacterObject`）与可选旗帜、排位、唯一兵牌描述符打包，作为战场 `Agent` 的“身份来源”，让 Mission 在生成单位时知道它代表谁、该用哪套阵营色、是否听命于玩家——但**它本身不绑定任何 `PartyBase` 花名册**，战斗伤亡也大多不会写回 Campaign 数据。

## 概述

`SimpleAgentOrigin` 是 `IAgentOriginBase` 体系里最“轻量”的一种来源。它回答的是一场 Mission 里“这个单位的身份是什么”，而不是“它属于哪支队伍、伤亡怎么记账”：

- 它持有 `_troop`（`CharacterObject`，构造时由传入的 `BasicCharacterObject` 强转而来）、`_banner`、`_descriptor`（`UniqueTroopDescriptor`）以及构造时预计算好的兵种特征标记（`HasThrownWeapon` / `HasSpear` / `HasShield` / `HasHeavyArmor`）。
- “Simple” 的真正含义在战斗结果回调里体现：`SetWounded()`、`SetRouted(bool)`、`OnAgentRemoved(float)` 都是**空实现**；`SetKilled()` 仅对英雄角色生效（调用 `KillCharacterAction.ApplyByBattle` 永久击杀该英雄），对非英雄角色同样没有副作用。也就是说，用 `SimpleAgentOrigin` 生成的兵，战后阵亡**不会**从任何队伍花名册里扣人。
- 它能在构造时拿到阵营色/旗帜，是因为 `Party` 属性在“角色是英雄且当前有所属队伍”时会返回该英雄的 `PartyBase`；否则 `Party` 为 `null`，此时阵营色回退到英雄的 `MapFaction`，旗帜则取决于你构造时传入的 `Banner`。

需要“战斗结果要真实反映到队伍名册（伤/亡/溃）”时，应改用 [PartyAgentOrigin](../PartyAgentOrigin)；需要把一整队兵作为一个战斗单位来源时，用 [PartyGroupAgentOrigin](../PartyGroupAgentOrigin)。

## 心智模型

### 它是什么、在哪一层

`SimpleAgentOrigin` 属于 **Mission / 战场层**，是 `IAgentOriginBase` 协议的一个具体实现，**不是 Campaign 存档对象**，本身不实现 `MBObjectBase`、没有 `StringId`。它只在某次 Mission 生成 `Agent` 的窗口里活着；Mission 结束后这个来源对象就失去意义，你不能把它当作跨场景、跨存档的长期引用保存。

### 谁创建、谁持有

1. 你（或引擎的 spawn 逻辑）用 `new SimpleAgentOrigin(...)` 构造它，再用 `AgentData` 包一层，最后交给 `AgentBuildData`——`AgentBuildData(AgentData)` 或 `AgentBuildData.TroopOrigin(IAgentOriginBase)` 都会把它带进生成流程。
2. 真实调用链（见 `HeroAgentSpawnCampaignBehavior.CreateLocationCharacterForHero`）：当英雄是“无所属队伍贵族 / 俘虏”时，引擎用的是 `new AgentData(new SimpleAgentOrigin(hero.CharacterObject))`；而同一函数里其他分支（玩家家族成员、队伍领袖）则改用 `PartyAgentOrigin`。
3. `Mission.SpawnTroop` / `SpawnAgent` 把 `AgentBuildData` 交给原生层，原生层据此创建 `Agent` 并调用 `Agent.Build`；完成后 `Agent.Origin` 就指向你传入的这个 `SimpleAgentOrigin`。
4. 单位在场上受伤、阵亡、被移除时，Mission 会回调 `Origin.SetWounded()` / `SetKilled()` / `OnAgentRemoved(...)` / `OnScoreHit(...)`。对这些回调，本类几乎都是空操作（见下文成员说明）。

### 与 Campaign 的边界

- 它**不**拥有 `PartyBase.MemberRoster`。即使 `Party` 非 null，本类的结算回调也不会去改名册（这与 `PartyAgentOrigin` 形成关键对比）。
- 唯一会触及 Campaign 持久状态的是 `SetKilled()` 对英雄角色调用 `KillCharacterAction.ApplyByBattle`——这是**永久击杀**，会写进 Campaign。对普通兵种，则什么都不做。

## 如何获取 / 构造 SimpleAgentOrigin

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.Core;

// 为一个角色构造一个“简单来源”
// 参数（按真实构造函数签名）：BasicCharacterObject troop, int rank = -1, Banner banner = null,
//                              UniqueTroopDescriptor descriptor = default
BasicCharacterObject troop = hero.CharacterObject;
SimpleAgentOrigin origin = new SimpleAgentOrigin(troop, rank: 5, banner: hero.ClanBanner);

// 不传 rank 时引擎会随机一个 0~9999 的排位；不传 banner 时旗帜为 null
SimpleAgentOrigin plain = new SimpleAgentOrigin(troop);
```

`rank` 仅在传入 `-1`（默认值）时由 `MBRandom.RandomInt(10000)` 随机生成，否则使用你给的值；`descriptor` 原样保存（**不会**像 `PartyAgentOrigin` 那样在无效时自动从 `Game.Current.NextUniqueTropSeed` 取号）。

## 何时用 / 何时不要用

**用它：**
- 你想在自定义 Mission / 场景里生成一个“不隶属于任何队伍”的单位——例如无党派的流浪英雄、任务 NPC、场景里的固定角色。
- 你只关心这个单位的角色身份、阵营色、是否听命于玩家，而不需要战后把伤亡写回某支队伍。
- 现场（Location / 场景）里给英雄生成外观用（引擎正是这么用的）。

**别用它：**
- 不要指望 `SetWounded()` / `SetKilled()`（非英雄）/ `OnAgentRemoved()` 去更新任何队伍花名册——它们对普通兵种是空实现。要真实记账请用 [PartyAgentOrigin](../PartyAgentOrigin)。
- 不要把 `Origin` 引用缓存到静态字段、异步任务或下一场 Mission。它是短生命周期的战场对象，Mission 清理后继续访问 `Party` / `Banner` 等只读属性虽不一定崩，但语义已无意义，且英雄引用可能已被其它回调改动。
- 不要为了“改场上单位的身份”而直接 `new` 一个替换掉 `Agent.Origin`。场上单位的身份由生成时的 `AgentBuildData` 决定；要改身份应走来源对象（英雄/队伍）的 API 并重新生成，而非运行时替换 Origin。

## 依赖图

- 上游：[Mission](../../mission/Mission) 经 `SpawnTroop` / `SpawnAgent` 消费 `AgentBuildData`，而 `AgentBuildData` 经 `AgentData` 持有本来源；[Agent](../../mission/Agent) 生成后通过 `Agent.Origin` 反向引用它。
- 同类来源：[PartyAgentOrigin](../PartyAgentOrigin)（绑定队伍、会写回名册）、[PartyGroupAgentOrigin](../PartyGroupAgentOrigin)（整队来源）。
- 下游 / 关联：[Team](../../mission-ext/Team) 与 [Formation](../../mission/Formation) 决定该单位被编入哪个阵营与阵形；[CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent) 在战场上把 Agent 与 Campaign 语义（主人队伍、导航）连起来。
- 角色身份来源：[CharacterObject](../CharacterObject) / [BasicCharacterObject](../../core-extra/BasicCharacterObject)（本类 `_troop` 的类型）、[Hero](../Hero)（当 troop 是英雄时，`Party` / 阵营色 / `SetKilled` 都依赖它）、[PartyBase](../PartyBase)（英雄有所属队伍时的 `Party` 来源）、[Banner](../../core-extra/Banner)（构造时传入的旗帜）。

## 风险

1. **多数结算回调是空实现。** `SetWounded()`、`SetRouted(bool)`、`OnAgentRemoved(float)` 在 `SimpleAgentOrigin` 里直接 `return`。若你的逻辑依赖“单位受伤→英雄进入负伤状态”或“单位阵亡→从名册扣人”，用 `SimpleAgentOrigin` 永远不会发生——只有 `SetKilled()` 对**英雄**有效（永久击杀）。
2. **`SetKilled()` 对非英雄是 no-op，会造成“战场减员但 Campaign 名册不变”的错觉。** 如果你用一个 `SimpleAgentOrigin` 包普通兵种去参加会结算伤亡的战斗，战后名册不会变；这既可能是你想要的（纯表演战），也可能让你误以为兵力被正确扣减。
3. **英雄被 `SetKilled()` 会永久死亡。** 因为内部调用 `KillCharacterAction.ApplyByBattle(_troop.HeroObject, null)`，该英雄的 Campaign 状态会变成 Dead，且无法靠本类其它回调恢复。`OnAgentRemoved` 虽然是空的，但死亡已经发生。
4. **`Party` 可能为 null。** 当 `troop` 不是英雄、或英雄 `PartyBelongedTo == null` 时 `Party` 返回 `null`。此时 `IsUnderPlayersCommand` 返回 `false`、`FactionColor` / `FactionColor2` 回退到英雄 `MapFaction`（非英雄且无 party 时返回 `0`）、`Seed` 退化为默认脸种子。
5. **`UniqueSeed` 不会自动取号。** 构造函数把 `descriptor` 原样保存；如果你传入 `default(UniqueTroopDescriptor)`，则 `UniqueSeed == 0`。需要唯一兵牌追踪时，必须自己构造有效的 `UniqueTroopDescriptor`（不像 `PartyAgentOrigin` 会自动从 `Game.Current.NextUniqueTroopSeed` 取）。
6. **跨场景不是持久引用。** 和所有 `IAgentOriginBase` 一样，它活在单次 Mission。把它的引用塞进存档、静态字段或下一场 Mission 都是错误的；需要跨场景保存的是英雄的 `StringId` 或可存档的 Campaign 身份，不是原生来源对象。

## 成员说明

下面按 mod 实际会读取 / 调用的时机分组，而不是罗列签名墙。

### 身份与角色

#### `public BasicCharacterObject Troop { get; }`
本来源代表的角色对象（构造时由 `BasicCharacterObject` 强转为 `CharacterObject` 存入 `_troop`）。`Agent.Origin.Troop` 是你在 Mission 回调里拿到“这个单位是谁”的最直接入口。只读。

#### `public int Rank { get; private set; }`
排位 / 序号。构造时若传入 `rank == -1`（默认）则由 `MBRandom.RandomInt(10000)` 随机；否则使用传入值。影响 `Seed` 的取值。只读。

#### `public int UniqueSeed => _descriptor.UniqueSeed;`
唯一兵牌种子，来自构造时传入的 `UniqueTroopDescriptor`。用于把场上 Agent 与某个唯一兵牌记录对应起来。注意：传入 `default` 时这里为 `0`，本类不会自动补号。

#### `public PartyBase Party { get; }`
当且仅当 `Troop` 是英雄且其 `PartyBelongedTo != null` 时返回该英雄所属队伍的 `PartyBase`，否则返回 `null`。它是 `IsUnderPlayersCommand`、`IsInSameArmyAsPlayer`、`FactionColor`、`Seed` 的判定基础。只读。

#### `public IBattleCombatant BattleCombatant => Party;`
战斗模拟把本来源当作的“战斗参与者”。因为 `SimpleAgentOrigin` 的 `Party` 常常为 `null`，这个战斗参与者也常常为 `null`——战场模拟对“无阵营来源”的单位会按其它规则处理。

### 外观与阵营色

#### `public uint FactionColor { get; }`
阵营主色。若 `Party != null` 取 `Party.MapFaction.Color`；否则若 `Troop.IsHero` 取英雄 `MapFaction.Color`；否则返回 `0`。被用于着色部队。

#### `public uint FactionColor2 { get; }`
阵营副色。逻辑同 `FactionColor`，取 `Color2`。

#### `public Banner Banner => _banner;`
旗帜。构造时传入的 `Banner`；构造时不传即为 `null`。想改场上旗帜用 `SetBanner(Banner)`。

#### `public int Seed { get; }`
面部 / 外观随机种子。若 `Party != null` 用 `CharacterHelper.GetPartyMemberFaceSeed(Party, _troop, Rank)`，否则用 `CharacterHelper.GetDefaultFaceSeed(_troop, Rank)`。影响生成时的外观，不直接决定命名或身份。

### 与玩家的关系

#### `public bool IsUnderPlayersCommand { get; }`
该单位是否听命于玩家：当 `Party` 是 `PartyBase.MainParty` 或 `Party.Owner == Hero.MainHero` 时为 `true`；若 `Party` 非 null 但不满足前者，则看 `Party.MapFaction.Leader == Hero.MainHero`；`Party` 为 null 时返回 `false`。

#### `public bool IsInSameArmyAsPlayer { get; }`
该单位是否与玩家处于同一军团：检查 `Party.MobileParty.Army` 是否等于 `MobileParty.MainParty.Army` 且编制关系满足；不满足或无 `Party` 时返回 `false`。常用于友军奖励 / 共同指令判定。

### 战斗结果回调（关键行为差异）

#### `public void SetWounded()`
**空实现（no-op）。** 与 `PartyAgentOrigin` 不同，这里不会把英雄设为负伤、也不会往任何名册加“伤兵”。不要依赖它改变任何状态。

#### `public void SetKilled()`
若 `Troop.IsHero` 则调用 `KillCharacterAction.ApplyByBattle(_troop.HeroObject, null)`——**永久击杀该英雄，写进 Campaign**；非英雄角色则什么都不做。这是本类唯一会改动 Campaign 持久状态的入口，调用前务必确认你真的要杀掉这个英雄。

#### `public void SetRouted(bool isOrderRetreat)`
**空实现（no-op）。** 溃逃状态不会在本类留下任何记录。

#### `public void OnAgentRemoved(float agentHealth)`
**空实现（no-op）。** Agent 从 Mission 移除时 Mission 会回调它，但 `SimpleAgentOrigin` 不据此恢复英雄生命或改名册。

#### `void IAgentOriginBase.OnScoreHit(BasicCharacterObject victim, BasicCharacterObject formationCaptain, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`
显式接口实现。仅当 `isTeamKill` 为真时，用 `CombatXpModel.GetXpFromHit` 计算击杀经验；若 `Troop.IsHero` 且 `attackerWeapon != null`，再把经验通过 `HeroObject.AddSkillXp` 加到该英雄上。非英雄来源则只是空算一遍不落地。这是本类少数“有真实副作用”的方法之一（给英雄加战斗技能经验）。

#### `public void SetBanner(Banner banner)`
设置 `_banner`，改变本来源后续暴露的 `Banner`。构造后随时可调；会影响之后生成 / 着色用的旗帜。

#### `TroopTraitsMask IAgentOriginBase.GetTraitsMask()`
显式接口实现，返回 `AgentOriginUtilities.GetDefaultTraitsMask(this)`——即构造时预计算的特征掩码（是否带飞镖、长矛、盾、重甲）。供生成逻辑决定装备 / AI 倾向。

## 真实构造与生成示例

### 示例 1：为无所属队伍的英雄生成一个现场角色（仿 HeroAgentSpawnCampaignBehavior）

引擎在英雄“无所属队伍 / 俘虏”分支正是这样构造的；你也可以在自定义场景里照抄：

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 真实构造函数签名：
//   SimpleAgentOrigin(BasicCharacterObject troop, int rank = -1,
//                     Banner banner = null, UniqueTroopDescriptor descriptor = default)
IAgentOriginBase origin = new SimpleAgentOrigin(hero.CharacterObject, rank: 5, banner: hero.ClanBanner);

// 用 AgentData 包一层，再交给 AgentBuildData 进入生成流程
AgentBuildData buildData = new AgentBuildData(new AgentData(origin))
    .Team(Mission.Current.PlayerTeam)
    .InitialPosition(new Vec3(100f, 80f, 0f))
    .InitialDirection(Vec2.Forward);

Agent agent = Mission.Current.SpawnAgent(buildData);
// 之后 agent.Origin 即指向这个 SimpleAgentOrigin；
// 该 agent 阵亡 → Mission 调 origin.SetKilled()，
//   仅当 hero 是英雄时会永久击杀，普通兵种无任何名册变化。
```

### 示例 2：读取场上单位的身份与阵营色

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.MountAndBlade;

public override void OnAgentBuild(Agent agent, Banner banner)
{
    base.OnAgentBuild(agent, banner);
    if (agent.Origin is SimpleAgentOrigin simple)
    {
        BasicCharacterObject who = simple.Troop;   // 这个单位是谁
        uint color = simple.FactionColor;          // 阵营主色
        bool mine = simple.IsUnderPlayersCommand;  // 是否听命于玩家
        PartyBase party = simple.Party;            // 英雄有所属队伍时非空，否则 null
        // 注意：不要在这里缓存 simple，它只在本场 Mission 有效
    }
}
```

## 版本注记

本文以 v1.4.5 的 `TaleWorlds.CampaignSystem.AgentOrigins.SimpleAgentOrigin` 源码为准。该类的成员（构造参数、`Troop` / `Party` / `Rank` / `UniqueSeed` / 各颜色与 `Set*` 回调）在 v1.3.x → v1.4.5 间形态一致；跨版本 mod 以目标版本源码核对 `SetKilled` 的英雄击杀路径与 `AgentData` / `AgentBuildData` 的构造签名为准。

## 导航

- ↑ 父概念：[Agent](../../mission/Agent)（Origin 是 Agent 的身份来源字段）
- ↔ 同类来源：[PartyAgentOrigin](../PartyAgentOrigin) · [PartyGroupAgentOrigin](../PartyGroupAgentOrigin)
- 相关类（同目录）：[CharacterObject](../CharacterObject) · [Hero](../Hero) · [PartyBase](../PartyBase) · [MobileParty](../MobileParty)
- 跨层关联：[BasicCharacterObject](../../core-extra/BasicCharacterObject) · [Mission](../../mission/Mission) · [Formation](../../mission/Formation) · [Team](../../mission-ext/Team) · [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent)
