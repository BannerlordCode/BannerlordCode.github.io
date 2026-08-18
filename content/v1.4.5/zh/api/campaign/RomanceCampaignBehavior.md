---
title: "RomanceCampaignBehavior"
description: "管理英雄间恋爱与求婚流程的战役行为：维护浪漫状态、驱动 NPC 自动撮合，并暴露求爱对话与议婚接口；而婚姻关系的最终落定则交由 MarriageAction 完成。"
---
# RomanceCampaignBehavior

**命名空间：** TaleWorlds.CampaignSystem.CampaignBehaviors
**模块：** TaleWorlds.CampaignSystem
**类型：** `public class RomanceCampaignBehavior : CampaignBehaviorBase`
**源文件：** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.CampaignBehaviors/RomanceCampaignBehavior.cs`

## 概述

`RomanceCampaignBehavior` 是战役层负责英雄之间恋爱与求婚流程的核心行为。它在战役启动时注册并向对话系统注入整套求爱、订婚与家族联姻对话，在每日 tick 中清理失效的浪漫状态、依据 `MarriageModel` 为 NPC 自动撮合并调用 `MarriageAction` 落定婚姻，同时通过 `Romance.RomanticStateList` 维护一对英雄之间的恋爱进度（求爱、确认相容、同意结婚、失败等层级）。需要强调：它管理的是"恋爱状态"——真正的"结婚"动作不会在此处直接写入 `Hero.Spouse`，而是交给 `MarriageAction` 统一处理。

## 心智模型

`RomanceCampaignBehavior` 处于 Campaign（战役）层，而非 Mission 战斗层或 UI 层。战役初始化时由 `SandBoxManager` 通过 `CampaignGameStarter.AddBehavior(new RomanceCampaignBehavior())` 直接注册一个实例（注意它不像部分行为那样由 `*TypeDefiner` 注册，本类没有对应的 TypeDefiner）。注册后其 `RegisterEvents` 订阅 `CampaignEvents.OnSessionLaunchedEvent`、`DailyTickEvent` 与 `DailyTickClanEvent` 三路事件：会话启动后 `OnSessionLaunched` 向对话系统注入全套求爱/议婚对话；每日 tick 中 `DailyTick` 清理一方已死亡英雄的浪漫状态，`DailyTickClan` 则按 `MarriageModel` 评估并为符合条件的 NPC 撮合婚姻。它持有的英雄间恋爱进度全部存放在静态的 `Romance.RomanticStateList`（由 `Romance` 类维护与序列化），本行为自身仅通过 `SyncData` 持久化 `_previousRomancePersuasionAttempts` 这一项说服尝试记录。它是"状态管理者"：恋爱关系如何推进由对话后果与 `ChangeRomanticStateAction` 改变 `Romance.RomanticState.Level`，但把两人正式结为夫妻（写入 `Hero.Spouse`、联动 `Clan`）这一步必须走 `MarriageAction`。

## 何时使用 / 何时不要使用

- 想查询恋爱进度或订阅恋爱流程：用 `Campaign.Current.GetCampaignBehavior<RomanceCampaignBehavior>()` 取实例；恋爱层级直接读 `Romance.GetRomanticState(h1, h2)` / `Romance.GetRomanticLevel(...)`，不要反查本行为的私有字段。
- 想让英雄进入下一恋爱阶段（开始求爱、确认相容、同意结婚、家族撮合等）：调用 `ChangeRomanticStateAction.Apply(...)`，不要手动改 `Romance.RomanticState.Level`。
- 想真正结为夫妻：走 `MarriageAction.Apply(...)`，不要直接给 `Hero.Spouse` 赋值——否则会绕过相关事件与家族联动，导致坏档或关系不一致。
- 不要在 Mission（战斗/场景）层访问此 Campaign 行为；此时 `Campaign.Current` 可能不可用或状态未就绪。

## 依赖图

**上游（注册与驱动方）：**

- [CampaignBehaviorBase](../CampaignBehaviorBase) — 基类，定义 `RegisterEvents` / `SyncData` 的契约。
- [CampaignGameStarter](../CampaignGameStarter) — `SandBoxManager` 借其 `AddBehavior` 注册本行为的实例。
- [Campaign](../Campaign) — 提供 `Current.Models.MarriageModel`、`Current.GetCampaignBehavior<T>()` 入口。
- [CampaignEvents](../CampaignEvents) — `OnSessionLaunchedEvent` / `DailyTickEvent` / `DailyTickClanEvent` 三个事件源。

**下游（状态/消费方与协作类型）：**

- [Hero](../Hero) — `MainHero`、`OneToOneConversationHero`、`Spouse`、`AliveLords` 等恋爱/婚姻主体。
- [Clan](../Clan) — `PlayerClan`、`Clan.All`，联姻落定后的家族联动与 NPC 撮合评估对象。
- [Romance](../Romance) — `RomanticStateList` / `GetRomanticState` / `GetRomanticLevel`，浪漫状态本体与查询方法。
- [MarriageAction](../../campaign-ext/MarriageAction) — NPC 撮合与婚姻最终落定的动作。
- [ChangeRomanticStateAction](../../campaign-ext/ChangeRomanticStateAction) — 推进恋爱层级的动作。
- [MarriageModel](../MarriageModel) — `ShouldNpcMarriageBetweenClansBeAllowed` / `NpcCoupleMarriageChance` 撮合判定。
- [RomanceModel](../RomanceModel) — `GetAttractionValuePercentage` 吸引力计算，影响求爱说服。
- [MarriageBarterable](../MarriageBarterable) 与 [BarterManager](../BarterManager) — 玩家订婚后的财产议婚流程。

## 风险

- **注册时机**：它在战役初始化（`SandBoxManager`）阶段被 `AddBehavior` 注册；战役尚未启动时，`Campaign.Current.GetCampaignBehavior<RomanceCampaignBehavior>()` 可能返回 null，调用前需确认 `Campaign.Current` 已就绪。
- **SyncData 配对**：仅 `_previousRomancePersuasionAttempts` 被 `[SaveableField(1)]` 标记并 `SyncData` 序列化；若你继承自本行为并新增了需要持久化的状态字段，却未同步 `SyncData`，会造成读档后状态丢失乃至坏档。浪漫状态本体由 `Romance` 类自行序列化，不在此处。
- **直接改浪漫/婚姻字段**：手动改 `Romance.RomanticState.Level` 或 `Hero.Spouse` 会绕过 `ChangeRomanticStateAction` / `MarriageAction`，使配偶变更、家族合并、继承等事件不触发，导致存档内关系不一致甚至崩溃。
- **Mission 层访问**：本行为属 Campaign 层；在 Mission 中（战斗/场景逻辑）访问 `Campaign.Current` 或恋爱状态可能为空或产生竞态。
- **NPC 撮合副作用**：`DailyTickClan` 的 `CheckNpcMarriages` 在满足条件时直接 `MarriageAction.Apply`，会改变两个 `Clan` 的家族结构；若你在 tick 中短接该逻辑，需留意连锁效应。
- **事件订阅位置**：必须在 `RegisterEvents` 内用 `CampaignEvents.X.Event.AddNonSerializedListener` 登记监听，否则事件不会触发。

## 成员说明

### 生命周期钩子

- **`RegisterEvents()`** — 战役启动时登记三路事件监听：`OnSessionLaunchedEvent`（注入对话）、`DailyTickEvent`（清理死亡浪漫状态）、`DailyTickClanEvent`（按 clan 触发 NPC 撮合）。这是本行为一切自动逻辑的入口，也是 modder 想追加恋爱相关监听时应复写/扩展的地方。
- **`SyncData(IDataStore)`** — 序列化本行为自身的说服尝试记录 `_previousRomancePersuasionAttempts`；浪漫状态本体由 `Romance` 类负责持久化，不在此处。
- **`OnSessionLaunched(CampaignGameStarter)`** — 每次新游戏或读档后由 `OnSessionLaunchedEvent` 回调，向对话系统 `AddPlayerLine` / `AddDialogLine` 注册整套求爱、议婚与家族联姻对话树。

### 公开查询与浪漫方法

- **查询恋爱层级**：读取一对英雄当前进度应使用 `Romance.GetRomanticState(Hero, Hero)` 与 `Romance.GetRomanticLevel(...)`（静态方法，定义见 [Romance](../Romance)），返回从 `Initial` 到 `CoupleAgreedOnMarriage` / `MatchMadeByFamily` 或各类 `Failed*` 的枚举。这是 modder 判断"这两人恋爱到哪了"的正确入口。
- **推进恋爱层级**：由对话后果调用 `ChangeRomanticStateAction.Apply(Hero.MainHero, Hero.OneToOneConversationHero, Romance.RomanceLevelEnum.X)` 完成——例如求爱开始（`CourtshipStarted`）、确认相容（`CoupleDecidedThatTheyAreCompatible`）、同意结婚（`CoupleAgreedOnMarriage`）、家族撮合（`MatchMadeByFamily`）以及兼容性/现实性失败（`FailedInCompatibility` / `FailedInPracticalities`）。不要自己改 `RomanticState.Level`。
- **`DailyTick()`** — 遍历 `Romance.RomanticStateList`，移除任一参与方已死亡的浪漫状态，避免悬挂引用拖累后续撮合与对话。
- **`CheckNpcMarriages(Clan)`** — 被 `DailyTickClan` 调用，对每个可婚配的 NPC 领主结合 `MarriageModel` 跨族评估联姻概率，命中后 `MarriageAction.Apply` 落定婚姻；`IsClanSuitableForNpcMarriage` 会排除 `PlayerClan`。

### 事件

本行为不直接公开自有事件，而是消费 `CampaignEvents` 的三个事件，并在对话树内部通过 `ChangeRomanticStateAction` / `MarriageAction` 发出动作事件。modder 若想感知"某人结婚或恋爱变更"，应订阅 [CampaignEvents](../CampaignEvents) 上与婚姻/浪漫相关的事件，而非轮询私有字段。

## 示例

```csharp
// 1) 取 Behavior 实例（战役已启动时才可用）
var romance = Campaign.Current.GetCampaignBehavior<RomanceCampaignBehavior>();

// 2) 查询一对英雄的恋爱层级
Romance.RomanticState state = Romance.GetRomanticState(Hero.MainHero, Hero.OneToOneConversationHero);
Romance.RomanceLevelEnum level = Romance.GetRomanticLevel(Hero.MainHero, Hero.OneToOneConversationHero);

// 3) 把恋爱推进到下一阶段（不要手动改字段）
ChangeRomanticStateAction.Apply(Hero.MainHero, Hero.OneToOneConversationHero, Romance.RomanceLevelEnum.CourtshipStarted);

// 4) 真正结为夫妻（婚姻落定走 MarriageAction，而非 Behavior 内字段）
MarriageAction.Apply(Hero.MainHero, Hero.OneToOneConversationHero);
```

自定义观察者行为：本行为由 `SandBoxManager` 通过 `CampaignGameStarter.AddBehavior` 注册，modder 想监听 NPC 撮合前的 clan 状态，可注册自己的 `CampaignBehaviorBase` 子类，机制相同。

```csharp
public class MyRomanceWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.DailyTickClanEvent.AddNonSerializedListener(this, OnDailyTickClan);
    }

    private void OnDailyTickClan(Clan clan)
    {
        // 监听 NPC 撮合发生前的 clan 状态
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

在 SubModule 的战役启动入口注册该行为：

```csharp
protected override void OnCampaignStart(Game game, object starterObject)
{
    var starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new MyRomanceWatcher());
}
```

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：
  - [Hero](../Hero) — 恋爱/婚姻的主体与 `Spouse` 字段
  - [Clan](../Clan) — 联姻后的家族联动
  - [Romance](../Romance) — 浪漫状态本体与查询方法
  - [MarriageAction](../../campaign-ext/MarriageAction) — 婚姻落定动作
  - [ChangeRomanticStateAction](../../campaign-ext/ChangeRomanticStateAction) — 恋爱层级推进动作
  - [MarriageModel](../MarriageModel) — NPC 撮合判定
  - [CampaignEvents](../CampaignEvents) — 生命周期事件源
