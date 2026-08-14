---
title: "PartyTroopUpgradeModel"
description: "决定部队兵种升级资格、物品与 Perk 门槛、金币和经验成本以及多分支升级选择权重的可替换战役模型。"
---

# PartyTroopUpgradeModel

**命名空间:** `TaleWorlds.CampaignSystem.ComponentInterfaces`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public abstract class PartyTroopUpgradeModel : MBGameModel<PartyTroopUpgradeModel>`  
**基类:** `MBGameModel<PartyTroopUpgradeModel>`  
**源文件:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/PartyTroopUpgradeModel.cs`  
**默认实现:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultPartyTroopUpgradeModel.cs`

## 职责

它把 `CharacterObject` 的升级树、部队资源和领袖能力转换为“能不能升、要花什么、多个目标怎么选”的策略结果；它不直接修改 `TroopRoster`、金币、物品或英雄技能。

## 心智模型

这是战役层的升级规则提供者，位于“兵种数据/部队状态”和“升级执行者”之间。战役启动时，`GameModels` 暴露已注册的模型；运行中，`PartyCharacterVM`、百科兵种树和 `PartyUpgraderCampaignBehavior` 都通过 `Campaign.Current.Models.PartyTroopUpgradeModel` 查询同一套规则。模型没有自己的存档生命周期，也不应该在查询期间偷偷保存或改变世界状态。

一条升级请求先从 `CharacterObject.UpgradeTargets` 取得目标，再检查目标是否仍属于升级树、目标需要的物品类别是否存在、是否满足必要 Perk，最后计算 XP、金币和分支选择权重。玩家部队的编队界面使用这些结果预览和执行升级；非玩家活动部队则由 `PartyUpgraderCampaignBehavior` 在每日 tick 或地图战斗结束后读取结果，随后才扣 XP、改写名册、授予领袖技能经验并通过 `GiveGoldAction` 扣钱。

因此，替换这个模型是在替换“规则”，不是在添加一个升级按钮。若目标是立即改变世界，应该让现有的 Party UI、Behavior 或专门的 Action 执行；不要在模型方法里调用 `TroopRoster.AddToCounts`、扣金币或触发升级，否则同一个结果会在 UI 预览、每日 tick 和战斗结算中重复产生副作用。

## 何时使用，何时不要用

- 想改变兵种是否可升级、升级所需物品或 Perk、XP/金币成本，或多个 `UpgradeTargets` 的选择倾向时，在战役启动阶段注册自定义 `PartyTroopUpgradeModel`。
- 想读取当前规则来做菜单、提示或自己的升级预览时，从 `Campaign.Current.Models.PartyTroopUpgradeModel` 查询；不要自行复制默认公式。
- 不要把 `GetGoldCostForUpgrade` 的返回值当成已经扣除的金币，也不要把 `GetXpCostForUpgrade` 当成已经从名册扣掉的 XP；两者都是纯查询结果。
- 不要绕过 `CharacterObject.UpgradeTargets` 直接拼接任意 `CharacterObject`。默认实现把目标不在升级树视为无效，`CharacterObject` 的便捷包装方法也假定索引有效。
- 不要把 `CanPartyUpgradeTroopToTarget` 当成所有上下文的唯一总闸门。原版 `PartyUpgraderCampaignBehavior` 还会在外层处理队伍文化和 Bandit occupation 条件，玩家 UI 也会叠加金币、名册数量和界面禁用状态。

## 依赖关系

### 上游

- [Campaign](../../campaign/Campaign/) 和 [GameModels](../GameModels/) 提供已注册的模型实例；模型尚未装配时不要从 `Campaign.Current.Models` 读取它。
- [CharacterObject](../../campaign/CharacterObject/) 提供 `UpgradeTargets`、Tier、Level、文化、职业、是否 Hero、远程/骑乘标记和 `UpgradeRequiresItemFromCategory`。
- [PartyBase](../../campaign/PartyBase/) 提供 `ItemRoster`、`MobileParty`、领袖和队伍身份；[TroopRoster](../TroopRoster/) 保存待升级兵员及其 XP。
- [ItemRoster](../ItemRoster/) 和 [ItemCategory](../../core-extra/ItemCategory/) 用于检查目标要求的物品类别；[PerkObject](../PerkObject/) 表示升级门槛和成本修正所需的 Perk。
- [PartyWageModel](../PartyWageModel/) 提供 `GetTroopRecruitmentCost`，默认金币公式以此计算升级前后的招募价差。

### 下游

- [PartyUpgraderCampaignBehavior](../PartyUpgraderCampaignBehavior/) 订阅 [CampaignEvents](../CampaignEvents/) 的 `DailyTickPartyEvent` 与地图事件结束回调，读取资格、成本和选择权重后改写 `TroopRoster`。
- 玩家 Party UI 的 `PartyCharacterVM` 读取成本、物品和 Perk 结果；百科兵种树读取 Perk 结果来显示 Bandit 到非 Bandit 的替代升级提示。
- `PartyUpgraderCampaignBehavior` 在实际升级时调用 `SkillLevelingManager.OnUpgradeTroops` 并使用 [GiveGoldAction](../GiveGoldAction/)；这些是执行副作用的下游，不是模型职责。
- 若需要把自定义升级规则的长期状态保存下来，应由 [CampaignBehaviorBase](../CampaignBehaviorBase/) 管理存档字段；模型本身没有 `SyncData`。

## 成员与调用时机

### `CanPartyUpgradeTroopToTarget`

在 UI 或 Behavior 需要最终判断“当前部队能否把这个兵种升到这个目标”时调用。默认实现组合 `IsTroopUpgradeable`、`upgradeableCharacter.UpgradeTargets.Contains(upgradeTarget)`、物品检查和 Perk 检查；因此它同时拒绝 Hero、非升级树目标、缺少目标物品或缺少必要 Perk。它只返回布尔值，不扣资源，也不保证调用方的队伍文化、职业或界面状态已经通过。

### `IsTroopUpgradeable`

在遍历 `TroopRoster`、决定是否继续检查升级目标时调用。默认实现只允许 `!character.IsHero` 且 `character.UpgradeTargets.Length != 0` 的兵种；`party` 在默认公式里不改变这一结论。Hero 即使有其它角色关系，也不会被默认 Party troop upgrade 路径当成可升级兵种。

### `DoesPartyHaveRequiredItemsForUpgrade`

在目标资格检查和升级提示生成前调用。默认实现读取 `upgradeTarget.UpgradeRequiresItemFromCategory`：没有类别要求时返回 `true`；有要求时遍历 `party.ItemRoster`，把 `EquipmentElement.Item.ItemCategory` 相同的数量相加，只要总数大于零就返回 `true`。这个 API 只回答“是否存在该类别物品”，不负责预扣物品；实际玩家升级时的物品消耗由 Party UI 执行。

### `DoesPartyHaveRequiredPerksForUpgrade`

在显示门槛、计算可升级数量或执行 Bandit 分支前调用。默认实现先把 `requiredPerk` 设为 `null`；只有源兵种是 Bandit 且目标不是 Bandit 时，才把它设为 `DefaultPerks.Leadership.VeteransRespect`，并通过 `party.MobileParty.HasPerk(requiredPerk, checkSecondaryRole: true)` 检查。其它升级路径不需要 Perk。调用方应读取 `out` 值来显示缺少的 Perk，而不能只使用布尔结果。

### `GetGoldCostForUpgrade`

在 Party UI 预览或 Behavior 计算一次升级数量时调用。默认实现用 [PartyWageModel](../PartyWageModel/) 的 `GetTroopRecruitmentCost`（`withoutItemCost: true`）求目标和原兵种招募价差，普通兵种除以 2，Mercenary 或 Gangster 除以 3，然后叠加 Steward 的 `SoundReserves`、远程兵的 Bow `RenownedArcher`、骑兵的 Khuzait `KhuzaitRecruitUpgradeFeat`，以及 Mercenary/Gangster 的 Steward `Contractors` 修正。返回 `ExplainedNumber` 便于 UI 展示原因；它不改变 `PartyTradeGold`。

### `GetXpCostForUpgrade`

在升级按钮、名册可升级数量和后台升级筛选前调用。只有 `upgradeTarget` 非空且位于 `characterObject.UpgradeTargets` 时，默认实现才按从源 Tier+1 到目标 Tier 的每一级累加 XP：Tier 1 及以下为 100，Tier 2 为 300，Tier 3 为 550，Tier 4 为 900，Tier 5 为 1300，Tier 6 为 1700，Tier 7 为 2100；更高等级使用 `1.333f * (upgradeTarget.Level + 4)^2` 的整数结果。非法目标返回 `100000000`，这是拒绝升级的高哨兵值，不是合理的游戏成本。

### `GetSkillXpFromUpgradingTroops`

为“升级若干兵员应贡献多少领袖技能 XP”提供契约入口。默认实现返回 `(troop.Level + 10) * numberOfTroops`。但在当前 1.4.5 源码的 `DefaultSkillLevelingManager.OnUpgradeTroops` 调用链中，原版实际直接使用 `GetXpCostForUpgrade` 乘以职业系数来授予 Leadership 或 Roguery XP，并没有调用这个成员；自定义实现不能假定覆写它就一定会改变原版升级后的技能经验。

### `GetUpgradeChanceForTroopUpgrade`

在同一源兵种有多个升级目标、Behavior 需要构造加权选择列表时调用。默认先给每个分支权重 `1f`；若领袖设置了 `PreferredUpgradeFormation` 且目标树包含该编队，则该分支权重为 `9999f`。只有在没有领袖编队偏好时，才使用领袖 `RandomValue`（没有领袖时使用 `PartyBase.Id`）与兵种确定性字符串哈希、兵种 Tier 生成稳定分支；命中目标索引时权重为 `9999f`。有偏好但目标树没有匹配编队时不会回退到哈希，仍保持 `1f`。权重会被 `PartyUpgraderCampaignBehavior` 与 `MBRandom.RandomFloat` 一起消费，因此 9999 是强烈偏好，不应在模型调用者中解释成“绝对百分之百”。传入索引必须处于 `UpgradeTargets` 范围内。

## 默认实现的调用链

非玩家队伍由 `PartyUpgraderCampaignBehavior.RegisterEvents` 注册到每日队伍 tick和地图事件结束回调。它先跳过玩家主队或非活动队伍，再读取兵种 XP、伤兵数、工资上限、金币、物品、Perk 和模型权重；确定目标后，才从 `TroopRoster` 扣 XP、减少旧兵种、增加新兵种，并通过技能管理器和 [GiveGoldAction](../GiveGoldAction/) 应用副作用。玩家主队的升级则走 Party screen 的名册交易逻辑，不应把后台 Behavior 的条件套到玩家 UI 上。

模型的这些查询可能被同一界面刷新多次，也可能在实际升级前后分别查询。自定义实现应返回确定、可解释且有界的结果，不要依赖帧时间、随机副作用或模型对象内的可变计数器。

## 真实查询示例

下面的代码从实际战役模型和主队名册取得第一个兵种的第一个升级目标，只读取规则，不执行升级：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CharacterDevelopment;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Roster;

public static void InspectFirstPartyUpgrade()
{
    PartyBase party = PartyBase.MainParty;
    PartyTroopUpgradeModel model = Campaign.Current.Models.PartyTroopUpgradeModel;
    if (party.MemberRoster.Count == 0)
    {
        return;
    }

    TroopRosterElement element = party.MemberRoster.GetElementCopyAtIndex(0);
    CharacterObject troop = element.Character;
    if (troop == null || troop.UpgradeTargets.Length == 0)
    {
        return;
    }

    CharacterObject target = troop.UpgradeTargets[0];
    bool eligible = model.IsTroopUpgradeable(party, troop);
    bool canUpgrade = model.CanPartyUpgradeTroopToTarget(party, troop, target);
    bool hasItems = model.DoesPartyHaveRequiredItemsForUpgrade(party, target);
    bool hasPerks = model.DoesPartyHaveRequiredPerksForUpgrade(party, troop, target, out PerkObject requiredPerk);
    int xpCost = model.GetXpCostForUpgrade(party, troop, target);
    var goldCost = model.GetGoldCostForUpgrade(party, troop, target);
    float branchWeight = model.GetUpgradeChanceForTroopUpgrade(party, troop, 0);
}
```

`eligible`、`canUpgrade`、`hasItems`、`hasPerks` 和成本都只是当前状态的快照。真正改变名册、扣除资源或授予技能经验，应继续交给 Party screen 或 `PartyUpgraderCampaignBehavior` 的执行路径。

## 风险与排错

1. 在战役模型注册前读取 `Campaign.Current.Models.PartyTroopUpgradeModel`，会得到未装配模型或在启动阶段触发空引用。替换模型应在 `CampaignGameStarter`/`IGameStarter.AddModel` 的战役启动阶段完成。
2. 直接把不在 `UpgradeTargets` 中的角色传给成本方法，会得到 XP 高哨兵，或在 `CharacterObject.GetUpgradeGoldCost` 这类按索引包装方法中越界。先用同一个 `UpgradeTargets` 数组取得目标并验证索引。
3. 只检查模型的 `CanPartyUpgradeTroopToTarget`，却忽略外层的 Bandit 队伍文化、Bandit occupation、工资上限、可用金币、伤兵数量或 UI 禁用状态，会让自定义 UI 与原版执行路径给出不同答案。
4. 把物品检查结果当成“可以消耗任意数量”是不安全的。默认模型只要求类别总数大于零，而玩家执行路径会按升级数量实际移除物品；修改这两边中的一边会造成预览与名册/物品状态不一致。
5. 在模型中写 `TroopRoster`、金币或技能经验，会被每日 tick、战斗结束和 UI 刷新重复触发，造成重复升级、负资源或读档后的名册与金币不一致。模型不持久化状态，长期状态应放在有明确 `SyncData` 契约的 Behavior 中。
6. 升级权重不是保存的选择结果。把 `9999f` 当成绝对概率，或在自定义模型中加入不稳定随机数，会使相同队伍在预览与后台选择时走不同分支。

## 导航

- [Parent: campaign-ext](../)
- [Models family guide](../models/)
- [Siblings: PartyTrainingModel](../PartyTrainingModel/) · [PartyTransitionModel](../PartyTransitionModel/) · [PartyWageModel](../PartyWageModel/)
- [Related: CharacterObject](../../campaign/CharacterObject/) · [PartyBase](../../campaign/PartyBase/) · [Campaign](../../campaign/Campaign/) · [CampaignEvents](../CampaignEvents/)
