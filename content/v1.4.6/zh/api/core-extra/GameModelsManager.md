---
title: "GameModelsManager"
description: "模型集合的持有者：构造时快照一批 GameModel，按类型倒序查找并返回最后一个匹配项。"
---
# GameModelsManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModelsManager`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/GameModelsManager.cs`

## 概述

39 行、一个抽象类、一个只读集合加一个泛型查找。它是模型层的**唯一读取入口**：构造时把传入的 `IEnumerable<GameModel>` 用 `ToMBList<GameModel>()` 拍平成 `MBList`，之后所有查询都在这份快照上进行。

三个成员里最关键的是 `protected T GetGameModel<T>()`：循环是 `for (int i = this._gameModels.Count - 1; i >= 0; i--)`，也就是**从尾往头扫，命中即返回**。这个「最后一个匹配」语义是 Bannerlord 模型覆盖机制的全部秘密——mod 注册一个 `ItemValueModel` 就能盖掉官方的，官方自己也是这么叠的。

因为是 `protected`，mod 通常不直接调它，而是继承它并把 `GetGameModel<T>()` 包成公开属性。`BasicGameModels` 就是官方这么做的实例（[Game](../Game) 的 `BasicModels` 属性返回它）。

## 心智模型

生命周期是「构造一次、查询无数次」：

1. `IGameStarter` 阶段，游戏侧把一批 `GameModel` 收集起来，通过 [Game](../Game) 的 `AddGameModelsManager<T>(IEnumerable<GameModel>)` 反射构造一个 `T : GameModelsManager` 的实例并存进 `_gameModelManagers` 字典（键是 `typeof(T)`）。`Game.SetBasicModels` 是 `AddGameModelsManager<BasicGameModels>` 的包装。
2. 构造器立刻把传入集合快照成 `MBList`。**这一步之后，原始 `IEnumerable` 再变也不会反映进来。**
3. 运行时游戏侧用派生的公开属性来查：`Game.Current.BasicModels.ItemValueModel` 内部就是 `GetGameModel<ItemValueModel>()`。

典型调用顺序：`OnGameStart` 里 `gameStarterObject.AddModel(...)` → 游戏侧收拢 → `Game.AddGameModelsManager` 反射建管理器 → 之后各处 `BasicModels.XxxModel` 取用。

**最常见的坑是「重复注册」**：因为倒序命中即返回，同类型注册两次时前一个被静默遮蔽。没有覆盖通知、没有优先级、没有冲突警告。而 `_gameModelManagers` 字典键是 `typeof(T)`，`AddGameModelsManager<BasicGameModels>` 调用两次会让 `Dictionary<Type, GameModelsManager>` 的 `Add` 抛 `ArgumentException`——**这条是硬失败，和模型层内的遮蔽不同**。

另一个坑：抽象类无抽象成员，所以可以直接继承一个空实现，编译通过但什么都查不到。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `.ctor` | `protected GameModelsManager(IEnumerable<GameModel> inputComponents)` | 唯一构造器，把 `inputComponents` 用 `ToMBList<GameModel>()` 拍成 `MBList` 存入 `_gameModels`。**null 会直接 NRE**（`ToMBList` 内部遍历）。这个列表是 `readonly` 字段，构造后再无增删入口。 |
| `GetGameModel` | `protected T GetGameModel<T>() where T : GameModel` | 核心查找。`for (int i = Count - 1; i >= 0; i--)` 倒序遍历 `_gameModels`，每项 `as T`，命中即 `return`。**全列表扫完没命中返回 `default(T)`（引用类型为 null），不抛异常、不打日志。** 「最后一个匹配」是官方覆盖机制的语义基础。 |
| `GetGameModels` | `public MBReadOnlyList<GameModel> GetGameModels()` | 返回整个模型的只读视图。调试、遍历、统计用。**返回的是内部 `MBList` 的只读包装，不是副本**——但因为没有写入通道，所以只读性是真实成立的。 |
| （继承自 `Object`） | `ToString` / `Equals` / `GetHashCode` | 基类实现，本类未覆写。管理器之间按引用比较。 |

## 怎么用

### 怎么拿到它

`GameModelsManager` 是 `public abstract class GameModelsManager`（`TaleWorlds.Core/GameModelsManager.cs:8`），全文 40 行。

**构造器是 `protected GameModelsManager(IEnumerable<GameModel> inputComponents)`（`:11`）**，而且它**当场做一次拷贝**：`this._gameModels = inputComponents.ToMBList<GameModel>();`（`:12`）——存进私有只读字段 `private readonly MBList<GameModel> _gameModels;`（`:39`）。所以构造完成之后，外部再往源集合里加东西**不会**影响它。

实例由 [Game](../Game) 反射创建：`Game.AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager` 和它的便捷包装 `SetBasicModels(IEnumerable<GameModel> models)`。战役侧则是 `Game.AddGameModelsManager<GameModels>(campaignGameStarter.Models)`（`Campaign.cs:1916`）。

两个取用方法：`protected T GetGameModel<T>() where T : GameModel`（`:17`）——**protected，外部拿不到，只能在自己的派生类里包一层**；`public MBReadOnlyList<GameModel> GetGameModels()`（`:31`）——返回只读列表。

### 典型用法

```csharp
using TaleWorlds.Core;
using System.Collections.Generic;

// 典型形状：在派生类里把依赖收集好，对外开强类型属性
public class BasicGameModels : GameModelsManager        // GameModelsManager.cs:8
{
    public BasicGameModels(IEnumerable<GameModel> input) : base(input) { }   // :11

    private TimeCompressionModel _time;

    public TimeCompressionModel TimeModel
    {
        get { return this._time; }
    }

    // GetGameModel<T> 是 protected（:17），只能在派生类里调
    public bool Resolve()
    {
        _time = GetGameModel<TimeCompressionModel>();     // :17
        return _time != null;
    }
}

// 注册（由 Game 反射构造并塞进字典）
Game.Current.SetBasicModels(startedModels);             // 便捷包装，内部 AddGameModelsManager<BasicGameModels>

// 读：要么用自己的属性，要么走公开的列表
MBReadOnlyList<GameModel> all = basicModels.GetGameModels();   // :31
GameModel any = all.Count > 0 ? all[0] : null;
```

### 最容易踩的坑

**指望 `SetField` 式的「晚绑定」——在构造之后往源集合加模型，然后指望 `GetGameModel<T>()` 能找到。** 构造器（`:11-13`）在第一句就 `ToMBList<GameModel>()` 把输入拷进自己的 `_gameModels`（`:12`），而且这个字段是 `readonly`（`:39`），**没有任何 Add 方法**。所以汇总时机之后注册的模型永远不会进到这个 manager 里，`GetGameModel<T>()`（`:17`）返回 null——不报错，只是「静默没生效」。注册必须发生在 [IGameStarter](../IGameStarter) 阶段，也就是 `Campaign.cs:1915-1916` 汇总之前。

第二个坑是 `GetGameModel<T>()`（`:17-29`）的**倒序查找**：`for (int i = this._gameModels.Count - 1; i >= 0; i--)`，先注册同类型模型会被后注册的遮蔽。两个 mod 都注册同一类型时，最终生效的那个取决于它们在 `IGameStarter.Models` 里的顺序，而 `CampaignGameStarter.AddModel` 的调用顺序又取决于 `MBGameManager` 回调的执行顺序。**同名覆盖是静默的**，所以自定义模型请用一个别的 mod 不会碰的类型名。

第三，`GetGameModel<T>()` 是 `protected`（`:17`）。如果你想在 `CampaignBehaviorBase` 里直接调它，编译不过——必须在 `GameModelsManager` 派生类里包一个公开成员出来。

## 真实示例

继承一个管理器并把查找包成公开属性（官方 `BasicGameModels` 的标准形状）：

```csharp
public class MyModelsManager : GameModelsManager
{
    public MyModelsManager(IEnumerable<GameModel> models) : base(models)
    {
    }

    public ItemValueModel ItemValueModel => GetGameModel<ItemValueModel>();

    public MyBattleModel BattleModel => GetGameModel<MyBattleModel>();
}
```

注册进 `Game`（`AddGameModelsManager<T>` 会反射构造上面那个类）：

```csharp
public class MyModSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        gameStarterObject.AddModel(new MyItemValueModel());
    }
}
```

取用时永远要判空（`GetGameModel<T>()` 不命中就是 null）：

```csharp
Game current = Game.Current;
if (current == null)
{
    return;
}

BasicGameModels models = current.BasicModels;
if (models == null)
{
    return;
}

ItemValueModel valueModel = models.ItemValueModel;
if (valueModel == null)
{
    Debug.Print("no ItemValueModel registered", 0);
    return;
}

Debug.Print("item value: " + valueModel.CalculateValue(someItem), 0);
```

遍历全量模型做自检：

```csharp
MBReadOnlyList<GameModel> all = Game.Current.BasicModels.GetGameModels();
int count = all.Count;
Debug.Print("registered model count: " + count, 0);
```

## 风险与边界

- **查找不命中返回 null，无诊断。** `GetGameModel<T>()` 全程无异常无日志。没注册就是 `default(T)`。所有取用点必须判空。
- **倒序命中 = 后注册覆盖先注册。** 这是设计而不是 bug，但它意味着「我注册了却不生效」的最常见原因是 mod 里注册了两个同类型模型。
- **集合是构造时快照。** `_gameModels` 是 `readonly` 字段，只在构造器里由 `ToMBList` 赋值。构造后无法增删，传入的 `IEnumerable` 后续变化无效。
- **构造器 null 即崩。** `protected GameModelsManager(IEnumerable<GameModel> inputComponents)` 对 null 没有任何防护，直接 NRE。
- **`AddGameModelsManager` 键冲突是硬失败。** `Game._gameModelManagers` 是 `Dictionary<Type, GameModelsManager>`，同一个 `T` 注册两次会抛 `ArgumentException`；而**模型层内部**的重复是静默遮蔽。两种「重复」后果不同，别混。
- **无线程安全。** `MBList` 无锁。跨线程注册 / 查询有风险，正常都在主线程。
- **生命周期绑在 `Game`。** 管理器由 [Game](../Game) 持有，`Game.Destroy()` 后 `BasicModels` 失效。静态缓存管理器实例会在换局后指向已废弃对象。
- **`GetGameModels()` 返回内部引用。** 虽然是只读包装，但每层包装对象都是新建的；别在每帧 tick 里调用它做遍历。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/GameModelsManager.cs` 逐行比对，**public/protected 表面完全一致**：`protected GameModelsManager(IEnumerable<GameModel> inputComponents)`、`protected T GetGameModel<T>() where T : GameModel`、`public MBReadOnlyList<GameModel> GetGameModels()` 三个成员一字未改。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameModelsManager.cs`（32 行）与 `bannerlord-1.4.6/TaleWorlds.Core/GameModelsManager.cs`（40 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致**，仍是本段上文列的那三个成员（构造器、`GetGameModel<T>()`、`GetGameModels()`），0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化。1.4.5 是 32 行、1.4.6 是 40 行。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 约束上限：[GameModel](../GameModel) 是 `GetGameModel<T>()` 的泛型约束目标
- 宿主：[Game](../Game) 的 `BasicModels` / `AddGameModelsManager<T>()` 反射构造本类并持有实例
- 实际实现：`BasicGameModels`（官方）与各 mod 自建的 `GameModelsManager` 派生类
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../GameModel`](../GameModel) · [`../Game`](../Game) · [`../MBList`](../MBList)
- 父索引：[`../_index`](../_index)
