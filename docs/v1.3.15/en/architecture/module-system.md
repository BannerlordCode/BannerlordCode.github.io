---
title: Module System
description: MBSubModuleBase lifecycle, module loading mechanism, SubModule configuration
---

# Module System

**Namespace**: TaleWorlds.MountAndBlade
**Depends On**: TaleWorlds.ModuleManager, TaleWorlds.Core

## Overview

Bannerlord's module system is the core of the game's architecture. Every mod is a `SubModule` that extends `MBSubModuleBase` to integrate with the game's lifecycle.

## MBSubModuleBase Lifecycle

`MBSubModuleBase` defines complete lifecycle hooks:

```csharp
public abstract class MBSubModuleBase
{
    // === Initialization Phase ===
    
    // Called when module loads (all SubModules)
    protected internal virtual void OnSubModuleLoad() { }
    
    // Called when new module loads (DLC/dynamic only)
    protected internal virtual void OnNewModuleLoad() { }
    
    // Register SubModule types
    protected internal virtual void RegisterSubModuleTypes() { }
    
    // === UI Phase ===
    
    // Before initial module screen set as root
    protected internal virtual void OnBeforeInitialModuleScreenSetAsRoot() { }
    
    // Initial state
    public virtual void OnInitialState() { }
    
    // === Game Start Phase ===
    
    // Before game starts (can disable modules)
    protected internal virtual void OnBeforeGameStart(
        MBGameManager mbGameManager, 
        List<string> disabledModules) { }
    
    // Game start
    protected internal virtual void OnGameStart(
        Game game, 
        IGameStarter gameStarterObject) { }
    
    // Initialize game starter
    protected internal virtual void InitializeGameStarter(
        Game game, 
        IGameStarter starterObject) { }
    
    // === Save Load Phase ===
    
    // Game loaded from save
    public virtual void OnGameLoaded(Game game, object initializerObject) { }
    
    // After game loaded
    public virtual void OnAfterGameLoaded(Game game) { }
    
    // New game created
    public virtual void OnNewGameCreated(Game game, object initializerObject) { }
    
    // === Per-Frame Update Phase ===
    
    // Every frame
    protected internal virtual void OnApplicationTick(float dt) { }
    
    // After async tick
    protected internal virtual void AfterAsyncTickTick(float dt) { }
    
    // Network tick
    protected internal virtual void OnNetworkTick(float dt) { }
    
    // === Campaign Phase ===
    
    // Campaign start
    public virtual void OnCampaignStart(Game game, object starterObject) { }
    
    // Register SubModule objects
    public virtual void RegisterSubModuleObjects(bool isSavedCampaign) { }
    
    // After register
    public virtual void AfterRegisterSubModuleObjects(bool isSavedCampaign) { }
    
    // === Mission Phase ===
    
    // Before mission behavior initialize
    public virtual void OnBeforeMissionBehaviorInitialize(Mission mission) { }
    
    // Mission behavior initialize
    public virtual void OnMissionBehaviorInitialize(Mission mission) { }
    
    // === Game End Phase ===
    
    // Game end
    public virtual void OnGameEnd(Game game) { }
    
    // === Unload Phase ===
    
    // SubModule unload
    protected internal virtual void OnSubModuleUnloaded() { }
    
    // === Activate/Deactivate Phase ===
    
    // SubModule activated
    public virtual void OnSubModuleActivated() { }
    
    // SubModule deactivated
    public virtual void OnSubModuleDeactivated() { }
    
    // === Config Change ===
    
    // Config changed
    public virtual void OnConfigChanged() { }
}
```

## Lifecycle Flowchart

```
Game Launch
    │
    ├─► Module.Initialize()
    │       │
    │       ├─► ModuleHelper.InitializeModules()
    │       │       │
    │       │       └─► Load all ModuleInfo (from SubModule.xml)
    │       │
    │       ├─► LoadSubModules()
    │       │       │
    │       │       ├─► Load DLL assemblies
    │       │       └─► Create MBSubModuleBase instances
    │       │
    │       └─► InitializeSubModuleBases()
    │               │
    │               └─► Call all SubModule.OnSubModuleLoad()
    │
    ├─► SetInitialModuleScreenAsRoot()
    │       │
    │       ├─► Call all SubModule.OnBeforeInitialModuleScreenSetAsRoot()
    │       │
    │       └─► Show initial screen (Logo → Main Menu)
    │
    └─► Enter main loop (Main Loop)
            │
            ├─► OnApplicationTick(dt) ← every frame
            ├─► OnNetworkTick(dt) ← network sync
            │
            └─► User selects "Start Game" / "Continue Game"
                    │
                    ├─► OnBeforeGameStart() ← can disable modules
                    │
                    ├─► OnGameStart()
                    │       │
                    │       └─► InitializeGameStarter()
                    │
                    ├─► [New Game] OnNewGameCreated()
                    │       │
                    │       └─► RegisterSubModuleObjects(false)
                    │
                    └─► [Load] OnGameLoaded()
                            │
                            └─► RegisterSubModuleObjects(true)
```

## SubModule Registration Example

```csharp
// MyMod.cs
namespace MyMod
{
    public class MySubModule : MBSubModuleBase
    {
        protected override void OnSubModuleLoad()
        {
            base.OnSubModuleLoad();
            Debug.Print("MyMod loaded!", 0, Debug.DebugColor.Green, 17592186044416UL);
        }

        protected override void OnGameStart(
            Game game, 
            IGameStarter gameStarterObject)
        {
            base.OnGameStart(game, gameStarterObject);
            // Register custom game logic
        }

        public override void OnGameLoaded(Game game, object initializerObject)
        {
            base.OnGameLoaded(game, initializerObject);
            // Load save data
        }
    }
}
```

## Module.cs Loading Flow

`Module.cs` is the game's central coordinator:

```csharp
// Module initialization (line 229)
internal void Initialize()
{
    // 1. Parallel initialization
    TWParallel.InitializeAndSetImplementation(new NativeParallelDriver());
    
    // 2. Set save driver
    MBSaveLoad.SetSaveDriver(new AsyncFileSaveDriver());
    
    // 3. Process command line arguments
    ProcessApplicationArguments();
    
    // 4. Initialize all modules
    ModuleHelper.InitializeModules(Utilities.GetModulesNames(), null);
    
    // 5. Load SubModules
    LoadSubModules(ModuleHelper.GetModules(null), false);
    
    // 6. Find missions
    FindMissions();
    
    // 7. Initialize save system definition context
    SaveManager.InitializeGlobalDefinitionContext();
}

// Load SubModules (line 1063)
private void LoadSubModules(List<ModuleInfo> modules, bool loadNewModules)
{
    foreach (ModuleInfo moduleInfo in modules)
    {
        // Load XML resource configs
        XmlResource.GetMbprojxmls(moduleInfo.Id);
        XmlResource.GetXmlListAndApply(moduleInfo.Id);
    }
    
    foreach (ModuleInfo moduleInfo in modules)
    {
        foreach (SubModuleInfo subModuleInfo in moduleInfo.SubModules)
        {
            // Check if loadable (platform tags, etc.)
            if (CheckIfSubmoduleCanBeLoadable(subModuleInfo))
            {
                // Load DLL
                string dllPath = Path.Combine(moduleInfo.FolderPath, "bin", dllName);
                Assembly assembly = AssemblyLoader.LoadFrom(dllPath);
                
                // Create SubModule instance
                AddSubModule(subModuleInfo, assembly);
            }
        }
    }
}
```

## ModuleInfo and Dependency Management

`ModuleInfo` parses SubModule.xml to get module information:

```csharp
public class ModuleInfo
{
    public string Id { get; }           // Unique module ID
    public string Name { get; }          // Display name
    public ApplicationVersion Version { get; }  // Version
    public bool IsOfficial { get; }     // Is official module
    public bool IsNative { get; }       // Is Native module
    public List<DependedModule> DependedModules { get; }  // Dependencies
    public List<SubModuleInfo> SubModules { get; }        // SubModules
}
```

### Dependency Resolution

```csharp
// ModuleHelper.GetSortedModules() uses topological sort
public static List<ModuleInfo> GetSortedModules(string[] moduleIDs)
{
    List<ModuleInfo> modules = GetModuleInfos(moduleIDs);
    // Topological sort ensures dependencies load before dependents
    IList<ModuleInfo> sorted = MBMath.TopologySort(modules, 
        (module) => GetDependentModulesOf(modules, module));
    return sorted.ToList();
}
```

## SubModule.xml Configuration

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <Name value="MyMod" />
    <Id value="MyMod" />
    <Version value="v1.0.0" />
    <RequiredBaseVersion value="e1.3.15" />
    <SubModules>
        <SubModule>
            <Name value="MyMod" />
            <DLLName value="MyMod.dll" />
            <SubModuleClassType value="MyMod.MySubModule" />
            <Assemblies>
                <Assembly value="MyMod.dll" />
            </Assemblies>
            <Tags>
                <!-- Platform tag -->
                <Tag name="ExclusivePlatform" value="WindowsSteam" />
                <!-- Or exclude platform -->
                <Tag name="RejectedPlatform" value="Orbis" />
            </Tags>
        </SubModule>
    </SubModules>
    <DependedModules>
        <DependedModule Id="Native" IsOptional="false" />
        <DependedModule Id="SandboxCore" IsOptional="false" />
    </DependedModules>
</Module>
```

## Official Modules List

```csharp
// ModuleHelper.GetOfficialModuleIds()
{
    "Native",        // Base engine
    "Multiplayer",   // Multiplayer mode
    "SandBoxCore",   // Sandbox core
    "Sandbox",       // Sandbox mode
    "CustomBattle",   // Custom battle
    "StoryMode",     // Story mode
    "NavalDLC",      // Naval DLC
    "BirthAndDeath", // Birth and death
    "FastMode"       // Fast mode
}
```

## Key Classes

| Class | Responsibility |
|-------|----------------|
| `Module` | Game main module, coordinator |
| `ModuleHelper` | Module lookup, sorting, dependency resolution |
| `ModuleInfo` | Single module's metadata |
| `SubModuleInfo` | SubModule configuration info |
| `MBSubModuleBase` | Base class for all SubModules |
| `DotNetObject` | Base class for serializable objects |
| `Managed` | Type registration management |

