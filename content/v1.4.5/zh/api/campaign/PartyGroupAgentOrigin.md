---
title: "PartyGroupAgentOrigin"
description: "代表某场 MapEvent 某一参战方（PartyGroup）中、按 UniqueTroopDescriptor 标识的单个兵员的战场来源；由 PartyGroupTroopSupplier 在战斗 Mission 中创建，负责把该兵员的受伤/阵亡/溃逃/命中结果回写到 Campaign 花名册。"
---
# PartyGroupAgentOrigin

**Namespace:** `TaleWorlds.CampaignSystem.AgentOrigins`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class PartyGroupAgentOrigin : IAgentOriginBase`  
**Base:** `IAgentOriginBase`  
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.AgentOrigins/PartyGroupAgentOrigin.cs`

## 一句话职责

它把 MapEvent 某一参战方（一个 `PartyGroup` / `MapEventSide`）里的**某一个具体兵员**——用 `UniqueTroopDescriptor` 唯一区分——连接到该兵员在 Campaign 中真正所属的队伍（`PartyBase`）与角色（`CharacterObject`）；当这个兵员在战场阵亡、受伤、溃逃或被命中时，它通过持有的 `PartyGroupTroopSupplier` 把结果回写到 `MapEventSide` 的花名册，从而驱动战役层面的兵力变化。

## 概述

`PartyGroupAgentOrigin` 是 `IAgentOriginBase` 的三个实现之一，定位在"**整组兵力按概率/数量被消耗**"的战斗模拟路径上。一场 MapEvent 的一边（`MapEventSide`，也称作 `PartyGroup`）往往由多支队伍、成百上千个兵员组成；引擎不会为每个兵员都生成独立 Agent，而是先由 `PartyGroupTroopSupplier` 按 `AllocateTroops` 抽出一个个 `UniqueTroopDescriptor`，再为每个描述符包一个 `PartyGroupAgentOrigin` 交给 `AgentBuildData` 去生成 `Agent`。这样做的好处是：兵员的"归属哪支队伍、第几个、长什么样"都由描述符与 supplier 决定，而伤亡结果能精确回写到最初抽它的那支队伍的花名册，而不是笼统地扣整组。

它自身是**短生命周期**对象：随所在 Mission 的兵员分配阶段被 `PartyGroupTroopSupplier` 创建，随 Agent 在 Mission 结束时一起失效。它引用的 `PartyBase` / `CharacterObject` 是 Campaign 层的长期对象，但 `PartyGroupAgentOrigin` 实例本身不是可持久保存的引用。

## 心智模型

### 它是什么

`PartyGroupAgentOrigin` 是 `IAgentOriginBase` 体系里"**群来源（group origin）**"的实现。它回答的是：这场 Mission 里这个 Agent，最初是从哪一场会战的哪一支队伍的哪一个兵员 slot 抽出来的。

`IAgentOriginBase` 的三个实现构成了"来源粒度"的连续谱：

| 实现 | 粒度 | 代表谁 | 伤亡如何处理名册 |
|------|------|--------|------------------|
| `SimpleAgentOrigin` | 单个角色 | 一个 `BasicCharacterObject`（多为英雄或单个单位），**不绑定具体队伍花名册** | `SetKilled` 仅对 Hero 走 `KillCharacterAction`，不改任何队伍 roster |
| `PartyAgentOrigin` | 单个角色 + 一支队伍 | 一个 `CharacterObject` 与某个 `PartyBase` | `SetWounded`/`SetKilled` 直接在 `Party.MemberRoster` 上 +/- 计数（英雄则 `MakeWounded`/`KillCharacterAction`） |
| `PartyGroupAgentOrigin` | **群里的某一个兵员** | 一个 `UniqueTroopDescriptor` + 持有它的 `PartyGroupTroopSupplier` | 通过 `supplier.OnTroopWounded/Killed/Routed` 把结果交给 `MapEventSide`，由会战逻辑决定花名册变化 |

要点：`PartyGroupAgentOrigin` **不直接**改任何 `MemberRoster`。它把"谁的兵、第几个"交给 supplier，supplier 再去扣对应的 `MapEventParty` 花名册。这让一场大型会战可以按"实际参战并阵亡的兵员"精确损耗，而不是整组整组地扣。

### 谁创建、谁持有、在什么层

1. **创建方唯一**：构造函数是 `internal PartyGroupAgentOrigin(PartyGroupTroopSupplier supplier, UniqueTroopDescriptor descriptor, int rank)`。普通 mod **不能** `new` 它——只有 `PartyGroupTroopSupplier` 在 `SupplyTroops` / `SupplyOneTroop` / `GetAllTroops` 内部创建并返回这批 origin。
2. **持有与使用**：Mission 的编队/兵员分配阶段从 supplier 拿到 `IEnumerable<IAgentOriginBase>`（里面就是一组 `PartyGroupAgentOrigin`），塞进 `AgentBuildData.Origin`，由 `Mission` 生成 `Agent`。之后 `Agent.Origin` 就是它，引擎在 Agent 死亡/移除/命中时回调它的 `SetKilled` / `SetWounded` / `OnAgentRemoved` / `OnScoreHit`。
3. **生命周期**：创建于 Mission 的兵员分配期，随 Mission 清理而失效。**它不是 Campaign 持久对象**，不能当作存档引用缓存到 Mission 之外。
4. **所在层**：来源语义来自 **Campaign**（`MapEvent` / `MapEventSide` / `PartyBase`），使用发生在 **Mission / Agent**（战场运行时）。它处在 Campaign 与 Mission 的交界，是连接两者的"身份桥"。

## 如何获取 PartyGroupAgentOrigin

实战中你几乎不会主动创建它，而是通过 `Agent.Origin` 在战场逻辑里识别它：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.CampaignSystem.AgentOrigins;

// 在 MissionLogic / MissionBehavior 的某个回调里
Agent someAgent = Mission.Current.Agents.FirstOrDefault();
if (someAgent != null && someAgent.Origin is PartyGroupAgentOrigin origin)
{
    // origin 现在可用，但只在当前 Mission 内有效
}
```

真正的"来源"是 `IMissionTroopSupplier`：MapEvent 战斗由 `PartyGroupTroopSupplier` 实现该接口；自定义战斗场景若想用同样的群来源机制，应实现 `IMissionTroopSupplier` 并把返回的 origin 交给 `AgentBuildData`，而不是直接构造 `PartyGroupAgentOrigin`。

## 何时用 / 何时不要用

**用它：**
- 在 `MissionLogic` / `MissionBehavior` 的 `OnAgentCreated` / `OnAgentRemoved` 等回调里，想识别"这个 Agent 属于 MapEvent 的哪一支参战队伍、是第几个兵员"，或想读取它的阵营色、是否听玩家指挥、是否在玩家军团中。
- 想挂载"某兵员阵亡/受伤/命中"的自定义后果：通过 `agent.Origin as PartyGroupAgentOrigin` 拿到后，读取 `Party` / `Troop` / `TroopDesc` / `Rank` 做统计或触发逻辑（**只读**，不要自己改名册）。

**别用它：**
- 不要 `new PartyGroupAgentOrigin(...)`：构造函数是 `internal`，且脱离 `PartyGroupTroopSupplier` 后无法正确回写花名册，等于造了一个"死来源"。
- 不要把它当 Campaign 持久引用缓存：Mission 结束、`Mission.Current == null` 或大地图读档后，继续持有并访问它会得到失效状态。
- 不要直接调用 `SetWounded` / `SetKilled` / `SetRouted` 去"手动扣兵力"：这些是引擎在 Agent 收尾时调用的回写入口，重复调用会被 `_isRemoved` 屏蔽，且对 Hero 会触发 `KillCharacterAction`（跨 Mission 的永久死亡）；要改花名册请用 `Party.MemberRoster.AddToCounts` 或对应的 `CampaignSystem.Actions`。
- 不要调用 `SetBanner(...)`：它直接 `throw new NotImplementedException()`（见风险段）。

## 依赖图

- 上游（创建链）：[MapEvent](../../campaign/MapEvent/) → `MapEventSide`（即 `PartyGroup`）→ [PartyGroupTroopSupplier](../PartyGroupTroopSupplier)（`IMissionTroopSupplier`）→ 内部 `new PartyGroupAgentOrigin(...)`；[Mission](../../mission/Mission/) 与 `AgentBuildData` 通过 origin 生成 [Agent](../../mission/Agent/)。
- 同族来源（`IAgentOriginBase` 实现）：[SimpleAgentOrigin](../SimpleAgentOrigin)（单角色、不扣名册）、[PartyAgentOrigin](../PartyAgentOrigin)（单角色+单队伍、直接扣 `Party.MemberRoster`）。
- 接口契约：[IAgentOriginBase](../../core-extra/IAgentOriginBase/)（`TaleWorlds.Core`，定义 `Troop` / `Party` 语义与伤亡回写方法）。
- 下游/被引用对象：[PartyBase](../PartyBase)（兵员所属队伍，经 `supplier.GetParty`）、[CharacterObject](../CharacterObject)（`Troop`，兵员角色定义）、[Hero](../Hero)（`Troop.HeroObject`，`SetKilled` 对英雄走 `KillCharacterAction`）、[MobileParty](../MobileParty) 与 [Army](../Army)（`IsInSameArmyAsPlayer` 判定）、[Banner](../../core-extra/Banner/)（“旗”优先取 `Party.LeaderHero.ClanBanner`）、[BasicCharacterObject](../../core-extra/BasicCharacterObject/)（`IAgentOriginBase.Troop` 的静态类型）。

## 风险

1. **`SetBanner` 会直接抛异常**：`public void SetBanner(Banner banner)` 的实现是 `throw new NotImplementedException();`。群来源的旗是只读计算的（见成员说明），不要调用它；需要自定义旗请改用 `SimpleAgentOrigin` / `PartyAgentOrigin` 的 `SetBanner`。
2. **伤亡回写的幂等屏蔽**：`SetWounded` / `SetKilled` / `SetRouted` 内部都有 `_isRemoved` 标志，第一次调用后就把 `_isRemoved = true`，之后再调用这些方法会被整体跳过。因此不能靠"多次调用"来累加名册变化；名册的最终损耗以 supplier 转交给 `MapEventSide` 的为准。
3. **`SetKilled` 对 Hero 的持久副作用**：当 `Troop.IsHero == true` 时，`SetKilled` 会调用 `KillCharacterAction.ApplyByBattle(Troop.HeroObject, null)`——这是跨 Mission 的**永久死亡**，会影响存档、家族、任务。绝不要在模拟、预览或可能重复触发的逻辑里随意调用它。
4. **`OnAgentRemoved` 只救 Hero 的血量**：它仅在 `Troop.IsHero` 时把 `HeroObject.HitPoints` 设为 `MathF.Max(1, MathF.Round(agentHealth))`（至少留 1 点）。普通兵员在 `OnAgentRemoved` 阶段不做任何名册/血量处理——名册损耗发生在更早的 `SetWounded`/`SetKilled`/`SetRouted` 回写里。
5. **Mission 生命周期约束**：`Party` / `Troop` 指向的是 Campaign 长期对象，在 Mission 结束后仍可读；但 `PartyGroupAgentOrigin` 实例本身与"本次 Mission 的 Agent"绑定，跨场景保存它是无效的。需要跨场景的是 `PartyBase` 或角色的 `StringId`，不是这个 origin。
6. **`Banner` 可能返回 faction 旗**：`Banner` 的 getter 在 `Party.LeaderHero == null` 时回退到 `Party.MapFaction.Banner`，否则取 `Party.LeaderHero.ClanBanner`。它是只读的，且取决于队伍当前是否还有领主英雄——队伍领袖变化后再次读取可能得到不同的旗。

## 成员说明

下面按 mod 在 `MissionLogic` 中实际会用到的时机分组。所有"回写"方法都由引擎在 Agent 收尾阶段调用，mod 通常只**读取**，不要主动调用。

### 身份与归属（读取用）

#### `public PartyBase Party { get; }`
该兵员在 Campaign 中真实所属的队伍，内部走 `_supplier.GetParty(_descriptor)`（先查已分配花名册，再查待分配花名册）。**用途**：判断阵营、读队伍名册、判断兵员归属。**调用时机**：在 `OnAgentCreated` / `OnAgentRemoved` 等回调里随时可读；是连接 Campaign 层的主要入口。**副作用**：无（只读）。

#### `public IBattleCombatant BattleCombatant => Party;`
战斗对手对象，直接等同于 `Party`。供战斗/编队系统识别"这一方是谁"。

#### `public CharacterObject Troop { get; }`
该兵员的角色定义（`CharacterObject`），内部走 `_supplier.GetTroop(_descriptor)`。**用途**：读兵种名、兵种、文化、装备等。**调用时机**：随时可读。**副作用**：无（只读）。

#### `public UniqueTroopDescriptor TroopDesc { get; }`
该兵员在花名册中的唯一描述符。**用途**：这是回写时精确定位"哪一个兵员"的钥匙；如果想在自定义逻辑里区分同一个队伍里的不同兵员，用它与 `Rank` 配合。**调用时机**：随时可读。

#### `public int Rank { get; }`
该兵员在 supplier 分配序列中的序号（第几个被抽出）。**用途**：用于排序、稳定外观种子或调试"这是 group 里的第几个兵"。**调用时机**：随时可读。

#### `public uint UniqueSeed => _descriptor.UniqueSeed;`
由描述符派生的稳定随机种子，用于面部/外观的确定性随机。

#### `public int Seed => CharacterHelper.GetPartyMemberFaceSeed(Party, Troop, Rank);`
综合 `Party` + `Troop` + `Rank` 计算出的外观种子，引擎用它生成本 Agent 的脸。**调用时机**：Agent 构建期由引擎读取；mod 一般只读。

### 阵营与外观（读取用）

#### `public Banner Banner { get; }`
该兵员展示的旗帜。**用途**：Agent 出生后挂旗。**行为**：`Party.LeaderHero == null` 时取 `Party.MapFaction.Banner`，否则取 `Party.LeaderHero.ClanBanner`（见风险 6）。**注意**：这是只读属性，且 `SetBanner` 会抛异常——不要试图改它。

#### `public bool IsUnderPlayersCommand { get; }`
该兵员是否听玩家指挥：兵员是 `Hero.MainHero.CharacterObject` 时恒真，否则取 `PartyBase.IsPartyUnderPlayerCommand(Party)`。**用途**：UI/编队判断是否把该 Agent 归入玩家 controllable 集合。

#### `public bool IsInSameArmyAsPlayer { get; }`
该兵员所属 `MobileParty` 是否与玩家处于同一支 `Army`（且是同一边、同主将）。**用途**：同阵营友军判定、语音/标记逻辑。

#### `public uint FactionColor => Party.MapFaction.Color;`
#### `public uint FactionColor2 => Party.MapFaction.Color2;`
阵营主色 / 辅色，来自兵员所属队伍的 `MapFaction`。

### 战场结果回写（引擎调用，mod 勿主动调）

#### `public void SetWounded()`
兵员受伤的回写入口。**副作用**：经 `_supplier.OnTroopWounded(_descriptor)` 把结果交给 `MapEventSide`，并置 `_isRemoved = true`（后续调用被屏蔽）。**调用时机**：引擎在 Agent 进入受伤状态时调用，mod 不应主动调。

#### `public void SetKilled()`
兵员阵亡的回写入口。**副作用**：经 `_supplier.OnTroopKilled(_descriptor)` 回写；若 `Troop.IsHero`，额外调用 `KillCharacterAction.ApplyByBattle(Troop.HeroObject, null)` 真正杀死该英雄（持久后果）；随后置 `_isRemoved`。**调用时机**：引擎在 Agent 确认阵亡时调用。对英雄有跨 Mission 副作用，切勿重复触发。

#### `public void SetRouted(bool isOrderRetreat)`
兵员溃逃的回写入口。**副作用**：经 `_supplier.OnTroopRouted(_descriptor, isOrderRetreat)` 回写并置 `_isRemoved`。`isOrderRetreat` 表示是否为"下令撤退"而非被击溃。

#### `public void OnAgentRemoved(float agentHealth)`
Agent 被移除时的收尾。**副作用**：仅当 `Troop.IsHero` 时，把 `HeroObject.HitPoints` 设为 `MathF.Max(1, MathF.Round(agentHealth))`，保证英雄至少留 1 点血（避免被移除逻辑误杀）。普通兵员无操作。**调用时机**：引擎在 `Agent.OnRemove` 阶段调用。

#### `void IAgentOriginBase.OnScoreHit(BasicCharacterObject victim, BasicCharacterObject captain, int damage, bool isFatal, bool isTeamKill, WeaponComponentData attackerWeapon)`
命中得分回写（显式接口实现，外部需经 `IAgentOriginBase` 调用）。**副作用**：经 `_supplier.OnTroopScoreHit(...)` 把命中/伤害/是否致命/是否友伤交给 `MapEventSide`，用于战斗经验与统计。**调用时机**：引擎在某次有效命中后调用。

#### `TroopTraitsMask IAgentOriginBase.GetTraitsMask()`
返回该兵员的装备特征掩码（投掷武器 / 重甲 / 盾 / 枪），由 `AgentOriginUtilities.GetDefaultTraitsMask(this)` 计算，构造时已从 `Troop` 预计算到 `_hasThrownWeapon` / `_hasHeavyArmor` / `_hasShield` / `_hasSpear`（这些对应 `IAgentOriginBase.HasThrownWeapon` 等只读属性）。mod 一般只读，用于 AI/装备决策。

#### `public void SetBanner(Banner banner)`
**会直接抛出 `NotImplementedException`。** 群来源的旗由 `Banner` 属性只读计算，没有可设置的旗。需要自定义旗请改用 `SimpleAgentOrigin` / `PartyAgentOrigin`。

## 真实获取与调用示例

### 示例 1：在 MissionLogic 中识别兵员来源并读取归属

`Agent.Origin` 在 MapEvent 战斗中通常是 `PartyGroupAgentOrigin`。下面展示如何在回调中把它取出来只读使用——注意 origin 只在当前 Mission 内有效，不要缓存到 Mission 之外：

```csharp
using TaleWorlds.MountAndBlade;
using TaleWorlds.CampaignSystem.AgentOrigins;

public sealed class PartyGroupWatcher : MissionLogic
{
    public override void OnAgentCreated(Agent agent)
    {
        base.OnAgentCreated(agent);
        if (agent.Origin is PartyGroupAgentOrigin origin)
        {
            PartyBase party = origin.Party;        // 该兵员所属队伍
            CharacterObject troop = origin.Troop;  // 兵员的角色定义
            int rank = origin.Rank;                // 在 supply 序列中的序号
            bool underPlayer = origin.IsUnderPlayersCommand;
            bool sameArmy = origin.IsInSameArmyAsPlayer;
            // 此处可基于 party / troop / rank 做统计或触发逻辑（只读）
            // 不要在这里调用 origin.SetKilled() 等回写方法
        }
    }
}
```

### 示例 2：真实来源——supplier 如何构造它（内部代码，mod 不要直接调用）

`PartyGroupAgentOrigin` 的构造函数是 `internal`，只有 `PartyGroupTroopSupplier` 在分配兵员时使用。下面是从 `PartyGroupTroopSupplier.SupplyOneTroop` 摘出的真实片段，说明 origin 是怎么被创建并交出去的：

```csharp
// 来自 PartyGroupTroopSupplier.SupplyOneTroop 的真实实现
if (PartyGroup.AllocateTroop(_customAllocationConditions, out var troopDescriptor))
{
    PartyGroupAgentOrigin result = new PartyGroupAgentOrigin(this, troopDescriptor, _nextTroopRank++);
    _anyTroopRemainsToBeSupplied = _anyTroopRemainsToBeSupplied && PartyGroup.HasReadyTroops;
    return result;
}
```

要点：第一个参数是 `this`（supplier），第二个是抽到的 `UniqueTroopDescriptor`，第三个是递增的 rank。mod 应使用 `IMissionTroopSupplier` / `AgentBuildData` 这条公开路径间接取得 origin，而不是 `new`。

## 版本注记

本文以 v1.4.5 的 `TaleWorlds.CampaignSystem.AgentOrigins.PartyGroupAgentOrigin` 源码为准。其公开成员（`Party`、`Troop`、`TroopDesc`、`Rank`、`Banner`、`IsUnderPlayersCommand`、`IsInSameArmyAsPlayer`、`FactionColor(2)`、`UniqueSeed`、`Seed`、三个 `Set*` 回写、`OnAgentRemoved`）与 `internal` 构造签名在该版本稳定；`SetBanner` 抛 `NotImplementedException` 的行为也一致。

## 导航

- ↑ [Agent](../../mission/Agent/) — 战场实体，其 `Origin` 即本来源
- ↔ 同目录：[PartyAgentOrigin](../PartyAgentOrigin) · [SimpleAgentOrigin](../SimpleAgentOrigin) · [PartyGroupTroopSupplier](../PartyGroupTroopSupplier) · [PartyBase](../PartyBase) · [MobileParty](../MobileParty) · [CharacterObject](../CharacterObject) · [Hero](../Hero) · [Army](../Army)
- 接口与关联：[IAgentOriginBase](../../core-extra/IAgentOriginBase/) · [BasicCharacterObject](../../core-extra/BasicCharacterObject/) · [Banner](../../core-extra/Banner/)
- 上游：[MapEvent](../../campaign/MapEvent/) · [Mission](../../mission/Mission/)
