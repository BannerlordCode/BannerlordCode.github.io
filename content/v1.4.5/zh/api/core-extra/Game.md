---
title: "Game"
description: "Game 的自动生成类参考。"
---
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** `IGameStateManagerOwner`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`

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

**用途 / Purpose:** 构建一个新的 「banner visual」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
var result = game.CreateBannerVisual(banner);
```

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName)`

**用途 / Purpose:** 读取并返回当前对象中 「default equipment with name」 的结果。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
var result = game.GetDefaultEquipmentWithName("example");
```

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)`

**用途 / Purpose:** 为 「default equipments」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.SetDefaultEquipments(iReadOnlyDictionary<string, defaultEquipments);
```

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)`

**用途 / Purpose:** 构建一个新的 「game」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Game.CreateGame(gameType, gameManager, 0);
```

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager)`

**用途 / Purpose:** 构建一个新的 「game」 实体并返回给调用方。

```csharp
// 静态调用，不需要实例
Game.CreateGame(gameType, gameManager);
```

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)`

**用途 / Purpose:** 从持久化存储或流中读取 「save game」。

```csharp
// 静态调用，不需要实例
Game.LoadSaveGame(loadResult, gameManager);
```

### Save
`public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)`

**用途 / Purpose:** 将当前对象的数据写入持久化存储或流中。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.Save(metaData, "example", driver, onSaveCompleted);
```

### Destroy
`public void Destroy()`

**用途 / Purpose:** 处理与 「destroy」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.Destroy();
```

### CreateGameManager
`public void CreateGameManager()`

**用途 / Purpose:** 构建一个新的 「game manager」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.CreateGameManager();
```

### OnStateChanged
`public void OnStateChanged(GameState oldState)`

**用途 / Purpose:** 在 「state changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.OnStateChanged(oldState);
```

### Initialize
`public void Initialize()`

**用途 / Purpose:** 初始化当前对象所需的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.Initialize();
```

### RegisterTypes
`public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)`

**用途 / Purpose:** 将「types」注册到当前系统，以便后续监听或分发。

```csharp
// 静态调用，不需要实例
Game.RegisterTypes(gameType, objectManager, gameManager);
```

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models)`

**用途 / Purpose:** 为 「basic models」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.SetBasicModels(models);
```

### OnGameStart
`public void OnGameStart()`

**用途 / Purpose:** 在 「game start」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.OnGameStart();
```

### DoLoading
`public bool DoLoading()`

**用途 / Purpose:** 处理与 「do loading」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
var result = game.DoLoading();
```

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**用途 / Purpose:** 在 「mission is starting」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.OnMissionIsStarting("example", rec);
```

### OnFinalize
`public void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.OnFinalize();
```

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects()`

**用途 / Purpose:** 为 「default game objects」 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.InitializeDefaultGameObjects();
```

### LoadBasicFiles
`public void LoadBasicFiles()`

**用途 / Purpose:** 从持久化存储或流中读取 「basic files」。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.LoadBasicFiles();
```

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject)`

**用途 / Purpose:** 处理与 「item object deserialized」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 Game 实例
Game game = ...;
game.ItemObjectDeserialized(itemObject);
```

## 使用示例

```csharp
var game = Game.Current;
game.AddGameObject(gameObject);
```

## 参见

- [本区域目录](../)