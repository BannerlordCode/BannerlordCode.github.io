---
title: Module System
description: MBSubModuleBase lifecycle, module loading order, registering campaign/mission behaviors, and SubModule.xml for Bannerlord v1.3.0.
---
# Module System

> The module system answers the first engineering question of every mod: **when does my code run?** In Bannerlord v1.3.0 the answer is still the same `MBSubModuleBase` lifecycle plus the `SubModule.xml` manifest.

**Namespace**: `TaleWorlds.MountAndBlade`  
**Depends on**: `TaleWorlds.ModuleManager`, `TaleWorlds.Core`

---

## Parent navigation

- [Home](../../)
- [Architecture](./)
- [SDK overview](../sdk-overview/)
- [API catalog](../../api/)

## Sibling navigation

| Page | Solves |
|------|--------|
| [SDK overview](../sdk-overview/) | Full module map |
| [Save system](../save-system/) | Persisting custom data |
| [Version delta](../version-delta/) | What changed in later versions |
| [Native interop](../native-interop/) | Calling into TaleWorlds.Native.dll |

## Downstream links

- Campaign entry: [`CampaignBehaviorBase`](../../../../versions/CampaignBehaviorBase/) · [`Campaign`](../../api/campaign/Campaign/)
- Combat entry: [`MissionBehavior`](../../../../versions/MissionBehavior/) · [`Mission`](../../../../versions/Mission/)
- UI entry: [`ViewModel`](../../api/core-extra/ViewModel/) · [`GauntletMovie`](../../api/gui/GauntletMovie/)
- Quest/events: [`QuestBase`](../../../../versions/QuestBase/) · [`IssueBase`](../../../../versions/IssueBase/)

---

## Lifecycle phases

Think of `MBSubModuleBase` in three phases:

1. **Startup** (once per launch): game starts → `OnSubModuleLoad` → main menu.
2. **Game session** (each new or loaded game): `OnGameStart` → `InitializeGameStarter` → `OnNewGameCreated` / `OnGameLoaded`.
3. **Runtime** (per frame): `OnApplicationTick` and mission or campaign hooks.

```
Game launch
    │
    ▼
OnSubModuleLoad()                         ← register Harmony, config, global events
    │
    ▼
OnBeforeInitialModuleScreenSetAsRoot()    ← final hook before the main menu
    │
    ▼
        Main menu loop
        │
        ▼
OnGameStart(game, starter)                ← register campaign / mission behaviors
    │
    ▼
InitializeGameStarter(game, starter)
    │
    ├── OnNewGameCreated()                ← new-game setup
    └── OnGameLoaded()                    ← save restore
        │
        ▼
OnApplicationTick(dt)                     ← frame update
```

---

## Hook guide

| Hook | Typical use | Example |
|------|-------------|---------|
| `OnSubModuleLoad` | Load config, apply Harmony patches, set up XML hotload | Global behavior mods |
| `OnGameStart` | Grab `CampaignGameStarter` and register behaviors | Campaign or mission logic mods |
| `OnNewGameCreated` / `OnGameLoaded` | One-off initialization after behaviors are registered | Add custom hero attributes |
| `OnApplicationTick` | Rare; prefer behavior ticks | Logging, hotkey polling |
| `OnBeforeMissionBehaviorInitialize` | Inject mission settings before behavior setup | Custom combat rules |

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

Gauntlet UI is driven by `GauntletMovie` + `ViewModel`. You normally open a screen with `ScreenManager.PushScreen` or register a layer from an entry point. See the [Gauntlet UI guide](../../../../v1.3.15/en/guide/gauntlet-ui/) and the [`ViewModel`](../../api/core-extra/ViewModel/) page.

---

## SubModule.xml, the mod identity card

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
| `Id` / `Name` | Unique identifier and display name | First things to check if a module does not appear |
| `DependedModules` | Topological dependency sort; missing deps disable the module | Check the launcher log |
| `SubModuleClassType` | Full name of the `MBSubModuleBase` subclass | Must match namespace and class exactly |
| `DLLName` | DLL filename relative to the module `bin/` folder | Verify the build output is there |
| `Tags` | Platform and mode filtering | Wrong `ExclusivePlatform` prevents loading |

---

## Loading flow

```
Module.Initialize()
    ├── ModuleHelper.InitializeModules()   ← parse every SubModule.xml
    ├── LoadSubModules()                   ← load DLLs in dependency order
    │       └── create MBSubModuleBase instances
    ├── FindMissions()
    └── SaveManager.InitializeGlobalDefinitionContext()
    │
    ▼
SetInitialModuleScreenAsRoot()
    └── call OnBeforeInitialModuleScreenSetAsRoot()
```

**Startup failures**: inspect `rgl_log.txt` for `Module`/`ModuleHelper` errors. Most failures come from missing dependencies or a mismatched `SubModuleClassType`.

---

## Key classes

| Class | Responsibility | Common scenario |
|-------|----------------|-----------------|
| `MBSubModuleBase` | Mod lifecycle entry | First step of every mod |
| `Module` | Central coordinator | Diagnosing startup failures |
| `ModuleHelper` | Module lookup and topological sort | Understanding load order |
| `ModuleInfo` | Per-module metadata | Reading dependencies at runtime |
| `CampaignGameStarter` | Campaign starter | Registering `CampaignBehaviorBase` |
| `CampaignBehaviorBase` | Campaign daily logic | [Cross-version page](../../../../versions/CampaignBehaviorBase/) |
| `MissionBehavior` | Mission and combat logic | [Cross-version page](../../../../versions/MissionBehavior/) |
| `ViewModel` | UI data binding | [API catalog](../../api/viewmodel/) |

---

## See also

- [SDK overview](../sdk-overview/) — the full v1.3.0 module map
- [Save system](../save-system/) — persisting behavior data
- [Version delta](../version-delta/) — what changes in v1.3.15 and v1.4.5
- [Campaign guide](../../../../v1.3.15/en/guide/campaign-system/) · [Mission guide](../../../../v1.3.15/en/guide/mission-system/) · [Gauntlet UI guide](../../../../v1.3.15/en/guide/gauntlet-ui/)
