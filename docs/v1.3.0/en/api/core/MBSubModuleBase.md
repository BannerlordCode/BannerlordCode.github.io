# MBSubModuleBase / MBSubModuleBase

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/MBSubModuleBase.cs`
**Version**: v1.3.0

## Overview

`MBSubModuleBase` is the main entry point for every mod. When you declare a SubModule in `SubModule.xml`, you must create a class inheriting from `MBSubModuleBase` to respond to game events.

## Differences from v1.3.15

- v1.3.0 has a more streamlined MBSubModuleBase compared to v1.3.15
- Missing some newer lifecycle hook methods added in v1.3.15
- Fewer methods (about 26 virtual methods vs v1.3.15)
- No AgentComponent system integration in this version

## Lifecycle

Game startup call order:

1. `OnSubModuleLoad()` - Called after DLL is loaded
2. `OnNewModuleLoad()` - Called when new module loads
3. `OnBeforeInitialModuleScreenSetAsRoot()` - Before main menu displays
4. `OnInitialState()` - When initial screen shows
5. `OnGameStart(Game, IGameStarter)` - When game starts
6. `OnCampaignStart(Game, object)` - When campaign begins
7. `OnMissionBehaviorInitialize(Mission)` - When mission behaviors initialize
8. `OnApplicationTick(float)` - Called every frame (in game loop)

## Key Methods

| Method | Description |
|--------|-------------|
| OnSubModuleLoad | Called after module loads, use for initialization |
| OnGameStart | Called when game starts, add GameStarter here |
| OnCampaignStart | Called when campaign mode starts |
| OnMissionBehaviorInitialize | Mission behavior init, add MissionBehavior here |
| OnApplicationTick | Called every frame, use for game loop logic |
| RegisterSubModuleObjects | Register custom objects to MBObjectManager |
| OnGameLoaded | Called after save file is loaded |

## Code Example

```csharp
// MySubModule.cs
using TaleWorlds.MountAndBlade;
using TaleWorlds.Core;

namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            // Do initialization setup
        }

        protected override void OnGameStart(Game game, IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // Add custom GameStarter
            gameStarterObject.AddModel(new MyGameModel());
        }

        protected override void OnApplicationTick(float dt)
        {
            base.OnApplicationTick(dt);
            // Game loop logic
        }
    }
}
```

## Notes

- All virtual methods have default empty implementations, override only what you need
- `OnApplicationTick` should not perform heavy operations or game FPS will suffer
- Use `RegisterSubModuleObjects` to register custom objects that need to be saved
