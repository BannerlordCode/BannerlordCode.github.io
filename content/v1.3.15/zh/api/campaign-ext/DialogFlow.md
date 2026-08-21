---
title: "DialogFlow"
description: "DialogFlow 是用流式（builder）语法描述一段对话的构造器：它把 NPC 台词、玩家选项、条件与后果组装成一组带输入/输出 token 的对话行，再交给 ConversationManager 注册为可在交谈窗口中流转的状态机。"
---

# DialogFlow

**命名空间：** TaleWorlds.CampaignSystem
**模块：** TaleWorlds.CampaignSystem
**类型：** class DialogFlow
**源文件路径：** C:/WorkSpace/Bannerlord/bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/DialogFlow.cs

## 概述

`DialogFlow` 是 Bannerlord 对话系统里的"对话蓝图构造器"。它用链式调用的方式把一句句 NPC 台词、玩家选项以及附在每行上的条件（Condition）、可点击条件（ClickableCondition）和后果（Consequence）组织起来，每一行都带一个输入 token 和一个输出 token。它自己并不驱动对话——构造完成后，由 `ConversationManager` 把里面每一行翻译成 `ConversationSentence` 并注册进交谈状态机，之后玩家每次点选项、NPC 每次接话，都是靠 `ActiveToken` 在 token 之间跳转来决定的。

## 心智模型

`DialogFlow` 活在 Campaign 层的对话子系统里，只在"交谈窗口打开"（地图或任务中与角色对话）时才有意义。它本身是一个**一次性构建器**：你用 `DialogFlow.CreateDialogFlow(...)` 创建它，链式追加行与选项，最后通过 `CampaignGameStarter.AddDialogFlow(flow, this)` 把它交出去；真正持有并驱动它的人是 `Campaign.Current.ConversationManager`——这是每个 `Campaign` 实例上唯一的那一个对话管理器（单例），所有已注册的对话行都活在它的 `_sentences` 列表里。DialogFlow 的**生命周期是"一次对话流"级别的**：它只在你注册脚本时构建一次，之后被拍平成一堆 `ConversationSentence`；而 `ConversationManager` 的会话状态（`ActiveToken`、当前说话人/听者、`CurOptions`）则是**每次打开交谈窗口时重建**的（见 `StartNew`/`ProcessPartnerSentence`）。当你需要"读懂一段现有对话在做什么"，或者"给游戏加一段全新对话"时，你就是在和 DialogFlow 打交道；但如果你只是想改世界状态（给钱、杀人、宣战），不要在 DialogFlow 后果里直接改字段，而应调用对应的 `*Action`（见 `## 何时用 / 何时不要用`）。在 mod 里，对话脚本几乎总是写在一个 `CampaignBehaviorBase` 子类里：你在 `RegisterEvents` 中挂接 `CampaignEvents.OnSessionLaunchedEvent`（或 `OnNewGameCreatedEvent`/`OnGameLoadedEvent`），在回调拿到的 `CampaignGameStarter starter` 上调用 `starter.AddDialogFlow(...)`，从而把你的 DialogFlow 注册进系统。

## 何时用 / 何时不要用

用 DialogFlow 的场景：

- 你想新增一段完整的对话（例如 NPC 打招呼、玩家选择分支、条件性出现特殊选项）。
- 你想用流式语法清晰地表达"NPC 说一句 → 玩家几个选项 → 每个选项带条件与后果"的结构。
- 你想在对话末尾用 `CloseDialog()` 收尾，或用 `GotoDialogState`/`GoBackToDialogState` 做循环或跳转。

不要用 DialogFlow 直接做的事：

- **不要在 `Consequence` 里直接改持久世界状态**（例如 `hero.Gold += 100;`、手动 `clan.AddMember(...)`、`settlement.Owner = ...`）。这类改动应当通过 `GiveGoldAction.ApplyBetweenCharacters`、`KillCharacterAction.ApplyByMurder`、`ChangeKingdomAction`、`DeclareWarAction`、`MakePeaceAction` 等 `*Action` 来完成——它们会正确触发 `CampaignEventDispatcher` 事件、写日志、处理通知，并保证存档一致（见 `## 真实示例` 例 B）。
- **不要在后果里手动启动一段新对话**而不理解其递归：对话是在 `ConversationManager` 的 `ProcessSentence`/`DoOptionContinue` 流转中驱动的，从后果里再调 `OpenMapConversation` 之类需要谨慎。
- 如果只是追加单条线，也可以用 `CampaignGameStarter.AddPlayerLine` / `AddDialogLine` 直接写，不必非走 DialogFlow 的 token 链。

## 依赖图

- 上游（构建 / 驱动 DialogFlow 的系统）：
  - [ConversationManager](../ConversationManager) — 真正持有对话行、按 `ActiveToken` 选择并驱动对话的会话主机。
  - [CampaignBehaviorBase](../CampaignBehaviorBase) — mod 在 `RegisterEvents` 中挂接事件、在 `CampaignGameStarter` 回调里注册 DialogFlow 的载体。
  - [CampaignGameStarter](../CampaignGameStarter) — `AddDialogFlow(DialogFlow, object)` 把蓝图落进 `ConversationManager`。
  - [Campaign](../../campaign/Campaign) — `Campaign.Current.ConversationManager` 是访问单例管理器的入口；`Campaign.Current` 在构建 token 时被引用。
- 下游（对话行读写到的世界对象）：
  - [Hero](../../campaign/Hero) — `Hero.OneToOneConversationHero`、`Hero.MainHero` 是条件/后果里最常用的句柄。
  - [Clan](../../campaign/Clan)、[Settlement](../../campaign/Settlement)、[Kingdom](../../campaign/Kingdom) — 对话后果通过 `*Action` 改动的典型目标。

## 风险

- **DialogFlow 运行在对话 tick 上**：条件（Condition/ClickableCondition）会被 `GetSentenceOptions` 对每个候选行反复求值（每次刷新选项都跑一遍），所以条件委托必须是**无副作用**的纯判断，不要在其中改状态或累加计数。
- **后果会改变世界，要走 Action**：正如概述所说，在 `Consequence` 里直接改 `Hero`/`Clan`/`Settlement` 字段会绕过事件分发与存档逻辑，极易造成不一致或崩溃。改世界请用 `*Action`。
- **`ConversationManager` 是每 Campaign 单例**：不要跨对话长期持有 `ConversationSentence` 引用或缓存 `CurOptions`；每次 `StartNew` 都会重建 `_usedIndices`、重置说话人，旧引用可能失效。
- **不要在后果里无脑重开对话**：从 `Consequence` 内部再次调用 `OpenMapConversation`/`SetupAndStartMapConversation` 会进入递归式会话流转，务必清楚当前的 `ActiveToken` 与 `Handler` 状态。
- **token 链要闭合**：用 `BeginPlayerOptions`/`EndPlayerOptions`（或 NPC 版）包裹的选项，其输入 token 来自当时的 `DialogFlowContext`；若忘了 `EndXxxOptions`，后续行会错误地接到选项块内部 token 上，导致该分支永远无法被选中。

## 关键成员

DialogFlow 的公开方法绝大多数返回 `this`，因此可以链式书写。下面按主题分组说明，而不是逐个罗列签名。

### 一、创建与追加对话行（builder 核心）

- `CreateDialogFlow(string inputToken = null, int priority = 100)`（静态工厂）
  创建一条对话流。若 `inputToken` 为 `null`，会调用 `Campaign.Current.ConversationManager.CreateToken()` 自动要一个形如 `atk:N` 的 token 作为起始输入 token。`priority` 越高，生成的 `ConversationSentence` 在 `SortSentences` 里越靠前、越优先被选中。**只应在注册脚本时调用一次**，之后这条流被拍平注册，DialogFlow 实例本身不再被系统持有。
- `NpcLine(...)` / `PlayerLine(...)`
  追加一句 NPC 台词或一句玩家台词。内部 `Line(...)` 会：若未给 `outputToken` 就自动生成新 token；将输入连到当前 `_currentToken`（或你指定的 `inputToken`）；把 `_currentToken` 推进到本行输出 token；并把本行设为 `_lastLine`，供随后链式调用的 `Condition`/`Consequence` 绑定。
- `NpcLineWithVariation(...)` / `NpcOptionWithVariation(...)`
  先放一个空文本行，再追加带 `ChoiceTag` 权重的文本变体（标签如 `DefaultTag`），由 `ConversationManager.FindMatchingTextOrNull` 按交谈角色匹配的标签打分选最合适的文本——用于按人格/声望/男女呈现不同措辞。
- `Variation(TextObject text, params object[] propertiesAndWeights)`
  给**上一行**（`Lines[Lines.Count-1]`）追加一个加权文本变体，参数成对出现：`标签名, 权重`。不影响 token 链，只影响该行文本的选择。

### 二、选项块与各类选项

- `BeginPlayerOptions(inputToken = null, optionUsedOnce = false)` / `BeginNpcOptions(...)`
  压入一个 `DialogFlowContext`：记下当前 token 作为选项块的输入 token、标记是否为玩家侧、以及"本块内选项是否整块只出现一次"。之后追加的 `PlayerOption`/`NpcOption` 都从该上下文的 token 分支出来。
- `EndPlayerOptions()` / `EndNpcOptions()`
  弹出 `DialogFlowContext`（回到 `Parent`），选项块结束。必须和 `Begin` 配对，否则 token 链错乱。
- `PlayerOption(...)` / `PlayerSpecialOption(TextObject, listenerDelegate, ...)` / `PlayerRepeatableOption(...)`
  追加玩家选项。`PlayerSpecialOption` 会标记 `IsSpecialOption`（特殊选项，例如"离开"）。`PlayerRepeatableOption` 标记 `IsRepeatable`，让该行在带重复对象列表时按 `DialogRepeatCount` 多次出现。
- `NpcOption(text, OnConditionDelegate condition, ...)` / `NpcOptionWithVariation(...)`
  追加由 NPC 给出的选项（通常是对话推进的自动分支），并把 `condition` 绑到 `_lastLine.ConditionDelegate` 上——只有条件为真时该 NPC 选项才会出现。`NpcDefaultOption(text)` 等价于 `NpcOption(text, null)`，即无条件默认项。

### 三、条件与后果（行为绑定）

- `Condition(OnConditionDelegate)` — 给**刚刚追加的那一行**（`_lastLine`）设置 `ConditionDelegate`。求值失败则该行不会被选中。
- `ClickableCondition(OnClickableConditionDelegate)` — 设 `ClickableConditionDelegate`，决定该行在 UI 上是否可点击（例如前置任务未解锁时灰掉）。
- `Consequence(OnConsequenceDelegate)` — 设 `ConsequenceDelegate`，在 `ConversationManager.ProcessSentence` 选中并展示该行后执行。这里是你"做事情"的地方，但请走 `*Action` 而非直接改字段。

### 四、流程控制（状态跳转）

- `GotoDialogState(string input)` — 把**上一行**的输出 token 与当前 `_currentToken` 都改成 `input`，从而把对话引向下一个状态。这是 token 链跳转的核心。
- `GotoDialogStateBranched(string input, OnConditionDelegate condition, string alternative)` — 在**构建时**就根据 `condition()` 的结果在 `input` 与 `alternative` 之间二选一，固定本行出口。
- `GoBackToDialogState(string iState)` — 仅把 `_currentToken` 回退到某个已有状态 token，常用于循环回问（重复提问同一组选项）。
- `CloseDialog()` — 等价于 `GotoDialogState("close_window")`；`close_window` 是内置状态索引 4，`ConversationManager.IsConversationEnded()` 据此判定对话结束并调用 `EndConversation()`。
- `GenerateToken(out string token)` / `GetOutputToken(out string oState)` — 前者向管理器要一个新 token 并写回 `token`；后者读出上一行的输出 token，便于在多处共享同一出口状态。

### 五、直接落注册（底层入口）

- `AddPlayerLine(...)` / `AddDialogLine(...)` — 不经过 token 链 builder，直接构造一个 `ConversationSentence` 并调用内部 `AddDialogLine` → `Campaign.Current.ConversationManager.AddDialogLine`。需要你显式提供 `id`、`inputToken`、`outputToken`。等价于在 `CampaignGameStarter` 上用同名方法，区别是这里从 DialogFlow 实例发起。

## 真实示例

例 A：在一个 `CampaignBehaviorBase` 中通过 `CampaignGameStarter` 注册一段完整对话（含条件与后果）。注意 `Campaign` 与 `Hero` 是这里最常用的真实句柄，注册动作本身是 `starter.AddDialogFlow(flow, this)` 这个**方法调用**。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Conversation;
using TaleWorlds.CampaignSystem.GameStarter;
using TaleWorlds.Localization;

public class GreetNotableBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
        // 会话启动（含新游戏/读档后进入地图）时拿到 CampaignGameStarter，用来注册对话脚本
        CampaignEvents.OnSessionLaunchedEvent.AddNonSerializedListener(this, OnSessionLaunched);
    }

    private void OnSessionLaunched(CampaignGameStarter starter)
    {
        // 以内置 "start" token 作为入口；Priority=100 决定它在多条候选中的优先度
        DialogFlow flow = DialogFlow.CreateDialogFlow("start", 100)
            .NpcLine(new TextObject("{=my_mod_greet}Well met, traveler. You carry yourself like a notable."))
            // 条件仅在交谈对象是"名士"时成立；条件必须无副作用
            .Condition(() => Hero.OneToOneConversationHero != null && Hero.OneToOneConversationHero.IsNotable)
            .BeginPlayerOptions()
                .PlayerOption(new TextObject("{=my_mod_ask}What news do you bring?"))
                .Consequence(() =>
                {
                    // 后果里只做"安全"的事；真正改变世界请走 *Action（见例 B）
                    Campaign.Current.ConversationManager.ConversationEndOneShot += OnTalkEnded;
                })
            .EndPlayerOptions();

        // 关键一步：把整条流注册进 ConversationManager（relatedObject 传 this 便于按对象清理）
        starter.AddDialogFlow(flow, this);
    }

    private void OnTalkEnded()
    {
        Campaign.Current.ConversationManager.ConversationEndOneShot -= OnTalkEnded;
    }

    public override void SyncData(IDataStore dataStore) { }
}
```

例 B：在对话后果里**安全地**改变世界状态——通过 `*Action`，而不是手动改字段。下面的后果在玩家选择"雇用护卫"后，从主角钱包扣钱给当前交谈的 NPC。

```csharp
// 错误示范（不要这样写）：在后果里直接改持久字段，会绕过事件/通知/存档逻辑
// Consequence(() => { Hero.MainHero.Gold -= 100; Hero.OneToOneConversationHero.Gold += 100; });

// 正确写法：委托给 GiveGoldAction，由它统一处理转账、通知与事件分发
DialogFlow flow = DialogFlow.CreateDialogFlow("my_hire_start", 120)
    .NpcLine(new TextObject("{=my_mod_hire}For 100 denars, my blades are yours."))
    .Condition(() => Hero.OneToOneConversationHero != null)
    .BeginPlayerOptions()
        .PlayerOption(new TextObject("{=my_mod_accept}Hire them. (-100 denars)"))
        .Consequence(() =>
        {
            // ApplyBetweenCharacters 会安全地从主角转账给交谈对象
            GiveGoldAction.ApplyBetweenCharacters(
                giverHero: Hero.MainHero,
                recipientHero: Hero.OneToOneConversationHero,
                amount: 100);
        })
        .PlayerOption(new TextObject("{=my_mod_decline}Not today."))
    .EndPlayerOptions()
    .CloseDialog(); // 收尾：跳到 close_window 状态，结束对话
```

## 导航

- ↑ 父级：[campaign-ext 索引](../)
- ↔ 同级：[CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignGameStarter](../CampaignGameStarter) · [ConversationManager](../ConversationManager)
- 相关：[模块系统](../../../architecture/module-system) · [存档系统](../../../architecture/save-system) · [SDK 概览](../../../architecture/sdk-overview)
