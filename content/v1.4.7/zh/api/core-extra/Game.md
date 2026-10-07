---
title: "Game"
description: "游戏实例与全局门面：持有当前 GameType（战役 / 沙盒 / 编辑器）、GameManager、GameStateManager、ObjectManager 与存档入口。mod 读跨模式状态的起点，也是创建 / 销毁游戏的唯一途径。"
---
# Game

**命名空间：** `TaleWorlds.Core`
**模块：** `TaleWorlds.Core`
**类型：** `public sealed class Game : IGameStateManagerOwner`
**基类：** 无，实现 `IGameStateManagerOwner`
**源文件：** `bannerlord-1.4.7/TaleWorlds.Core/Game.cs`（声明见第 15 行）

## 概述

`Game` 是整个游戏的运行时门面，也是四层架构的最外层。它把四件事绑在一起：**游戏类型**（`GameType` —— 战役 / 沙盒 / 编辑器，由 `Game.GameType` 表示，战役时就是 `Campaign` 本身）、**游戏管理器**（`GameManagerBase`，具体是 `SandBoxGameManager` 之类）、**游戏状态机**（`GameStateManager`，负责在「主菜单 → 战役 → 任务 → 战斗结果」之间切换）、以及**对象系统与文本**（`ObjectManager`、`GameTextManager`、`EventManager`）。

它是 `sealed` 的。实例只能通过两个静态工厂创建：`CreateGame(gameType, gameManager, seed)` 建新游戏，或 `LoadSaveGame(loadResult, gameManager)` 从存档恢复。销毁只有一个途径：`Destroy()`。全局访问用静态 `Game.Current`——它同样只在游戏运行期间存在，主菜单之外的一些编辑器 / 模块场景里是 null。

它还负责存档：`Save(metaData, saveName, driver, onSaveCompleted)` 把整个游戏状态写盘，读档则由 `LoadSaveGame` 配合 [SaveManager](../../save-system/SaveManager) 完成。

## 心智模型

把 `Game` 想成**「模式无关的全局服务集合 + 游戏状态机」**。mod 的第一个判断应该是「我现在在哪个模式」：`Game.Current?.GameType` 决定了你能不能碰 `Campaign.Current`。

正确的使用顺序：

1. **先判 `Game.Current != null`，再判模式。** 主菜单、模块加载、编辑器预览里 `Game.Current` 都可能为 null。
2. **再判 `Game.Current.GameType is Campaign`。** 在战斗 / 任务内部，`GameType` 仍然是 `Campaign`——任务不是独立模式。
3. **跨模式状态从 `Game` 拿，游戏世界状态从 `GameType`（即 `Campaign`）拿。** 这条边界是 1.4.x 架构里最值得记住的分工。
4. **销毁前解引用。** `Destroy()` 之后 `Game.Current` 失效、其子对象全部失效。任何订阅了 `Game.Current` 静态事件的地方都要在 `OnGameEnd` / `OnSubModuleUnloaded` 里解除。
5. **`GameHandler` 是官方扩展点。** `AddGameHandler<T>()` / `GetGameHandler<T>()` / `RemoveGameHandler<T>()` 管理 `GameHandler` 实例，它们会在游戏生命周期的各个钩子被调用——这是「不修改本体就能插入流程」的正式渠道。

## 何时使用 / 何时不要使用

- **使用**：获取跨模式服务（`Game.Current.ObjectManager`、`GameTextManager`、`EventManager`、`GameStateManager`）。
- **使用**：判断当前模式与阶段（`Game.Current.State`、`CurrentState`）。
- **使用**：存档（`Save`）。
- **使用**：安装 `GameHandler` 扩展点。
- **使用**：取默认数据容器（`DefaultSkills`、`DefaultCharacterAttributes`、`DefaultItemCategories`、`DefaultBannerEffects`）。
- **不要**：在主菜单 / 模块加载阶段访问 `Game.Current`。
- **不要**：把 `Game.Current` 缓存到静态字段——它在 `Destroy()` 后失效。
- **不要**：为了「造一个游戏」而调 `CreateGame`。它会与引擎的状态机冲突，仅在编写引擎级工具时使用。

## 成员说明

### 一、实例状态与全局入口

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `public static event Action OnGameCreated` | 游戏实例创建完成时广播。**在游戏存在期订阅，游戏销毁后必须解除**，否则事件源已死。 |
| `public event Action<ItemObject> OnItemDeserializedEvent` | 单个物品定义反序列化完成（调试数据加载用）。 |
| `Game.State CurrentState { get; private set; }` | 实例状态：`Running` / `Destroying` / `Destroyed`。**`Destroying` 与 `Destroyed` 期间访问子对象会失败**。 |
| `public enum State` | 上述枚举：`Running`、`Destroying`、`Destroyed`。 |
| `GameType GameType { get; private set; }` | 当前游戏类型。战役模式下即 `Campaign` 实例。**模式判定的唯一权威来源**。 |
| `GameManagerBase GameManager { get; private set; }` | 游戏管理器（沙盒 / 自定义实现）。 |
| `GameStateManager GameStateManager { get; private set; }` | 游戏状态机。切换模式与弹出界面走它。 |
| `GameTextManager GameTextManager { get; private set; }` | 文本 / 本地化管理。与 [Module](../../core/Module) 的 `GlobalTextManager` 不同：后者在模块期就存在。 |
| `MBObjectManager ObjectManager { get; private set; }` | MBObject 注册表（所有 XML 静态数据的容器）。 |
| `EventManager EventManager { get; private set; }` | 通用事件管理器（引擎层事件，非战役事件）。 |
| `BasicGameModels BasicModels { get; private set; }` | 基础模型集合。 |
| `DefaultSiegeEngineTypes DefaultSiegeEngineTypes { get; private set; }` | 攻城武器的默认类型定义。 |
| `Action<float> AfterTick` | 每帧结束后的回调列表。**静态持有委托，忘记解除会泄漏**。 |
| `BasicCharacterObject PlayerTroop { get; set; }` | 玩家使用的兵种模板。 |
| `DefaultCharacterAttributes DefaultCharacterAttributes` / `DefaultSkills DefaultSkills` / `DefaultBannerEffects DefaultBannerEffects` / `DefaultItemCategories DefaultItemCategories`（均只读） | 默认数值容器：属性、技能、旗帜效果、物品分类。查定义用它们，不要硬编码。 |
| `IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` | 野兽 / 怪物任务数据生成器。 |
| `IBannerVisualCreator BannerVisualCreator { get; set; }` | 旗帜视觉创建器（可替换）。 |
| `Equipment GetDefaultEquipmentWithName(string equipmentName)` | 按定义名取默认装备。角色创建 / 换装时用。 |
| `void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)` | 批量设置默认装备。**在游戏创建早期调用**，之后改动会影响已存在的角色。 |

### 二、创建与销毁

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)` | 用指定种子创建游戏实例。**mod 极少需要**。 |
| `static Game CreateGame(GameType gameType, GameManagerBase gameManager)` | 同上，随机种子。 |
| `static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)` | 从已读出的存档数据恢复游戏实例。 |
| `void Destroy()` | 销毁游戏实例与其全部子对象。**之后 `Game.Current` 失效**。 |
| `void CreateGameManager()` | 创建 `GameManager`。 |
| `void Initialize()` | 初始化游戏内部状态。 |
| `void InitializeDefaultGameObjects()` | 创建默认游戏对象。 |
| `void LoadBasicFiles()` | 加载基础文件。 |
| `static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | 注册类型的总入口，`GameType` 与 `MBObjectManager` 之间的桥。 |
| `override void OnDestroy()` | 销毁钩子，子类覆写时**必须调 `base`**。 |

### 三、加载流程钩子

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `bool DoLoading()` | 执行实际加载流程。返回是否加载成功。 |
| `override void OnStateChanged(GameState oldState)` | 游戏状态切换时调用（`GameStateManager` 驱动）。 |
| `void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | 任务即将开始。 |
| `void OnGameStart()` | 游戏启动。 |
| `void OnFinalize()` | 游戏收尾。 |
| `void OnItemDeserialized(ItemObject itemObject)` → `ItemObjectDeserialized(ItemObject itemObject)` | 单个物品定义反序列化完成。 |
| `void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)` | **存档入口**。回调在保存完成后触发，可能是异步。 |
| `void OnGameLoaded(Game game, object initializerObject)`（由 SubModule 回调转发） | 读档完成。 |

### 四、模型注册与 GameHandler 扩展点

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `T AddGameModelsManager<T>(IEnumerable<GameModel> inputComponents) where T : GameModelsManager` | 注册一组模型组成的管理器。 |
| `void SetBasicModels(IEnumerable<GameModel> models)` | 设置基础模型集合。 |
| `T AddGameHandler<T>() where T : GameHandler, new()` | **安装一个扩展点**。`GameHandler` 会在生命周期钩子里被调用。 |
| `T GetGameHandler<T>() where T : GameHandler` | 取回已安装的 `GameHandler`；未安装返回 `null`。 |
| `void RemoveGameHandler<T>() where T : GameHandler` | 移除 `GameHandler`。**用完必须移除**，否则会随游戏一起泄漏。 |
| `IBannerVisual CreateBannerVisual(Banner banner)` | 为旗帜创建视觉对象。 |
| `void OnGameStart()` / `void OnFinalize()` | 启动 / 收尾钩子。 |

### 五、构造与基础设施

| 成员 | 用途、副作用与时机 |
| --- | --- |
| `Game(GameType gameType, GameManagerBase gameManager)` | 构造函数。仅工厂内部使用——mod 直接 new 会与引擎状态机冲突。 |
| `static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | 类型注册的总入口，把 `GameType` 与 [MBObjectManager](../../campaign-ext/MBObjectManager) 连接起来。由工厂调用，mod 一般不碰。 |

## 示例

### 示例 1：模式判定与跨模式服务访问

三段式判定：`Game.Current` 非空 → 类型正确 → 世界对象非空。

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

Game game = Game.Current;
if (game == null) return;

// 模式判定：战役 / 沙盒都是 Campaign 派生
if (game.GameType is Campaign campaign)
{
    MobileParty party = campaign.MainParty;
    if (party != null)
    {
        // 跨模式服务与游戏世界状态在这里汇合
        GameTextManager text = game.GameTextManager;
    }
}
```

### 示例 2：安装并移除 GameHandler 扩展点

`GameHandler` 是官方的「不改本体插入流程」渠道。

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

protected override void OnGameInitializationFinished(Game game)
{
    base.OnGameInitializationFinished(game);

    // 装上扩展点
    MyGameHandler handler = game.AddGameHandler<MyGameHandler>();
}

protected override void OnGameEnd(Game game)
{
    base.OnGameEnd(game);

    // 必须移除，否则随游戏实例泄漏
    if (game != null)
    {
        game.RemoveGameHandler<MyGameHandler>();
    }
}
```

### 示例 3：取默认定义而不是硬编码

```csharp
using TaleWorlds.Core;

Game game = Game.Current;
if (game == null) return;

// 属性 / 技能 / 物品分类的默认值都在这里
Skill skill = game.DefaultSkills.GetSkill("Athletics");
Equipment defaultGear = game.GetDefaultEquipmentWithName("player_start_armor");
```

## 风险与边界

- **`Game.Current` 的 null 窗口**：主菜单、模块加载、编辑器预览、销毁后的若干帧。缓存它等于假设它永不变——这是本代最常见的崩溃源之一。
- **`Destroying` / `Destroyed` 状态**。`CurrentState` 进入这两个值后，`GameManager`、`GameStateManager`、`ObjectManager` 的访问都会失败。清理逻辑应在进入 `Destroying` 之前完成。
- **静态事件 `OnGameCreated` 的生命周期**。它是 static，跨游戏实例存活。不解除订阅，下一局会向已死对象回调。
- **`AfterTick` 委托列表泄漏**。注册了不解除，闭包持有的对象会被一直引用。
- **`GameHandler` 不自动移除**。`RemoveGameHandler<T>()` 必须显式调用。
- **模式假设**。把 `game.GameType as Campaign` 当作一定成功，会在编辑器 / 联机大厅里 NRE。永远用 `is` 或先判 null。
- **存档回调的异步性**。`Save` 的 `onSaveCompleted` 可能在之后的帧才触发；在回调里立刻读世界状态要小心。
- **单线程**。所有成员都在主游戏线程访问。`JobManager` 的后台线程必须转投主线程后再碰 `Game.Current`。
- **原生互操作**。`RegisterTypes` 与 `LoadBasicFiles` 触碰底层资源系统，只在启动流程里可调用。

## 依赖关系

- 上游 / 提供者：
  - [Module](../../core/Module) 的 `GlobalGameStateManager` 与本类共同完成游戏状态的切换。
  - [MBSubModuleBase](../../core/MBSubModuleBase) 的 `OnGameStart` / `OnGameInitializationFinished` / `OnGameLoaded` 等钩子由本类的实例驱动。
- 相互 / 下游：
  - [MBObjectManager](../../campaign-ext/MBObjectManager) 由本类持有（`ObjectManager`），并在 `RegisterTypes` 中被填充。
  - [Campaign](../../campaign/Campaign) 就是战役模式下的 `GameType` 实例；`Game.OnMissionIsStarting` 与它呼应。
  - [SaveManager](../../save-system/SaveManager) 是存档的静态门面，[SaveContext](../../save-system/SaveContext) / [LoadContext](../../save-system/LoadContext) 执行实际读写。
  - [ScreenManager](../../gui/ScreenManager) 管理界面栈，与 `GameStateManager` 协同。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[Module](../../core/Module) · [MBSubModuleBase](../../core/MBSubModuleBase) · [Campaign](../../campaign/Campaign) · [MBObjectManager](../../campaign-ext/MBObjectManager) · [SaveManager](../../save-system/SaveManager) · [ScreenManager](../../gui/ScreenManager)