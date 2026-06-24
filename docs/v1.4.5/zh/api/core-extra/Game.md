<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `Game`
- [← 本领域 / 返回 core-extra](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** `IGameStateManagerOwner`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`

## 概述

`Game` 位于 `TaleWorlds.Core`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.Core` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentState` | `public State CurrentState { get; }` |
| `MonsterMissionDataCreator` | `public IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` |
| `GameType` | `public GameType GameType { get; }` |
| `DefaultSiegeEngineTypes` | `public DefaultSiegeEngineTypes DefaultSiegeEngineTypes { get; }` |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; }` |
| `PlayerTroop` | `public BasicCharacterObject PlayerTroop { get; }` |
| `BasicModels` | `public BasicGameModels BasicModels { get; }` |
| `GameManager` | `public GameManagerBase GameManager { get; }` |
| `GameTextManager` | `public GameTextManager GameTextManager { get; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; }` |
| `Current` | `public static Game Current { get; set; }` |
| `BannerVisualCreator` | `public IBannerVisualCreator BannerVisualCreator { get; }` |
| `DefaultCharacterAttributes` | `public DefaultCharacterAttributes DefaultCharacterAttributes { get; }` |
| `DefaultSkills` | `public DefaultSkills DefaultSkills { get; }` |
| `DefaultBannerEffects` | `public DefaultBannerEffects DefaultBannerEffects { get; }` |
| `DefaultItemCategories` | `public DefaultItemCategories DefaultItemCategories { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |

## 主要方法

### CreateBannerVisual
`public IBannerVisual CreateBannerVisual(Banner banner)`

**用途 / Purpose:** 创建一个 `banner visual` 实例或对象。

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName)`

**用途 / Purpose:** 获取 `default equipment with name` 的当前值。

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)`

**用途 / Purpose:** 设置 `default equipments` 的值或状态。

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)`

**用途 / Purpose:** 创建一个 `game` 实例或对象。

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager)`

**用途 / Purpose:** 创建一个 `game` 实例或对象。

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)`

**用途 / Purpose:** 加载 `save game` 数据。

### Save
`public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)`

**用途 / Purpose:** 保存 `save` 数据。

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理 `destroy` 相关逻辑。

### CreateGameManager
`public void CreateGameManager()`

**用途 / Purpose:** 创建一个 `game manager` 实例或对象。

### OnStateChanged
`public void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 当 `state changed` 事件触发时调用此方法。

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化 `initialize` 的状态、资源或绑定。

### RegisterTypes
`public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)`

**用途 / Purpose:** 处理 `register types` 相关逻辑。

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models)`

**用途 / Purpose:** 设置 `basic models` 的值或状态。

### OnGameStart
`public void OnGameStart()`

**用途 / Purpose:** 当 `game start` 事件触发时调用此方法。

### DoLoading
`public bool DoLoading()`

**用途 / Purpose:** 处理 `do loading` 相关逻辑。

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**用途 / Purpose:** 当 `mission is starting` 事件触发时调用此方法。

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects()`

**用途 / Purpose:** 初始化 `default game objects` 的状态、资源或绑定。

### LoadBasicFiles
`public void LoadBasicFiles()`

**用途 / Purpose:** 加载 `basic files` 数据。

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject)`

**用途 / Purpose:** 处理 `item object deserialized` 相关逻辑。

## 使用示例

```csharp
var value = new Game();
value.CreateBannerVisual(banner);
```

## 参见

- [完整类目录](../catalog)