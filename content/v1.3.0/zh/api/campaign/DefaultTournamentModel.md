---
title: "DefaultTournamentModel"
description: "锦标赛规则模型：11 个抽象方法控制锦标赛的创建/开始/结束概率、模拟评分、奖励（声望/影响力/技能经验/装备/物品），是 TournamentModel 的唯一默认实现。"
---

# DefaultTournamentModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTournamentModel : TournamentModel`
**Base:** `TournamentModel` → `MBGameModel<TournamentModel>` → `GameModel` → 隐式 `System.Object`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`（全文 175 行）

## 概述

`DefaultTournamentModel` 是**锦标赛系统的规则来源**，也是抽象类 `TournamentModel` 的**唯一默认实现**。它没有属性、没有字段、没有构造函数——只有 11 个 `public override` 方法和 1 个 `private` 辅助方法。

`TournamentModel` 是 `MBGameModel<TournamentModel>`，所以**泛型参数是 `TournamentModel` 这个抽象类本身，不是你的派类**。注册写法是 `gameStarter.AddModel<TournamentModel>(new MyTournamentModel());`。官方注册在 `TaleWorlds.CampaignSystem/SandBoxManager.cs:319`：`gameStarter.AddModel<TournamentModel>(new DefaultTournamentModel());`。

**覆盖它的影响面覆盖整个锦标赛生命周期。** [TournamentCampaignBehavior](../TournamentCampaignBehavior) 是主要消费方，它在每周 tick 中调用 `GetTournamentStartChance` 决定是否创建锦标赛、调用 `CreateTournament` 创建实例、调用 `GetTournamentEndChance` 决定是否结束锦标赛；在锦标赛结束时调用 `GetRenownReward` 和 `GetInfluenceReward` 发放奖励；在模拟战斗中调用 `GetTournamentSimulationScore` 计算角色战斗力。[TournamentManager](../TournamentManager) 在发放奖励时调用 `GetSkillXpGainFromTournament`。[FightTournamentGame](../FightTournamentGame) 在生成奖励物品时调用 `GetRegularRewardItems` 和 `GetEliteRewardItems`。[ArenaPracticeFightMissionController](../../campaign-ext/ArenaPracticeFightMissionController) 在练习战中调用 `GetParticipantArmor`。

## 心智模型

把它当成**「锦标赛的数值与规则中枢」**，三段定位：

**第一段：11 个方法分为三组——生命周期、评分、奖励。**

| 组 | 方法 | 职责 |
| --- | --- | --- |
| 生命周期 | `CreateTournament` / `GetTournamentStartChance` / `GetTournamentEndChance` / `GetNumLeaderboardVictoriesAtGameStart` | 控制锦标赛何时开始、何时结束、初始排行榜数据 |
| 评分 | `GetTournamentSimulationScore` | 计算角色在锦标赛模拟中的战斗力评分 |
| 奖励 | `GetRenownReward` / `GetInfluenceReward` / `GetSkillXpGainFromTournament` / `GetParticipantArmor` / `GetRegularRewardItems` / `GetEliteRewardItems` | 控制锦标赛的声望、影响力、技能经验、装备和物品奖励 |

**第二段：生命周期方法有精确的公式，不是随意数字。**

- `GetTournamentStartChance`：**0.1 × (领主派系数 + 适合参赛的英雄数 − 0.2)**，但有两个前置条件——城镇不能有围城事件，且 `town.StringId.GetHashCode() % 3` 必须等于当前季节周数。这意味着每个城镇每 3 周最多触发一次锦标赛。
- `GetTournamentEndChance`：**max(0, (已进行天数 − 10) × 0.05)**——锦标赛至少进行 10 天，之后每天有 5% 概率结束。
- `GetNumLeaderboardVictoriesAtGameStart`：固定返回 **500**，用于初始化排行榜。

**第三段：奖励方法有明确的覆盖优先级。**

- `GetRenownReward`：基础 3 点，受 `Duelist` 和 `SelfPromoter` 两个 perk 加成。
- `GetInfluenceReward`：固定返回 **0**——基础游戏中锦标赛不奖励影响力。
- `GetSkillXpGainFromTournament`：随机返回 5 个技能之一（各 20% 概率）和 500 XP。
- `GetRegularRewardItems`：按价值范围筛选物品，优先返回文化匹配的物品，其次返回旗帜（1-2 级），最后返回非文化匹配物品作为兜底。
- `GetEliteRewardItems`：返回硬编码的 31 个精英物品列表（t3 武器、贵族马匹、稀有盔甲/头盔）。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `CreateTournament` | `public override TournamentGame CreateTournament(Town town)` | 创建并返回一个 `FightTournamentGame` 实例。**这是锦标赛入口点**——`TournamentCampaignBehavior` 在每周 tick 中调用它来创建新锦标赛。 |
| `GetTournamentStartChance` | `public override float GetTournamentStartChance(Town town)` | 返回锦标赛开始的概率（0..1）。公式：`0.1 × (领主派系数 + 适合参赛的英雄数 − 0.2)`。前置条件：城镇不能有围城事件，且 `town.StringId.GetHashCode() % 3 == CampaignTime.Now.GetWeekOfSeason`。 |
| `GetNumLeaderboardVictoriesAtGameStart` | `public override int GetNumLeaderboardVictoriesAtGameStart()` | 返回 500——游戏开始时排行榜上的胜利次数。用于初始化排行榜，让新创建的锦标赛有一个基准。 |
| `GetTournamentEndChance` | `public override float GetTournamentEndChance(TournamentGame tournament)` | 返回锦标赛结束的概率（0..1）。公式：`max(0, (已进行天数 − 10) × 0.05)`。锦标赛至少进行 10 天，之后每天有 5% 概率结束。 |
| `GetTournamentSimulationScore` | `public override float GetTournamentSimulationScore(CharacterObject character)` | 返回角色的战斗力评分。公式：`(isHero ? 1 : 0.4) × (max(1H, 2H, Polearm) + Athletics + Riding) × 0.01`。英雄有 1.0 倍加成，非英雄只有 0.4 倍。 |
| `GetRenownReward` | `public override int GetRenownReward(Hero winner, Town town)` | 返回声望奖励。基础 3 点，受 `Duelist` perk（`SecondaryBonus` 倍数）和 `SelfPromoter` perk（`PrimaryBonus` 加法）加成。 |
| `GetInfluenceReward` | `public override int GetInfluenceReward(Hero winner, Town town)` | 返回影响力奖励。**固定返回 0**——基础游戏中锦标赛不奖励影响力。 |
| `GetSkillXpGainFromTournament` | `public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)` | 返回技能经验奖励。随机返回 5 个技能之一（各 20% 概率：1H/2H/Polearm/Riding/Athletics）和 500 XP。 |
| `GetParticipantArmor` | `public override Equipment GetParticipantArmor(CharacterObject participant)` | 返回参与者的装备。在练习战任务中返回文化匹配的训练假人装备；否则返回参与者的随机战斗装备。 |
| `GetRegularRewardItems` | `public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | 返回普通奖励物品列表。按价值范围筛选，优先返回文化匹配的物品，其次返回旗帜（1-2 级），最后返回非文化匹配物品作为兜底。 |
| `GetEliteRewardItems` | `public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)` | 返回精英奖励物品列表。**硬编码的 31 个物品**（t3 武器、贵族马匹、稀有盔甲/头盔），不依赖价值范围参数。 |

**私有辅助方法：** `SuitableForTournament(Hero hero)` — 检查英雄是否适合参赛：年龄 ≥ `HeroComesOfAge` 且 `max(1H, 2H)` 技能 > 100。

## 真实示例

### 覆盖开始概率和结束概率

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.TournamentGames;
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public class FrequentTournamentModel : TournamentModel
{
    public override TournamentGame CreateTournament(Town town)
    {
        return new FightTournamentGame(town);
    }

    public override float GetTournamentStartChance(Town town)
    {
        // 更频繁的锦标赛：基础概率翻倍
        return base.GetTournamentStartChance(town) * 2f;
    }

    public override float GetTournamentEndChance(TournamentGame tournament)
    {
        // 更短的锦标赛：5 天基础 + 每天 10% 结束概率
        float elapsedDays = tournament.CreationTime.ElapsedDaysUntilNow;
        return MathF.Max(0f, (elapsedDays - 5f) * 0.1f);
    }

    public override int GetNumLeaderboardVictoriesAtGameStart()
    {
        return 500;
    }

    public override float GetTournamentSimulationScore(CharacterObject character)
    {
        return base.GetTournamentSimulationScore(character);
    }

    public override int GetRenownReward(Hero winner, Town town)
    {
        return base.GetRenownReward(winner, town);
    }

    public override int GetInfluenceReward(Hero winner, Town town)
    {
        return base.GetInfluenceReward(winner, town);
    }

    public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)
    {
        return base.GetSkillXpGainFromTournament(town);
    }

    public override Equipment GetParticipantArmor(CharacterObject participant)
    {
        return base.GetParticipantArmor(participant);
    }

    public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        return base.GetRegularRewardItems(town, regularRewardMinValue, regularRewardMaxValue);
    }

    public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        return base.GetEliteRewardItems(town, regularRewardMinValue, regularRewardMaxValue);
    }
}

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (game.GameType is Campaign)
        {
            gameStarterObject.AddModel<TournamentModel>(new FrequentTournamentModel());
        }
    }
}
```

### 添加影响力奖励

```csharp
public class InfluenceTournamentModel : TournamentModel
{
    // ... 其他方法全部转发 base ...

    public override int GetInfluenceReward(Hero winner, Town town)
    {
        // 基础游戏返回 0，这里添加影响力奖励
        return 10;
    }
}
```

### 自定义奖励物品池

```csharp
public class CustomRewardTournamentModel : TournamentModel
{
    // ... 其他方法全部转发 base ...

    public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        var items = base.GetRegularRewardItems(town, regularRewardMinValue, regularRewardMaxValue);
        
        // 添加自定义物品
        var customItem = Game.Current.ObjectManager.GetObject<ItemObject>("my_custom_item");
        if (customItem != null)
        {
            items.Add(customItem);
        }
        
        return items;
    }
}
```

## 风险与边界

- **11 个方法全是 `abstract`，一个默认实现都没有。** 派生类少实现任何一个就是抽象的，编译不过。
- **`GetTournamentStartChance` 有哈希取模前置条件。** `town.StringId.GetHashCode() % 3` 必须等于当前季节周数，否则返回 0。这意味着每个城镇每 3 周最多触发一次锦标赛。**覆盖时如果去掉这个限制，锦标赛会变得非常频繁。**
- **`GetTournamentEndChance` 有 10 天最低期限。** 前 10 天返回 0，之后每天 5% 概率结束。**覆盖时如果降低最低期限，锦标赛会变得非常短。**
- **`GetEliteRewardItems` 是硬编码列表。** 31 个物品的字符串 ID 写死在代码中，不依赖价值范围参数。**覆盖时如果只添加物品而不保留原列表，会丢失原有的精英奖励。**
- **`GetRegularRewardItems` 有文化匹配逻辑。** 优先返回文化匹配的物品，其次返回旗帜，最后返回非文化匹配物品作为兜底。**覆盖时如果改变这个顺序，会影响奖励的文化多样性。**
- **`GetInfluenceReward` 固定返回 0。** 基础游戏中锦标赛不奖励影响力。**覆盖时如果添加影响力奖励，会影响游戏平衡。**
- **`GetTournamentSimulationScore` 有英雄加成。** 英雄有 1.0 倍加成，非英雄只有 0.4 倍。**覆盖时如果改变这个比例，会影响模拟战斗的结果。**
- **`BaseModel` 是 `private protected`。** 派生类读得到，外部代码读不到。想沿链转发只能在 `MBGameModel<T>` 的派生类里写 `this.BaseModel.X(...)`。
- **注册时机有截止点。** `GameModels` 在 `Campaign.cs:1905` 构造，那一刻 `GetGameModel<TournamentModel>()` 才倒序扫一次。**在 `InitializeGameStarter` 之后注册就对已建好的 `GameModels` 无效。**

## 怎么用

### 怎么拿到它

```csharp
TournamentModel tournamentModel = Campaign.Current.Models.TournamentModel;
```

`Campaign.Current.Models` 是 `GameModels`，`TournamentModel` 那一项声明在 `TaleWorlds.CampaignSystem/GameModels.cs`，由同文件的 `base.GetGameModel<TournamentModel>()` 填进来。官方实现在 `TaleWorlds.CampaignSystem/SandBoxManager.cs:319` 注册：`gameStarter.AddModel<TournamentModel>(new DefaultTournamentModel());`。

### 典型用法

**只改一个公式，其余全部转发（更安全的改法）：**

```csharp
public class LateTournamentModel : MBGameModel<TournamentModel>
{
    public override float GetTournamentStartChance(Town town)
    {
        // 更晚开始：基础概率减半
        return this.BaseModel.GetTournamentStartChance(town) * 0.5f;
    }

    public override TournamentGame CreateTournament(Town town)
    {
        return this.BaseModel.CreateTournament(town);
    }

    public override float GetTournamentEndChance(TournamentGame tournament)
    {
        return this.BaseModel.GetTournamentEndChance(tournament);
    }

    public override int GetNumLeaderboardVictoriesAtGameStart()
    {
        return this.BaseModel.GetNumLeaderboardVictoriesAtGameStart();
    }

    public override float GetTournamentSimulationScore(CharacterObject character)
    {
        return this.BaseModel.GetTournamentSimulationScore(character);
    }

    public override int GetRenownReward(Hero winner, Town town)
    {
        return this.BaseModel.GetRenownReward(winner, town);
    }

    public override int GetInfluenceReward(Hero winner, Town town)
    {
        return this.BaseModel.GetInfluenceReward(winner, town);
    }

    public override ValueTuple<SkillObject, int> GetSkillXpGainFromTournament(Town town)
    {
        return this.BaseModel.GetSkillXpGainFromTournament(town);
    }

    public override Equipment GetParticipantArmor(CharacterObject participant)
    {
        return this.BaseModel.GetParticipantArmor(participant);
    }

    public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        return this.BaseModel.GetRegularRewardItems(town, regularRewardMinValue, regularRewardMaxValue);
    }

    public override MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        return this.BaseModel.GetEliteRewardItems(town, regularRewardMinValue, regularRewardMaxValue);
    }
}
```

**注意 `MBGameModel<TournamentModel>` 的泛型参数是 `TournamentModel` 而不是 `LateTournamentModel`。** 注册也必须是 `gameStarter.AddModel<TournamentModel>(new LateTournamentModel());`——写 `AddModel<LateTournamentModel>` 编译不过。

### 最容易踩的坑

**以为 `GetTournamentStartChance` 只受英雄数量影响。它还有哈希取模前置条件。**

`GetTournamentStartChance` 的代码是：

```csharp
if (town.Settlement.SiegeEvent != null)
{
    return 0f;
}
if (Math.Abs(town.StringId.GetHashCode() % 3) != CampaignTime.Now.GetWeekOfSeason)
{
    return 0f;
}
return 0.1f * (float)(town.Settlement.Parties.Count((MobileParty x) => x.IsLordParty) + town.Settlement.HeroesWithoutParty.Count((Hero x) => this.SuitableForTournament(x))) - 0.2f);
```

**两个 `return 0f` 在前**——围城中的城镇永远不会举办锦标赛，且每个城镇每 3 周最多触发一次。覆盖时如果只改最后的公式而保留这两个前置条件，行为会符合预期；如果去掉它们，锦标赛会变得非常频繁。

**以为 `GetEliteRewardItems` 依赖价值范围参数。它不依赖。**

`GetEliteRewardItems` 的签名有 `regularRewardMinValue` 和 `regularRewardMaxValue` 两个参数，但方法体完全不用它们——它只是遍历一个硬编码的字符串列表。覆盖时如果以为改参数就能改变奖励范围，会失望。

## 跨版本提示

`TournamentModel` 的 abstract 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里**完全一致**：都是 11 个抽象方法，0 新增 / 0 移除 / 0 签名变化。

**变的是 `DefaultTournamentModel` 的具体数字与公式。** 开始概率的系数、结束概率的最低期限与系数、模拟评分的公式、奖励物品列表等都会随版本调整。

**对你覆盖代码的实际影响有两条。** 第一，**如果你硬写死数字而不是转发 `BaseModel`**，升级后你的数字与官方的会不一致——但不会崩溃，行为仍然自洽（只是你的 mod 定义了一套锦标赛规则）。第二，**如果你依赖 `GetEliteRewardItems` 的硬编码列表**，它在后续版本可能被修改，届时你的 mod 会静默地使用新的列表。

## 依赖关系

- 基类链：[GameModel](../../core-extra/GameModel)（零成员的标记基类）→ [MBGameModel](../../core-extra/MBGameModel)（提供 `private protected T BaseModel` 与 `Initialize(T)`）→ [TournamentModel](../TournamentModel)（11 个抽象方法）
- 主要读取方：[TournamentCampaignBehavior](../TournamentCampaignBehavior) 在每周 tick 中调用 `GetTournamentStartChance` / `CreateTournament` / `GetTournamentEndChance`，在锦标赛结束时调用 `GetRenownReward` / `GetInfluenceReward`，在模拟战斗中调用 `GetTournamentSimulationScore`
- 奖励发放方：[TournamentManager](../TournamentManager) 在发放奖励时调用 `GetSkillXpGainFromTournament`
- 奖励物品生成方：[FightTournamentGame](../FightTournamentGame) 在生成奖励物品时调用 `GetRegularRewardItems` / `GetEliteRewardItems`
- 练习战装备：[ArenaPracticeFightMissionController](../../campaign-ext/ArenaPracticeFightMissionController) 在练习战中调用 `GetParticipantArmor`
- 承载槽位：[GameModels](../GameModels) 的 `public TournamentModel TournamentModel { get; private set; }`，全局访问点是 `Campaign.Current.Models.TournamentModel`
- 依赖类型：[Town](../Town)、[TournamentGame](../TournamentGame)、[CharacterObject](../CharacterObject)、[Hero](../Hero)、[SkillObject](../../core-extra/SkillObject)、[Equipment](../../core-extra/Equipment)、[ItemObject](../../core-extra/ItemObject)
- 注册入口：[CampaignGameStarter](../CampaignGameStarter) 的 `AddModel<T>(MBGameModel<T>)`
- 桶首页：[campaign API 分区](../)
