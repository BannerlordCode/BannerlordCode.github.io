---
title: "DefaultClanTierModel"
description: "v1.4.5 战役中家族等级、声望门槛、队伍/同伴容量与资格提示的默认规则实现。"
---
# DefaultClanTierModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`  
**模块：** `TaleWorlds.CampaignSystem`  
**类型：** `public class DefaultClanTierModel : ClanTierModel`  
**基类：** `ClanTierModel`  
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.GameComponents/DefaultClanTierModel.cs`

## 概述

`DefaultClanTierModel` 是 Sandbox 在 1.4.5 战役中注册的家族等级规则实现。它不拥有 `Clan` 的等级、声望或影响力状态，而是根据当前家族和其他战役 Model 计算门槛、队伍上限、同伴上限、初始数值以及下一级预览。`Clan`、家族管理界面、英雄/队伍生成、外交军力估算和资格检查都读取同一个活动 Model，因此替换这里的规则会同时改变多个下游系统。

## 一句话职责

把家族等级与声望转换为默认的资格、容量、初始值和下一级收益规则。

## 心智模型

### 它在哪里、谁创建、谁持有

这是 Campaign 规则层的无状态计算器，具体状态仍由 [Clan](../Clan) 持有。`SandBoxManager` 在 Campaign 模型注册阶段执行 `gameStarter.AddModel(new DefaultClanTierModel())`；随后 [GameModels](../GameModels) 构造函数通过 `GetGameModel<ClanTierModel>()` 解析出 `ClanTierModel` 属性。运行中的 mod 应从 `Campaign.Current.Models.ClanTierModel` 取得当前实例，而不是自行 `new DefaultClanTierModel()` 后期待游戏改用那个副本。

`CampaignGameStarter.AddModel(GameModel)` 把模型追加到列表；同类型模型的查找从列表尾部向前进行，所以后注册的实现会覆盖先注册的实现。泛型包装入口 `AddModel<T>(MBGameModel<T>)` 还会先把当前同类型模型传给新 Model 的 `Initialize`。这些是启动期替换契约，不是战役运行后随时修改规则的 API。

这里的 `Initialize(ClanTierModel baseModel)` 是继承自 [MBGameModel](../../core-extra/MBGameModel) 的包装器初始化入口：只有使用泛型 `AddModel<T>(MBGameModel<T>)` 注册自定义包装器时，starter 才会把旧 Model 传入它。Sandbox 对这个默认实现使用的是非泛型 `AddModel(GameModel)`，因此不要把 `Initialize` 误解为 `DefaultClanTierModel` 自己的运行期初始化回调。

### 什么时候使用

- 在 Campaign 已完成 Model 解析后，读取当前家族的等级门槛、资格等级、队伍容量或同伴容量。
- 在新家族创建、XML 对象初始化、声望增加或家族管理 UI 预览中复用默认计算结果。
- 需要改变整套家族等级规则时，在 Campaign 模型注册阶段提供完整的 `ClanTierModel` 派生实现，并保持保存数据能够解释。

### 什么时候不要使用

- 不要把 Model 的返回值当成写操作。增加声望应走 [Clan](../Clan) 的 `AddRenown`，影响力变化应走 [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)，让等级写回和事件分发继续发生。
- 不要在 `Campaign.Current.Models` 尚未初始化、家族领袖尚未恢复或 Campaign 已销毁时读取依赖当前状态的计算。
- 不要把任意整数传给 `GetRequiredRenownForTier`；默认实现直接索引 7 项数组，负数、超过 6 的等级和最高等级的 `Tier + 1` 都可能抛出索引异常。

## 生命周期与依赖图

- 上游注册：[SandBoxManager](../SandBoxManager) 创建并注册默认实现，[CampaignGameStarter](../CampaignGameStarter) 保存模型列表。
- 运行时持有：[GameModels](../GameModels) 在构造时解析 `ClanTierModel`，[Campaign](../Campaign) 通过 `Campaign.Current.Models` 暴露它。
- 状态边界：[Clan](../Clan) 持有 `Tier`、`Renown`、`Leader` 和 `IsMinorFaction`；`AddRenown`、`ResetClanRenown` 和 `Deserialize` 会调用当前 `ClanTierModel`。
- 计算下游：[PartySizeLimitModel](../PartySizeLimitModel)、[WorkshopModel](../WorkshopModel) 和 [KingdomCreationModel](../KingdomCreationModel) 被 `HasUpcomingTier` 直接读取；[DiplomacyModel](../DiplomacyModel) 和英雄生成逻辑读取队伍上限。
- 具体消费者：[ClanManagementVM](../../viewmodel/ClanManagementVM) 和战役 UI 提示读取 `HasUpcomingTier`；[HeroSpawnCampaignBehavior](../HeroSpawnCampaignBehavior) 使用队伍上限，资格逻辑则读取雇佣兵/封臣门槛。
- 事件与变更：[CampaignEvents](../CampaignEvents) 接收等级变化通知；影响力写回使用 [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)，不是由本 Model 完成。
- 存档边界：本类没有可见的存档字段，但其结果会影响 `Clan` 的等级、声望解释、队伍与同伴状态。涉及保存兼容性时还要对照 [SaveManager](../../save-system/SaveManager)，不要在存档加载后悄悄改变旧 `Tier` 的有效范围或门槛含义。

## 默认规则

### 等级与资格属性

| 成员 | 默认值 | 用途与调用时机 |
|---|---:|---|
| `MinClanTier` | `0` | 等级下界；计算等级和部分资格判断的起点。 |
| `MaxClanTier` | `6` | 等级上界；`CalculateTier` 和下一级预览都以它封顶。 |
| `MercenaryEligibleTier` | `1` | 达到该等级后，雇佣兵资格逻辑可以通过。 |
| `VassalEligibleTier` | `2` | 达到该等级后，封臣资格逻辑可以通过。 |
| `BannerEligibleTier` | `0` | 地图视觉逻辑用它判断玩家家族旗帜资格。 |
| `RebelClanStartingTier` | `3` | `Clan.CreateSettlementRebelClan` 创建叛军家族时使用。 |
| `CompanionToLordClanStartingTier` | `2` | `Clan.CreateCompanionToLordClan` 把伙伴转为领主家族时使用。 |

默认声望下界数组是 `{ 0, 50, 150, 350, 900, 2350, 6150 }`，索引就是等级 `0` 到 `6`。它不是存档字段，也不能被当成可由 mod 直接修改的公共配置。

### 初始值与等级计算

#### `CalculateInitialRenown(Clan clan)`

根据 `clan.Tier` 在声望下界数组中取当前等级和下一级的区间，再用 `MBRandom.RandomInt` 生成区间内的初始声望。最高等级使用 `6150 + 1500` 作为上界来源。源码中 `Clan.Deserialize` 在读取 XML 家族对象后调用它；这说明它是对象初始化规则，不应被描述成“每次打开已有存档都会重置声望”。

调用前必须保证 `clan.Tier` 在 `0..6` 内。等级越界会在数组访问处失败。

#### `CalculateInitialInfluence(Clan clan)`

按 `150 + MBRandom.RandomInt((int)(CalculateInitialRenown(clan) / 15f)) + MBRandom.RandomInt(MBRandom.RandomInt(MBRandom.RandomInt(400)))` 产生初始影响力。`ClanVariablesCampaignBehavior` 只在新游戏创建的特定非玩家家族条件下读取这个结果，然后通过 `ChangeClanInfluenceAction.Apply` 写回；该方法本身不会改变 `clan.Influence`，也不会广播影响力事件。

#### `CalculateTier(Clan clan)`

从 `MinClanTier` 开始，逐项比较 `clan.Renown` 与各级声望下界，返回最后一个满足条件的等级。`Clan.AddRenown` 在增加正声望后调用它，并且只有结果高于旧等级时才写入 `Tier`，随后通过事件分发等级变化；`ResetClanRenown` 则清零声望后重新计算并以不通知的方式分发。Model 计算本身不会写回 `Clan.Tier`。

### 下一级预览与容量

#### `HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

当 `clan.Tier < MaxClanTier` 时，返回 `(ExplainedNumber, true)`；最高等级返回 `(空的 ExplainedNumber, false)`。下一级收益会比较：

- `GetPartyLimitForTier(clan, clan.Tier + 1)` 与当前等级的队伍上限差值；
- 私有 `GetCompanionLimitFromTier` 推导出的 tier 基础同伴上限差值，不包含领袖 perk 加成；
- `Campaign.Current.Models.PartySizeLimitModel.GetNextClanTierPartySizeEffectChangeForHero(clan.Leader)`；
- `Campaign.Current.Models.WorkshopModel.GetMaxWorkshopCountForClanTier` 在当前和下一级的差值。

如果下一级正好达到雇佣兵、封臣或建国门槛，`extraExplanation` 会设置为对应的本地化 `TextObject`。`includeDescriptions` 只控制 `ExplainedNumber` 是否收集描述，不改变等级规则。家族管理 ViewModel 和声望提示会用这个结果展示进度，因此不能在领袖为空或相关 Model 尚未注册时调用。

#### `GetRequiredRenownForTier(int tier)`

直接返回 `{ 0, 50, 150, 350, 900, 2350, 6150 }[tier]`。`Clan.RenownRequirementForNextTier` 会传入 `Tier + 1`，所以调用者必须先确认 `Tier < MaxClanTier`；最高等级没有下一级。

#### `GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

普通家族在检查等级小于 3、介于 3 和 4、以及至少为 5 时，基础队伍上限分别为 `1`、`2`、`3`。小派系则把检查等级限制在 `1..4`。之后，如果领袖拥有 `DefaultPerks.Leadership.TalentMagnet`，加入它的 `SecondaryBonus`，最后四舍五入。`Clan.WarPartyLimit`、英雄生成和外交军力估算都会读取它。

这里的 `clanTierToCheck` 是被检查的等级，不一定等于 `clan.Tier`；不要把未校验的 UI 输入直接传入，也不要把返回值当成已经创建队伍的命令。

#### `GetCompanionLimit(Clan clan)`

以 `clan.Tier + 3` 为基础，再检查领袖是否拥有 `DefaultPerks.Leadership.WePledgeOurSwords` 和 `DefaultPerks.Charm.Camaraderie`，分别加入对应的 `PrimaryBonus` 和 `SecondaryBonus`。源码直接调用 `clan.Leader.GetPerkValue`，没有空值保护；因此只能在家族和领袖都已初始化、且未处于销毁或存档恢复中间状态时调用。

## 真实获取与使用示例

### 读取活动 Model 并安全查询门槛

下面走的是运行中 Campaign 的真实获取路径，不创建平行 Model；最高等级先被排除，避免 `Tier + 1` 越界。

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null && Clan.PlayerClan != null)
{
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    Clan playerClan = Clan.PlayerClan;
    if (clanTierModel != null && playerClan.Tier >= clanTierModel.MinClanTier && playerClan.Tier < clanTierModel.MaxClanTier)
    {
        int nextTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier + 1);
        int partyLimit = clanTierModel.GetPartyLimitForTier(playerClan, playerClan.Tier);
        int companionLimit = clanTierModel.GetCompanionLimit(playerClan);
    }
}
```

### 读取下一级解释，而不是猜测“还有一级”

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null)
{
    Clan playerClan = Clan.PlayerClan;
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    if (playerClan != null && clanTierModel != null)
    {
        (ExplainedNumber changes, bool hasUpcomingTier) = clanTierModel.HasUpcomingTier(playerClan, out TextObject explanation, includeDescriptions: true);
        if (hasUpcomingTier)
        {
            int nextTier = playerClan.Tier + 1;
        }
    }
}
```

如果目标是改变影响力，不要把 `CalculateInitialInfluence` 的返回值写回字段；在有合法 `Clan` 和战役上下文时使用 `ChangeClanInfluenceAction.Apply`，让相关事件和持久化边界继续由游戏处理。如果 mod 让英雄获得声望，使用 [GainRenownAction](../../campaign-ext/GainRenownAction) 的 `Apply(Hero hero, float renownValue, bool doNotNotify = false)`，让它先调用 `hero.Clan.AddRenown`，再通过 `OnRenownGained` 分发声望事件；不要直接增加 `Clan.Renown` 来模拟这个流程。

## 崩溃、存档与替换风险

1. **数组越界：** 默认实现把家族等级直接当作数组索引。负等级、超过 `MaxClanTier` 的等级、以及最高等级调用 `Clan.RenownRequirementForNextTier` 都可能失败。
2. **领袖为空：** `GetCompanionLimit` 无条件解引用 `clan.Leader`；`HasUpcomingTier` 还把领袖传给 `PartySizeLimitModel`。家族创建、销毁和存档恢复的中间阶段不要调用这些路径。
3. **Model 依赖未就绪：** `HasUpcomingTier` 依赖 `PartySizeLimitModel`、`WorkshopModel` 和 `KingdomCreationModel`。过早调用或替换时遗漏其中一个，会产生空引用或错误的 UI 预览。
4. **替换过晚：** `SandBoxManager` 注册后，`GameModels` 构造函数会解析并保存 `ClanTierModel`。Campaign 运行后再添加实现，不能假定已经解析的门面会自动更新。
5. **保存语义漂移：** 本类没有自己的存档字段，但改变声望门槛、等级上限或容量规则会改变已有 `Clan.Tier`、队伍数量和资格的解释。跨版本或替换模型时必须保证旧等级仍在有效范围内，并为有意改变的规则做显式迁移。
6. **把计算当成变更：** Model 不会自动写入等级、声望、影响力、队伍或同伴。绕过 `Clan` 的公开操作、Action 和 `CampaignEvents` 直接改状态，会让 UI、行为和存档分叉。

## 导航

### ↑ 父级

- [Campaign API 目录](../)
- [ClanTierModel 契约](../ClanTierModel)
- [版本首页](../../)

### ↔ 同级与相关类型

- [Clan](../Clan)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [WorkshopModel](../WorkshopModel)
- [KingdomCreationModel](../KingdomCreationModel)
- [CampaignEvents](../CampaignEvents)
- [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)
- [GainRenownAction](../../campaign-ext/GainRenownAction)
- [ClanManagementVM](../../viewmodel/ClanManagementVM)
- [MBGameModel](../../core-extra/MBGameModel)
- [崩溃边界](../../../architecture/crash-boundary)
