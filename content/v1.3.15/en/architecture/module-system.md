---
title: Module System
description: MBSubModuleBase lifecycle, module loading, registering Campaign/Mission/ViewModel behaviors, SubModule.xml
---
# Module System

> The module system answers the first engineering question of any mod: **when does my code run?**  Answer: `MBSubModuleBase` lifecycle hooks + `SubModule.xml` config.

**Namespace**: `TaleWorlds.MountAndBlade`  
**Depends On**: `TaleWorlds.ModuleManager`, `TaleWorlds.Core`

---

## ↑ Parent Navigation

- [🏠 Home](../../)
- [🏗️ Architecture](./)
- [⭐ SDK Overview](../sdk-overview/)
- [📚 API Reference](../../api/)

## 🔀 Sibling Navigation

| Page | Solves |
|------|--------|
| [SDK Overview](../sdk-overview/) | Full module map |
| [Save System](../save-system/) | Persisting data |
| [Version Delta](../version-delta/) | Version differences |

## ↓ Downstream Links

- Campaign entry: [`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/) · [`Campaign`](../../api/campaign/Campaign/)
- Combat entry: [`MissionBehavior`](../../../../versions/MissionBehavior/) · [`Mission`](../../../../versions/Mission/)
- UI entry: [`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- Quest/events: [`QuestBase`](../../../../versions/QuestBase/) · [`IssueBase`](../../../../versions/IssueBase/)

---

## Lifecycle phases

Group `MBSubModuleBase` methods into three phases:

1. **Startup** (once): game launch → `OnSubModuleLoad` → main menu.
2. **Game session** (each new/load): `OnGameStart` → `InitializeGameStarter` → `OnNewGameCreated` / `OnGameLoaded`.
3. **Runtime** (per frame): `OnApplicationTick` and mission/campaign hooks.

```
Game launch
   │
   ▼
OnSubModuleLoad()            ← register Harmony, config, global events
   │
   ▼
OnBeforeInitialModuleScreenSetAsRoot()  ← last hook before main menu
   │
   ▼
        Main menu loop
        │
        ▼
OnGameStart(game, starter)   ← register Campaign / Mission behaviors
   │
   ▼
InitializeGameStarter(game, starter)
   │
   ├── OnNewGameCreated()    ← new game init
   └── OnGameLoaded()        ← save restore
        │
        ▼
OnApplicationTick(dt)        ← per-frame update
```

---

## Hook guide

| Hook | Typical use | Example |
|------|-------------|---------|
| `OnSubModuleLoad` | Load config, Harmony patches, XML hotload | Global behavior mods |
| `OnGameStart` | Get `CampaignGameStarter`, register behaviors | Campaign/mission logic mods |
| `OnNewGameCreated` / `OnGameLoaded` | One-off init after behavior registration | Add custom hero attributes |
| `OnApplicationTick` | Rare; prefer Behavior ticks | Logging, hotkey polling |
| `OnBeforeMissionBehaviorInitialize` | Inject settings before mission behavior init | Custom combat rules |

---

## Registering behaviors

### CampaignBehavior

```csharp
protected override void OnGameStart(Game game, IGameStarter starter)
{
    base.OnGameStart(game, starter);
    if (starter is CampaignGameStarter campaignStarter)
    {
        campaignStarter.AddBehavior(new MyCampaignBehavior());
    }
}
```

Entry: [`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/).

### MissionBehavior

```csharp
public override void OnMissionBehaviorInitialize(Mission mission)
{
    base.OnMissionBehaviorInitialize(mission);
    mission.AddMissionBehavior(new MyMissionBehavior());
}
```

Entry: [`MissionBehavior`](../../../../versions/MissionBehavior/).

### ViewModel / Gauntlet UI

Gauntlet UI is loaded via `GauntletMovie` + `ViewModel`. Usually you open a screen with `ScreenManager.PushScreen` or register a layer inside the mod entry point. See [Gauntlet Guide](../../guide/gauntlet-ui/) and [`ViewModel`](../../api/core-extra/ViewModel/).

---

## SubModule.xml — the mod's identity card

```xml
<?xml version="1.0" encoding="utf-8"?>
<Module>
    <Name value="MyMod" />
    <Id value="MyMod" />
    <Version value="v1.0.0" />
    <DefaultModule value="true" />
    <SingleplayerModule value="true" />
    <MultiplayerModule value="false" />
    <DependedModules>
        <DependedModule Id="Native" Optional="false" />
        <DependedModule Id="SandboxCore" Optional="false" />
    </DependedModules>
    <SubModules>
        <SubModule>
            <Name value="MyMod" />
            <DLLName value="MyMod.dll" />
            <SubModuleClassType value="MyMod.MySubModule" />
            <Assemblies>
                <Assembly value="MyMod.dll" />
            </Assemblies>
            <Tags>
                <Tag key="DedicatedServerType" value="none" />
            </Tags>
        </SubModule>
    </SubModules>
</Module>
```

### Key fields

| Field | Meaning | Debugging tip |
|-------|---------|---------------|
| `Id` / `Name` | Unique id and display name | First things to check if a module is missing |
| `DependedModules` | Dependency sort; missing deps disable the module | Check launcher log |
| `SubModuleClassType` | Full name of `MBSubModuleBase` subclass | Must match namespace + class exactly |
| `DLLName` | DLL filename relative to module `bin/` | Verify the DLL was built there |
| `Tags` | Platform / mode filtering | Wrong `ExclusivePlatform` prevents loading |

---

## Loading flow

```
Module.Initialize()
   ├── ModuleHelper.InitializeModules()   ← parse all SubModule.xml
   ├── LoadSubModules()                   ← load DLLs in topological order
   │       └── create MBSubModuleBase instances
   ├── FindMissions()
   └── SaveManager.InitializeGlobalDefinitionContext()
   │
   ▼
SetInitialModuleScreenAsRoot()
   └── call OnBeforeInitialModuleScreenSetAsRoot()
```

**Startup failures**: check `rgl_log.txt` for `Module`/`ModuleHelper` errors. Most are missing dependencies or bad `SubModuleClassType`.

---

## Key classes

| Class | Responsibility | Common scenario |
|-------|----------------|-----------------|
| `MBSubModuleBase` | Mod lifecycle entry | First step of every mod |
| `Module` | Central coordinator | Diagnosing startup failures |
| `ModuleHelper` | Module lookup, topological sort | Understanding load order |
| `ModuleInfo` | Per-module metadata | Reading dependencies at runtime |
| `CampaignGameStarter` | Campaign starter | Registering `CampaignBehaviorBase` |

---

## See also

- [SDK Overview](../sdk-overview/)
- [Save System](../save-system/)
- [Campaign Guide](../../guide/campaign-system/) · [Mission Guide](../../guide/mission-system/) · [Gauntlet Guide](../../guide/gauntlet-ui/)
