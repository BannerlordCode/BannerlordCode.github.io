---
title: "RescueFamilyQuest"
description: "战役主线收尾任务：藏身处救出 Radagos 与家人，击败副手 Galter，最后决定放走或处决 Radagos，并让弟妹加入氏族。"
---
# RescueFamilyQuest

**Namespace:** StoryMode.Quests.PlayerClanQuests
**Module:** StoryMode
**Type:** `public class RescueFamilyQuestBehavior.RescueFamilyQuest : StoryModeQuestBase`
**Base:** StoryModeQuestBase
**Source:** PlayerClanQuests/RescueFamilyQuestBehavior.cs

## 概述

主线最后一个任务，也是唯一一个有**七态状态机 + 存档迁移补丁**的教程后任务。流程是：与 Radagos 重逢 → 进入他被困的藏住处 → 在藏处里选择单挑或群战击败副手 Galter（或让 Radagos 处决他）→ 与哥哥汇合 → 最终与 Radagos 道别，选择放他走或处决他。任务完成时把 `ElderBrother` / `LittleBrother` / `LittleSister` 三人正式转入玩家氏族（需要 `NavalDLC` 未激活才会转移妹妹），并把 Radagos 与其藏处境清理干净。

## 心智模型

它是 `RescueFamilyQuestBehavior` 的嵌套类，无参构造，`CampaignTime.Never`。构造期立刻做三件不可逆的事：置 `StoryModeManager.Current.MainStoryLine.FamilyRescued = true`（**这是全局剧情标记，一旦置真就再也回不去**）、把 Radagos 设为不可交易/不可送进藏处、按玩家当前位置挑一个最近且不忙的藏住处并补满强盗队。

它的状态机是私有枚举 `RescueFamilyQuestStateEnum`，七个值按顺序推进：`None → ReunionTalkWithRadagosDone → HideoutTalkWithRadagosDone → HideoutBattleInProgress → ExecutionTalkWithGalterDone → ReunionTalkWithBrotherDone → GoodbyeTalkWithRadagosDone`。**这个枚举只带 `[SaveableField(8)]`，但没有直接注册进存档 definer**——所以 mod 若要动它必须同时处理 definer。

坑非常密集。第一，它带一个 `[LoadInitializationCallback]` 的 `OnLoad`，**从 SaveId 2/3/4/5 反推旧存档里已经没有的四个 bool 字段**并映射到枚举状态。这是纯粹的向后兼容层，删掉它会让 1.x 早期的存档读不出正确阶段。第二，`InitializeQuestOnGameLoad` 里有第二段版本迁移：若 `MBSaveLoad.IsUpdatingGameVersion` 且版本早于 `v1.4.0`、状态恰好是 `HideoutTalkWithRadagosDone`、且当前正处于该藏处处的战斗，则把状态推到 `HideoutBattleInProgress`——用来修复"旧版在战斗中存档"造成的状态错位。第三，`OnCompleteWithSuccess` 与 `OnTimedOut` 完全相反：成功时让家人入族，超时时**直接 `KillCharacterAction.ApplyByRemove` 杀掉三个弟妹**。

## 主要成员

- `public RescueFamilyQuest()`：置 `FamilyRescued = true`、锁 Radagos 的转移能力、选藏住处、补队。
- `[LoadInitializationCallback] private void OnLoad(MetaData metaData, ObjectLoadData objectLoadData)`：**旧存档迁移**。按 SaveId 2–5 依次读取历史 bool 并映射到枚举状态，**后读的覆盖先读的**（所以执行优先于重逢）。
- `protected override void InitializeQuestOnGameLoad()`：重置 Radagos 的能力标记、取消两人的百科隐藏、`SetDialogs`、`AddGameMenus`、`SelectTargetSettlementForSiblings()`，以及第二段版本迁移。
- `protected override void OnStartQuest()` / `OnFinalize()`：开始时让 Radagos 与 Galter 出现在百科里，结束时再隐藏回去。
- `protected override void OnCompleteWithSuccess()`：清理 Galter（未死则 `ApplyByRemove`）、按状态决定是否 `DisableHeroAction.Apply(Radagos)`、把三个弟妹转入玩家氏族并 `EnterSettlementAction`，按 `AgeModel.HeroComesOfAge` 决定弟妹是否 `Active` 还是 `NotSpawned`，用 `ModuleHelper.GetModuleInfo("NavalDLC")` 判断是否处理妹妹，最后改写百科文案。
- `protected override void OnTimedOut()`：**杀掉三个弟妹**。虽然本任务用 `CampaignTime.Never`，但父类覆写仍在。
- `private void OnMapEventStarted(...)` / `OnHideoutBattleCompleted(...)`：战斗状态机。胜利或撤退（`battleEndState > Defeated && battleEndState - Victory <= 1`）都会打开与 Galter 的对话；失败则治疗他、判负、`DisableHeroAction.Apply(Radagos)`、解囚、补队、延长藏处冷却。
- `private void OnMissionStarted(IMission mission)`：把藏处首领替换成 Galter。
- `private void OnHeroKilled(...)`：Radagos 杀了 Galter → 切到 `radagos_goodbye_menu`。
- `private void OnGameMenuOpened(MenuCallbackArgs args)`：状态 `< HideoutTalkWithRadagosDone` 且玩家在藏处 → 强制与 Radagos 对话；状态 `== GoodbyeTalkWithRadagosDone` 且当前是 `radagos_goodbye_menu` → `GameMenu.ExitToLast()` + 完成任务。
- `private void execute_radagos_consequence()` / `let_go_radagos_consequence()` / `OnRadagosExecutionIsDone()`：**最终分支**。处决走 `HeroExecutionSceneNotificationData.CreateForInformingPlayer` 演出回调 `KillCharacterAction.ApplyByExecution`；放走走 `DisableHeroAction`。
- `private void SelectTargetSettlementForSiblings()`：三级降级找家——自家王国城镇 → 非交战国城镇 → 任意城镇。
- `private void AddGameMenus()` / `radagos_goodbye_menu_on_init` 等：注册 `radagos_goodbye_menu` 自定义菜单。
- `public class RebuildPlayerClanQuestBehaviorTypeDefiner : SaveableTypeDefiner`：**写在同目录另一个文件里但嵌套在本类的末尾**——这是最容易看漏源码结构的地方。
- `[SaveableField(1,7,8)]`：`_hideout`、`_raiderParties`、`_rescueFamilyQuestState`。`_radagos` / `_hideoutBoss` / `_targetSettlementForSiblings` 都不存档，靠读档钩子重新从 `StoryModeHeroes` 取。
- `private enum RescueFamilyQuestStateEnum`：七态。

## 使用示例

```csharp
// 战斗状态推进：只有真正打赢或撤退才继续对话，失败即判定
private void OnHideoutBattleCompleted(BattleSideEnum winnerSide,
    HideoutEventComponent hideoutEventComponent, HideoutEventComponent.HideoutBattleEndState battleEndState)
{
    Settlement s = hideoutEventComponent.MapEvent.MapEventSettlement;
    if (s != this._hideout) return;
    MobileParty attacker = s.LastAttackerParty;
    if (attacker == null || !attacker.IsMainParty) return;
    if (this._rescueFamilyQuestState != RescueFamilyQuestStateEnum.HideoutBattleInProgress) return;

    if (battleEndState > HideoutEventComponent.HideoutBattleEndState.Defeated &&
        battleEndState - HideoutEventComponent.HideoutBattleEndState.Victory <= 1)
    {
        CampaignMapConversation.OpenConversation(
            new ConversationCharacterData(CharacterObject.PlayerCharacter, null, true, true, false, false, false, false),
            new ConversationCharacterData(StoryModeHeroes.RadagosHenchman.CharacterObject, null, true, true, false, false, false, false));
    }
}
```

## 风险与边界

**不可逆的全局标记**：`FamilyRescued = true` 在构造期就写死，即使任务随后失败或读档回退也无法自动撤销——它同时控制 `RescueFamilyQuestBehavior.CanHaveCampaignIssuesInfoIsRequested`。**超时路径杀人**：`OnTimedOut` 会 `KillCharacterAction.ApplyByRemove` 干掉三个弟妹，虽然正常流程下 `CampaignTime.Never` 不会触发，但任何 mod 缩短了时限就会直接杀掉主角家人。存档迁移层是**硬编码 SaveId 的手工映射**（`GetMemberValueBySaveId(2/3/4/5)`），如果自定义存档系统改变了 id 分配，这个回调会读到错误的值。`_targetSettlementForSiblings` 不存档，每次读档重新搜索——如果玩家读档时地图上已经没有符合条件的城镇，会退化成"任意随机城镇"，弟妹可能被丢到玩家完全不认识的地方。

## 依赖关系

- [RescueFamilyQuestBehavior（唯一创建者）](../RescueFamilyQuestBehavior)
- [RebuildPlayerClanQuestBehaviorTypeDefiner（嵌套在本类末尾的存档注册）](../RebuildPlayerClanQuestBehaviorTypeDefiner)
- [FindHideoutTutorialQuest（Radagos 首次出场的教程任务）](../FindHideoutTutorialQuest)
- [CampaignEvents（HideoutBattleCompleted / OnMissionStartedEvent 等）](../../campaign/CampaignEvents)