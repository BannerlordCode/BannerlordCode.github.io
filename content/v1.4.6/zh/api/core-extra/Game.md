---
title: "Game"
description: "一次游戏会话的根对象：持有 MBObjectManager、GameStateManager、GameTextManager 与 GameHandler 集合，自身就是存档根类型。"
---
# Game

**Namespace:** `TaleWorlds.Core`
**Module:** `TaleWorlds.Core`
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** `System.Object`
**Source:** `TaleWorlds.Core/Game.cs`

## 概述

`Game` 是「当前这场游戏」的根聚合对象，`sealed` 表示不能继承。它自己实现了 `IGameStateManagerOwner`，是 [GameStateManager](../GameStateManager) 的 owner。构造过程（私有构造器）已经把四件事绑定了：写 `Game.Current` 静态单例、写 `GameType.CurrentGame`、把自己的引用塞给 `GameManager.Game`（这一步会触发 `GameManager.Initialize()`）、并 `InitializeParameters()` 读 `managed_core_parameters.xml`。它是 `[SaveableRootClass(5000)]`，也就是整份存档的根节点——`SaveManager.Save(target, ...)` 传的 `target` 通常就是它。

它同时是三个服务容器的宿主：`ObjectManager`（`MBObjectManager`）、`GameTextManager`（游戏文本）、`GameStateManager`（UI/逻辑状态栈），以及一个 `EntitySystem<GameHandler>` 组件集合，用来挂 Campaign 侧、地图侧的那些 `GameHandler` 子类。

## 心智模型

把它想成「一局游戏的会话对象」，生命周期完全由加载/启动流程包住：

**创建**：`Game.CreateGame(gameType, gameManager)` → `MBObjectManager.Init()` → `Game.RegisterTypes(...)` → `new Game(...)`。重载 `CreateGame(gameType, gameManager, seed)` 额外用 seed 构造 `MBFastRandom`，用于可复现的随机（编辑器/回放）。

**读档**：`Game.LoadSaveGame(loadResult, gameManager)` 是另一条入口，顺序不能打乱——`MBSaveLoad.OnStartGame` → `MBObjectManager.Init()` → 从 `loadResult.Root` 取出反序列化好的 `Game` → `RegisterTypes` → `loadResult.InitializeObjects()` → `MBObjectManager.Instance.ReInitialize()` → `loadResult.AfterInitializeObjects()` → `game.BeginLoading(gameManager)`。**前两步回调跑完之前不要碰 `Game.Current` 的派生状态**。

**运行**：`GameManagerBase.OnTick` → `Game.OnTick(dt)`（internal）。它只在 `GameStateManager.Current == this.GameStateManager` 时才 tick 状态栈和 GameHandler；然后无论条件都跑 `AfterTick` 委托；最后检查上一次异步保存是否完成。**每个 `GameHandler.OnTick` 被 try/catch 包住**，一个 handler 抛异常只会打印日志、不会中断其它 handler——但也意味着你的异常可能被静默。

**销毁**：`Destroy()` 把 `CurrentState` 置 `Destroying`，依次 `GameHandler.OnGameEnd()` → `GameManager.OnGameEnd(this)` → `GameType.OnDestroy()` → `ObjectManager.Destroy()` → `EventManager.Clear()` 并置 null → `GameStateManager.Current = null` → `GameStateManager = null` → `Game.Current = null` → `CurrentState = Destroyed`。销毁后**任何非空访问都是空引用**。

常见误用：拿静态 `Game.Current` 当全局服务定位器（换局就变 null）；在 `OnSubModuleLoad` 里读 `Game.Current`（那时还没有 Game）；在 `Destroy()` 之后注册的 `GameHandler` 不会被 `OnGameEnd` 通知到；把 `ObjectManager` 当全局单例用而不是 `this.ObjectManager`。

## 关键成员

| 成员 | 签名 | 作用 |
| --- | --- | --- |
| `Current` | `public static Game Current { get; internal set; }` | 当前游戏实例的静态读出口。setter 是 `internal`，由 `CreateGame` / `BeginLoading` / `Destroy` 写入；**每次赋值都会触发静态事件 `OnGameCreated`**，包括置 null 时也会触发。跨局切换时务必重新取。 |
| `OnGameCreated` | `public static event Action OnGameCreated` | `Game.Current` 被重新赋值时触发（包括 `Destroy` 里的置 null）。适合挂「每次新局/每次结束都要重置」的清理钩子。 |
| `OnItemDeserializedEvent` | `public event Action<ItemObject> OnItemDeserializedEvent` | 实例事件，由 `ItemObjectDeserialized(itemObject)` 在加载物品对象后逐个抛出。做「按物品类型补自定义字段」的钩子。 |
| `AfterTick` | `public Action<float> AfterTick` | 公开委托字段，**不是事件**。`OnTick` 末尾无条件调用。订阅前先判 null，用完要自己置 null——它不会被 `Destroy()` 清理。 |
| `CurrentState` | `public Game.State CurrentState { get; private set; }` | 三态 `Running` / `Destroying` / `Destroyed`。`Destroy()` 期间是 `Destroying`，用来拒绝在拆除过程中再进新局。 |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; private set; }` | 本局的 `MBObjectManager` 单例，所有 `MBObjectBase` 派生对象的注册/查找都在这上面。注意 `MBObjectManager.Instance` 也指向它。 |
| `GameStateManager` | `public GameStateManager GameStateManager { get; private set; }` | 本局的**私有**状态栈，类型是 `GameStateManager.GameStateManagerType.Game`。必须 `CreateGameManager()` 之后才非 null，`Destroy()` 之后被置 null。全局菜单那种跨局状态在 `Module.GlobalGameStateManager` 上。 |
| `GameManager` | `public GameManagerBase GameManager { get; private set; }` | 本局的 [GameManagerBase](../GameManagerBase)。`CheatMode` / `IsDevelopmentMode` / `ApplicationTime` 等属性都转发给它。 |
| `GameTextManager` | `public GameTextManager GameTextManager { get; private set; }` | 本局的文本管理器。`Initialize()` 时 `new` 并 `LoadGameTexts()`，然后 `GameTexts.Initialize(...)` 建立全局入口。 |
| `GameType` | `[SaveableProperty(3)] public GameType GameType { get; private set; }` | 游戏类型（战役/编辑器等），存档字段 3。同时 `GameType.CurrentGame` 是反向指针。 |
| `PlayerTroop` | `[SaveableProperty(8)] public BasicCharacterObject PlayerTroop { get; set; }` | 玩家部队对应的 `BasicCharacterObject`，存档字段 8。这是 mod 里「玩家自己的兵」最常挂载自定义数据的地方。 |
| `EventManager` | `public EventManager EventManager { get; private set; }` | `TaleWorlds.Library.EventSystem` 的事件总线。`Destroy()` 里被 `Clear()` 并置 null。 |
| `BasicModels` | `public BasicGameModels BasicModels { get; private set; }` | 由 `SetBasicModels(IEnumerable<GameModel>)` 用 `AddGameModelsManager<BasicGameModels>` 创建。 |
| `DefaultMonster` | `public Monster DefaultMonster { get; }` | 懒加载第一个 `Monster` 对象并缓存。返回的是共享实例，**不要就地改**。 |
| `NextUniqueTroopSeed` | `public int NextUniqueTroopSeed { get; }` | 自增种子计数器，字段 `[SaveableField(11)] private int _nextUniqueTroopSeed = 1`。**每次读取就 +1**，所以只能读一次并立刻用；重复读会浪费编号。 |
| `DefaultCharacterAttributes` | `public DefaultCharacterAttributes DefaultCharacterAttributes { get; private set; }` | 默认角色属性集合。`InitializeDefaultGameObjects()` 时创建。 |
| `DefaultSkills` | `public DefaultSkills DefaultSkills { get; private set; }` | 默认技能集合，同上时机创建。 |
| `DefaultBannerEffects` | `public DefaultBannerEffects DefaultBannerEffects { get; private set; }` | 默认旗帜效果集合。 |
| `DefaultItemCategories` | `public DefaultItemCategories DefaultItemCategories { get; private set; }` | 默认物品分类。 |
| `DefaultSiegeEngineTypes` | `public DefaultSiegeEngineTypes DefaultSiegeEngineTypes { get; private set; }` | 默认攻城器械类型。 |
| `CheatMode` | `public bool CheatMode { get; }` | 转发 `GameManager.CheatMode`。`GameManager` 为 null 时会 NRE。 |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; }` | 转发 `GameManager.IsDevelopmentMode`。**发布版本下不要依赖它做功能门控**。 |
| `IsEditModeOn` | `public bool IsEditModeOn { get; }` | 转发 `GameManager.IsEditModeOn`，编辑器专用。 |
| `UnitSpawnPrioritization` | `public UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` | 转发 `GameManager.UnitSpawnPrioritization`，控制单位刷出优先级。 |
| `ApplicationTime` | `public float ApplicationTime { get; }` | 转发 `GameManager.ApplicationTime`，累计应用运行时间（秒）。 |
| `MonsterMissionDataCreator` | `public IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` | 怪物遭遇战数据生成器扩展点，公开可写。 |
| `BannerVisualCreator` | `public IBannerVisualCreator BannerVisualCreator { get; set; }` | 旗帜视觉生成器扩展点，公开可写。为 null 时 `CreateBannerVisual` 返回 null。 |
| `CreateGame` | `public static Game CreateGame(GameType gameType, GameManagerBase gameManager)` | 标准创建入口：`MBObjectManager.Init()` → `Game.RegisterTypes(...)` → 私有构造。返回新的 `Game` 且已写入 `Game.Current`。 |
| `CreateGame` | `public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)` | 同上，但用 `seed` 构造 `MBFastRandom`。需要可复现随机时用这个重载。 |
| `LoadSaveGame` | `public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)` | 读档入口，返回 `loadResult.Root` 里的那个 `Game` 并完成全套后初始化。**不要手工重排这七步**。 |
| `RegisterTypes` | `public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | 向 `objectManager` 注册 16 个核心类型（Monster/SkeletonScale/ItemObject/ItemModifier/…/BannerEffect，id 2–53），前后各插一次 `gameType` 的钩子，末尾调 `gameManager.RegisterSubModuleTypes()`。mod 的类型注册通常挂在那一层。 |
| `Initialize` | `public void Initialize()` | 建 `_gameEntitySystem`（若为 null）、`new GameTextManager()` 并 `LoadGameTexts()`、建 `_gameModelManagers` 字典、跑 `GameTexts.Initialize(...)` 和 `GameType.OnInitialize()`。在 `CreateGameManager()` 之后调用。 |
| `InitializeDefaultGameObjects` | `public void InitializeDefaultGameObjects()` | 一次性 new 出那五个 `Default*` 集合，然后调 `GameManager.InitializeSubModuleGameObjects(Game.Current)`——这是 mod 挂默认对象的标准位置。 |
| `LoadBasicFiles` | `public void LoadBasicFiles()` | 通过 `ObjectManager.LoadXML` 加载 9 个核心 XML：Monsters、SkeletonScales、ItemModifiers、ItemModifierGroups、CraftingPieces、WeaponDescriptions、CraftingTemplates、BodyProperties、SkillSets。第二个参数恒为 `false`。 |
| `CreateGameManager` | `public void CreateGameManager()` | `new GameStateManager(this, GameStateManagerType.Game)` 并赋给 `GameStateManager` 属性。**必须先于任何 `PushState`**。 |
| `AddGameHandler` | `public T AddGameHandler<T>() where T : GameHandler, new()` | 往 `_gameEntitySystem` 加一个 GameHandler 组件，返回实例。`OnTick`/`OnGameEnd`/网络回调都会广播到它。 |
| `GetGameHandler` | `public T GetGameHandler<T>() where T : GameHandler` | 按类型取已注册的 GameHandler。**没有注册就返回 null**，且不会自动创建。 |
| `RemoveGameHandler` | `public void RemoveGameHandler<T>() where T : GameHandler` | 按类型移除 GameHandler。 |
| `AddGameModelsManager` | `public T AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager` | 反射构造一个 `GameModelsManager` 派生类并存进 `_gameModelManagers` 字典。 |
| `SetBasicModels` | `public void SetBasicModels(IEnumerable<GameModel> models)` | `AddGameModelsManager<BasicGameModels>(models)` 的便捷包装，写进 `BasicModels`。 |
| `Save` | `public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)` | 保存入口，包在 `PerformanceTestBlock("Save Process")` 里。先广播 `GameHandler.OnBeforeSave()`，再转 [SaveManager](../../save-system/SaveManager) 的 `Save`；若返回 continuing 就把回调挂到 `_currentActiveSaveData`，由后续 `OnTick` 兑现。 |
| `GetDefaultEquipmentWithName` | `public Equipment GetDefaultEquipmentWithName(string equipmentName)` | 查 `_defaultEquipments`，**返回 `.Clone(false)` 的浅拷贝**。名字不存在时 `Debug.FailedAssert` 并返回 null。 |
| `SetDefaultEquipments` | `public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)` | 只在 `_defaultEquipments` 仍为 null 时赋值——**只生效一次**，重复调用是静默 no-op。 |
| `CreateBannerVisual` | `public IBannerVisual CreateBannerVisual(Banner banner)` | 转发 `BannerVisualCreator.CreateBannerVisual(banner)`；creator 为 null 时返回 null，不会抛。 |
| `OnGameStart` | `public void OnGameStart()` | 广播 `GameHandler.OnGameStart()`。 |
| `DoLoading` | `public bool DoLoading()` | 转发 `GameType.DoLoadingForGameType()`，返回「本帧加载是否完成」。 |
| `OnMissionIsStarting` | `public void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | 任务开始前转发给 `GameType.OnMissionIsStarting`。 |
| `OnStateChanged` | `public void OnStateChanged(GameState oldState)` | `IGameStateManagerOwner` 回调，转发 `GameType.OnStateChanged(oldState)`。 |
| `ItemObjectDeserialized` | `public void ItemObjectDeserialized(ItemObject itemObject)` | 触发 `OnItemDeserializedEvent`。 |
| `Destroy` | `public void Destroy()` | 完整拆局：见上文生命周期。**可重复调用但没意义**，第二次会因为 `GameManager` 已 null 而 NRE。 |
| `OnFinalize` | `public void OnFinalize()` | `CurrentState = Destroying` 后 `GameStateManager.Current.CleanStates(0)`，清空全局状态栈。 |
| `State` | `public enum State { Running, Destroying, Destroyed }` | 嵌套枚举，描述 `CurrentState` 的三阶段。 |

## 怎么用

### 怎么拿到它

`Game` 是「当前这场游戏」的根对象。**它没有公开构造器**——`private Game(...)` 只被两个静态工厂调用。

两个入口，**选哪个决定了后面一整套顺序**：

- `public static Game CreateGame(GameType gameType, GameManagerBase gameManager)`（`Game.cs`）——新开局。内部顺序：`MBObjectManager.Init()` → `Game.RegisterTypes(gameType, objectManager, gameManager)`（`:438`）→ 私有构造 `private Game(GameType gameType, GameManagerBase gameManager, MBObjectManager objectManager)`（`:261`，构造器里写 `Game.Current`、`GameType.CurrentGame`、把自己塞给 `GameManager.Game` 并触发 `GameManager.Initialize()`、最后 `InitializeParameters()`）。
- `public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)`（`Game.cs`）——读档，**七步顺序不可重排**：`MBSaveLoad.OnStartGame` → `MBObjectManager.Init()` → 从 `loadResult.Root` 取出反序列化好的 `Game` → `RegisterTypes`（`:438`）→ `loadResult.InitializeObjects()` → `MBObjectManager.Instance.ReInitialize()` → `loadResult.AfterInitializeObjects()` → `private void BeginLoading(GameManagerBase gameManager)`（`:309`）。

之后你才需要 `public void CreateGameManager()`（`:394`，建本局的 `GameStateManager`）→ `public void Initialize()`（`:424`）→ `public void InitializeDefaultGameObjects()`（`:584`）→ `public void LoadBasicFiles()`（`:595`）。**前两步回调跑完之前不要碰 `Game.Current` 的派生状态。**

日常读取靠 `Game.Current`（`public static Game Current { get; internal set; }`），以及四个子服务：`ObjectManager`（`MBObjectManager`）、`GameStateManager`、`GameTextManager`、`GameManager`（`GameManagerBase`）。

### 典型用法

写一个最小的 [GameManagerBase](../GameManagerBase) 派生类，开一局，取用局内对象：

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MyGameManager : GameManagerBase
{
    public override void OnGameStart(Game game, IGameStarter gameStarter) { }
    public override void BeginGameStart(Game game) { }
    public override void RegisterSubModuleTypes() { }
    public override void RegisterSubModuleObjects(bool isSavedCampaign) { }
    public override float ApplicationTime => 0f;
    public override bool CheatMode => false;
    // ... 其余抽象成员见 GameManagerBase 一页
}

// 建局：返回的实例已写入 Game.Current
Game game = Game.CreateGame(new Campaign(), new MyGameManager());
game.CreateGameManager();          // 之后才能 PushState
game.Initialize();
game.InitializeDefaultGameObjects();
game.LoadBasicFiles();

MBObjectManager om = game.ObjectManager;          // 本局的 MBObjectManager 单例
Monster first = om.GetFirstObject<Monster>();     // 找不到返回 null

// 挂一个 GameHandler（AddGameHandler<T> 在 :406）
Game.Current.AddGameHandler<MyLedgerGameHandler>();
```

### 最容易踩的坑

**在 `MBObjectManager.Init()` 之前、或 `RegisterTypes` 之前就去用 `Game.Current.ObjectManager`。** `ObjectManager` 是由 `MBObjectManager.Init()` 建出来的那一个实例（`Game.CreateGame` 的第一步），而**类型注册必须走在 `Game.RegisterTypes(gameType, objectManager, gameManager)` 之后**——它注册核心 16 个类型（id 2–53），你的 `MBObjectManager.RegisterType<T>` 要排在它后面。抢在前面注册会导致 `RegisterType` 找不到可用的类型槽，你自己的 `MBObjectBase` 派生类永远不会被 `LoadXML` 实例化。

第二个坑是 **`Game.OnTick` 会把 GameHandler 的异常吞掉**。每个 `GameHandler.OnTick` 被 try/catch 包住，异常只 `Debug.Print`。所以你的 handler 崩了不会有任何显眼征兆，只有日志——而模组里「逻辑偶发不生效」的第一排查对象就是它。

第三，`Current` 的 setter 是 **internal**（只在 `CreateGame` / `BeginLoading` / `Destroy` 里写），但每次赋值都会触发静态事件 `OnGameCreated`——**包括 `Destroy()` 把它置 null 的那一次**。所以处理器必须能容忍参数是 null，不能假设「收到 OnGameCreated 就是新局开始」。

## 真实示例

写一个最小的 `MBGameManager` 派生类，然后开一局并取用局内对象：

```csharp
public class MyGameManager : MBGameManager
{
    public override void OnGameStart(Game game, IGameStarter gameStarter) { }
    public override void BeginGameStart(Game game) { }
    public override void OnNewCampaignStart(Game game, object starterObject) { }
    public override void OnAfterCampaignStart(Game game) { }
    public override void RegisterSubModuleObjects(bool isSavedCampaign) { }
    public override void AfterRegisterSubModuleObjects(bool isSavedCampaign) { }
    public override void OnGameInitializationFinished(Game game) { }
    public override void OnNewGameCreated(Game game, object initializerObject) { }
    public override void OnGameLoaded(Game game, object initializerObject) { }
    public override void OnAfterGameLoaded(Game game) { }
    public override void OnAfterGameInitializationFinished(Game game, object initializerObject) { }
    public override void RegisterSubModuleTypes() { }
    public override float ApplicationTime => 0f;
    public override bool CheatMode => false;
    public override bool IsDevelopmentMode => false;
    public override bool IsEditModeOn => false;
    public override UnitSpawnPrioritizations UnitSpawnPrioritization => UnitSpawnPrioritizations.Default;
}

// CreateGame 之后 Game.Current 已经指向返回的实例
Game game = Game.CreateGame(new Campaign(), new MyGameManager());
game.CreateGameManager();
game.Initialize();
game.InitializeDefaultGameObjects();
game.LoadBasicFiles();

MBObjectManager objectManager = game.ObjectManager;
Monster firstMonster = objectManager.GetFirstObject<Monster>();
```

挂一个自己的 GameHandler，之后按类型取回：

```csharp
public class MyLedgerGameHandler : GameHandler
{
    public override void OnTick(float dt) { }

    public override void OnGameStart()
    {
        Debug.Print("ledger ready", 0);
    }
}

Game.Current.AddGameHandler<MyLedgerGameHandler>();
MyLedgerGameHandler handler = Game.Current.GetGameHandler<MyLedgerGameHandler>();
if (handler != null)
{
    handler.OnGameStart();
}
```

带回调的保存（异步驱动由 `Game` 内部在后续 tick 兑现）：

```csharp
Game.Current.Save(campaignMetaData, "slot_1", saveDriver, (SaveResult result) =>
{
    Debug.Print("save finished: " + result, 0);
});
```

## 风险与边界

- **静态 `Current` 会变 null。** `Destroy()` 把它置 null。任何缓存了 `Game.Current` 的字段在换局后就是悬空引用；每次用都重新取，或订阅 `OnGameCreated` 刷新缓存。
- **`OnGameCreated` 在置 null 时也触发。** 处理器必须能容忍参数为「旧值已消失」，不能假设一定是新局开始。
- **销毁后访问即崩。** `Destroy()` 把 `EventManager`、`GameStateManager` 都置 null。`OnGameEnd` 之外的代码再访问就是 NRE。
- **读档顺序不可重排。** `LoadSaveGame` 里 `loadResult.InitializeObjects()` 之前 `MBObjectManager` 还没 `ReInitialize`，此时的 `MBObjectManager.Instance` 查不到读档恢复的对象。`[LoadInitializationCallback]`（含 `Game.OnLoad` 重建 `RandomGenerator`）就在 `InitializeObjects()` 里跑。
- **`NextUniqueTroopSeed` 是有副作用的读取。** 每次 get 自增 1，别在条件判断里多次读取同一个种子。
- **`AfterTick` 是裸委托字段。** 不会被自动清空，反复订阅会累积；`Destroy()` 也不管它。
- **GameHandler 的异常被吞。** `OnTick` 逐个 try/catch 并只 `Debug.Print`。你的 handler 崩了不会有明显征兆，只有日志。
- **`SetDefaultEquipments` 只生效一次。** 先让别人填上去了，你的 mod 就再也设不了。
- **`IsDevelopmentMode` / `CheatMode` 不能当发布门控。** 它们由 `GameManager` 提供，在正式发行版里的取值和开发环境不同。
- **`GetDefaultEquipmentWithName` 返回浅拷贝。** `Clone(false)` 不做深拷贝；想在装备上加自定义项必须自己重新 new 一份。

## 跨版本提示

`bannerlord-1.3.15/` 与 `bannerlord-1.4.6/` 的 `TaleWorlds.Core/Game.cs` 逐行比对，**public 表面完全一致**：两个事件、`AfterTick` 字段、两个 `CreateGame` 重载、`LoadSaveGame`、`RegisterTypes`、两个 `AddGameHandler` 相关方法、`Save`、`Destroy` 的签名都没变。

**1.4.5 侧结论**：打开 `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`（453 行）与 `bannerlord-1.4.6/TaleWorlds.Core/Game.cs`（656 行）逐成员比对 public/protected 表面。**三版 public/protected 表面完全一致（各 53 个成员，0 新增 / 0 移除 / 0 签名变化 / 0 可访问性变化）**。1.4.5 是 453 行、1.4.6 是 656 行，差的是反编译注释。

**为什么这份源码之前被判为「不存在」**：`bannerlord-1.4.5/` 的 C# 源码在 `Bannerlord.Source/bin/` 下**双层嵌套** `bin/<Assembly>/<Assembly>/<Type>.cs`，而 `bin/` 的一层里没有任何 `.cs`（实测 `find bannerlord-1.4.5/Bannerlord.Source/bin -maxdepth 1 -name "*.cs"` 命中 0），只扫一层就会误判成无源码。**1.4.5 是原始源码形态**（file-scoped namespace、无 `// Token:` 注释），1.4.6 与 1.3.15 是反编译产物，所以两边的行数不可直接比大小。

## 依赖关系

- 状态栈：[GameStateManager](../GameStateManager) 由 `CreateGameManager()` 创建，是 `IGameStateManagerOwner` 的被通知方
- 管理器基类：[GameManagerBase](../GameManagerBase) 持有本局并提供组件系统
- 存档根：[SaveManager](../../save-system/SaveManager) 的 `Save`/`Load` 读写本对象
- 模块宿主：[Module](../../core/Module) 反射回调所有 `MBSubModuleBase`，最终落到 `Game`
- 文本：[TextObject](../../localization/TextObject) 挂在物品、角色等 `MBObjectBase` 上并参与序列化
- 全局栈宿主：[Module](../../core/Module) 构造时创建 `GameType.Global` 那一档
- 架构地图：[模块地图](../../../architecture/module-map)

- 上一级：[v1.4.6 内容根](../../../)

## 导航

- 同桶：[`../GameManagerBase`](../GameManagerBase) · [`../GameStateManager`](../GameStateManager) · [`../DefaultSkills`](../DefaultSkills)
- 父索引：[`../_index`](../_index)
