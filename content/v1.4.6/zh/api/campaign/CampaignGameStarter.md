---
title: "CampaignGameStarter"
description: "战役启动期的装配总线：mod 在 OnGameStart 里向它注册 Behavior、GameModel、GameMenu 与对话流程。"
---
# CampaignGameStarter

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignGameStarter : IGameStarter`
**Source:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## 概述

`CampaignGameStarter` 是 `MBSubModuleBase.OnGameStart` 第二个参数的战役侧实现，也是 mod 在战役开始前唯一的正式「注册窗口」。它内部维护四张表：Behavior 列表、GameModel 列表、GameMenu 注册表（通过构造时注入的 `GameMenuManager`）、对话流程表（通过 `ConversationManager`）。你在 `OnGameStart` 里往这些表里塞东西，战役对象随后会统一装配并驱动它们。

它是 `IGameStarter` 的实现，因此 `OnGameStart` 的静态签名里那个参数类型是接口，实际对象在沙盒与故事模式下都是这个类。取它必须做显式向下转型，转型失败就说明当前不是战役模式。

这个类**没有**「立即生效」的方法。`AddBehavior` 只是往 `List<CampaignBehaviorBase>` 里追加一项；真正的 `RegisterEvents()` 调用发生在战役对象建立之后，由游戏遍历列表触发。在 `OnGameStart` 里拿到 Behavior 引用后立刻访问 `Campaign.Current.Heroes`，读到的是空状态。

## 心智模型

标准调用顺序：`MBSubModuleBase.OnGameStart(Game game, IGameStarter gameStarter)` → `((CampaignGameStarter)gameStarter).AddBehavior(...)` / `AddModel(...)` / `AddGameMenu(...)` / `AddDialogFlow(...)` → 方法返回，战役对象开始装配 → Behavior 的 `RegisterEvents()` 被调用 → 菜单与对话进入各自管理器。

常见误用有三类。一是**重复注册**：`AddBehavior` 没有任何去重，同一个实例 `AddBehavior` 两次就会收到双份事件回调；官方 mod 常见的正确姿势是先 `RemoveBehaviors<T>()` 再 `AddBehavior(new T())`。二是**在战役已开始后调用**：`AddBehavior` 往列表里加一项，但没有后续遍历去调它的 `RegisterEvents`，于是 Behavior 永远收不到任何事件——想热插拔得自己手动调 `RegisterEvents()`，但那样又会和读档流程打架。三是**菜单 ID 撞车**：`GetPresumedGameMenu` 是「取或建」，同一 ID 第二次调用拿到的是同一个 `GameMenu` 并重新 `Initialize`，会覆盖前面的菜单文本与选项。

`RemoveBehavior<T>` 返回值是 `List.Remove` 的直接结果，`true` 只表示这个实例此前在列表里；用类型当参数时（`RemoveBehavior<MyBehavior>(null)`）删不掉任何东西，因为 `Remove` 比的是引用。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `CampaignBehaviors` | `ICollection<CampaignBehaviorBase> CampaignBehaviors { get; }` | 直接暴露内部 Behavior 列表。遍历它可以看到所有已注册 Behavior；往里直接 `Add` 会绕过 null 检查，也不会建立任何其它登记 |
| `Models` | `IEnumerable<GameModel> Models { get; }` | 战役可用 GameModel 的只读视图。装配完成后通过 `Campaign.Current.Models.<X>Model` 访问，而不是在这里查 |
| 构造函数 | `public CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)` | 由游戏创建，mod 不应手动 `new`。它注入了菜单与对话两个管理器，`AddGameMenu` / `AddDialogLine` 全部依赖它们 |
| `AddBehavior` | `void AddBehavior(CampaignBehaviorBase campaignBehavior)` | 追加一个 Behavior。参数为 null 时静默忽略，不抛异常；返回 void，是否被接受要看 `CampaignBehaviors.Count` |
| `RemoveBehaviors<T>` | `void RemoveBehaviors<T>() where T : CampaignBehaviorBase` | 倒序遍历并移除所有 `is T` 的实例，避免 `RemoveBehaviors<T>()` 之后再遍历时索引错位。返回值 void |
| `RemoveBehavior<T>` | `bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase` | 按引用移除单个实例。返回 `List.Remove` 的结果，`true` 表示确实移除过 |
| `GetModel<T>` | `T GetModel<T>() where T : GameModel` | 倒序查找第一个匹配类型的模型。找不到时返回 `default(T)`（引用类型为 null），不抛异常 |
| `AddModel` | `void AddModel(GameModel gameModel)` | 直接挂一个已构造好的模型实例。多个同类模型可以共存，`GetModel<T>` 只返回最后注册的那个 |
| `AddModel<T>` | `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | 装饰式注册：先取出已存在的 `T` 传给 `gameModel.Initialize(model)`，再把 `gameModel` 挂上。这是包装既有模型而不替换它的方式 |
| `AddGameMenu` | `void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)` | 取或建 `menuId` 对应的 `GameMenu`，用给定文本与初始化委托填好。`relatedObject` 会被菜单选项回传，便于识别触发来源 |
| `AddWaitGameMenu` | `void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = None, object relatedObject = null)` | 注册带条件/后果/等待时长的一步式菜单。`condition` 为 false 时菜单不可用；`targetWaitHours` 决定推进消耗的战役小时数 |
| `AddGameMenuOption` | `void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)` | 给已存在的菜单追加一项。`index` 为 -1 表示追加到末尾；`isRepeatable` 允许玩家反复点击而不关闭菜单 |
| `GetPresumedGameMenu` | `GameMenu GetPresumedGameMenu(string stringId)` | 「取或建」核心。已存在则返回原对象，不存在则 `new GameMenu(stringId)` 并登记进 `GameMenuManager`。可以对返回对象直接加选项 |
| `AddDialogFlow` | `void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | 把整段 `DialogFlow` 交给 `ConversationManager`。`relatedObject` 用于把对话与触发它的实体绑定 |
| `AddPlayerLine` | `ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null, OnPersuasionOptionDelegate persuasionOptionDelegate = null)` | 构造并登记一条玩家台词，同时带说服选项委托。返回构造好的 `ConversationSentence` 便于后续改写；重复 id 会覆盖 |
| `AddRepeatablePlayerLine` | `ConversationSentence AddRepeatablePlayerLine(...)` | 登记一条可重复台词，并额外自动加一条 `<id>_continue` 的「继续翻页」句。返回主句对象 |
| `AddDialogLineWithVariation` | `ConversationSentence AddDialogLineWithVariation(...)` | 登记一个变体占位句，文本固定为 `{VARIATION_TEXT_TAGGED_LINE}`，实际显示由 `idleActionId` / `idleFaceAnimId` / `reactionId` / `reactionFaceAnimId` 决定 |
| `AddDialogLine` | `ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | 登记一条普通 NPC 台词。这是 `AddPlayerLine` 的无说服选项版本 |
| `AddDialogLineMultiAgent` | `ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | 登记一条指定「谁说、下一句谁说」的台词，`agentIndex` / `nextAgentIndex` 是说话人在对话中的序号 |

## 真实示例

```csharp
public class MyTownsModule : MBSubModuleBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarter)
    {
        CampaignGameStarter starter = (CampaignGameStarter)gameStarter;

        // 幂等注册：先清掉同类型旧实例，避免热重载时收到双份事件
        starter.RemoveBehaviors<MyLedgerBehavior>();
        starter.AddBehavior(new MyLedgerBehavior());

        starter.AddGameMenuOption("town", "open_my_ledger", "{=Xy1Ab2Cd}My Ledger",
            args => args.MenuContext != null,
            args => args.MenuTitle = new TextObject("{=Qr5St6Uv}Ledger opened"),
            false, -1, false);

        starter.AddDialogLine("my_greet",
            "hello_player",
            "my_greet_answered",
            "{=Ef3Gh4Ij}Traveller, you look weather-beaten.",
            null,
            null);
    }
}
```

等待型菜单与条件：

```csharp
starter.AddWaitGameMenu("wait_at_my_hideout",
    "{=Kl5Mn6Op}Wait for the smuggler",
    menu => { },
    args => Hero.MainHero.IsActive,
    args => Hero.MainHero.HitPoints = Hero.MainHero.MaxHitPoints,
    null,
    GameMenu.MenuAndOptionType.WaitMenuShowProgressAndHoursOption,
    GameMenu.MenuOverlayType.None,
    2f);
```

`GameMenuOption.OnConditionDelegate` / `OnConsequenceDelegate` 的参数是 `MenuCallbackArgs`：菜单态回调拿到 `args.MenuContext`（地图态为 null），地图态回调拿到 `args.MapState`。条件委托的标准写法是「置 `args.IsEnabled` 再 `return true`」；`MenuCallbackArgs` 另有 `DeltaTime`、`Text`、`Tooltip`、`MenuTitle`、`optionLeaveType` 等公开字段可用于回写。`MenuAndOptionType` 与 `MenuOverlayType` 都来自 `GameMenu` 的嵌套枚举，前者只有 `RegularMenuOption`、`WaitMenuShowProgressAndHoursOption`、`WaitMenuShowOnlyProgressOption`、`WaitMenuHideProgressAndHoursOption` 四个值；`targetWaitHours` 传 `2f` 表示推进两小时后再询问条件。

## 风险与边界

- **只在 `OnGameStart` 窗口内有效**：战役开始后再 `AddBehavior`，游戏不会再调 `RegisterEvents()`，Behavior 会静默失效。
- **重复注册无保护**：`AddBehavior` 不做实例或类型去重，重复添加会让所有事件回调执行两次。`CampaignBehaviors` 集合虽然暴露出来可直接 `Add`，但那连 null 检查都绕过了。
- **菜单 ID 全局唯一**：`GetPresumedGameMenu` 是取或建语义，同一 ID 二次 `AddGameMenu` 会覆盖前一次 `Initialize` 的文本与委托。给自己的菜单 ID 加 mod 前缀。
- **模型查找返回 null**：`GetModel<T>()` 未命中返回 `default(T)`，必须判空；`AddModel<T>` 用 `GetModel<T>` 决定注入谁，顺序不同结果不同。
- **对话 token 必须成对**：`inputToken` / `outputToken` 是对话图的边，缺一边或写错会在对话启动时报错而不是在注册时报错，排查成本高。`AddPlayerLine` 与 `AddDialogLine` 共用同一 id 空间。
- **无线程安全**：所有集合都是普通 `List`，只应在主线程的 `OnGameStart` 内操作。

## 跨版本提示

`CampaignGameStarter` 在 1.3.0、1.3.15、1.4.5、1.4.6 四个版本都是 `public class CampaignGameStarter : IGameStarter`，可访问成员数量均为 15，跨版本无增删。源码行数从 190 略降到 147（1.4.6），但那是反编译去注释与空行造成的，公开面没有变化。

## 依赖关系

- 生命周期入口：[CampaignBehaviorBase](../CampaignBehaviorBase) — `AddBehavior` 接收的就是它。
- 行为容器：[Campaign](../Campaign) — 装配完成后 Behavior 列表被它接管。
- 事件来源：[CampaignEvents](../CampaignEvents) — Behavior 注册后订阅的主要目标。
- 存档接口：[IDataStore](../IDataStore) — Behavior 的 `SyncData` 参数类型。
- 实现接口：`IGameStarter` 在核心桶，注册点由 `MBSubModuleBase.OnGameStart` 提供。
- 父级：campaign API 目录导览位于版本根 `../../../`。