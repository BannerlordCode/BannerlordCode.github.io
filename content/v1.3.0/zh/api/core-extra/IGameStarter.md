---
title: "IGameStarter"
description: "引擎交给 MBSubModuleBase.OnGameStart 与 InitializeGameStarter 的三成员模型注册契约。IGameStarter 只声明 AddModel(GameModel)、AddModel<T>(MBGameModel<T>) 和只读的 Models 枚举——behavior 与菜单都不在这个接口上。"
---
# IGameStarter

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public interface IGameStarter`
**Base:** 无
**Source:** `TaleWorlds.Core/IGameStarter.cs`

## 概述

`IGameStarter` 是模块向一个正在组装的游戏注入 `GameModel` 实例的窗口。它在 `TaleWorlds.Core` 中声明，成员恰好三个：`void AddModel(GameModel)`、`void AddModel<T>(MBGameModel<T>) where T : GameModel`，以及只读的 `IEnumerable<GameModel> Models { get; }`。mod 平时在这个时刻想用的其他一切——`AddBehavior`、`AddGameMenu`、`AddDialogLine`、`AddPlayerLine`、`RemoveBehavior`、`GetModel<T>()`——**都不在这个接口上**；它们只存在于 `TaleWorlds.CampaignSystem` 的具体类 `CampaignGameStarter` 上。由于引擎传给 `MBSubModuleBase.OnGameStart` 和 `InitializeGameStarter` 的静态类型就是 `IGameStarter`，写在这些钩子里的代码只能看到模型能力，除非你做向下转型；而向下转型成 `CampaignGameStarter` 是对战役层的硬依赖，在编辑器或专用服务器上并不成立。

## 心智模型

把 `IGameStarter` 理解成**"游戏启动注册簿中只管模型的那一半"**。引擎在游戏存在之前构造一个具体的 starter，把它交给每个子模块的启动钩子，然后把收集到的模型转换成 `GameModels` 管理器（通过 `Game.AddGameModelsManager<T>` / `Game.SetBasicModels` 构造）。在那之后 starter 就被丢弃了。

**真实调用顺序：**

1. `MBGameManager.StartNewGame` / 读档路径构造具体的 starter。在战役流程里它是 `CampaignGameStarter`（`TaleWorlds.CampaignSystem`），而后者实现了本接口。
2. 每个 `MBSubModuleBase.InitializeGameStarter(game, starterObject)` 被调用——所有加载模式。
3. 每个 `MBSubModuleBase.OnGameStart(game, gameStarterObject)` 被调用——同样所有模式。
4. 战役专属：`OnCampaignStart` / `OnGameLoaded`，那里 `starterObject` 是同一个 `CampaignGameStarter` 被视作 `object`。
5. `Game.SetBasicModels(...)` / `AddGameModelsManager<T>(...)` 消费 `starter.Models` 并构建存活的管理器。starter 此时已死。

**三个坑：**

- **`AddModel` 返回 `void`——没有成功信号，也没有去重。** 同类型重复注册只是追加；按类型查找返回**最后**注册的那个。从 `OnGameStart` 和 `InitializeGameStarter` 两处都注册一个模型，会静默地双重注册。
- **`AddModel<T>(MBGameModel<T>)` 会在注册期间调用 `Initialize(baseModel)`**，并传入它按类型找到的任何东西——如果还没有任何 `T` 被注册，就是 `default(T)`。你的实现必须能容忍空的基础模型。
- **接口上没有 `AddBehavior`。** 写成 `starterObject.AddBehavior(...)` 无法针对 `IGameStarter` 编译；你必须先转型成 `CampaignGameStarter`，这意味着你的模块从此假定战役层存在。

## 何时该用 / 何时不该用

**该用 `IGameStarter` 的场景：**
- 你正处在 `MBSubModuleBase.OnGameStart` 或 `InitializeGameStarter` 内部，需要注册一个在所有模式下都存在的 `GameModel`（战役、编辑器、多人、专用服务器）。
- 你在写一个共享辅助方法，希望不把 `TaleWorlds.CampaignSystem` 引用拖进自己的程序集——`IGameStarter` 在 `TaleWorlds.Core`。

**不该用 `IGameStarter` 的场景：**
- 你想要一个 `CampaignBehaviorBase`。那是 `CampaignGameStarter.AddBehavior`，而且只有正在构建战役时才存在。
- 你想在运行时**读取**模型。`starter.Models` 是组装前的快照，bootstrap 之后毫无意义；请改用 `Game.Current.BasicModels` 或战役的 `GameModels` 管理器。
- 你想在游戏中途更换模型。`Game.SetBasicModels` 跑过之后，这个登记簿就关闭了。

## 依赖关系

- [GameModel](../GameModel/) — 每个被注册模型所派生的抽象基类。
- [MBGameModel](../MBGameModel/) — `MBGameModel<T>` 包装器，让你在 `Initialize` 内部拿到前一个模型。
- [GameModelsManager](../GameModelsManager/) — 被收集模型最终进入的运行时管理器。
- [Game](../Game/) — `Game.SetBasicModels` / `AddGameModelsManager<T>` 消费 starter 的内容。
- [MBSubModuleBase](../../core/MBSubModuleBase/) — 声明 `OnGameStart` / `InitializeGameStarter`，本接口唯一的调用方。
- [CampaignGameStarter](../../campaign/CampaignGameStarter/) — 具体实现，也是通往 `AddBehavior` / 菜单 / 对话行的唯一途径。

## 主要成员

#### `void AddModel(GameModel gameModel)`
把一个模型实例追加到 starter 的列表。**约定：**接管该引用；不做校验、不替换、不去重。若同类型模型已注册，两者都会留在列表里，按类型查找解析到最后一个——这正是"只在恰好一个钩子里注册"这条规则的由来。

#### `void AddModel<T>(MBGameModel<T> gameModel) where T : GameModel`
组合重载。在追加包装器之前，它会解析出已注册的 `T` 模型并调用 `gameModel.Initialize(那个模型)`。**约定：**`Initialize` 在注册期间就被调用，不是稍后；而当尚未注册任何 `T` 时参数是 `default(T)`。请把 `Initialize` 写成对空基础模型回退到合理默认值，而不是抛异常。

#### `IEnumerable<GameModel> Models { get; }`
只读枚举当前已注册的全部内容。**约定：**只在启动钩子*内部*有效。`Game.SetBasicModels` 跑完之后，这个枚举对应的是一本没人读的登记簿；你注册得太晚的模型在运行中的游戏里就是不存在。

## 使用示例

### 示例 1 —— 在所有启动模式下注册模型

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            // 新游戏、读档、编辑器、多人都一样会跑。
            gameStarterObject.AddModel(new MyCampaignTimeModel());
        }
    }
}
```

### 示例 2 —— 包装并扩展已有模型

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.ComponentInterfaces;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // DifficultyModel 声明为 MBGameModel<DifficultyModel>，所以注册完成后
    // BaseModel 的类型就是 DifficultyModel，里面装的是 DefaultDifficultyModel。
    public class HalfDamageDifficultyModel : DifficultyModel
    {
        public override float GetDamageToPlayerMultiplier()
        {
            float vanilla = BaseModel != null ? BaseModel.GetDamageToPlayerMultiplier() : 1f;
            return vanilla * 0.5f;
        }

        // 其余 DifficultyModel 成员也必须重写：抽象基类还声明了
        // GetPlayerTroopsReceivedDamageMultiplier、GetPlayerRecruitSlotBonus、
        // GetPlayerMapMovementSpeedBonusMultiplier、GetCombatAIDifficultyMultiplier、
        // GetPersuasionBonusChance、GetClanMemberDeathChanceMultiplier、
        // GetStealthDifficultyMultiplier 与 GetDisguiseDifficultyMultiplier。
    }

    public class MySubModule : MBSubModuleBase
    {
        protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            starterObject.AddModel<DifficultyModel>(new HalfDamageDifficultyModel());
        }
    }

    // 运行时要通过战役的管理器读取存活模型，而不是通过 starter。
    // Campaign.Current.Models.DifficultyModel 就是你上面注册的实例。
    public static float ReadLiveMultiplier()
    {
        return Campaign.Current.Models.DifficultyModel.GetDamageToPlayerMultiplier();
    }
}
```

### 示例 3 —— 在钩子内部查看已注册的内容

```csharp
using TaleWorlds.Engine;

protected internal override void InitializeGameStarter(Game game, IGameStarter starterObject)
{
    // 只在钩子内有效；bootstrap 之后这份列表就是一份死快照。
    foreach (GameModel model in starterObject.Models)
    {
        MBDebug.Print("registered model: " + model.GetType().Name);
    }
    starterObject.AddModel(new MyGameModel());
}
```

## 风险与崩溃边界

- **存档序列化。** starter 本身不被保存。缓存了状态的 `GameModel` 必须通过拥有存档的那一层（`SyncData` / `IDataStore`）读回来；`IGameStarter` 上的任何东西都不参与序列化。
- **跨域依赖。** 引用 `IGameStarter` 对任何模块都是安全的。把参数转型成 `CampaignGameStarter` 则不是：编辑器（`EditorGameManager`）、主菜单状态和专用服务器构造的 starter **不是** `CampaignGameStarter`，那里转型会抛 `InvalidCastException`。用 `is` / `as` 加保护，或者只通过接口注册。
- **加载顺序。** `InitializeGameStarter` 在 `OnGameStart` 之前运行，两者都在模型被消费之前。从 `OnGameEnd`、`OnApplicationTick` 或 `CampaignBehaviorBase.RegisterEvents` 里注册都太晚、毫无效果——列表已经封口。
- **ID 稳定性。** 这里没有 id，但**类型名**实际上必须是稳定的：`AddModel<T>(MBGameModel<T>)` 是按泛型类型实参来解析前一个模型的。跨版本改名你的 `MBGameModel<T>` 子类会静默改变它所包装的模型，扩展就悄悄不再生效了。
- **`Initialize` 里出现空基础模型。** `AddModel<T>` 最常见的崩溃来源：从 `OnGameStart` 而不是 `InitializeGameStarter` 注册包装器，会拿到 `default(T)`，然后解引用它。始终给 `BaseModel` 加 null 检查。
- **重复注册。** 从两个钩子注册同一模型类型会产生两条记录；管理器保留最后一条，而更早的实例可能已经被某个 `Initialize` 回调交出去过了。如果你有多个入口，请用标志位加保护。

## 跨版本提示

- **v1.3.0：** 恰好三个成员——`AddModel(GameModel)`、`AddModel<T>(MBGameModel<T>) where T : GameModel`、`IEnumerable<GameModel> Models { get; }`。文件是 `TaleWorlds.Core/IGameStarter.cs`。同版本的 `MBGameModel<T>` 只有一个非虚的 `public void Initialize(T baseModel)` 和一个 `private protected T BaseModel { protected get; private set; }`——是装饰器形状，不是模板方法形状。
- **不是这个类的东西：** `MBGameModel<T>.Initialize(T)` **不是** `virtual`，它只把参数存进 `BaseModel`。你不需要重写它——从子类里读 `BaseModel` 即可。若你在 `MBGameModel<T>` 子类上写 `public override void Initialize(...)`，编译不过。
- **游戏里绝大多数模型用的是自引用形式 `FooModel : MBGameModel<FooModel>`。** `DifficultyModel : MBGameModel<DifficultyModel>`、`PartySpeedModel : MBGameModel<PartySpeedModel>`、`ItemValueModel : MBGameModel<ItemValueModel>`，还有大约 130 个同类。针对该类型注册的包装器会挡在默认实现*前面*，你漏掉的每一个未实现成员都会抛 `NotImplementedException`，而不是静默返回默认值。
- **v1.3.15 / v1.4.5：** 接口未变。后续版本并没有把 `AddBehavior` 或菜单/对话注册方法下沉到 `IGameStarter`，它们仍然只在 `CampaignGameStarter` 上。不要写假定有更宽表面的代码。

## 参见

- ↑ 上级目录：[Core-extra API 索引](../)
- ↪ 模型基类：[GameModel](../GameModel/) · [MBGameModel](../MBGameModel/)
- ↪ 运行时查找：[GameModelsManager](../GameModelsManager/)
- ↪ 消费者：[Game](../Game/)
- ↖ 钩子声明：[MBSubModuleBase](../../core/MBSubModuleBase/)
- ↪ 具体实现：[CampaignGameStarter](../../campaign/CampaignGameStarter/)