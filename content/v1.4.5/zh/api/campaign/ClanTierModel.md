---
title: "ClanTierModel"
description: "Clan 的声望等级、资格门槛、队伍上限和同伴上限的 Campaign 规则合同。"
---
# ClanTierModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class ClanTierModel : MBGameModel<ClanTierModel>`
**Base:** `MBGameModel<ClanTierModel>`
**Source:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ClanTierModel.cs`

## 一句话职责

为 `Clan` 提供等级范围、声望阈值、创建时的初始值、阵营资格以及队伍和同伴容量的规则计算。

## 概述

`ClanTierModel` 是 Campaign 的规则模型。它只定义“应该算出什么”，不直接保存或修改 `Clan.Tier`、`Clan.Renown` 或 `Clan.Influence`。实际状态由 [Clan](../Clan) 持有；例如 `Clan.AddRenown` 先增加声望，再调用 `CalculateTier`，在等级提高时通过 [CampaignEvents](../CampaignEvents) 的分发链触发 `OnClanTierChanged`。

1.4.5 的默认实现是 [DefaultClanTierModel](../DefaultClanTierModel)。它由 [SandBoxManager](../SandBoxManager) 在 Campaign 模型注册阶段加入 [CampaignGameStarter](../CampaignGameStarter)，随后 [GameModels](../GameModels) 在初始化时解析出 `ClanTierModel` 属性。mod 应通过 `Campaign.Current.Models.ClanTierModel` 读取当前实例，而不是自己 `new` 一个实例来代替运行时模型。

## 心智模型

把它看成 Clan 规则层的可替换计算器：`Clan` 是状态和写入边界，`ClanTierModel` 是阈值与容量决策，UI、生成行为和资格检查是读取方。需要改变规则时，在模型注册生命周期内提供一个完整派生模型；需要改变某个 Clan 的运行时状态时，使用对应的 [Action](../../campaign-ext/ChangeClanInfluenceAction) 或 `Clan` 的公开操作，并让原有事件链负责通知。

### 什么时候使用

- 读取当前 Campaign 的等级上下限、资格门槛、下一级声望要求或容量。
- 在创建新 Clan、加载 Clan、增加声望或显示等级预览时复用当前模型的计算结果。
- 通过继承实现一套完整且与保存兼容的等级规则，并在 Campaign 模型注册阶段替换默认实现。

### 什么时候不要使用

- 不要用它直接写 `Tier`、`Renown` 或 `Influence`；模型合同没有这样的写入接口。
- 不要在 Campaign 模型初始化前读取 `Campaign.Current.Models.ClanTierModel`，也不要在模型已解析后才假定替换会回溯更新所有持有者。
- 不要把 `GetRequiredRenownForTier` 当作任意整数查询。默认实现用数组按等级索引，调用者必须先限制到有效等级范围。

## 生命周期与依赖图

```text
SandBoxManager
  -> CampaignGameStarter.AddModel(new DefaultClanTierModel())
  -> GameModels.Initialize() / GetGameModel<ClanTierModel>()
  -> Campaign.Current.Models.ClanTierModel
  -> Clan、CampaignBehaviors、Helpers、UI、SandBox 读取规则
```

- 上游注册：[CampaignGameStarter](../CampaignGameStarter) 保存模型列表；泛型 `AddModel` 会用已有同类模型初始化新模型后再加入列表。
- 当前持有者：[GameModels](../GameModels) 的 `ClanTierModel` 属性在初始化时解析模型；[Campaign](../Campaign) 暴露当前 Campaign 上下文。
- 主要状态对象：[Clan](../Clan) 提供 `Tier`、`Renown`、`Leader`、`IsMinorFaction`，并在 `AddRenown` / `ResetClanRenown` 中调用本模型。
- 其他计算依赖：默认实现的 `HasUpcomingTier` 会读取 [PartySizeLimitModel](../PartySizeLimitModel)、[WorkshopModel](../WorkshopModel) 和 `KingdomCreationModel`。
- 读取方：[CampaignEvents](../CampaignEvents) 接收等级变化通知；[CampaignGameStarter](../CampaignGameStarter) 和 [DefaultClanTierModel](../DefaultClanTierModel) 是替换模型时最重要的导航点。

## 公开属性

这些属性是规则边界，不是保存字段。默认实现的 v1.4.5 值如下；自定义实现可以改变它们，但必须同步调整所有等级索引和已有保存的解释。

| 属性 | 默认值 | 用途与读取时机 |
|---|---:|---|
| `MinClanTier` | `0` | 最低等级；资格行为会用它判断玩家是否仍处于最低等级。 |
| `MaxClanTier` | `6` | 最高等级；`CalculateTier` 的计算上界，`HasUpcomingTier` 也用它判断是否还有下一级。 |
| `MercenaryEligibleTier` | `1` | 玩家 Clan 达到该等级后，`FactionHelper` 才允许相应的雇佣兵资格检查通过。 |
| `VassalEligibleTier` | `2` | 玩家 Clan 达到该等级后，`FactionHelper` 才允许相应的效忠资格检查通过。 |
| `BannerEligibleTier` | `0` | SandBox 的移动队伍视觉代码据此决定玩家 Clan 的旗帜是否可显示。 |
| `RebelClanStartingTier` | `3` | `Clan.CreateSettlementRebelClan` 创建叛军 Clan 时写入的起始等级。 |
| `CompanionToLordClanStartingTier` | `2` | `Clan.CreateCompanionToLordClan` 创建贵族 Clan 时写入的起始等级。 |

## 公开方法

### CalculateInitialRenown

`public abstract int CalculateInitialRenown(Clan clan)`

在 Clan 已有等级、需要为其建立初始声望时计算一个值。默认实现按 `clan.Tier` 读取等级下限数组，并在当前等级与下一级（最高级使用最高级下限加 1500）之间取随机上界；`Clan.Deserialize` 在读取 XML 的等级后调用它。因此它不是“把当前声望重新算回去”的通用刷新函数，换模型后重新加载同一保存可能得到不同的初始结果。

### CalculateInitialInfluence

`public abstract int CalculateInitialInfluence(Clan clan)`

为需要初始化的 Clan 计算影响力。默认实现使用初始声望计算结果和随机项组成整数。`ClanVariablesCampaignBehavior` 在恢复 Clan 变量时，只对非玩家、拥有领袖、领袖属于王国阵营且声望为正的 Clan 调用它，然后通过 `ChangeClanInfluenceAction.Apply` 写入影响力；模型本身不执行这次写入。

### CalculateTier

`public abstract int CalculateTier(Clan clan)`

根据 Clan 当前状态计算应处于的等级。默认实现从最低等级开始，逐个比较 `clan.Renown` 与各等级下限，返回最后一个满足条件的等级。`Clan.AddRenown` 在正向增加声望后调用它，只在计算结果高于当前等级时写回并分发等级变化；`Clan.ResetClanRenown` 清零声望后也调用它并以不显示通知的方式分发变化。

### HasUpcomingTier

`public abstract (ExplainedNumber, bool) HasUpcomingTier(Clan clan, out TextObject extraExplanation, bool includeDescriptions = false)`

判断当前 Clan 是否低于最高等级，并返回“升到下一级会增加什么”的可解释数值以及是否存在下一级。默认实现会比较当前与下一级的队伍上限、同伴上限、领袖的下一级队伍规模效果和工坊数量；若下一级达到雇佣兵、效忠或建国门槛，还会通过 `extraExplanation` 返回对应文本。`includeDescriptions` 传给 `ExplainedNumber`，UI 的 Clan 管理页和声望提示会在展示时调用它。

### GetRequiredRenownForTier

`public abstract int GetRequiredRenownForTier(int tier)`

返回进入指定等级所需的声望下限。默认实现直接返回 `{ 0, 50, 150, 350, 900, 2350, 6150 }` 中对应索引的值。`Clan.RenownRequirementForNextTier` 会以 `Tier + 1` 调用它；只有在确认 `Tier < MaxClanTier` 后才能读取这个便捷属性，否则最高等级会访问越界索引。

### GetPartyLimitForTier

`public abstract int GetPartyLimitForTier(Clan clan, int clanTierToCheck)`

计算指定 Clan 在指定等级下可拥有的队伍数量。默认实现对普通 Clan 在等级 `< 3`、`< 5`、更高等级分别给出 `1`、`2`、`3` 的基础值；对小派系则把等级限制在 `1` 到 `4`，最后再加入领袖 `Talent Magnet` perk 的效果并四舍五入。领主生成行为用它决定还可生成多少队伍，外交模型也用它估算 Clan 的军事力量。

### GetCompanionLimit

`public abstract int GetCompanionLimit(Clan clan)`

计算 Clan 当前等级允许的同伴数量。默认实现的基础值是 `clan.Tier + 3`，并叠加领袖的 `We Pledge Our Swords` 与 `Camaraderie` perk。`Clan.CompanionLimit` 通过它提供便捷读取，因此应在 Clan 和领袖已完成初始化后调用。

## 实际获取与读取示例

下面的代码读取游戏当前真正注册的模型，并先检查活动 Campaign、模型和 Clan，再查询一个安全的当前等级。它没有创建平行的模型实例。

```csharp
Campaign campaign = Campaign.Current;
if (campaign != null && campaign.Models != null && Clan.PlayerClan != null)
{
    ClanTierModel clanTierModel = campaign.Models.ClanTierModel;
    Clan playerClan = Clan.PlayerClan;
    if (clanTierModel != null && playerClan.Tier < clanTierModel.MaxClanTier)
    {
        int currentTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier);
        int nextTierRenown = clanTierModel.GetRequiredRenownForTier(playerClan.Tier + 1);
        int partyLimit = clanTierModel.GetPartyLimitForTier(playerClan, playerClan.Tier);
        int companionLimit = clanTierModel.GetCompanionLimit(playerClan);
    }
}
```

预览下一级时，应使用合同返回的布尔值和 `out` 说明，而不是自行假定最高等级存在下一级：

```csharp
Clan playerClan = Clan.PlayerClan;
ClanTierModel clanTierModel = Campaign.Current.Models.ClanTierModel;
if (playerClan != null && clanTierModel != null)
{
    (ExplainedNumber changes, bool hasNextTier) = clanTierModel.HasUpcomingTier(playerClan, out TextObject explanation, includeDescriptions: true);
    if (hasNextTier)
    {
        int nextTier = playerClan.Tier + 1;
    }
}
```

若要替换规则，应在 Campaign 模型注册阶段向 `CampaignGameStarter` 添加完整的 `ClanTierModel` 派生类，让 `GameModels` 初始化时解析到它；不要在 Campaign 已运行或保存已加载后只替换一个局部计算并期待既有状态自动迁移。

## 读取与修改的边界

- 读等级、声望门槛、容量和资格：调用当前 `ClanTierModel`。
- 增加或清零 Clan 声望：使用 [Clan](../Clan) 的 `AddRenown` / `ResetClanRenown`，让等级写回和 `OnClanTierChanged` 分发保持一致。
- 修改影响力：使用 [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)；不要把 `CalculateInitialInfluence` 的返回值误认为写操作。
- 监听等级变化：订阅 [CampaignEvents](../CampaignEvents) 对应的 Clan tier 事件；模型计算不会自行广播事件。

## 崩溃、保存与替换风险

1. `Campaign.Current`、`campaign.Models` 或 `ClanTierModel` 在启动、切换 Campaign 或模型解析前可能为空。把读取放在 Campaign 生命周期之后，并对可为空的上下文做检查。
2. 默认实现把 `clan.Tier` 用作数组索引。传入负等级、超过 `MaxClanTier` 的等级，或把不受约束的 tier 直接传给 `GetRequiredRenownForTier`，都可能抛出索引异常；最高等级尤其不能直接读取 `Tier + 1`。
3. 默认的 `GetCompanionLimit` 直接访问 `clan.Leader.GetPerkValue`，而 `HasUpcomingTier` 会把 `clan.Leader` 交给 `PartySizeLimitModel`。在 Clan 领袖尚未设置、正在销毁或保存加载尚未完成时不要调用默认实现的这些路径。
4. 默认的 `HasUpcomingTier` 还依赖 `PartySizeLimitModel`、`WorkshopModel` 和 `KingdomCreationModel`。过早调用，或替换模型时破坏这些模型的注册顺序，会导致空引用或不一致的预览结果。
5. `SandBoxManager` 在注册阶段加入 `DefaultClanTierModel`，`GameModels.Initialize` 随后缓存解析结果。太晚添加替换模型可能无法影响已解析的 `Campaign.Current.Models.ClanTierModel`，而在保存加载后改变阈值会改变升级、容量和资格的解释。版本升级应保持旧保存中的 tier 在新模型有效范围内，并在必要时显式迁移数据。
6. 模型没有自己的可见保存字段，但它的结果会被写入或影响 Clan 的等级、声望、影响力、队伍和同伴状态。不要通过直接写字段绕过 Action 和事件，否则 UI、行为和保存内容可能互相不一致。

## 导航

### ↑ 父级

- [Campaign API 目录](../)
- [Campaign](../Campaign)

### ↔ 同级与相关类型

- [Clan](../Clan)
- [GameModels](../GameModels)
- [CampaignGameStarter](../CampaignGameStarter)
- [DefaultClanTierModel](../DefaultClanTierModel)
- [PartySizeLimitModel](../PartySizeLimitModel)
- [WorkshopModel](../WorkshopModel)
- [KingdomCreationModel](../KingdomCreationModel)
- [CampaignEvents](../CampaignEvents)
- [ChangeClanInfluenceAction](../../campaign-ext/ChangeClanInfluenceAction)
