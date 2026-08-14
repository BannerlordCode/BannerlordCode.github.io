---
title: "DefaultPartySizeLimitModel"
description: "移动队伍、俘虏、驻军和初始编制容量的默认战役计算实现。"
---
# DefaultPartySizeLimitModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartySizeLimitModel : PartySizeLimitModel`  
**Base:** [`PartySizeLimitModel`](../PartySizeLimitModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartySizeLimitModel.cs`（v1.3.15；v1.4.5 同名实现位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

`DefaultPartySizeLimitModel` 计算队伍成员容量、俘虏容量、驻军容量和村民队伍最低人数，并在创建队伍时从 `PartyTemplateObject` 生成初始 troop roster 与 ships。它返回规则结果，不负责把单位加入现有队伍。

## 心智模型

```text
PartyBase / MobileParty / Settlement / Village / PartyTemplateObject
                         -> Campaign.Current.Models.PartySizeLimitModel
                         -> ExplainedNumber、int、TroopRoster、List<Ship>
                         -> PartyBase 缓存、转移界面、驻军/村民行为、队伍创建
```

容量不是一个数字：成员容量限制活着的部队和英雄，俘虏容量另算，驻军容量属于 Settlement，初始 roster/ships 只在队伍创建期按模板选择。把这些结果混用，会让 PartyScreen、招募、驻军和创建流程互相矛盾。

### 什么时候使用

- 查询当前队伍能再容纳多少成员或俘虏时，使用 `Campaign.Current.Models.PartySizeLimitModel`，并区分 `GetPartyMemberSizeLimit` 与 `GetPartyPrisonerSizeLimit`。
- 改变队伍容量、驻军容量或初始编制时，在 `CampaignGameStarter` 阶段注册 `DefaultPartySizeLimitModel` 子类，并保留 `ExplainedNumber` 的说明与缓存契约。
- 调整创建期编制时，让模型返回 roster/ships；让官方创建流程完成真正的 `AddToCounts`、船只绑定和持久化。

### 什么时候不要使用

不要把模型结果当作对已有 roster 的强制扩容，也不要在模型里直接招募、转移俘虏、修改 Clan Tier 或反复创建 `Ship`。容量通常被 [`PartyBase`](../../campaign/PartyBase) 缓存，世界状态的改变应走对应的 roster/Action/Behavior 流程。

## 上下游关系

### 上游输入

| 类型 | 作用 |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | 提供 party 类型、领袖、roster、健康成员数、海上状态、船只和缓存上下文。 |
| [`Settlement`](../../campaign/Settlement) / [`Village`](../../campaign/Village) | 提供城镇/城堡墙级、建筑、驻军、村庄 hearth 与产出。 |
| [`Clan`](../../campaign/Clan) / [`Hero`](../../campaign/Hero) | 提供 Clan Tier、Clan leader、领袖技能、Perk、政策和势力身份。 |
| [`PartyTemplateObject`](../PartyTemplateObject) | 提供 troop stack 与 ship-hull stack 的最小/最大范围。 |
| `BuildingEffectEnum` / `CharacterDevelopmentModel` | 提供驻军/监狱建筑效果和 Epic Perk 技能阈值。 |

### 下游消费者

| 类型/流程 | 读取什么 |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) | 缓存 `PartySizeLimit`、`PrisonerSizeLimit`，并在 explainer 属性中重新获取带说明的结果。 |
| `GarrisonRecruitmentCampaignBehavior` / `GarrisonTroopsCampaignBehavior` | 用驻军容量决定补充人数。 |
| `PatrolPartiesCampaignBehavior` / `VillagerCampaignBehavior` | 使用巡逻容量、村民最低/理想人数和模板 roster。 |
| [`MobileParty`](../../campaign/MobileParty) | 创建队伍时接收初始 roster 与 ships，并负责实际装配。 |
| `PartyScreenHelper` | 用成员/俘虏容量给转移 UI 做限制和说明。 |
| [`DefaultClanTierModel`](../DefaultClanTierModel) | 查询下一级 Clan Tier 的容量增量。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `MinimumNumberOfVillagersAtVillagerParty` | 返回 `12`。 | 是村民队伍的最低基数，不是所有队伍的成员容量。 |
| `GetPartyMemberSizeLimit` | 按普通移动队伍、驻军、巡逻队分支返回解释后的成员容量；非移动 `PartyBase` 返回 0。 | 驻军和巡逻队不能套普通队伍公式。 |
| `GetPartyPrisonerSizeLimit` | Settlement 使用据点公式，其他 party 使用移动队伍公式。 | 俘虏上限与成员上限独立。 |
| `CalculateGarrisonPartySizeLimit` | 基础 `200`，城镇加 `200`，再加入领袖、Perk 和建筑效果。 | 需要 Settlement 的 OwnerClan 和 Town 上下文。 |
| `GetClanTierPartySizeEffectForHero` / `GetNextClanTierPartySizeEffectChangeForHero` | 非 Clan leader 每 Tier `+15`，Clan leader 每 Tier `+25`，Tier 0 不加。 | 后者返回“下一 Tier 增量”，不是当前总容量。 |
| `GetIdealVillagerPartySize` | 根据村庄产出和 hearth 返回最低人数加理想人数。 | 这是补充/决策参考，不会创建队伍。 |
| `FindAppropriateInitialRosterForMobileParty` | 按模板 stack 范围和随机比例返回 dummy `TroopRoster`。 | 返回值还没有写入 `MobileParty.MemberRoster`。 |
| `FindAppropriateInitialShipsForMobileParty` | 按模板 ship-hull 范围和同一类随机比例返回 `List<Ship>`。 | 创建流程必须消费结果；不要每个 map tick 调用。 |

## 容量计算

### `GetPartyMemberSizeLimit`

入口先看 `party.IsMobile`。非移动 `PartyBase` 返回 0；移动 party 再按以下顺序分支：

1. `IsGarrison`：转到 `CalculateGarrisonPartySizeLimit(party.MobileParty.GarrisonPartyComponent.Settlement, ...)`。
2. `IsPatrolParty`：读取 Home Settlement 的 `SettlementGuardHouse` 等级，容量为 `10 + 5 * guardhouseLevel`；找不到 Guard House 时，默认实现返回 0。
3. 其他移动队伍：进入普通成员容量，基础值为 `20`。

普通移动队伍的额外因素包括：有 Clan 且不是 Caravan 时由领袖和 Clan/Kingdom 身份计算的领导力、Perk、政策和 Clan Tier，再加入 Steward Party Size 技能效果；村民额外加 `40`。玩家 Caravan 按精英/普通和是否具备海上导航能力使用 `30/10` 或 `46/33`；非玩家 Caravan 则按 notable owner 的 Power 档位加 `10/20/30`。海上 party 还会对每艘船应用 `CrewCapacityBonusFactor`，这是乘数因素而非直接加一格。

`GetPartyMemberSizeLimit` 的真实读取路径如下：

```csharp
using System;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Library;

MobileParty party = MobileParty.MainParty;
PartySizeLimitModel model = Campaign.Current.Models.PartySizeLimitModel;
ExplainedNumber limit = model.GetPartyMemberSizeLimit(
    party.Party, includeDescriptions: true);
int freeSlots = Math.Max(0,
    (int)limit.ResultNumber - party.Party.NumberOfAllMembers);
```

`party.Party.PartySizeLimit` 与 `PartySizeLimitExplainer` 都围绕这个模型入口工作。改变计算结果不会自动使已有 roster 腾出空间；真实的 roster 变更必须走游戏提供的 API，使缓存版本正确失效。

### `GetPartyPrisonerSizeLimit`

#### Settlement 俘虏

Settlement 的基础俘虏容量是 `60`。若 Town 墙级大于 0，每一级加 `40`；据点是 fortification 时再加入 `PrisonCapacity` 建筑效果。

#### Mobile party 俘虏

移动队伍以 `10` 为基础，加上当前健康成员数的一半（整数除法），再加领袖 Perk：`TwoHanded.Terror`、陆地上的 `Athletics.Stamina`、`Roguery.Manhunter` 与 `Scouting.VantagePoint`。不要用成员容量代替俘虏容量；两者的 UI、转移和缓存入口都不同。

### `CalculateGarrisonPartySizeLimit`

驻军从 `200` 开始，使用 Settlement owner clan leader 的 `LeadershipGarrisonSizeBonus`。城镇再加 `200`；城堡或城镇的 fortification 分支会加入 `CorpsACorps`、`VeteransRespect` 和 `GarrisonCapacity` 建筑效果。结果返回 `ExplainedNumber`，所以驻军补充行为可把建筑与领袖效果呈现给 UI，而不是只看到一个难以解释的整数。

### Clan Tier、领主估算和村民理想人数

`GetClanTierPartySizeEffectForHero` 的公式是：Tier 小于 1 为 0；普通 Clan 成员每 Tier `15`；该 Hero 是 Clan leader 时每 Tier `25`。`GetNextClanTierPartySizeEffectChangeForHero` 用下一 Tier 的总效果减当前效果，适合显示“升级后增加多少”。`GetAssumedPartySizeForLordParty` 则以 `20` 为基础，用领袖、派系和实际 Clan 计算基础成员效果，再按领袖的 Steward 技能加成；它是 Lord party 的估算值，不是现有 roster 的强制容量。

`GetIdealVillagerPartySize` 先把 `VillageType.Productions` 的每日产出相加。产出不超过 10 时 hearth 分母为 40；超过 10 时分母按产出降低，最终返回：

```text
12 + (int)(village.Hearth / productionBasedDenominator)
```

该值被村民行为用于补充目标，不会替代 `FindAppropriateInitialRosterForMobileParty`。

## 创建期的 roster 与 ships

`FindAppropriateInitialRosterForMobileParty` 创建一个 dummy `TroopRoster`。它先为队伍选择初始比例：Bandit 根据玩家进度或船模板走随机低/高区间，玩家自己的 Caravan 和 Patrol 使用 `1.0`，其他 party 使用 `party.RandomFloat()`。每个 `PartyTemplateStack` 在 `MinValue` 与 `MaxValue` 之间按比例随机取整；村民若绑定城镇 Governor 拥有 `Scouting.VillageNetwork`，还会放大该 stack 数量；只有数量大于 0 才加入返回 roster。

```csharp
public TroopRoster GetInitialRoster(
    MobileParty party, PartyTemplateObject template)
{
    return Campaign.Current.Models.PartySizeLimitModel
        .FindAppropriateInitialRosterForMobileParty(party, template);
}
```

该方法**不**把结果写入 party。`MobileParty` 的官方创建路径随后遍历返回 roster，调用自己的 `MemberRoster.AddToCounts`，并同时读取 ships。自定义代码不要在创建路径之外每 tick 重建 roster，否则会重复单位、扰乱随机性和存档状态。

`FindAppropriateInitialShipsForMobileParty` 对 `ShipTemplateStack` 做相同的比例选择，并为每一艘选中的 hull 创建 `new Ship(shipHull.ShipHull)`，返回 `List<Ship>`。没有 ship hull 时返回空列表；v1.4.5 的海上队伍创建尤其不能丢弃这个返回值。

## 替换默认模型

在 `SubModule.InitializeGameStarter` 中注册子类。若只加一个成员容量修正，直接继承默认实现并让 `base` 保留所有 Clan、Perk、海上和缓存相关行为：

```csharp
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public sealed class MyPartySizeLimitModel : DefaultPartySizeLimitModel
{
    public override ExplainedNumber GetPartyMemberSizeLimit(
        PartyBase party, bool includeDescriptions = false)
    {
        ExplainedNumber result = base.GetPartyMemberSizeLimit(
            party, includeDescriptions);
        result.Add(5f, new TextObject("{=my_party_bonus}My party bonus"));
        return result;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartySizeLimitModel());
}
```

如果只想包装已注册的 `PartySizeLimitModel`，使用 `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` 让框架注入 `BaseModel`；不要从替换后的 `Campaign.Current.Models.PartySizeLimitModel` 回读自己。模型注册必须发生在 starter 阶段，不能在战役进行中动态追加。

## 风险与崩溃边界

1. **成员/俘虏混用**：招募与转移前分别检查 `PartySizeLimit` 和 `PrisonerSizeLimit`；不要只调大一个。
2. **缓存不一致**：`PartyBase` 会缓存容量。改变 roster、Clan Tier 或船只后，应通过官方状态 API 触发失效，而不是只重算一次模型。
3. **创建时机错误**：初始 roster/ships 是创建期结果，不是调节现有队伍的循环工具；模板比例异常还可能命中源码断言。
4. **空上下文**：标题界面、模块加载阶段可能没有 `Campaign.Current`、Settlement owner 或有效模型；把读取放在战役启动后的 Behavior/流程中，并按版本判空。
5. **海上分支遗漏**：船只 crew factor、Caravan 海上容量和 initial ships 都是 v1.4.5 需要保留的路径，不能只实现陆地公式。
6. **直接写字段**：模型返回 `ExplainedNumber` 不会改变世界；队伍、俘虏、船只和 Clan 进度的状态变更必须回到对应的 roster、Action 或 Behavior。

## 版本说明

v1.3.15 与 v1.4.5 的默认实现保留相同的基础常量、Clan Tier 公式、驻军/俘虏分支、模板随机算法和海上 party 的船只容量/初始 ships 路径。写针对目标版本的替换模型时，仍应核对对应 `PartySizeLimitModel` 接口与 `MobileParty` 创建流程，不要只实现陆地分支。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartySizeLimitModel`](../PartySizeLimitModel)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`Settlement`](../../campaign/Settlement)
- [`Village`](../../campaign/Village)
- [`PartyTemplateObject`](../PartyTemplateObject)
- [`TroopRoster`](../TroopRoster)
- [`DefaultClanTierModel`](../DefaultClanTierModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
- [`GameModels`](../GameModels)
- [`SandBoxManager`](../SandBoxManager)
