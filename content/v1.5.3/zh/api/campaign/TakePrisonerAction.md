---
title: "TakePrisonerAction"
description: "静态 Action 类，让你把一名英雄安全地变为俘获方的俘虏：同步原部队名册、囚禁时间与玩家被俘剧情，并派发俘获事件。"
---

# TakePrisonerAction

**命名空间：** `TaleWorlds.CampaignSystem.Actions`
**Type:** `public static class TakePrisonerAction`
**Source:** `TaleWorlds.CampaignSystem/Actions/TakePrisonerAction.cs`

## 概述

TakePrisonerAction 是战役层负责「俘获英雄」的唯一正规入口。一名英雄被俘不是改一个状态字段那么简单：他必须从原部队名册里移除（如果他还是领袖，要先摘掉领袖身份），囚禁起始时间要记录，角色状态要切成 `Prisoner`，俘获方的俘虏栏要加人；如果被俘的是玩家本人，还要连带触发 `PlayerCaptivity.StartCaptivity`、解除部队混乱状态、销毁海上舰队。最后，`OnHeroPrisonerTaken` 事件要派发出去——赎金谈判、俘虏逃跑、任务条件全挂在它上面。直接改字段会漏掉这一整条连锁反应，所以游戏把全部逻辑收敛到 `ApplyInternal`，对外只开两个语义化入口。

## 心智模型

结构是「2 个语义化入口 → 1 个内部实现」。两个入口的区别在于「场景」而非「逻辑」：

- `Apply(capturerParty, prisonerCharacter)` 是常规俘获：战斗结算、剧情脚本、任务奖励里「把某个英雄关起来」都走它，`isEventCalled` 传 true，俘获完成后派发 `OnHeroPrisonerTaken`。
- `ApplyByTakenFromPartyScreen(roster)` 来自部队界面：玩家在战后结算界面批量勾选俘虏，它遍历 `FlattenedTroopRoster`，对名册里每个 `IsHero` 的元素以 `PartyBase.MainParty` 为俘获方调用 `ApplyInternal`，最后再整体派发一次 `OnPrisonerTaken(roster)`。

`isEventCalled` 这个参数为什么存在：`ApplyInternal` 内部在状态变更完成后会派发 `OnHeroPrisonerTaken`，但调用方有时打算自己派发另一个事件（比如批量场景下的 `OnPrisonerTaken`），这时就可以传 false 抑制内部派发，避免同一场俘获被通知两次。当前两个公开入口都传 true——批量入口的选择是「每个英雄各派一次单英雄事件 + 末尾一次名册事件」，而不是靠 false 来去重。

mod 应该用 `Apply` 处理单个英雄，用 `ApplyByTakenFromPartyScreen` 处理名册批量场景；不要反射调 `ApplyInternal`，因为 MainHero 被俘时的特殊剧情分支只在它里面。

## 怎么用

### 怎么拿到它

静态类，没有实例、不能 new。直接 `TakePrisonerAction.Apply(...)` 或 `TakePrisonerAction.ApplyByTakenFromPartyScreen(...)` 调用。

### 典型用法

1. 战斗结算后俘获敌方领主：`Apply(获胜方部队, 敌方领主英雄)`。
2. 战后结算界面批量俘获：`ApplyByTakenFromPartyScreen(名册)`，一次处理玩家勾选的所有英雄。
3. 剧情或任务强制俘获某个 NPC：`Apply`，事件会通知所有监听者。
4. 玩家被俘：对 `Hero.MainHero` 调 `Apply` 会连带触发 `PlayerCaptivity.StartCaptivity` 与舰队销毁，进入俘虏剧情。

### 最容易踩的坑

1. `ApplyByTakenFromPartyScreen` 的俘获方固定是 `PartyBase.MainParty`：它只适用于「玩家部队界面」场景，想以其它部队为俘获方必须用 `Apply` 逐个调。
2. 批量入口的事件量是 N+1：名册里有 N 个英雄就会派发 N 次 `OnHeroPrisonerTaken`（`ApplyInternal` 里 `isEventCalled=true`），末尾再派发 1 次 `OnPrisonerTaken(roster)`——监听事件的 mod 要按这个量级设计。
3. 俘获领袖会先 `RemovePartyLeader`：原部队可能因此失去领袖，后续若依赖 `LeaderHero` 会拿到 null。
4. 对 `Hero.MainHero` 用 `Apply` 等于直接启动玩家俘虏剧情（`PlayerCaptivity.StartCaptivity` + 销毁舰队），在战役早期误用会跳进俘虏流程。
5. 两个入口的事件语义不同：`Apply` 只派单英雄事件，批量入口派单英雄事件 + 名册事件；混用或替换会导致事件监听器重复或遗漏。

## 关键成员

- **TakePrisonerAction**（`TakePrisonerAction.cs:9`）— `public static class`，位于 `TaleWorlds.CampaignSystem.Actions` 命名空间；全部成员静态，不能实例化。
- **ApplyInternal**（`TakePrisonerAction.cs:12`）— 唯一真正改状态的私有实现：从原部队移除英雄（领袖先 `RemovePartyLeader`）、记录 `CaptivityStartTime`、`ChangeState(Prisoner)`、`capturerParty.AddPrisoner`；若被俘者是 MainHero 则触发 `PlayerCaptivity.StartCaptivity` 并销毁舰队；`isEventCalled` 为 true 时派发 `OnHeroPrisonerTaken`。
- **Apply**（`TakePrisonerAction.cs:51`）— 常规俘获入口，`isEventCalled` 传 true；战斗结算、剧情脚本、任务奖励都走它。
- **ApplyByTakenFromPartyScreen**（`TakePrisonerAction.cs:57`）— 部队界面批量入口：遍历 `FlattenedTroopRoster`，对每个 `IsHero` 元素以 `PartyBase.MainParty` 为俘获方调 `ApplyInternal`，最后整体派发 `OnPrisonerTaken(roster)`。

## 真实示例

```csharp
public void CaptureHero(PartyBase capturer, Hero prisoner)
{
    // 常规俘获：把一名英雄关进俘获方的俘虏栏
    TakePrisonerAction.Apply(capturer, prisoner);
}

public void CaptureFromRoster(FlattenedTroopRoster roster)
{
    // 部队界面批量俘获：遍历名册，逐个关押英雄
    TakePrisonerAction.ApplyByTakenFromPartyScreen(roster);
}

public void CaptureLordAfterBattle(PartyBase army, Hero enemyLord)
{
    // 战斗结束后俘获敌方领主
    TakePrisonerAction.Apply(army, enemyLord);
}

public void CaptureAllLords(FlattenedTroopRoster capturedRoster)
{
    // 一次性俘获名册里的所有英雄
    TakePrisonerAction.ApplyByTakenFromPartyScreen(capturedRoster);
}
```

## 参见

- [GiveGoldAction](../GiveGoldAction) —— 同批的金钱转移 Action
- [Campaign](../Campaign) —— 战役层状态与事件总览
- [CampaignEventDispatcher](../CampaignEventDispatcher) —— `OnHeroPrisonerTaken` / `OnPrisonerTaken` 的派发方
- [MapEventHelper](../../core-extra/MapEventHelper) —— 地图事件辅助

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
