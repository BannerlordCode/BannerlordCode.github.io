---
title: "CampaignGameStarter"
description: "战役初始化阶段由引擎创建、交给各 SubModule 的注册器：用来向新战役注册 CampaignBehaviorBase 行为与 GameModel 模型，以及菜单、对话等内容。它本身是一次性“登记簿”，生命周期只在战役启动的极短时间内。"
---
# CampaignGameStarter

**Namespace:** TaleWorlds.CampaignSystem  
**Module:** TaleWorlds.CampaignSystem  
**Type:** `public class CampaignGameStarter : IGameStarter`  
**Base:** `IGameStarter`  
**File:** `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`

## 概述

`CampaignGameStarter` 是 Bannerlord 在**新战役创建 / 读档加载**那一刻，用来把“行为（behavior）”“模型（model）”以及菜单、对话等战役内容**登记进游戏**的收集器。它不像 `Campaign` 那样长期存活，而是一个“短命登记簿”：引擎在 `Campaign` 的初始化流程里 `new` 出来（`Campaign.cs` 第 1904 行，构造函数需要 `GameMenuManager` 与 `ConversationManager`），先让 `SandBoxManager` 写入所有内置 behavior 与 model，再逐个调用各 SubModule 的 `InitializeGameStarter` / `OnCampaignStart` 钩子把 mod 的内容也加进去，最后用它内部的两份列表（`_campaignBehaviors`、`_models`）去构造 `CampaignBehaviorManager` 与 `GameModels`。行为一旦登记完，这个 starter 就被丢弃，你手里拿到的引用便不再影响运行中的战役。

`IGameStarter` 接口本身只声明了 `AddModel(GameModel)`、`AddModel<T>(MBGameModel<T>)` 与 `Models`；`AddBehavior` 及所有菜单/对话登记方法都是 `CampaignGameStarter` 在战役层额外提供的。

## 心智模型

把它想成**“开新档时引擎递给你的那张登记表”**，而不是一个服务或状态对象：

- 它由 `Campaign` 在战役加载流程中创建，**你不要自己 `new CampaignGameStarter(...)`**，也不要在战役跑起来之后长期保存它的引用——它只在那一小段时间里有效。
- 真正“让行为活起来”的是它登记完后构造出来的 `CampaignBehaviorManager`；starter 只是把 `CampaignBehaviorBase` 实例先收进 `ICollection`，随后由管理器统一调用每个 behavior 的 `RegisterEvents()`。
- 登记时机只有一次：在 `MBSubModuleBase` 的 `OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded` 钩子里。错过这个窗口再 `AddBehavior` 没有任何效果，因为行为管理器已经建好。
- 同一 behavior **不要登记两次**（详见“风险与崩溃边界”）；model 同理，重复 `AddModel` 只会被多次计入，取用时按逆序返回最后一个。

## 如何注册 Behavior / Model

你拿不到、也不该 `new` 一个 `CampaignGameStarter`。引擎在战役初始化时会把它作为参数传给 `MBSubModuleBase` 的几个钩子，你要做的是**重写对应钩子、把参数转成 `CampaignGameStarter`、调用 `AddBehavior` / `AddModel`**。

最常用、也最直接对应“新战役里加 behavior”的钩子是 `OnCampaignStart`：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        // 新战役 / 教学 / 编辑器开局时触发；读档走 OnGameLoaded
        protected internal override void OnCampaignStart(Game game, object starterObject)
        {
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }
}
```

如果你想让 behavior **既能在新档、也能在读档时都注册**（比如一个需要长期保存状态的 behavior），用 `InitializeGameStarter` 更稳妥——它在所有加载类型下都会被无条件调用（见 `Campaign.cs` 第 1906 行），早于 `OnCampaignStart`：

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new PersistentTrackingBehavior());
    starter.AddModel(new MyDifficultyModel());
}
```

模型同样在这两个钩子里登记：

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    // 直接追加一个自定义模型；之后通过 Campaign.Current.Models 访问
    starter.AddModel(new MyClanFinanceModel());
}
```

> 注意：上面的 `DailyGoldBehavior`、`PersistentTrackingBehavior`、`MyDifficultyModel` 等只是用来示意“你自己实现的子类”占位；实际写 mod 时把它们换成你 `继承 CampaignBehaviorBase` / `继承 GameModel` 的真实类名即可，不要照抄这些名字。真正的基类与契约见下方“参见”。

## 主要属性

| 属性 | 类型 | 说明 |
|------|------|------|
| `CampaignBehaviors` | `ICollection<CampaignBehaviorBase>` | starter 当前收集到的所有 behavior 实例。集合本身可读写（通过 `AddBehavior` 增长），但你在钩子外修改它毫无意义——行为管理器已经构造完毕。 |
| `Models` | `IEnumerable<GameModel>` | starter 当前收集到的所有 model。战役启动后这些值被写入 `GameModels` 管理器，运行时可通过 `Campaign.Current.Models` 取得。 |

## 主要方法

### Behavior 注册

#### `public void AddBehavior(CampaignBehaviorBase campaignBehavior)`
把一个 `CampaignBehaviorBase` 子类实例登记进战役。`campaignBehavior` 为 `null` 时直接忽略、不抛异常。
- **副作用**：仅把实例加入内部列表；真正的事件订阅发生在稍后 `CampaignBehaviorManager.RegisterEvents()` 遍历每个 behavior 调用其 `RegisterEvents()` 时。
- **调用时机**：只能在 starter 被引擎分发的钩子内部（`OnCampaignStart` / `InitializeGameStarter` / `OnGameLoaded`）调用；之后调用无效。

```csharp
protected internal override void OnCampaignStart(Game game, object starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new DailyGoldBehavior());
}
```

#### `public bool RemoveBehavior<T>(T behavior) where T : CampaignBehaviorBase`
从登记列表里移除指定实例，成功返回 `true`。

```csharp
starter.RemoveBehavior(someBehaviorInstance);
```

#### `public void RemoveBehaviors<T>() where T : CampaignBehaviorBase`
按类型移除所有匹配实例（从后往前遍历，避免下标错位）。

```csharp
starter.RemoveBehaviors<ObsoleteBehavior>();
```

### Model 注册与查询

#### `public void AddModel(GameModel gameModel)`
追加一个模型实例。战役启动后它进入 `GameModels`，可用 `Campaign.Current.Models.GetXxxModel()` 一类方法按类型取到。
- **副作用**：只是加入内部列表，无校验；同名/同类型可重复添加，取用时返回最后一个。
- **调用时机**：同 `AddBehavior`，仅在 starter 钩子内有效。

```csharp
starter.AddModel(new MyClanFinanceModel());
```

#### `public void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`
追加一个 `MBGameModel<T>` 包装模型：构造时先找到已注册的 `T` 类型默认模型，调用 `gameModel.Initialize(model)` 把旧模型交给你，让你在其基础上扩展/替换，再登记进来。适合“改写某个内置模型但想复用其默认值”的场景。
- **副作用**：会触发 `Initialize`，因此你的 `MBGameModel<T>` 必须正确实现 `Initialize(T)`。

```csharp
// 以现有 DefaultSmithingModel 为基底扩展自己的打铁模型
starter.AddModel<DefaultSmithingModel>(new MySmithingModel());
```

#### `public T GetModel<T>() where T : GameModel`
从已登记列表**逆序**查找第一个 `T` 类型模型并返回；找不到时 v1.3.x 返回 `default(T)`（引用类型为 `null`），v1.4.5 显式返回 `null`。
- **用途**：在 starter 钩子里排查/取出某个已登记模型，或供 `AddModel<T>(MBGameModel<T>)` 内部获取基底模型。

```csharp
DefaultSmithingModel baseModel = starter.GetModel<DefaultSmithingModel>();
```

### 菜单内容登记（战役启动时）

starter 也负责把游戏菜单与对话“内容”登记进 `GameMenuManager` / `ConversationManager`，所以菜单/对话 mod 同样在这些钩子里完成注册。

#### `public void AddGameMenu(string menuId, string menuText, OnInitDelegate initDelegate, GameMenu.MenuOverlayType overlay = None, GameMenu.MenuFlags menuFlags = None, object relatedObject = null)`
按 `menuId` 登记（或取用）一个菜单并初始化其显示文本与进入回调。

```csharp
starter.AddGameMenu(
    "my_mod_menu",
    "我的自定义菜单",
    new OnInitDelegate((args) => { /* 进入菜单时的初始化 */ }));
```

#### `public void AddGameMenuOption(string menuId, string optionId, string optionText, GameMenuOption.OnConditionDelegate condition, GameMenuOption.OnConsequenceDelegate consequence, bool isLeave = false, int index = -1, bool isRepeatable = false, object relatedObject = null)`
给已存在的菜单追加一个可点选项：condition 控制是否显示/可点，consequence 是点击后的结果。

```csharp
starter.AddGameMenuOption(
    "my_mod_menu",
    "my_mod_option",
    "打开我的面板",
    new GameMenuOption.OnConditionDelegate(() => true),
    new GameMenuOption.OnConsequenceDelegate(() => { /* 点击后逻辑 */ }),
    false);
```

#### `public GameMenu GetPresumedGameMenu(string stringId)`
按 `stringId` 取用菜单：存在就返回现有实例，不存在就新建并登记一个空菜单再返回。多数 `AddGameMenu*` 内部都先调它。

```csharp
GameMenu menu = starter.GetPresumedGameMenu("my_mod_menu");
```

（`AddWaitGameMenu` 用于带等待计时的菜单，签名更长，用法与 `AddGameMenu` 类似，此处不展开。）

### 对话内容登记（战役启动时）

#### `public ConversationSentence AddPlayerLine(string id, string inputToken, string outputToken, string text, ConversationSentence.OnConditionDelegate conditionDelegate, ConversationSentence.OnConsequenceDelegate consequenceDelegate, int priority = 100, ...)`
登记一句“玩家可说的台词”，返回构造出的 `ConversationSentence`。input/output token 用于把对话节点串成图。

```csharp
starter.AddPlayerLine(
    "my_mod_player_line",
    "lord_talk",
    "my_mod_response",
    "我想和你谈谈贸易",
    new ConversationSentence.OnConditionDelegate(() => Hero.OneToOneConversationHero != null),
    new ConversationSentence.OnConsequenceDelegate(() => { /* 触发后果 */ }));
```

（其余 `AddDialogLine` / `AddRepeatablePlayerLine` / `AddDialogLineWithVariation` / `AddDialogLineMultiAgent` / `AddDialogFlow` 都是同一套对话图登记入口，签名更长，按需查阅源码即可。）

### 其它

#### `public void UnregisterNonReadyObjects()`
让 `Game.Current.ObjectManager` 与 `GameMenuManager` 注销尚未就绪的对象。由引擎在初始化末尾自动调用（`Campaign.cs` 第 1959 行），mod 一般不需要手动调。

## 典型用法示例

### 示例 1：在 SubModule 里给新战役加一个自定义 Behavior（场景测试 #1 的标准做法）

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnCampaignStart(Game game, object starterObject)
        {
            // 引擎把当次战役的 CampaignGameStarter 当作 starterObject 传进来
            CampaignGameStarter starter = (CampaignGameStarter)starterObject;
            starter.AddBehavior(new DailyGoldBehavior());
        }
    }

    public class DailyGoldBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents()
        {
            // 在这里订阅 CampaignEventDispatcher 的事件，例如每日结算
        }

        public override void SyncData(IDataStore dataStore)
        {
            // 这里登记需要随存档保存的字段
        }
    }
}
```

### 示例 2：加一个自定义 GameModel

```csharp
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddModel(new MyClanFinanceModel());
}

// 运行时取用（GameModels 按模型类型提供对应访问器，具体名称取决于模型种类）
var model = Campaign.Current.Models; // 再用对应的模型访问器取出 MyClanFinanceModel
```

### 示例 3：新档与读档都要存在的 Behavior

```csharp
// 用 InitializeGameStarter 而非 OnCampaignStart，确保读档时也能登记
protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    CampaignGameStarter starter = (CampaignGameStarter)starterObject;
    starter.AddBehavior(new PersistentTrackingBehavior());
}
```

## 风险与崩溃边界

- **在错误阶段登记无效**：`AddBehavior` / `AddModel` 只在引擎分发 starter 的钩子内有效。战役已经跑起来后你再拿早先保存的 `CampaignGameStarter` 引用去 `AddBehavior`，列表虽然变了，但 `CampaignBehaviorManager` 早已构造完成，新行为不会被订阅任何事件，等于没加。需要运行时增删行为应改用 `Campaign.Current.CampaignBehaviorManager` 的相关方法（属于另一套 API）。
- **重复登记**：同一个 behavior 实例或同类型被 `AddBehavior` 两次，会导致其 `RegisterEvents()` 被调用两次，事件被重复订阅（例如每日 tick 跑两遍）。不要在各钩子里无保护地重复 `AddBehavior`。
- **读档漏登记**：`OnCampaignStart` 只在“非读档”开局时触发；如果你的 behavior 需要在读旧档时也生效，必须放到 `InitializeGameStarter`（或同时处理 `OnGameLoaded`）。否则旧存档里该 behavior 全程缺席。
- **`Campaign.Current` 还未就绪**：这些钩子发生在 `Campaign` 自身初始化流程中，此时访问 `Campaign.Current.Models` 等可能拿到尚未装配完的世界。需要读取已登记模型时，优先用 starter 上的 `GetModel<T>()`，而不是 `Campaign.Current`。
- **behavior 子类必须实现 `RegisterEvents` 与 `SyncData`**：`CampaignBehaviorBase` 两者都是 `abstract`。若你的行为持有需要跨存档保留的字段，必须在 `SyncData(IDataStore)` 里登记，否则读档后状态丢失或字段为默认值，可能引发逻辑错乱。
- **`MBGameModel<T>` 的 `Initialize`**：用 `AddModel<T>(MBGameModel<T>)` 时，若基类 `T` 还没被任何 mod/内置登记，`GetModel<T>()` 返回 `null`，你的 `Initialize(T)` 需能处理 `null` 基底。

## 跨版本提示

- **v1.3.0**：本类与 `AddBehavior` / `AddModel` / `OnCampaignStart` / `InitializeGameStarter` 这套注册形态已经稳定存在，与本页描述一致。`IGameStarter` 契约未变。
- **v1.4.5**：`GetModel<T>()` 在找不到时由返回 `default(T)` 改为显式返回 `null`，对 mod 调用方行为一致；其余 `AddBehavior` / `AddModel` / `AddModel<T>` / `RemoveBehavior` / 菜单对话登记方法均保持不变。需要注意：本类**没有**名为 `InitializeCampaign` 或 `OnNewGameDataEnded` 的成员——战役注册的唯一入口就是上方 `MBSubModuleBase` 的几个钩子。

## 依赖关系

- 上游：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart` 接收 `IGameStarter`，再转为 `CampaignGameStarter`。
- 下游：[CampaignBehaviorBase](../CampaignBehaviorBase) 进入行为管理器，[GameModels](../GameModels) 进入模型集合。
- 生命周期：只在启动器开放的注册窗口添加行为/模型；运行中替换会造成重复实例或空模型。

## 参见

- [CampaignBehaviorBase](../CampaignBehaviorBase) — 你要 `AddBehavior` 的基类，必须实现 `RegisterEvents` / `SyncData`
- [GameModels](../GameModels) — 登记进来的 model 最终汇总的运行时管理器（`Campaign.Current.Models`）
- [Campaign](../../campaign/Campaign) — 真正长期存活的战役世界；starter 由它在初始化流程中创建
- [API 总目录](../../) — `MBSubModuleBase`（`OnCampaignStart` / `InitializeGameStarter` 钩子的声明处，本页注册模式的入口）等未单列文档的类型在此索引
