---
title: "PartyAgentOrigin"
description: "把一个角色与一支具体队伍（PartyBase）绑定为战场 Agent 的身份来源 IAgentOriginBase，并在单位受伤、阵亡、被移除时把战斗结果真实写回该队伍的 MemberRoster 或英雄的 Campaign 状态（负伤 / 永久死亡 / 战后恢复生命）。"
---

# PartyAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyAgentOrigin : IAgentOriginBase`  
**Base:** `IAgentOriginBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.AgentOrigins/PartyAgentOrigin.cs`

## 一句话职责

`PartyAgentOrigin` 把一个**角色**（`CharacterObject`）与一支**具体队伍**（`PartyBase`）绑在一起，作为战场 `Agent` 的身份来源；和单位在战场上的结果（`SetWounded` / `SetKilled` / `OnAgentRemoved`）不同，它会把结果**真实写回**这支队伍的 `MemberRoster`（伤兵 +1、阵亡 -1）或英雄的 Campaign 状态（负伤 / 永久死亡 / 战后按剩余生命恢复），是“战斗结果要落回 Campaign”的标准来源。

## 概述

`PartyAgentOrigin` 与 [SimpleAgentOrigin](../SimpleAgentOrigin) 同属 `IAgentOriginBase`，但职责更“重”：它不仅描述“这个单位是谁”，还负责“战后对这支队伍和这个英雄产生什么持久影响”。

- 它持有 `_party`（`PartyBase`，可写）、`_troop`（`CharacterObject`）、`_banner`、预计算的兵种特征标记，以及两个构造期确定的开关：`_alwaysWounded`（阵亡时改为负伤）和 `_isInvincible`（所有结果回调全部失效）。
- “写回 Campaign”是它的核心：单位受伤 → 英雄 `MakeWounded()` 且队伍名册 `+1` 伤兵；单位阵亡 → 英雄永久击杀（`KillCharacterAction.ApplyByBattle`）或普通兵从名册 `-1`；单位被移除 → 英雄按场上剩余生命恢复 `HitPoints`。
- 构造函数比 `SimpleAgentOrigin` 多了队伍与两个开关参数，且会**自动补唯一兵牌**：若传入的 `UniqueTroopDescriptor` 无效，会用 `Game.Current.NextUniqueTroopSeed` 生成一个新的。

当你需要一个“打完了队伍兵力会真实变化 / 英雄会真的死或伤”的来源时，用 `PartyAgentOrigin`；纯表演、不希望动名册的单位用 [SimpleAgentOrigin](../SimpleAgentOrigin)。

## 心智模型

### 它是什么、在哪一层

`PartyAgentOrigin` 属于 **Mission / 战场层** 的 `IAgentOriginBase` 实现，但它是少数会在结算时**反向触碰 Campaign 数据**的来源——通过 `PartyBase.MemberRoster` 与 `Hero` 的 Campaign 状态。它自身**不是** Campaign 存档对象、没有 `StringId`，只活在单次 Mission；但它在 `Set*` / `OnAgentRemoved` 里产生的副作用会持久化到它绑定的队伍与英雄。

### 谁创建、谁持有

1. 你（或引擎 spawn 逻辑）用 `new PartyAgentOrigin(PartyBase, CharacterObject, ...)` 构造它，再用 `AgentData` 包一层交给 `AgentBuildData`——`AgentBuildData(AgentData)` / `.TroopOrigin(IAgentOriginBase)` 都会带它进入生成流程。
2. 真实调用链（见 `HeroAgentSpawnCampaignBehavior.CreateLocationCharacterForHero`）：当英雄是“玩家家族成员 / 主队同伴”时用 `new PartyAgentOrigin(PartyBase.MainParty, hero.CharacterObject)`；当是“队伍领袖”时用 `new PartyAgentOrigin(hero.PartyBelongedTo.Party, hero.CharacterObject)`；默认分支（`default`）用 `new PartyAgentOrigin(null, hero.CharacterObject)`。
3. `Mission.SpawnTroop` / `SpawnAgent` 据此创建 `Agent`，完成后 `Agent.Origin` 指向这个 `PartyAgentOrigin`。
4. 单位受伤 / 阵亡 / 移除时，Mission 回调 `Origin.SetWounded()` / `SetKilled()` / `OnAgentRemoved(...)`。这些回调对 `PartyAgentOrigin` 是**有真实副作用**的（见成员说明），副作用直接落到 `Party` 的名册和英雄的 Campaign 状态上。

### 与 SimpleAgentOrigin 的边界

- `SimpleAgentOrigin` 的 `SetWounded` / `SetRouted` / `OnAgentRemoved` 是空实现，`SetKilled` 只杀英雄；`PartyAgentOrigin` 则对每个回调都有写回逻辑。
- `PartyAgentOrigin` 的 `FactionColor` 在 `Party != null` 时返回 `Party.MapFaction.Color2`（次色），而 `SimpleAgentOrigin` 返回 `Color`（主色）——同一属性取值规则不同，混用时注意。
- `PartyAgentOrigin` 构造时会自动补唯一兵牌；`SimpleAgentOrigin` 不会。

## 如何获取 / 构造 PartyAgentOrigin

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

// 真实构造函数签名：
//   PartyAgentOrigin(PartyBase partyBase, CharacterObject characterObject,
//                    int rank = -1, UniqueTroopDescriptor uniqueNo = default,
//                    bool alwaysWounded = false, bool isInvincible = false)
IAgentOriginBase origin = new PartyAgentOrigin(PartyBase.MainParty, troopCharacter, rank: -1);

// 传入 null 作为 party 也是允许的（引擎 default 分支即如此）；
// 此时若 troop 是英雄且有所属队伍，Party 属性会回退到该英雄的队伍
IAgentOriginBase heroOrigin = new PartyAgentOrigin(null, hero.CharacterObject);

// alwaysWounded=true：该单位阵亡会被改成“负伤”而非死亡
// isInvincible=true：所有结算回调变为 no-op（不伤、不死、不恢复）
IAgentOriginBase safe = new PartyAgentOrigin(someParty.Party, troop,
    alwaysWounded: false, isInvincible: true);
```

`rank` 传入 `-1`（默认）时随机 `0~9999`；`uniqueNo` 无效时自动从 `Game.Current.NextUniqueTroopSeed` 取号（与 `SimpleAgentOrigin` 不同）。

## 何时用 / 何时不要用

**用它：**
- 战场结算后，你希望这支队伍的 `MemberRoster` 真实反映伤 / 亡（例如正规军、商队护卫、驻军参与遭遇战）。
- 你希望英雄在战场上受伤 → 进入 `Hero.CharacterStates.Wounded`、阵亡 → 永久死亡、战后 → 按剩余生命恢复 `HitPoints`。
- 你想用 `alwaysWounded` / `isInvincible` 控制某个单位“只伤不亡”或“完全免结算”。

**别用它：**
- 不要把它当成可跨场景 / 跨存档保存的引用。它活在单次 Mission，但其**副作用**会写进 Campaign——混淆这两点容易在 Mission 结束后误以为“来源还在、名册还能改”。
- 不要手动调用 `SetWounded()` / `SetKilled()` / `OnAgentRemoved()` 去“直接改名册”。这些回调由 Mission 在正确的移除时机统一驱动；你自己乱调会重复记账（与 Mission 的结算再加一次）。要改名册请走 `PartyBase.MemberRoster.AddToCounts` 或对应 Action。
- 不要 `new` 一个替换 `Agent.Origin` 来改场上身份。身份由生成时的 `AgentBuildData` 决定；改身份应改来源对象（英雄 / 队伍）并重生单位。
- 构造时不要把普通兵种与 `isInvincible=false`（默认）且期望“阵亡不扣名册”混用——默认就会扣名册，要用 [SimpleAgentOrigin](../SimpleAgentOrigin) 才是 no-op。

## 依赖图

- 上游：[Mission](../../mission/Mission) 经 `SpawnTroop` / `SpawnAgent` 消费 `AgentBuildData`，后者经 `AgentData` 持有本来源；[Agent](../../mission/Agent) 生成后通过 `Agent.Origin` 反向引用它。
- 同类来源：[SimpleAgentOrigin](../SimpleAgentOrigin)（不写回名册）、[PartyGroupAgentOrigin](../PartyGroupAgentOrigin)（整队来源）。
- 下游 / 关联：[Team](../../mission-ext/Team) 与 [Formation](../../mission/Formation) 决定阵营与阵形；[CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent) 把场上 Agent 与 Campaign 语义连起来。
- 角色与队伍来源：[CharacterObject](../CharacterObject)（构造要求传入 `CharacterObject`，不是 `BasicCharacterObject`）、[Hero](../Hero)（`Set*` 回调直接改英雄状态）、[PartyBase](../PartyBase)（绑定队伍，`MemberRoster` 是伤亡写回目标）、[MobileParty](../MobileParty)（`Party` 回退时经由英雄的 `PartyBelongedTo` 取得）、[Banner](../../core-extra/Banner)（构造时传入或按队伍 / 家族旗回退）、[Clan](../Clan)（`Banner` 回退用到 `LeaderHero.ClanBanner`）。

## 风险

1. **结算回调会真实改 Campaign 数据，且可能不可撤销。** `SetKilled()` 对英雄调用 `KillCharacterAction.ApplyByBattle` 是**永久击杀**；对非英雄调用 `Party.MemberRoster.AddToCounts(_troop, -1)` 真实扣兵。Mission 已经会驱动这些回调，你再手动调一次就会重复扣人 / 重复杀英雄。
2. **`isInvincible` 让一切结算失效。** 构造时若 `isInvincible=true`，`SetWounded` / `SetKilled` / `OnAgentRemoved` 全部提前 `return`，英雄不会伤、不会死，战后也不会恢复生命。需要“表演性不可摧毁单位”时才开，否则会让你误以为战斗有后果。
3. **`alwaysWounded` 把“阵亡”变成“负伤”。** `SetKilled()` 在 `alwaysWounded` 为真时改调 `SetWounded()`，英雄进入负伤、普通兵进名册 `+1` 伤兵，而不是 `-1` 阵亡。确认这是你要的语义。
4. **`IsUnderPlayersCommand` 不防御 `Party == null`。** 若 `Party` 最终为 `null`（例如构造传 `null` 且 troop 不是英雄、或英雄无所属队伍），访问该属性会在 `party.Owner` 处抛 `NullReferenceException`。`IsInSameArmyAsPlayer` 有 `party != null` 守卫不会崩，但 `IsUnderPlayersCommand` 没有——在 `Party` 可能为 null 的路径上读取前先判空或用 `Party != null` 保护。
5. **`FactionColor` 返回的是 `Color2`。** 当 `Party != null` 时，`FactionColor` 取 `Party.MapFaction.Color2`（次色），`FactionColor2` 也是 `Color2`；只有 `Party == null` 时才取英雄 `MapFaction.Color` / `Color2`。与 `SimpleAgentOrigin`（party 非空取 `Color`）规则不同，别假设两者主色一致。
6. **`Banner` 的多级回退。** 未显式 `SetBanner` 时：`Party == null` 且非英雄 → `null`；英雄无队伍 → 英雄 `MapFaction.Banner`；有队伍且无 `LeaderHero` → 队伍 `MapFaction.Banner`；有队伍且有 `LeaderHero` → `LeaderHero.ClanBanner`。选旗逻辑依赖队伍 / 领袖，改名或换领袖后需要重新取。
7. **跨场景不是持久引用。** 和所有 `IAgentOriginBase` 一样它只活在单次 Mission；可跨场景保存的是英雄 `StringId` 或 `PartyBase` 的可存档身份，不是原生来源对象。

## 成员说明

下面按 mod 实际会读取 / 调用的时机分组，而不是罗列签名墙。

### 身份、队伍与角色

#### `public PartyBase Party { get; set; }`
绑定的队伍。构造时由 `partyBase` 赋值；若 troop 是英雄且有所属队伍，读取时会回退到 `hero.PartyBelongedTo.Party`。`set` 可在构造后改绑定（注意：改了之后 `Set*` 回调的写回目标也跟着变）。它是 `MemberRoster` 写回、`BattleCombatant`、阵营色与 `IsUnderPlayersCommand` 判定的基础。

#### `public IBattleCombatant BattleCombatant => Party;`
战斗模拟把本来源当作的“战斗参与者”。`Party` 为 null 时也是 null。

#### `public BasicCharacterObject Troop => _troop;`
本来源代表的角色（`CharacterObject` 类型）。构造要求传 `CharacterObject`（不是 `BasicCharacterObject`），`Agent.Origin.Troop` 是拿到场上单位身份的最直接入口。只读。

#### `public int Rank { get; private set; }`
排位 / 序号。`rank == -1`（默认）时随机 `0~9999`，否则用传入值。影响 `Seed`。只读。

#### `public int UniqueSeed => _descriptor.UniqueSeed;`
唯一兵牌种子。构造时若 `uniqueNo` 无效会自动从 `Game.Current.NextUniqueTroopSeed` 取号，因此这里几乎总是有效非零值（与 `SimpleAgentOrigin` 不同）。

### 外观、阵营色与旗帜

#### `public uint FactionColor { get; }`
阵营主色：`Party == null` 时取英雄 `MapFaction.Color`；`Party != null` 时取 `Party.MapFaction.Color2`（**次色**，注意）。用于着色。

#### `public uint FactionColor2 { get; }`
阵营副色：`Party == null` 取英雄 `MapFaction.Color2`；`Party != null` 取 `Party.MapFaction.Color2`。

#### `public Banner Banner { get; }`
旗帜，多级回退（见风险第 6 条）：未 `SetBanner` 时按“队伍 → 领袖家族旗 → 阵营旗 → 英雄阵营旗 → null”顺序取值。

#### `public int Seed { get; }`
面部 / 外观种子。`Party == null` 时返回 `0`；否则 `CharacterHelper.GetPartyMemberFaceSeed(Party, _troop, Rank)`。

### 与玩家的关系

#### `public bool IsUnderPlayersCommand { get; }`
是否听命于玩家：`party == null || party != MainParty` 且 `party.Owner == Hero.MainHero` 时，看 `party.MapFaction.Leader == Hero.MainHero`；否则（主队或主人是玩家）为 `true`。**不防御 `Party == null`，见风险第 4 条。**

#### `public bool IsInSameArmyAsPlayer { get; }`
是否与玩家同军团：检查 `Party.MobileParty.Army == MobileParty.MainParty.Army` 及编制关系；不满足或无 `Party` 时 `false`（有 `party != null` 守卫，不会崩）。

### 战斗结果回调（会写回 Campaign）

#### `public void SetWounded()`
若 `!_isInvincible`：英雄调用 `MakeWounded()` 进入负伤；若 `Party != null` 则 `Party.MemberRoster.AddToCounts(_troop, 0, insertAtFront: false, 1)`——名册伤兵 `+1`。这是“受伤 → 真实记帐”的入口，由 Mission 在单位受伤时驱动。

#### `public void SetKilled()`
若 `!_isInvincible`：若 `_alwaysWounded` → 改调 `SetWounded()`；否则英雄 → `KillCharacterAction.ApplyByBattle(_troop.HeroObject, null)`（永久死亡）；非英雄 → `Party?.MemberRoster.AddToCounts(_troop, -1)`（名册 `-1`）。由 Mission 在单位阵亡时驱动；不要手动重复调用。

#### `public void SetRouted(bool isOrderRetreat)`
**空实现（no-op）。** 溃逃状态不写回任何 Campaign 数据。

#### `public void OnAgentRemoved(float agentHealth)`
若 troop 是英雄、未死亡且 `!_isInvincible`：把 `HeroObject.HitPoints` 设为 `Max(1, Round(agentHealth))`——即按该 Agent 在场上剩余的血量恢复英雄生命（至少 1）。这是“战后英雄按表现恢复”的入口，由 Mission 在移除单位时驱动。

#### `void IAgentOriginBase.OnScoreHit(BasicCharacterObject victim, BasicCharacterObject captain, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`
**空实现（no-op）。** 与 `SimpleAgentOrigin` 不同，`PartyAgentOrigin` 不在此处给英雄加战斗经验。

#### `public void SetBanner(Banner banner)`
设置 `_banner`，覆盖 `Banner` 的多级回退取值。构造后随时可调。

#### `TroopTraitsMask IAgentOriginBase.GetTraitsMask()`
显式接口实现，返回 `AgentOriginUtilities.GetDefaultTraitsMask(this)`——构造时预计算的兵种特征掩码（飞镖 / 长矛 / 盾 / 重甲），供生成逻辑决定装备 / AI 倾向。

## 真实构造与生成示例

### 示例 1：把一支队伍的兵作为可结算单位生成（仿 HeroAgentSpawnCampaignBehavior）

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 真实构造函数签名：
//   PartyAgentOrigin(PartyBase partyBase, CharacterObject characterObject,
//                    int rank = -1, UniqueTroopDescriptor uniqueNo = default,
//                    bool alwaysWounded = false, bool isInvincible = false)
IAgentOriginBase origin = new PartyAgentOrigin(PartyBase.MainParty, troopCharacter, rank: -1);

// 用 AgentData 包一层，交给 AgentBuildData 进入生成流程
AgentBuildData buildData = new AgentBuildData(new AgentData(origin))
    .Team(Mission.Current.PlayerTeam)
    .InitialPosition(spawnFrame.origin)
    .InitialDirection(spawnFrame.rotation.f.AsVec2.Normalized());

Agent agent = Mission.Current.SpawnAgent(buildData);
// 该 agent 阵亡 → Mission 调 origin.SetKilled()
//   → 普通兵：PartyBase.MainParty.MemberRoster 扣 1
//   → 英雄：   KillCharacterAction.ApplyByBattle 永久击杀
// 该 agent 被移除（存活）→ Mission 调 origin.OnAgentRemoved(剩余血量)
//   → 英雄按剩余血量恢复 HitPoints
```

### 示例 2：读取来源并判断它绑定到哪支队伍

```csharp
using TaleWorlds.CampaignSystem.AgentOrigins;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.MountAndBlade;

public override void OnAgentBuild(Agent agent, Banner banner)
{
    base.OnAgentBuild(agent, banner);
    if (agent.Origin is PartyAgentOrigin partyOrigin)
    {
        PartyBase party = partyOrigin.Party;        // 绑定的队伍（英雄无队伍时可能为 null）
        BasicCharacterObject who = partyOrigin.Troop;
        bool mine = partyOrigin.IsUnderPlayersCommand; // 注意：Party 为 null 时此属性会 NRE
        if (party != null)
        {
            int wounded = party.MemberRoster.WoundedCopies; // 战后伤亡会写回这里
        }
        // 不要把 partyOrigin 缓存到下一场 Mission
    }
}
```

## 版本注记

本文以 v1.4.5 的 `TaleWorlds.CampaignSystem.AgentOrigins.PartyAgentOrigin` 源码为准。其构造参数（`alwaysWounded` / `isInvincible`）、`Party` 的 get/set、`SetWounded` / `SetKilled` / `OnAgentRemoved` 的写回逻辑在 v1.3.x → v1.4.5 间形态一致；跨版本 mod 以目标版本源码核对 `KillCharacterAction` 路径、`MemberRoster.AddToCounts` 签名与 `AgentData` / `AgentBuildData` 构造签名为准。

## 导航

- ↑ 父概念：[Agent](../../mission/Agent)（Origin 是 Agent 的身份来源字段）
- ↔ 同类来源：[SimpleAgentOrigin](../SimpleAgentOrigin) · [PartyGroupAgentOrigin](../PartyGroupAgentOrigin)
- 相关类（同目录）：[CharacterObject](../CharacterObject) · [Hero](../Hero) · [PartyBase](../PartyBase) · [MobileParty](../MobileParty) · [Clan](../Clan)
- 跨层关联：[BasicCharacterObject](../../core-extra/BasicCharacterObject) · [Mission](../../mission/Mission) · [Formation](../../mission/Formation) · [Team](../../mission-ext/Team) · [CampaignAgentComponent](../../campaign-ext/CampaignAgentComponent)
