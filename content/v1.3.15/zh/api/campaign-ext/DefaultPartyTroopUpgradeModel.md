---
title: "DefaultPartyTroopUpgradeModel"
description: "默认的战役兵种升级资格、经验/金币成本、物资与分支选择模型。"
---
# DefaultPartyTroopUpgradeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`  
**Module:** `TaleWorlds.CampaignSystem`  
**Type:** `public class DefaultPartyTroopUpgradeModel : PartyTroopUpgradeModel`  
**Base:** [`PartyTroopUpgradeModel`](../PartyTroopUpgradeModel)  
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyTroopUpgradeModel.cs`（v1.3.15；v1.4.5 对应文件位于 `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents`）

## 一句话职责

这个模型决定一个普通兵是否有升级目标、升级需要多少经验和金币、队伍是否具备物资/Perk 条件，以及多条升级路线如何被选择；它不直接扣钱、扣经验或替换 roster。

## 心智模型

```text
CharacterObject.UpgradeTargets + TroopRoster XP + ItemRoster
              + PartyWageModel / Perk / Culture / Formation
                              ↓
          Campaign.Current.Models.PartyTroopUpgradeModel
                              ↓
       条件、成本、技能经验、升级路线权重（纯计算）
                              ↓
 PartyUpgraderCampaignBehavior / PartyScreen / UpgradeTargetVM
                              ↓
   roster 替换、XP/金币扣除、SkillLevelingManager 通知
```

模型围绕“当前兵种 → `UpgradeTargets` 中的目标”工作。`IsTroopUpgradeable` 只回答兵种定义是否存在升级目标；真正能否升级还要组合目标包含关系、物资、Perk、伤兵数量、已有 XP、工资上限和队伍资金。自动升级行为和 PartyScreen 都会读取这些结果，所以一个自定义模型必须保持各入口之间的契约一致。

### 何时使用

- 要显示升级所需经验、金币或要求时，从 `Campaign.Current.Models.PartyTroopUpgradeModel` 读取模型结果。
- 要改变升级门槛、费用或分支偏好时，在 `CampaignGameStarter` 阶段注册默认模型的子类，并只覆盖自己的规则。
- 要研究“为什么某个兵没有升级”时，按 `IsTroopUpgradeable` → `UpgradeTargets` → `DoesPartyHaveRequiredItemsForUpgrade` → `DoesPartyHaveRequiredPerksForUpgrade` 的顺序检查，不要只看最终的 `CanPartyUpgradeTroopToTarget`。

### 何时不要使用

不要在模型中调用 `GiveGoldAction`、`TroopRoster.AddToCounts`、`SetElementXp` 或技能升级事件。`PartyUpgraderCampaignBehavior` 才负责检查可升级数量、扣 XP、扣金币、替换 roster 和通知 `SkillLevelingManager`。模型被 PartyScreen、AI 和行为共同调用，在模型中执行一次性变更会导致重复扣款、重复升级或 UI 与存档状态不一致。

## 依赖关系

### 上游输入

| 类型 / 系统 | 在本模型中提供什么 |
| --- | --- |
| [`PartyBase`](../../campaign/PartyBase) / [`MobileParty`](../../campaign/MobileParty) | 队伍、领袖、`ItemRoster`、贸易金币、工资上限、Perk、文化和升级上下文。 |
| [`CharacterObject`](../../campaign/CharacterObject) | 当前兵种/目标的 Tier、Level、职业、文化、远程/骑乘属性、`UpgradeTargets` 和所需物品类别。 |
| [`TroopRoster`](../TroopRoster) | 升级前兵的数量、伤兵数量和累积 XP；模型本身不写回 roster。 |
| [`ItemRoster`](../ItemRoster) / `ItemCategory` | 判断队伍是否至少拥有一个目标所需类别的物品。 |
| `PartyWageModel` | 以无买家、无马匹附加价的征募成本作为升级金币差额的基础。 |
| `PerkObject` / `DefaultPerks` / `DefaultCulturalFeats` | `SoundReserves`、`RenownedArcher`、`Contractors`、Khuzait 骑兵升级文化特性和 Bandit 跨文化门槛。 |
| `FormationClass` / `CharacterHelper` | 领袖偏好阵型和目标兵种树的匹配结果。 |

### 下游调用者

| 调用者 | 使用方式 |
| --- | --- |
| [`PartyUpgraderCampaignBehavior`](../PartyUpgraderCampaignBehavior) | 为 AI 队伍生成 `TroopUpgradeArgs`，再按 XP、金币、工资和路线权重实际升级。 |
| `PartyScreenLogic` / `UpgradeTargetVM` | 显示最高 XP 成本、目标要求和升级选项。 |
| `CharacterObject` 的升级辅助入口 | 为具体目标转发 XP/金币成本查询。 |
| `SkillLevelingManager` / `GiveGoldAction` / `TroopRoster` | 由升级行为调用，负责真正的技能经验、金币和 roster 变更。 |
| [`PartyWageModel`](../PartyWageModel) | 为升级金币模型提供前后兵种的基础征募估值；它不应被升级模型反向触发世界变更。 |

## 公共契约

| 成员 | 默认行为 | 关键边界 |
| --- | --- | --- |
| `IsTroopUpgradeable` | 非英雄且 `UpgradeTargets.Length != 0` 时为真。 | 不检查当前 roster 数量、XP、物品、Perk 或金币。 |
| `CanPartyUpgradeTroopToTarget` | 组合升级资格、目标包含关系、物品条件和 Perk 条件。 | 它仍是模型判定；不能当成已扣款或已替换 roster。 |
| `GetXpCostForUpgrade` | 按跨越的 Tier 累加经验成本；无效目标返回 `100000000`。 | 合法目标必须非空且存在于当前兵的 `UpgradeTargets`。 |
| `GetGoldCostForUpgrade` | 用 `PartyWageModel` 的无马匹附加价估值计算差额，再应用队伍 Perk/文化修正。 | 返回 `ExplainedNumber`；不调用金币 Action。 |
| `GetSkillXpFromUpgradingTroops` | 返回 `(troop.Level + 10) * numberOfTroops`。 | 是技能经验规则，不是立即加经验。 |
| `DoesPartyHaveRequiredItemsForUpgrade` | 目标无类别要求时为真；有要求时，只要 ItemRoster 中该类别总数大于 0 即为真。 | 只检查类别存在，不检查每个即将升级的兵需要几件。 |
| `DoesPartyHaveRequiredPerksForUpgrade` | Bandit 兵升级到非 Bandit 目标时要求 `Leadership.VeteransRespect`；其他情况无要求。 | 通过 `out requiredPerk` 返回 UI 可显示的缺失 Perk。 |
| `GetUpgradeChanceForTroopUpgrade` | 通常返回 `1`；按偏好阵型或确定性哈希让某个目标返回 `9999`。 | `9999` 是选择权重/确定性优先级，不是 999900% 的概率。 |

## 默认计算细节

### 资格组合与基本可升级性

`IsTroopUpgradeable` 只有两个条件：当前 `CharacterObject` 不是英雄，且存在至少一个 `UpgradeTarget`。因此它适合做第一道快速筛选，不代表队伍现在有足够健康兵、XP、钱或装备。

`CanPartyUpgradeTroopToTarget` 会通过当前注册的 `PartyTroopUpgradeModel` 组合四项：

1. `IsTroopUpgradeable(upgradingParty, upgradeableCharacter)` 为真；
2. `upgradeableCharacter.UpgradeTargets` 包含 `upgradeTarget`；
3. `DoesPartyHaveRequiredItemsForUpgrade` 为真；
4. `DoesPartyHaveRequiredPerksForUpgrade` 为真。

源码通过 `Campaign.Current.Models.PartyTroopUpgradeModel` 读取这些子判定，这是替换模型时尤其需要注意的递归边界：继承默认实现并调用 `base`，或通过 starter 注入的 `BaseModel` 委托；不要让自定义实现从已经替换的属性回读自己。

### XP 成本

目标合法时，方法从当前兵的 `Tier + 1` 循环到目标 Tier，逐级累加：

| 被跨越的 Tier | XP 增量 |
| ---: | ---: |
| `<= 1` | `100` |
| `2` | `300` |
| `3` | `550` |
| `4` | `900` |
| `5` | `1300` |
| `6` | `1700` |
| `7` | `2100` |
| `> 7` | `int(1.333 * (upgradeTarget.Level + 4)^2)` |

无效目标（`null` 或不在当前兵的 `UpgradeTargets` 中）返回 `100000000`，这是拒绝升级的哨兵值，不应当被当作正常可支付成本。PartyScreen 还会用所有合法目标的最大 XP 成本来生成升级信息；不要只为单个 UI 目标改变公式而破坏这一比较关系。

### 金币成本与 `PartyWageModel` 依赖

默认实现先读取：

```csharp
PartyWageModel wages = Campaign.Current.Models.PartyWageModel;
int targetCost = wages.GetTroopRecruitmentCost(
    upgradeTarget, buyerHero: null, withoutItemCost: true).RoundedResultNumber;
int sourceCost = wages.GetTroopRecruitmentCost(
    characterObject, buyerHero: null, withoutItemCost: true).RoundedResultNumber;
```

两者差额对普通兵除以 `2`，当前兵种是 Mercenary 或 Gangster 时除以 `3`，再应用：

- 队伍的 Steward `SoundReserves`；
- 当前兵种为远程且队伍有次要角色 `RenownedArcher` 时的修正；
- 当前兵种为骑乘兵且队伍拥有 Khuzait recruit-upgrade culture feat 时的修正；
- Mercenary/Gangster 且队伍有 Steward `Contractors` 时的修正。

`withoutItemCost: true` 只排除马匹/装备附加价，不会把兵种基础估值变成 0。模型返回的是 `ExplainedNumber`，实际扣款由升级行为完成。

### 物资与 Perk 条件

目标的 `UpgradeRequiresItemFromCategory` 为 `null` 时，物资条件直接通过；否则遍历 `party.ItemRoster`，只要某个 `EquipmentElement.Item.ItemCategory` 相同且总数量大于 0，就认为满足。这个条件不是“每个升级兵需要一件”，升级数量和可支付数量由调用行为另外限制。

Perk 条件只有一个默认特殊分支：当前兵种文化是 Bandit、目标文化不是 Bandit 时，把 `DefaultPerks.Leadership.VeteransRespect` 写入 `requiredPerk`，并要求队伍以次要角色检查拥有该 Perk。其他情况把 `requiredPerk` 设为 `null` 并返回真。UI 可以利用这个 out 参数显示缺失条件。

### 多目标升级选择

没有多个目标或目标索引越界时，`GetUpgradeChanceForTroopUpgrade` 返回 `1`。多个目标时：

- 如果领袖设置了具体的 `PreferredUpgradeFormation`，且目标兵种树能找到该阵型，目标得到 `9999`；
- 否则以领袖的 `RandomValue`（无领袖时使用 party id 哈希）和当前兵种字符串 ID 的确定性哈希混合，再按 Tier 移位。只有与 `hash % targetCount` 对应的目标得到 `9999`。

这使 AI 选择在相同队伍和兵种数据下可重复，而不是每次 tick 重新随机。自定义分支选择时应继续保证索引有效和结果可解释。

## 真实读取路径

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

PartyBase party = MobileParty.MainParty.Party;
CharacterObject source = party.MemberRoster.GetCharacterAtIndex(0);
CharacterObject target = source.UpgradeTargets[0];
PartyTroopUpgradeModel model = Campaign.Current.Models.PartyTroopUpgradeModel;

bool canUpgrade = model.CanPartyUpgradeTroopToTarget(party, source, target);
int xpCost = model.GetXpCostForUpgrade(party, source, target);
int goldCost = model.GetGoldCostForUpgrade(party, source, target).RoundedResultNumber;
```

示例使用真实的当前主队 roster 和兵种升级树；调用前仍应确保 roster 至少有一个元素且 `source.UpgradeTargets.Length > 0`。这些结果只适合显示/诊断，不能替代 `PartyUpgraderCampaignBehavior` 的正式升级流程。

## 替换默认模型

模型应在战役 starter 阶段注册。只改变 XP 成本时让其他入口继续使用默认逻辑：

```csharp
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Core;

public sealed class MyPartyTroopUpgradeModel : DefaultPartyTroopUpgradeModel
{
    public override int GetXpCostForUpgrade(
        PartyBase party, CharacterObject characterObject, CharacterObject upgradeTarget)
    {
        int baseCost = base.GetXpCostForUpgrade(
            party, characterObject, upgradeTarget);
        return baseCost >= 100000000 ? baseCost : baseCost - 25;
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter starter)
{
    starter.AddModel(new MyPartyTroopUpgradeModel());
}
```

示例保留无效目标的哨兵值，避免把拒绝升级的输入变成负成本。若包装已有模型，使用 `CampaignGameStarter.AddModel<T>(MBGameModel<T>)` 提供的 `BaseModel`；不要从 `Campaign.Current.Models.PartyTroopUpgradeModel` 回读自己的已替换实例，否则 `CanPartyUpgradeTroopToTarget` 等组合方法可能递归。

## 模型与实际升级的边界

`PartyUpgraderCampaignBehavior` 会先排除主队/非活动队伍，计算健康兵数量，按 XP 成本、工资支付上限和 `PartyTradeGold` 限制可升级数量，再读取金币成本和资格。真正执行时，它会：

1. 从原 roster 元素扣除升级 XP；
2. 用 `TroopRoster.AddToCounts` 移除旧兵并加入目标兵；
3. 通过 `GiveGoldAction` 扣除总金币；
4. 通过 `SkillLevelingManager.OnUpgradeTroops` 通知技能系统。

PartyScreen 也会读取模型来显示目标要求和费用，但不会因为模型返回 `true` 就跳过正式升级流程。自定义模型必须把所有世界变更留给这些官方调用者。

## 风险与调试边界

1. **资格不等于可升级数量**：模型不检查健康兵数量、roster XP、工资上限或贸易金币；排查 AI 不升级时还要看 `PartyUpgraderCampaignBehavior` 的数量钳制。
2. **物品条件过宽**：默认只要求目标类别有至少一个物品，不会按升级数量扣除装备；不要把这个布尔值误当成完整库存结算。
3. **费用递归**：金币成本依赖 `PartyWageModel`；替换两个 Model 时应避免互相通过已替换属性递归读取。
4. **哨兵值误用**：`100000000` 代表非法目标；UI、AI 或自定义模型必须先验证目标关系再显示或支付成本。
5. **权重误读**：`9999` 是确定性选择优先级，不是概率百分比；将其当概率会让 AI 选择失真。
6. **直接改 roster/金币**：模型可能被 UI 和 AI 多次查询；在模型中调用 `GiveGoldAction` 或 `AddToCounts` 会重复变更、破坏存档一致性。
7. **升级树生命周期**：`CharacterObject` 与 `UpgradeTargets` 应来自已注册的对象数据；不要在模块尚未完成对象注册时缓存目标或静态计算升级树。

## 版本说明

v1.3.15 与 v1.4.5 的接口、Tier XP 档位、无效目标哨兵值、金币成本分支、Bandit Perk 门槛和确定性升级选择逻辑保持一致。v1.4.5 源码位于 `Bannerlord.Source/bin`，反编译后的 LINQ/局部变量写法不同但调用契约相同；自定义实现仍应以目标版本的 `PartyUpgraderCampaignBehavior` 与 PartyScreen 调用点为准。

## 参见

- [Campaign-ext Models 家族](../models/)
- [`PartyTroopUpgradeModel`](../PartyTroopUpgradeModel)
- [`PartyUpgraderCampaignBehavior`](../PartyUpgraderCampaignBehavior)
- [`PartyBase`](../../campaign/PartyBase)
- [`MobileParty`](../../campaign/MobileParty)
- [`CharacterObject`](../../campaign/CharacterObject)
- [`TroopRoster`](../TroopRoster)
- [`ItemRoster`](../ItemRoster)
- [`PartyWageModel`](../PartyWageModel)
- [`CampaignGameStarter`](../CampaignGameStarter)
