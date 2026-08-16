---
title: "ChangeRomanticStateAction（改变英雄恋爱关系）"
description: "在战役阶段改变两名英雄之间恋爱关系等级的官方入口：写入或更新 Romance.RomanticState 并广播 OnRomanticStateChanged，绝不要直接改浪漫字段。说明唯一公开方法 Apply 的真实副作用、调用时机与存档风险。"
---
# ChangeRomanticStateAction（改变英雄恋爱关系）

**Namespace:** TaleWorlds.CampaignSystem.Actions  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public static class ChangeRomanticStateAction`  
**Base:** （无基类，静态类）  
**File:** `TaleWorlds.CampaignSystem/Actions/ChangeRomanticStateAction.cs`

## 一句话职责

把两名英雄之间的「恋爱进展等级」（未开始 / 由家族安排 / 开始追求 / 订婚 / 结婚 / 破裂）设定为某个新值，并通知所有监听该变化的系统。

## 心智模型

把 `ChangeRomanticStateAction` 当作**「战役恋爱状态机的官方扳机」**：它本身不持有任何数据，只是一个薄封装，真正的状态存放在 `Campaign.Current.Romance._romanticStateList`（每条是一对 `Hero` + 一个 `RomanceLevelEnum`），而「通知」通过 `CampaignEventDispatcher.Instance.OnRomanticStateChanged` 广播给所有 `CampaignBehavior`。

- **生命周期**：静态类，没有实例生命周期。被它写入的 `RomanticState` 行随整个战役对象存在，并通过 `Romance` 的存档字段被序列化到存档中（详见 [RomanticState](../RomanticState/) 与 [Romance](../Romance/)）。
- **谁在调用它**：游戏内几乎全部来自 [RomanceCampaignBehavior](../RomanceCampaignBehavior/) 的对话 consequence 回调（玩家在酒馆/领主大厅推进求爱流程时），以及 [MarriageAction](../MarriageAction/) 在真正结婚的末尾用它把等级标成 `Marriage`。模组开发者应在自己的 `CampaignBehavior` 或对话 consequence 中调用，而不是在任意角落。
- **所在层**：Campaign Action 层。它只关心「恋爱状态」这一块战役数据，不处理配偶、关系值、家族归属、资产转移——那些由 [MarriageAction](../MarriageAction/) 与 [ChangeRelationAction](../ChangeRelationAction/) 负责。
- **何时用 / 何时不要用**
  - ✅ 用：你设计了一套恋爱/联姻相关玩法，需要在某个明确条件达成时推进或重置两名英雄的浪漫等级。
  - ❌ 不要用：在 `Mission` 的战斗逻辑里调用（恋爱是战役层概念，战场里改它没有意义且时机不对）；在存档加载 / `SyncData` 期间调用；传入一个没有被 `MBObjectManager` 登记、不会进入存档的临时 `Hero`（见下方风险段）；想「真正结婚」却只调它（应改用 [MarriageAction](../MarriageAction/)）。
  - ✅ 正确替代：读取当前等级用 `Romance.GetRomanticLevel(...)`；对变化做出反应请订阅 `CampaignEvents.RomanticStateChanged`（见 [CommentOnChangeRomanticStateBehavior](../CommentOnChangeRomanticStateBehavior/)）；真正的结婚走 `MarriageAction.Apply`。

> 注意：`Romance.SetRomanticState` 是 `internal`，模组无法直接调用，因此 `ChangeRomanticStateAction.Apply` 是改变浪漫等级**唯一**的公开入口。这本身就是一道护栏：你不需要、也不能去直接写 `RomanticState.Level` 字段。

## 依赖图

```text
[RomanceCampaignBehavior / MarriageAction / 你的 CampaignBehavior]
        │  调用
        ▼
ChangeRomanticStateAction.Apply(person1, person2, level)
        │
        ├─► Romance.SetRomanticState(...)  写入/新建 RomanticState
        │        └─► Campaign.Current.Romance._romanticStateList  （可存档）
        │
        └─► CampaignEventDispatcher.Instance.OnRomanticStateChanged(...)
                 │
                 └─► CampaignEvents.RomanticStateChanged 广播
                          ├─► CommentOnChangeRomanticStateBehavior  （见 [CommentOnChangeRomanticStateBehavior](../CommentOnChangeRomanticStateBehavior/)）
                          │        └─► ChangeRomanticStateLogEntry  写入日志（可存档，引用两个 Hero）
                          └─► 你自己的监听器（AddNonSerializedListener）
```

- **上游（调用方 / 触发方）**：[RomanceCampaignBehavior](../RomanceCampaignBehavior/)（对话 consequence：`CourtshipStarted`、`MatchMadeByFamily`、`CoupleDecidedThatTheyAreCompatible`、`CoupleAgreedOnMarriage`、`FailedInCompatibility`、`FailedInPracticalities`）、[MarriageAction](../MarriageAction/)（末尾置 `Marriage`）、以及你自己的 `CampaignBehavior` / `SubModule` 战役阶段代码。
- **下游（受影响对象）**：`Romance.RomanticStateList` 中的 `RomanticState`（`Person1/Person2/Level`，可存档）；经由事件产生的 `ChangeRomanticStateLogEntry`（可存档，引用两个 `Hero`）；任何订阅 `CampaignEvents.RomanticStateChanged` 的 `Behavior`。
- **相关 Events / Behaviors / Actions / Models / 存档点**
  - Event：[CampaignEventDispatcher](../../campaign/Campaign/) 上的 `OnRomanticStateChanged`，公开订阅入口 `CampaignEvents.RomanticStateChanged`。
  - Behavior：[RomanceCampaignBehavior](../RomanceCampaignBehavior/)、[CommentOnChangeRomanticStateBehavior](../CommentOnChangeRomanticStateBehavior/)。
  - Action：[MarriageAction](../MarriageAction/)（真正结婚，会顺带改配偶/关系/家族并调用本类）、[ChangeRelationAction](../ChangeRelationAction/)（结婚时同步提升个人关系）。
  - 数据 / 存档：[RomanticState](../RomanticState/)、[Romance](../Romance/)、[RomanceLevelEnum](../RomanceLevelEnum/)、[ChangeRomanticStateLogEntry](../ChangeRomanticStateLogEntry/)。`RomanticState` 与 `ChangeRomanticStateLogEntry` 都持有 `Hero` 引用，是存档完整性风险点（见风险段）。

## 风险段（必读）

`Apply` 看似只改一个枚举，但它触发的是一条**会写存档、会广播事件**的链路，以下场景会崩溃或坏档：

1. **必须在战役阶段调用（Campaign.Current != null）**：`Romance.SetRomanticState` 最终走到 `Romance.RomanticStateList => Campaign.Current.Romance._romanticStateList`。如果 `Campaign.Current` 为 `null`（例如模组在战役尚未初始化、或在加载早期）就调用，会直接空引用崩溃。
2. **不要在 Mission 内调用**：恋爱是战役层数据，在战斗 `Mission` 的逻辑（Agent/帧 tick）里改变它没有意义，也容易与战役状态机错位。应在 `CampaignBehavior`、对话 consequence 等战役阶段代码里调用。
3. **不要在加载 / SyncData 期间调用**：存档反序列化时 `Romance._romanticStateList` 可能尚在重建，且事件监听器（`CommentOnChangeRomanticStateBehavior` 等）可能尚未注册或 `CommentOnChangeRomanticStateBehavior` 的 `SyncData` 正在跑。此时广播 `OnRomanticStateChanged` 可能命中未就绪的接收方，或在半加载状态上追加日志条目，导致坏档。
4. **事件级联**：每次 `Apply` 都会广播 `OnRomanticStateChanged`，进而由 `CommentOnChangeRomanticStateBehavior` 可能写入一条 `ChangeRomanticStateLogEntry`。这条日志与 `RomanticState` 一样**保存了两个 `Hero` 引用**——如果你传入一个不会被存档的临时 `Hero`（例如 `new Hero()` 或已经死亡且被存档裁掉的英雄），序列化时会留下悬空引用，下次读档可能坏档或读不到对象。永远传入 `Hero.MainHero`、`Hero.Find(...)` 或 `Hero.OneToOneConversationHero` 这类由 `Campaign.Current` 持有的真实英雄。
5. **不要用它「假结婚」**：`Apply(..., Romance.RomanceLevelEnum.Marriage)` 只会把浪漫等级写成 `Marriage`，**不会**设置 `Hero.Spouse`、不会调整个人关系、不会合并家族、也不会结束其它追求（`Romance.EndAllCourtships`）。这会与游戏其它系统严重失同步。要真正结婚，调用 [MarriageAction](../MarriageAction/)。
6. **覆盖式写入**：若两人之间已存在 `RomanticState`，`Apply` 直接覆盖其 `Level`，不会回退进度（`ProgressToNextLevel` 只在新建时被置 0）。调用前应先用 `Romance.GetRomanticLevel(...)` 判断当前等级，避免把更高进展覆盖掉。

## 成员说明

本类只暴露一个公开方法。其余逻辑（`ApplyInternal`）是 `private`，模组不可调用。

### `Apply(Hero person1, Hero person2, Romance.RomanceLevelEnum toWhat)`

- **用途**：把 `person1` 与 `person2` 之间的恋爱等级设定为 `toWhat`，或在该对英雄尚无记录时新建一条 `RomanticState`（初始 `ProgressToNextLevel = 0`）。
- **副作用**：
  1. 写入 / 更新 `Campaign.Current.Romance._romanticStateList` 中的 `RomanticState`（可存档）。
  2. 通过 `CampaignEventDispatcher.Instance.OnRomanticStateChanged` 广播，触发所有订阅 `CampaignEvents.RomanticStateChanged` 的 `Behavior`；其中 `CommentOnChangeRomanticStateBehavior` 在涉及主角或家族首领时会追加一条 `ChangeRomanticStateLogEntry`（可存档）。
  3. 不改变 `Hero.Spouse`、不改个人关系、不改家族——这些由其它 Action 负责。
- **何时调用**：在你的 `CampaignBehavior`（周期 tick / 事件回调）或对话 consequence 中、战役阶段、`Campaign.Current != null` 时调用；两个 `Hero` 必须都是 `Campaign.Current` 持有的真实英雄；`toWhat` 的取值应与业务阶段匹配（取值顺序见 [RomanceLevelEnum](../RomanceLevelEnum/)）。

```csharp
// 真实调用（与 RomanceCampaignBehavior 同源）：仅在“由家族安排”阶段推进到“开始追求”
Hero player = Hero.MainHero;
Hero suitor = Hero.OneToOneConversationHero;
if (suitor != null && Romance.GetRomanticLevel(player, suitor) == Romance.RomanceLevelEnum.MatchMadeByFamily)
    ChangeRomanticStateAction.Apply(player, suitor, Romance.RomanceLevelEnum.CourtshipStarted);
```

`RomanceLevelEnum` 的取值（从小到大，用于 `toWhat`）：

| 值 | 含义 |
|----|------|
| `Ended` (-2) | 恋爱结束 |
| `Rejection` (-1) | 被拒绝 |
| `Untested` (0) | 未开始（默认） |
| `FailedInCompatibility` | 因性格不合失败 |
| `FailedInPracticalities` | 因现实条件失败 |
| `MatchMadeByFamily` | 由家族安排 |
| `CourtshipStarted` | 开始追求 |
| `CoupleDecidedThatTheyAreCompatible` | 双方确认合得来 |
| `CoupleAgreedOnMarriage` | 双方同意结婚 |
| `Marriage` | 已婚（真正结婚请走 `MarriageAction`） |

读取侧请使用：`Romance.GetRomanticLevel(person1, person2)`、`Romance.GetRomanticState(person1, person2)`、以及 `RomanticState.Partner(hero)`（见 [Romance](../Romance/)、[RomanticState](../RomanticState/)）。

## 真实示例

### 示例 1：在对话 consequence 中推进恋爱（与 RomanceCampaignBehavior 同源）

真实获取路径是 `Hero.MainHero` + `Hero.OneToOneConversationHero`，游戏内 `RomanceCampaignBehavior.conversation_start_courtship_persuasion_pt1_on_consequence`（源文件约 721 行）正是这样调用的。下面是你自己的对话 consequence 里可照搬的写法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;

// 放在对话树某个选项的 on_consequence 回调里
public void conversation_start_my_courtship_on_consequence()
{
    Hero player = Hero.MainHero;
    Hero suitor = Hero.OneToOneConversationHero; // 当前一对一对话对象（真实战役英雄）

    if (suitor != null && suitor.IsLord && !suitor.IsPrisoner)
    {
        // 仅在「由家族安排」阶段才推进到「开始追求」，避免覆盖更高进展
        if (Romance.GetRomanticLevel(player, suitor) == Romance.RomanceLevelEnum.MatchMadeByFamily)
        {
            ChangeRomanticStateAction.Apply(player, suitor, Romance.RomanceLevelEnum.CourtshipStarted);
        }
    }
}
```

### 示例 2：从自定义 CampaignBehavior 的周期逻辑中设定「由家族安排」

真实获取路径是 `Hero.MainHero` + `Hero.Find("lord_derthert_2")`（Derthert 之女 Ida 在游戏内的真实 `stringId`），在 `SubModule` 注册的 `CampaignBehavior` 中调用：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Actions;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.SaveSystem;

public class MyMatchmakerBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 监听每日 tick，或挂到你自己的条件回调上
        CampaignEvents.DailyTickEvent.AddNonSerializedListener(this, OnDailyTick);
    }

    private void OnDailyTick()
    {
        Hero player = Hero.MainHero;
        Hero candidate = Hero.Find("lord_derthert_2"); // 存档中真实存在的领主
        if (candidate == null || candidate.IsDead || candidate.IsPrisoner || candidate.Spouse != null)
            return;

        // 只有「未开始」才推进到「由家族安排」，不覆盖既有进展
        if (Romance.GetRomanticLevel(player, candidate) == Romance.RomanceLevelEnum.Untested)
        {
            ChangeRomanticStateAction.Apply(player, candidate, Romance.RomanceLevelEnum.MatchMadeByFamily);
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

### 示例 3：订阅下游事件做出反应（理解级联）

`Apply` 广播的 `OnRomanticStateChanged` 可以被你自己的 `Behavior` 监听，模式与 [CommentOnChangeRomanticStateBehavior](../CommentOnChangeRomanticStateBehavior/) 一致：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.CampaignBehaviors;
using TaleWorlds.Localization;
using TaleWorlds.CampaignSystem.Actions;

public class MyRomanceWatcher : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        CampaignEvents.RomanticStateChanged.AddNonSerializedListener(this, OnRomanticStateChanged);
    }

    private void OnRomanticStateChanged(Hero hero1, Hero hero2, Romance.RomanceLevelEnum level)
    {
        if ((hero1 == Hero.MainHero || hero2 == Hero.MainHero) &&
            level == Romance.RomanceLevelEnum.CourtshipStarted)
        {
            Hero other = (hero1 == Hero.MainHero) ? hero2 : hero1;
            InformationManager.DisplayMessage(new InformationMessage($"{other.Name} 与你开始交往。"));
        }
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

## 跨版本提示

- **v1.3.15 与 v1.4.5 一致**：两版 `ChangeRomanticStateAction.cs` 的 `Apply(Hero, Hero, Romance.RomanceLevelEnum)` 签名与 `ApplyInternal` 实现（先 `Romance.SetRomanticState` 再 `OnRomanticStateChanged`）完全相同，无差异。下方说明同时适用于这两个版本。
- `RomanceLevelEnum`、`Romance.SetRomanticState`、`Romance.RomanticStateList` 在两版同样一致，读取侧 API（`GetRomanticLevel` / `GetRomanticState`）也保持一致。

## 参见

- ↑ [行动目录（campaign-ext）](../)
- ↑ [Campaign（战役世界入口）](../../campaign/Campaign/)
- ↔ [MarriageAction（真正结婚的入口）](../MarriageAction/)
- ↔ [Romance（浪漫状态数据）](../Romance/)
- ↔ [RomanceCampaignBehavior（游戏内恋爱流程）](../RomanceCampaignBehavior/)
- ↔ [RomanticState（单条浪漫状态）](../RomanticState/)
- ↔ [RomanceLevelEnum（等级枚举）](../RomanceLevelEnum/)
- ↔ [ChangeRelationAction（改变个人关系）](../ChangeRelationAction/)
- ↔ [CommentOnChangeRomanticStateBehavior（下游日志监听）](../CommentOnChangeRomanticStateBehavior/)
- ↔ [ChangeRomanticStateLogEntry（恋爱变化日志）](../ChangeRomanticStateLogEntry/)
- ◊ [Hero（英雄对象）](../../campaign/Hero/)
- ◊ [Clan（家族）](../../campaign/Clan/)
- ◊ [崩溃与存档边界](../../../architecture/crash-boundaries/)
- ◊ [SDK 总览](../../../architecture/sdk-overview/)
