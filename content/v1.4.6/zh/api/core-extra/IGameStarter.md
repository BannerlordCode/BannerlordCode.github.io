---
title: "IGameStarter"
description: "模块启动契约：SubModule 在 InitializeGameStarter / OnGameStart 阶段拿到它并注册 GameModel，是替换官方模型实现的唯一入口。"
---

# IGameStarter

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public interface IGameStarter`
**File:** `TaleWorlds.Core/IGameStarter.cs`

## 概述

整个接口只有 19 行、三个成员，但它决定了 Bannerlord 全部可替换逻辑的装配方式。游戏启动时由 `GameManagerBase` 的具体实现造出一个启动器实例，依次把所有 `MBSubModuleBase` 的 `InitializeGameStarter` 回调喂给它；模块往里塞 `GameModel`，游戏侧再把启动器里的清单灌进 `GameModelsManager`（构造参数是 `IEnumerable<GameModel>`）。

三个成员分别是两个重载的 `AddModel` 和一个只读的 `Models`。**接口本身不认识 `CampaignBehaviorBase`、不认识游戏菜单、不认识对话**——那些注册方法都在具体实现上。战局用的是 `BasicGameStarter`，战役用的是 `CampaignGameStarter`。所以「我拿到一个启动器」和「我拿到战役启动器」是两件事，mod 里通常先 `as` 转型再补动作。

## 心智模型

把它想成一个**只有加法、没有减法的模型注册袋**，而且这个袋子在游戏开局后的某一刻被一次性倒空成 `GameModelsManager`，倒完之后你再往里塞东西不会生效。

三条决定性事实：

1. **`AddModel` 是追加，不是替换。** 两个实现（`BasicGameStarter` 与 `CampaignGameStarter`）的 `AddModel(GameModel)` 都是 `_models.Add(gameModel)`，没有任何去重、没有类型检查。而 `GetModel<T>()` 与 `GameModelsManager.GetGameModel<T>()` 都是**从尾部往前倒序扫描**，第一个 `as T` 命中就返回。结论：**后注册的赢**，重复注册同一个模型类型不会报错，只会静默留下一份永远不被解析到的旧实例。

2. **泛型重载 `AddModel<T>(MBGameModel<T>)` 是装饰器入口。** 它内部先 `GetModel<T>()` 取出当前那个 T，调 `gameModel.Initialize(model)` 把旧的塞进新模型的 `BaseModel`，然后再追加。于是链式装饰成立：先注册官方默认实现，再注册一个包一层的实现，最后一层拿到的 `BaseModel` 是上一层。`MBGameModel<T>` 的 `BaseModel` 源码声明是 `private protected`，官方 StoryMode 模块的派生类确实在用 `base.BaseModel` 转发（见 `StoryModeBanditDensityModel`）；mod 侧最省事的做法是直接继承抽象模型类重写方法，而不是依赖这层转发。

3. **`Models` 是只读快照入口，读它的时机很重要。** `BasicGameStarter` 与 `CampaignGameStarter` 都直接返回内部 `List<GameModel>` 实例（不是副本），所以你在 `OnGameStart` 里枚举它能看到截至那一刻的全量。想统计「游戏到底装了哪些模型」，在 `OnGameStart` 枚举一次最准；等到第一次读 `Game.Current.BasicModels` 时才枚举，看到的就已经是倒空后的结果。

还有一条容易踩的：**`GameModel` 本身是空抽象类**（`public abstract class GameModel { }`，零成员）。它纯粹是个类型标记，`GameModelsManager` 靠 `as T` 判定类型，所以「模型」和「行为」在框架里是两种完全不同的东西——模型无状态、单例、可替换；行为有生命周期事件、会进存档、通过 `CampaignBehaviorBase.SyncData` 序列化。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `AddModel` | `void AddModel(GameModel gameModel)` | 无条件把实例追加到内部 `List<GameModel>` 尾部。**不查重、不判类型、不替换**——同一个抽象类型注册两次会有两份，只有最后一份会被解析到。空引用会直接进列表。 |
| `AddModel<T>` | `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel` | 装饰式注册。先 `GetModel<T>()` 取当前 T 作为 `baseModel` 传给 `gameModel.Initialize(...)`，再追加。**链式装饰靠它**；`T` 是自引用类型（`ItemValueModel : MBGameModel<ItemValueModel>`）时 `baseModel` 就是官方默认实现。 |
| `Models` | `IEnumerable<GameModel> Models { get; }` | 返回内部列表本体（不是副本），供 `GameModelsManager` 构造时 `ToMBList<GameModel>()` 一次性物化。**`BasicGameStarter` 是显式实现**——只有持有 `IGameStarter` 类型的引用才能读这个属性，编译成 `BasicGameStarter` 变量时访问不到。 |

## 怎么用

### 怎么拿到它

`IGameStarter` 是 `TaleWorlds.Core/IGameStarter.cs:7` 的接口，**全文 20 行、三个成员**：

```
void AddModel(GameModel gameModel);                          // IGameStarter.cs:10
void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel;   // :13
IEnumerable<GameModel> Models { get; }                        // :17
```

**你不会自己实现它，也不会自己 new 它。** 它是 `MBGameManager` 那几个回调的参数类型，由引擎创建后传进来。唯一的生产者是 `CampaignGameStarter`（`public class CampaignGameStarter : IGameStarter`，`CampaignGameStarter.cs:11`），它在 `Campaign.OnInitialize()` 里被 new 出来（`Campaign.cs:1905`），然后交给三个回调：

- `GameManager.InitializeGameStarter(base.CurrentGame, campaignGameStarter)`（`Campaign.cs:1907`）→ 你的 `OnGameInitializationFinished(Game game, IGameStarter gameStarter)`
- `GameManager.OnGameStart(...)`（`:1913`）→ `OnGameStart(Game game, IGameStarter gameStarter)`
- `GameManager.OnNewCampaignStart(...)`（`:1935`，读档时是 `OnGameLoaded` `:1949`）——这两个签名把参数声明成 `object`，**要自己 cast**

消费端：`Game.SetBasicModels(campaignGameStarter.Models)`（`Campaign.cs:1914`）和 `AddGameModelsManager<GameModels>(campaignGameStarter.Models)`（`Campaign.cs:1915`）。

### 典型用法

```csharp
using TaleWorlds.Core;

// 回调里的第二个参数就是 IGameStarter
public override void OnGameInitializationFinished(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new MyCampaignTimeModel());          // IGameStarter.cs:10
}

// 泛型重载要求 T 自身是 MBGameModel<T>，不是裸 GameModel（:13）
public override void OnGameInitializationFinished(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel<MyCampaignTimeModel>(new MyCampaignTimeModel());   // :13
}

// Models 是只读枚举（:17）；注意它是在 OnGameInitializationFinished 返回之后才被消费的
foreach (GameModel m in gameStarter.Models) { /* ... */ }
```

### 最容易踩的坑

**把参数声明成 `object` 的那两个回调（`OnNewCampaignStart(Game, object)`、`OnGameLoaded(Game, object)`）当成有 `IGameStarter`，不 cast 就调 `AddModel`。** 引擎确实传的是同一个 `CampaignGameStarter` 实例（`Campaign.cs:1935`），但**接口上没有任何静态保证**——编译期你只有一个 `object`，必须 `(IGameStarter)starterObject` 或 `(CampaignGameStarter)starterObject`。更实际的风险是时机：`Models`（`IGameStarter.cs:17`）要到 `Campaign.cs:1914` 的 `SetBasicModels` 和 `Campaign.cs:1915` 的 `AddGameModelsManager<GameModels>` 才会被消费，所以**在 `OnNewCampaignStart` 里加的模型能不能生效，取决于它相对于 `CampaignBehaviorManager.RegisterEvents()`（`Campaign.cs:2161`）的顺序**。

第二个坑是两个 `AddModel` 重载的约束不对称：非泛型版（`:10`）接受任何 `GameModel`，泛型版（`:13`）的约束是 `where T : GameModel`——**但真正被调用的是 `AddModel<T>(MBGameModel<T>)`，要求实参静态类型是 `MBGameModel<T>`**。你写一个直接继承 `GameModel` 的类（非 `MBGameModel<T>`）时，泛型重载编译不过，必须用非泛型那个（`:10`）。

第三，`GameModel` 本身（`GameModel.cs:6`）是**空抽象类，全文 10 行只有一个声明**——它没有任何基类设施、没有生命周期钩子。模型之间要通信只能靠注入其它 `GameModel`，而注入点在你自己的构造器里，不在这里。

## 真实示例

最常见的一类：替换一个官方模型的实现（在 `InitializeGameStarter` 里注册，覆盖越晚越优先）：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class MyItemValueModel : ItemValueModel
{
    private readonly float _tierBonus = 0.05f;

    public override float GetEquipmentValueFromTier(float itemTierf)
    {
        return itemTierf * 100f;
    }

    public override float CalculateTier(ItemObject item)
    {
        return Game.Current.BasicModels.ItemValueModel.CalculateTier(item) + _tierBonus;
    }

    public override int CalculateValue(ItemObject item)
    {
        return (int)(GetEquipmentValueFromTier(item.Tierf) * (1f + item.Effectiveness * 0.01f));
    }

    public override bool GetIsTransferable(ItemObject item)
    {
        return item.Tierf < 4f;
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        gameStarterObject.AddModel(new MyItemValueModel());
    }
}
```

接口只有模型注册这一件事，战役行为要落到具体实现上——先转型再用 `CampaignGameStarter` 独有的方法：

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

// 读者侧演示组件，不是游戏 API；以下方法仅示意调用形状
public class MyTownHospiceCampaignBehavior : CampaignBehaviorBase
{
    public override void RegisterEvents()
    {
    }

    public override void SyncData(IDataStore dataStore)
    {
    }
}

public class MySubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        CampaignGameStarter campaignStarter = gameStarterObject as CampaignGameStarter;
        if (campaignStarter != null)
        {
            campaignStarter.AddBehavior(new MyTownHospiceCampaignBehavior());
        }
    }
}
```

想知道启动结束时到底装了哪些模型，就在 `OnGameStart` 里枚举 `Models`（此时列表已经倒空成最终形态的上一拍）：

```csharp
protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
{
    base.OnGameStart(game, gameStarterObject);

    int index = 0;
    foreach (GameModel model in gameStarterObject.Models)
    {
        Debug.Print("model[" + index + "] = " + model.GetType().Name, 0);
        index++;
    }

    Debug.Print("total models = " + index, 0);
}
```

## 风险与边界

- **只有加法。** 接口里没有任何「移除已注册模型」的方法，也没有清空清单的入口。注册错了只能靠「再注册一个覆盖它」来补救。
- **重复注册不报错。** `AddModel` 无条件 `Add`，而解析是倒序取第一个命中。同一类型注册 N 次，前 N-1 个是死对象，只有最后一个生效——内存里还占着。
- **`AddModel<T>` 的 `baseModel` 可能是 `null`。** 如果启动器里还没有 T 的任何实例，`GetModel<T>()` 返回 `default(T)`，`Initialize(null)` 照样不抛。之后任何 `BaseModel` 上的调用都是空引用。链式装饰必须保证「先默认、后装饰」。
- **`BaseModel` 的可访问性受程序集约束。** 源码写的是 `private protected`。官方 StoryMode 模块的派生类确实在读它并用 `base.BaseModel` 转发；第三方 mod 拿它做转发链风险高，直接继承抽象模型类重写方法更稳。
- **`Models` 在 `BasicGameStarter` 上是显式实现。** `IEnumerable<GameModel> IGameStarter.Models` —— 用 `BasicGameStarter` 类型的变量读不到这个属性，必须先把变量当成 `IGameStarter`。`CampaignGameStarter` 则是隐式实现，直接可读。
- **`Models` 返回的是内部列表本体。** 不是防御性副本。虽然枚举期间不会有人改它，但别指望拿到一个快照。
- **注册窗口很窄。** 只有 `InitializeGameStarter` / `OnGameStart` 这两拍。之后 `GameModelsManager` 已经构造完，追加的模型没人看。`OnSubModuleLoad` 里注册是错的——那时候启动器还不存在。
- **启动器类型取决于游戏模式。** 战局/编辑器给 `BasicGameStarter`，战役给 `CampaignGameStarter`。`as CampaignGameStarter` 返回 null 时不要抛，直接跳过战役专属注册。
- **`GameModel` 是空类型。** 它的全部意义就是「让 `as T` 有一个可判定的标称类型」。想让模型参与存档或事件广播，那是 `CampaignBehaviorBase` 的活。
- **官方 submodule 自己就在往里塞几十个模型。** `SandBoxSubModule.InitializeGameStarter` 一口气注册了二十多个 `GameModel`。你的注册顺序决定你替换的是官方默认实现还是别的 mod 已经替换过的那版。

## 依赖关系

- 调用方：[MBSubModuleBase](../../core/MBSubModuleBase) 的 `InitializeGameStarter(Game, IGameStarter)` 与 `OnGameStart(Game, IGameStarter)` 是拿到它的唯一时机
- 调度方：[GameManagerBase](../GameManagerBase) 声明 `InitializeGameStarter` 与抽象的 `OnGameStart`，由具体游戏管理器实现遍历 submodule
- 实现一：`TaleWorlds.MountAndBlade.BasicGameStarter`，战局 / 编辑器 / 联机用，`Models` 显式实现
- 实现二：[CampaignGameStarter](../../campaign/CampaignGameStarter)，战役用，另带 `AddBehavior` / `AddGameMenu` / `AddDialogFlow` 等接口上没有的方法
- 被注册的模型：[GameModel](../GameModel)（空抽象类）与其装饰基类 `MBGameModel<T>`
- 落地容器：[GameModelsManager](../GameModelsManager) 构造时用 `Models` 物化，内部用倒序 `GetGameModel<T>` 解析
- 读取端：[Game](../Game) 的 `BasicModels`（`BasicGameModels`）在启动完成后被 `SetBasicModels` 填充
- 战役侧扩展：[CampaignBehaviorBase](../../campaign/CampaignBehaviorBase) 只能通过 `CampaignGameStarter` 注册，不在接口面上
- 模块注册表：[Module](../../core/Module) 提供 `CollectSubModules()`，`GameManagerBase` 的实现靠它遍历
- 桶首页：[core-extra API 分区](../)
- 模块地图：[module-map](../../../architecture/module-map)

## 导航

- 同桶：[`../GameModel`](../GameModel) · [`../GameModelsManager`](../GameModelsManager) · [`../GameManagerBase`](../GameManagerBase)
- 父索引：[`../_index`](../_index)