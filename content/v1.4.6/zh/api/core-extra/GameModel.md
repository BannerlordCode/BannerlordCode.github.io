---
title: "GameModel"
description: "游戏模型层的标记基类：GameModelsManager 靠它做类型过滤，mod 的自定义 Model 全部继承它。"
---
# GameModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModel`
**Base:** `System.Object`
**File:** `TaleWorlds.Core/GameModel.cs`

## 概述

整个文件 9 行、一个抽象类、零成员。它是 Bannerlord「Model 层」的根标记类型：所有参与玩法逻辑替换的模型（伤害计算、AI 决策、地形判定、物品估值……）都继承它。抽象类但**没有抽象成员**，所以子类不需要实现任何东西——它纯粹是给 `GameModelsManager` 的 `GetGameModel<T>()` 提供一个共同的 `as` 转换目标。

心智模型上要分清三层：

- **本类（`GameModel`）**——只是类型标签，让「模型」这个概念在泛型约束里可表达。
- **`GameModelsManager`**——注册与读取入口。构造时接收一个 `IEnumerable<GameModel>`，之后用 `GetGameModel<T>()` 按类型取回**最后一个**匹配项。
- **`MBGameModel<T>`**——官方使用的具体实现基类，它才是真正带委托字段（`Select` / `IsApplicable` / `OnXxx`）的那一层。`Game` 的 `IGameStarter.AddModel<T>(MBGameModel<T>)` 重载收的就是它。

## 心智模型

mod 写自定义模型的典型顺序：

1. 继承 `MBGameModel<T>`（不是直接继承 `GameModel`——后者没有委托字段，你没法覆盖任何行为）。
2. 构造时把 `OnXxx` 委托填上，`IsApplicable` 填一个判定。
3. 在 `IGameStarter` 阶段 `AddModel(...)` 挂进去。`CampaignGameStarter.AddModel<T>` 内部最终会进 `Game` 的 `AddGameModelsManager<...>` / `SetBasicModels` 那条链。
4. 运行时由游戏侧查询：`Game.Current.BasicModels.ItemValueModel` 之类就是 `GetGameModel<T>()` 取出来的实例。

**关键坑是「最后一个匹配」**：`GameModelsManager.GetGameModel<T>()` 的循环是 `for (int i = this._gameModels.Count - 1; i >= 0; i--)`，即**从尾往头扫，命中即 return**。所以后注册的模型会遮蔽先注册的同名类型模型。mod 想覆盖官方模型时这正是你想要的语义；但如果你不小心注册了两个同类型模型，**只有最后那个生效，且不会有任何警告**。这也意味着「卸载 mod」不是删一个对象那么简单——那个被遮蔽的模型实际上不可达了。

另一个坑：`_gameModels` 是构造时一次性 `ToMBList<GameModel>()` 快照。构造之后再往传入的 `IEnumerable` 增删不会反映到管理器里。

常见误用：直接继承 `GameModel` 却不实现任何逻辑（能编译、注册成功、运行时全无效）；用 `GetGameModel<T>()` 取一个没注册过的类型（返回 `default(T)`，引用类型即 **null**，不抛）；在 `Game.Current` 还没建的时候访问 `Game.Current.BasicModels`（NRE）。

## 关键成员

本类**没有任何 public / protected 成员**：无构造函数、无属性、无方法、无字段、无嵌套类型。它是抽象类，只能被继承，不能被实例化。

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| （无） | `public abstract class GameModel` | 模型层根标记。为 `GameModelsManager` 的 `GetGameModel<T>() where T : GameModel` 提供泛型约束上限，使 `this._gameModels[i] as T` 的转换在编译期合法。 |

## 怎么用

### 怎么拿到它

`GameModel` 是 `public abstract class GameModel`（`TaleWorlds.Core/GameModel.cs:6`）——**全文 10 行，声明后面直接就是一个空的花括号 `{}`，一个成员都没有**。它不继承任何东西，连 `MBObjectBase` 都不是。

所以「怎么拿到它」完全取决于引擎怎么传递它：

- **注册**：`IGameStarter.AddModel(GameModel)`（`IGameStarter.cs:12`），通常在 `MBGameManager.OnGameInitializationFinished` 里。
- **汇总**：`Game.SetBasicModels(campaignGameStarter.Models)`（`Campaign.cs:1915`）与 `Game.AddGameModelsManager<GameModels>(campaignGameStarter.Models)`（`Campaign.cs:1916`）把集合变成 `GameModelsManager`。
- **取用**：`Campaign.Current.Models` 这类强类型入口最终调用 `GameModelsManager.GetGameModel<T>()`（`GameModelsManager.cs:17`），或 `Game.Current.DefaultSkills` 那样直接持有。

它**没有构造器**（隐式无参）、没有生命周期回调、没有 `Initialize`。模型之间要互相引用，惯例是**在自己派生类的构造器里接收其它 `GameModel` 作为参数**。

### 典型用法

定义一个时间加速模型，并在消费端从 `GameModelsManager` 里取：

```csharp
using TaleWorlds.Core;

// 一个只有纯计算的模型：不继承任何东西，自己拿依赖
public class TimeCompressionModel : GameModel          // GameModel.cs:6，空基类
{
    public float Scale { get; private set; }
    public void SetScale(float s) { Scale = s; }
}

// 注册
public override void OnGameInitializationFinished(Game game, IGameStarter gameStarter)
{
    gameStarter.AddModel(new TimeCompressionModel());  // IGameStarter.cs:12
}

// 取用：GetGameModel<T> 从后往前找，找不到返回 null
GameModelsManager mgr = game.GetGameModelsManager<GameModels>();
TimeCompressionModel mine = mgr.GetGameModel<TimeCompressionModel>();   // GameModelsManager.cs:17
if (mine != null) { mine.SetScale(2f); }
```

### 最容易踩的坑

**因为 `GameModel` 是空类，就以为可以随便写一个 `class Mine : GameModel` 然后在别处 `new` 出来直接用。** 它的生命周期完全由注册与汇总链决定：`AddModel`（`IGameStarter.cs:12`）只是把实例放进 `Models` 集合，真正让它可用的是 `Game.SetBasicModels` / `AddGameModelsManager`（`Campaign.cs:1915-1916`）。你手动 `new` 出来的那个实例**不在集合里**，`GetGameModel<T>()`（`GameModelsManager.cs:17`）从集合尾部往前扫，永远扫不到它——于是 `Campaign.Current.Models.你的模型` 是 null，而你自己手里那个实例明明有数据。表现是「同一个模型有两份，其中一份完全不生效」。

第二个坑在 `GetGameModel<T>()`（`GameModelsManager.cs:17-29`）的查找方向和失败行为：实现是 `for (int i = this._gameModels.Count - 1; i >= 0; i--) { if ((t = this._gameModels[i] as T) != null) return t; } return default(T);`——**倒序扫描，所以列表里靠后的同类型模型赢**；找不到返回 `null` 而不是抛异常。后果是如果两个 mod 都注册了同类型模型，加载顺序决定你拿到谁的，覆盖行为静默发生。

第三，`GameModelsManager` 的构造器是 `protected GameModelsManager(IEnumerable<GameModel> inputComponents)`（`:11`），内部 `inputComponents.ToMBList<GameModel>()`（`:12`）——**它在构造时就做了拷贝**。所以注册之后、汇总之前往 `IGameStarter.Models` 里加东西，取决于汇总发生在哪一步（`Campaign.cs:1915`）。

## 真实示例

mod 注册一个自定义估值模型并取回（`MBGameModel<T>` 是官方带委托的实现基类）：

```csharp
public class MyItemValueModel : MBGameModel<ItemObject>
{
    public MyItemValueModel()
    {
        this.CalculateValue = item => 100 + item.Tier;
        this.GetIsTransferable = item => !item.IsUniqueItem;
    }
}

public class MyModSubModule : MBSubModuleBase
{
    protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);
        gameStarterObject.AddModel(new MyItemValueModel());
    }
}
```

按类型取回（没注册过就返回 null，必须判空）：

```csharp
ItemValueModel valueModel = Game.Current.BasicModels.ItemValueModel;
if (valueModel != null)
{
    int worth = valueModel.CalculateValue(someItem);
}
```

遍历管理器里的全部模型实例：

```csharp
MBReadOnlyList<GameModel> allModels = Game.Current.BasicModels.GetGameModels();
foreach (GameModel model in allModels)
{
    Debug.Print("registered model: " + model.GetType().Name, 0);
}
```

## 风险与边界

- **抽象但无抽象成员。** 直接继承 `GameModel` 编译得过，但什么行为都没有。真正要覆写的是 `MBGameModel<T>` 上的委托属性。
- **取不到就是 null。** `GetGameModel<T>()` 返回 `default(T)`，没有异常、没有日志。代码里必须判空。
- **「最后一个匹配」语义。** 倒序扫描 + 命中即返回。同类型重复注册时前面的被静默遮蔽。
- **集合是构造时快照。** `_gameModels` 在 `GameModelsManager` 构造时由 `ToMBList<GameModel>()` 定死，之后无法增删。
- **绑定在 `Game` 生命周期上。** 模型管理器由 `Game` 的 `BasicModels` / `AddGameModelsManager` 持有，`Game.Destroy()` 之后整批失效。换局必须重新注册。
- **`Game.Current` 为 null 的早期窗口。** 静态构造器、字段初始化、`OnSubModuleLoad` 阶段都拿不到 `BasicModels`。
- **模型替换无隔离。** 没有「优先级」概念，后注册即覆盖。官方模型和 mod 模型混在同一个列表里。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/GameModel.cs` 逐行比对：**两个版本都是同样的 9 行空抽象类，public 表面完全一致（都为空）**。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/GameModel.cs`（6 行）与 `bannerlord-1.4.6/TaleWorlds.Core/GameModel.cs`（10 行）逐成员比对 public/protected 表面。**三版都是空抽象类，public 表面均为空（0 成员）**。1.4.5 的 6 行就是 `namespace TaleWorlds.Core;` + `public abstract class GameModel` + 一个空体；1.3.15 与 1.4.6 各 10 行，差的 4 行是 namespace 块的括号。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 消费方：[GameModelsManager](../GameModelsManager) 的 `GetGameModel<T>() where T : GameModel` 依赖本类作为约束上限
- 宿主：[Game](../Game) 的 `BasicModels` / `AddGameModelsManager<T>()` 持有管理器实例
- 注册入口：`IGameStarter.AddModel(...)`（`CampaignGameStarter` 的实现），由 `MBSubModuleBase.OnGameStart` 传进来的 `IGameStarter` 承载
- 桶首页：[core-extra API 分区](../)

## 导航

- 同桶：[`../GameModelsManager`](../GameModelsManager) · [`../Game`](../Game) · [`../IGameStarter`](../IGameStarter)
- 父索引：[`../_index`](../_index)
