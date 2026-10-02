---
title: "StoryModePartySizeLimitModel"
description: "队伍人数上限模型：给主线阴谋任务造出的商队和讨伐任务造出的队伍单独开人数通道，不受常规上限约束。"
---
# StoryModePartySizeLimitModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModePartySizeLimitModel : PartySizeLimitModel`
**Base:** `PartySizeLimitModel`（继承自 `MBGameModel<PartySizeLimitModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModePartySizeLimitModel.cs`

## 概述

一支队伍能带多少人，由 `PartySizeLimitModel` 家族回答——包括战斗人数上限、囚犯上限、驻军人数、领主队伍假定规模、氏族等级加成等等。它的一条特判返回一个队伍能带多少人，由 `PartyBase` 上的队伍对象承载；问出来的答案是 `ExplainedNumber`（一个 `struct`，不是类，取值要用 `ResultNumber`）。对阴谋补给商队，它返回任务自己指定的 `CaravanPartySize`；对第三阶段讨伐阴谋团任务造出的队伍，固定返回 600。除此之外的十一个成员全部透传。

## 心智模型

注册方式 `campaignGameStarter.AddModel<PartySizeLimitModel>(new StoryModePartySizeLimitModel())`。`GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions)` 被队伍 UI、战斗生成、AI 决策频繁询问，是本层实际生效的唯一入口。

它的两条特判按顺序：

1. **阴谋补给商队**。仅当 `party.IsMobile` 时进入。遍历 `Campaign.Current.QuestManager.Quests`，用 `q.GetType() == typeof(DisruptSupplyLinesConspiracyQuest)` 精确匹配未完成任务（`!q.IsFinalized`）。若该任务的 `ConspiracyCaravan.Party == party`，返回 `new ExplainedNumber((float)quest.CaravanPartySize, false, null)`——**人数由任务数据决定，而不是队伍自身属性**。这个队伍同时被 [StoryModeBattleRewardModel](../StoryModeBattleRewardModel) 保护（兵不能被俘），也被 [StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) 特殊对待（禁用时强制战斗）。

2. **讨伐阴谋任务队伍**。通过一个私有惰性属性 `DefeatTheConspiracyQuestBehavior` 拿到行为实例：先查私有字段 `_defeatTheConspiracyQuestBehavior`，没有则 `Campaign.Current.GetCampaignBehavior<DefeatTheConspiracyQuestBehavior>()` 缓存起来。若该行为非空且 `IsMobilePartyCreatedForQuest(party.MobileParty)` 为真，返回 `new ExplainedNumber(600f, false, null)`。

两条都不命中才落到 `base.BaseModel.GetPartyMemberSizeLimit(party, includeDescriptions)`。

**顺序为什么重要**：这里的核心模式是 `BaseModel` 链。StoryMode 层的两条特判在**外面**，若某个 mod 在它之后注册并直接透传 `BaseModel`，玩家队伍会先经过 mod 层再落到 StoryMode 的特判——顺序无损。反过来若 mod 先注册（被压在 StoryMode 下面），StoryMode 的特判会**绕过** mod 层的全部限制。这就是「主线任务队伍人数必须为 600」这条硬约束最容易被打破的方式。

**惰性属性的缓存陷阱**：`_defeatTheConspiracyQuestBehavior` 字段第一次访问时被赋值并**永久缓存**。若在战役初始化完成之前就被触发一次，缓存住的就是当时的查询结果。正常流程下这个 getter 只在运行时被问，缓存的是稳定单例；mod 若在 `OnGameLoadFinished` 之前主动访问，风险自担。

**常见误用与坑**

- **`q.GetType() == typeof(...)` 是精确比较。** 从 `DisruptSupplyLinesConspiracyQuest` 派生的子类不会被匹配到，那些队伍会走基类上限——如果你派生了一个变体任务，记得自己的模型层也要处理。
- **`includeDescriptions` 参数在这两条特判里被忽略**，`ExplainedNumber` 硬传 `false`。UI 上看不到「因为主线任务所以 600」这类解释。
- **600 是硬编码字面量**，没有常量、没有读取任务配置。改它只能覆写本模型。
- **驻军人数（`CalculateGarrisonPartySizeLimit`）与本层无关**，它是另一个成员，透传。想限制驻军得覆写那一个。
- **`IsMobilePartyCreatedForQuest` 依赖行为实例存在**。若第三阶段相关行为被 mod 从 `AddBehaviors` 里去掉，这个分支静默失效，队伍回落到基类上限。

## 主要成员

- `GetPartyMemberSizeLimit(PartyBase party, bool includeDescriptions = false)`
  队伍战斗人数上限。两条主线特判在前，透传在后。**被队伍 UI、战斗生成与 AI 反复询问**。
- `GetPartyPrisonerSizeLimit(PartyBase party, bool includeDescriptions = false)`
  囚犯上限，透传。关押界面与战俘处理时询问。
- `CalculateGarrisonPartySizeLimit(Settlement settlement, bool includeDescriptions = false)`
  驻军人数，透传。攻城与守备计算时询问。
- `MinimumNumberOfVillagersAtVillagerParty`（`int` 属性）、`GetIdealVillagerPartySize(Village village)`
  村民队伍相关刻度，透传。
- `GetAssumedPartySizeForLordParty(Hero leaderHero, IFaction partyMapFaction, Clan actualClan)` / `GetClanTierPartySizeEffectForHero(Hero hero)` / `GetNextClanTierPartySizeEffectChangeForHero(Hero hero)`
  领主队伍假定规模与氏族等级对上限的影响，透传。改这些等于改全局势力平衡。
- `FindAppropriateInitialRosterForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)` / `FindAppropriateInitialShipsForMobileParty(MobileParty party, PartyTemplateObject partyTemplate)`
  按模板造初始部队/战船，透传。影响新生成队伍的开局配置。

## 使用示例

```csharp
// 场景：允许讨伐阴谋任务的队伍按任务配置取人数，而不是写死 600
public class MyPartySizeLimitModel : PartySizeLimitModel
{
    private DefeatTheConspiracyQuestBehavior _behavior;

    public override ExplainedNumber GetPartyMemberSizeLimit(
        PartyBase party, bool includeDescriptions = false)
    {
        if (party.IsMobile)
        {
            if (_behavior == null)
            {
                _behavior = Campaign.Current.GetCampaignBehavior<DefeatTheConspiracyQuestBehavior>();
            }
            if (_behavior != null && _behavior.IsMobilePartyCreatedForQuest(party.MobileParty))
            {
                // 交给外层先算一遍基线，再抬高到至少 800
                // 注意 ExplainedNumber 是 struct，取值要用 ResultNumber
                ExplainedNumber baseline =
                    base.BaseModel.GetPartyMemberSizeLimit(party, includeDescriptions);
                return new ExplainedNumber(MathF.Max(baseline.ResultNumber, 800f), false, null);
            }
        }
        return base.BaseModel.GetPartyMemberSizeLimit(party, includeDescriptions);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<PartySizeLimitModel>(new MyPartySizeLimitModel());
}
```

## 风险与边界

- **模型本身无字段，但你的覆写很容易引入字段**：上面的例子缓存了一个行为引用。字段不进 `SyncData` 就意味着**读档后行为实例被重建、缓存指向旧实例**。1.5.3 里 `CampaignBehavior` 不随存档序列化，读档会重建集合，必须在 `OnGameLoadFinished` 里清缓存或干脆不缓存。
- **主线任务队伍的人数是硬约束**：商队人数来自任务数据，讨伐队伍固定 600。任何在 `BaseModel` 链下层的改动都影响不到它们，任何在外层直接 return 的改动会**连基线一起砍掉**。
- **与其它 mod 的冲突表现为「外层短路」**：StoryMode 的特判在外，被压在下层的 mod 完全拿不到这些队伍。
- **性能**：`GetPartyMemberSizeLimit` 调用极频繁（UI 每帧可能触发）。里面的 `Quests.FirstOrDefault` 线性扫描是源码现状，任何复制这段逻辑的覆写都会放大开销。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 透传与链式覆写的机制源头
- [StoryModeBattleRewardModel](../StoryModeBattleRewardModel) — 同一个阴谋商队的战利品规则（兵不可被俘）
- [StoryModeEncounterGameMenuModel](../StoryModeEncounterGameMenuModel) — 同一个阴谋商队的遭遇菜单规则
- [SecondPhaseCampaignBehavior](../SecondPhaseCampaignBehavior) — 阴谋团阶段的行为驱动，也是这些任务型队伍的产生源头
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系