---
title: "TournamentManager"
description: "战役中锦标赛子系统的运行时登记与结算中枢：维护进行中的 TournamentGame、全球冠军排行榜，并在玩家加入/观战/获胜时触发事件。模组应读取它的状态或订阅事件，而不是自己重造锦标赛流程。"
---

# TournamentManager

**Namespace:** `TaleWorlds.CampaignSystem.TournamentGames`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TournamentManager : ITournamentManager`
**Base:** `ITournamentManager`
**源文件路径:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentManager.cs`

## 一句话职责

它是整局战役里所有「进行中锦标赛」和「全球锦标赛排行榜」的运行时登记表：登记由 `TournamentCampaignBehavior` 创建的 `TournamentGame`、在玩家参与或比赛结束时更新状态，并对外广播锦标赛事件。

## 心智模型

把 `TournamentManager` 理解成战役（Campaign）层里一块**被动的登记表 + 计分板**，而不是锦标赛流程的驱动者。真正的流程编排在 `TournamentCampaignBehavior`（按日 tick、按城镇创建 `TournamentGame`）和 SandBox 的 `TournamentBehavior`（在 Mission 里跑实际比赛）手里；这个 manager 只负责两件事：维护 `_activeTournaments` 列表、维护 `_worldWideTournamentLeaderboard` 字典。它自身**没有** `Update`/`DailyTick`，也不会主动生成比赛。整局战役只有一个实例，挂在 `Campaign.Current.TournamentManager` 上，由 `Campaign` 在开局时构造、随存档一起序列化。模组对它正确的用法永远是「读状态 + 订阅广播事件」，任何想绕过 `TournamentCampaignBehavior` 直接造一场锦标赛的尝试都会和原版调度抢状态。

## 何时用 / 何时不要用

**用：**
- 判断某座城镇此刻有没有正在进行的锦标赛（`GetTournamentGame`）。
- 遍历 `Town.AllTowns` 收集当前所有赛程中的赛事。
- 读取全球排行榜、`MainHero` 的名次或当前冠军（`GetLeaderboard` / `GetLeaderBoardRank` / `GetLeaderBoardLeader`）。
- 观察锦标赛结果：订阅 `CampaignEventDispatcher.Instance.OnTournamentFinished` / `OnTournamentCancelled` / `OnTournamentStarted`。

**不要用：**
- 不要在 Mission 进行中调用 `AddTournament` / `RemoveTournament` 去手动插入或抽走一场比赛——这会和 `TournamentCampaignBehavior` 的调度、UI 的 nameplate 检查（`GetTournamentGame(town) != null`）产生竞争。
- 不要自己写一套「谁赢了、给什么奖励」的逻辑去替换 `ResolveTournament` / `GivePrizeToWinner`，原版对奖品、金币流向（`GiveGoldAction`）、主角队伍物品栏的处理都在这里，自己重造既重复又容易坏档。
- 不要为了改排行榜而直接改 `Hero` 的字段，应走 `AddLeaderboardEntry` / `DeleteLeaderboardEntry` 这套受 manager 管控的入口。

## 依赖

- 上游 — 持有者：[Campaign](../../campaign/Campaign)（`Campaign.Current.TournamentManager` 取得实例）；调度者 [TournamentCampaignBehavior](../TournamentCampaignBehavior) 按日创建并结算赛事。
- 上游 — 赛事实体：[TournamentGame](../TournamentGame) 是被登记进 `_activeTournaments` 的对象；奖品、参赛队伍都从它读取。
- 下游 — 模拟与奖励：[TournamentModel](../TournamentModel) 提供 `GetTournamentSimulationScore` / `GetSkillXpGainFromTournament`，`ResolveTournament` 内部据此算出 AI 胜者。
- 关联 — 城镇与英雄：`Town` / [Settlement](../../campaign/Settlement) 用于定位赛事，[Hero](../../campaign/Hero) 是排行榜的键。
- 关联 — 广播：`CampaignEventDispatcher`（在 `AddTournament`、`OnPlayerJoin*`、`ResolveTournament` 中派发 `OnTournamentStarted` / `OnPlayerJoinedTournament` / `OnTournamentFinished` / `OnTournamentCancelled`）。
- 存档 — 两个状态字段均带 `[SaveableField]`，随 `Campaign` 一起序列化（见 [doc-contract](../../../architecture/doc-contract) 的存档约束）。

## 风险

- **生命周期不在你手里。** manager 不主动 tick。一场赛事的「创建→进行→结算」由 `TournamentCampaignBehavior` 按日推进；在错误时机（例如某城镇刚被围城）读到的 `GetTournamentGame` 可能下一 tick 就被 `ResolveTournament` 移除或转为 `OnTournamentCancelled`。依赖「此刻有比赛」前先判空。
- **在比赛进行中改动会坏状态。** `OnPlayerJoinTournament` / `OnPlayerWatchTournament` 内部会 `GetTournamentGame(town)` 后立刻 `_activeTournaments.Remove(...)`。若模组在玩家加入同一场赛事的瞬间并发调用 `AddTournament` 或手动改列表，会造成列表状态和 UI nameplate（同样查 `GetTournamentGame`）不一致。
- **存档字段是真实可序列化状态。** `_activeTournaments` 与 `_worldWideTournamentLeaderboard` 都进存档。通过反射或自定义 Action 直接塞入未被 `SaveableObjectSystem` 登记的对象，会在读档时反序列化失败；排行榜的 `Hero` 键若指向已死亡/被移除的英雄，读档后 `GetLeaderboard` 仍能返回，但 `GetLeaderBoardRank` 对未上榜英雄返回 `0`（见下），别把它和「第 0 名」混淆。
- **引用已淘汰的参赛者。** `ResolveTournament` 在 `!town.IsUnderSiege` 时才会模拟并派发 `OnTournamentFinished`；围城时只派发 `OnTournamentCancelled` 然后 `RemoveTournament`。任何缓存了 `TournamentGame` 引用、却在「被取消」之后仍去读其 `Prize` / 参赛队伍的代码，拿到的是一场已被从列表移除的悬空赛事。
- **排行榜查询的边界值。** `GetLeaderBoardRank(hero)` 实现是 `FindIndex(...) + 1`：英雄未上榜时 `FindIndex` 返回 `-1`，于是返回 `0`，而不是 `-1` 或 `int.MaxValue`。把 `0` 当「第 0 名」会误导 UI。

## 主要成员

按主题分组；每个成员给出**用途 + 副作用 + 何时调用**。

### 锦标赛登记与查询

**`AddTournament(TournamentGame game)`**
- 用途：把一个新建的赛事加入 `_activeTournaments`。
- 副作用：派发 `OnTournamentStarted(game.Town)`，UI nameplate 据此显示「本城有赛事」。
- 何时调用：由 `TournamentCampaignBehavior` 创建 `TournamentGame` 后调用；模组通常不需要自己调用。

**`RemoveTournament(TournamentGame game)`**
- 用途：从 `_activeTournaments` 移除赛事。
- 副作用：无事件、无奖励处理——只是摘掉登记。
- 何时调用：结算或被取消时由 `ResolveTournament` 调用；不要在外面单独调用，否则奖励/事件不会触发。

**`GetTournamentGame(Town town)`**
- 用途：返回该城镇当前进行中的 `TournamentGame`（列表里 `x.Town == town` 且非 null 的第一项），没有则 `null`。
- 副作用：无。
- 何时调用：任何想「按城镇查当前赛事」的地方——UI、作弊指令、Issue 行为都这么用；调用前务必判空。

### 玩家参与回调

这四个 `OnPlayer*` 方法由 SandBox 的 `TournamentBehavior`（Mission 逻辑）在对应时刻调用，**模组一般不直接调**，但理解它们能知道状态何时变化：

**`OnPlayerJoinMatch(Type gameType)` / `OnPlayerWinMatch(Type gameType)`**
- 用途：目前是空实现，仅作为接口占位；不改动任何状态。
- 副作用：无。
- 何时调用：玩家进入一场比赛的 Mission / 赢下一场比赛时由 `TournamentBehavior` 触发。

**`OnPlayerJoinTournament(Type gameType, Settlement settlement)`**
- 用途：记录玩家以参赛者身份加入。
- 副作用：派发 `OnPlayerJoinedTournament(town, isParticipant: true)`，并 `_activeTournaments.Remove(GetTournamentGame(town))`——加入即把该城赛事从「进行中」摘掉。
- 何时调用：`TournamentCampaignBehavior` 在玩家选「参赛」菜单项时调用。

**`OnPlayerWatchTournament(Type gameType, Settlement settlement)`**
- 用途：记录玩家以观战身份加入。
- 副作用：派发 `OnPlayerJoinedTournament(town, isParticipant: false)`，同样移除该城赛事登记。
- 何时调用：玩家选「观战」时调用；注意观战也会让 `GetTournamentGame` 随后返回 `null`。

### 结算与奖励

**`ResolveTournament(TournamentGame tournament, Town town)`**
- 用途：结算一场 AI 模拟的赛事。
- 副作用：若城镇未被围城，调用 `SimulateTournament` 选出胜者（英雄胜者会 `AddLeaderboardEntry` + `GivePrizeToWinner`），并派发 `OnTournamentFinished`；若被围城，只派发 `OnTournamentCancelled`。最后 `RemoveTournament`。
- 何时调用：由 `TournamentCampaignBehavior` 在每日 tick 中、对该城到期赛事调用；模组不要手动调，以免重复发奖。

**`GivePrizeToWinner(TournamentGame tournament, Hero winner, bool isPlayerParticipated)`**
- 用途：把奖品发给胜者。
- 副作用：非玩家参与时先 `tournament.UpdateTournamentPrize(isPlayerParticipated)`；若胜者属于主角队伍，奖品进 `MainParty` 物品栏；否则由 `GiveGoldAction` 给其氏族首领发金币（金额按 `town.MarketData.GetPrice(prize)`）。
- 何时调用：由 `ResolveTournament`（AI 胜者）和 `TournamentBehavior`（玩家胜者，`isPlayerParticipated: true`）调用。

### 全球排行榜

**`GetLeaderboard()`**
- 用途：返回按胜场数降序排列的 `List<KeyValuePair<Hero, int>>`。
- 副作用：无（每次都重新排序生成新列表）。
- 何时调用：排行榜 UI、成就/统计行为都读它；返回的是新列表，可安全遍历。

**`GetLeaderBoardRank(Hero hero)`**
- 用途：返回该英雄在排行榜上的名次（1 起）。
- 副作用：无；**未上榜返回 `0`**（见风险）。
- 何时调用：查 `Hero.MainHero` 名次时（`StatisticsCampaignBehavior` 这么用）。

**`GetLeaderBoardLeader()`**
- 用途：返回胜场最多的英雄；并列或空表时返回 `null`。
- 副作用：无。
- 何时调用：需要「当前锦标赛冠军」时（`TournamentCampaignBehavior` 据此发成就）。

**`InitializeLeaderboardEntry(Hero hero, int initialVictories = 0)`**
- 用途：为新英雄写入初始胜场（默认 0）。
- 副作用：直接覆盖 `_worldWideTournamentLeaderboard[hero]`。
- 何时调用：`TournamentCampaignBehavior` 在游戏开局为 `Hero.MainHero` 建初始条目。

**`AddLeaderboardEntry(Hero hero)`**
- 用途：该英雄胜场 +1（未登记时从 0 起加）。
- 副作用：写 `_worldWideTournamentLeaderboard`——这是进存档的状态。
- 何时调用：玩家或 AI 英雄赢下锦标赛时由 `ResolveTournament` / `TournamentBehavior` 调用。

**`DeleteLeaderboardEntry(Hero hero)`**
- 用途：从排行榜移除该英雄。
- 副作用：仅当键存在时才移除；不存在则静默跳过。
- 何时调用：`TournamentCampaignBehavior` 在英雄死亡（victim）时调用，避免排行榜挂死人。

## 最小真实示例

下面的代码全部用真实 API：管理器从 `Campaign.Current.TournamentManager` 取得，赛事按 `Settlement.CurrentSettlement.Town` / `Town.AllTowns` 定位，排行榜读真实集合。

```csharp
using System.Linq;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.CampaignSystem.TournamentGames;

// 整局战役唯一实例，由 Campaign 持有；接口类型即可，无需强转具体类
ITournamentManager tournamentManager = Campaign.Current.TournamentManager;

// 1) 玩家当前所在城镇是否正在举办锦标赛？
Town currentTown = Settlement.CurrentSettlement?.Town;
TournamentGame activeHere = currentTown != null
    ? tournamentManager.GetTournamentGame(currentTown)
    : null;

if (activeHere != null)
{
    // activeHere.Prize 是该场奖品；可继续读参赛队伍等
    ItemObject prize = activeHere.Prize;
}

// 2) 遍历所有城镇，收集此刻处于赛程中的全部锦标赛
var runningTournaments = Town.AllTowns
    .Select(t => tournamentManager.GetTournamentGame(t))
    .Where(g => g != null)
    .ToList();

// 3) 读取全球排行榜，并查询主角名次与当前冠军
System.Collections.Generic.List<System.Collections.Generic.KeyValuePair<Hero, int>> leaderboard =
    tournamentManager.GetLeaderboard();

int mainHeroRank = tournamentManager.GetLeaderBoardRank(Hero.MainHero); // 未上榜返回 0，不是 -1
Hero topChampion = tournamentManager.GetLeaderBoardLeader();            // 空表返回 null

// 4) 观察锦标赛结果：订阅 CampaignEventDispatcher 广播，而非轮询
CampaignEventDispatcher.Instance.OnTournamentFinished += (winner, participants, town, prizeItem) =>
{
    // winner 是夺冠 CharacterObject；town 是举办城镇；prizeItem 是奖品
    if (winner.IsHero && winner.HeroObject == Hero.MainHero)
    {
        // 主角刚赢下一场锦标赛，可在此做自定义反馈
    }
};
```

> 注意第 4 点的事件订阅应在你的 `CampaignBehavior` 内、随行为生命周期注册/注销；不要在任何一次性代码路径里重复 `+=`，否则每次进入都会叠加回调。

## 导航

- ↑ Parent：[campaign-ext 模块索引](../)
- ↔ Sibling：[TournamentGame](../TournamentGame) · [TournamentCampaignBehavior](../TournamentCampaignBehavior) · [TournamentModel](../TournamentModel)
- 上游：[Campaign](../../campaign/Campaign) · [Settlement](../../campaign/Settlement) · [Hero](../../campaign/Hero)
- 相关：[存档约束](../../../architecture/doc-contract) · [TournamentWonLogEntry](../TournamentWonLogEntry)
