# Game / 游戏主类

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/Game.cs`  
**Purpose**: Main game class managing game state, models, and object systems

## 关键属性 / Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Current` | `static Game` | Current game instance |
| `CurrentState` | `Game.State` | Current game state |
| `GameType` | `GameType` | Type of game (Campaign, CustomBattle, etc.) |
| `GameManager` | `GameManagerBase` | Game manager |
| `ObjectManager` | `MBObjectManager` | Object manager for game objects |
| `GameStateManager` | `GameStateManager` | Manages game states |
| `GameTextManager` | `GameTextManager` | Manages localized text |
| `BasicModels` | `BasicGameModels` | Basic game models |
| `EventManager` | `EventManager` | Game event manager |
| `PlayerTroop` | `BasicCharacterObject` | Player character troop |
| `DefaultMonster` | `Monster` | Default monster definition |
| `DefaultCharacterAttributes` | `DefaultCharacterAttributes` | Character attributes |
| `DefaultSkills` | `DefaultSkills` | Skill definitions |
| `DefaultBannerEffects` | `DefaultBannerEffects` | Banner effects |
| `DefaultItemCategories` | `DefaultItemCategories` | Item categories |
| `DefaultSiegeEngineTypes` | `DefaultSiegeEngineTypes` | Siege engine types |
| `MonsterMissionDataCreator` | `IMonsterMissionDataCreator` | Monster mission data |
| `BannerVisualCreator` | `IBannerVisualCreator` | Banner visual creation |
| `UnitSpawnPrioritization` | `UnitSpawnPrioritizations` | Spawn prioritization |
| `CheatMode` | `bool` | Is cheat mode active |
| `IsDevelopmentMode` | `bool` | Is development mode |
| `IsEditModeOn` | `bool` | Is edit mode on |
| `ApplicationTime` | `float` | Application time |
| `AfterTick` | `Action` | Callback after tick |
| `NextUniqueTroopSeed` | `int` | Next unique troop seed |

## 关键方法 / Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `CreateGame` | `static Game CreateGame(GameType gameType, GameManagerBase gameManager, int seed)` | Create game with seed |
| `CreateGame` | `static Game CreateGame(GameType gameType, GameManagerBase gameManager)` | Create game without seed |
| `LoadSaveGame` | `static Game LoadSaveGame(LoadResult loadResult, GameManagerBase gameManager)` | Load saved game |
| `Save` | `void Save(MetaData metaData, string saveName, ISaveDriver driver, Action onSaveCompleted)` | Save game |
| `Initialize` | `void Initialize()` | Initialize game systems |
| `InitializeDefaultGameObjects` | `void InitializeDefaultGameObjects()` | Initialize default objects |
| `LoadBasicFiles` | `void LoadBasicFiles()` | Load XML data files |
| `RegisterTypes` | `static void RegisterTypes(GameType gameType, MBObjectManager objectManager, GameManagerBase gameManager)` | Register object types |
| `SetBasicModels` | `void SetBasicModels(IEnumerable models)` | Set game models |
| `AddGameModelsManager` | `T AddGameModelsManager(IEnumerable inputComponents) where T : GameModelsManager` | Add models manager |
| `AddGameHandler` | `T AddGameHandler() where T : GameHandler, new()` | Add game handler |
| `GetGameHandler` | `T GetGameHandler() where T : GameHandler` | Get game handler |
| `RemoveGameHandler` | `void RemoveGameHandler() where T : GameHandler` | Remove game handler |
| `OnTick` | `internal void OnTick(float dt)` | Game tick |
| `OnGameStart` | `void OnGameStart()` | Called when game starts |
| `OnMissionIsStarting` | `void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | Before mission starts |
| `OnStateChanged` | `public void OnStateChanged(GameState oldState)` | When game state changes |
| `OnGameNetworkBegin` | `internal void OnGameNetworkBegin()` | Network session begin |
| `OnGameNetworkEnd` | `internal void OnGameNetworkEnd()` | Network session end |
| `OnEarlyPlayerConnect` | `internal void OnEarlyPlayerConnect(VirtualPlayer peer)` | Early player connect |
| `OnPlayerConnect` | `internal void OnPlayerConnect(VirtualPlayer peer)` | Player connect |
| `OnPlayerDisconnect` | `internal void OnPlayerDisconnect(VirtualPlayer peer)` | Player disconnect |
| `DoLoading` | `bool DoLoading()` | Perform loading |
| `OnFinalize` | `void OnFinalize()` | Finalize game |
| `Destroy` | `public void Destroy()` | Destroy game |
| `GetDefaultEquipmentWithName` | `Equipment GetDefaultEquipmentWithName(string equipmentName)` | Get default equipment |
| `SetDefaultEquipments` | `void SetDefaultEquipments(IReadOnlyDictionary defaultEquipments)` | Set default equipment |
| `CreateBannerVisual` | `IBannerVisual CreateBannerVisual(Banner banner)` | Create banner visual |
| `ItemObjectDeserialized` | `void ItemObjectDeserialized(ItemObject itemObject)` | Item deserialized callback |
| `createGameManager` | `public void createGameManager()` | Create game manager |

## 使用示例 / Usage Example

```csharp
// Access current game instance
Game game = Game.Current;
if (game == null)
{
    Debug.Print("No active game");
}

// Check game state
if (game.CurrentState == Game.State.Running)
{
    Debug.Print("Game is running");
}

// Access object manager
MBObjectManager objectManager = game.ObjectManager;

// Create new game
Game newGame = Game.CreateGame(
    new CampaignGameType(),
    new TaleWorlds.MountAndBlade.Module.ModuleGameManager(),
    12345  // Random seed
);

// Access game models
float speed = Campaign.Current.Models.PartySpeedCalculatingModel
    .CalculateBaseSpeed(party, true, 0, 0).ResultNumber;

// Add game handler
MyCustomHandler handler = game.AddGameHandler<MyCustomHandler>();

// Get game state
GameStateManager stateManager = game.GameStateManager;

// Check if cheat mode
if (game.CheatMode)
{
    Debug.Print("Cheat mode is enabled");
}

// Save game
game.Save(
    new MetaData(),
    "my_save",
    new FileDriver("saves/my_save.sav"),
    (result) => {
        if (result == SaveResult.Success)
        {
            Debug.Print("Game saved!");
        }
    }
);
```

## 游戏状态 / Game State Enum

| State | Description |
|-------|-------------|
| `Running` | Game is running normally |
| `Destroying` | Game is being destroyed |
| `Destroyed` | Game has been destroyed |

## 继承关系 / Inheritance

```
Game (sealed)
    └── IGameStateManagerOwner
```

## 事件 / Events

| Event | Type | Description |
|-------|------|-------------|
| `OnGameCreated` | `static event Action` | Fired when game is created |
| `OnItemDeserializedEvent` | `event Action` | Fired when item is deserialized |

## 保存系统集成 / Save System Integration

Game uses the `SaveableRootClass` attribute (ID 5000) for save system integration. Key save-related methods:
- `Save()` - Async save with callback
- `LoadSaveGame()` - Static method to load saves
- `CreateGame()` - Creates new game instance

## 使用默认装备 / Default Equipment

```csharp
// Get default equipment
Equipment defaultEquipment = game.GetDefaultEquipmentWithName("player_banner");

// Set default equipment
game.SetDefaultEquipments(equipmentDictionary);
```
