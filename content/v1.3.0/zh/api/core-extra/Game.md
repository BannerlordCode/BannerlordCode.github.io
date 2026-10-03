---
title: "Game"
description: "全局单例：Game.Current 是引擎几乎所有静态入口的根，持有对象管理器、模型管理器集合、事件总线与游戏处理器组件表；构造器即发布 Current，Destroy 才把它置回 null。"
---

# Game

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** 无（仅隐式 `System.Object`）；实现 `IGameStateManagerOwner`
**File:** `TaleWorlds.Core/Game.cs`（全文 657 行，23317 字节）

## 概述

`Game` 是整个引擎的**全局单例**。全树 465 个文件里出现 `Debug`，而 `Game.Current` 这个静态入口几乎在每个模块的入口处都被摸一次。它的职责可以分成四块：

**一是持有基础设施。** `ObjectManager`（所有 `MBObjectBase` 的注册表）、`EventManager`（全局事件总线）、`GameStateManager`（界面状态栈）、`GameManager`（沙盒/故事模式的具体管理器）、`RandomGenerator`、`GameTextManager`。

**二是持有模型管理器集合。** 它有个私有 `Dictionary<Type, GameModelsManager> _gameModelManagers`，通过 `AddGameModelsManager<T>(IEnumerable<GameModel>)` 填充。**注意它没有对应的公开 getter**——模型管理器注册进去之后，外部只能靠各自模块的持有者去拿。

**三是持有全局默认值表。** `DefaultSkills` / `DefaultCharacterAttributes` / `DefaultBannerEffects` / `DefaultItemCategories` 四个模型，加一个 `GetDefaultEquipmentWithName(string)` / `SetDefaultEquipments(...)` 的装备表。这些全是「读多写少、启动时填好」的常量表。

**四是承载游戏处理器。** 它内部有一个 `private EntitySystem<GameHandler> _gameEntitySystem`，通过 `AddGameHandler<T>` / `GetGameHandler<T>` / `RemoveGameHandler<T>` 三个薄壳暴露——**这就是本页最该记住的部分**，因为它是 mod 挂全局逻辑的正规入口。

`Game.Current` 的 setter 是 `internal`，而且**赋值时会立刻触发 `OnGameCreated` 事件**：

```csharp
public static Game Current
{
    get { return Game._current; }
    internal set
    {
        Game._current = value;
        Action onGameCreated = Game.OnGameCreated;
        if (onGameCreated == null) { return; }
        onGameCreated();
    }
}
```

所以「`Game.Current` 什么时候可用」的精确答案是：**构造器执行完、且 `OnGameCreated` 订阅者都跑完之后**。在你自己的 `OnGameCreated` 回调里读 `Game.Current.ObjectManager` 是安全的；反过来，如果你在别处看到 `Game.Current` 是 `null`，说明游戏没启动或已 `Destroy`。

## 心智模型

**把它当成「所有静态入口的根」，而不是「游戏状态机」。** 状态机是 [GameStateManager](../GameStateManager) 的事；`Game` 更像一条竖直的生命周期线：

**第一步，构造即发布。** 私有构造器的顺序值得看：

```csharp
private Game(GameType gameType, GameManagerBase gameManager, MBObjectManager objectManager)
{
    this.GameType = gameType;
    Game.Current = this;                        // ← 第 3 行就把自己发布出去
    this.GameType.CurrentGame = this;
    this.GameManager = gameManager;
    this.GameManager.Game = this;
    this.EventManager = new EventManager();
    this.ObjectManager = objectManager;
    this.RandomGenerator = new MBFastRandom();
    this.InitializeParameters();
}
```

`Game.Current = this` 在**第 3 行**，早于 `EventManager` 与 `ObjectManager` 的赋值。所以**在 `OnGameCreated` 的某个订阅者里，如果它的执行时机早于其它订阅者，`Game.Current.EventManager` 可能还是 `null`**。这条只在订阅顺序敏感时才有意义，但它是真实的。

两个静态工厂的差别也只有一处：

- `CreateGame(GameType, GameManagerBase, int seed)` → 调无参版，再 `game.RandomGenerator = new MBFastRandom((uint)seed);`
- `CreateGame(GameType, GameManagerBase)` → `MBObjectManager.Init()` + `Game.RegisterTypes(...)` + `new Game(...)`

**所以带 seed 的那个版本不是在 Init 之前设种子，而是建完之后覆盖随机发生器。** 两者初始化过程完全相同。

**第二步，读档走的是完全不同的一条路。** `LoadSaveGame(LoadResult, GameManagerBase)` **不调用构造器**：

```csharp
Game game = (Game)loadResult.Root;
Game.RegisterTypes(game.GameType, objectManager, gameManager);
loadResult.InitializeObjects();
MBObjectManager.Instance.ReInitialize();
loadResult.AfterInitializeObjects();
GC.Collect();
game.ObjectManager = objectManager;
game.BeginLoading(gameManager);
return game;
```

`game` 是从存档根对象里取出来的（`LoadResult.Root`），它的字段由存档系统恢复，**`Game.Current` 的赋值发生在反序列化过程中而不是这里**。这就是为什么读档后 `ObjectManager` 要重新赋一遍、而 `GameManager.Game` 却不需要——前者是新对象，后者已在存档里。

**第三步，理解 `Destroy` 的顺序不可逆。** 它按固定顺序拆解：

```
CurrentState = Destroying
  → 所有 GameHandler.OnGameEnd()
  → GameManager.OnGameEnd(this)
  → GameType.OnDestroy()
  → ObjectManager.Destroy()
  → EventManager.Clear() 然后置 null
GameStateManager.Current = null; GameStateManager = null
Game.Current = null                          // ← 注意：这一步会再次触发 OnGameCreated
CurrentState = Destroyed
_currentActiveSaveData = null
Common.MemoryCleanupGC(false)
```

**`Game.Current = null` 在 `Destroy` 末尾也会触发 `OnGameCreated`**（setter 里没有「值变了才触发」的保护）。所以 `OnGameCreated` 订阅者必须在回调里自己判 `Game.Current == null`——否则销毁游戏时你的回调会在一个半拆解的对象图上跑。

**第四步，理解三个 `GameHandler` 方法为什么存在。** 它们是 [EntitySystem](../EntitySystem) 的三行转发：

```csharp
public T AddGameHandler<T>() where T : GameHandler, new()
{
    return this._gameEntitySystem.AddComponent<T>();
}
```

`new()` 约束是硬要求——`EntitySystem.AddComponent<T>` 内部靠 `Type.GetConstructor(Type.EmptyTypes)` 反射造实例。而 `_gameEntitySystem` 是**懒建的**：`Initialize()` 里才 `if (this._gameEntitySystem == null) { this._gameEntitySystem = new EntitySystem<GameHandler>(); }`。**在 `Initialize()` 之前调 `AddGameHandler` 会 `NullReferenceException`**，因为 `AddGameHandler` 本身不判空（对比 `Campaign.GetEntityComponent` 就做了 `_campaignEntitySystem == null` 的保护）。

全树唯一的官方调用点是 `Campaign.cs:1884` 的 `this.SandBoxManager = Game.Current.AddGameHandler<SandBoxManager>();`。

**第五步，理解 `State` 只有三个值。** `Running` / `Destroying` / `Destroyed`。**没有「暂停」「加载中」这些状态**——加载中由 `GameStateManager` 那一侧表达，`Game.State` 只标记这个对象还剩多少活性。判断「游戏对象还能用吗」的实用检查是 `Game.Current != null && Game.Current.CurrentState == Game.State.Running`。

## 关键成员

| 成员 | 签名 | 这个成员是做什么用的 |
| --- | --- | --- |
| `Current` | `public static Game Current { get; internal set; }` | 全局单例。**setter 是 `internal`，赋值时立刻触发 `OnGameCreated`（包括置 null 时）**。你的 mod 永远改不了它。 |
| `OnGameCreated` | `public static event Action OnGameCreated` | 静态事件，`Game.Current` 被赋值时触发。**这是 mod 挂全局初始化回调的正规入口。** |
| `OnItemDeserializedEvent` | `public event Action<ItemObject> OnItemDeserializedEvent` | 实例事件，某物品反序列化完成后触发。 |
| `CreateGame` | `public static Game CreateGame(GameType gameType, GameManagerBase gameManager)` | `MBObjectManager.Init()` + `RegisterTypes` + `new Game(...)`。**这是启动游戏的正规入口。** |
| `CreateGame` | `public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)` | 调上一行，再 `RandomGenerator = new MBFastRandom((uint)seed)`。**种子是建完才设的。** |
| `LoadSaveGame` | `public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)` | **不走构造器**。从 `LoadResult.Root` 取 `Game`，注册类型、初始化对象、重建对象管理器。 |
| `AddGameHandler<T>` | `public T AddGameHandler<T>() where T : GameHandler, new()` | 转发 `_gameEntitySystem.AddComponent<T>()`，自动调 `OnInitialize`。**`_gameEntitySystem` 为 null 时抛 NRE。** |
| `GetGameHandler<T>` | `public T GetGameHandler<T>() where T : GameHandler` | 转发 `GetComponent<T>()`。**没注册过返回 `null`**（`_componentsOfTypes` 查不到 → `default(T)`）。 |
| `RemoveGameHandler<T>` | `public void RemoveGameHandler<T>() where T : GameHandler` | 转发 `RemoveComponent<T>()`，触发 `OnFinalize`。**只移除最先注册的那一个。** |
| `AddGameModelsManager<T>` | `public T AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager` | 构造一个 `T` 并塞进 `_gameModelManagers[typeof(T)]`。**没有公开的 getter**，注册后外部拿不到。 |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; private set; }` | 全局对象注册表。**读档后会被重新赋值**。`sealed` 类，`private set`。 |
| `EventManager` | `public EventManager EventManager { get; private set; }` | 全局事件总线。**`Destroy` 末尾被置 `null`**，此后调用抛 NRE。 |
| `GameStateManager` | `public GameStateManager GameStateManager { get; private set; }` | 界面状态栈。**由 `CreateGameManager()` 创建，不由构造器创建**，所以启动早期可能是 null。`Destroy` 里置 null。 |
| `GameManager` | `public GameManagerBase GameManager { get; private set; }` | 沙盒/故事模式的具体管理器。构造器里双向接线：`gameManager.Game = this`。 |
| `GameType` | `public GameType GameType { get; private set; }` | 游戏类型枚举。同样被反向赋值 `GameType.CurrentGame = this`。 |
| `CurrentState` | `public Game.State CurrentState { get; private set; }` | `Running` / `Destroying` / `Destroyed`。判断对象是否还可用。 |
| `DefaultSkills` | `public DefaultSkills DefaultSkills { get; private set; }` | 技能默认值模型表。由 `SetBasicModels` 填充。 |
| `DefaultCharacterAttributes` | `public DefaultCharacterAttributes DefaultCharacterAttributes { get; private set; }` | 角色属性默认值表。 |
| `DefaultBannerEffects` | `public DefaultBannerEffects DefaultBannerEffects { get; private set; }` | 旗标特效默认值表。 |
| `DefaultItemCategories` | `public DefaultItemCategories DefaultItemCategories { get; private set; }` | 物品分类默认值表。 |
| `GetDefaultEquipmentWithName` | `public Equipment GetDefaultEquipmentWithName(string equipmentName)` | 查 `_defaultEquipments` 字典。查不到返回 `null`。 |
| `SetDefaultEquipments` | `public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)` | 整表替换。**外部代码可以调**——这是少数几个公开的写入口之一。 |
| `Initialize` | `public void Initialize()` | 懒建 `_gameEntitySystem`、`GameTextManager`、`_gameModelManagers` 字典，然后 `GameType.OnInitialize()`。**`AddGameHandler` 之前必须跑过这个。** |
| `InitializeDefaultGameObjects` | `public void InitializeDefaultGameObjects()` | 初始化默认游戏对象序列。 |
| `LoadBasicFiles` | `public void LoadBasicFiles()` | 加载基础文件。 |
| `RegisterTypes` | `public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | 静态方法，向对象管理器登记类型。**`CreateGame` 与 `LoadSaveGame` 都调它。** |
| `SetBasicModels` | `public void SetBasicModels(IEnumerable<GameModel> models)` | 把一组 `GameModel` 装配成 `BasicModels` 并注册各 `GameModelsManager`。 |
| `Save` | `public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)` | 存档。内部把 `SaveOutput` 与回调存进 `_currentActiveSaveData`。 |
| `Destroy` | `public void Destroy()` | 按固定顺序拆解，末尾 `Game.Current = null` 并触发 `OnGameCreated`。 |
| `OnStateChanged` | `public void OnStateChanged(GameState oldState)` | `IGameStateManagerOwner` 的实现，转发给 `GameType.OnStateChanged(oldState)`。 |
| `OnStateStackEmpty` | `public void OnStateStackEmpty()` | `IGameStateManagerOwner` 的另一个成员。 |
| `CreateGameManager` | `public void CreateGameManager()` | `new GameStateManager(this, GameStateManagerType.Game)`。**与 `Initialize` 无关**，谁调谁负责。 |
| `OnGameStart` / `OnFinalize` / `DoLoading` / `OnMissionIsStarting` | `public void ...` | 生命周期回调，由引擎其它部分在对应时机调用。 |
| `BannerVisualCreator` | `public IBannerVisualCreator BannerVisualCreator { get; set; }` | **公开可写**的扩展点。`CreateBannerVisual(Banner)` 在它为 null 时返回 `null`。 |
| `MonsterMissionDataCreator` | `public IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` | **公开可写**的扩展点，怪物任务的覆盖入口。 |
| `PlayerTroop` | `public BasicCharacterObject PlayerTroop { get; set; }` | **公开可写**。玩家初始部队。 |
| `CheatMode` / `IsDevelopmentMode` / `IsEditModeOn` | `public bool ...` | 三个开关，供 mod 判断运行语境。 |
| `ApplicationTime` | `public float ApplicationTime` | 应用层时间，引擎各处的 `dt` 来源。 |
| `NextUniqueTroopSeed` | `public int NextUniqueTroopSeed` | 生成唯一部队种子用。 |
| `DefaultMonster` | `public Monster DefaultMonster` | 默认怪物模板。 |
| `State` | `public enum State { Running, Destroying, Destroyed }` | 三个值的生命周期标记。 |
| `AutoGeneratedInstanceCollectObjects` | `protected override void ...` | 存档对象图钩子。 |

## 真实示例

挂一个全局游戏处理器——这是 mod 最常见的用法，形态就是 `Campaign.cs:1884` 那一行：

```csharp
using TaleWorlds.Core;

public class MyLootTicker : GameHandler
{
    public int TickCount { get; private set; }

    public override void OnTick(float realDt, float dt)
    {
        this.TickCount++;
    }

    public override void OnGameEnd()
    {
        MBDebug.Print("ticks=" + this.TickCount);
    }
}

// 注册：内部就是 _gameEntitySystem.AddComponent<T>()，会自动调 OnInitialize。
MyLootTicker ticker = Game.Current.AddGameHandler<MyLootTicker>();

// 取用：查不到返回 null，所以必须判。
MyLootTicker again = Game.Current.GetGameHandler<MyLootTicker>();
if (again != null)
{
    MBDebug.Print("running for " + again.TickCount + " ticks");
}
```

`GameHandler` 基类要求 `new()` 无参构造，`AddGameHandler<T>` 的约束把这一点写死了。注销走 `Game.Current.RemoveGameHandler<MyLootTicker>()`，它会触发 `OnFinalize`（`GameHandler` 的收尾钩子），而**整个游戏结束时 `Destroy` 会统一对所有 handler 调 `OnGameEnd()`**。

订阅全局创建事件，注意销毁时它会再触发一次：

```csharp
using TaleWorlds.Core;

public static class MyBootstrap
{
    public static void Install()
    {
        Game.OnGameCreated += OnGameCreated;
    }

    private static void OnGameCreated()
    {
        // Game.Current 在读档与新建两条路径下都由反序列化保证已赋值，
        // 但 Destroy() 末尾的 `Game.Current = null` 也会触发本回调。
        if (Game.Current == null)
        {
            return;
        }
        if (Game.Current.CurrentState != Game.State.Running)
        {
            return;
        }
        MBDebug.Print("game ready, object manager = "
            + (Game.Current.ObjectManager != null));
    }
}
```

**两行判空/判状态不能省。** `Game.Current` 的 setter 无条件触发事件，`null` 也算一次。

查全局默认值与对象管理器，这是读引擎数据的正规入口：

```csharp
using TaleWorlds.Core;

public static void InspectGlobals()
{
    Game game = Game.Current;

    // 对象管理器：所有 MBObjectBase 按 StringId 查。
    SkillObject athletics = game.ObjectManager.GetObject<SkillObject>(DefaultSkills.Athletics.StringId);

    // 全局默认值表：DefaultSkills 上是 18 个静态 SkillObject 属性。
    SkillObject oneHanded = DefaultSkills.OneHanded;

    // 装备表查不到时返回 null。
    Equipment defaultArmor = game.GetDefaultEquipmentWithName("player_armor");

    MBDebug.Print("athletics=" + (athletics != null)
        + " oneHanded=" + oneHanded.StringId
        + " armor=" + (defaultArmor != null));
}
```

`DefaultSkills` 表面上挂在 `Game.DefaultSkills` 上，但它那 18 个技能（`OneHanded` / `TwoHanded` / `Polearm` / `Bow` / `Crossbow` / `Throwing` / `Riding` / `Athletics` / `Crafting` / `Tactics` / `Scouting` / `Roguery` / `Charm` / `Leadership` / `Trade` / `Steward` / `Medicine` / `Engineering`）都是**静态属性**，直接 `DefaultSkills.Athletics` 就行，不需要经由 `Game.Current`。`ObjectManager` 与 `GetDefaultEquipmentWithName` 才必须走 `Game.Current`。

## 风险与边界

- **`Game.Current` 为 null 就崩。** 它在游戏未启动、读档前、以及 `Destroy` 之后都是 `null`。**任何一行 `Game.Current.Something` 都是裸奔。**
- **`Game.Current = null` 也会触发 `OnGameCreated`。** setter 没有「值变化才触发」的保护。你的回调必须在 `Game.Current == null` 时立即返回，否则会在半拆解的对象图上执行。
- **`Game.Current` 的 setter 是 `internal`。** 你**不能**从 mod 里构造一个 `Game` 或替换 `Game.Current`。只能走 `CreateGame` / `LoadSaveGame`。
- **`GameStateManager` 不由构造器创建。** 它来自 `CreateGameManager()`，所以在它被调用前 `Game.Current.GameStateManager` 是 `null`。
- **`EventManager` 在 `Destroy` 末尾被置 `null`。** 销毁过程中的收尾代码再调事件总线会 NRE。
- **`AddGameHandler` 不判 `_gameEntitySystem` 是否为 null。** 该字段在 `Initialize()` 里懒建。**过早调用抛 NRE**（对比 `Campaign.GetEntityComponent` 做了保护）。
- **`GetGameHandler<T>` 返回 `null` 的概率很高。** 没注册过就 `default(T)`。判空是必须的。
- **`RemoveGameHandler<T>` 只移除最先注册的那一个。** 同类型注册两次，第二次还在。
- **`AddGameModelsManager<T>` 没有公开 getter。** 注册进 `_gameModelManagers` 之后，外部拿不到这个实例。要用模型管理器得靠宿主模块（如 `Campaign`）自己持有。
- **`ObjectManager` 在读档后被重新赋值。** 缓存下来的 `ObjectManager` 引用在读档后失效，重新取。
- **`Game` 是 `sealed`。** 继承不了。
- **`Game.State` 只有三个值。** 「暂停」「加载中」在这个枚举里**不存在**。用 `GameStateManager` 那一侧的状态栈。
- **`CheatMode` / `IsDevelopmentMode` / `IsEditModeOn` 语义不同。** 别当成同一个开关的三个名字。
- **`Save` 的回调是异步的。** `onSaveCompleted` 不在调用栈内执行——不要指望 `Save` 返回时已经写盘。
- **`DefaultMonster` 与 `MonsterMissionDataCreator` 是两条线。** 前者是怪物模板，后者是怪物任务的创建器，跨版本升级时要分别确认。

## 跨版本提示

`Game.cs` 在五个源码树里**public 成员集合几乎不变**，字节数 23317（1.3.0）、23321（1.3.15）、23385（1.4.6 / 1.4.7）、23381（1.5.3），行数 657 / 655 / 656 / 656 / 656。

**唯一的 public 签名变化在 1.5.3，是一个 `int` → `uint` 的破坏性改动**：

- 1.3.0 / 1.3.15 / 1.4.6 / 1.4.7：`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)`
- 1.5.3：`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, uint seed)`

**跨 1.3 与 1.5 编译同一份带种子的启动代码时会直接编译失败**——必须显式转型 `(uint)seed`。这是本批里唯一一个「看起来只是类型微调、实际会断编译」的变更，值得单独记住。

除此之外，`Current` / `OnGameCreated` / 三个 `XxxGameHandler<T>` / `AddGameModelsManager<T>` / `ObjectManager` / `EventManager` / 四个 `Default*` 表 / `State` 枚举在所有版本上形状一致。1.4.6 起的字节数增长（+68）来自私有实现而非公开 API。

结论：**除带种子的 `CreateGame` 之外，`Game` 的公开面在 1.3 → 1.5 间稳定**。mod 里读 `Game.Current` 的那些代码几乎不需要版本适配。

## 依赖关系

- 组件宿主：三个 `XxxGameHandler<T>` 方法转发到 `EntitySystem<GameHandler>`，见 [EntitySystem](../EntitySystem)（同桶兄弟）；`Campaign.cs:1884` 的 `AddGameHandler<SandBoxManager>()` 是全树唯一的官方调用点
- 模型体系：[GameModel](../GameModel) 是被 `SetBasicModels` / `AddGameModelsManager<T>` 装配的对象；[GameModelsManager](../GameModelsManager) 是 `AddGameModelsManager<T>` 的约束类型；[BasicGameModels](../BasicGameModels) 是四个 `Default*` 表与 `BasicModels` 的宿主
- 启动编排：[MBGameManager](../../mission-ext/MBGameManager) 的 `InitializeGameStarter` 与 [MBSubModuleBase](../../core/MBSubModuleBase) 的 `InitializeGameStarter` 负责在 `CreateGame` 之前把模型注册好——顺序是「先填模型，再建 Game」
- 状态栈：[GameStateManager](../GameStateManager) 由 `CreateGameManager()` 创建、由 `Destroy` 置空，是界面状态的实际持有者
- 事件总线：[EventManager](../EventManager) 是全局事件注册中心
- 注册入口：[IGameStarter](../IGameStarter) 声明 `AddModel` 两个重载，[BasicGameStarter](../../mission-ext/BasicGameStarter) 给出「接上 BaseModel」的实现
- 桶首页：[core-extra API 分区](../)