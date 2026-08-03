---
title: "Game"
description: "Bannerlord 运行期游戏会话的单一根对象：持有 GameType（游戏模式）、MBObjectManager（对象注册表）、GameStateManager（状态机）、GameModels（规则模型）与 EventManager（事件总线），并提供 Game.Current 静态访问点和存档入口。本文手写自 TaleWorlds.Core/Game.cs 及其真实调用点。"
---

# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner`（`[SaveableRootClass(5000)]`）
**Base:** `IGameStateManagerOwner`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`

## 职责

`Game` 是一整局游戏会话（从创建到销毁）的**根容器**：它把“当前玩的是什么模式、世界里注册了哪些对象、处在哪个界面状态、有哪些规则模型、事件总线在哪”全部绑在同一个对象上，并通过一个进程级静态字段 `Game.Current` 暴露给所有运行期代码。

## 心智模型

`Game` 不是“战役（Campaign）”本身——战役只是 `GameType` 的一个子类，被装进 `Game.GameType`。它也不是 Mission；Mission 是挂在 `GameStateManager` 某个 `GameState` 之下的战斗实例，通过 `Game.Current.GameStateManager` 进入。

- **创建者 / 持有者**：由 `MBGameManager`（单人模式下的具体派生类）调用 `Game.CreateGame(GameType, GameManagerBase)` 或 `Game.LoadSaveGame(LoadResult, GameManagerBase)` 创建。构造函数里会把静态 `Game.Current` 设为自身，并触发静态事件 `OnGameCreated`。所以整个进程在同一时刻只有一个 `Game`。
- **所在层**：运行期核心层（`TaleWorlds.Core`）。它位于 SubModule 生命周期之下、Campaign/Mission 之上——是所有 `MBSubModuleBase` 钩子（如 `OnGameStart(Game game)`）被传入的那个 `game`。
- **生命周期**：`CreateGame`/`LoadSaveGame` 创建 → `Initialize()` 加载游戏文本并初始化模型 → `GameType` 跑完四步加载状态机（`DoLoading()`）→ 运行（`OnTick` 驱动所有 `GameHandler` 与 `AfterTick`）→ `Destroy()` 把 `Current` 置空、`EventManager` 置空、`ObjectManager` 销毁。
- **何时用**：在**已建立的游戏会话**里读取全局状态（`GameType`、`PlayerTroop`、`ObjectManager`、`EventManager`、各 `GameModels`）或订阅/发布事件；或把需要贯穿整局的游戏级逻辑写成 `GameHandler`（Behavior），用 `AddGameHandler<T>()` 挂到 `Game` 上。
- **何时不用**：不要在 SubModule 构造函数、模块静态初始化、或 `Destroy()` 之后访问 `Game.Current`（那时为 `null`，直接调用会 `NullReferenceException`）。某次战斗的上下文请用 `Mission.Current`，某次战役的状态请用 `Campaign.Current`，不要把 `Game` 当成万能袋去塞局部状态。

## 依赖关系

> 仅链接到本周期已存在或已规划的页面；其余依赖以类型名标注，避免悬空链接。

- **上游（谁创建 / 注入它）**
  - `MBSubModuleBase`（模块生命周期钩子：`OnGameStart`、`OnGameLoaded`、`InitializeSubModuleGameObjects` 等，都会被传入这个 `Game`）→ [MBSubModuleBase.md](.././MBSubModuleBase)
  - `MBGameManager`（单人会话入口，内部调用 `Game.CreateGame` / `Game.LoadSaveGame`）→ [MBSubModuleBase.md](.././MBSubModuleBase)
  - `MBObjectManager`（对象注册表，由 `Game` 持有并负责 `RegisterTypes` / `LoadXML`）→ [MBObjectBase.md](.././MBObjectBase)
- **下游（它持有 / 驱动什么）**
  - `Campaign`（`GameType` 在单人战役模式下的具体子类，`Game.GameType as Campaign`）→ [../campaign/Campaign.md](../../campaign/Campaign)
  - `Mission`（通过 `GameStateManager` 进入，`Game.Current.GameStateManager.ActiveState is MissionState`）→ [../mission/Mission.md](../../mission/Mission)
  - `GameStateManager`（`CreateGameManager()` 创建，管理 `GameState` 栈）
  - `GameHandler` / Behavior（`AddGameHandler<T>()` 挂上的游戏级逻辑，随 `OnTick` 被驱动）
- **Events（事件）**
  - 静态 `OnGameCreated`：本 `Game` 被设为 `Current` 时触发（订阅者此时可安全读 `Game.Current`）。
  - 实例 `AfterTick`：`OnTick` 末尾以 `dt` 调用，适合做“每帧尾巴”的轻量逻辑。
  - 实例 `OnItemDeserializedEvent`：物品反序列化时触发（用于修正/补全 `ItemObject`）。
  - `EventManager`（`Game.Current.EventManager`，`TaleWorlds.Library.EventSystem`）：`RegisterEvent<T>` / `TriggerEvent` / `UnregisterEvent<T>` / `Clear`。
- **Actions / Models（规则模型）**
  - `BasicModels`（`BasicGameModels`，由 `SetBasicModels` 注入；战役模式另用 `AddGameModelsManager<GameModels>`）。
  - `DefaultMonster`、`DefaultSkills`、`DefaultCharacterAttributes`、`DefaultItemCategories`、`DefaultBannerEffects`、`DefaultSiegeEngineTypes`：都通过 `Game.Current` 拿到，背后走 `ObjectManager`。
- **Save points（存档点）**
  - `Save(MetaData, string, ISaveDriver, Action<SaveResult>)`：存档入口，内部对每个 `GameHandler` 调 `OnBeforeSave`/`OnAfterSave`，再交给 `SaveManager`。是否允许存档取决于 `GameType.SupportsSaving`。
  - 崩溃与存档边界细则见 [crash-boundary](../../../architecture/crash-boundary)。

## 风险（Risks）

- **在会话外访问 `Game.Current` 直接崩**：`Game.Current` 的 getter 在无会话时为 `null`。在 SubModule 构造、模块加载期、或 `Destroy()` 之后读取 `Game.Current.ObjectManager` 等会得到 `NullReferenceException`。需防御时写 `Game.Current?.EventManager`，而不是裸访问。
- **`Destroy()` 之后再用即为 `null`**：`Destroy()` 会把 `Current = null` 且 `EventManager = null`，并 `ObjectManager.Destroy()`。任何在游戏结束后仍持有 `Game` 引用并访问其成员的代码都会崩或读到已销毁对象。
- **在 `OnBeforeSave`/`OnAfterSave` 或 `OnTick` 中改动可存档状态会污染存档**：`Save()` 期间 `GameHandler` 会收到 `OnBeforeSave`/`OnAfterSave` 回调，此时若在同一帧继续写 `[SaveableField]`/`[SaveableProperty]` 状态，可能让存档与实际运行错位或触发 `Debug.FailedAssert`。存档相关写入应在明确的游戏逻辑点、而非保存回调里完成。
- **`GameType.SupportsSaving` 为 `false` 时存档会失败**：`GameType` 基类默认 `SupportsSaving => false`。非战役/非可存档模式调用 `Save` 不会得到有效存档。
- **`GetDefaultEquipmentWithName` 找不到名称时 `Debug.FailedAssert` 并返回 `null`**：调用方必须判空，否则后续对返回值的解引用会崩。
- **`SetDefaultEquipments` 只在首次（`_defaultEquipments == null`）生效**：第二次调用被静默忽略，不会覆盖。若需要替换默认装备需在 `InitializeDefaultGameObjects` 之前完成。
- **`NextUniqueTroopSeed` 每次访问自增**：`public int NextUniqueTroopSeed => _nextUniqueTroopSeed++`——哪怕只是读取也会消耗种子。用种子做确定性随机时，不要在无关地方反复读取它。
- **`DoLoading()` 必须走完四步状态机**：`GameType.DoLoadingForGameType()` 内部是一个四步 `_stepNo` 状态机（`InitializeFirstStep → WaitSecondStep → LoadVisualsThirdState → PostInitializeFourthState`），中途打断会导致对象/视觉未完成初始化就被使用。

## 成员笔记（按用途分组，非签名墙）

### 访问与状态读取

- **`Current`（static）** — 进程级当前 `Game`。**作用**：运行期任何代码拿会话根对象。**副作用**：setter 为 `internal`，在 `CreateGame`/`LoadSaveGame`/`BeginLoading` 时自动赋值并触发 `OnGameCreated`。**何时调用**：在已确认有会话的上下文里读取（钩子参数、事件回调、`Mission`/`Campaign` 内部）；会话外访问为 `null`。
- **`GameType`** — 当前游戏模式（`Campaign` 等 `GameType` 子类）。**作用**：区分“现在玩的是战役还是其他模式”，并访问模式级 API（如 `Game.Current.GameType as Campaign`）。`[SaveableProperty(3)]`，随存档持久化。
- **`CurrentState`** — `Running` / `Destroying` / `Destroyed`。**何时调用**：在 `Destroy`/退出流程中判断阶段，避免在 `Destroyed` 后做操作。
- **`PlayerTroop`** — `[SaveableProperty(8)]` 玩家角色（`BasicCharacterObject`）。`BasicCharacterObject.IsPlayerCharacter => Game.Current.PlayerTroop == this` 即依赖它。**何时调用**：判断“这个角色是不是玩家”。

### 子系统句柄

- **`ObjectManager`** — `MBObjectManager`，对象注册表。`RegisterTypes` 在 `CreateGame` 时已登记 `Monster`/`ItemObject`/`SkillObject` 等类型；后续 `LoadBasicFiles`/`LoadXML` 加载数据。**何时调用**：反查/注册游戏对象（如 `Game.Current.ObjectManager.GetObject<ItemModifier>(id)`）。
- **`EventManager`** — 事件总线（见 Events）。**何时调用**：`RegisterEvent<T>`/`TriggerEvent` 订阅与发布；退出或卸载时必须 `UnregisterEvent<T>` 以免悬空回调。
- **`GameStateManager`** — 由 `CreateGameManager()` 创建，管理 `GameState` 栈（含 `MissionState`）。`EndGame` 之类退出逻辑通过 `GameStateManager.PopState()`/`CleanStates()` 收尾。
- **`BasicModels`** — 基础规则模型集合（`SetBasicModels` 注入）。战役模式额外有 `GameModels`（`AddGameModelsManager<GameModels>`）。
- **`GameManager`** — 持有会话的 `GameManagerBase`（单人即 `MBGameManager`）；`CheatMode`/`IsDevelopmentMode`/`ApplicationTime` 等都转给它。

### 生命周期与创建

- **`CreateGame(GameType, GameManagerBase)` / `CreateGame(GameType, GameManagerBase, int seed)`** — 静态工厂，创建新会话并 `MBObjectManager.Init()` + `RegisterTypes`。带 `seed` 的重载会用 `new MBFastRandom((uint)seed)` 设定 `RandomGenerator`，用于可复现随机。**何时调用**：几乎总是间接通过 `MBGameManager.StartNewGame`；模组一般不直接调用。
- **`LoadSaveGame(LoadResult, GameManagerBase)`** — 从 `LoadResult.Root` 反序列化出 `Game`，重新 `RegisterTypes` 并 `ReInitialize` 对象管理器。**何时调用**：读档路径，由读档流程调用；读档后 `Game.Current` 才有值。
- **`Initialize()`** — 创建 `GameTextManager` 并 `LoadGameTexts`，初始化 `_gameModelManagers`，调 `GameType.OnInitialize()`。**何时调用**：`CreateGame` 之后、进入正式加载前。
- **`InitializeDefaultGameObjects()`** — 创建 `DefaultSkills`/`DefaultCharacterAttributes` 等默认对象集合，并回调各 SubModule 的 `InitializeSubModuleGameObjects`。**何时调用**：在默认对象就绪后、SubModule 注入自定义对象前。
- **`LoadBasicFiles()`** — 用 `ObjectManager.LoadXML` 加载 `Monsters`/`CraftingPieces`/`BodyProperties` 等基础 XML。**何时调用**：对象表初始化阶段。
- **`CreateGameManager()`** — `new GameStateManager(this, GameStateManagerType.Game)`。**何时调用**：进入 `GameLoadingState` 流程中由 `GameType` 调用。
- **`OnGameStart()`** — 对每个 `GameHandler` 调 `OnGameStart()`。**何时调用**：加载完成后、正式开局。
- **`Destroy()`** — 置 `CurrentState = Destroying`，逐个 `GameHandler.OnGameEnd`、`GameManager.OnGameEnd`、`GameType.OnDestroy`、`ObjectManager.Destroy`、`EventManager.Clear`，最后 `Current = null`、`CurrentState = Destroyed`。**何时调用**：状态栈空（`IGameStateManagerOwner.OnStateStackEmpty`）或退出游戏时；调用后不要再持有引用。

### 每帧与行为（Behavior）

- **`OnTick(float dt)`**（internal）— 在 `GameStateManager.Current == this` 时驱动 `GameStateManager.OnTick` 与所有 `GameHandler.OnTick(dt)`，末尾调用 `AfterTick?.Invoke(dt)`，并结算挂起的异步存档。**何时调用**：引擎每帧调用；模组逻辑应通过 `GameHandler` 的 `OnTick` 而非直接挂 `AfterTick` 来参与每帧。
- **`AddGameHandler<T>()` / `GetGameHandler<T>()` / `RemoveGameHandler<T>()`** — 增删查 `GameHandler`（游戏级 Behavior，挂在 `EntitySystem<GameHandler>` 上）。**何时调用**：需要贯穿整局、随 `OnTick` 运行的游戏逻辑时；注意 `Destroy` 会逐个 `OnGameEnd`。

### 事件

- **`OnGameCreated`（static event）** — `Game.Current` 被设定时触发一次。**何时调用**：想“会话一就绪就执行”的引导逻辑可订阅；订阅/退订要配对，避免泄漏。
- **`AfterTick`（event `Action<float>`）** — 每帧末尾。`dt` 为帧间隔。**何时调用**：轻量的每帧尾巴逻辑；注意它不区分状态，避免在错误状态下执行。
- **`OnItemDeserializedEvent`（event `Action<ItemObject>`）** — 物品反序列化后。**何时调用**：需要按物品补全数据时订阅，记得退订。

### 存档

- **`Save(MetaData, string, ISaveDriver, Action<SaveResult>)`** — 带性能埋点的存档入口。内部 `SaveAux` 先对每个 `GameHandler` 调 `OnBeforeSave`，再 `SaveManager.Save`，完成/恢复时 `OnAfterSave` 并回调 `onSaveCompleted`。**何时调用**：需要主动存档时（如战役 QuickSave 内部最终走 `Game.Current.Save`）；传入的 `onSaveCompleted` 在存档真正结束时触发，不要在回调里再写可读档状态。

## 真实示例（Real Example）

下面两段都是真实可走的获取路径，API 名称取自 `TaleWorlds.Core/Game.cs` 与 `MBGameManager`。

### 路径 A：通过 SubModule 钩子拿到 `Game`

`MBSubModuleBase` 的 `OnGameStart(Game game)` 直接把根对象传进来，这是最稳妥的获取方式（此时一定有会话）：

```csharp
// 在自定义 SubModule 中
protected override void OnGameStart(Game game)
{
    base.OnGameStart(game);

    // 读取当前游戏模式；单人战役下 GameType 就是 Campaign
    if (game.GameType is Campaign campaign)
    {
        // 访问玩家角色（SaveableProperty(8)）
        BasicCharacterObject player = game.PlayerTroop;
        // 通过对象注册表反查物品
        ItemModifier mod = game.ObjectManager.GetObject<ItemModifier>("hardened");
        // 订阅物品反序列化事件（记得在合适的销毁点退订）
        game.OnItemDeserializedEvent += OnItemLoaded;
    }
}

private void OnItemLoaded(ItemObject item)
{
    // item 刚从存档/XML 反序列化完成，可在此补全数据
}
```

### 路径 B：在运行期任意位置用 `Game.Current`

战役中读取模式与订阅事件总线（注意 `?.` 防御会话外为 null 的情况）：

```csharp
// 在 ViewModel / Behavior / 工具方法中
public void PublishCraftingEvent()
{
    // Game.Current 在会话内一定非空；会话外用 ?. 避免 NRE
    Game.Current?.EventManager.TriggerEvent(new CraftingWeaponResultPopupToggledEvent(isOpen: true));
}

public void SubscribeOnce()
{
    // 会话一就绪即执行（OnGameCreated 只在本 Game 被设为 Current 时触发）
    Game.OnGameCreated += () =>
    {
        var game = Game.Current;
        // 区分游戏模式
        bool isCampaign = game.GameType is Campaign;
        // 读取玩家角色
        bool isMainHero = game.PlayerTroop != null;
    };
}
```

> 注意：示例中的 `Campaign`、`ItemObject`、`ItemModifier`、`CraftingWeaponResultPopupToggledEvent` 均为真实类型；`EventManager.TriggerEvent`/`RegisterEvent<T>` 签名来自 `TaleWorlds.Library.EventSystem`。不要凭空替换成占位符。

## 参见（See Also）

- 上游入口：[模块索引](./) · [MBSubModuleBase（生命周期钩子）](.././MBSubModuleBase) · [MBObjectBase（对象注册表）](.././MBObjectBase)
- 下游 / 相关：[Campaign（GameType 子类）](../../campaign/Campaign) · [Mission（战斗实例）](../../mission/Mission)
- 规范与边界：[Doc Contract](../../../architecture/doc-contract) · [Crash Boundary](../../../architecture/crash-boundary)

## 导航（Navigation）

- ↑ Parent: [模块索引](./)（`content/v1.4.5/zh/api/core/_index.md`）
- ↔ Sibling: [MBSubModuleBase.md](.././MBSubModuleBase) · [MBObjectBase.md](.././MBObjectBase)
- Related: [Doc Contract](../../../architecture/doc-contract) · [Crash Boundary](../../../architecture/crash-boundary) · [Campaign](../../campaign/Campaign) · [Mission](../../mission/Mission)
