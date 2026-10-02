---
title: "Campaign"
description: "The root aggregate of the campaign map world (a GameType subclass): map geometry and speed constants, every subsystem Manager, the Behavior and EntityComponent registries, the player party, and the boundary between the map layer and the battle layer. The one entry point for reading campaign state."
---
# Campaign

**Namespace:** `TaleWorlds.CampaignSystem`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class Campaign : GameType`
**Base:** `TaleWorlds.Core.GameType`
**Source:** `TaleWorlds.CampaignSystem/Campaign.cs` (declared at line 42)

## Overview

`Campaign` is the root aggregate of the whole campaign map world, and one of the four layers of the engine's architecture. At the bottom sits `Core`, which provides clocks, text and the object system shared across modes. Above it, `TaleWorlds.MountAndBlade` holds the battle and mission runtime. Above that, `Campaign` carries the strategic state of the world map. The outermost layer is `Game`, whose `GameType` in campaign mode *is* this class, and which owns menus, saves, loading and overall game lifecycle. A `Campaign` instance is created by the engine — mods never `new` one; the only entry point is the static `Campaign.Current`.

It carries four kinds of responsibility. First, **map geometry and speed constants** (`MapDiagonal`, `MapMinimumPosition`, `AverageWage`, `Estimated*PartySpeed`). Second, **the holder of every subsystem Manager** — `FactionManager`, `QuestManager`, `MapEventManager`, `SiegeEventManager`, `KingdomManager`, `GameMenuManager` and well over a hundred more read-only properties. Third, **the extension registries** for Behaviors, EntityComponents, custom Managers and CampaignEventReceivers. Fourth, **the player and save handles** (`MainParty`, `SaveHandler`; the actual save calls live in the `Game` layer). The line between "this belongs to the map" and "this belongs to the fight" runs straight through this class: towns, parties, kingdoms and diplomacy belong to `Campaign`; Agents, projectiles and hit resolution belong to `Mission`.

## Mental Model

Treat `Campaign` as a **service locator plus the single source of truth for the campaign layer**, not as a bag of fields you can poke at freely. The order a modder should always follow:

1. **Check it exists before you take it.** `Campaign.Current` is non-null only after a campaign has finished loading. It is null in the main menu, during module loading, while a save is being read, and after `Game.OnDestroy`. Every entry point needs `if (Campaign.Current == null) return;`. Never cache it into a static field or evaluate it in a constructor.
2. **Take, never construct.** The constructor is `public Campaign(CampaignGameMode gameMode)`, but that is an engine path. Mods obtain the reference through `Game.Current.GameType` or an [MBSubModuleBase](../../core/MBSubModuleBase) callback.
3. **Register extensions only at the designated moment.** Behaviors go in through [CampaignGameStarter](../CampaignGameStarter) via `AddBehavior` / `AddModel` / `AddGameMenu`. EntityComponents are attached with `AddEntityComponent<T>()` and **must be removed with `RemoveEntityComponent<T>()` before saving**, or the save will hold references to objects that are already gone.
4. **Managers are for reading; mutate through system actions.** `FactionManager`, `QuestManager` and friends are the authoritative read surface. To change the world, go through the relevant Behavior or a `Campaign.ActionManager` action so events get broadcast. Writing fields directly bypasses events, and the UI and the save then disagree with your code.

The common mistakes: treating `Campaign.Current` as a constructor argument evaluated too early; hammering it from a `Mission` tick (the battle layer already has `Mission.Current`, and crossing layers casually is a bug source); doing real work inside `RegisterEvents`, when many Managers are still being assembled; and forgetting to remove EntityComponents.

## When to Use / When Not To

- **Use**: to read any Manager (`Campaign.Current.FactionManager`, `QuestManager`, `MapEventManager`, `SiegeEventManager`, `KingdomManager`); to obtain a Behavior via `GetCampaignBehavior<T>()`; to attach a custom Manager with `AddCustomManager<T>()`; to read and write map speed constants; to control time flow via `SetTimeSpeed` and `SetTimeControlModeLock`.
- **Use (as a gate)**: inside `MBSubModuleBase` lifecycle callbacks, `Campaign.Current != null` is the most direct test for "are we in a campaign right now".
- **Don't**: `new Campaign(...)`. Don't forget to remove EntityComponents before saving. Don't carry mission-scoped objects out of a mission — when a mission ends `Mission.Current` goes null while `Campaign.Current` usually stays valid, and that asymmetry is exactly where bugs come from.
- **Don't**: make formal decisions on internal debug switches such as `IsMainHeroDisguised` or `EnabledCheatsBefore`. They are engine state bits, not a stable contract for mods.

## Member Guide

`Campaign` exposes more than 130 public members. Grouped by how a modder actually uses them.

### 1. Global entry point and map constants

| Member | What it is for, side effects, timing |
| --- | --- |
| `static Campaign Current` | The live campaign root, assigned by the engine when loading finishes and cleared in `OnDestroy`. The **only** way in; null in every non-campaign context (main menu, module loading, lobby, mid-load). |
| `Campaign(CampaignGameMode gameMode)` | Constructor, engine-only. `gameMode` decides which Manager and Behavior set gets assembled afterwards. |
| `GameType` (inherited) | `Campaign` *is* a game type; `Game.GameType` points at this instance in campaign mode. `Game` has no English page — the Chinese [zh `Game`](../../../../zh/api/core-extra/Game) is the only one on disk. This is how you test "am I in a campaign". |
| `static float MapDiagonal` / `MapDiagonalSquared` | Map diagonal and its square, used to convert normalised coordinates into distances. Any mod doing distance comparisons must use this pair rather than a hardcoded map size. |
| `static Vec2 MapMinimumPosition` / `MapMaximumPosition` / `static float MapMaximumHeight` | The map bounding box. Use it to test whether a coordinate is off-map or to clamp world positions back inside. |
| `AverageWage`, `EstimatedMaximumLordPartySpeedExceptPlayer`, `EstimatedAverageLordPartySpeed`, `EstimatedAverageCaravanPartySpeed`, `EstimatedAverageVillagerPartySpeed`, `EstimatedAverageBanditPartySpeed`, `EstimatedAverageLordPartyNavalSpeed`, `EstimatedAverageCaravanPartyNavalSpeed`, `EstimatedAverageVillagerPartyNavalSpeed`, `EstimatedAverageBanditPartyNavalSpeed` | Economic and AI speed estimates. `AverageWage` is derived from lord wage models and drives economy UI; `Estimated*PartySpeed` are back-computed from party components and are what AI and distance prediction depend on. All are **writable** — slots the engine fills for internal modules. Generally leave them alone. |

### 2. Subsystem Managers (read-only holders)

This group is the reason `Campaign` exists. Every one of them is a `{ get; private set; }` property assembled during initialization.

| Member | What it is for, side effects, timing |
| --- | --- |
| `FactionManager` | The registry of every [IFaction](../IFaction) implementation: look up factions, create new ones, drive their lifecycle. |
| `KingdomManager` | Kingdom registry; diplomacy and kingdom decisions are driven by the Behaviors behind it. |
| `QuestManager` / `IssueManager` | Runtime containers for quests and issues. Add quests through `QuestManager`; do not construct a `QuestBase` and attach it yourself. |
| `MapEventManager` / `SiegeEventManager` | Registries for map encounters and sieges; they coordinate the corresponding `Mission` once you enter one. |
| `MapMarkerManager` | Map markers (icon points). |
| `MapStateData` | Fog-of-war / known-area state, controlling which cells the player can see. |
| `SaveHandler` | The campaign's save hook, pulling campaign-specific objects into the save. Custom mod data belongs in a Behavior's `SyncData`, not in a hand-written file. |
| `CampaignObjectManager` | The campaign layer's own MBObjectManager branch, for campaign objects that skip generic XML registration. |
| `GameMenuManager` / `GameMenuCallbackManager` | The menu system; menus injected via `CampaignGameStarter.AddGameMenu` are ultimately hosted here. |
| `ConversationManager` | The conversation system; the target of `CampaignGameStarter.AddDialogFlow`. |
| `SandBoxManager` | Sandbox-only manager (non-null in sandbox campaigns only), such as quest progression tuning. |
| `TournamentManager` | Tournament manager. |
| `CharacterRelationManager` | Relationship (liking / animosity) statistics. |
| `Romance` / `PlayerCaptivity` / `PlayerEncounter` / `BarterManager` | Courtship, captivity, encounter state and barter. |
| `MapSceneCreator` (writable) | Builder for the 3D map scene; replaceable. |
| `VisualCreator` / `VisualTrackerManager` / `CampaignInformationManager` / `EncyclopediaManager` | Visual resource creation, visual tracking, the information panel and the encyclopedia. |
| `SkillLevelingManager` / `CampaignMissionManager` (both writable) | Skill progression and the scheduling of transitions from campaign into a mission. |
| `DefaultPerks`, `DefaultTraits`, `DefaultPolicies`, `DefaultBuildingTypes`, `DefaultIssueEffects`, `DefaultItems`, `DefaultFigureheads`, `DefaultSiegeStrategies`, `DefaultSkillEffects`, `DefaultVillageTypes`, `DefaultCulturalFeats` | "Default value containers": they organise static definitions declared in XML (perks, traits, policies, items, buildings, …) and provide lookup by name. Use them to resolve a definition instead of walking XML yourself. |
| `GameMenuCallbackManager`, `DeadBattleEquipment`, `DeadCivilianEquipment`, `DefaultStealthEquipment` | Death equipment for combatants and civilians, plus the default stealth kit. The stealth flow depends on `DefaultStealthEquipment`. |

### 3. Behavior / Manager / Receiver registries

| Member | What it is for, side effects, timing |
| --- | --- |
| `T GetCampaignBehavior<T>()` | Fetch a Behavior by type. **Returns null when it was never registered** rather than throwing — this is the single most common NRE source in modded campaigns. |
| `IEnumerable<T> GetCampaignBehaviors<T>()` | Fetch every instance of a type. Use it when several Behaviors of the same type can coexist, such as alliance Behaviors. |
| `void AddCampaignBehaviorManager(ICampaignBehaviorManager manager)` | Registers a Manager directly as a Behavior (internally through `CampaignBehaviorManager`). Normal mods use `CampaignGameStarter.AddBehavior`; reach for this when you need dynamic addition outside a Behavior. |
| `void AddCampaignEventReceiver(CampaignEventReceiver receiver)` | Registers a global event receiver whose every `override OnXxx` gets called at the matching moment. |
| `T AddCustomManager<T>() where T : ICustomSystemManager, new()` | Creates and attaches a custom system Manager to the campaign. |
| `T GetCustomManager<T>()` | Retrieves one; returns null if it was never created. |

### 4. EntityComponent extension slots

| Member | What it is for, side effects, timing |
| --- | --- |
| `TComponent AddEntityComponent<TComponent>() where TComponent : CampaignEntityComponent, new()` | Creates and attaches a component. **Remove it before saving**, otherwise the save carries a reference to a live object. |
| `TComponent GetEntityComponent<TComponent>()` | Fetch an attached component; null when absent. |
| `List<TComponent> GetComponents<TComponent>()` | Enumerate every component of that type. |
| `void RemoveEntityComponent<TComponent>()` / `RemoveEntityComponent<TComponent>(TComponent component)` | Detach a component (at end of life, or when cleaning up after a load). |

### 5. Player and progression

| Member | What it is for, side effects, timing |
| --- | --- |
| `MainParty` | The player's party, the anchor for all party logic. It still exists while the player is "not on the map" (e.g. inside a battle), but `MainParty.MainAgent` is null then. |
| `void InitializeMainParty()` | Initialises the player party after character creation. Engine-driven; mods replaying a custom player character may need it. |
| `bool OnPlayerCharacterChanged(out bool isMainPartyChanged)` | Reinitialisation hook after a player-character swap. |
| `void SetPlayerFormationPreference(CharacterObject character, FormationClass formation)` | Records "when the player uses this character, default to this formation". |
| `PlayerFormationPreferences` | The read-only dictionary backing that preference. |
| `PlayerTraitDeveloper` | Developer used for special player traits (trait-balance mods). |
| `void UnlockFigurehead(Figurehead figurehead)` | Unlocks a ship figurehead; the `UnlockedFigureheadsByMainHero` field keeps the record. |
| `PlayerProgress`, `int CurrentTickCount`, `bool GameStarted` | Campaign progress, ticks elapsed, and whether play has actually begun. `GameStarted` is the usual way to tell "freshly constructed campaign" from "interactive campaign". |
| `bool IsMainHeroDisguised` (writable) | Whether the player is disguised — the stealth track. |
| `bool EnabledCheatsBefore` (writable) | Engine internal: whether cheats were on before entering the campaign. **Do not depend on it.** |
| `bool TrueSight`, `bool IsMapTooltipLongForm`, `bool IsCraftingEnabled`, `bool IsBannerEditorEnabled`, `bool IsFaceGenEnabled` (all writable) | Feature switches. Setting `IsFaceGenEnabled = false` is the most direct way to skip the face-generation stage and drop straight into the campaign. |

### 6. Time control and load lifecycle

| Member | What it is for, side effects, timing |
| --- | --- |
| `void SetTimeSpeed(int speed)` | Sets the time-flow step (0 = paused, positive = advance rate). The UI time control goes through this. |
| `float SpeedUpMultiplier` (writable, 4f by default) | Fast-forward multiplier used when translating a "speed up" selection into `SetTimeSpeed`. |
| `bool TimeControlModeLock` / `void SetTimeControlModeLock(bool isLocked)` | Time-control lock: while locked the player cannot change speed (used by scripted sequences). |
| `CampaignTimeControlMode GetSimplifiedTimeControlMode()` | Normalises the current time mode so you can ask "interactive / read-only / locked". |
| `LastTimeControlMode` (field) | The previous time mode, used when restoring. |
| `void SetLoadingParameters(GameLoadingType gameLoadingType)` | Declares whether this run is a new campaign or a load; drives registration and load branches. |
| `void InitializeSinglePlayerReferences()` / `InitializeGamePlayReferences()` / `InitializeParameters()` | Staged reference assembly. Overrides **must call `base`**, or engine-held references never get initialised. |
| `override void BeforeRegisterTypes(MBObjectManager objectManager)` / `override void OnRegisterTypes(MBObjectManager objectManager)` | MBObject type registration hooks; register your own MBObject types here. |
| `override GameTypeLoadingStates DoLoadingForGameType(GameTypeLoadingStates gameTypeLoadingState, out GameTypeLoadingStates nextState)` | The load-time state machine. Return the next state; do not run long jobs in here. |
| `override void OnMissionIsStarting(string missionName, MissionInitializerRecord rec)` | Hook fired as the campaign transitions into a mission. |
| `override void OnStateChanged(GameState oldState)` / `override void OnDestroy()` | Game-state change and destruction. `OnDestroy` is your last chance to clear statics and drop event subscriptions. |
| `void OnGameOver()` | Campaign-failure handling. |
| `void WaitAsyncTasks()` | Waits for outstanding async work so scene switches don't race. |
| `static void LateAITick()` | The campaign AI's late tick, invoked by the engine after the main tick. Do not call it yourself. |
| `const float ConfigTimeMultiplier = 0.25f`, static fields `PlayerRegionSwitchCostFromLandToSea`, `PathFindingMaxCostLimit` | Balance and pathfinding constants. Raising `PathFindingMaxCostLimit` widens reachable area at the cost of speed. |
| Fields `Options` (readonly `CampaignOptions`), `ITask CampaignLateAITickTask`, `MinSettlementX/MaxSettlementX/MinSettlementY/MaxSettlementY`, `IsSinglePlayerReferencesInitialized`, `MainHeroIllDays`, `DefaultWeatherNodeDimension`, `CurrentConversationContext` | Runtime configuration and state bits. `MainHeroIllDays` tracks the hero's illness days (reputation mods read it); `Options` carries global gameplay toggles. |

## Examples

### Example 1: Reading campaign state safely after a mission ends

When a mission is destroyed `Mission.Current` is already null, while `Campaign.Current` usually survives — provided you really are in a campaign. Check for null first, and do not stash a `Campaign` reference inside a mission object.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.MountAndBlade;

// In any module lifecycle callback: null-check first, then use
if (Campaign.Current == null)
{
    return;                       // main menu / loading / campaign not built yet
}

var factions = Campaign.Current.FactionManager;        // IFaction registry
var quests    = Campaign.Current.QuestManager;         // quest runtime
var behaviors = Campaign.Current.GetCampaignBehaviors<IUIPrerequisite>(); // every Behavior of that type
```

### Example 2: Reading Behaviors and map constants

`GetCampaignBehavior<T>()` returns null when nothing is registered, so null-check it.

```csharp
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;

if (Campaign.Current == null) return;

var alliance = Campaign.Current.GetCampaignBehavior<IAllianceCampaignBehavior>();
if (alliance != null && Hero.MainHero.Kingdom != null)
{
    bool allied = Hero.MainHero.Kingdom.IsAllyWith(Hero.MainHero.Clan);
}

// Map geometry: is this coordinate still on the map?
Vec2 min = Campaign.MapMinimumPosition;
Vec2 max = Campaign.MapMaximumPosition;
bool insideMap = Hero.MainHero.Position.x >= min.x && Hero.MainHero.Position.x <= max.x
              && Hero.MainHero.Position.y >= min.y && Hero.MainHero.Position.y <= max.y;
```

### Example 3: Attaching an EntityComponent and removing it before saving

EntityComponents end up in the save, so they must be detached before the campaign ends or a save is taken.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;

// The type below is the reader's own, not game API.
public class MyProgressionTracker : CampaignEntityComponent
{
    private int _visitedCount;

    public int VisitedCount => _visitedCount;

    public void MarkVisit(Settlement settlement)
    {
        _visitedCount++;
    }
}

// Attach (must happen after Campaign initialisation)
var tracker = Campaign.Current.AddEntityComponent<MyProgressionTracker>();

// Use it (MarkVisit is a method on the example class above, not on the engine)
tracker.MarkVisit(Hero.MainHero.HomeSettlement);

// Detach before saving / before the campaign ends, so no dangling component is serialised
Campaign.Current.RemoveEntityComponent<MyProgressionTracker>();
```

## Risks and Boundaries

- **The `Campaign.Current == null` window**: main menu, module loading, save reading, and everything after `OnDestroy`. Caching it in a static field is the most common 1.4.x crash source, because it turns a "exists only while loaded" object into a "always exists" assumption.
- **Single-thread assumption**: `Campaign` and every Manager on it are touched from the main game thread. In multiplayer, data arriving on the network thread must be hopped to the main thread before touching `Campaign`, or you will collide with a collection mid-enumeration.
- **Save ordering**: `SaveHandler` and each Behavior's `SyncData` run at save time; EntityComponent state must be reconciled before that. During load, `GetCampaignBehavior<T>()` returns null until all Behaviors are added, so never call `GetCampaignBehavior` on another Behavior from inside `SyncData`.
- **Coupling to the load state machine**: overriding `DoLoadingForGameType` or `InitializeGamePlayReferences` without calling `base` leaves engine references uninitialised. The symptom is a null Manager deep inside the campaign rather than an immediate error.
- **Battle-layer coupling**: `Campaign` and `Mission` are separate lifecycles. When a mission ends `Mission.Current` goes null, and every `Agent`, `MissionAgentHandler` and `MissionWeapon` obtained from it becomes invalid. Never hold those across a mission boundary.
- **Constants are not configuration**: `AverageWage`, `Estimated*PartySpeed`, `PlayerRegionSwitchCostFromLandToSea` and `PathFindingMaxCostLimit` are internal balance values; changing them makes official content and modded content behave unpredictably.
- **Public fields carry no compatibility promise**: fields like `MinSettlementX`, `UnlockedFigureheadsByMainHero` and `LastTimeControlMode` must be re-checked against decompiled sources before you port anything across versions.

## Dependencies

- Upstream / providers:
  - `Game` holds `Game.GameTypeManager`, which is this `Campaign` instance in campaign mode, and drives its `OnDestroy` / `OnStateChanged`. ([zh `Game`](../../../../zh/api/core-extra/Game) — no English page.)
  - [MBSubModuleBase](../../core/MBSubModuleBase) hands the `IGameStarter` (concretely a [CampaignGameStarter](../CampaignGameStarter)) to mods via `OnGameStart(game, gameStarterObject)` so they can register Behaviors and menus.
  - [MBObjectManager](../../campaign-ext/MBObjectManager) receives the type registrations requested by `Campaign.OnRegisterTypes`.
- Peers / downstream:
  - [CampaignBehaviorBase](../CampaignBehaviorBase) is the extension base that hangs off `Campaign`; [CampaignEvents](../CampaignEvents) is the only broadcast channel for campaign-layer events; [CampaignGameStarter](../CampaignGameStarter) is the official builder used to feed Behaviors, models and menus into `Campaign`.
  - [IFaction](../IFaction) is the uniform read-only view of factions (Clan / Kingdom) held by `FactionManager`.
  - `MissionState` and `Mission` are the battle layer, scheduled into by `CampaignMissionManager` when you leave the map. Neither has an English page; [zh `MissionState`](../../../../zh/api/mission/MissionState) and [zh `Mission`](../../../../zh/api/mission/Mission) are the only ones on disk.
  - `SaveManager` is the static save façade; it ultimately lands campaign data through `Campaign.SaveHandler`. ([zh `SaveManager`](../../../../zh/api/save-system/SaveManager) — no English page.)

## See Also

- ↑ Parent: [Campaign API index](../)
- ↔ Related: [CampaignBehaviorBase](../CampaignBehaviorBase) · [CampaignEvents](../CampaignEvents) · [CampaignGameStarter](../CampaignGameStarter) · [IFaction](../IFaction) · [MBSubModuleBase](../../core/MBSubModuleBase) · zh [Game](../../../../zh/api/core-extra/Game) · zh [MissionState](../../../../zh/api/mission/MissionState) · zh [SaveManager](../../../../zh/api/save-system/SaveManager) (the three `zh` entries have no English pages; see [the gap list](../../../../GAPS))