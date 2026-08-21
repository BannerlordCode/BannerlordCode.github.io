---
title: "DefaultDiplomacyModel"
description: "Bannerlord 外交 AI 的纯评分模型：量化宣战/求和意愿、家族与雇佣兵是否加入王国、各项王国决议的影响力消耗。它由外交 KingdomDecision 与外交行为在地图全局反复调用，但自身从不改变战争或关系状态。"
---

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** public class DefaultDiplomacyModel : DiplomacyModel
**基类：** DiplomacyModel
**源文件路径：** C:\WorkSpace\Bannerlord\bannerlord-1.4.5\Bannerlord.Source\bin\TaleWorlds.CampaignSystem\TaleWorlds.CampaignSystem.GameComponents\DefaultDiplomacyModel.cs

## 概述

`DefaultDiplomacyModel` 是 `DiplomacyModel` 抽象基类的官方实现，封装了所有外交决策的“打分”逻辑：一个派系是否值得宣战、是否适合求和、某个家族或雇佣兵加入某王国能带来多少收益、以及发起战争/和平/驱逐等王国决议要消耗多少影响力。它是只读的评估层——每一个方法都根据当前的派系实力、关系、领土价值算出一个数，但绝不写入任何世界状态；真正改变战争与关系的是 `DeclareWarAction`、`MakePeaceAction` 与 `ChangeRelationAction` 等 Action 类。

## 心智模型

把 `DefaultDiplomacyModel` 理解为“外交参谋”：游戏启动时由 `SandBoxManager` 通过 `gameStarter.AddModel(new DefaultDiplomacyModel())` 注册一次，之后任何需要评估外交意愿的代码都从 `Campaign.Current.Models.DiplomacyModel` 拿到它。它活在 Campaign 层、属于纯评估层，实例内部没有保存任何存档字段（所有状态都来自传入的 `IFaction`/`Clan`/`Hero` 参数与全局 `Campaign.Current`），因此可以被安全替换且不应被当作数据仓库。当你想微调 AI 的外交倾向时，应派生 `DefaultDiplomacyModel` 并重写某个 `GetScoreOf*` 方法（记得调用 `base.`）；而当你想真正让两个派系开战、停战或改变关系时，必须调用对应的 Action 类，而不是在这个模型里“顺手”改状态——模型被 AI 与 UI 高频、重复地调用，只负责回答“值不值得”，不负责“执行”。它与 `DiplomacyModel` 接口是“实现/契约”关系，与 `DeclareWarAction`、`MakePeaceAction`、`ChangeKingdomAction` 是“评估/执行”的分工关系。

## 何时用 / 何时不要用

- **用它**：当你要改变外交 AI 的判断标准时——例如让弱国更激进、让雇佣兵更难招募、调高宣战的影响力代价。做法是 `AddModel` 一个你自己的子类。
- **用它**：当你在 UI/决策代码里需要“当前模型算出的分”时，直接读 `Campaign.Current.Models.DiplomacyModel.GetScoreOfDeclaringWar(...)`，不要自己复刻公式。
- **不要用它去改变世界状态**：想真正宣战请调用 [`DeclareWarAction`](../DeclareWarAction)；想真正停战请调用 [`MakePeaceAction`](../MakePeaceAction)；想真正改变两族关系请调用 `ChangeRelationAction`；想让家族脱离/加入王国请走 [`ChangeKingdomAction`](../ChangeKingdomAction)。在 `DefaultDiplomacyModel` 的任意方法里直接调用这些 Action 属于在“评分回调”中执行副作用，会破坏 purity。
- **不要把它当存储**：它没有字段能跨 tick 保存你的 mod 状态；需要持久状态请写 [`CampaignBehaviorBase`](../CampaignBehaviorBase) 并用 `Campaign.Current` 访问。

## 依赖图

上游（谁定义契约、谁注册、谁发事件）：

- [DiplomacyModel](../DiplomacyModel) — 本类的抽象基类与契约接口。
- [CampaignGameStarter](../CampaignGameStarter) — `AddModel` 在此把实例注册进 `Campaign.Current.Models`。
- [CampaignEvents](../CampaignEvents) — 战争/和平/关系变化通过它广播，供行为层与 UI 响应。

下游（谁消费这些分数、谁真正落地状态）：

- [DeclareWarAction](../DeclareWarAction) — 真正写入战争状态；其提案由 `GetScoreOfDeclaringWar` 评估。
- [MakePeaceAction](../MakePeaceAction) — 真正结束战争；其提案由 `GetScoreOfDeclaringPeace` 评估。
- [ChangeKingdomAction](../ChangeKingdomAction) — 真正执行家族/雇佣兵加入或脱离王国、吞并等。
- [Clan](../../campaign/Clan) — 大量评分以 `Clan` 为输入（家族实力、关系、战争党上限）。
- [Kingdom](../../campaign/Kingdom) — 王国作为 `IFaction` 参与所有宣战/求和/招募评估。
- [Campaign](../../campaign/Campaign) — `Campaign.Current.Models.DiplomacyModel` 是调用入口，`Campaign.Current` 还被内部用来取 `AllianceModel`、`MinorFactionsModel` 等。

## 风险

- **评分方法必须是纯函数**：AI 与 UI 会以不同 `evaluatingClan`、不同参数反复调用它们。绝不能在 `GetScoreOf*` 内部调用 `DeclareWarAction` / `MakePeaceAction` / `ChangeRelationAction`（或任何写入 `StanceLink`、`Settlement`、`Clan` 的操作）。这会引发重入、重复事件、破坏 purity，并让同一帧里多次评估得到不一致的结果。
- **重写不调用 `base.` 会破坏其他 mod**：很多 mod 依赖基类的默认公式与 `ExplainedNumber` 描述。重写具体 `Get*` 时若完全替换而非先 `base.` 再修正，会让下游读取 `reason` 或子分数（如 `GetWarProgressScore` 的分解项）的调用方拿到意料之外的空值/错误语义。
- **改动分数有巨大的战略连锁反应**：宣战分、求和分、招募分直接驱动王国 AI 的开战与背叛节奏。把它们整体调高/调低会让整个大陆的外交格局剧烈变化，需用 `IsPeaceSuitable`、`GetDecisionMakingThreshold` 一起审视。
- **它是无状态的**：不要把每个存档战役的临时数据存成实例字段——模型在整个 `Campaign` 生命周期内是同一个对象，字段不会随存档切换而重置。需要每战役状态请用 `CampaignBehaviorBase`。
- **注册顺序敏感**：标准注册在 `SandBoxManager` 完成；你的 mod 应在 `OnGameStart`/`InitializeGameStarter` 里用 `AddModel` 覆盖，而不是在 `Campaign` 已运行后替换，否则已缓存的引用不会刷新。

## 关键成员

下面按主题分组讲解最重要的 `virtual`/`override` 评分方法。所有方法均为只读、无副作用，返回“分”越高代表该行为越被倾向（或代价越大，依语义而定）。

### 战争评分（War scoring）

- `float GetScoreOfDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`
  评估“由 `evaluatingClan` 视角看，`factionDeclaresWar` 是否值得向 `factionDeclaredWar` 宣战”。若宣战方自身总实力 ≤ 500 或战争党数量 < 2，直接返回 `-10000000f`（基本不可能）。否则综合：接壤暴露分 `GetExposureScoreToOtherFaction`（边境无相邻敌占要塞则返回 `float.MinValue` → 同样 `-10000000f`）、基于 `WarStats`（双方实力、领土价值、其他敌人总实力）算出的收益/风险分、关系分、同文化城镇分、联盟因子（`AllianceModel.GetAllianceFactorForDeclaringWar`）与贸易协定惩罚因子。最终 `= sameCultureTownScore + benefit * exposure * alliance * trade - risk + relationScore`，数值越高越想开战。`reason` 在 `includeReason=true` 时返回给 UI 的台词 `TextObject`。由王国战争决议与 AI 宣战逻辑调用。

- `ExplainedNumber GetWarProgressScore(IFaction factionDeclaresWar, IFaction factionDeclaredWar, bool includeDescriptions = false)`
  量化“谁正在赢得这场战争”。仅在双方确实处于 `IsAtWar` 时生效；从 `StanceLink` 读取击杀差、城/堡 siege 成功差、劫掠成功差，分别加权（击杀 500、城镇 siege 1000、城堡 siege 500、劫掠 250），结果累加到 `ExplainedNumber` 并限制在 `[0, 750]`。它被 `ApplyWarProgressToRiskScore`（影响求和风险）和 `GetDailyTributeToPay`（影响战败方赔款）复用。

- `float GetScoreOfDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`
  以宣和方领袖家族为评估者，返回求和意愿分。无接壤暴露时返回 `10000000f`（强烈想和）。公式综合暴露分（取双向较小并乘 1.4）、收益/风险分、`GetWarScale`（战争越久规模系数越低）、联盟因子、同文化城镇分、关系分，最后整体乘 `-1`（因为“继续战争的收益为负”即“想和平为正”）。由停战决议与 `IsPeaceSuitable` 调用。

- `float GetScoreOfDeclaringPeaceForClan(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace, Clan evaluatingClan, out TextObject reason, bool includeReason = false)`
  与上一个相同，但评估者明确为某个 `evaluatingClan`（家族提出和平时使用），并同样可返回 `reason` 台词。

- `bool IsPeaceSuitable(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)`
  综合双方 `GetScoreOfDeclaringPeace`、本方的 `GetDecisionMakingThreshold`（= `GetValueOfSettlementsForFaction/6`）以及战争已持续天数（< 150 天且和平收益不足时返回 `false`），判断此刻是否“适合”停战。被 AI 决定是否接受和平提案时调用。

- `int GetDailyTributeToPay(Clan factionToPay, Clan factionToReceive, out int tributeDurationInDays)`
  依据和平分差与 `GetWarProgressScore` 之差，算出战败/弱势方向对方的每日赔款（denars）及持续天数（通常 100 天，或 0）。无状态纯计算。

- `float GetDecisionMakingThreshold(IFaction consideringFaction)` / `float GetValueOfSettlementsForFaction(IFaction faction)`
  前者 = 后者 / 6，作为“是否值得采取外交行动”的基准线；后者把王国所有城镇（2000）、城堡（1000）加上繁荣度与村庄折算成领土价值，并经 `AdjustValueOfSettlements` 做上限压缩。

### 加入 / 脱离王国评分（Joining scoring）

- `float GetScoreOfClanToJoinKingdom(Clan clan, Kingdom kingdom)`
  评估 `clan` 加入 `kingdom` 的意愿/适配度。若 `clan` 本身就是自己王国的统治家族，返回 `-100000000f`（不可能）。否则综合：与本王国各家族的平均关系、文化匹配（同文化 +0.15，非玩家领袖且异文化 −0.15）、家族领土价值、战争党上限、若双方已交战则加上“结束战争的解脱收益”。玩家己方家族若为正分会被压到 0.2 倍。由王国招募家族的 AI 与决策调用。

- `float GetScoreOfClanToLeaveKingdom(Clan clan, Kingdom kingdom)` / `float GetScoreOfKingdomToGetClan(Kingdom kingdom, Clan clan)` / `float GetScoreOfKingdomToSackClan(Kingdom kingdom, Clan clan)`
  分别评估家族想脱离、王国想招揽、王国想驱逐某家族的意愿，均综合关系、文化、实力（`CurrentTotalStrength` + 战争党上限权重）、敌我实力比与可靠性常数 `CalculateReliabilityConstant`。

- `float GetScoreOfMercenaryToJoinKingdom(Clan mercenaryClan, Kingdom kingdom)` / `GetScoreOfMercenaryToLeaveKingdom` / `GetScoreOfKingdomToHireMercenary` / `GetScoreOfKingdomToSackMercenary`
  雇佣兵版本：加入分若 `kingdom.Leader == Hero.MainHero` 直接返回 0（玩家不能雇自己），否则用 `MinorFactionsModel.GetMercenaryAwardFactorToJoinKingdom` 的奖励差乘以实力。`HireMercenary` 主要看王国战争党总数是否低于 12、定居点是否低于 40 来补强。

### 影响力 / 关系代价评分（Cost scoring）

- `int GetInfluenceCostOfProposingWar(Clan proposingClan)` — 基础 200，若统治家族且启用 `DefaultPolicies.WarTax` 则翻倍（`AddFactor(1f)`），再叠加 `Charm.Firebrand` perk 影响。
- `int GetInfluenceCostOfProposingPeace(Clan)` — 基础 100。
- `int GetInfluenceCostOfExpellingClan(Clan)` / `GetInfluenceCostOfAnnexation(Clan)` — 基础 200，受 `FeudalInheritance`、`PrecarialLandTenure` 政策影响。
- `int GetInfluenceCostOfSupportingClan()` = 50；`GetRelationCostOfExpellingClanFromKingdom()` = −20；`GetInfluenceCostOfDisbandingArmy()` = 30（玩家统治家族减半）；其余如 `GetInfluenceCostOfPolicyProposalAndDisavowal`=100、`GetInfluenceCostOfAbandoningArmy`=2 等。这些方法在王国决议 UI 显示花费、在决议执行时扣减影响力。

### 实力 / 关系工具方法（Strength & relation helpers）

- `float GetClanStrength(Clan)`：汇总家族英雄指挥力、影响力×1.2、定居点数×4。
- `float GetHeroCommandingStrengthForClan(Hero)` / `GetHeroGoverningStrengthForClan(Hero)`：分别按战术/领导/贸易等技能、特性、是否领袖/亲属/总督等给英雄打“军事”和“治理”分。
- `int GetEffectiveRelation(Hero, Hero)` / `GetBaseRelation` / `GetHeroesForEffectiveRelation`：考虑性格特性（Honor/Valor/Mercy）后的有效关系，被外交与联姻逻辑读取。
- `float DenarsToInfluence()` = 0.002，是金钱与影响力的换算率。
- `GetBarterGroups()` 返回 6 个议价分组（Gold/Item/Prisoner/Fief/Other/Defaults），供 `BarterSystem` 使用。
- `DiplomacyStance? GetShallowDiplomaticStance` / `GetDefaultDiplomaticStance` / `bool IsAtConstantWar`：决定两派系默认的和平/战争立场（如强盗与王国、文化相同的法外小派系为常战）。

## 真实示例

### 示例 A：在 SubModule 中注册自定义外交模型

在 `MBSubModuleBase` 的 `OnGameStart`（或 `InitializeGameStarter`）里用 `AddModel` 覆盖默认实现。子类重写时先 `base.` 再调整，以保留其他 mod 依赖的语义：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.Core;
using TaleWorlds.Localization;

public class MyDiplomacyModel : DefaultDiplomacyModel
{
    // 让所有宣战评估都更保守：在基类结果上整体打 0.6 折扣
    public override float GetScoreOfDeclaringWar(
        IFaction factionDeclaresWar,
        IFaction factionDeclaredWar,
        Clan evaluatingClan,
        out TextObject reason,
        bool includeReason = false)
    {
        float baseScore = base.GetScoreOfDeclaringWar(
            factionDeclaresWar,
            factionDeclaredWar,
            evaluatingClan,
            out reason,
            includeReason);

        // 通过 Campaign.Current 确认世界已加载，避免在非 Campaign 场景误用
        if (Campaign.Current != null && Campaign.Current.Models != null)
        {
            return baseScore * 0.6f;
        }
        return baseScore;
    }
}

// 在 SubModule 中：
protected override void OnGameStart(Game game, IGameStarter starterObject)
{
    var starter = (CampaignGameStarter)starterObject;
    starter.AddModel<DefaultDiplomacyModel>(new MyDiplomacyModel());
}
```

### 示例 B：AI / 决议代码如何调用它

王国战争决议在评估“是否提议宣战”时，会从 `Campaign.Current.Models.DiplomacyModel` 读取分数并与决策阈值比较。`evaluatingClan` 通常传提案家族：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Localization;

// 假设 kingdom 的某家族 proposeClan 想向 enemyFaction 宣战
IFaction proposer = proposeClan.MapFaction;
IFaction enemy = enemyFaction;

TextObject reason;
float warScore = Campaign.Current.Models.DiplomacyModel
    .GetScoreOfDeclaringWar(proposer, enemy, proposeClan, out reason, includeReason: true);

float threshold = Campaign.Current.Models.DiplomacyModel
    .GetDecisionMakingThreshold(proposer);

if (warScore > threshold)
{
    // 评分通过，由 DeclareWarAction 真正落地，而不是在模型里改状态
    DeclareWarAction.ApplyByKingdomDecision(proposer, enemy, proposeClan);
}
else
{
    InformationManager.DisplayMessage(new TextObject("{=war_rejected}议会认为现在开战不划算。"));
}
```

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[DiplomacyModel](../DiplomacyModel) · [DeclareWarAction](../DeclareWarAction) · [MakePeaceAction](../MakePeaceAction)
- 相关架构：[scenario-acceptance-E](../../../architecture/scenario-acceptance-E) · [crash-boundaries](../../../architecture/crash-boundaries) · [doc-contract](../../../architecture/doc-contract)
