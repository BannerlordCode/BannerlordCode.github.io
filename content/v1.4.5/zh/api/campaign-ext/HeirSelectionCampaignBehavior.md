---
title: "HeirSelectionCampaignBehavior"
description: "主角（MainHero）死亡或被替换时的政权交接与游戏结束流程：计算继承人并弹出选择面板，或执行灭族与 GameOver；并在更替前后把旧主角的物品、装备与巷子转移给新主角——纯反应式、无持久状态。"
---
# HeirSelectionCampaignBehavior

**类型：** class `HeirSelectionCampaignBehavior` : `CampaignBehaviorBase`
**命名空间：** `TaleWorlds.CampaignSystem.SandBox.CampaignBehaviors`
**模块：** `SandBox`
**源文件：** `bannerlord-1.4.5/Bannerlord.Source/Modules.SandBox/SandBox/SandBox.CampaignBehaviors/HeirSelectionCampaignBehavior.cs`

## 概述

`HeirSelectionCampaignBehavior` 管的是游戏中「主角（MainHero）这条命走到尽头」时发生的一切：当主角即将死亡时，它先向 `Clan.GetHeirApparents()` 索取继承人候选；若有继承人则弹出继承人选择面板（`OnHeirSelectionRequested`），由玩家挑一位接棒；若无继承人则直接走灭族与游戏结束（`OnGameOver` + `GameOverState`）。另两条事件链路负责「主角更替」时的资产过户——更替前把 `MobileParty.MainParty` 的物品名册与旧主角的战斗/民用装备快照进两个 `ItemRoster`，更替后再把这批遗产连同旧主角拥有的巷子（`Alley`）一并转交给新主角。它是典型的「纯反应式」CampaignBehavior：不在 `SyncData` 里存任何字段，所有遗产快照都只在单次事件序列内临时持有，是学习「死亡/换人流程 + 资产转移 + 正确走 Action 改世界」的精简范例。

## 心智模型

把它想成「主角谢幕时的资产公证人与灭族执行人」，全部活动都发生在**战役层（Campaign layer）**，不切入任何 Mission 或 Location。

- **生命周期**：战役启动后由 `CampaignBehaviorManager` 实例化并挂进 `CampaignGameStarter`；`RegisterEvents` 订阅四个事件后即常驻，直到战役结束。它自身不持有任何需要跨档保留的状态——`SyncData` 是空实现，这意味着它不制造「坏档字段」，但反过来也意味着遗产快照无法穿越一次存读档。
- **谁持有实例**：与所有 CampaignBehavior 一样，由战役系统在 `InitializeCampaign` 阶段统一创建与注册，mod 不应自己 `new`，而应通过 `Campaign.Current.GetCampaignBehavior<T>()` 取用或继承扩展。
- **两个相位**：①「死亡相位」`OnBeforeMainCharacterDied` 决定「灭族」还是「选继承人」；②「换人相位」`OnBeforePlayerCharacterChanged` → `OnPlayerCharacterChanged` 负责遗产过户。两相位是独立触发的：自然老死走相位①的继承人分支，而 MOD 或剧情强制换主角走相位②，二者通过 `OnPlayerCharacterChanged` 与 `OnHeirSelectionOver` 收尾衔接。
- **它不决定谁是继承人**：资格判定完全委托给 `Clan.GetHeirApparents()`；它只消费这个结果，并把最终选定的继承人交给 `ApplyHeirSelectionAction.ApplyByDeath`。

## 何时使用 / 何时不要使用

- **用**：你想理解或扩展官方「主角死亡 → 继承人选择 / 游戏结束」与「换主角时物品过户」的完整流程；或想在其钩子里追加派系、资产处置逻辑（例如继承人在选定后给一笔启动金）。
- **不要用**：想直接操控继承资格、关系或金币——资格走 `Clan.GetHeirApparents()`，世界变更走 `ApplyHeirSelectionAction` / `GiveGoldAction` / `EndCaptivityAction` 等，不要直接改 `Hero.Clan` / `Hero.Gold` / `ItemRoster` 字段（会绕过事件与坏档保护）；想在非战役语境（如 Mission、菜单脚本）里触发继承人选择——`OnBeforeMainCharacterDied` 强依赖 `PlayerEncounter` 与 `Campaign.Current.CurrentMenuContext` 等战役状态，脱离战役上下文调用会空引用或逻辑错乱。

## 依赖

- 上游（提供数据/事件/基类）：
  - [CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与存读档契约；本类 `SyncData` 为空实现）
  - [CampaignEvents](../../campaign/CampaignEvents)（订阅 `OnBeforeMainCharacterDiedEvent`、`OnBeforePlayerCharacterChangedEvent`、`OnPlayerCharacterChangedEvent`、`OnHeirSelectionOverEvent`；并通过 `CampaignEventDispatcher` 派发 `OnHeirSelectionRequested` / `OnGameOver`）
  - [Hero](../../campaign/Hero)（`Hero.MainHero`、`AddDeathMark`、`OwnedAlleys`、`Gold`、战斗/民用 `Equipment`）
  - [Clan](../../campaign/Clan)（`Hero.MainHero.Clan`、`Clan.PlayerClan`、`GetHeirApparents()`、`Kingdom`）
  - [MobileParty](../../campaign/MobileParty)（`MobileParty.MainParty` 的 `ItemRoster` / `Party.MemberRoster`）
  - [Campaign](../../campaign/Campaign)（`Campaign.Current.OnGameOver()`、`CurrentMenuContext`、`MainParty`、`CameraFollowParty`）
- 下游（世界变更通道，本类全部经由它们改状态）：
  - [GiveGoldAction](../GiveGoldAction)（灭族时把主角金币付给「世界」，收款方为 `null`）
  - [KillCharacterAction](../KillCharacterAction)（传入的 `KillCharacterActionDetail` 决定死亡标记；其 `ApplyByDeath` 由 `EndCaptivityAction` / `ApplyHeirSelectionAction` 间接调用）
- 相关事件与 Action（未单列页面，仅以类型名引用）：
  - `ApplyHeirSelectionAction.ApplyByDeath(selectedHeir)`——继承人选定后的落地动作
  - `EndCaptivityAction.ApplyByDeath(Hero.MainHero)`——主角若仍是囚犯，先解除囚禁
  - `DestroyKingdomAction.ApplyByKingdomLeaderDeath(...)`——主角身兼王国领袖且无继承人时解散王国
  - `PlayerEncounter.Finish` / `GameMenu.ExitToLast`——收尾时退场与退出菜单上下文

## 风险

- **`SyncData` 为空但遗产快照不持久**：`_itemsThatWillBeInherited` / `_equipmentsThatWillBeInherited` 是普通实例字段，未登记进 `IDataStore`。正常情况下 `OnBeforePlayerCharacterChanged`（捕获）与 `OnPlayerCharacterChanged`（落地）在同一次换人序列内连续触发，期间不会存档，因此无碍；但若某个 mod 把换人拆成跨存档的两段、或在捕获后强制存档再读档，遗产快照会丢失，旧主角的物品/装备不会过户给新主角。扩展时若缓存了需跨档的状态，务必补 `SyncData`。
- **灭族分支会清空主力部队**：`OnBeforeMainCharacterDied` 在无继承人时把 `MobileParty.MainParty.Party.MemberRoster` 里除玩家角色外的所有兵种移除，并 `GameOverCleanup` 清空物品/囚犯名册、隐藏并停用 `MainParty`。任何想在「游戏结束」后仍读取主角部队状态的 mod 都会拿到空名册。
- **`GameOverCleanup` 会解散你统领的王国**：若 `Hero.MainHero.MapFaction.IsKingdomFaction` 且 `Clan.PlayerClan.Kingdom.Leader == Hero.MainHero`，会调用 `DestroyKingdomAction.ApplyByKingdomLeaderDeath`。想自定义「领袖死亡后王国去向」的 mod 必须早于本行为介入，否则王国已被解散。
- **tick 阶段正确性**：`OnBeforeMainCharacterDied` 在 `KillCharacterAction` 真正生效**之前**触发（事件名即 `OnBefore...`），此时 `Hero.MainHero` 尚未被标记为「已故」，`GetHeirApparents()` 的资格判定基于换人前的家族状态；若你在此钩子里修改了家族/亲属关系，会影响后续继承人计算的输入。
- **引用已死亡 / 无 clan 的英雄**：`OnBeforeMainCharacterDied` 直接读 `Hero.MainHero.Clan.GetHeirApparents()`；理论上进入此流程时主角必然有 `Clan`，但 fork 或在异常剧情下若 `Clan` 为 `null`（例如未建立家族的主角），会抛出空引用——这是最易在自定义「换人」路径里踩到的边界。
- **继承人资格边界**：判定权完全交给 `Clan.GetHeirApparents()`。若你的 mod 修改了亲属图（收养、联姻、处决亲属），却期望本行为沿用旧资格，会与你预期不符——它永远以「当下 `Clan` 的继承人候选」为准。

## 成员

### RegisterEvents() — 订阅四事件
战役启动时由基类约定调用。订阅 `OnBeforeMainCharacterDiedEvent → OnBeforeMainCharacterDied`、`OnBeforePlayerCharacterChangedEvent → OnBeforePlayerCharacterChanged`、`OnPlayerCharacterChangedEvent → OnPlayerCharacterChanged`、`OnHeirSelectionOverEvent → OnHeirSelectionOver`。四个监听缺一不可：少了死亡监听就不会触发选继承人/灭族，少了换人两个监听遗产就不过户。

### OnBeforeMainCharacterDied(Hero, Hero, KillCharacterActionDetail, bool) — 死亡分派（核心）
在主角被「杀死」动作生效**前**触发。先 `Hero.MainHero.Clan.GetHeirApparents()` 取继承人候选并 `AddDeathMark`，随后分两支：
- **无继承人**：结束 `PlayerEncounter`、把主力部队（除玩家角色外）从 `MemberRoster` 移除、派发 `OnGameOver`、`GameOverCleanup()`、`ShowGameStatistics()`、`Campaign.Current.OnGameOver()`。
- **有继承人**：若主角是囚犯先 `EndCaptivityAction.ApplyByDeath` 解除囚禁，结束 `PlayerEncounter`，再派发 `OnHeirSelectionRequested(heirApparents)` 弹出选择面板。
最后若处于菜单上下文则 `GameMenu.ExitToLast()`。副作用极大（可触发整个游戏结束），仅在主角真正濒死时由引擎调用。

### OnBeforePlayerCharacterChanged(Hero oldPlayer, Hero newPlayer) — 遗产快照
换主角**前**触发。把 `MobileParty.MainParty.ItemRoster` 全部元素拷入 `_itemsThatWillBeInherited`，并把 `oldPlayer` 的 12 格战斗/民用 `Equipment` 中非空格子计入 `_equipmentsThatWillBeInherited`。纯快照、无世界变更，仅在换人序列开头由引擎调用。

### OnPlayerCharacterChanged(Hero, Hero, MobileParty, bool) — 遗产落地
换主角**后**触发。把 `oldPlayer.OwnedAlleys` 逐个 `SetOwner(newPlayer)` 过户巷子；若 `isMainPartyChanged` 为真，把 `_itemsThatWillBeInherited` 加进 `newMainParty.ItemRoster`，并无论是否换队都把 `_equipmentsThatWillBeInherited` 加进 `newMainParty.ItemRoster`，随后清空两个快照名册。副作用是旧主角的物品、装备、巷子全部转移给新主角。

### OnHeirSelectionOver(Hero selectedHeir) — 继承人落地
玩家在面板选定继承人后触发。仅一行：`ApplyHeirSelectionAction.ApplyByDeath(selectedHeir)`——把选定者正式设为新主角。是死亡相位与换人相位的衔接点。

### ShowGameStatistics() / GameOverCleanup() — 灭族收尾
`ShowGameStatistics()` 弹出「Clan Destroyed / 无合适继承人，家族就此消亡」的 `InquiryData`，确认后创建并推入 `GameOverState`（reason = 1）。`GameOverCleanup()` 用 `GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, Hero.MainHero.Gold, true)` 销毁金币、清空主力物品/成员/囚犯名册、隐藏并停用 `MainParty`、解除相机跟随，并在主角是王国领袖时 `DestroyKingdomAction.ApplyByKingdomLeaderDeath`。二者只在无继承人分支被调用。

## 示例

复刻「主角濒死」时本行为的两支判定（真实 API，取自源文件逻辑）：

```csharp
// 1) 先向家族索取继承人候选，并给主角打上死亡标记
Dictionary<Hero, int> heirApparents = Hero.MainHero.Clan.GetHeirApparents();
Hero.MainHero.AddDeathMark(killer, detail);

if (heirApparents.Count == 0)
{
    // 无继承人：灭族并游戏结束
    GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, null, Hero.MainHero.Gold, true);
    Campaign.Current.MainParty.Party.ItemRoster.Clear();
    Campaign.Current.MainParty.Party.MemberRoster.Clear();
    Campaign.Current.OnGameOver();
}
else
{
    // 有继承人：弹出继承人选择面板（玩家挑定后会回调 OnHeirSelectionOver）
    if (Hero.MainHero.IsPrisoner)
        EndCaptivityAction.ApplyByDeath(Hero.MainHero);
    CampaignEventDispatcher.Instance.OnHeirSelectionRequested(heirApparents);
}
```

在自定义 Behavior 里监听继承人选定，给新领主追加一笔启动金（永远走 `GiveGoldAction`，不直改 `Gold`）：

```csharp
CampaignEvents.OnHeirSelectionOverEvent.AddNonSerializedListener(this, OnHeirSelected);

private void OnHeirSelected(Hero selectedHeir)
{
    if (Clan.PlayerClan.Leader != selectedHeir)
        return;
    int gold = Hero.MainHero.Gold / 2;
    GiveGoldAction.ApplyBetweenCharacters(Hero.MainHero, selectedHeir, gold, true);
}
```

## 导航

- ↑ 父级：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase)（基类与存读档契约；本类 `SyncData` 为空实现，是对照范本）
- ↔ 兄弟：[RetirementCampaignBehavior](../RetirementCampaignBehavior)（同样处理主角退场/交接）、[CompanionDismissCampaignBehavior](../../gameplay/CompanionDismissCampaignBehavior)（英雄离队处置）、[PrisonBreakCampaignBehavior](../PrisonBreakCampaignBehavior)（另一条「英雄状态变更 → 走全套 Action」流程）
- 相关：[CampaignEvents](../../campaign/CampaignEvents)（四事件订阅与 `OnHeirSelectionRequested` / `OnGameOver` 派发）、[Hero](../../campaign/Hero) 与 [Clan](../../campaign/Clan)（`GetHeirApparents` 资格判定）、[GiveGoldAction](../GiveGoldAction) 与 [KillCharacterAction](../KillCharacterAction)（世界变更通道）
