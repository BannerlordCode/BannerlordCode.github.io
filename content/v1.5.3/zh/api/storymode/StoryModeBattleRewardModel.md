---
title: "StoryModeBattleRewardModel"
description: "战后奖励与战利品结算模型：屏蔽全部海战相关内容、保护阴谋团士兵不被俘，并在教学期掐断玩家声望收益。"
---
# StoryModeBattleRewardModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeBattleRewardModel : BattleRewardModel`
**Base:** `BattleRewardModel`（继承自 `MBGameModel<BattleRewardModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBattleRewardModel.cs`

## 概述

一场地图事件结束后，战利品、声望、士气、金币损失全部由 `BattleRewardModel` 家族决定。StoryMode 这一层有 25 个成员，绝大多数是原样转发，真正改写的只有五处，指向三个目的：彻底关闭海战分支（StoryMode 单人战役里没有海军）、让阴谋团的兵永远不能被俘、以及在教学阶段不发给玩家声望。剩下二十个透传成员是金币损失、声望、士气、俘虏分配、战利品物品价值的完整计算面——那些数字仍是基类在算。

## 心智模型

注册点 `campaignGameStarter.AddModel<BattleRewardModel>(new StoryModeBattleRewardModel())`。运行期的调用顺序是：**地图事件结束 → 按顺序问「谁赢」→ 算影响（influence）→ 算声望（renown）→ 算士气（morale）→ 分配俘虏 → 分配战利品物品 → 算舰船分配**。这个顺序由 `MapEvent` 结算流程固定，不是你能在 mod 里改的。

五处改写：

- `CalculateRenownGain(...)` —— 教学阶段未完成且赢家是 `PartyBase.MainParty` 时返回 `default(ExplainedNumber)`，即全零且无说明项。**只在教学期生效**，主线正式开始后透传基类。
- `CalculateShipDamageAfterDefeat(Ship ship)` —— 恒定返回 `0f`。任何战船都不会在败方手里被折损。
- `DistributeDefeatedPartyShipsAmongWinners(...)` —— 恒定返回空 `MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>`。战船永远不会被瓜分给胜方。
- `GetLootPrisonerChances(...)` —— 若俘虏是「阴谋团士兵」（`StoryModeData.IsConspiracyTroop`），给每个胜方都记 0 概率，**保留胜方条目本身**（不是把列表清空）。这一点很关键：调用方按列表长度分配，清空会导致下标越界或奖励流程中断。
- `CanTroopBeTakenPrisoner(CharacterObject troop)` —— 阴谋团士兵一律不可俘。

后两条是同一意图的两道闸：即使概率表被别处改动，`CanTroopBeTakenPrisoner` 仍会挡住。

**常见误用与坑**

- **海战屏蔽是双向的。** `CalculateShipDamageAfterDefeat` 与 `DistributeDefeatedPartyShipsAmongWinners` 都写死，意味着任何想「在主线战役里启用海战奖励」的 mod 必须绕过这两处而不是叠加一层。
- **`GetLootPrisonerChances` 返回 0 概率而不是删除条目。** 你若把它改成过滤列表，会破坏上层对 `winnerParties` 的对应关系。
- **教学期声望只挡玩家一方。** 判定条件是 `winnerParty == PartyBase.MainParty`，AI 阵营在教学期照常拿声望。
- **`default(ExplainedNumber)` 的描述项为空。** 依赖 `ExplainedNumber` 的 UI 面板在教学期可能显示空白而不是「0」。
- **透传成员别重复实现。** `CalculateInfluenceGain`、`CalculateMoraleGainVictory`、`GetLootedItemFromTroop` 等二十个都走 `BaseModel`，重复覆写只会让链变得更长更难查。

## 怎么用

### 怎么拿到它

`public class StoryModeBattleRewardModel : BattleRewardModel` 声明在 `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeBattleRewardModel.cs:16`，全文 181 行，**二十一个 override 里只有四个带主线逻辑，其余十七个纯透传**。

注册点：`campaignGameStarter.AddModel<BattleRewardModel>(new StoryModeBattleRewardModel())`（`StoryModeSubModule.cs:93`），只在主线战役生效（`StoryModeSubModule.cs:23`→`:24`）。读用 `Campaign.Current.Models.BattleRewardModel`。调用方是地图事件结算流程——每场战斗结束、算奖罚时都会问一遍。

四个非透传 override：

| 方法 | 声明行 | 行为 |
| --- | --- | --- |
| `CalculateRenownGain(...)` | `:49` | 教学未完成且 `winnerParty == PartyBase.MainParty` → `return default(ExplainedNumber)`（`:51`→`:53`）。注意不是 `new ExplainedNumber(0f,...)`，而是 **`default`**，即 `Result` 为 0 且内部集合为 null |
| `CalculateShipDamageAfterDefeat(Ship ship)` | `:59` | 恒 `return 0f;`（`:61`）——海战船损直接归零 |
| `DistributeDefeatedPartyShipsAmongWinners(...)` | `:65` | 恒返 `new MBReadOnlyList<KeyValuePair<Ship, MapEventParty>>()` 空表（`:67`） |
| `GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)` | `:131` | 阴谋士兵 → 给每个胜方都填 `0f` 概率（`:133`→`:140`）；否则透传（`:142`） |
| `CanTroopBeTakenPrisoner(CharacterObject troop)` | `:176` | `!StoryModeData.IsConspiracyTroop(troop) && 基类`（`:178`）——阴谋士兵不可被俘 |

五个而非四个：`GetLootPrisonerChances` 和 `CanTroopBeTakenPrisoner` 两处都靠 [StoryModeData](../StoryModeData) 的 `IsConspiracyTroop`（读 29 个硬编码 `StringId`）。

海战那两条（`:59`、`:65`）是**无条件覆盖，没有任何主线前提**——只要装了 StoryMode 模块就生效，不分战役进度。

### 典型用法

```csharp
// 运行期读
BattleRewardModel reward = Campaign.Current.Models.BattleRewardModel;

// 复现原生：教学期主队打赢不给声望
ExplainedNumber renown = reward.CalculateRenownGain(
    PartyBase.MainParty, 100f, 1f, 1f, true);
Debug.Print("声望=" + renown.Result);   // 教学期为 default(ExplainedNumber)

// 阴谋士兵不可被俘
CharacterObject commander = MBObjectManager.Instance.GetObject<CharacterObject>("conspiracy_commander_antiempire");
Debug.Print("可被俘=" + reward.CanTroopBeTakenPrisoner(commander));   // false

// 海战伤害与分配恒为 0 / 空表
Debug.Print("船损=" + reward.CalculateShipDamageAfterDefeat(ship)
          + "，分配表长度=" + reward.DistributeDefeatedPartyShipsAmongWinners(mapEvent, ships, winners).Count);

// 纯透传成员照常可用
Debug.Print("战败金币损失=" + reward.CalculateGoldLossAfterDefeat(Hero.MainHero));
```

### 最容易踩的坑

`CalculateRenownGain` 早退时返回的是 **`default(ExplainedNumber)`**（`:53`），不是 `new ExplainedNumber(0f, false, null)`。`ExplainedNumber` 的结构体字段在这里全为零值，包括内部的说明文本集合。调用方若在拿到结果后无条件读 `.GetTooltip()` 或遍历说明项，会在教学期 NRE——而其它所有模型（例如 [StoryModeCombatXpModel](../StoryModeCombatXpModel)、[StoryModePrisonerRecruitmentCalculationModel](../StoryModePrisonerRecruitmentCalculationModel)）早退时都规规矩矩 `new ExplainedNumber(0f, false, null)`。这就是这个 override 的独有风险。

## 主要成员

- `CalculateRenownGain(PartyBase winnerParty, float renownValueOfBattleForWinnerSide, float contributionShareOfWinnerParty, float renownMultiplierForWinnerSide, bool includeDescriptions)`
  胜方声望增益。教学期玩家为 `default(ExplainedNumber)`；否则透传。**不要手动调**，MapEvent 结算流程会问。
- `CanTroopBeTakenPrisoner(CharacterObject troop)`
  某兵种能否被俘。阴谋团士兵恒 false。俘虏分配与监狱 UI 都会问。
- `GetLootPrisonerChances(MBReadOnlyList<MapEventParty> winnerParties, TroopRosterElement prisonerElement)`
  每个胜方获得该俘虏的概率。阴谋团士兵时给全 0，条目数保持与 `winnerParties` 一致。
- `CalculateShipDamageAfterDefeat(Ship ship)`
  恒返回 0f，禁用战船损毁。
- `DistributeDefeatedPartyShipsAmongWinners(MapEvent mapEvent, MBReadOnlyList<Ship> shipsToLoot, MBReadOnlyList<MapEventParty> winnerParties)`
  恒返回空列表，禁用战船瓜分。
- 透传组（20 个）：`CalculateGoldLossAfterDefeat`、`CalculateInfluenceGain`、`CalculateMoraleChangeOnRoundVictory`、`CalculateMoraleGainVictory`、`CalculatePlunderedGoldAmountFromDefeatedParty`、`GetAITradePenalty`、`GetBannerLootChanceFromDefeatedHero`、`GetBannerRewardForWinningMapEvent`、`GetExpectedLootedItemValueFromCasualty`、`GetFigureheadLoot`、`GetLootCasualtyChances`、`GetLootedItemFromTroop`、`GetLootGoldChances`、`GetLootItemChancesForWinnerParties`、`GetCaptureMemberChancesForWinnerParties`、`GetMainPartyMemberScatterChance`、`GetPlayerGainedRelationAmount`、`GetShipSiegeEngineHitMoraleEffect`、`GetSunkenShipMoraleEffect`、`GetWinnerPartiesThatCanPlunderGoldFromShips` — 全部原样转发，控制战利品质感、士气曲线与 AI 交易惩罚时从这里入手。

## 使用示例

```csharp
// 场景：让教学期玩家也能拿到声望，但减半
public class MyBattleRewardModel : BattleRewardModel
{
    public override ExplainedNumber CalculateRenownGain(
        PartyBase winnerParty,
        float renownValueOfBattleForWinnerSide,
        float contributionShareOfWinnerParty,
        float renownMultiplierForWinnerSide,
        bool includeDescriptions)
    {
        if (TutorialPhase.Instance != null
            && !TutorialPhase.Instance.IsCompleted
            && winnerParty == PartyBase.MainParty)
        {
            // 不再返回 default(ExplainedNumber)，而是给出真实数值的 50%
            return new ExplainedNumber(
                renownValueOfBattleForWinnerSide * contributionShareOfWinnerParty * 0.5f,
                includeDescriptions);
        }
        return base.BaseModel.CalculateRenownGain(
            winnerParty, renownValueOfBattleForWinnerSide,
            contributionShareOfWinnerParty, renownMultiplierForWinnerSide, includeDescriptions);
    }
}

protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    var starter = (CampaignGameStarter)gameStarterObject;
    starter.AddModel<BattleRewardModel>(new MyBattleRewardModel());
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **阴谋团士兵判定是外部契约**：`StoryModeData.IsConspiracyTroop` 不在本文件里，mod 若替换了阴谋团兵种的 Character 定义，这两处保护会静默失效。
- **教学期依赖 `TutorialPhase.Instance` 的 null 检查**：`CalculateRenownGain` 显式判了 `Instance != null`，其余透传成员不需要。教学阶段被 mod 提前结束又没走正常路径时，这里是唯一的安全网。
- **多层覆写相乘**：想改战利品价值的 mod 应覆写 `GetLootedItemFromTroop` 或 `GetExpectedLootedItemValueFromCasualty`，而不是整条链重算。
- **海战 mod 与主线战役互斥**：改海战数值在本战役里没有意义，因为分战船的两个入口已被写死。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 模型注册入口
- [MBGameModel](../../core-extra/MBGameModel) — 二十个透传成员最终落到 `BaseModel` 的机制
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 教学阶段的实际推进者，本模型的 `TutorialPhase` 判定源头
- [SecondPhaseCampaignBehavior](../SecondPhaseCampaignBehavior) — 阴谋团阶段的行为驱动，与「阴谋团士兵不可俘」直接相关
- [sdk-overview](../../../architecture/sdk-overview) — SubModule 启动与模型装配的整体位置