---
title: "KingdomManager"
description: "战役层的高层王国协调器：封装王国的创建与退位、封地赏赐与易主、攻城/劫掠结算与雇佣兵结算。所有改动都通过 *Action 落地并触发事件，绝不要直接改 Kingdom/Clan 的字段。"
---

# KingdomManager

**Namespace：** TaleWorlds.CampaignSystem
**Module：** TaleWorlds.CampaignSystem
**Type：** `public class KingdomManager`
**Base：** 无（直接挂在 `Campaign` 单例上的协调器，不是 Behavior，也不是 Model）
**源文件路径：** `TaleWorlds.CampaignSystem/KingdomManager.cs`

## 一句话职责

把"建/毁王国、统治者退位、封地赏赐与易主、攻城与劫掠结算、雇佣兵续约"这些**跨 `Kingdom` / `Clan` 且必须触发事件与 Action** 的高层操作，集中封装成一个由 `Campaign` 持有的协调器，让外部（UI、作弊、Behavior）只需一次调用即可落地一整套一致的副作用。

## 心智模型

`KingdomManager` 是战役（`Campaign`）在启动时为**当前存档**创建并持有的一个协调器，它自身**不存储外交状态的"真相"**——真相分散在 `Kingdom`（`Clans` / `RulingClan` / `ActivePolicies`）、`Clan`、`FactionManager`（派系间的外交姿态 stance）里。它的价值在于：把那些"一步操作要同时更影响度、关系、日志、事件派发和存档边"的流程（如建国时自动对无外交记录的敌对方宣战、退位时要么换统治氏族要么解散王国、攻城胜利时清守军并转移归属）收口成单一入口，并且保证每次变更都经 `CampaignEventDispatcher` 派发事件，使贵族决策、百科、日志都基于同一份一致数据。引擎通过 `CampaignEvents` 把 siege/raid 完成、每日/每小时 tick 回调进来；mod 通常只在 UI 流程或作弊指令里直接调用它的高层方法，核心变更应优先用对应的 `*Action`。

## 何时用 / 何时不要用

**用 `KingdomManager` 的场景**
- 在王国创建/管理的 UI 流程（如玩家自立为王）里调用 `CreateKingdom` / `AbdicateTheThrone` / `GiftSettlementOwnership`，它们已经把正确的 `*Action` 串好。
- 需要"一调用即产生一致后果"的高层操作，而不想自己拼装多个 Action 与事件派发。

**不要用 `KingdomManager` 的场景（正确替代）**
- 想改王国的成员、统治者或战争状态：**不要**直接改 `kingdom.Clans`、`kingdom.RulingClan`，或自己 `new Kingdom(...)` 后手动加族。这会绕过 `*Action` 的副作用（影响度、关系、日志、`CampaignEventDispatcher` 事件、存档边），导致王国/战争状态不一致甚至坏档。改用：
  - 加入/创建/离开王国 → [`../ChangeKingdomAction`](../ChangeKingdomAction)
  - 解散王国 → [`../DestroyKingdomAction`](../DestroyKingdomAction)
  - 宣战 → [`../DeclareWarAction`](../DeclareWarAction)（媾和用同名目录下的 `MakePeaceAction`）
  - 更换统治者 → [`../ChangeRulingClanAction`](../ChangeRulingClanAction)
- 只是读取王国/政策/战争状态：直接读 [`../../campaign/Kingdom`](../../campaign/Kingdom) 的属性即可，无需经过本管理器。

## 依赖

**上游（谁创建 / 持有）**
- [`../../campaign/Campaign`](../../campaign/Campaign) —— `Campaign` 构造函数里 `KingdomManager = new KingdomManager();`，并在会话启动时调用 `RegisterEvents()` 与 `OnSessionStart()`。访问入口是 `Campaign.Current.KingdomManager`。

**下游（本管理器委托落地的 Action）**
- [`../ChangeKingdomAction`](../ChangeKingdomAction) —— 建国、加入、离开王国。
- [`../DestroyKingdomAction`](../DestroyKingdomAction) —— 退位且无其他氏族时解散王国。
- [`../DeclareWarAction`](../DeclareWarAction) —— 建国时对无外交记录的敌对方自动宣战。
- [`../ChangeRulingClanAction`](../ChangeRulingClanAction) —— 退位时转移统治氏族。

**同级 / 相关数据**
- [`../FactionManager`](../FactionManager) —— 派系间外交姿态（和平/战争）的真相存储；`KingdomManager` 的建国/退位操作最终会改变这里记录的 stance。
- [`../../campaign/Kingdom`](../../campaign/Kingdom) · [`../../campaign/Clan`](../../campaign/Clan) · [`../../campaign/Hero`](../../campaign/Hero) —— 被本管理器读取与改写的实体。
- 存档：本管理器与 `PlayerMercenaryServiceNextRenewalDay`、`PrisonerLordRansomOffered` 两字段一起随 `Campaign` 经 `SaveableCampaignTypeDefiner` 序列化（类型 id 54）。

## 风险

- **在战役未就绪时调用会崩溃/拿到脏数据。** `KingdomManager` 只在 `Campaign.Current` 已建立、战役进行中存在。在 `MBSubModuleBase` 初始化、`OnGameStart` 之前或地图事件已 `FinalizeEvent` 之后调用，会遇到 null 或未初始化的 `Kingdom.All`，直接 `NullReferenceException`。
- **绕过 `*Action` 直接改字段 = 坏档温床。** 手动 `new Kingdom`、改 `kingdom.Clans` / `RulingClan`、自己设置战争状态，会跳过影响度、关系、日志与 `CampaignEventDispatcher` 事件派发，使贵族决策基于错误数据，并在读档时因存档边（Saveable 边）不完整而损坏进度。
- **`AbdicateTheThrone` 的前提很硬。** 当王国只剩统治氏族时它会调用 `DestroyKingdomAction` 解散整个王国；源码中还有 `Debug.FailedAssert("Deviation in peace states between ruling clan & kingdom in abdication", ...)`——调用前必须保证统治氏族与王国处于一致的和战状态，否则会在开发构建里触发断言。
- **`CreateKingdom` 会瞬间炸出多场战争。** 它会对创建者"无外交姿态记录"的所有敌对方立即 `DeclareWarAction.ApplyByKingdomCreation`，可能在同一个 tick 内引入大量外交连锁与通知，做 UI 时要给用户预期。
- **siege/raid 回调会做不可逆清理。** `SiegeCompleted` / `RaidCompleted` 由 `CampaignEvents` 驱动，内部会 `RemoveAllSiegeParties`、`Party.MemberRoster.Clear()`、`SetMoveModeHold`。不要在引擎已派发过该事件后手动再调，否则重复清理造成空引用。

## 主要成员

> 多数方法由引擎事件驱动（siege/raid 完成、每日/每小时 tick），mod 很少直接调用；高层"王国变更"方法才是对外主入口。

### 王国生命周期：创建 / 退位 / 解散

#### `CreateKingdom(...)`
**用途**：以某个创始氏族为统治氏族建立一个新王国，自动初始化百科文本/称号，对无外交记录的敌对方宣战，写入初始政策，并派发 `OnKingdomCreated`。
**副作用**：调用 `ChangeKingdomAction.ApplyByCreateKingdom` + 若干 `DeclareWarAction` + `kingdom.AddPolicy` + `CampaignEventDispatcher.Instance.OnKingdomCreated`。
**何时调用**：玩家在"自立为王"UI 流程里点击确认时。

#### `AbdicateTheThrone(Kingdom kingdom)`
**用途**：统治者退位。若王国还有其他非雇佣兵氏族，把统治权交给影响度最高者（`ChangeRulingClanAction`）并追加一个强制的王者选举决策；若仅剩统治氏族，则让其退出王国并对处于交战中的王国补宣战，最后 `DestroyKingdomAction` 解散。
**副作用**：可能修改 `kingdom.Banner`、转移统治氏族、解散王国、改写多方战争状态。
**何时调用**：玩家选择退位时（UI 一按钮），非战斗逻辑中不要手动调。

### 封地归属：赏赐 / 放弃 / 候选

#### `GiftSettlementOwnership(Settlement settlement, Clan receiverClan)`
**用途**：把一块封地无条件赠予某个氏族。
**副作用**：按封地是城镇还是城堡取 `DiplomacyModel` 的关系奖励，调用 `ChangeRelationAction` 改双方领袖关系，再 `ChangeOwnerOfSettlementAction.ApplyByGift` 落地归属。
**何时调用**：封地赏赐弹窗确认时。

#### `RelinquishSettlementOwnership(Settlement settlement)`
**用途**：放弃对某块封地的所有权主张，把它交回王国决策系统。
**副作用**：向 `settlement.OwnerClan.Kingdom` 追加一个 `SettlementClaimantDecision`（忽略影响度消耗），由贵族投票决定归属。
**何时调用**：玩家主动放弃封地主张时。

#### `GetEligibleClansForSettlementOwnershipGift(Settlement settlement)`
**用途**：只读查询——返回有资格接收该封地赏赐的氏族集合。
**副作用**：无（纯查询）。
**何时调用**：在赏赐弹窗里填充候选氏族列表时。

### 战斗结算（引擎事件回调）

#### `SiegeCompleted(Settlement settlement, MobileParty capturerParty, bool isWin, MapEvent.BattleTypes battleType)`
**用途**：攻城（或突围/封锁突围）打赢后做收尾。
**副作用**：计算并授予占领方影响度（`GainKingdomInfluenceAction`），移除围城营、清空守军名册、经 `ChangeOwnerOfSettlementAction.ApplyBySiege` 转移归属、让参战方进驻并禁用 AI 若干小时。
**何时调用**：由 `CampaignEvents.SiegeCompletedEvent` 自动触发，mod 不应手动调。

#### `RaidCompleted(BattleSideEnum winnerSide, RaidEventComponent raidEvent)`
**用途**：村庄劫掠结束后，让攻击/防守方移动体停下，并把村庄状态恢复为正常。
**副作用**：相关 `MobileParty.SetMoveModeHold()`；防守胜利时 `ChangeVillageStateAction.ApplyBySettingToNormal`。
**何时调用**：由 `CampaignEvents.RaidCompletedEvent` 自动触发。

### 雇佣兵与初始化

#### `GetMercenaryWageAmount(Hero hero)`
**用途**：只读——计算某英雄作为雇佣兵的周薪，公式 `(int)(hero.Clan.Influence * hero.Clan.MercenaryAwardMultiplier)`。
**副作用**：无。
**何时调用**：雇佣兵对话/结算 UI 展示周薪时（如 `LordConversationsCampaignBehavior`）。

#### `PlayerMercenaryServiceNextRenewalDay`（字段）
**用途**：玩家雇佣兵服务的下次续约日（战役时间）。由 `StartMercenaryServiceAction` 与 `ClanVariablesCampaignBehavior` 读写，用于判断是否需要续约。
**副作用**：写入后影响后续 tick 是否触发续约逻辑。

#### `OnSessionStart()`
**用途**：新会话/读档开始时刷新所有氏族当前强度，并在从 `< v1.2.0` 升级的旧档上剔除"永久交战"氏族。
**副作用**：调用 `Clan.UpdateCurrentStrength()`，可能经 `ChangeKingdomAction.ApplyByLeaveWithRebellionAgainstKingdom` 让问题氏族叛离。
**何时调用**：由 `Campaign` 在会话启动阶段自动调用，mod 不要手调。

## 最小真实示例

下面所有调用都使用真实存在且可编译的 API；`targetSettlement` / `receiverClan` 为真实变量名，按你的上下文赋值即可。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.Core;
using TaleWorlds.Localization;

// 1) 遍历当前所有王国，读取统治者、封臣数、交战数与已生效政策
//    （纯读取，无需经过 KingdomManager）
foreach (Kingdom kingdom in Kingdom.All)
{
    Clan ruler = kingdom.RulingClan;
    int clanCount = kingdom.Clans.Count;

    int wars = 0;
    foreach (Kingdom other in Kingdom.All)
    {
        if (other != kingdom && kingdom.IsAtWarWith(other))
            wars++;
    }

    MBReadOnlyList<PolicyObject> policies = kingdom.ActivePolicies;
    // 用这些数据做你自己的 UI / 决策 / 日志
}

// 2) 玩家氏族自立为王：内部会经 ChangeKingdomAction 落地，
//    并对创建者"无外交姿态"的敌对方自动宣战
Campaign.Current.KingdomManager.CreateKingdom(
    Clan.PlayerClan.Name,
    Clan.PlayerClan.InformalName,
    Clan.PlayerClan.Culture,
    Clan.PlayerClan,
    Clan.PlayerClan.Culture.DefaultPolicyList);

// 3) 玩家退位：若王国还有其他氏族则转移统治权，否则解散王国
Campaign.Current.KingdomManager.AbdicateTheThrone(Clan.PlayerClan.Kingdom);

// 4) 把一块封地赏赐给某个氏族（直接经 ChangeOwnerOfSettlementAction 落地）
Campaign.Current.KingdomManager.GiftSettlementOwnership(targetSettlement, receiverClan);

// 5) 读取英雄作为雇佣兵的周薪（基于氏族影响度与雇佣倍率）
int wage = Campaign.Current.KingdomManager.GetMercenaryWageAmount(Hero.MainHero);
```

## 版本注记

本页以 `v1.4.5` 源码语义为本页的权威依据（契约 §5：最新权威完整语义在 1.4.5）。在 `v1.3.15` 子树中，`KingdomManager` 的公开高层方法（`CreateKingdom` / `AbdicateTheThrone` / `GiftSettlementOwnership` / `RelinquishSettlementOwnership` / `SiegeCompleted` / `RaidCompleted` / `GetMercenaryWageAmount`）签名与落地的 `*Action` 链路保持稳定，手抄示例可直接用于 1.3.15 模组；若某次升级中 `DeclareWarAction` / `ChangeKingdomAction` 的 `Detail` 枚举项有增删，以对应 Action 页为准。

## 导航

- ↑ Parent：[战役扩展 API 索引](../)
- ↔ Sibling：[FactionManager](../FactionManager)（派系外交姿态的真相存储）
- 相关类：[Campaign](../../campaign/Campaign)（持有者）· [Kingdom](../../campaign/Kingdom) · [Clan](../../campaign/Clan) · [Hero](../../campaign/Hero)
- 落地 Action：[ChangeKingdomAction](../ChangeKingdomAction) · [DestroyKingdomAction](../DestroyKingdomAction) · [DeclareWarAction](../DeclareWarAction) · [ChangeRulingClanAction](../ChangeRulingClanAction)
- 规范：[文档契约](../../../architecture/doc-contract)
