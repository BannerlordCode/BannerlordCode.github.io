---
title: "StoryModeEncounterGameMenuModel"
description: "遭遇战对话菜单模型：训练场、剧情限制期、以及阴谋团补给线任务各自走不同的菜单与开战选项。"
---
# StoryModeEncounterGameMenuModel

**Namespace:** StoryMode.GameComponents
**Module:** StoryMode
**Type:** `public class StoryModeEncounterGameMenuModel : EncounterGameMenuModel`
**Base:** `EncounterGameMenuModel`（继承自 `MBGameModel<EncounterGameMenuModel>`）
**Source:** `bannerlord-1.5.3/StoryMode/GameComponents/StoryModeEncounterGameMenuModel.cs`

## 概述

玩家在路上撞见另一支队伍时，弹出的那个「遭遇菜单」——可以开战、可以加入、可以离开——由这个模型决定返回哪个菜单 id 以及 `startBattle` / `joinBattle` 两个开关。StoryMode 的实现分四条路：训练场聚落归属的遭遇给专用菜单且不参战；主线限制交互的阶段弹一个「禁止交互」的挡板菜单；主线第二阶段且交战方之一是阴谋团氏族时，正常走基类菜单除非对方正好是「切断补给线」任务的目标商队；其余情况完全交给基类。

## 心智模型

注册方式是 `campaignGameStarter.AddModel<EncounterGameMenuModel>(new StoryModeEncounterGameMenuModel())`。调用方是 `PlayerEncounter` 的建立流程：探测到两支敌对/中立队伍在路上 → 问本模型拿菜单 id → 用那个 id 去 `CampaignGameStarter` 注册过的菜单里找 → 按 `startBattle` / `joinBattle` 决定菜单里出现哪几项。

四个分支严格按顺序：

1. **训练场**：`MapEventHelper.GetEncounteredPartyBase(attackerParty, defenderParty).Settlement` 非空且其 `SettlementComponent is TrainingField` → 返回 `"training_field_menu"`，`startBattle = false`、`joinBattle = false`。这个菜单在 [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) 里注册。
2. **剧情限制**：`StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted` → 返回 `"storymode_game_menu_blocker"`，两个开关都关。该菜单由 [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) 注册。
3. **阴谋团商队**：主线第二阶段存在，且 `SecondPhase.ConspiracyClan` 等于攻守任一方的 `MapFaction` → 遍历 `Campaign.Current.QuestManager.Quests` 找未完成的 `DisruptSupplyLinesConspiracyQuest`；若该任务的 `ConspiracyCaravan` 正好是 `defenderParty.MobileParty`，走基类菜单（保留任务交互），否则返回 `"encounter"` 并强制 `startBattle = joinBattle = true`。
4. **其余**：透传 `BaseModel`。

**顺序为什么重要**：菜单 id 必须**已经被别人注册过**。本模型只返回字符串，不注册菜单。训练场菜单和挡板菜单都在别的行为里通过 `OnSessionLaunched` 注册——那些行为如果没被装上，返回的 id 就找不到对应菜单，遭遇流程会退化。这也是为什么 `AddBehaviors` 里 `TrainingFieldCampaignBehavior` 是无条件添加的。

**常见误用与坑**

- **菜单注册与菜单选择是两件事。** 你覆写本模型去返回一个自定义 id，就必须自己在 `OnSessionLaunched` 里 `AddGameMenu` 这个 id，否则运行时找不到。
- **分支 3 用的是 `q.GetType() == typeof(DisruptSupplyLinesConspiracyQuest)` 精确类型比较**，不是 `is`。派生的任务类型不会被匹配到。
- **`GetEncounteredPartyBase` 返回 null 会 NRE。** 直接解引用 `.Settlement`，没有判空；野外无聚落的遭遇靠这个方法自身保证非空。
- **训练场判定看组件类型不看聚落名**，与 [StoryModeCombatXpModel](../StoryModeCombatXpModel) 用的是同一套 `IsTrainingField()`。

## 主要成员

- `GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)`
  核心。返回菜单 id，并通过两个 `out` 决定菜单里是否给出「开战」「加入」项。**由遭遇流程调用**，mod 里一般不改签名。
- `GetGenericStateMenu()`
  通用状态菜单（没有具体遭遇对象时用），透传。
- `GetNewPartyJoinMenu(MobileParty newParty)`
  有新队伍并入时用的菜单，透传。
- `GetRaidCompleteMenu()`
  劫掠完成后的菜单，透传。
- `IsPlunderMenu(string menuId)`
  判断某个菜单 id 是否属于「劫掠」类菜单，透传。上层用它区分劫掠结束 vs 战斗结束。

## 使用示例

```csharp
// 场景：主线限制期也允许与低阶匪徒开战（放宽分支 2）
public class MyEncounterMenuModel : EncounterGameMenuModel
{
    public override string GetEncounterMenu(
        PartyBase attackerParty, PartyBase defenderParty,
        out bool startBattle, out bool joinBattle)
    {
        string text_menu;
        Settlement settlement =
            MapEventHelper.GetEncounteredPartyBase(attackerParty, defenderParty).Settlement;

        if (settlement != null && settlement.SettlementComponent is TrainingField)
        {
            text_menu = "training_field_menu";
            startBattle = false;
            joinBattle = false;
            return text_menu;
        }

        // 这里刻意不走 StoryMode 的挡板分支
        if (StoryModeManager.Current.MainStoryLine.IsPlayerInteractionRestricted
            && defenderParty.MobileParty != null
            && defenderParty.MobileParty.MapFaction != null
            && defenderParty.MobileParty.MapFaction.IsBanditFaction)
        {
            startBattle = true;
            joinBattle = false;
            return "encounter";
        }

        return base.BaseModel.GetEncounterMenu(attackerParty, defenderParty, out startBattle, out joinBattle);
    }
}
```

## 风险与边界

- **无存档序列化风险**：模型无字段。
- **菜单 id 是隐式契约**：本层与 [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) / [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) 之间靠字符串 `"training_field_menu"`、`"storymode_game_menu_blocker"` 硬约定，没有常量共享。任何一个被 mod 移除的注册都会让对应分支返回空菜单。
- **依赖 `StoryMode.Quests.SecondPhase` 命名空间存在**：若 mod 裁剪了主线任务，第二阶段相关的分支会因类型加载失败而无法编译进你的子类——覆写时保留原分支代码即可。
- **`out` 参数必须全部赋值**：任一路径忘记赋值，编译器放行但遭遇流程会读到未初始化值。

## 依赖关系

- [CampaignGameStarter](../../campaign/CampaignGameStarter) — 菜单 id 的注册与解析都发生在这里
- [CampaignEvents](../../campaign/CampaignEvents) — 相关行为通过 `OnSessionLaunchedEvent` 拿到 starter 并注册菜单
- [TrainingFieldCampaignBehavior](../TrainingFieldCampaignBehavior) — 注册 `training_field_menu` 的行为
- [TutorialPhaseCampaignBehavior](../TutorialPhaseCampaignBehavior) — 注册 `storymode_game_menu_blocker` 的行为
- [StoryModeCombatXpModel](../StoryModeCombatXpModel) — 同样以训练场为判定条件的经验模型
- [module-map](../../../architecture/module-map) — StoryMode 模块在整体结构中的位置