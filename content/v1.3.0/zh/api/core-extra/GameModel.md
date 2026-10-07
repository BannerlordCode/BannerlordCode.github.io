---
title: "GameModel"
description: "引擎的模型标记基类：零成员、零抽象方法，全部模型都经 MBGameModel<T> 自派生，覆盖靠 GameModelsManager 的倒序 as T 查找实现。"
---

# GameModel

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public abstract class GameModel`
**Base:** 无（仅隐式 `System.Object`；不继承 `MBObjectBase`，不实现任何接口）
**File:** `TaleWorlds.Core/GameModel.cs`（全文 9 行）

## 概述

`GameModel` 是整个引擎的**模型标记基类**。它的源码里没有任何字段、属性、方法、事件，连构造函数都没有——`public abstract class GameModel { }` 就是全部。所以这一页最该先讲清楚的是一件反直觉的事：**它没有任何抽象成员，「派生类必须实现什么」这个问题的答案是「什么都不用实现」**。

它唯一的职责是当**编译期的类型标签**，让异构的模型能装进同一个容器。`GameModelsManager` 的字段是 `private readonly MBList<GameModel> _gameModels`，[IGameStarter](../IGameStarter) 的 `Models` 属性是 `IEnumerable<GameModel>`——正因为有一个共同的基类，200 多种互不相干的模型才能挤进一个列表，然后在消费端靠 `as T` 还原成具体类型。`GameModelsManager.GetGameModels()` 返回的正是 `MBReadOnlyList<GameModel>`：调用方拿到的是标签，读到具体能力必须自己再转型。

它同时承担一个**存档与对象管理器都不认识它**的角色。`GameModel` 不是 `MBObjectBase` 子类，没有 `StringId` / `Id`，不会被 `MBObjectManager` 注册，也不在任何 `[SaveableField]` 标注之下。它是纯粹的运行期对象，随 `IGameStarter` 的列表一起被创建、在游戏启动时活到游戏结束。

派生方式只有一条路。全树用 `grep -rnE "class\s+\w+\s*:\s*GameModel\b"` 直连 `GameModel` 的结果是 **0 条**；而 `class XxxModel : MBGameModel<XxxModel>` 命中 **144 条**（[AgeModel](../../campaign/AgeModel) 是其中之一，它是 `public abstract class AgeModel : MBGameModel<AgeModel>`，带着 7 个抽象年龄属性和一个抽象方法 `GetAgeLimitForLocation`）。所以「派生 `GameModel` 必须实现什么」的完整答案是：**你不会直接派生它，你派生 `MBGameModel<T>`，而 `T` 必须就是你自己**——见 [MBGameModel](../MBGameModel) 那页的装饰式基类协议。

## 心智模型

把它当成**装饰器的入参类型**就对了，别的都顺。游戏里的模型不是「一个实现接口的对象」，而是**一条按注册顺序叠起来的链**：

**第一步，官方实现先注册。** [MBGameManager](../../mission-ext/MBGameManager) 调各 `MBSubModuleBase` 的 `InitializeGameStarter`，沙盒在 `SandBox/SandBoxSubModule.cs` 里连着写了三十多行 `gameStarterObject.AddModel<AgentStatCalculateModel>(new SandboxAgentStatCalculateModel())`。注意用的是**泛型重载** `AddModel<T>(MBGameModel<T> gameModel)`，不是 `AddModel(GameModel gameModel)`。

**第二步，泛型重载替你把被包装者接上。** [BasicGameStarter](../../mission-ext/BasicGameStarter) 的 `AddModel<T>(MBGameModel<T>)` 只有三行，但每一行都有讲究：先 `T model = this.GetModel<T>()`——`GetModel<T>` 从**列表末尾往前**扫 `this._models[i] as T`，拿到此刻已注册链上最靠外层的那个 `T`；再 `gameModel.Initialize(model)` 把它塞进新对象的 `BaseModel`；最后 `this._models.Add(gameModel)` 追加。

**第三步，消费端也倒序扫。** `GameModelsManager.GetGameModel<T>()` 的循环同样是 `for (int i = this._gameModels.Count - 1; i >= 0; i--)`。**「最后注册的赢」这条规则在注册端和消费端是配套的**，这正是覆盖机制的全部实现——没有接口默认方法，没有优先级属性，没有 `[OverrideModel]` 特性。

于是「派生类必须实现什么」在实践层面就有答案了。以 [AgeModel](../../campaign/AgeModel) 为例，mod 要改成人衰老更慢，写法不是实现 `GameModel`，而是继承 `AgeModel` 并重写它自己声明的那 7 个抽象成员：

```csharp
public class MyAgeModel : MBGameModel<AgeModel>
{
    public override int BecomeInfantAge { get { return 3; } }
    public override int BecomeChildAge { get { return 7; } }
    public override int BecomeTeenagerAge { get { return 13; } }
    public override int HeroComesOfAge { get { return 18; } }
    public override int BecomeOldAge { get { return 50; } }
    public override int MiddleAdultHoodAge { get { return 30; } }
    public override int MaxAge { get { return 70; } }
    public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")
    {
        minimumAge = 0;
        maximumAge = this.BaseModel.MaxAge;
    }
}
```

`BaseModel` 是 `MBGameModel<T>` 上的 `private protected T BaseModel { protected get; private set; }`——**外部读不到、派生类读得到**。`this.BaseModel` 就是官方那个 `AgeModel`，`this.BaseModel.MaxAge` 就是在转发而不是硬编码；想彻底替换某个行为时不引用它即可。注意这个类型自己的 `T` 是 `AgeModel`，不是 `MyAgeModel`，这是官方刻意的设计：`GetModel<T>()` 扫出来的是「任意一个 `AgeModel`」，所以三方 mod 无论叫什么类名、继承几层，都能被同一个 `AddModel<AgeModel>` 接住。

最后是**时机**。`Game.Current.DefaultSkills` 之类的静态状态跟 `GameModel` 无关，但模型的创建发生在 `MBSubModuleBase.InitializeGameStarter` 阶段，也就是**游戏启动时**；`Campaign.cs:1905` 才把 `campaignGameStarter.Models` 交给 `Game.Current.SetBasicModels(...)` 和 `AddGameModelsManager<GameModels>(...)`。`MissionGameModels` 那条线则是在 [MBGameManager](../../mission-ext/MBGameManager) 里用 `gameStarter.Models` 另起一个管理器。两批模型进的是两个不同的 `GameModelsManager`，所以**战役模型和任务模型各自独立覆盖，互不干扰**。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| （无） | `public abstract class GameModel { }` | 源码里没有任何成员。下面三行说明「它凭什么有用」，以及你真正该去看的地方。 |

| 承载点 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `MBGameModel<T>.BaseModel` | `private protected T BaseModel { protected get; private set; }` | 在 [MBGameModel](../MBGameModel) 上，不在本类。它是被包装的上一环，`protected` getter 让派生类转发行为，`private` setter 让链路只由 `Initialize(T)` 单向装配。 |
| `MBGameModel<T>.Initialize` | `public void Initialize(T baseModel)` | `AddModel<T>(MBGameModel<T>)` 唯一会调的钩子，把 `BaseModel` 接上。它是 `public` 但设计意图是「只给框架调」。 |
| `IGameStarter.AddModel` | `void AddModel(GameModel gameModel)` | 非泛型重载，**原样追加、不接 `BaseModel`**。用它注册自定义模型就得自己保证覆盖顺序；`SandBoxSubModule` 走的全是泛型重载。 |
| `GameModelsManager.GetGameModel<T>` | `protected T GetGameModel<T>() where T : GameModel` | 倒序 `as T` 查找，返回列表上最外层的那个 `T`。各 `XxxModels` 聚合类（如 `BasicGameModels`、`MissionGameModels`、`GameModels`）的构造器就是靠它在构造期一次性把 144 个模型槽位填满。 |

## 真实示例

在 `InitializeGameStarter` 里覆盖一个官方模型（这是官沙盒自己的写法，逐字照抄自 `SandBox/SandBoxSubModule.cs`）：

```csharp
public class MySubModule : MBSubModuleBase
{
    protected override void InitializeGameStarter(Game game, IGameStarter gameStarterObject)
    {
        base.InitializeGameStarter(game, gameStarterObject);
        gameStarterObject.AddModel<StrikeMagnitudeCalculationModel>(new MyStrikeMagnitudeModel());
    }
}

public class MyStrikeMagnitudeModel : MBGameModel<StrikeMagnitudeCalculationModel>
{
    public override float GetBluntDamageFactorByDamageType(DamageTypes damageType)
    {
        float vanilla = this.BaseModel.GetBluntDamageFactorByDamageType(damageType);
        return vanilla * 1.25f;
    }
}
```

值改成「原值乘 1.25」而不是写死，是关键：如果直接 `return 25`，前面注册的其它 mod 的修改就被你吞掉了；走 `this.BaseModel.` 是沿着链往下传，每个 mod 都能看到上一步的结果。

完全自造一个新模型槽位（不覆盖任何官方模型，用非泛型 `AddModel`）：

```csharp
public class MyLootTableModel : GameModel
{
    public int RollLootCount(int tier)
    {
        return tier * 2;
    }
}

public class MyLootTableHost : GameModelsManager
{
    private readonly MyLootTableModel _loot;

    public MyLootTableHost(IEnumerable<GameModel> inputComponents) : base(inputComponents)
    {
        this._loot = this.GetGameModel<MyLootTableModel>();
    }

    public int RollLoot(int tier)
    {
        return this._loot.RollLootCount(tier);
    }
}
```

`GetGameModel<MyLootTableModel>()` 返回的可能是 `null`——没有任何机制保证容器里一定有你的模型。官方那 144 个槽位由沙盒/故事模式保证填充，你自己加的可没人填，所以**消费前必须判空**。这一点在 `BasicGameModels` 里写得很直白：`this.RidingModel = base.GetGameModel<RidingModel>();` 之后 `RidingModel` 就直接被当成非空用了，因为官方保证了它一定在。

## 风险与边界

- **零成员，零抽象成员。** 「派生 `GameModel` 要实现什么」——什么都不用。它是 `abstract` 所以不能 `new`，但仅此而已。不要指望从它身上读出任何行为契约，行为契约在每个 `XxxModel` 抽象类里各自声明（[AgeModel](../../campaign/AgeModel) 的 7 个年龄属性、[ItemValueModel](../ItemValueModel) 的 `CalculateValue` / `CalculateTier` / `GetEquipmentValueFromTier`）。
- **`protected GetGameModel<T>()` 不是公开 API。** 它只在 `GameModelsManager` 及其子类里可见。你的 mod 代码在 `MBSubModuleBase.InitializeGameStarter` 阶段手上只有 `IGameStarter`，想要模型请用 `BasicGameStarter` 上那个同名 `public T GetModel<T>()`，或者干脆把需要的模型引用存进自己的静态字段。
- **覆盖顺序 = 模块加载顺序，无声明手段。** 覆盖靠「后注册者包住先注册者」。`MBGameManager.InitializeGameStarter` 是遍历 `MBSubModuleBase` 列表依次调，谁先谁后取决于模块初始化次序，mod 之间没有协商机制。链的深度 = 覆盖这个模型的 mod 数量，每一层都调一次 `BaseModel`，长链有轻微开销。
- **不能被存档系统或对象管理器认识。** 不是 `MBObjectBase`，没有 `StringId`，`MBObjectManager` 不注册它。所以别指望 `Game.Current.ObjectManager.GetObject<GameModel>(...)` 这种写法能工作，也别在模型里塞需要持久化的状态——模型的字段在读档时会被整个重建。`MBGameManager` 会为沙盒战场模型加一个空的 `MissionGameModels` 聚合器（`gameStarter.Models`），但那是容器行为，不改变 `GameModel` 自身的身份。
- **`AddModel` 的两个重载语义不同。** 泛型重载会接 `BaseModel`，非泛型重载只是 `Add`。混用很容易得到一条断掉的链：非泛型注册的东西照样能被 `GetGameModel<T>` 扫到，但它自己不能往下转发。
- **取到 null 不抛异常。** `GetGameModel<T>()` 扫不到就 `return default(T)`，即 `null`。对引用类型没异常，对值类型会得到 0 而后静默算错——如果你的 `T` 恰好是值类型派生（官方 144 个全是引用类型），这个失败模式会非常难查。
- **两端倒序扫描是隐式契约。** `BasicGameStarter.GetModel<T>` 和 `GameModelsManager.GetGameModel<T>` 都是 `Count - 1` 递减。它们必须同向，否则「包装」的语义就反了。这不是文档承诺，是当前实现的性质。

## 怎么用

**怎么拿到。** 本体在 `bannerlord-1.3.0/TaleWorlds.Core/GameModel.cs:6` —— **全文 9 行，其中 5 行是空行与注释，类体 `{}` 里什么都没有**。声明是 `public abstract class GameModel`，零构造函数、零字段、零属性、零方法、零抽象成员。

**所以「派生 `GameModel` 要实现什么」的答案是：什么都不用。** 它是 `abstract` 所以不能 `new`，但仅此而已。它唯一的作用是给引擎一个**可被按类型检索的标记基类**。

你的实例只可能从这条链上来：

- `GameModelsManager` 的构造函数 `protected GameModelsManager(IEnumerable<GameModel> inputComponents)`（`GameModelsManager.cs`）把它 `ToMBList<GameModel>()` 存起来。
- 那个 `inputComponents` 来自 `Game.AddGameModelsManager<T>(IEnumerable<GameModel>)`（`Game.cs:86`），官方在 `Game.cs:475`（`this.BasicModels = this.AddGameModelsManager<BasicGameModels>(models);`）、`MBGameManager.cs:187`、`Campaign.cs:1906` 调用它。
- 而 `models` 是 `IGameStarter` 上收集的那一串 —— **mod 追加模型的入口就是往 game starter 里加**。

**一段可直接跑的三行**：

```csharp
public class MyLootTableModel : GameModel
{
    public int Roll(int tier) { return tier * 2; }
}
public class MyModels : GameModelsManager
{
    public MyLootTableModel LootTable { get; private set; }
}
```

注意第一行：`class MyLootTableModel : GameModel` 的类体里那个 `Roll` 是**它自己声明的**，不是覆写基类的任何东西。`GameModel` 上没有成员可供 `override`，所以写 `override` 编译不过。

- **一个必须知道的注册顺序事实。** `GameModelsManager.GetGameModel<T>()` 的循环是 `for (int i = this._gameModels.Count - 1; i >= 0; i--)` —— **倒序扫描，先命中后注册**。也就是说同类型注册两次时，**后加的那个赢**。这与 [EntitySystem](../EntitySystem) 的 `GetComponent` 正好相反（那个取 `list[0]`，先注册赢），从 model 体系转到 entity 体系时极易踩反。

- **你的管理器必须恰好有一个 `IEnumerable<GameModel>` 构造。** `Game.cs:86` 的 `AddGameModelsManager<T>` 的方法体是 `Activator.CreateInstance(typeof(T), new object[] { inputComponents })` —— **反射调用，会跑你写的构造器**。所以你要么照官方那样写一个 `protected MyModels(IEnumerable<GameModel> inputComponents) : base(inputComponents)`，要么在构造体末尾自己把所需的 `GameModel` 从 `inputComponents` 里挑出来赋给属性；**写了无参构造它不会用**。

**最常见的坑：零成员，零抽象成员。** 不要指望从 `GameModel` 身上读出任何行为契约 —— 行为契约在每个 `XxxModel` 抽象类里各自声明。这条已在「风险与边界」首条展开；就写法而言它的后果是：你以为要实现一组接口方法，结果写完直接编译通过、但引擎调的还是官方实现。

## 跨版本提示

`GameModel.cs` 在 `bannerlord-1.3.0/`、`bannerlord-1.3.15/`、`bannerlord-1.4.6/`、`bannerlord-1.4.7/`、`bannerlord-1.5.3/` 五个源码树里**逐字节一致**：都是 9 行、都只含 `public abstract class GameModel { }`、public/protected 成员数都是 **0**。跨 1.3 → 1.5 三个大版本零变化——这个标记基类的稳定性可以完全信任，你的 `MBGameModel<T>` 派生类不会因为游戏升级而编译不过。

变的是**派生层的数量和内容**：`MBGameModel<T>` 的派生类在 1.3.0 是 144 个，往后版本持续新增（沙盒、海战、编队等新系统各自加自己的 `XxxModel`），但基类形状不变。换句话说：**升级风险全在你重写的那批 `XxxModel` 抽象成员上，不在 `GameModel` 上**。

## 依赖关系

- 派生基类：[MBGameModel](../MBGameModel) 的 `private protected T BaseModel` 与 `Initialize(T)` 是本类之上唯一真正增加能力的派生层
- 容器与查找：[GameModelsManager](../GameModelsManager) 用 `MBList<GameModel>` 持有全部实例并提供倒序 `GetGameModel<T>()`
- 注册入口：[IGameStarter](../IGameStarter) 声明两个 `AddModel` 重载，[BasicGameStarter](../../mission-ext/BasicGameStarter) 给出泛型重载「接上 BaseModel」的完整实现
- 具体模型样例：[AgeModel](../../campaign/AgeModel) 是最小的抽象模型（7 个抽象属性 + 1 个抽象方法），[ItemValueModel](../ItemValueModel) 是三个抽象方法的经济向模型
- 聚合实例：[BasicGameModels](../BasicGameModels) / `MissionGameModels` / `GameModels` 在构造器里一次性把槽位填满
- 启动编排：[MBGameManager](../../mission-ext/MBGameManager) 的 `InitializeGameStarter` 是所有 `AddModel` 调用的实际发生地
- 桶首页：[core-extra API 分区](../)