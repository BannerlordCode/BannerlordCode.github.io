---
title: "CampaignGameStarter"
description: "战役侧 IGameStarter 的唯一实现：两个列表容器 + 菜单/对话注册门面；两个 AddModel 重载语义不同，AddBehavior 不调 RegisterEvents，RemoveBehaviors<T> 只删列表不退订。"
---

# CampaignGameStarter

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** 实现 [IGameStarter](../../core-extra/IGameStarter)（该接口只有 `AddModel` 两个重载、`AddModel<T>` 与 `Models`）；不继承任何类
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`（全文 178 行）

## 概述

`CampaignGameStarter` 是 mod 在**战役侧**唯一能拿到的注册入口。你在 `MBSubModuleBase.InitializeGameStarter(Game game, IGameStarter gameStarterObject)` 里拿到的那个参数，运行期实际就是这个类型（`CampaignGameStarter`，不是 `BasicGameStarter`——后者是任务侧那条线）。它做三件事：**收集模型、收集行为、注册菜单与对话**。

内部只有四个字段：两个 `readonly` 的管理器引用（`GameMenuManager` / `ConversationManager`，构造器注入）和两个 `List`（`_campaignBehaviors`、`_models`）。**它是纯收集器**——`AddBehavior` 只入队不注册，`AddModel` 只追加，全部的装配工作发生在战役初始化之后。

有一处必须记住的接口落差：**`IGameStarter` 只声明了三个成员**（`AddModel(GameModel)`、`AddModel<T>(MBGameModel<T>)`、`Models`）。`CampaignGameStarter` 上另外 15 个成员——`AddBehavior`、`AddGameMenu`、`AddDialogFlow` 等——**都不在接口上**。所以在 `InitializeGameStarter` 里如果你的变量静态类型是 `IGameStarter`，想调 `AddBehavior` 就必须先转型成 `CampaignGameStarter`。这是官方代码里最常见的 `(CampaignGameStarter)gameStarterObject` 转型存在的原因。

**两个 `AddModel` 重载语义完全不同，这是本页最容易出错的地方。** 非泛型的 `AddModel(GameModel gameModel)` 方法体只有 `this._models.Add(gameModel);`——**纯追加，不接 `BaseModel`**。泛型的 `AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` 有三行：

```csharp
T model = this.GetModel<T>();
gameModel.Initialize(model);
this._models.Add(gameModel);
```

它先倒序扫出当前最外层的 `T`，把它塞进新对象的 `BaseModel`，再追加。**只有泛型重载能建立覆盖链**；用非泛型重载注册的东西照样能被 `GetModel<T>` 扫到，但它自己不能往下转发，于是你的覆盖会「吃掉」前面所有 mod 的修改。官方沙盒 `SandBoxSubModule.InitializeGameStarter` 里那三十多行全是泛型重载。

## 心智模型

把它当成**「战役启动期的一次性收集箱」**，然后按四段时序定位：**谁构造它 → 你在什么时候往里塞 → 战役怎么把它吃掉 → 它什么时候失效。**

**第一段，谁构造它。** 构造器是 `public CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)`，两个依赖都由外部注入，自己不 new。`SandBox/SandBox.cs` 那一侧负责把两个管理器传进来。这意味着**你的 `InitializeGameStarter` 拿到的实例已经建好，随时可写**。

**第二段，你在什么时候往里塞。** 只有 `InitializeGameStarter` 这一时机。`Campaign.cs:1900` 的 `base.GameManager.InitializeGameStarter(base.CurrentGame, campaignGameStarter);` 会遍历所有 `MBSubModuleBase` 依次回调。**注册顺序 = 模块初始化顺序 = 谁后加载谁写在列表末尾**，而覆盖是「后写的赢」。

**第三段，战役怎么把它吃掉。** 同一个 `InitializeGameStarter` 调用结束后的三行（`Campaign.cs:1904-1906`）：

```csharp
base.CurrentGame.SetBasicModels(campaignGameStarter.Models);
this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);
CampaignTime.Initialize();
```

**同一条 `_models` 列表被交给了两个管理器**（`SetBasicModels` 与 `AddGameModelsManager<GameModels>`），所以任务模型和战役模型读的是同一批注册。而 `_campaignBehaviors` 那一侧则走 `Campaign` 内部的 `CampaignBehaviorManager`，由它的 `RegisterEvents()` 一次性对所有行为各调一次 `behavior.RegisterEvents()`。这解释了为什么 `CampaignGameStarter.AddBehavior` **不需要**自己调 `RegisterEvents`——那件事被推迟并集中处理了。对比运行期的 `CampaignBehaviorManager.AddBehavior`，后者是 `Add` 之后**立刻**调 `RegisterEvents()`，语义正好相反。

**第四段，它什么时候失效。** `Models` 属性返回 `_models` 这个 `List<GameModel>` 的 `IEnumerable<GameModel>` 视图——**没有防御性拷贝**。`GameModelsManager` 的构造器做 `inputComponents.ToMBList<GameModel>()`，那一刻是快照；快照之后你再 `AddModel`，对已经建好的 [GameModels](../GameModels) 无效。`CampaignBehaviors` 同理返回 `ICollection<CampaignBehaviorBase>`，是 `_campaignBehaviors` 的活引用。

**菜单注册走的是「presumed」模式**：`GetPresumedGameMenu(string stringId)` 先 `this._gameMenuManager.GetGameMenu(stringId)`，拿到 null 就 `new GameMenu(stringId)` 再 `AddGameMenu`，然后返回。所以 `AddGameMenu` / `AddWaitGameMenu` / `AddGameMenuOption` 都是「按 id 拿到或造出那个菜单，然后往它身上加东西」——**同一个 menuId 被多个 mod 各调一次是正常且安全的**，不会互相覆盖，只会往同一个 `GameMenu` 上叠加选项。

**对话注册有一个私有中转。** `AddPlayerLine` / `AddRepeatablePlayerLine` / `AddDialogLineWithVariation` / `AddDialogLine` / `AddDialogLineMultiAgent` 五个公开方法全部构造一个 `ConversationSentence` 交给 `private ConversationSentence AddDialogLine(ConversationSentence dialogLine)`，后者转给 `this._conversationManager.AddDialogLine(dialogLine)` 并**返回原对象**——返回它是为了让你继续链式调 `sentence.Variation(...)`。这五个方法的差别只在构造时传的第 8 个参数（`1U` / `3U` / `0U`）、第 13 个参数（`true` = variation 行 vs `false`）以及 `agentIndex` / `nextAgentIndex` 两个位置。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `.ctor` | `public CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)` | 两个依赖由外部注入。只赋值两个 `readonly` 字段，**不初始化两个列表**——它们是字段初始化器 `= new List<...>()` 干的。mod 通常不自己 new 这个类。 |
| `Models` | `public IEnumerable<GameModel> Models { get; }` | 实现是 `return this._models;`。返回的是**内部列表的活视图**，不是快照。声明在 `IGameStarter` 上，所以不用转型就能读。它是 `Campaign.cs:1904-1905` 喂给两个模型管理器的唯一输入。 |
| `CampaignBehaviors` | `public ICollection<CampaignBehaviorBase> CampaignBehaviors { get; }` | 实现是 `return this._campaignBehaviors;`，同样是活引用。**不在 `IGameStarter` 上**，要转型才能读。注意返回类型是 `ICollection<>` 而不是 `IReadOnlyList<>`——外部拿到的接口其实允许 `Add`/`Remove`，改动会直接影响引擎后续的初始化。 |
| `AddModel(GameModel)` | `public void AddModel(GameModel gameModel)` | `IGameStarter` 的非泛型重载。方法体只有 `this._models.Add(gameModel);`——**纯追加，不接 `BaseModel`**。用它注册的东西能被 `GetModel<T>` 扫到，但那个对象内部没有 `BaseModel`，无法转发到被覆盖的那个。注册全新模型槽位（非覆盖）时才用得着。 |
| `AddModel<T>(MBGameModel<T>)` | `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | `IGameStarter` 的泛型重载，也是**唯一能建立覆盖链**的入口。三行：先 `GetModel<T>()` 倒序取出当前最外层的 `T`，再 `gameModel.Initialize(model)` 把它接进新对象的 `BaseModel`，最后 `this._models.Add(gameModel)`。**注意 `T` 必须是模型抽象类本身**（如 `AddModel<AgeModel>(new MyAgeModel())`），不是你的类名——这是「多方 mod 能互相叠加」的关键。 |
| `GetModel<T>` | `public T GetModel<T>() where T : GameModel` | 倒序扫描 `_models` 返回第一个 `as T` 成功的实例，扫不到返回 `default(T)`（对引用类型即 null）。**这是注册阶段专用的查询**，不在 `IGameStarter` 上，运行期模型请走 `Campaign.Current.Models.XxxModel`。 |
| `AddBehavior` | `public void AddBehavior(CampaignBehaviorBase campaignBehavior)` | `if (campaignBehavior != null) { this._campaignBehaviors.Add(campaignBehavior); }` —— **判空后入队，不调 `RegisterEvents`**。注册推迟到战役初始化由 `CampaignBehaviorManager.RegisterEvents()` 统一执行。传 null 是安全的静默 no-op。 |
| `RemoveBehaviors<T>` | `public void RemoveBehaviors<T>() where T : CampaignBehaviorBase` | `for (int i = this._campaignBehaviors.Count - 1; i >= 0; i--)` 倒序，`is T` 命中就 `RemoveAt(i)`。**只删列表项，不退订、不调 `CampaignEventDispatcher`**。它是启动阶段的工具：想在别的 mod 之后把自己的某个行为从注册表里摘掉，就靠它。 |
| `RemoveBehavior<T>` | `public bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase` | 一行 `return this._campaignBehaviors.Remove(behavior);`，按**引用相等**删单个元素，返回是否真的删掉了。同样不退订。和 `RemoveBehaviors<T>()` 的区别是「按类型删全部」vs「按实例删一个」。 |
| `UnregisterNonReadyObjects` | `public void UnregisterNonReadyObjects()` | 两行：`Game.Current.ObjectManager.UnregisterNonReadyObjects();` 然后 `this._gameMenuManager.UnregisterNonReadyObjects();`。这是**在 `InitializeGameStarter` 阶段撤销注册**的官方入口——想「取消」自己或别人某个模型的注册，就调它。注意它只覆盖对象管理器与游戏菜单管理器两条链，**不碰行为列表**。 |
| `AddGameMenu` | `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = ..., GameMenu.MenuFlags menuFlags = ..., object relatedObject = null)` | `this.GetPresumedGameMenu(menuId).Initialize(new TextObject(menuText, null), initDelegate, overlay, menuFlags, relatedObject);` ——「按 id 拿到或新建菜单，然后初始化它」。`menuText` 是**纯字符串**，会被 `new TextObject(menuText, null)` 包一层，所以想用本地化键要自己写 `{=keyId}` 前缀。 |
| `AddWaitGameMenu` | `public void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, ..., float targetWaitHours = 0f, ...)` | 与 `AddGameMenu` 同构，但 `Initialize` 的重载多了 `condition` / `consequence` / `tick` / `type` / `targetWaitHours` 五个参数——这是**「等待型」菜单**（按小时推进、条件驱动）。`targetWaitHours` 为 0 时菜单不会自己推进时间。 |
| `AddGameMenuOption` | `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)` | `GetPresumedGameMenu(menuId).AddOption(...)`。`index = -1` 表示追加到末尾；`isLeave` 标记这是「离开菜单」选项；`isRepeatable` 让选项可以重复点击。注意它调的 `GameMenu.AddOption` 是 **`internal` 方法**——只有引擎程序集内的类能调，mod 想加选项只能走 `CampaignGameStarter` 这个门面。 |
| `GetPresumedGameMenu` | `public GameMenu GetPresumedGameMenu(string stringId)` | 「presumed（假定存在）」模式：先查 `_gameMenuManager.GetGameMenu(stringId)`，null 就 `new GameMenu(stringId)` 并登记，然后返回。**三个 `AddGameMenu*` 方法全靠它**，所以同一 menuId 多次注册是叠加而非覆盖。也是 mod 想在官方菜单上追加选项时的标准入口。 |
| `AddDialogFlow` | `public void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | 直接 `this._conversationManager.AddDialogFlow(dialogFlow, relatedObject);`。这是**注册整段对话流程**（一棵树）的入口，与下面五个「加单句」的方法不同层级。`relatedObject` 用于让对话关联到某个世界对象（人物、聚落）。 |
| `AddDialogLine` | `public ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | 构造一个 `kind = 0U`（普通 NPC 行）、`isVariation = false` 的 `ConversationSentence` 并注册，**返回该句**以便继续链式修饰（如 `.Variation(...)`）。这是「往对话里插一句普通台词」的基础形状。 |
| `AddDialogLineWithVariation` | `public ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", OnClickableConditionDelegate clickableConditionDelegate = null)` | 构造 `kind = 0U` 但 `isVariation = true` 的句子，正文固定为 `new TextObject("{=!}{VARIATION_TEXT_TAGGED_LINE}", null)`——**它不带 `text` 参数**，真正的文案由你之后用 `.Variation("key", ...)` 挂上去。四个 `idle*` / `reaction*` 参数在这一层被原样传成 null（它们在 `ConversationSentence` 的 12~15 号位置），动画要靠别处补。 |
| `AddPlayerLine` | `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null, OnPersuasionOptionDelegate persuasionOptionDelegate = null)` | 构造 `kind = 1U` 的句子——**这是「玩家可以说的话」**。多出来的 `persuasionOptionDelegate` 参数被放在 `ConversationSentence` 构造的最后一位，是说服类对话选项的落点。这是 mod 加玩家选项时唯一该用的方法。 |
| `AddRepeatablePlayerLine` | `public ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | **一次注册两句**：主句是 `kind = 3U`（可重复），外加一条 id 为 `id + "_continue"` 的普通句（`kind = 1U`），条件固定为 `ConversationManager.IsThereMultipleRepeatablePages`、后果固定为 `ConversationManager.DialogRepeatContinueListing`——即「还有下一页」的翻页键。返回的是**主句**。用于「对多个对象重复同一段话，每次进下一页」。 |
| `AddDialogLineMultiAgent` | `public ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null)` | 与 `AddDialogLine` 同为 `kind = 0U`，但**直接接收 `TextObject` 而不是 `string`**（不包 `new TextObject(text, null)`），并多出 `agentIndex` / `nextAgentIndex` 两个位置参数指明「这句由第几个 agent 说、下一句交给第几个 agent」。用于多方对话的说话人轮转。 |
| `AddDialogLine`（private） | `private ConversationSentence AddDialogLine(ConversationSentence dialogLine)` | 五个公开 `AddDialogLine*` 方法共用的中转：`this._conversationManager.AddDialogLine(dialogLine); return dialogLine;`。返回原对象是为了让调用方继续链式修饰。**private，外部调不到**。 |

## 真实示例

注册一批行为 + 覆盖一个官方模型（`SandBox` 模块的标准形状）：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

        // 行为：只入队，RegisterEvents 由战役初始化统一调用
        starter.AddBehavior(new AgingCampaignBehavior());

        // 模型：必须用泛型重载，否则接不上 BaseModel、覆盖链断掉
        starter.AddModel<AgeModel>(new SlowAgingModel());
    }
}

// SlowAgingModel 必须在同一页声明出来：泛型参数是 AgeModel（被覆盖的槽位），
// 不是 SlowAgingModel 自己 —— 这是多方 mod 能互相叠加的前提。
public class SlowAgingModel : MBGameModel<AgeModel>
{
    public override int BecomeInfantAge { get { return 4; } }
    public override int BecomeChildAge { get { return 8; } }
    public override int BecomeTeenagerAge { get { return 16; } }
    public override int HeroComesOfAge { get { return 21; } }
    public override int BecomeOldAge { get { return 60; } }
    public override int MiddleAdultHoodAge { get { return 38; } }
    public override int MaxAge { get { return 100; } }

    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        minimumAge = 16;
        maximumAge = 70;
    }
}
```

在官方菜单上加一个选项（`GetPresumedGameMenu` 是唯一正确入口）：

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

    starter.AddGameMenuOption(
        "army_manage",
        "my_muster_all",
        "{=myMusterAll}Muster every company",
        conditionDelegate: null,
        consequenceDelegate: this.MusterEverything);
}

private void MusterEverything()
{
    Settlement target = null;
    foreach (Settlement settlement in Campaign.Current.Settlements)
    {
        if (settlement.IsFortification)
        {
            target = settlement;
            break;
        }
    }

    Debug.Print("muster target = " + target.Name, 0);
}
```

`GetPresumedGameMenu("army_manage")` 找不到就 new 一个空的 `GameMenu`，而空菜单不会出现在 UI 里——**只有你先 `AddGameMenu` 声明它的文本与初始化委托，这个选项才有地方挂**。上面这段只在你确定官方已注册过 `army_manage` 这个 id 时才成立。

往一段对话里加一句玩家可说的话：

```csharp
CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;
ConversationSentence line = starter.AddPlayerLine(
    "my_greet",
    "amb_town",
    "close",
    "{=myGreet}Word. Well met.",
    conditionDelegate: null,
    consequenceDelegate: this.OnGreeted);
line.Variation("greet_happy", "{=myGreetHappy}Word! You are well met, friend.");
line.Variation("greet_cold", "{=myGreetCold}Word.");
```

`AddPlayerLine` 造出的是 `kind = 1U` 的玩家行，返回后 `Variation(params object[] list)` 把多个本地化变体挂到同一个 GameText 键下——这是对话系统「一句台词多种措辞」的官方机制，`AddDialogLineWithVariation` 则是把这个机制预置好、正文留空等你填的版本。

## 风险与边界

- **不是所有成员都在 `IGameStarter` 上。** 接口只有 `AddModel(GameModel)`、`AddModel<T>(MBGameModel<T>)`、`Models`。`AddBehavior`、`AddGameMenu`、`GetModel<T>`、`CampaignBehaviors` 等 15 个成员**都需要先转型成 `CampaignGameStarter`**。在 `InitializeGameStarter` 里变量静态类型是 `IGameStarter`，直接调 `AddBehavior` 编译不过。
- **两个 `AddModel` 混用会断链。** 非泛型只 `Add`，泛型才 `Initialize(model)` 接 `BaseModel`。用非泛型注册一个覆盖型模型，它能被 `GetModel<T>` 扫到，但内部没有 `BaseModel`，你看不到前面 mod 的修改——**而且不会有任何报错**。
- **`AddModel<T>` 的 `T` 必须是模型抽象类。** `AddModel<AgeModel>(new MyAgeModel())` 正确；`AddModel<MyAgeModel>(new MyAgeModel())` 编译失败，因为 `MBGameModel<T>` 的 `T` 约束是 `GameModel` 且 `AddModel` 的语义要求 `T` 是被查找的槽位类型。
- **`AddBehavior` 不调 `RegisterEvents`。** 与运行期的 `CampaignBehaviorManager.AddBehavior`（Add 后立刻注册）语义相反。启动期依赖「行为已注册」的代码会在错误的时机执行。
- **`RemoveBehaviors<T>` 与 `RemoveBehavior<T>` 都不退订。** 它们只改 `_campaignBehaviors` 这个 `List`，**不接触 `CampaignEventDispatcher`**。若这个行为在启动阶段已经被 `RegisterEvents()` 挂过事件，删列表项不会解绑。要真正退订只有运行期的 `CampaignBehaviorManager.RemoveBehavior<T>()`，它调 `CampaignEventDispatcher.Instance.RemoveListeners(t)`。
- **`UnregisterNonReadyObjects` 只覆盖两条链。** 它调 `Game.Current.ObjectManager.UnregisterNonReadyObjects()` 与 `_gameMenuManager.UnregisterNonReadyObjects()`，**不碰行为列表、不碰 `_models`**。想撤销模型注册得自己拿 `INonReadyObjectHandler` 那条路。
- **`Models` 与 `CampaignBehaviors` 返回的是活引用。** `Models` 是 `IEnumerable<GameModel>` 视图，`CampaignBehaviors` 的返回类型 `ICollection<>` 在接口层面允许 `Add`/`Remove`。引擎在 `Campaign.cs:1904-1905` 取 `Models` 后立刻 `ToMBList<GameModel>()` 快照——**你在这之后 `AddModel` 对已建好的 [GameModels](../GameModels) 没有任何影响**。
- **对话方法的返回类型不一致。** `AddDialogFlow` 返回 `void`；`AddPlayerLine` / `AddRepeatablePlayerLine` / `AddDialogLineWithVariation` / `AddDialogLine` / `AddDialogLineMultiAgent` 返回 `ConversationSentence`。想链式修饰 `Variation(...)` 就必须用后者这五个之一。
- **`AddDialogLineWithVariation` 的四个动画参数在 1.3.0 被传成 null。** `idleActionId` / `idleFaceAnimId` / `reactionId` / `reactionFaceAnimId` 在方法签名里存在，但 `CampaignGameStarter.cs` 的构造调用把对应位置写成 `null, false, null, null, null` 之类的固定值。**别指望设了它们就有动画。**
- **`AddRepeatablePlayerLine` 会注册两句话。** 主句 id 是你传的 `id`，翻页句 id 是 `id + "_continue"`。id 撞车会导致 `ConversationManager.AddDialogLine` 拿到重复项。
- **`AddGameMenuOption` 依赖菜单已存在。** 它只 `AddOption`，不给菜单文本与初始化委托。对一个没人注册过的 menuId，它会造出一个空 `GameMenu` 再挂上选项——那个菜单没有 `menuText`，UI 上不会出现。

## 怎么用

### 怎么拿到它

**它不是你去拿的，是引擎传进来的。** 整条链在 `TaleWorlds.CampaignSystem/Campaign.cs`：

```
:1896   CampaignGameStarter campaignGameStarter = new CampaignGameStarter(this.GameMenuManager, this.ConversationManager);
:1897   this.SandBoxManager.Initialize(campaignGameStarter);       官方模型在这里注册
:1898   base.GameManager.InitializeGameStarter(base.CurrentGame, campaignGameStarter);   模块子模块在这里扇出
:1905   base.CurrentGame.SetBasicModels(campaignGameStarter.Models);
:1906   this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);
:1928   this.SandBoxManager.OnCampaignStart(campaignGameStarter, ...);
:1935   this.AddCampaignBehaviorManager(new CampaignBehaviorManager(campaignGameStarter.CampaignBehaviors));
:1941   this._campaignBehaviorManager.InitializeCampaignBehaviors(campaignGameStarter.CampaignBehaviors);
```

你的接入口就是 `:1898` 那一行的回调，也就是 `MBSubModuleBase.InitializeGameStarter(Game game, IGameStarter gameStarterObject)`。但**参数类型是 `IGameStarter`**，它只声明了 `AddModel(GameModel)`、`AddModel<T>(MBGameModel<T>)` 和 `Models`（`TaleWorlds.Core/IGameStarter.cs:7`）。行为注册、`AddGameMenu`、`AddDialogFlow` 这些都不在接口上，所以要先转型成 `CampaignGameStarter`。

### 典型用法

在一个回调里把模型、行为、菜单都注册好：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.CampaignSystem.GameComponents;
using TaleWorlds.CampaignSystem.GameMenus;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        if (!(game.GameType is Campaign))
        {
            return;
        }

        // 接口上没有这些方法，必须先转型。
        var starter = (CampaignGameStarter)gameStarterObject;

        // 类型参数用抽象模型，具体实现当值传。
        starter.AddModel<AgeModel>(new MyAgeModel());

        starter.AddBehavior(new MyTollBehavior());

        // 先有菜单，再挂选项：AddGameMenuOption 不负责创建菜单。
        starter.AddGameMenu("my_menu", "My Menu", OnInit);
        starter.AddGameMenuOption("my_menu", "my_option", "Do it", OnCondition, OnConsequence);
    }

    private static void OnInit(MenuCallbackArgs args)
    {
    }

    private static bool OnCondition(MenuCallbackArgs args)
    {
        return true;
    }

    private static void OnConsequence(MenuCallbackArgs args)
    {
    }
}
```

签名核对：`AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`（`TaleWorlds.CampaignSystem/CampaignGameStarter.cs:95`）；`AddBehavior(CampaignBehaviorBase)`（`:48`）；`AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = ..., GameMenu.MenuFlags menuFlags = ..., object relatedObject = null)`（`:103`）；`AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`（`:115`）——**七个参数，后四个都有默认值。**

### 最容易踩的坑

**注册晚了。不报错，但完全不生效。**

两个集合在战役启动过程中都被**拷贝成了快照**，之后你再改原对象没有任何意义：

```
TaleWorlds.Core/GameModelsManager.cs:13          this._gameModels = inputComponents.ToMBList<GameModel>();
TaleWorlds.CampaignSystem/CampaignBehaviors/CampaignBehaviorManager.cs:29
                                                this._campaignBehaviors = inputComponents.ToList<CampaignBehaviorBase>();
```

`GameModels` 那个快照发生在 `Campaign.cs:1906`，行为那个在 `Campaign.cs:1935`（存档路径则是 `Campaign.cs:1941`）。而 `GameModels` 的构造函数（`GameModels.cs:759`）一构造就把每个 `GetGameModel<T>()` 的结果**存成了字段**——比如 `AgeModel` 在 `GameModels.cs:705`、`SettlementAccessModel` 在 `GameModels.cs:721`。

后果链条是这样的：你从某个行为的事件回调里、或从 `OnCampaignStart` 之后的任何时机去 `starter.AddModel<XModel>(...)`，`starter` 本身不报错（`_models.Add` 成功），但 `GameModels` 里那个字段早就定死了。你以为装上了自己的实现，`Campaign.Current.Models.XModel` 实际要么是官方的旧实现，要么——如果这条注册路径压根没被走过——是 `default(T)`，也就是 **null**。然后你会得到一个 `NullReferenceException`，**栈顶离真正的错误原因隔了好几层**，报错位置在某个业务逻辑里，而不是在注册那一行。

所以：**注册只做在 `InitializeGameStarter` 里**。`Campaign.cs:1898` 在 `:1906` 和 `:1935` 两个快照之前，是唯一安全的窗口；它晚于 `:1897` 的 `SandBoxManager.Initialize`，所以后注册的会赢。

## 跨版本提示

`CampaignGameStarter` 的 public 表面在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五棵树里高度稳定：`CampaignBehaviors` / `Models` 两个属性、两个 `AddModel` 重载、`GetModel<T>`、`AddBehavior`、两个 `RemoveBehavior*`、`UnregisterNonReadyObjects`、`GetPresumedGameMenu`、三个 `AddGameMenu*`、六个对话方法，签名与可见性均无变化。

**变的是新增的重载与新增的注册品类。** 后续版本给菜单和对话加过新的便捷重载（参数更多、覆盖更多场景），给 `CampaignGameStarter` 加过新的注册门面。实践结论：**升级后先编译一遍**，若有 "no overload for method" 的报错，看一眼新签名再改，不要假设它没变。

另一条更重要的：**`IGameStarter` 接口本身可能新增成员**。如果哪个版本给接口加了 `AddXxx`，而你实现了一个自己的 `IGameStarter`（少数 mod 会这么做以便在测试中替换启动器），就会因为没实现新成员而编译失败。**优先用 `(CampaignGameStarter)gameStarterObject` 转型而不是自己实现接口**，成本低得多。

最后，`CampaignGameStarter` 与 `BasicGameStarter` 是两个不同的类：后者在 `TaleWorlds.MountAndBlade`，服务任务侧，也是 `IGameStarter` 的另一个实现。`InitializeGameStarter` 的参数运行期到底是哪一个，取决于当前是战役还是任务——**不要写死类型假设，先转型，转型失败会立刻暴露而不是静默走错分支**。

## 依赖关系

- 构造器注入：[GameMenuManager](../GameMenuManager) 与 [ConversationManager](../ConversationManager) 是本类仅有的两个依赖，菜单与对话注册全靠它们落地
- 接口声明：[IGameStarter](../../core-extra/IGameStarter) 只承诺 3 个成员，其余 15 个是本类自带的战役侧扩展面
- 被消费方：[Campaign](../Campaign) 在 `InitializeGameStarter` 之后取走 `Models`（两次）与 `CampaignBehaviors`（交给 `CampaignBehaviorManager`）
- 产物之一：[GameModels](../GameModels) 是 `AddGameModelsManager<GameModels>(campaignGameStarter.Models)` 的产物，123 个槽位从这条链填满
- 行为侧：[CampaignBehaviorBase](../CampaignBehaviorBase) 是 `AddBehavior` 收的类型；[CampaignBehaviorManager](../CampaignBehaviorManager) 负责后续的 `RegisterEvents` 与存档
- 覆盖机制：[GameModel](../../core-extra/GameModel) 与 [MBGameModel](../../core-extra/MBGameModel) 是泛型 `AddModel<T>` 建立的装饰式覆盖链的两端
- 对话产物：[ConversationSentence](../ConversationSentence) / [DialogFlow](../DialogFlow) 是五个 `AddDialogLine*` 方法的返回与入参
- 模块入口：[MBGameManager](../../mission-ext/MBGameManager) 的 `InitializeGameStarter` 遍历所有子模块，参见 [module-system 架构页](../../../architecture/module-system)
- 桶首页：[campaign API 分区](../)