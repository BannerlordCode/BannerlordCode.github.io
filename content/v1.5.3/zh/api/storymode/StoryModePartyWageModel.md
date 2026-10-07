---
title: "StoryModePartyWageModel"
description: "队伍薪资模型：教学阶段结束前，教程占位志愿兵的招募价固定为 50 金币，其它一切照旧。"
---
# StoryModePartyWageModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModePartyWageModel : PartyWageModel`
**Base:** `PartyWageModel`（继承自 `MBGameModel<PartyWageModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModePartyWageModel.cs`

## 概述

队伍每天的开销、单个士兵的日薪、以及从村庄/领主处招募一名士兵要花多少钱，都由 `PartyWageModel` 决定。StoryMode 只改一件事，而且只针对一个兵种：教学阶段尚未结束时，名为 `tutorial_placeholder_volunteer` 的教程占位志愿兵，其招募成本固定为 `50`（源码里是个 `private const int StoryModeTutorialTroopCost = 50`）。其它所有情况、所有兵种，四个成员全部原样转发。

## 心智模型

注册方式 `campaignGameStarter.AddModel<PartyWageModel>(new StoryModePartyWageModel())`。唯一生效的覆写是 `GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`，返回 `ExplainedNumber`，在玩家点「招募」按钮、以及 AI 计算招募价值时被调用。

判定逻辑只有三行，顺序是有意义的：

```
if (TutorialPhase.IsCompleted)                       → 走基类
if (troop.StringId != "tutorial_placeholder_volunteer") → 走基类
return new ExplainedNumber(50f, false, null);
```

也就是说**教学期 + 恰好是那个占位兵种**才命中。而且判定里用的是 `StoryModeManager.Current.MainStoryLine.TutorialPhase`，与 [StoryModeCombatXpModel](../StoryModeCombatXpModel) 里用的 `Settlement.CurrentSettlement` 是两条不同的路径。

占位志愿兵是教学关的临时「屯所民兵」——教学村的名望被 [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) 压到 0，只剩手工创建的村长；玩家要练兵只能从村长处拉人，拉到的就是这个占位兵种。它的定价 50 是教学期刻意压低的数字。

**顺序为什么重要**：这是一条短路规则，**外层可以单方面解除**。某个 mod 若在 StoryMode 之后注册并对教学期直接透传（或返回自己的价格），玩家的教程定价就变了。反过来，StoryMode 在链上更外层时，mod 对这个兵种的定价调整完全失效——即使那个 mod 本意只是调整别的教程兵种。

**常见误用与坑**

- **`withoutItemCost` 参数在这条路径上被忽略。** 走特判时硬传 `new ExplainedNumber(50f, false, null)`，不区分是否含装备成本。
- **`ExplainedNumber` 没有说明项**。招募界面上不会出现「教学特惠」这类解释文本，玩家看到的是一个孤立的 50。
- **`const int StoryModeTutorialTroopCost = 50` 是私有常量**，外部读不到。想复用这个数字只能硬编码 50，StoryMode 升级改了常量你的 mod 不会跟着变。
- **`StringId` 硬编码**。占位兵种换 id 就失效。
- **不要在这里调队伍总薪资**。`GetTotalWage(MobileParty, TroopRoster, bool)` 是透传的，改它等于改全局经济平衡，与教学定价无关。

## 怎么用

### 怎么拿到它

`public class StoryModePartyWageModel : PartyWageModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModePartyWageModel.cs:10`，全文 51 行，四个 override，**三个纯透传**。

注册点：`campaignGameStarter.AddModel<PartyWageModel>(new StoryModePartyWageModel())`（`StoryModeSubModule.cs:95`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.PartyWageModel`。

纯透传：`MaxWagePaymentLimit`（`:14`→`:18`）、`GetCharacterWage(CharacterObject character)`（`:23`→`:25`）、`GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`（`:29`→`:31`）。**注意 `GetTotalWage` 完全透传——教学期玩家的总工资照常结算**，唯一被压的是招募价。

唯一带逻辑的是 `GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`（`:35`），它的形状是**两条早退 + 一条放行**：

1. 教学已完成 → `base.BaseModel.GetTroopRecruitmentCost(...)`（`:37`→`:39`）
2. 教学未完成但 `troop.StringId != "tutorial_placeholder_volunteer"` → 也透传（`:41`→`:43`）
3. 只有「教学未完成 **且** 就是那个占位志愿兵」才 `return new ExplainedNumber(50f, false, null)`（`:45`）

`50f` 硬编码在方法体里，与文件底部的 `private const int StoryModeTutorialTroopCost = 50`（`:49`）**重复**——常量没被用上。

### 典型用法

```csharp
// 运行期读：部队 UI 显示的招募价就是这个
PartyWageModel wage = Campaign.Current.Models.PartyWageModel;

CharacterObject volunteer =
    MBObjectManager.Instance.GetObject<CharacterObject>("tutorial_placeholder_volunteer");
bool tutorialDone = StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted;

// 教学未完成：占位志愿兵固定 50
ExplainedNumber cheap = wage.GetTroopRecruitmentCost(volunteer, Hero.MainHero, false);
Debug.Print("占位兵招募价=" + cheap.Result + "（教学未完成时恒 50）");

// 教学完成后：恢复基类计算，取决于部队等级与数量
Debug.Print("教学完成后=" + wage.GetTroopRecruitmentCost(volunteer, Hero.MainHero, false).Result);

// 其它士兵：教学期也透传，不受影响
CharacterObject levy = MBObjectManager.Instance.GetObject<CharacterObject>("empire_recruited");
Debug.Print("普通士兵=" + wage.GetTroopRecruitmentCost(levy, Hero.MainHero).Result);

// 总工资完全透传
Debug.Print("总工资=" + wage.GetTotalWage(Hero.MainHero.Party.Party, Hero.MainHero.Party.Party.TroopRoster, true).Result);
```

### 最容易踩的坑

它按 **`troop.StringId == "tutorial_placeholder_volunteer"` 硬比**（`:41`）。mod 给这个占位兵改 `StringId`、或换成一个自己的 id 想复用这条 50 金的廉价教学通道，条件就不成立了，价格立刻跳回基类计算。教学任务（`RecruitTroopsTutorialQuest` → `RecruitTroopTutorialQuestTask`）是按数量达标判完成的，招募价突然变高可能直接让玩家在教学里卡住——**这是静默的行为变化，没有任何报错**。

## 主要成员

- `GetTroopRecruitmentCost(CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)`
  招募一名士兵的成本。教学期 + `tutorial_placeholder_volunteer` → `new ExplainedNumber(50f, false, null)`；否则透传。**招募 UI 与 AI 招募决策都会问**。
- `GetTotalWage(MobileParty mobileParty, TroopRoster troopRoster, bool includeDescriptions = false)`
  一支队伍按当前花名册算出的每日总薪资，透传。队伍界面与破产判定时询问。
- `GetCharacterWage(CharacterObject character)`
  单个士兵的日薪，透传。UI 与经济计算使用。
- `MaxWagePaymentLimit`（`int` 属性）
  单次可支付薪资的上限，透传。

## 使用示例

```csharp
// 场景：让教程占位兵的定价随玩家金量自适应（教学生存友好度调节）
public class MyPartyWageModel : PartyWageModel
{
    public override ExplainedNumber GetTroopRecruitmentCost(
        CharacterObject troop, Hero buyerHero, bool withoutItemCost = false)
    {
        if (!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted
            && troop.StringId == "tutorial_placeholder_volunteer")
        {
            // 金币不足时降到 10，充裕时用 StoryMode 的 50
            int cost = (Hero.MainHero.Gold < 100) ? 10 : 50;
            return new ExplainedNumber((float)cost, false, null);
        }
        return base.BaseModel.GetTroopRecruitmentCost(troop, buyerHero, withoutItemCost);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<PartyWageModel>(new MyPartyWageModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **硬编码 id + 硬编码常量**：`tutorial_placeholder_volunteer` 与 50 都没有共享定义，任何一侧变化都不会同步。
- **只影响一个兵种**：调整教学兵力的正确入口是这里，但它精确地只管这一个兵种。其它教程相关兵种（如训练场募得的正规兵）走基类定价。
- **外层 mod 可以完全覆盖**：这是链上最短的路径之一，调试定价问题时应先确认 `GetModel<PartyWageModel>()` 倒序找到的是不是自己。
- **`ExplainedNumber` 无来源说明**：任何依赖 `ExplainedNumber` 的说明文本 UI 在这条路径上拿不到内容，不要假设有 tooltip。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — `AddModel<PartyWageModel>` 的注册位置
- [MBGameModel](../../core-extra/MBGameModel) — 透传落到 `BaseModel` 的机制
- [StoryModeNotableSpawnModel](../StoryModeNotableSpawnModel) — 教学村名望为 0，正是占位志愿兵成为唯一兵源的原因
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学阶段的推进者，同时提供训练场的招募菜单
- [module-map](../../../architecture/module-map) — StoryMode 模块在整体结构中的位置