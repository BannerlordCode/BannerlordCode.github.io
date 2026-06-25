---
title: "Game"
description: "Auto-generated class reference for Game."
---
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** `IGameStateManagerOwner`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/Game.cs`

## Overview

`Game` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

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

## Key Methods

### CreateBannerVisual
`public IBannerVisual CreateBannerVisual(Banner banner)`

**Purpose:** Constructs a new `banner visual` entity and returns it to the caller.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
var result = game.CreateBannerVisual(banner);
```

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName)`

**Purpose:** Reads and returns the `default equipment with name` value held by the current object.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
var result = game.GetDefaultEquipmentWithName("example");
```

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)`

**Purpose:** Assigns a new value to `default equipments` and updates the object's internal state.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.SetDefaultEquipments(iReadOnlyDictionary<string, defaultEquipments);
```

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)`

**Purpose:** Constructs a new `game` entity and returns it to the caller.

```csharp
// Static call; no instance required
Game.CreateGame(gameType, gameManager, 0);
```

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager)`

**Purpose:** Constructs a new `game` entity and returns it to the caller.

```csharp
// Static call; no instance required
Game.CreateGame(gameType, gameManager);
```

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)`

**Purpose:** Reads `save game` from persistent storage or a stream.

```csharp
// Static call; no instance required
Game.LoadSaveGame(loadResult, gameManager);
```

### Save
`public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)`

**Purpose:** Writes the current object's data to persistent storage or a stream.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.Save(metaData, "example", driver, onSaveCompleted);
```

### Destroy
`public void Destroy()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.Destroy();
```

### CreateGameManager
`public void CreateGameManager()`

**Purpose:** Constructs a new `game manager` entity and returns it to the caller.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.CreateGameManager();
```

### OnStateChanged
`public void OnStateChanged(GameState oldState)`

**Purpose:** Invoked when the `state changed` event is raised.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.OnStateChanged(oldState);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.Initialize();
```

### RegisterTypes
`public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)`

**Purpose:** Registers `types` with the current system so it can later be observed or dispatched.

```csharp
// Static call; no instance required
Game.RegisterTypes(gameType, objectManager, gameManager);
```

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models)`

**Purpose:** Assigns a new value to `basic models` and updates the object's internal state.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.SetBasicModels(models);
```

### OnGameStart
`public void OnGameStart()`

**Purpose:** Invoked when the `game start` event is raised.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.OnGameStart();
```

### DoLoading
`public bool DoLoading()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
var result = game.DoLoading();
```

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Invoked when the `mission is starting` event is raised.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.OnMissionIsStarting("example", rec);
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.OnFinalize();
```

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects()`

**Purpose:** Prepares the resources, state, or bindings required by `default game objects`.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.InitializeDefaultGameObjects();
```

### LoadBasicFiles
`public void LoadBasicFiles()`

**Purpose:** Reads `basic files` from persistent storage or a stream.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.LoadBasicFiles();
```

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Game from the subsystem API first
Game game = ...;
game.ItemObjectDeserialized(itemObject);
```

## Usage Example

```csharp
var game = Game.Current;
game.AddGameObject(gameObject);
```

## See Also

- [Area Index](../)