---
title: "Module System — how Module and MBSubModuleBase load"
description: "How v1.4.7 Module enumerates submodules, what each of the 29 MBSubModuleBase lifecycle callbacks fires at, and which ones a mod should override."
---
# Module System — how Module and MBSubModuleBase load

## Mental model

There is exactly one real entry point at launch: `Module`. It is a `sealed class` created by the
engine side, which then scans disk, instantiates every `MBSubModuleBase` subclass it finds, and
calls them **in load order**. Your mod is one such subclass.

Keep two timelines apart:

- **`Module` (the host)** — exactly one instance; enumerates, creates, drives. You do not inherit it
  and should not touch it.
- **`MBSubModuleBase` (what you inherit)** — one instance per mod; 29 callbacks span load to unload.

## Module's real surface

Selected public members from `TaleWorlds.MountAndBlade/Module.cs`:

| Member | Type | Role |
| --- | --- | --- |
| `Module.CurrentModule` | `static Module` | the single host instance |
| `Module.GlobalGameStateManager` | `GameStateManager` | top-level state machine; the screen stack hangs off it |
| `Module.StartupInfo` | `GameStartupInfo` | launch parameters, decide which modules load |
| `Module.CollectSubModules()` | `MBReadOnlyList<MBSubModuleBase>` | registered submodules |
| `Module.CheckIfSubmoduleCanBeLoadable(SubModuleInfo)` | `bool` | can this module load under the current launch parameters |
| `Module.ActivateModule(string)` / `DeactiveModule(string)` | `void` | workshop-style module toggles |
| `Module.GetSubModuleType(string)` | `Type` | resolve a submodule type by name |
| `Module.GetInitialStateOptions()` | `IEnumerable<InitialStateOption>` | command-line / startup options |

Most of `Module` is `internal`. **Only the handful above are for you.** If your code depends on a
private member of `Module`, it will break on a different game version.

## Choosing a callback for your SubModule

All 29 `virtual` callbacks on `MBSubModuleBase` (from `MBSubModuleBase.cs`), grouped by phase.
**Override only the two or three you actually need**; leave the rest at their defaults.

### Phase A — loading

| Callback | When | Typical use |
| --- | --- | --- |
| `OnSubModuleLoad()` | Module read in; other modules may not be loaded yet | Register types, read your own config. **Do not touch `Campaign.Current` here.** |
| `RegisterSubModuleTypes()` | same moment, slightly later | Push your types into the engine's type table |
| `OnNewModuleLoad()` | All modules loaded | now safe to reach other submodules |

### Phase B — startup

| Callback | When | Typical use |
| --- | --- | --- |
| `OnBeforeGameStart(MBGameManager, List<string> disabledModules)` | Before the game starts | See which modules are off and disable your features to match |
| `OnGameStart(Game, IGameStarter)` | Game instance available | Take the `IGameStarter` and hand it down |
| `InitializeGameStarter(Game, IGameStarter)` | Earlier; campaign and UI not built yet | **Campaign mods call `starter.AddBehavior(new MyBehavior())` here** |
| `DoLoading(Game)` | returns `bool` | return `true` if you own the next loading phase |
| `BeginGameStart(Game)` | Loading finished | the heavy work goes here |

### Phase C — campaign

| Callback | Typical use |
| --- | --- |
| `OnCampaignStart(Game, object starterObject)` | Campaign is up; `Campaign.Current` is safe |
| `RegisterSubModuleObjects(bool isSavedCampaign)` | register objects that need saving |
| `OnGameLoaded(Game, object)` / `OnNewGameCreated(Game, object)` | distinguish load from new game |
| `OnAfterGameLoaded(Game)` / `OnGameInitializationFinished(Game)` | final wiring |

### Phase D — per-frame and battle

| Callback | Frequency | Caution |
| --- | --- | --- |
| `OnApplicationTick(float dt)` | every frame | the easiest place to write a performance bug. **Use only if needed and throttle yourself** |
| `AfterAsyncTickTick(float dt)` | every frame, async phase | only when you must run after the main tick |
| `OnMissionBehaviorInitialize(Mission)` / `OnBeforeMissionBehaviorInitialize(Mission)` | per battle | this is where `mission.AddMissionBehavior` belongs |
| `OnNetworkTick(float dt)` | network frames | single-player mods ignore it |

### Phase E — teardown

| Callback | Use |
| --- | --- |
| `OnGameEnd(Game)` | battle or campaign finished |
| `OnSubModuleUnloaded()` | module unloaded; clear static state |
| `OnSubModuleActivated()` / `OnSubModuleDeactivated()` | module toggled on/off |

## A working minimal SubModule

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

namespace MyMod
{
    // Campaign behaviour as its own class, implementing ICampaignBehavior
    public class MyCampaignBehavior : CampaignBehaviorBase
    {
        public override void RegisterEvents(CampaignEvents campaignEvents)
        {
            // Listen only. To change state, raise a CampaignEvent and let an
            // Action apply it.
            // MBCampaignEvent.AddHandler takes a CampaignEventDelegate:
            // void (MBCampaignEvent campaignEvent, params object[] delegateParams)
            campaignEvents.HourlyTickEvent.AddHandler(OnHourlyTick);
        }

        private static void OnHourlyTick(MBCampaignEvent campaignEvent, params object[] delegateParams)
        {
            // To change gold / relations / parties, raise a custom CampaignEvent
            // here; a Behaviour or a built-in *Action applies the change.
        }

        public override void SyncData(IDataStore dataStore)
        {
            // Your fields: read when dataStore.IsLoading(), otherwise write.
            dataStore.SyncData("myModEnabled", ref myModEnabled);
        }

        private bool myModEnabled = true;
    }

    public class MySubModule : MBSubModuleBase
    {
        // The recommended place for campaign registration
        public override void InitializeGameStarter(Game game, IGameStarter starterObject)
        {
            base.InitializeGameStarter(game, starterObject);
            CampaignGameStarter campaignStarter = (CampaignGameStarter)starterObject;
            campaignStarter.AddBehavior(new MyCampaignBehavior());
        }

        // Override only if you really need per-frame logic
        public override void OnApplicationTick(float dt)
        {
        }
    }
}
```

`CampaignGameStarter.AddBehavior` is called on **both** load and new-game, so a behaviour
registered there needs no scenario check of its own. That is exactly why it is recommended. If you
do need to branch, read `Campaign.Current.GameMode` inside the behaviour, or override
`OnGameLoaded` / `OnNewGameCreated`.

## Three classic traps

1. **Touching `Campaign.Current` in `OnSubModuleLoad()`.** The campaign layer does not exist yet —
   null reference. Wait at least until `OnCampaignStart` or `InitializeGameStarter`.
2. **Heavy work in a per-frame callback.** `OnApplicationTick` runs for every loaded module.
   Reflection, database reads or a full-village loop inside it shows up directly as a frame-rate
   drop. Measure before you ship it.
3. **Validation inside `SyncData`.** Ordering during load is unstable (other objects may not be
   restored yet). Do migrations and validation in `OnAfterGameLoaded`.

## See also

- ↔ [SDK Overview](../sdk-overview) · [Architecture hub](../)
- ↘ [Save System](../save-system) — when `SyncData` is not enough
- ↘ [UI Stack](../ui-stack) — where a campaign-phase screen belongs
- ↑ [Core](../../api/core/) · [Campaign-Ext](../../api/campaign-ext/) · [ModuleManager](../../api/modulemanager/)