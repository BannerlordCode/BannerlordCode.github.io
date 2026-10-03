---
title: "GameModelsManager"
description: "把 150 多个异构 GameModel 装进一个 MBList 再按类型倒序 as T 取回的管理器基类：构造器一次 ToMBList 快照，GetGameModel<T> 负责覆盖链查找，三个官方子类各持一个实例。"
---

# GameModelsManager

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModelsManager`
**Base:** 无（仅隐式 `System.Object`）
**File:** `TaleWorlds.Core/GameModelsManager.cs`（全文 39 行 / 1006 字节，public 成员 1 个、protected 成员 2 个）

## 概述

`GameModelsManager` 是**模型容器**，`GameModel` 是容器里的元素（见 [GameModel](../GameModel)）。它的全部实现是 39 行、四个成员：一个 `protected` 构造器、一个 `protected T GetGameModel<T>()`、一个 `public MBReadOnlyList<GameModel> GetGameModels()`、一个 `private readonly MBList<GameModel> _gameModels`。

它自己**不做任何注册**。注册发生在 `IGameStarter` 那侧（`AddModel`），本类只在**游戏启动后期**被构造一次，把当时的模型列表整个拍成快照存进 `_gameModels`。所以它是一个**只读的、启动期固定的**容器——游戏跑起来之后再往里加模型是做不到的，`AddModel` 早就用完了。

三个官方子类，各对应一个模型集合：`BasicGameModels`（`TaleWorlds.Core/BasicGameModels.cs`，只持有 3 个槽位）、`GameModels`（`TaleWorlds.CampaignSystem/GameModels.cs`，`sealed`，战役级全部模型）、`MissionGameModels`（`TaleWorlds.MountAndBlade/MissionGameModels.cs`，`sealed`，任务级模型）。`grep -rn ": GameModelsManager" bannerlord-1.3.0/` 命中正好 3 处。它们的共同写法是：**在构造器里用 `base.GetGameModel<T>()` 把自己关心的槽位一次性填成只读属性**。

## 心智模型

把它当成**「启动期的类型化索引表」**就对了。理解它只需要三件事。

**第一，构造器把 `IEnumerable` 变成 `MBList`——是快照，不是视图。** 构造器体只有一行 `this._gameModels = inputComponents.ToMBList<GameModel>();`。传进来的是 `IGameStarter.Models`（`IEnumerable<GameModel>`），`ToMBList` 的实现在 `TaleWorlds.Library/Extensions.cs`：`new MBList<GameModel>(source.Count)` 然后 `AddRange`，于是元素被复制进一个新列表。**如果这里存的是视图，后面每次 `GetGameModel<T>` 都会看到后续注册的 mod；存快照则不会。** 现在的行为是快照——这意味着必须在所有 mod 的 `InitializeGameStarter` 都跑完之后才构造管理器，顺序由 [MBGameManager](../../mission-ext/MBGameManager) 保证。

**第二，`GetGameModel<T>()` 是覆盖链的读端，方向是倒序。**

```csharp
for (int i = this._gameModels.Count - 1; i >= 0; i--)
{
    T result;
    if ((result = (this._gameModels[i] as T)) != null)
    {
        return result;
    }
}
return default(T);
```

`Count - 1` 递减——**最后注册的那个 `T` 赢**。这与 [BasicGameStarter](../../mission-ext/BasicGameStarter) 的 `AddModel<T>` 里那次 `GetModel<T>()` 同向，两端约定必须一致，否则「包装」的语义会反过来。这套「后来者包住先来者」就是 Bannerlord 全部模型覆盖机制的实现，没有优先级枚举、没有 `[OverrideModel]` 特性。

**第三，取不到就返回 `default(T)`，不抛异常。** 扫不到时 `return default(T)`。对引用类型就是 `null`。官方三个子类里，`BasicGameModels` 构造器写的是 `this.RidingModel = base.GetGameModel<RidingModel>();` 然后直接当非空用——因为沙盒保证这三个模型一定被注册过。**你自己加的槽位没有任何人保证**，消费前必须判空。

三个实例各自独立，彼此看不见：`Campaign.cs:1905-1906` 连着两行 `base.CurrentGame.SetBasicModels(campaignGameStarter.Models);` 与 `this._gameModels = base.CurrentGame.AddGameModelsManager<GameModels>(campaignGameStarter.Models);`，两者喂的是**同一份** `Models` 但装进**两个**容器。`Game.AddGameModelsManager<T>` 的实现是 `Activator.CreateInstance(typeof(T), new object[]{ inputComponents })` 然后 `this._gameModels.Add(typeof(T), t)`——字典按 `typeof(T)` 键存放，所以同一个类型只能有一个实例，重复调会 `ArgumentException`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `_gameModels` | `private readonly MBList<GameModel> _gameModels` | 唯一的存储。一个 `readonly` 字段在构造器里由 `ToMBList` 一次填满，之后只读。没有任何 add/remove 方法，容器内容在对象诞生那一刻就冻结 |
| 构造器 | `protected GameModelsManager(IEnumerable<GameModel> inputComponents)` | `protected` 所以外部不能 `new`，只能派生。参数类型是 `IEnumerable<GameModel>` 而非 `MBList<GameModel>`，是为了让 `Game.AddGameModelsManager<T>` 能用 `Activator.CreateInstance` 反射构造 |
| `GetGameModel<T>` | `protected T GetGameModel<T>() where T : GameModel` | 覆盖链的读端。倒序 `as T` 扫描，返回最外层的那个 `T`；扫不到返回 `default(T)`。`protected` 意味着只有子类能用 |
| `GetGameModels` | `public MBReadOnlyList<GameModel> GetGameModels()` | 唯一 public 成员。返回**全部**模型的只读列表，不分类型。`MBReadOnlyList<T>` 继承自 `List<T>`（见 [MBReadOnlyList](../MBReadOnlyList)），所以它其实并没有真的只读——见下面「风险与边界」 |

## 真实示例

官方子类最简形态，逐字照抄自 `TaleWorlds.Core/BasicGameModels.cs`：

```csharp
public class BasicGameModels : GameModelsManager
{
    public RidingModel RidingModel { get; private set; }
    public ItemCategorySelector ItemCategorySelector { get; private set; }
    public ItemValueModel ItemValueModel { get; private set; }

    public BasicGameModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)
    {
        this.RidingModel = base.GetGameModel<RidingModel>();
        this.ItemCategorySelector = base.GetGameModel<ItemCategorySelector>();
        this.ItemValueModel = base.GetGameModel<ItemValueModel>();
    }
}
```

注意 `base.GetGameModel<...>` 而不是 `this.GetGameModel<...>`——没有区别，但 `base.` 明确表达了「走的是基类的链查找，不是某个子类重写的版本」。三个字段是 `private set`，构造完就不可改。

自己加一个管理器并把它挂进 `Game`（这是 mod 想要「一份自己的模型快照」时的正确路径）：

```csharp
public class MyModModels : GameModelsManager
{
    public MyLootTableModel LootTable { get; private set; }
    public string ModTag { get; private set; }

    public MyModModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)
    {
        this.LootTable = base.GetGameModel<MyLootTableModel>();
        this.ModTag = this.GetGameModels().Count.ToString();
    }
}
```

用的时候从 `Game.Current` 上按类型取，而不是自己保存引用（`AddGameModelsManager<T>` 已经按 `typeof(T)` 存进字典了）：

```csharp
protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
{
    base.InitializeGameStarter(game, gameStarterObject);
    gameStarterObject.AddModel<MyLootTableModel>(new MyLootTableModel());
}

// 晚些时候，在 Campaign 创建完成之后
MyModModels models = Game.Current.AddGameModelsManager<MyModModels>(gameStarterObject.Models);
int count = models.LootTable.RollCount(2);   // RollCount 声明在下面的 MyLootTableModel 上
```

`AddGameModelsManager<T>` 的返回值就是刚建好的实例，直接用即可。**如果同一个 `T` 已经注册过（官方已注册 `GameModels`、`BasicGameModels`、`MissionGameModels`），重复调用会因为 `Dictionary<Type, GameModelsManager>.Add` 抛 `ArgumentException: An item with the same key has already been added`。**

自定义槽位必须判空，因为没有任何机制保证它存在：

```csharp
// 下面两处调用（models.LootTable.RollCount(2) 与 _loot.RollCount(tier)）用的就是这个类型
// 它的声明在本页示例里，因为 MyLootTableModel 是读者自己写的模型
public class MyLootTableModel : GameModel
{
    public int RollCount(int tier)
    {
        return tier;
    }
}

public class MyLootTableHost : GameModelsManager
{
    private readonly MyLootTableModel _loot;

    public MyLootTableHost(IEnumerable<GameModel> inputComponents) : base(inputComponents)
    {
        this._loot = base.GetGameModel<MyLootTableModel>();
    }

    public int RollLoot(int tier)
    {
        return (this._loot != null) ? this._loot.RollCount(tier) : 0;
    }
}
```

## 风险与边界

- **`GetGameModel<T>()` 返回 `null` 而不是抛异常。** 这是本类最容易踩的坑。官方 144 个槽位由沙盒/故事模式保证填充，你新加的没人管。对值类型派生更糟：`default(T)` 是 0，后面静默算错。要么判空，要么在自己的管理器里对必需槽位做构造期断言。
- **`MBReadOnlyList<T>` 并不真的只读。** `MBReadOnlyList<T> : List<T>`（见 [MBReadOnlyList](../MBReadOnlyList)），它只是名字带 ReadOnly，实际继承了 `Add`/`Remove`/`Clear`。`GetGameModels()` 返回的就是这个对象，所以拿到它的调用方**可以直接改** `_gameModels`。`GameModelsManager` 自己的 `GetGameModel<T>` 不受影响（它读私有字段），但你会得到一个「看起来只读的快照其实可写」的不变量破坏。要真只读就自己 `new List<GameModel>(...)` 拷一份。
- **`GetGameModels()` 在全树零调用点。** `grep -rn "GetGameModels()" bannerlord-1.3.0/` 只命中它自己的定义那一行。唯一 public 成员目前没有任何官方消费方。想枚举模型请用 `GetGameModel<T>()` 按类型取。
- **容器内容在构造那一刻冻结。** 因为 `ToMBList` 复制了元素，之后 `IGameStarter.AddModel` 再加的东西这个管理器看不见。构造时机必须晚于全部 mod 的 `InitializeGameStarter`。`Game.AddGameModelsManager<T>` 本身不做任何时机校验，时机错了就是静默的「模型是 null」。
- **`protected` 构造器 + `Activator.CreateInstance` 的组合意味着你无法给子类加额外构造参数。** `Game.AddGameModelsManager<T>` 硬编码 `new object[]{ inputComponents }` 单一入参。子类想收配置就得走别的路（比如 `Game.Current` 上存自己的静态字段）。
- **`AddGameModelsManager<T>` 每个类型只能调一次。** 字典键是 `typeof(T)`，第二次会抛 `ArgumentException`。同名但不同程序集的两个 `T` 是不同的 `Type`，能各注册一次——但它们会各自持有一份独立快照。
- **不是 `MBObjectBase`，不参与存档。** 没有 `StringId`/`Id`，`MBObjectManager` 不注册它，也不要指望模型引用能跨存档存活。

## 跨版本提示

`GameModelsManager.cs` 在 1.3.0 是 1006 字节，1.3.15 起到 1.5.3 都是 **989 字节**。差的 17 字节不是行为变化，是编译产物命名：1.3.0 里 `GetGameModel<T>` 用 `T result;` 而 1.3.15+ 用 `T t;`。**public/protected 成员集合跨 1.3 → 1.5 三个大版本逐字节等价**：还是那个 `protected` 构造器、`GetGameModel<T>`、`GetGameModels()`、那个 `private readonly MBList<GameModel>` 字段，倒序 `Count - 1` 的循环一行没改。

变的是**子类数量和规模**：`GameModels` 与 `MissionGameModels` 里新增的槽位随版本增加（海战、编队、GauntletUI 相关的模型），但三个子类的**写法**始终是「构造器里 `base.GetGameModel<T>()` 填只读属性」。所以升级时你要盯的仍然是 `GetGameModel<T>` 会不会漏填某个新槽位，而不是这个基类的 API。

## 依赖关系

- 元素类型与派生基类：[GameModel](../GameModel) 是 `GetGameModel<T>` 的约束上界，[MBGameModel](../MBGameModel) 是所有实际注册进 `_gameModels` 的对象所继承的装饰基类
- 存储容器：[MBList](../MBList)（经 `Extensions.ToMBList<GameModel>()` 复制得到），返回类型是 [MBReadOnlyList](../MBReadOnlyList)
- 注册入口：[IGameStarter](../IGameStarter) 的两个 `AddModel` 重载负责往源头加模型，[BasicGameStarter](../../mission-ext/BasicGameStarter) 的泛型重载负责接 `BaseModel` 并维持与本类同向的倒序查找
- 实例创建：[Game](../Game) 的 `AddGameModelsManager<T>` 用 `Activator.CreateInstance` 造实例并按 `typeof(T)` 存字典
- 官方子类示例：[BasicGameModels](../BasicGameModels)（3 槽位最短样例）与 [MissionGameModels](../../mission-ext/MissionGameModels)（任务侧集合），`GameModels` 在 campaign 桶外但同类写法
- 启动编排：[MBGameManager](../../mission-ext/MBGameManager) 决定管理器被构造的时机，`Campaign.cs` 负责把 `Models` 喂进去
- 桶首页：[core-extra API 分区](../)
