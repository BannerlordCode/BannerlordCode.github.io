# Module / Module

**Namespace**: TaleWorlds.MountAndBlade
**File**: `bannerlord-1.3.0/TaleWorlds.MountAndBlade/Module.cs`
**Version**: v1.3.0

## Overview

`Module` is the main module class of the game, responsible for managing all submodules, game states, and platform services. It is a singleton class accessed via `Module.Current`.

## Differences from v1.3.15

- v1.3.0 has a relatively simpler Module class structure
- No separate TaleWorlds.SaveSystem module, save functionality is inline within TaleWorlds.SaveSystem namespace
- No separate TaleWorlds.DotNet module, DotNet types are directly in TaleWorlds.DotNet namespace
- Fewer platform service integrations (missing some services added in v1.3.15)
- Smaller file size (about 1600 lines vs more in v1.3.15)
- Less comprehensive mission detection system

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| CurrentModule | static Module | Gets current module instance |
| GlobalGameStateManager | GameStateManager | Global game state manager |
| GlobalTextManager | GameTextManager | Global text manager |
| MultiplayerRequested | bool | Whether multiplayer is requested |
| LoadingFinished | bool | Whether loading is finished |
| JobManager | JobManager | Job manager |

## Key Methods

| Method | Description |
|--------|-------------|
| CollectSubModules | Collects all submodules |
| GetSubModuleType | Gets submodule type by name |
| SetInitialModuleScreenAsRootScreen | Sets initial screen as root |
| OnApplicationTick | Application tick every frame |
| GetMissionControllerClassNames | Gets mission controller class names |

## Code Example

```csharp
// Access the current module
Module module = Module.CurrentModule;

// Get all loaded submodules
MBReadOnlyList<MBSubModuleBase> subModules = module.CollectSubModules();

// Check if multiplayer is requested
if (module.MultiplayerRequested)
{
    // Handle multiplayer mode
}

// Access global game state manager
GameStateManager gameStateManager = module.GlobalGameStateManager;
```

## Notes

- Module is a singleton, accessed via Module.CurrentModule
- Do not instantiate Module directly, use the existing instance
- Platform services initialization happens in Initialize() method
- JobManager handles async operations within the module
