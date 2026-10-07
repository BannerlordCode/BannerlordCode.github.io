---
title: "CampaignGameStarter"
description: "战役启动期唯一的注册入口：在 OnGameStart 拿到它，就能往战役里加 behavior、替换 GameModel、挂游戏菜单项和对话流，加的东西会随战役一起存档与销毁。"
---

# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CampaignGameStarter : IGameStarter`
**Base:** `IGameStarter`（TaleWorlds.Core，游戏类型无关的启动期接口）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## 概述

`CampaignGameStarter` 是「战役还没跑起来、但对象都还没被冻结」的短暂窗口句柄。mod 的绝大多数注册工作——加 [CampaignBehaviorBase](../CampaignBehaviorBase)、覆盖 [GameModel](../../core-extra/GameModel)、加游戏菜单项、加对话句——都必须在这个对象上完成，因为战役启动完成后这些集合就不再接受变更。它不是配置容器，也不是能长期持有的服务引用：战役结束时它连同里面的 behavior 一起被丢弃，所以别把它的属性缓存到静态字段里。

## 心智模型

它在战役生命周期的最前端，只活一个阶段：

1. 引擎调用 `MBSubModuleBase.OnGameStart(Game, IGameStarter)`，把 `CampaignGameStarter` 作为 `starterObject` 传进来；
2. 各 submodule 在这个对象上追加注册项（原生模块先注册，你的模块按加载顺序排在后面）；
3. 战役初始化把 `CampaignBehaviors` 灌进 [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager)、把 `Models` 灌进 [GameModels](../GameModels)；
4. `UnregisterNonReadyObjects()` 清掉登记了一半的 XML 对象；
5. 之后进入 `Campaign.RealTick` 主循环，Starter 不再被使用。

内部三个集合：`_campaignBehaviors`（`CampaignBehaviorBase`）、`_models`（`GameModel`）、以及从构造函数传入的 `GameMenuManager` / `ConversationManager`——菜单与对话的注册是通过它们完成的。

**关键语义：模型与 behavior 都是「后加的赢」。** `GetModel<T>()` 从 `_models` 的**末尾往前**遍历，先命中的就是最后注册的那个。`CampaignBehaviorManager.GetBehavior<T>()` 同理。这意味着覆盖原生模型时，你必须确保自己的注册发生在原生之后（用 `SubModuleLoadOrder` 控制），而不是靠「先到先得」的直觉。

**常见误用与坑**

1. 在 `OnGameStart` 之外（例如 `DailyTick` 里）调用 `AddBehavior`——behavior 集合此时已经定型，你加的东西不会被序列化，读档后消失。
2. 指望 `AddBehavior(null)` 报错：实现里有 null 判断，静默忽略，排查时毫无痕迹。
3. 用 `AddModel<T>(MBGameModel<T>)` 却不先确认基类模型已存在：如果没人注册过 `T`，`Initialize(model)` 收到 `null`，你的包装模型在第一次被查询时才 NRE。
4. 复用同一个 starter 实例给多个战役——`CampaignGameStarter` 一对一对应一次新游戏启动。

## 怎么用

### 怎么拿到它

唯一构造点在 `Campaign.Initialize` 里：`campaignGameStarter = new CampaignGameStarter(this.GameMenuManager, this.ConversationManager)`（`Campaign.cs:1952`）。紧接着它就被逐层分发出去——`SandBoxManager.Initialize(campaignGameStarter)`（`Campaign.cs:1953`）→ `GameManager.InitializeGameStarter(...)`（`Campaign.cs:1954`）→ `GameManager.OnGameStart(game, starter)`（`Campaign.cs:1960`），后者就是 mod 收到的 `MBSubModuleBase.OnGameStart` 第二个参数。所以你拿到的实例是这一局的专属对象，用完即弃；战役结束时 `Campaign.cs:1691` 之外的整张战役状态都会被丢掉，不要把 starter 或它返回的东西缓存进静态字段。

在那之后，starter 上的内容被固化到两个地方：`_models` 在 `Campaign.cs:1962` 被交给 `AddGameModelsManager<GameModels>(campaignGameStarter.Models)` 变成 `Campaign.Models`；`CampaignBehaviors` 在 `Campaign.cs:1991` 变成 `CampaignBehaviorManager`。

### 典型用法

```csharp
// 标准接入点：MBSubModuleBase 的 OnGameStart，starterObject 就是它
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);

    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

    // 1) 顶掉原生模型：先取当前生效的，再包一层（BaseModel 里有原实现）
    var prosperity = new MyProsperityModel(starter.GetModel<DefaultSettlementProsperityModel>());
    starter.AddModel<DefaultSettlementProsperityModel>(prosperity);

    // 2) 注册行为：启动期过后引擎不再读这个集合
    starter.RemoveBehaviors<MySupplyBehavior>();      // 先清同类型，保证 GetBehavior<T> 只命中一个
    starter.AddBehavior(new MySupplyBehavior());

    // 3) 往已有游戏菜单挂一个选项（完整签名 CampaignGameStarter.cs:115，后四个参数都有默认值）
    starter.AddGameMenuOption("camp", "open_supply", "{=mymod_open_supply}",
        onCondition: () => Campaign.Current.MainParty != null,
        onConsequence: () => ScreenManager.PushScreen(new MySupplyScreen()));
}
```

### 最容易踩的坑

指望注册「晚一点再做」。`AddBehavior` 只是 `_campaignBehaviors.Add(...)`（`CampaignGameStarter.cs:48`），而这份列表只在启动期被读一次：非读档战役走 `Campaign.cs:1991` 一次性灌进 manager，读档战役走 `Campaign.cs:1997`。之后 `CampaignGameStarter` 就没有任何消费者了。后果是你在 `DailyTick` 或某个界面回调里补注册的行为不会进入 `CampaignBehaviorManager._campaignBehaviors`（`CampaignBehaviorManager.cs:29`），于是它既不会出现在 `GetCampaignBehavior<T>()` 的结果里，`OnBeforeSave`（`CampaignBehaviorManager.cs:42`）也不会调它的 `SyncData`——存完档再读，状态归零，且全程没有任何报错。模型的 `AddModel` 同理：`Campaign.Models` 在 `Campaign.cs:1962` 之后就是快照。

## 成员与调用时机

**Behavior 注册**

- `void AddBehavior(CampaignBehaviorBase)`：加一个 behavior 实例。传 `null` 静默返回。加完后它会参与存档同步与事件注册。
- `bool RemoveBehavior<T>(T behavior)`：按引用移除，命中返回 `true`。
- `void RemoveBehaviors<T>()`：移除该类型**全部** behavior（`CampaignBehaviorBase`）。想顶替原生行为时常用。
- `ICollection<CampaignBehaviorBase> CampaignBehaviors`：集合本身。可以在注册期遍历检查已有 behavior，但**不要在注册期就地修改**。

**Model 注册**

- `void AddModel(GameModel)`：注册一个裸模型。若已有同类型模型，你的会覆盖它（末尾优先）。
- `void AddModel<T>(MBGameModel<T> gameModel)`：注册「包装型」模型。内部先 `GetModel<T>()` 取当前基类模型，再 `gameModel.Initialize(model)`，最后加入列表。想在原模型上打补丁就用这个重载，`BaseModel` 里能拿到原实现。
- `T GetModel<T>() where T : GameModel`：按类型查询当前生效的模型，注册期用来确认覆盖是否成功。

**游戏菜单**

- `void AddGameMenu(string menuId, string menuText, OnInitDelegate init, MenuOverlayType overlay, MenuFlags flags, object relatedObject)`：注册一个游戏内菜单页。
- `void AddWaitGameMenu(...)`：注册带等待条件的菜单（典型：等待队伍抵达某处才触发）。
- `void AddGameMenuOption(string menuId, string optionId, string optionText, OnConditionDelegate condition, OnConsequenceDelegate consequence, bool isLeave, int index, bool isRepeatable, object relatedObject)`：往已有菜单加选项。`condition` 返回 `false` 时选项灰显。
- `GameMenu GetPresumedGameMenu(string stringId)`：按 id 取菜单对象，取不到返回 `null`。

**对话**

- `void AddDialogFlow(DialogFlow dialogFlow, object relatedObject)`：挂一整段对话流程。
- `ConversationSentence AddPlayerLine(...)` / `AddRepeatablePlayerLine(...)`：加玩家可选台词，后者支持对同一列表反复询问。
- `ConversationSentence AddDialogLine(...)` / `AddDialogLineWithVariation(...)` / `AddDialogLineMultiAgent(...)`：加 NPC 台词，后者两个分别支持随机变体和多 agent 接力。

**收尾**

- `void UnregisterNonReadyObjects()`：引擎在注册结束后调用，把没填完必填字段的 XML 对象摘掉。你不需要（也不该）自己调用。

## 真实示例

```csharp
// MBSubModuleBase.OnGameStart(Game game, IGameStarter gameStarterObject)
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);

    CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

    // 1) 先顶掉原生的村庄繁荣度模型（包装式：BaseModel 里留着原实现）
    starter.AddModel<MySettlementProsperityModel>(
        new MySettlementProsperityModel((DefaultSettlementProsperityModel)starter.GetModel<DefaultSettlementProsperityModel>()));

    // 2) 移除全部同类型 behavior，再装自己的
    starter.RemoveBehaviors<MySupplyBehavior>();
    starter.AddBehavior(new MySupplyBehavior());

    // 3) 加菜单项
    starter.AddGameMenuOption("camp", "open_supply", "打开补给面板",
        () => Campaign.Current.MainParty != null,
        () => { ScreenManager.PushScreen(new MySupplyScreen()); },
        false, -1, false);
}
```

## 风险与边界

- **注册期唯一**：任何 `Add*` 调用都必须在 `OnGameStart` 同步完成。放到 `AfterAsyncTickTick` 里加的 behavior，战役结束前的效果取决于引擎是否再次读取集合，不可依赖。
- **覆盖顺序依赖模块加载序**：`_models` 与 behavior 都是「后注册的赢」。如果你的 `SubModuleLoadOrder` 早于原生模块，覆盖会静默失效。用 `starter.GetModel<T>()` 在注册末尾自查一次。
- **存档一致性**：behavior 里用 `[SaveableField]` 声明的字段，只有在它被成功注册进 manager 时才会写进存档。没注册成功的 behavior 在读档后是全新实例，内部状态归零。
- **`AddModel<T>` 的 null 基类**：`T` 无人注册时 `Initialize(null)`，错误延迟到首次查询才爆。注册后立刻 `starter.GetModel<T>()` 验证非空。
- **跨域方向**：`CampaignGameStarter` 在 CampaignSystem 层，只能加 CampaignSystem/Core 的东西。想加界面要在 ScreenSystem 侧的 [ScreenBase](../../gui/ScreenBase) 或 [MBSubModuleBase](../../core/MBSubModuleBase) 回调里做。

## 依赖关系

- [CampaignBehaviorBase](../CampaignBehaviorBase) — `AddBehavior` 收的就是它，读档同步靠它的 `SyncData`
- [CampaignBehaviorManager](../../campaign-ext/CampaignBehaviorManager) — 战役启动后接管这些 behavior，提供 `GetBehavior<T>()`
- [GameModel](../../core-extra/GameModel) — `AddModel` 的元素类型，所有平衡规则的基类
- [MBGameModel](../../core-extra/MBGameModel) — `AddModel<T>` 的包装基类，提供 `BaseModel`
- [MBCampaignEvent](../MBCampaignEvent) — behavior 里注册周期回调时用它包一层时间触发器