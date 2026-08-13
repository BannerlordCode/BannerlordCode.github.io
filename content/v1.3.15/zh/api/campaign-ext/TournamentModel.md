---
title: "TournamentModel"
description: "战役中锦标赛系统的规则契约：决定城镇何时开赛、奖品/声望/影响力如何结算、参赛者装备与 AI 模拟评分怎么算。"
---
# TournamentModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public abstract class TournamentModel : MBGameModel<TournamentModel>`  
**Base:** `MBGameModel<TournamentModel>`  
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TournamentModel.cs`  
**默认实现:** `DefaultTournamentModel`（`TaleWorlds.CampaignSystem/GameComponents/DefaultTournamentModel.cs`）

## 概述

`TournamentModel` 是战役里**锦标赛系统的计算契约**：它不给英雄下命令、不保存任何比赛状态，只负责回答“这个城镇今天会不会开锦标赛”“冠军拿多少声望”“奖品从哪些物品里抽”这类纯规则问题。真正驱动锦标赛生命周期的是 [TournamentManager](../TournamentManager/)、[TournamentCampaignBehavior](../TournamentCampaignBehavior/) 与 [TournamentGame](../TournamentGame/)——它们都会在合适的时机来调用这个 Model 拿结果。

绝大多数 mod 不需要碰它；只有当你想**系统性地改写锦标赛规则**（改开赛频率、改奖励数值、换奖品池、换参赛者护甲）时，才需要读它、或用自己的子类替换默认实现。

## 心智模型

把它当成**“锦标赛规则手册”**，而不是一个会自己跑的对象：

- 它**没有自己的状态、不持有任何比赛实例**。每次被调用都是一次独立的计算，输入参数决定输出，内部不缓存。
- 它由 `Campaign` 在战役启动时装好，平时通过 `Campaign.Current.Models.TournamentModel` 读取。你拿到的永远是已经生效的那一份（默认是 `DefaultTournamentModel`，或被某个 mod 替换过的子类）。
- 它是**只读的计算层**。`TournamentCampaignBehavior` 每天 tick 时来问“这个镇开不开赛”，`TournamentManager` 在模拟 AI 对决时来问“这个角色评分多少”，`FightTournamentGame` 在发奖时来问“奖品有哪些”。Model 只算，不决策、不存档。
- 默认实现 `DefaultTournamentModel` 是**可替换**的：任何 mod 都可以在 `MBSubModuleBase.InitializeGameStarter` 里注册自己的子类，运行时 `GetModel<T>()` 返回最后注册的那一份，因此后注册的自定义 Model 会盖掉内置默认实现。
- 想改规则就注册一个自定义 Model；想临时读某个值就直接调对应方法。不要在 Model 内部塞字段去“记住”上一次的计算结果——它是无状态的契约，这么做会和引擎的调用假设冲突。

## 如何获取 TournamentModel

```csharp
// 战役中任何地方都能拿到当前生效的锦标赛模型
TournamentModel tournamentModel = Campaign.Current.Models.TournamentModel;

// 玩家当前所在城镇（可能为 null，注意判空）
Town town = Hero.MainHero.CurrentSettlement?.Town;
if (town != null)
{
    float startChance = tournamentModel.GetTournamentStartChance(town);
    // startChance > 0 表示今天该镇有可能开赛
}
```

## 何时用 / 何时不要用

**用：**
- 想读取锦标赛的某个规则结果（开赛概率、奖励数值、奖品池），直接读 `Campaign.Current.Models.TournamentModel`。
- 想整体改写锦标赛规则：继承 `TournamentModel` 或 `DefaultTournamentModel`，实现你认为需要改的方法，其余方法调用 `base.*` 保留原行为，然后在 `InitializeGameStarter` 里注册。

**不要用：**
- 不要用直接字段写入去“改”锦标赛行为——Model 根本没有可写的业务字段，且它每帧被多处调用，任何手写状态都会被下一次调用覆盖。
- 不要为了“让某镇立刻开赛”而只调用 `CreateTournament(town)` 就完事：返回的 `TournamentGame` 必须交给 `TournamentManager.AddTournament(...)` 登记，否则它不会进入赛事列表、也不会触发 `OnTournamentStarted`。开赛这件事应交由 `TournamentCampaignBehavior` 自然驱动，或显式走 `TournamentManager`。
- 不要原地修改 `GetRegularRewardItems` / `GetEliteRewardItems` 返回的 `MBList<ItemObject>` 去“偷改奖品”——那份列表会被 `FightTournamentGame` 在发奖时直接使用，中途改它会导致奖品与预期不一致，甚至影响其他同时进行的赛事。要改奖品池就去替换 Model 的这两个方法。

## 依赖图

- 上游（谁创建 / 持有 / 调用）：[Campaign](../../campaign/Campaign/) 在启动时把 Model 装进 `GameModels`；[TournamentCampaignBehavior](../TournamentCampaignBehavior/) 每日判断是否开赛、何时结束、结算声望与影响力；[TournamentManager](../TournamentManager/) 在模拟 AI 对决时调用评分与经验；[TournamentGame](../TournamentGame/) 通过 `TournamentWinRenown` / `TournamentWinInfluence` 间接读取奖励；[FightTournamentGame](../FightTournamentGame/) 在发奖时读取奖品池与护甲。
- 下游（它反过来依赖什么）：计算开赛资格时会用到 [Town](../Town/) 与 [Settlement](../../campaign/Settlement/)（是否在围城、镇上领主与适龄英雄数量）；声望/影响力结算作用于 [Hero](../../campaign/Hero/) 及其家族；奖品与护甲来自 `ItemObject` / `CharacterObject` / `Equipment`，并调用 [BannerItemModel](../BannerItemModel/) 拿可用旗奖励；年龄判定借用 [AgeModel](../AgeModel/)。
- 替换机制：`MBSubModuleBase.InitializeGameStarter` → `CampaignGameStarter.AddModel` 注册自定义 Model，盖掉 `DefaultTournamentModel`。

## 风险

- **在战役初始化前读取会拿到 null**：`Campaign.Current.Models` 在 `Campaign` 完成 `OnInitialize` 之前尚未装配好 Model。在 `SubModule` 的 `OnSubModuleLoad`、静态构造、或任何早于战役启动的代码里访问 `Campaign.Current.Models.TournamentModel` 会抛空引用。只在战役已运行（行为 tick、对话、菜单逻辑等）时访问。
- **不要假设它一定非空**：`GetModel<TournamentModel>()` 在没有匹配类型时返回 `null`。绝大多数官方模块都注册了 `DefaultTournamentModel`，但一个精简/自定义的模块集可能省略它；读取前判空，不要写死“一定有”。
- **不要在 Model 内部引入可变状态**：它是无状态契约，引擎在每天 tick、每次模拟、每次发奖时都会反复调用。把中间结果存成字段会在下一次调用时被覆盖，且与存档/读档假设冲突。
- **替换 Model 要覆盖完整契约**：11 个抽象方法必须全部实现。继承 `DefaultTournamentModel` 并对只需改的方法 `override`、其余 `base.*` 是最安全的做法；从 `TournamentModel` 直接继承则每个方法都要自己写。
- **奖品/经验数值会影响平衡与成就**：声望、影响力、技能经验都由这些方法决定，改大了会破坏难度曲线，也可能让依赖“冠军声望≈3”的逻辑或成就判定失真。
- **跨版本稳定**：`TournamentModel` 的 11 个抽象方法在 1.3.0 / 1.3.15 / 1.4.5 完全一致；只有 `GetSkillXpGainFromTournament` 的返回类型写法从 `ValueTuple<SkillObject,int>`（带命名）变为 C# 元组 `(SkillObject skill, int xp)`，语义等价，无需为版本分支。

## 成员说明

下面按主题分组说明 mod 真正会用到的方法。每个方法都是 `abstract`，由 `DefaultTournamentModel` 给出官方默认实现；自定义 Model 可针对单个方法 `override`。

### 锦标赛的启停与资格

#### `public abstract float GetTournamentStartChance(Town town)`
某城镇在当天“开始一场新锦标赛”的概率（0~1）。`TournamentCampaignBehavior` 在每日 tick 用 `MBRandom.RandomFloat < 此值` 来抽签开赛。
默认实现：若城镇处于围城返回 `0`；否则先做一个由城镇 `StringId` 哈希与当前周序号决定的确定性门控（不匹配则 `0`），再按“镇上的领主部队数 + 适龄英雄数”给出一个基准值减去 `0.2` 的系数。
**副作用**：无。**何时调用**：由战役行为在每日 tick 自动调用；你一般只读取它来判断某镇近期是否可能开赛。

```csharp
Town town = Settlement.CurrentSettlement?.Town;
if (town != null)
{
    float chance = Campaign.Current.Models.TournamentModel.GetTournamentStartChance(town);
    // chance > 0 表示该镇今天有开赛可能
}
```

#### `public abstract TournamentGame CreateTournament(Town town)`
为该城镇创建一场锦标赛的 `TournamentGame` 实例。返回的对象**必须**交给 `TournamentManager.AddTournament(...)` 才会真正进入赛事系统。
默认实现：返回 `new FightTournamentGame(town)`（即标准的擂台对战锦标赛）。
**副作用**：无（只是 new 一个对象，不登记、不触发事件）。**何时调用**：开赛判定通过后由 `TournamentCampaignBehavior` 调用；不要单独调用来“强行开赛”。

```csharp
TournamentGame game = Campaign.Current.Models.TournamentModel.CreateTournament(town);
Campaign.Current.TournamentManager.AddTournament(game); // 不登记就不会出现在赛事列表
```

#### `public abstract float GetTournamentEndChance(TournamentGame tournament)`
一场已存在但未结束的锦标赛“今天自动结束/结算”的概率。`TournamentCampaignBehavior` 用它来决定是否让 AI 模拟并收尾这场赛事。
默认实现：按 `tournament.CreationTime.ElapsedDaysUntilNow` 计算，`max(0, (已过天数 - 10) * 0.05)`——创建越久越可能收摊。
**副作用**：无。**何时调用**：由战役行为在每日 tick 自动调用。

#### `public abstract int GetNumLeaderboardVictoriesAtGameStart()`
一名英雄在游戏开局时，排行榜上预置的“历史夺冠次数”。
默认实现：返回 `500`（所以新游戏里排行榜顶端往往已经是 500 胜的老兵）。
**副作用**：无。**何时调用**：新建英雄 / 初始化排行榜条目时由 `TournamentCampaignBehavior` 调用。改它能抬高或压低整个锦标赛排行榜的基线。

### 模拟与胜负评分

#### `public abstract float GetTournamentSimulationScore(CharacterObject character)`
模拟 AI 选手互相打锦标赛时，给某个参赛者打出的“实力分”。分数越高越可能赢。
默认实现：`(英雄?1:0.4) * (max(单手,双手,长杆) + 运动 + 骑术) * 0.01`，英雄比普通模板兵权重更高。
**副作用**：无。**何时调用**：`TournamentManager.SimulateTournament` 在结算无人参与的赛事时，对每个参赛者乘上随机扰动后比较，挑出胜者；`TournamentCampaignBehavior` 也用它对玩家所在镇的英雄排序。

```csharp
float score = Campaign.Current.Models.TournamentModel.GetTournamentSimulationScore(rival.CharacterObject);
```

### 奖励结算

#### `public abstract int GetRenownReward(Hero winner, Town town)`
冠军获得的声望。
默认实现：基础 `3`，若冠军有 `OneHanded.Duelist` 绝技则乘以其 SecondaryBonus，有 `Charm.SelfPromoter` 绝技则加上其 PrimaryBonus，最后四舍五入。
**副作用**：无（只是算数值；真正加声望的是调用方 `winner.Clan.AddRenown(...)`）。**何时调用**：`TournamentCampaignBehavior` 在玩家或 AI 夺冠时调用，随后把结果加到获胜者家族。

```csharp
int renown = Campaign.Current.Models.TournamentModel.GetRenownReward(Hero.MainHero, town);
Hero.MainHero.Clan.AddRenown(renown);
```

#### `public abstract int GetInfluenceReward(Hero winner, Town town)`
冠军获得的影响力。
默认实现：返回 `0`。调用方通过 `GainKingdomInfluenceAction.ApplyForDefault(winner, 此值)` 发放——默认是 0，即锦标赛默认不加影响力。
**副作用**：无。**何时调用**：与 `GetRenownReward` 几乎同时，在夺冠结算时由 `TournamentCampaignBehavior` 调用。

#### `public abstract (SkillObject skill, int xp) GetSkillXpGainFromTournament(Town town)`
参与者在赛事模拟中获得的“技能 + 经验”。返回 C# 命名元组，元素名为 `skill` 与 `xp`。
默认实现：随机选 `OneHanded / TwoHanded / Polearm / Riding / Athletics` 之一，经验固定 `500`；随后调用方对英雄执行 `HeroDeveloper.AddSkillXp(skill, xp)`。
**副作用**：无。**何时调用**：`TournamentManager.SimulateTournament` 对每位英雄参赛者发放技能经验。

```csharp
(SkillObject skill, int xp) gain = Campaign.Current.Models.TournamentModel.GetSkillXpGainFromTournament(town);
someHero.HeroDeveloper.AddSkillXp(gain.skill, gain.xp);
```

### 装备与奖品池

#### `public abstract Equipment GetParticipantArmor(CharacterObject participant)`
给某个参赛角色分配的护甲/装备。
默认实现：若当前在Practice场（非锦标赛模式且处于某据点），返回该阵营文化对应的练习假人装备 `gear_practice_dummy_<culture>`（缺省回退 `empire`）；否则返回参赛者自身的 `RandomBattleEquipment`。
**副作用**：无。**何时调用**：组建参赛队伍、给 AI 选手穿装备时由锦标赛逻辑调用。

#### `public abstract MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`
普通奖品的候选物品池。`regularRewardMinValue` / `regularRewardMaxValue` 是价值筛选区间（默认调用传 `1600` 与 `5000`）。
默认实现：遍历全部 `Items`，挑出价值在区间内、非商品、是 crafted 武器 / 可骑乘 / 有护甲组件、且非玩家制作的物品；优先取与城镇文化相同的，其次取其他文化；再混入 `BannerItemModel` 的 1~2 级旗奖励；若文化匹配为空则退回到混合列表。
**副作用**：无（返回一个新 `MBList`）。**何时调用**：`FightTournamentGame` 在确定/刷新奖品时调用（默认传 1600~5000）。**注意**：返回的列表会被发奖逻辑直接使用，不要原地篡改。

#### `public abstract MBList<ItemObject> GetEliteRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)`
精英奖品候选池（更高价值的专属物品）。
默认实现：从一个固定的 31 个高级物品字符串 id 列表中，逐个 `Game.Current.ObjectManager.GetObject<ItemObject>(id)` 取出存在的加入列表（如 `winds_fury_sword_t3`、`noble_horse_imperial` 等）。
**副作用**：无。**何时调用**：与 `GetRegularRewardItems` 同时，由 `FightTournamentGame` 在发奖时调用。

## 最小真实示例

### 示例 1：读取某镇的开赛概率与冠军声望

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

Town town = Hero.MainHero.CurrentSettlement?.Town;
if (town != null)
{
    TournamentModel tournamentModel = Campaign.Current.Models.TournamentModel;
    float startChance = tournamentModel.GetTournamentStartChance(town);

    // 假设玩家已经赢了这场镇上的锦标赛，算一下能拿多少声望
    int renown = tournamentModel.GetRenownReward(Hero.MainHero, town);
    // renown 默认约 3（受绝技影响浮动）
}
```

### 示例 2：用自定义 Model 抬高奖品价值区间并增加夺冠声望

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;
using TaleWorlds.Library;

public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarter)
    {
        // 自定义 Model 在 InitializeGameStarter 注册，会晚于内置默认注册，
        // 因此运行时 GetModel<TournamentModel>() 返回这一份，盖掉 DefaultTournamentModel
        ((CampaignGameStarter)gameStarter).AddModel(new GenerousTournamentModel());
    }
}

public class GenerousTournamentModel : DefaultTournamentModel
{
    // 只改夺冠声望，其余规则沿用默认实现
    public override int GetRenownReward(Hero winner, Town town)
    {
        return base.GetRenownReward(winner, town) + 5;
    }

    // 提高普通奖品的价值下限，让奖品更值钱
    public override MBList<ItemObject> GetRegularRewardItems(Town town, int regularRewardMinValue, int regularRewardMaxValue)
    {
        return base.GetRegularRewardItems(town, 3000, 8000);
    }
}
```

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[TournamentGame](../TournamentGame/) · [TournamentManager](../TournamentManager/) · [TournamentCampaignBehavior](../TournamentCampaignBehavior/) · [FightTournamentGame](../FightTournamentGame/) · [Town](../Town/) · [BannerItemModel](../BannerItemModel/)
- 相关类：[Campaign](../../campaign/Campaign/) · [Hero](../../campaign/Hero/) · [Settlement](../../campaign/Settlement/) · [AgeModel](../AgeModel/)
