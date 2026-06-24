<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `Game`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# Game

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public sealed class Game : IGameStateManagerOwner`
**Base:** `IGameStateManagerOwner`
**File:** `TaleWorlds.Core/Game.cs`

## Overview

`Game` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CurrentState` | `public Game.State CurrentState { get; }` |
| `MonsterMissionDataCreator` | `public IMonsterMissionDataCreator MonsterMissionDataCreator { get; set; }` |
| `DefaultMonster` | `public Monster DefaultMonster { get; }` |
| `GameType` | `public GameType GameType { get; }` |
| `DefaultSiegeEngineTypes` | `public DefaultSiegeEngineTypes DefaultSiegeEngineTypes { get; }` |
| `ObjectManager` | `public MBObjectManager ObjectManager { get; }` |
| `PlayerTroop` | `public BasicCharacterObject PlayerTroop { get; }` |
| `BasicModels` | `public BasicGameModels BasicModels { get; }` |
| `GameManager` | `public GameManagerBase GameManager { get; }` |
| `GameTextManager` | `public GameTextManager GameTextManager { get; }` |
| `GameStateManager` | `public GameStateManager GameStateManager { get; }` |
| `CheatMode` | `public bool CheatMode { get; }` |
| `IsDevelopmentMode` | `public bool IsDevelopmentMode { get; }` |
| `IsEditModeOn` | `public bool IsEditModeOn { get; }` |
| `UnitSpawnPrioritization` | `public UnitSpawnPrioritizations UnitSpawnPrioritization { get; }` |
| `ApplicationTime` | `public float ApplicationTime { get; set; }` |
| `Current` | `public static Game Current { get; set; }` |
| `BannerVisualCreator` | `public IBannerVisualCreator BannerVisualCreator { get; set; }` |
| `NextUniqueTroopSeed` | `public int NextUniqueTroopSeed { get; }` |
| `DefaultCharacterAttributes` | `public DefaultCharacterAttributes DefaultCharacterAttributes { get; }` |
| `DefaultSkills` | `public DefaultSkills DefaultSkills { get; }` |
| `DefaultBannerEffects` | `public DefaultBannerEffects DefaultBannerEffects { get; }` |
| `DefaultItemCategories` | `public DefaultItemCategories DefaultItemCategories { get; }` |
| `EventManager` | `public EventManager EventManager { get; }` |

## Key Methods

### CreateBannerVisual
`public IBannerVisual CreateBannerVisual(Banner banner)`

**Purpose:** Creates a new `banner visual` instance or object.

### GetDefaultEquipmentWithName
`public Equipment GetDefaultEquipmentWithName(string equipmentName)`

**Purpose:** Gets the current value of `default equipment with name`.

### SetDefaultEquipments
`public void SetDefaultEquipments(IReadOnlyDictionary<string, Equipment> defaultEquipments)`

**Purpose:** Sets the value or state of `default equipments`.

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)`

**Purpose:** Creates a new `game` instance or object.

### CreateGame
`public static Game CreateGame(GameType gameType, GameManagerBase gameManager)`

**Purpose:** Creates a new `game` instance or object.

### LoadSaveGame
`public static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)`

**Purpose:** Loads `save game` data.

### Save
`public void Save(MetaData metaData, string saveName, ISaveDriver driver, Action<SaveResult> onSaveCompleted)`

**Purpose:** Saves `save` data.

### Destroy
`public void Destroy()`

**Purpose:** Handles logic related to `destroy`.

### CreateGameManager
`public void CreateGameManager()`

**Purpose:** Creates a new `game manager` instance or object.

### OnStateChanged
`public void OnStateChanged(GameState oldState)`

**Purpose:** Called when the `state changed` event is raised.

### Initialize
`public void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RegisterTypes
`public static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)`

**Purpose:** Handles logic related to `register types`.

### SetBasicModels
`public void SetBasicModels(IEnumerable<GameModel> models)`

**Purpose:** Sets the value or state of `basic models`.

### OnGameStart
`public void OnGameStart()`

**Purpose:** Called when the `game start` event is raised.

### DoLoading
`public bool DoLoading()`

**Purpose:** Handles logic related to `do loading`.

### OnMissionIsStarting
`public void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)`

**Purpose:** Called when the `mission is starting` event is raised.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### InitializeDefaultGameObjects
`public void InitializeDefaultGameObjects()`

**Purpose:** Initializes the state, resources, or bindings for `default game objects`.

### LoadBasicFiles
`public void LoadBasicFiles()`

**Purpose:** Loads `basic files` data.

### ItemObjectDeserialized
`public void ItemObjectDeserialized(ItemObject itemObject)`

**Purpose:** Handles logic related to `item object deserialized`.

## Usage Example

```csharp
var value = new Game();
value.CreateBannerVisual(banner);
```

## See Also

- [Complete Class Catalog](../catalog)