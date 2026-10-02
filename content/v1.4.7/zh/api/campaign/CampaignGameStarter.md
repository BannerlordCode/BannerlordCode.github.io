---
title: "CampaignGameStarter"
description: "战役期扩展点的注册台：在 MBSubModuleBase.OnGameStart 里拿到它，就能把 Behavior、游戏模型、地图菜单、对话流程注入正在构建的 Campaign 实例。"
---
# CampaignGameStarter

**命名空间：** `TaleWorlds.CampaignSystem`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public class CampaignGameStarter : IGameStarter`
**基类：** 实现 `TaleWorlds.Core.IGameStarter`
**源文件：** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`（声明见第 11 行）

## 概述

`CampaignGameStarter` 是战役层的**依赖注入容器构建器**。它在战役初始化开始时被创建，向 mod 暴露一组「Add…」方法：加 Behavior、加游戏模型、加地图菜单、加对话流程。所有游戏内容（本体与 mod）都通过这一个对象注册，所以它的调用顺序直接决定了谁能先看到谁。

在栈中的位置很清楚：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart(Game game, IGameStarter gameStarterObject)` 收到的 `IGameStarter`，在战役模式下就是这个 `CampaignGameStarter`（联机模式下是另一个实现）。mod 在这里注册的东西，会在同一次启动中后续被调用的其它模块看到——**模块加载顺序即注册顺序，也即可见性顺序**。想保证自己的 Behavior 先于别人的 Behavior 运行，就不能依赖这个顺序，而应该在自己的 `OnCampaignStart` 里做实际工作，而不是在注册时立刻执行。

它还持有 `GameMenuManager` 与 `ConversationManager` 两个构造参数——菜单与对话系统都在战役创建期间就已经存在，所以菜单可以在建战役的同时注册，而不必等到 `Campaign.Current` 可用。

## 心智模型

**核心心智模型：这是一个「只写」的构建期容器，唯一正确的使用窗口是 `OnGameStart`。**

1. **判断类型再注册。** `gameStarterObject is CampaignGameStarter starter` 是标准写法。参数声明为 `IGameStarter`，因为联机 / 单机 / 自定义游戏模式各有实现；不加类型判断就调用 `AddBehavior` 会在别的模式下抛 `InvalidCastException`。
2. **注册 ≠ 生效。** `AddBehavior(b)` 只是把实例放进列表；引擎随后统一调用它的 `RegisterEvents()`。如果你在 `AddBehavior` 之后立刻调 `Campaign.Current.GetCampaignBehavior<MyBehavior>()`，多半拿到 `null`。
3. **菜单要在建战役的同时加。** `AddGameMenu` / `AddWaitGameMenu` / `AddGameMenuOption` 依赖构造函数注入的 `GameMenuManager`，那时它已就绪。等 `OnCampaignStart` 再加菜单通常来得及，但加对话流程（`AddDialogFlow`）就要更早。
4. **模型替换决定「谁覆盖谁」。** `AddModel(GameModel)` 注册，`GetModel<T>()` 取回。同一个泛型注册多个时，后加的通常覆盖先加的——所以替换 `Campaign.Models.Xxx` 时要意识到你正在覆盖别人的成果，尤其是本体模型。
5. **`UnregisterNonReadyObjects()` 是收尾钩子。** 它在启动阶段末尾把尚未准备好的对象摘掉。如果你的对象在该时刻仍是「未就绪」状态，就会被静默移除且没有异常。

最常见的三个错误：把注册写在 `OnGameStart` 之外（战役已建好，Behavior 列表已冻结）；在 `AddBehavior` 里同步执行逻辑而不是等 `RegisterEvents`；以及在注册时假设 `Campaign.Current != null`（这一阶段它往往还是 null）。

## 何时使用 / 何时不要使用

- **使用**：在 `MBSubModuleBase.OnGameStart` 中注册 Behavior、游戏模型、地图菜单、等待菜单、菜单项、对话流程。
- **使用**：运行时移除 Behavior（`RemoveBehaviors<T>()` / `RemoveBehavior<T>(T)`），用于按开关关闭整块 mod 功能。
- **使用**：`GetPresumedGameMenu(string stringId)` 拿到 `AddWaitGameMenu` 注册的菜单引用，以便追加菜单项。
- **不要**：在 `OnCampaignStart` 或更晚的时机调用 `AddBehavior`——那时战役已经组装完成，新增的 Behavior 收不到 `RegisterEvents`。
- **不要**：在非战役模式（联机大厅、编辑模式）下不加类型判断就调用本类方法。

## 成员说明

### Behavior 与模型

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddBehavior(CampaignBehaviorBase campaignBehavior)` | 注册一个 Behavior 实例。**这是绝大多数 mod 逻辑的入口**。引擎随后调用其 `RegisterEvents()`。同一个类型注册两次会得到两个实例，`GetCampaignBehaviors<T>()` 能取到两个。 |
| `void RemoveBehaviors<T>() where T : CampaignBehaviorBase` | 按类型移除全部 Behavior 实例。用于按模组开关整体关闭功能。 |
| `bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase` | 移除指定实例，返回是否真的移除了。 |
| `T GetModel<T>() where T : GameModel` | 按类型取回已注册的模型；未注册返回 `null`。用于检查某个模型是否已被别人替换。 |
| `void AddModel(GameModel gameModel)` | 注册一个游戏模型（`Campaign.Models.Xxx` 的来源）。 |
| `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | 注册带默认值的模型包装。 |

### 菜单

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)` | 注册一个常驻地图菜单。`initDelegate` 在菜单打开时调用。`OnInitDelegate` 的参数是 `MenuCallbackArgs`。 |
| `void AddWaitGameMenu(string idString, string text, OnInitDelegate initDelegate, OnConditionDelegate condition, OnConsequenceDelegate consequence, OnTickDelegate tick, GameMenu.MenuAndOptionType type, GameMenu.MenuOverlayType overlay = None, float targetWaitHours = 0f, GameMenu.MenuFlags flags = None, object relatedObject = null)` | 注册一个「等待型」菜单（部队等待、围城等待等）。`condition` 决定是否显示，`consequence` 在选择后执行，`tick` 每次推进时调用。 |
| `void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)` | 给已存在的菜单加选项。`condition` 返回 false 时该选项灰掉。**`GameMenu.AddOption` 在 1.4.7 是 `internal`，从 mod 代码调不到——必须走这个公开方法。** |
| `GameMenu GetPresumedGameMenu(string stringId)` | 取回（或预设）一个菜单实例。内部实现是先 `GetGameMenu`，找不到就创建——所以它可以用于「确保这个菜单存在」。 |

### 对话

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `void AddDialogFlow(DialogFlow dialogFlow, object relatedObject = null)` | 注册一个对话流程。`DialogFlow` 由 `ConversationManager` 侧的工厂构造。 |
| `ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate conditionDelegate, OnConsequenceDelegate consequenceDelegate, int priority = 100, OnClickableConditionDelegate clickableConditionDelegate = null, OnPersuasionOptionDelegate persuasionOptionDelegate = null)` | 添加玩家话语行，返回句柄以便后续追加分支。 |
| `ConversationSentence AddRepeatablePlayerLine(string id, string inputToken, string outputToken, string text, string continueListingRepeatedObjectsText, string continueListingOptionOutputToken, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, OnClickableConditionDelegate = null)` | 可重复触发的玩家话语行（每次对话都要显示）。 |
| `ConversationSentence AddDialogLine(string id, string inputToken, string outputToken, string text, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, OnClickableConditionDelegate = null)` | 添加 NPC 话语行。 |
| `ConversationSentence AddDialogLineWithVariation(string id, string inputToken, string outputToken, OnConditionDelegate, OnConsequenceDelegate, int priority = 100, string idleActionId = "", string idleFaceAnimId = "", string reactionId = "", string reactionFaceAnimId = "", OnClickableConditionDelegate = null)` | 带待机动作、表情与反应的对话行。 |
| `ConversationSentence AddDialogLineMultiAgent(string id, string inputToken, string outputToken, TextObject text, OnConditionDelegate, OnConsequenceDelegate, int agentIndex, int nextAgentIndex, int priority = 100, OnClickableConditionDelegate = null)` | 多说话人对话行，指定当前与下一个发言者索引。 |

### 生命周期与构造

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `CampaignGameStarter(GameMenuManager gameMenuManager, ConversationManager conversationManager)` | 构造函数。参数由引擎注入，mod 不会直接构造。 |
| `void UnregisterNonReadyObjects()` | 启动阶段末尾调用，移除尚未准备好的注册对象。覆写后**必须调用 `base`**，否则会破坏引擎的收尾逻辑。 |

## 示例

### 示例 1：标准的模块注册入口

类型判断 + 只注册不执行，是这个回调的两条铁律。

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        if (gameStarterObject is CampaignGameStarter campaignStarter)
        {
            campaignStarter.AddBehavior(new VisitCounterBehavior());   // 只注册，不执行
            campaignStarter.AddBehavior(new DiplomacyBehavior());
        }
    }
}
```

### 示例 2：注册自定义地图菜单与菜单项

`OnInitDelegate` 的参数是 `MenuCallbackArgs`，菜单 id 通过 `args.MenuContext.GameMenu.StringId` 取。菜单项必须在启动回调里加，不能在菜单初始化时加——因为 `AddGameMenuOption` 需要 `CampaignGameStarter` 实例。

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.GameMenus;

public class MenuBehavior : CampaignBehaviorBase
{
    public MenuBehavior() : base("MyMod.Menu") { }

    public override void RegisterEvents()
    {
        CampaignEvents.OnAfterSessionLaunchedEvent.AddNonSerializedListener(this, OnStarterReady);
    }

    public override void SyncData(IDataStore dataStore) { }

    private void OnStarterReady(CampaignGameStarter starter)
    {
        // 菜单本体 + 菜单项，都必须在启动回调里完成注册
        starter.AddGameMenu("my_mod_menu", "我的菜单", OnMenuInitialize);
        starter.AddGameMenuOption("my_mod_menu", "my_option", "我的选项",
                                   OnCondition, OnConsequence);
    }

    private void OnMenuInitialize(MenuCallbackArgs args)
    {
        // initDelegate 收到的就是 MenuCallbackArgs；菜单 id 走 MenuContext
        if (args.MenuContext.GameMenu.StringId != "my_mod_menu") return;
    }

    private bool OnCondition(MenuCallbackArgs args) => true;

    private void OnConsequence(MenuCallbackArgs args)
    {
        // 选项被点击
    }
}
```

### 示例 3：按开关移除 Behavior，并探测模型是否已被替换

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);

    if (gameStarterObject is not CampaignGameStarter starter)
    {
        return;   // 非战役模式（联机大厅 / 编辑器）
    }

    if (MyConfig.Enabled)
    {
        starter.AddBehavior(new DiplomacyBehavior());

        // 确认某模型是否已被别人替换，避免重复覆盖
        if (starter.GetModel<MyCustomModel>() == null)
        {
            starter.AddModel(new MyCustomModel());
        }
    }
    else
    {
        // 直接不注册即可；已注册则用下面这行按类型移除
        starter.RemoveBehaviors<DiplomacyBehavior>();
    }
}
```

## 风险与边界

- **`Campaign.Current` 在注册期通常为 null**。`OnGameStart` 发生在战役对象组装期间，此刻读写 `Campaign.Current` 会拿到 null 或半成品。要读世界数据就放到 `OnCampaignStart` 或 Behavior 的 `RegisterEvents` 之后。
- **注册窗口关闭后不可补注册**。`AddBehavior` 只在启动阶段有效。在战役已开始后调用，Behavior 拿不到 `RegisterEvents()`，于是「静默失效」——不报错，但逻辑永远不运行。这是 mod「注册了却没效果」的头号原因。
- **模块加载顺序 = 注册顺序 = 可见性顺序**。后注册的模型覆盖先注册的；想覆盖官方模型必须后注册，但也就意味着覆盖了别人已经修好的东西。用 `GetModel<T>()` 先探测。
- **`UnregisterNonReadyObjects()` 覆写必须调 base**。这是启动阶段最后一个收尾钩子，跳过它会留下未准备好的对象。
- **联机 / 非战役模式**：`IGameStarter` 在联机模式下不是 `CampaignGameStarter`。少了 `is` 判断就是 `InvalidCastException`。
- **对话注册依赖 `ConversationManager`**：构造函数已注入，但 `AddDialogFlow` 内部会使用它，过晚调用会拿到未初始化状态。
- **菜单 ID 是全局字符串**。两个 mod 用同一个 `menuId` 会互相覆盖，症状是选项时有时无。
- **单线程**：所有注册调用必须在主线程的启动流程里完成，不能从异步加载回调里调用。

## 依赖关系

- 上游 / 提供者：
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart(Game, IGameStarter)` 把本类交给 mod。
  - [Game](../../core-extra/Game) 通过 `IGameStarter` 驱动整个启动装配流程。
- 相互 / 下游：
  - [CampaignBehaviorBase](../CampaignBehaviorBase) 是 `AddBehavior` 的目标类型。
  - [Campaign](../Campaign) 接收注册结果，并用 `GetCampaignBehavior<T>()` 取回。
  - [CampaignEvents](../CampaignEvents) 的 `OnSessionLaunchedEvent` / `OnAfterSessionLaunchedEvent` 提供另一个（战役侧）注册窗口。
  - 战斗层有平行的任务级 GameStarter（位于 `mission-ext` 桶），任务内扩展点走它，不走本类。

## 参见

- ↑ 父级：[战役 API 索引](../)
- ↔ 相关：[Campaign](../Campaign) · [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignEvents](../CampaignEvents) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Game](../../core-extra/Game)