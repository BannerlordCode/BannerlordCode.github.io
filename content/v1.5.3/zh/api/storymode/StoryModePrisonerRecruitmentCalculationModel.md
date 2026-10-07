---
title: "StoryModePrisonerRecruitmentCalculationModel"
description: "俘虏招募模型：教学阶段未完成时，主力军队伍里的俘虏每小时顺从度增量为 0，防止玩家在教程里靠刷俘虏破局。"
---
# StoryModePrisonerRecruitmentCalculationModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel`
**Base:** `PrisonerRecruitmentCalculationModel`（继承自 `MBGameModel<PrisonerRecruitmentCalculationModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs`

## 概述

监狱里关着的人什么时候能被招进队伍、顺从度每小时涨多少、招进来掉多少士气——这一整套由 `PrisonerRecruitmentCalculationModel` 决定。StoryMode 只改一个地方：教学阶段未完成时，**主力军**（`PartyBase.MainParty`）里的俘虏每小时顺从度增量返回 0。其余五个成员（可招募数量判定、招募所需顺从度、士气影响、是否应主动招俘）全部透传。

## 心智模型

注册方式 `campaignGameStarter.AddModel<PrisonerRecruitmentCalculationModel>(new StoryModePrisonerRecruitmentCalculationModel())`。被实际改动的 `GetConformityChangePerHour(PartyBase party, CharacterObject character)` 由每日推进流程调用：每日 tick 时把返回值加到该俘虏的顺从度上。

判定同时看两个条件：

- `party == PartyBase.MainParty` —— **仅限玩家队伍**。AI 领主队伍里的俘虏照常涨顺从度。
- `!StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted` —— 教学阶段未完成。

命中则返回 `new ExplainedNumber(0f, false, null)`。注意返回的是**每小时增量 0**，不是「不可招募」——`IsPrisonerRecruitable` 与 `GetConformityNeededToRecruitPrisoner` 都是透传的，所以顺从度够时依然可以招募，只是不再自动增长。

**顺序为什么重要**：`IsPrisonerRecruitable` 决定招募按钮是否可用，`GetConformityChangePerHour` 决定顺从度能否增长。StoryMode 只掐后者，于是玩家在教程里可以招募已有的俘虏，但需要靠别的方式积累顺从度（例如通过 UI 交互选项）。任何在外层返回非 0 增量的覆写都会单方面解除这道限制。

**常见误用与坑**

- **不是「教学期禁止招俘」。** 是禁止顺从度自增长。教学期通过对话选项提升顺从度的路径不受本模型影响。
- **只针对玩家队伍。** `PartyBase.MainParty` 是静态引用，等价于「玩家的队伍」；副队、以及任何非主力的玩家所属队伍（如果有）都走基类。
- **`ExplainedNumber` 无说明项**，UI 上看不到「教学期冻结」的解释。
- **AI 队伍完全不受影响。** 若你的 mod 用 AI 队伍做类似平衡实验，别参考本模型的行为。
- **`withoutItemCost` 之类的可选参数不在这里**，参数列表固定三个，签名被源码锁死。

## 怎么用

### 怎么拿到它

`public class StoryModePrisonerRecruitmentCalculationModel : PrisonerRecruitmentCalculationModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModePrisonerRecruitmentCalculationModel.cs:9`，全文 51 行，六个 override，**五个纯透传**。

注册点：`campaignGameStarter.AddModel<PrisonerRecruitmentCalculationModel>(new StoryModePrisonerRecruitmentCalculationModel())`（`StoryModeSubModule.cs:104`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.PrisonerRecruitmentCalculationModel`。

纯透传：`CalculateRecruitableNumber(PartyBase party, CharacterObject character)`（`:12`）、`GetConformityNeededToRecruitPrisoner(CharacterObject character)`（`:28`）、`GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`（`:34`）、`IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`（`:40`）、`ShouldPartyRecruitPrisoners(PartyBase party)`（`:46`）。

唯一带逻辑的是 `GetConformityChangePerHour(PartyBase party, CharacterObject character)`（`:18`）：`party == PartyBase.MainParty && !StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted` 时 `return new ExplainedNumber(0f, false, null)`（`:20`→`:22`），否则透传（`:24`）。

这里有两个要点：

1. 判的是 **`PartyBase.MainParty` 引用相等**，不是 `MobileParty.MainParty`——只保护玩家自己。
2. `IsPrisonerRecruitable`（`:40`）是**透传的**，没有同样判断。教学期玩家的俘虏仍然「可招募」，只是每小时顺从度增量为 0，导致永远达不到门槛。这是有意的：AI 队伍和教学引导照常，只是玩家被卡住。

### 典型用法

```csharp
// 运行期读
PrisonerRecruitmentCalculationModel recruit =
    Campaign.Current.Models.PrisonerRecruitmentCalculationModel;

CharacterObject prisoner = MBObjectManager.Instance.GetObject<CharacterObject>("empire_recruited");
PartyBase main = PartyBase.MainParty;

// 复现原生：教学期玩家队伍每小时顺从度增量 0
ExplainedNumber perHour = recruit.GetConformityChangePerHour(main, prisoner);
Debug.Print("每小时顺从度=" + perHour.Result);

// 「可招募」仍返回 true，但达标门槛永远到不了
int needed;
Debug.Print("可招募=" + recruit.IsPrisonerRecruitable(main, prisoner, out needed)
          + "，需要顺从度=" + needed);

// AI 队伍完全不受影响：party != PartyBase.MainParty 走透传
MobileParty ai = MobileParty.CreateParty(PartyTemplateManager.DefaultMilitiaPartyTemplate);
Debug.Print("AI 队伍每小时=" + recruit.GetConformityChangePerHour(ai.Party, prisoner).Result);
```

### 最容易踩的坑

它只把**每小时增量**归零，没有碰 `IsPrisonerRecruitable`（`:40`）。结果是教学期玩家的俘虏管理界面上「可招募」按钮照常亮着、所需顺从度数字照常显示，但顺从度永远停在 0 不动——玩家点下去才发现永远不够。这不是 bug 是设计，但如果你写 mod 让教学期也能正常招募，光覆写这个模型不够，必须同时覆写 `IsPrisonerRecruitable` 和 `GetConformityChangePerHour` 两个方法。

## 主要成员

- `GetConformityChangePerHour(PartyBase party, CharacterObject character)`
  每小时顺从度增量。玩家队伍 + 教学未完成 → 0；否则透传。**每日 tick 调用**。
- `IsPrisonerRecruitable(PartyBase party, CharacterObject character, out int conformityNeeded)`
  某俘虏当前能否被招募，并输出还差多少顺从度。透传。招募按钮的可用性来源。
- `GetConformityNeededToRecruitPrisoner(CharacterObject character)`
  招募该兵种所需的顺从度阈值，透传。
- `GetPrisonerRecruitmentMoraleEffect(PartyBase party, CharacterObject character, int num)`
  一次招募若干人造成的士气变化，透传。
- `CalculateRecruitableNumber(PartyBase party, CharacterObject character)`
  队伍里该兵种的可招募数量，透传。
- `ShouldPartyRecruitPrisoners(PartyBase party)`
  队伍是否应主动招俘（AI 行为），透传。

## 使用示例

```csharp
// 场景：教学期顺从度增速减半而不是冻结，便于做教学可解性调优
public class MyPrisonerRecruitmentModel : PrisonerRecruitmentCalculationModel
{
    public override ExplainedNumber GetConformityChangePerHour(
        PartyBase party, CharacterObject character)
    {
        if (party == PartyBase.MainParty
            && !StoryModeManager.Current.MainStoryLine.TutorialPhase.IsCompleted)
        {
            return new ExplainedNumber(0.5f, false, null);
        }
        return base.BaseModel.GetConformityChangePerHour(party, character);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject);
    starter.AddModel<PrisonerRecruitmentCalculationModel>(new MyPrisonerRecruitmentModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段，不进存档。
- **冻结的是增量不是状态**：读档不会重置顺从度。教学期之前累积的顺从度会保留，教学结束后立刻恢复增长。
- **与 [StoryModePartySizeLimitModel](../StoryModePartySizeLimitModel) 是两回事**：那管人数上限，本管招俘速度。想控制教学期军队规模，两者可能都需要。
- **只挡玩家主力军**：如果你的 mod 把队伍所有权逻辑改了，导致玩家队伍不再是 `PartyBase.MainParty`，这道限制立刻失效。
- **外层短路语义**：链上任何一层先返回非 0 就不会继续往下问，StoryMode 的冻结可以被单方面解除。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 五个透传成员的落点
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学阶段推进者，教学菜单里的招募选项由它注册
- [StoryModePartySizeLimitModel](../StoryModePartySizeLimitModel) — 同属教学期限制的另一个队伍相关模型
- [module-map](../../../architecture/module-map) — StoryMode 模块的组成与依赖关系