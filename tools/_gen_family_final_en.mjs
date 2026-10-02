// English twin of _gen_family_final.mjs.
// Mirrors the proven zh family-_index generation strategy (transcribing the same
// understanding, not regenerating shells) but emits EN prose and targets the en api root.
// Reads the en R1 gap file + _gap_bases.json; buckets every gap namespace into a
// dedicated group (or catch-all) and writes content/v1.4.5/en/api/final/<slug>/_index.md.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { extractFamilyEntries } from './lib/handwritten-policy.mjs';

const ROOT = 'C:/WorkSpace/Bannerlord/BannerlordCode.github.io';
const API = join(ROOT, 'content/v1.4.5/en/api');
const _gapsRaw = JSON.parse(readFileSync(join(ROOT, 'tools/_current-r1-gaps-145-en.json'), 'utf8'));
const gaps = Array.isArray(_gapsRaw) ? _gapsRaw : (_gapsRaw.gaps || _gapsRaw.allGaps || []);
const baseMap = (() => {
  const arr = JSON.parse(readFileSync(join(ROOT, 'tools/_gap_bases.json'), 'utf8'));
  const a = Array.isArray(arr) ? arr : (arr.gaps || arr.allGaps || []);
  const m = new Map();
  for (const x of a) m.set(`${x.namespace}\0${x.typeName}`, x.base || '');
  return m;
})();

// English purpose by base class / type name (deliberately varied, never "is a public type").
function roleFor(typeName, base, ns) {
  const b = (base && base !== '(none)') ? base : '';
  const t = typeName || '';
  if (/MissionView/i.test(b) || /MissionView/i.test(t)) return 'Battle-scene visual view that subscribes to Mission events and refreshes the presentation layer (camera, VFX, HUD overlays) from game state every tick. Views read state and never write rules.';
  if (/ViewModel/i.test(b) || /VM$/i.test(t) || /ViewModel/i.test(t)) return 'Gauntlet UI data view-model that exposes properties and commands to the interface, reacts to input and notifies refreshes. A VM is only a projection of state; commands should only trigger Actions or Behaviors.';
  if (/CampaignBehavior/i.test(b) || /CampaignBehavior/i.test(t)) return 'Campaign-system behavior that listens to global events to drive that system’s initialization and periodic updates. It is the main entry point for mods to inject gameplay; do not mutate world state directly outside a behavior.';
  if (/AgentBehavior/i.test(b) || /AgentBehavior/i.test(t)) return 'Battle agent AI behavior that makes decisions and executes actions inside a Mission. Its lifetime follows the Agent’s life and death; you must clean up after the Agent dies.';
  if (/MissionLogic/i.test(b) || /MissionLogic/i.test(t)) return 'Mission logic that defines the flow and win/lose conditions of that mission, assembled by the Mission on load. Win/lose resolution must be idempotent — repeated triggers must not double-settle.';
  if (/MissionBehavior/i.test(b) || /MissionBehavior/i.test(t)) return 'Mission behavior that listens to mission events to drive logic; pairs with MissionLogic for presentation and interaction wiring.';
  if (/Behaviour/i.test(b)) return 'Behavior base class with overridable lifecycle hooks such as OnMissionTick / OnBehaviourInitialize.';
  if (/Usable/i.test(b) || /Usable/i.test(t)) return 'Scene usable object that triggers an action or menu when the player interacts with it. Interaction must be idempotent and its state must be serializable to support saving.';
  if (/ScreenBase|GauntletLayer|ScreenManager/i.test(b)) return 'Interface screen / layer base class that hosts Gauntlet UI display and input. Commands only trigger Actions or Behaviors and never mutate state directly.';
  if (/ScriptComponentBehavior/i.test(b) || /ScriptComponent/i.test(t)) return 'Script component attached to a scene GameObject, exposing scene state to the logic layer. Depends on scene load order; fields are null before the scene is ready.';
  if (/Cheat/i.test(b) || /Cheat/i.test(t)) return 'Debug cheat item triggered via console or menu for development-time effects. Production builds should disable or stub it to avoid accidentally corrupting saves.';
  if (/GameComponent/i.test(b) || /GameComponent/i.test(t)) return 'Entity component attached to a GameObject, providing a specific capability. Component state must be serializable.';
  if (/MBSubModuleBase/i.test(b)) return 'Module entry base class that registers behaviors and override points. Its lifetime spans the whole session; do not fetch systems that are not yet ready (e.g. before loading) at the wrong phase.';
  if (/Mixin/i.test(b) || /Mixin/i.test(t)) return 'Mixin component that attaches cross-cutting capability to a host type. Avoid clashing with members the host already defines.';
  if (/Action$/i.test(b) || /Action$/i.test(t)) return 'Game action that encapsulates a single state change and executes it through the Action system. You must use Apply rather than mutating fields directly, otherwise you skip event cascades and corrupt saves.';
  if (/Model/i.test(b) || /Model/i.test(t)) return 'Domain model that aggregates rules and calculations for Behaviors to call. When you replace a model you must provide an equivalent contract; an empty replacement hands null to its dependents.';
  if (/TypeDefiner/i.test(b) || /TypeDefiner/i.test(t)) return 'Save-type definer that declares which fields of the type enter the save. Any new field must carry a default value, otherwise old saves fail to deserialize.';
  if (/Parameter|Param/i.test(t)) return 'Parameter container carrying configuration or runtime data. Avoid holding long-lived references that hinder GC.';
  if (/QuestTask|Task/i.test(t)) return 'Quest-stage sub-goal that defines one completion condition and settlement. Condition checks must be idempotent — repeated completion must not double-reward.';
  if (/AI/i.test(t) || /Brain/i.test(t)) return 'AI decision implementation that must be interruptible and serializable to support saving and undo. Search must be depth/time bounded to avoid stalls.';
  if (/Pawn/i.test(t)) return 'Board-game piece description with attributes and movement rules. State must be fully serializable to reconstruct the match.';
  if (/(Order|OrderSet|VisualOrder)/i.test(t)) return 'Battle order / formation sequence describing a unit’s formation and movement intent, interpreted and executed by the Order system.';
  if (/TextureProvider|Provider/i.test(t)) return 'Gauntlet image-source abstraction that resolves an entity/concept into an actual texture and caches it. The first frame may be empty; handle the loading state.';
  if (/MenuView/i.test(t)) return 'Menu interface view that organizes menu items and navigation. Interaction is surfaced via events; rules are not written in the view.';
  if (/(Selector|ItemVM)/i.test(t)) return 'Selector / list-item view-model carrying the data and highlight of one selectable option. Collection VMs should virtualize to control memory.';
  if (/Notification/i.test(t)) return 'Notification item type describing the data of one map/event prompt. It only carries display data; triggering logic lives in the Behavior.';
  if (/(Event|EventHandler)/i.test(t)) return 'Event or event handler carrying the data of something that happened once. Remember to unsubscribe on unload to avoid leaks.';
  if (/BattleScore/i.test(t)) return 'Battle scoring rule/data that tallies and settles combat performance score. Scoring must be reentrant to avoid mid-flight recomputation drift.';
  if (/Election/i.test(t)) return 'Election / voting mechanism used for collective decisions such as kingdom votes. Mind voting timing and tie handling.';
  if (/FastMode/i.test(t)) return 'Fast-simulation mode switch that skips the presentation layer to accelerate campaign advance. Logic must run correctly even without rendering.';
  if (/ComponentInterface/i.test(t)) return 'Component interface defining the contract for a cross-cutting capability that different implementations can replace.';
  if (/MapEvent|MapNavigation|NavigationElement/i.test(t)) return 'Campaign-map event / navigation element describing map topology or movement-related data structures. Changes must sync map logic and the navigation mesh.';
  if (/Conversation/i.test(t) || /Conversation/i.test(ns)) return 'Conversation-related type participating in the dialogue tree and performance. Dialogue-line changes must mind branches and localization.';
  if (/Issue/i.test(t) || /Issue/i.test(ns)) return 'Issue (lord/fief affair) related type describing an accept-and-settle fief problem. Completion must be idempotent.';
  if (/Tournament/i.test(t) || /Tournament/i.test(ns)) return 'Tournament-related type organizing event sign-up, brackets and reward settlement. State must be serializable.';
  if (/Helper/i.test(b) || /Helper/i.test(t) || /Helpers?$/i.test(ns)) return 'Static helper utility that concentrates a cross-cutting operation (open screen, compute result, resolve entity). Call it from the correct system context; do not instantiate it as stateful.';
  return 'A business type under this namespace that carries its derived convention responsibility. Confirm its lifecycle and owning system before calling; do not reference an unready instance at the wrong phase. World-state changes should go through the corresponding Action/Behavior, not direct field mutation.';
}

function timingFor(ns) {
  if (/Mission/i.test(ns)) return 'On battle/mission load';
  if (/Campaign|SandBox/i.test(ns)) return 'Campaign init';
  if (/GauntletUI|View/i.test(ns)) return 'On UI open';
  if (/StoryMode|Quest|Issue/i.test(ns)) return 'During story progress';
  if (/BoardGame/i.test(ns)) return 'During a board-game match';
  if (/Network|CustomBattle|Server/i.test(ns)) return 'During custom/multiplayer session';
  return 'Runtime';
}

// Only hubs verified to exist in content/v1.4.5/en/api are linked, to avoid broken links.
const SAFE = {
  api: ['../../_index', 'API Overview'],
  campaign: ['../../campaign/Campaign', 'Campaign'],
  mission: ['../../mission/Mission', 'Mission'],
  submodule: ['../../core/MBSubModuleBase', 'MBSubModuleBase'],
  vm: ['../../core-extra/ViewModel', 'ViewModel'],
  save: ['../../save-system/SaveManager', 'SaveManager'],
};

// Groups: first match wins. Specific namespaces first, coarse prefix catch-alls last.
const G = (slug, title, match, mental, usage, risk, deps) =>
  ({ slug, title, match, mental, usage, risk, deps });

const GROUPS = [
  G('campaign-behaviors', 'TaleWorlds.CampaignSystem.CampaignBehaviors — Campaign Behaviors',
    (ns) => ns === 'TaleWorlds.CampaignSystem.CampaignBehaviors' || ns === 'TaleWorlds.CampaignSystem.CampaignBehaviors.CommentBehaviors' || ns === 'TaleWorlds.CampaignSystem.CampaignBehaviors.AiBehaviors' || ns === 'TaleWorlds.CampaignSystem.CampaignBehaviors.BarterBehaviors',
    'CampaignBehaviors is the campaign-system layer where TaleWorlds and mods hook gameplay logic: settlement/party/diplomacy behaviors, AI party logic, comment behaviors, and barter behaviors. Each behavior listens to CampaignEvents and runs on the campaign tick; it is the primary injection point for mod gameplay and the place where world-state mutations must be channeled through Actions rather than direct field writes.',
    'When you need to react to a campaign event, add a daily/periodic tick, or inject a new campaign system, inherit CampaignBehaviorBase and register it in CampaignGameStarter. Keep all world mutations inside Actions.',
    'Behaviors live for the whole campaign but are loaded at a specific phase; querying systems that are not yet ready returns null. Mutating state outside an Action skips event cascades and can corrupt saves. Remember to unsubscribe on unload.',
    [SAFE.campaign, SAFE.submodule, SAFE.api]),

  G('issues', 'Issue Types (CampaignSystem.Issues & SandBox.Issues)',
    (ns) => ns === 'TaleWorlds.CampaignSystem.Issues' || ns === 'SandBox.Issues' || ns === 'SandBox.Issues.IssueQuestTasks' || ns === 'TaleWorlds.CampaignSystem.Issues.IssueQuestTasks',
    'Issues model the "lord/fief affairs" the player can take on and settle across the campaign map — from village needs to bandit problems. CampaignSystem.Issues holds the core issue contracts while SandBox.Issues provides concrete implementations and IssueQuestTasks are the per-issue completion steps. Issues are the canonical example of a self-contained, save-friendly quest-like workflow.',
    'To add a new fief problem, implement an Issue in SandBox.Issues (or its task steps) and register it with the issue system. Completion must be idempotent.',
    'Issue step completion must be idempotent; repeated triggers double-reward or desync state. New fields must carry a default value for save compatibility.',
    [SAFE.campaign, SAFE.api]),

  G('component-interfaces', 'TaleWorlds.CampaignSystem.ComponentInterfaces',
    (ns) => ns === 'TaleWorlds.CampaignSystem.ComponentInterfaces',
    'ComponentInterfaces defines the swappable contracts behind campaign-system capabilities (clan member roles, election outcomes, policy effects, etc.). They let different implementations be plugged in without changing the callers, which is how the game keeps its many optional systems decoupled.',
    'When you need a cross-cutting campaign capability that different modules may provide differently, implement the relevant ComponentInterface rather than hard-coding a concrete type.',
    'Interfaces are only as good as their registered implementation; calling a capability with no implementation yields null. Keep contracts minimal and stable across save versions.',
    [SAFE.campaign, SAFE.api]),

  G('game-components', 'GameComponents (CampaignSystem / SandBox / StoryMode)',
    (ns) => ns === 'TaleWorlds.CampaignSystem.GameComponents' || ns === 'SandBox.GameComponents' || ns === 'StoryMode.GameComponents' || ns === 'StoryMode.GameComponents.CampaignBehaviors',
    'GameComponents are components attached to game entities that grant a specific capability (scene object behavior, small gameplay gadgets). Composition over inheritance: components are decoupled from entities and reusable. State must be serializable.',
    'To attach a reusable capability to an entity, derive from the relevant GameComponent and mount it; components should not strongly depend on each other.',
    'Components depend on mount order; accessing one before it is mounted returns null. Their state must be serializable or the save cannot be restored. Release must pair with the entity lifecycle.',
    [SAFE.campaign, SAFE.api]),

  G('conversation', 'Conversation Types (CampaignSystem.Conversation & SandBox.Conversation)',
    (ns) => ns === 'TaleWorlds.CampaignSystem.Conversation.Tags' || ns === 'TaleWorlds.CampaignSystem.Conversation' || ns === 'TaleWorlds.CampaignSystem.Conversation.Persuasion' || ns === 'SandBox.Conversation' || ns === 'SandBox.Conversation.MissionLogics',
    'Conversation types organize NPC interaction into branchable, localizable dialogue flows and the persuasion minigame. Conversation.Tags classify dialogue lines and Persuasion implements the barter/persuade mechanic; SandBox.Conversation adds the in-mission dialogue logic. They are triggered by MissionBehavior at the right scene.',
    'To extend NPC dialogue lines or in-mission conversation performance, derive from the relevant conversation type and wire it into the conversation system. Keep branches and localization complete.',
    'Dialogue-line changes must close branches and stay localized. Conversation logic depends on listener registration order; if not registered, the dialogue never fires. State changes inside dialogue must go through Actions/Behaviors, not direct field writes.',
    [SAFE.campaign, SAFE.api]),

  G('actions', 'TaleWorlds.CampaignSystem.Actions — Campaign Actions',
    (ns) => ns === 'TaleWorlds.CampaignSystem.Actions',
    'Actions are the canonical, safe way to mutate campaign-world state. Each *Action encapsulates one state change (kill a hero, change relation, start a war, give gold) and executes it through the Action system, firing the matching event cascade. Using Apply instead of editing fields is what prevents corrupted or desynced saves.',
    'Always prefer the matching *Action.Apply(...) over directly assigning fields. This is the single most important rule for save safety.',
    'Calling an Action at the wrong phase (e.g. during load/deserialize) skips or double-fires cascades. Never call Apply from inside a save/load path. Event subscribers must be idempotent.',
    [SAFE.campaign, SAFE.api]),

  G('log-entries', 'TaleWorlds.CampaignSystem.LogEntries',
    (ns) => ns === 'TaleWorlds.CampaignSystem.LogEntries',
    'LogEntries are the structured records shown in the campaign log (battles, marriages, policy changes, etc.). They are pure display data produced by Behaviors/Actions and carry no rules; the triggering logic lives elsewhere.',
    'When an Action or Behavior should leave a traceable record in the player’s log, emit the corresponding LogEntry.',
    'LogEntries are display-only; do not put gameplay state or logic inside them. They must be serializable so the log survives saves.',
    [SAFE.campaign, SAFE.api]),

  G('mnb-root', 'TaleWorlds.MountAndBlade — Core Assembly Root',
    (ns) => ns === 'TaleWorlds.MountAndBlade',
    'TaleWorlds.MountAndBlade is the root namespace of the Mount & Blade core assembly, collecting global types that do not belong to a more specific subsystem (Campaign/Mission/View/UI): order systems (Order/VisualOrder), battle scoring (BattleScore), platform bridges (Platform.PC), and dedicated-server client helpers. It is the glue between engine and gameplay and holds no core gameplay rules itself.',
    'Reach for these types when you need orders, battle scoring, or platform bridging. Do not treat the root as a gameplay-rule library; those live in Campaign/Mission subsystems.',
    'Root types are shared across campaign and battle and live for the whole session. Platform bridges are usually valid only on the matching platform build; cross-platform references need macro guards. Order/scoring state is owned by the upper system — do not `new` it and detach it from management or it will never be ticked or saved.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),

  G('mnb-view', 'TaleWorlds.MountAndBlade.View.* — Core Views',
    (ns) => ns === 'TaleWorlds.MountAndBlade.View' || (ns.startsWith('TaleWorlds.MountAndBlade.View.') && !/MissionViews|Scripts/.test(ns)),
    'TaleWorlds.MountAndBlade.View.* holds the remaining core view types (scene notifications, custom-battle views, visual order sets, screen scripts). They follow the MissionView/ScriptComponent pattern but focus on specific presentations: SceneNotification projects a scene event into a HUD prompt, VisualOrders describe formation-order visualization, Screens.Scripts provide screen-level script hooks. Views only read state, never write rules.',
    'To customize battle HUD prompts, formation-order visualization, or screen-level scripts, derive from the relevant type and register it via MissionBehavior. Commands only trigger logic.',
    'Views present, they do not decide. Heavy work in OnMissionTick drops frames. The same-named view may have different base classes across single/multiplayer branches; confirm the base before reuse.',
    [SAFE.mission, SAFE.submodule, SAFE.api]),

  G('mnb-view-missionviews', 'TaleWorlds.MountAndBlade.View.MissionViews.* — Mission Views',
    (ns) => ns.startsWith('TaleWorlds.MountAndBlade.View.MissionViews'),
    'MissionViews are the battle/scene visualization views derived from MissionView: agent markers, siege weapons, order visualizations, and sound views. Each subscribes to Mission events and refreshes the presentation from game state every frame. They are read-only projections.',
    'To add a new battle-scene visualization, derive from MissionView and register it from a MissionBehavior; keep it read-only.',
    'MissionViews run on the hot path; avoid allocations per frame. They are tied to Mission lifetime and must be torn down on mission end to avoid dangling references.',
    [SAFE.mission, SAFE.api]),

  G('mnb-view-scripts', 'TaleWorlds.MountAndBlade.View.Scripts — Screen Scripts',
    (ns) => ns === 'TaleWorlds.MountAndBlade.View.Scripts' || ns === 'TaleWorlds.MountAndBlade.View.Screens' || ns === 'TaleWorlds.MountAndBlade.View.Screens.Scripts',
    'View.Scripts and View.Screens hold screen-level script hooks and screen scaffolding that host Gauntlet UI or drive scene-level presentation outside missions. They are thin presentation coordinators.',
    'Use these when you need a screen-level script hook or a screen scaffold that is not a full Mission. Keep rules out of the view.',
    'Screen scripts depend on the screen lifecycle; referencing them after the screen closes yields null. Do not store gameplay state here.',
    [SAFE.submodule, SAFE.api]),

  G('mnb-vm', 'TaleWorlds.MountAndBlade.ViewModelCollection.* — Core View-Models',
    (ns) => ns.startsWith('TaleWorlds.MountAndBlade.ViewModelCollection'),
    'TaleWorlds.MountAndBlade.ViewModelCollection.* holds the core view-models that project battle and menu logic state into bindable UI data: order/formation VMs, scoreboard, HUD, game options, initial menu, face generator, banner builder, and more. A VM is only a state projection; commands should only trigger Actions/Behaviors.',
    'To customize a battle command panel or a menu, inherit the relevant VM; interaction commands only trigger logic, never mutate game state directly in the VM.',
    'VMs hold no rules; mutating state in a VM breaks the single source of truth. Throttle frequent property refreshes to avoid per-frame GC pressure.',
    [SAFE.vm, SAFE.submodule, SAFE.api]),

  G('mnb-gauntlet', 'TaleWorlds.MountAndBlade.GauntletUI.* — Core Gauntlet UI',
    (ns) => ns === 'TaleWorlds.MountAndBlade.GauntletUI' || ns.startsWith('TaleWorlds.MountAndBlade.GauntletUI.') || ns === 'TaleWorlds.MountAndBlade.GauntletUI.BodyGenerator' || ns === 'TaleWorlds.MountAndBlade.GauntletUI.SceneNotification',
    'TaleWorlds.MountAndBlade.GauntletUI.* is the core Gauntlet UI layer: widgets (hundreds of specialized controls), texture providers, body generator, scene notifications, and mission UI. It projects logic state into clickable, bindable interface elements and is the main entry point for player interaction with the strategic/social layer. The UI layer only exposes state; interaction is surfaced to logic via events.',
    'To customize a core interface (clan, kingdom, crafting, encyclopedia, lobby, menus), inherit the relevant Widget/VM and open it from a MissionBehavior/logic layer. Commands only trigger Actions/Behaviors.',
    'The UI layer reads logic state; writes must go through the logic layer to avoid state divergence. Throttle frequent property refreshes. Mind namespace spelling (a historical "Sandobx" typo page exists); reference by the actual namespace.',
    [SAFE.vm, SAFE.campaign, SAFE.api]),

  G('mnb-platform', 'TaleWorlds.MountAndBlade PC Platform Bridge',
    (ns) => ns === 'TaleWorlds.MountAndBlade.Platform.PC',
    'Platform.PC is the PC platform bridge that maps engine calls for platform capabilities (save path, input, system dialogs, file pickers) to concrete PC implementations. It is part of the platform abstraction so upper logic does not depend on a specific OS; mods should always go through the abstraction, never write PC-specific Win32/file code, or other-platform builds break.',
    'When you need a platform capability (e.g. resolve the save directory, pop a system dialog), use the platform abstraction rather than platform-specific code.',
    'Platform bridges are valid only on PC builds; cross-platform (console/cloud) references need macro guards or the platform abstraction interface, otherwise other-platform builds fail.',
    [SAFE.submodule, SAFE.save, SAFE.api]),

  G('mnb-battlescore', 'TaleWorlds.MountAndBlade.Missions.BattleScore — Battle Scoring',
    (ns) => ns === 'TaleWorlds.MountAndBlade.Missions.BattleScore' || ns === 'SandBox.Missions.BattleScore' || ns === 'TaleWorlds.MountAndBlade.Missions',
    'Missions.BattleScore provides the data and rule structures for battle scoring: tallying and settling a battle’s performance score (kills, wounds, objectives). Scoring must be reentrant for use in post-battle rewards and statistics, decoupled from the actual win/lose outcome.',
    'To customize battle-score statistics or read battle results, use these scoring types; do not mix aggressive state changes into scoring.',
    'Scoring must stay stable and reentrant before battle end; mid-flight recomputation drifts. Scoring data must be serializable to support post-battle settlement and replay.',
    [SAFE.mission, SAFE.api]),

  G('custombattle', 'CustomBattle Types',
    (ns) => ns.startsWith('TaleWorlds.MountAndBlade.CustomBattle'),
    'CustomBattle implements the "custom battle" mode: players freely compose armies, pick a scene and rules for a non-story skirmish. CustomBattle is the aggregate root of a battle config, SelectionItem describes a selectable unit/formation entry, CustomBattleObjects carries the entities and parameters, and Views provide the UI layer. The cluster runs as a self-contained battle loop bridged to Mission via the battle manager.',
    'To extend or add custom-battle unit selection / formation / rules, derive from the relevant SelectionItem/CustomBattleObjects; the UI layer only exposes state, writes go through the battle manager.',
    'Custom-battle state must be fully serializable to support mid-match saving. SelectionItem-to-entity mapping must stay consistent; referencing an unloaded unit yields null. Single/multiplayer rule branches differ — cover both.',
    [SAFE.mission, SAFE.submodule, SAFE.api]),

  G('network-perks-conditions', 'Network Perks.Conditions — MP Perk Conditions',
    (ns) => ns === 'TaleWorlds.MountAndBlade.Network.Gameplay.Perks.Conditions',
    'Perks.Conditions is the multiplayer perk "activation condition" set: each MPPerkCondition subclass judges whether a perk is satisfied in the current battle context (specific weapon/troop/terrain). Conditions only judge, never mutate; the perk system evaluates them before settling bonuses. They are decoupled from the single-player perk system and built for MP balance.',
    'To add or adjust a multiplayer perk trigger condition, inherit MPPerkCondition and register it in the perk definition. Conditions must be pure and reentrant.',
    'Conditions are called on the battle hot path; keep them lightweight and never mutate state inside. MP conditions depend on the networked context and may never fire on offline/single-player paths — cover that in tests.',
    [SAFE.mission, SAFE.api]),

  G('dedicated-server', 'DedicatedCustomServer.ClientHelper',
    (ns) => ns === 'TaleWorlds.MountAndBlade.DedicatedCustomServer.ClientHelper',
    'DedicatedCustomServer.ClientHelper provides client-side helper types for the dedicated-server (dedicated server) scenario, bridging server-side battle/match state to the client presentation. It exists only in dedicated-server builds and the matching client session; it is the glue layer for multiplayer deployment and takes no part in single-player story.',
    'When you need to bridge battle state to client presentation under dedicated-server deployment, use these helpers; single-player paths should not reference them.',
    'Valid only in dedicated-server builds; single-player/editor references yield null or errors. Cross-build references need macro guards. Client helpers hold no authoritative state — the server decides.',
    [SAFE.mission, SAFE.submodule, SAFE.api]),

  G('campaign-vm', 'TaleWorlds.CampaignSystem.ViewModelCollection.* — Campaign View-Models',
    (ns) => ns.startsWith('TaleWorlds.CampaignSystem.ViewModelCollection'),
    'TaleWorlds.CampaignSystem.ViewModelCollection.* is the large set of view-models projecting campaign subsystems (clan management, kingdom, inventory, map notifications, character creation, encyclopedia, diplomacy, army, party, crafting) into bindable UI data. VMs are only state projections; commands should only trigger Actions/Behaviors.',
    'To customize the data behind any campaign interface, derive from the relevant ViewModelCollection VM; collection VMs (map elements, nameplates) should virtualize and load on demand to control memory. Commands only trigger logic.',
    'VMs hold no rules; mutating state in a VM breaks the single source of truth. Map/nameplate elements bound one-VM-per-item create performance and memory pressure — virtualize. Throttle frequent refreshes to avoid per-frame GC.',
    [SAFE.vm, SAFE.campaign, SAFE.api]),

  G('sandbox-vm', 'SandBox.ViewModelCollection.* — SandBox View-Models',
    (ns) => ns.startsWith('SandBox.ViewModelCollection'),
    'SandBox.ViewModelCollection.* is the SandBox module’s view-model set covering map (MapSiege/Map.Tracker/Map.Cheat/Map.Incidents/Map), missions (Missions/NameMarker/MainAgentDetection/NameMarker.Targets/Targets.Hideout), nameplate notifications, save/load, game over, tournaments, board games, tutorials, and input. They project SandBox subsystem state into bindable UI data; VMs are only projections, commands only trigger Actions/Behaviors.',
    'To customize data for any SandBox interface, derive from the relevant ViewModelCollection VM; collection VMs should virtualize. Commands only trigger logic.',
    'VMs hold no rules; mutating state in a VM breaks the single source of truth. Map/nameplate elements bound per-item need virtualization and on-demand loading. Throttle refreshes to avoid per-frame GC.',
    [SAFE.vm, SAFE.campaign, SAFE.api]),

  G('sandbox-view-map', 'SandBox.View.Map — Campaign Map Views',
    (ns) => ns === 'SandBox.View.Map' || ns.startsWith('SandBox.View.Map.'),
    'SandBox.View.Map.* is the campaign-map visualization layer: map visuals and managers, map navigation elements, and navigation components. It projects the strategic map state into scene presentation; views only read state, never write rules, keeping them decoupled from logic.',
    'To customize map elements, navigation, or map overlays, inherit the relevant view and register it from a MissionBehavior/logic layer; writes go through the logic layer.',
    'Views present, they do not decide; heavy work on the per-frame hot path drops frames. Map elements are numerous — virtualize bindings to control memory. Confirm the actual namespace for same-named views across branches.',
    [SAFE.mission, SAFE.vm, SAFE.api]),

  G('sandbox-view', 'SandBox.View.* — SandBox Scene Views',
    (ns) => ns === 'SandBox.View' || (ns.startsWith('SandBox.View.') && !/^SandBox\.View\.Map/.test(ns)),
    'SandBox.View.* is the SandBox module’s scene view layer: character creation views, conversation views, order providers, overlays, and mission views (tournaments, name markers, sand-box, sound components). It projects game state into scene presentation; views read state and never write rules.',
    'To customize character creation, conversation, or scene overlays, inherit the relevant view and register it from a MissionBehavior/logic layer; writes go through the logic layer.',
    'Views present, they do not decide; heavy per-frame work drops frames. Confirm the namespace for same-named views across single/multiplayer branches before referencing.',
    [SAFE.mission, SAFE.vm, SAFE.api]),

  G('sandbox-view-missions', 'SandBox.View.Missions.* — SandBox Mission Views',
    (ns) => ns.startsWith('SandBox.View.Missions'),
    'SandBox.View.Missions.* holds the presentation views for SandBox missions: tournaments, name markers, sand-box missions, and sound components. They render mission-specific UI/HUD and are registered by MissionBehavior at the right moment.',
    'To customize a SandBox mission’s presentation (tournament HUD, name markers, sound), inherit the relevant view and open it from a MissionBehavior.',
    'These views live with the Mission; tear them down on mission end to avoid dangling references. Virtualize per-item bindings (name markers) to control memory.',
    [SAFE.mission, SAFE.vm, SAFE.api]),

  G('sandbox-missions', 'SandBox.Missions — SandBox Mission Base & Support',
    (ns) => ns === 'SandBox.Missions' || (ns.startsWith('SandBox.Missions.') && !ns.startsWith('SandBox.Missions.MissionLogics')),
    'SandBox.Missions is the base and support layer of the SandBox mission system: the Mission base, battle score, mission events, conversation mission logics, and agent behaviors. They define mission lifecycle, event flow, and agent collaboration — the skeleton of Mission gameplay logic.',
    'To extend SandBox mission flow/events/conversation logic or add an agent behavior, derive from the relevant type and assemble it on Mission load; win/lose must be idempotent.',
    'Mission logic depends on Mission load and listener registration order; events are lost if not ready. Agent behaviors must be cleaned up after the Agent dies or dangling references crash. Score/event data must be serializable.',
    [SAFE.mission, SAFE.api]),

  G('sandbox-missionlogics', 'SandBox.Missions.MissionLogics.* — SandBox Mission Logics',
    (ns) => ns.startsWith('SandBox.Missions.MissionLogics'),
    'SandBox.Missions.MissionLogics.* implements the mission logic for each SandBox gameplay: Hideout (bandit lair, with Objectives sub-goals), Arena, Towns, and others. Each MissionLogic subclass defines that gameplay’s flow and win/lose conditions, assembled by the relevant Mission on load; logic and presentation are bridged via MissionBehavior.',
    'To extend a SandBox gameplay (hideout/arena/town) flow, inherit the relevant MissionLogic and register it with the Mission; win/lose and settlement must be idempotent.',
    'Mission logic depends on scene and listener registration order; events are lost if not ready. Sub-goals (Objectives) must complete idempotently — no double settlement. State must be serializable for mid-match saves.',
    [SAFE.mission, SAFE.api]),

  G('sandbox-tournaments', 'SandBox.Tournaments — Tournament Types',
    (ns) => ns.startsWith('SandBox.Tournaments'),
    'SandBox.Tournaments implements the in-game tournament system: Tournaments is the flow aggregate, MissionLogics drive the match, AgentControllers control the participating AI. Together they organize sign-up, brackets, matches, and reward settlement; state must be serializable.',
    'To extend or add a tournament stage/match/AI opponent, derive from the relevant type and register it with the tournament manager; flow must be idempotent.',
    'Tournament state must be serializable to support saves. AgentControllers follow the participating unit’s life/death — clean up after an Agent dies. Brackets and reward settlement must avoid duplicate triggers.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),

  G('sandbox-boardgames', 'SandBox.BoardGames.* — Board Games',
    (ns) => ns === 'SandBox.BoardGames' || ns.startsWith('SandBox.BoardGames.'),
    'SandBox.BoardGames.* implements the playable board-game minigames (e.g. tavern games): the board, pawns, tiles, AI opponents, mission logics, and objects. It is a self-contained turn-based subsystem with its own serialization so a match can be saved and resumed.',
    'To add a board-game variant or AI, derive from the relevant type and register it with the board-game manager; turns must be deterministic and serializable.',
    'Board-game state must be fully serializable to reconstruct the match. AI must be interruptible and bounded. Pawns/tiles hold the full match state — keep it consistent.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),

  G('sandbox-objects', 'SandBox.Objects.* — SandBox Scene Objects',
    (ns) => ns === 'SandBox.Objects' || ns.startsWith('SandBox.Objects.'),
    'SandBox.Objects.* holds scene-placeable objects and usables: usables (interactable props), animation points, area markers, cinematics. These are the physical/scripted building blocks mods place in scenes; interaction must be idempotent and state serializable.',
    'To add a new interactable prop or scene marker, derive from the relevant Usable/object type and place it in the scene; wire interaction through the behavior layer.',
    'Usable interaction must be idempotent; state must be serializable for saves. Scene objects depend on scene load order; fields are null before the scene is ready.',
    [SAFE.mission, SAFE.campaign, SAFE.api]),

  G('sandbox-gauntlet', 'SandBox.GauntletUI.* — SandBox Gauntlet UI',
    (ns) => ns.startsWith('SandBox.GauntletUI.') || ns === 'SandBox.GauntletUI' || ns === 'Sandobx.GauntletUI.Missions',
    'SandBox.GauntletUI.* is the SandBox module’s Gauntlet UI layer: town/tavern/character-creation/encyclopedia/banner-editor/tutorial interfaces and their widgets/VMs. It projects SandBox logic state into clickable, bindable interface elements and is the main entry point for player interaction with the strategic/social layer; the UI layer only exposes state, interaction is surfaced to logic via events.',
    'To customize a SandBox interface (town/tavern/character-creation/encyclopedia/tutorial), inherit the relevant Widget/VM and open it from a MissionBehavior/logic layer. Commands only trigger Actions/Behaviors.',
    'The UI layer reads logic state; writes must go through the logic layer to avoid state divergence. Throttle frequent refreshes. Mind namespace spelling (a historical "Sandobx" typo page exists); reference by the actual namespace.',
    [SAFE.vm, SAFE.campaign, SAFE.api]),

  G('sandbox-ai', 'SandBox.AI — SandBox AI',
    (ns) => ns === 'SandBox.AI',
    'SandBox.AI is the SandBox module’s AI-related types (e.g. AgentBehaviorManager coordinating battle-agent behavior assembly). It decouples AI behavior registration/management from concrete decision implementations — the "behavior assembly hub" used by Mission on load to attach agent logic.',
    'To centrally manage battle AI behaviors or add an agent decision, use the coordinating types here; behavior implementations must be serializable and interruptible.',
    'AI assembly depends on Mission load order; referencing it before ready yields null. Bound search depth/timeout to avoid stalls. After an Agent dies its behavior must be cleaned up or dangling references crash.',
    [SAFE.mission, SAFE.api]),

  G('sandbox-root', 'SandBox Root & MBHelpers',
    (ns) => ns === 'SandBox' || ns === 'MBHelpers' || ns === 'Helpers',
    'This covers the SandBox root namespace plus the static helper bundles (Helpers, MBHelpers) that concentrate cross-cutting operations: opening screens, computing results, resolving entities (InventoryScreenHelper, SettlementHelper, HeroHelper, …). Helpers are stateless utilities called from the correct system context — never instantiate them as stateful objects.',
    'Use the SandBox root types and helpers where a cross-cutting operation or a small shared utility is needed; call helpers from the right system phase.',
    'Helpers are stateless; do not store per-instance state in them. SandBox root types follow their owning system’s lifecycle — reference only when ready. World changes should go through Actions/Behaviors.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),

  G('storymode-tutorial', 'StoryMode.GauntletUI.Tutorial',
    (ns) => ns === 'StoryMode.GauntletUI.Tutorial',
    'StoryMode.GauntletUI.Tutorial is the tutorial UI layer of the StoryMode (main story) module: the widgets/VMs that drive the scripted onboarding flow. It presents tutorial steps and surfaces completion to the logic layer.',
    'To customize or extend the main-story tutorial UI, derive from the relevant tutorial Widget/VM and open it from the tutorial controller.',
    'Tutorial UI must stay in sync with the tutorial controller’s step state; desync breaks onboarding. Keep logic out of the view.',
    [SAFE.vm, SAFE.campaign, SAFE.api]),

  G('storymode-quests', 'StoryMode.Quests.* — Main-Story Quests',
    (ns) => ns.startsWith('StoryMode.Quests'),
    'StoryMode.Quests.* implements the quest types of the main story (StoryMode): the phased quest chains (FirstPhase/SecondPhase/ThirdPhase, ConspiracyQuests, TutorialPhase, PlayerClanQuests) and QuestTasks. They drive narrative progression in cooperation with CampaignBehavior and settle through events, not by writing rules directly.',
    'To extend or add a main-story quest stage, derive from the relevant quest type and register it with the QuestManager; quest flow is driven via events and Behaviors.',
    'Quest condition checks must be idempotent; repeated triggers double-reward or desync state. Cross-stage quests must stay save-compatible — new fields need default values or old saves fail to deserialize.',
    [SAFE.campaign, SAFE.api]),

  G('storymode', 'StoryMode.* — Main-Story Module',
    (ns) => /^Storymode?\.|^StoryMode$/.test(ns) && !ns.startsWith('StoryMode.Quests') && !ns.startsWith('StoryMode.GauntletUI.Tutorial'),
    'StoryMode.* is the main-story (campaign narrative) module: story phases, quest/view/view-model collections, game components/campaign behaviors, extensions, and story objects. It cooperates with CampaignBehavior to drive the narrative but does not write rules directly; quest flow is via events and Behaviors.',
    'To extend main-story progression (phases, behaviors, views), derive from the relevant StoryMode type and register it with the story manager/QuestManager.',
    'Story condition checks must be idempotent; repeated triggers double-reward or desync. New fields need default values for save compatibility. Mind the "Storymode" vs "StoryMode" namespace spelling in legacy pages.',
    [SAFE.campaign, SAFE.api]),

  G('gauntletui', 'TaleWorlds.GauntletUI.* — Gauntlet UI Framework',
    (ns) => ns === 'TaleWorlds.GauntletUI' || ns.startsWith('TaleWorlds.GauntletUI.'),
    'TaleWorlds.GauntletUI.* is the Gauntlet UI framework itself: the widget base types, prefab system, extra widgets, data/binding layer, layout, gamepad navigation, and input. It is the foundation every game-specific Widget/VM is built on, independent of gameplay rules.',
    'When you build or extend any Gauntlet interface, you ultimately derive from these framework base types; understand the binding and lifecycle model before subclassing.',
    'Framework types are presentation infrastructure; do not embed gameplay rules here. Widget lifecycle must pair with its screen; leaks or double-registration break input/binding.',
    [SAFE.vm, SAFE.submodule, SAFE.api]),

  G('core-lib', 'TaleWorlds.Core / Library / DotNet / ObjectSystem / ModuleManager',
    (ns) => ns === 'TaleWorlds.Core' || ns === 'TaleWorlds.Library' || ns === 'TaleWorlds.DotNet' || ns === 'TaleWorlds.ObjectSystem' || ns === 'TaleWorlds.ModuleManager' || ns === 'TaleWorlds.Starter.Library' || ns === 'TaleWorlds.LinQuick',
    'TaleWorlds.Core, Library, DotNet, ObjectSystem, ModuleManager (and friends) are the lowest-level public infrastructure: math (vectors/matrices), collections, serialization primitives, generic algorithms, and engine global constants. Almost every upper namespace depends on them, yet they depend on no gameplay logic — a pure "toolbox".',
    'Use these directly for general math/collection/serialization needs; do not stuff business rules into infrastructure.',
    'Infrastructure is globally depended upon, so the blast radius of any change is enormous; a breaking change ripples through every upper type. New types must be side-effect-free and unit-testable.',
    [SAFE.submodule, SAFE.api]),

  G('engine', 'TaleWorlds.Engine.* — Engine Bridge',
    (ns) => ns === 'TaleWorlds.Engine' || ns.startsWith('TaleWorlds.Engine.'),
    'TaleWorlds.Engine.* is the engine bridge layer exposing scene, rendering, physics, input, and engine options to the managed game code. It is the boundary between the native engine and the C# gameplay; mods touch it mainly through the managed wrappers and IMB* interfaces rather than the native side.',
    'Reach for engine types when you need scene/rendering/input/options access; prefer the managed wrappers over native calls.',
    'Engine types are tied to the native engine lifecycle and platform; referencing them outside a loaded scene/engine context yields null. Mind platform guards for engine options/input.',
    [SAFE.submodule, SAFE.api]),

  G('twodim', 'TaleWorlds.TwoDimension.* — 2D Standalone Runtime',
    (ns) => ns.startsWith('TaleWorlds.TwoDimension'),
    'TaleWorlds.TwoDimension.* is the engine’s 2D standalone runtime supporting 2D interface/overlay scenes that do not depend on a full 3D scene (certain menu backgrounds, independent 2D presentations). It separates 2D rendering and input from the 3D pipeline for specific interfaces to reuse.',
    'When you need an independent 2D presentation layer (not a 3D scene), reach for these; do not mix 3D scene logic into the 2D runtime.',
    'The 2D runtime has a different lifecycle from the 3D scene; mixing them causes context confusion. Release resources in pairs to avoid long-lived 2D textures.',
    [SAFE.vm, SAFE.submodule, SAFE.api]),

  G('localization', 'TaleWorlds.Localization.* — Localization',
    (ns) => ns.startsWith('TaleWorlds.Localization'),
    'TaleWorlds.Localization.* is the localization system: text processing, expression evaluation, and language processors that turn game strings into localized output. It is pure text infrastructure consumed by every UI string.',
    'Use these when you need to format, localize, or evaluate UI/expressions; do not put gameplay rules here.',
    'Localization is global and performance-sensitive (called per string); keep processors lightweight. Missing language data yields empty strings — guard displays.',
    [SAFE.api]),

  G('network', 'Network Types (Network & MountAndBlade.Network)',
    (ns) => /^TaleWorlds\.(Network|MountAndBlade\.Network)/.test(ns),
    'Network types cover the multiplayer/networking layer: messages, network gameplay perks (effects/conditions), and the client/server plumbing. They are primarily relevant to custom and multiplayer sessions and are largely decoupled from single-player gameplay.',
    'Use these when building or extending multiplayer/custom-battle networking (perk effects, messages). Single-player paths generally do not need them.',
    'Network types depend on the networked session context; many never fire offline. Perk effects/conditions are evaluated on the hot path — keep them lightweight and pure. Watch single/multiplayer rule branches.',
    [SAFE.mission, SAFE.api]),

  G('savesystem', 'TaleWorlds.SaveSystem.* — Save System',
    (ns) => ns.startsWith('TaleWorlds.SaveSystem'),
    'TaleWorlds.SaveSystem.* is the serialization/save framework: the definer attributes, load/save drivers, resolvers, and definition metadata. It is what makes the whole game state restorable; mods extend it via SaveableTypeDefiner and [SaveableField].',
    'When you add a saveable type or field, declare it through the SaveSystem (TypeDefiner + attributes) so it round-trips correctly.',
    'Any new field must carry a default value, otherwise old saves fail to deserialize. Save/load paths must not trigger world mutations (no Actions). Resolvers must be deterministic.',
    [SAFE.save, SAFE.api]),

  G('input-screen', 'InputSystem & ScreenSystem',
    (ns) => ns === 'TaleWorlds.InputSystem' || ns === 'TaleWorlds.Engine.InputSystem' || ns === 'TaleWorlds.ScreenSystem',
    'InputSystem and ScreenSystem manage raw input and the screen/UI stacking model respectively. They are low-level infrastructure every interface and control scheme depends on.',
    'Use these when you need custom input handling or screen stacking/transition control; otherwise rely on the Gauntlet layer.',
    'Input/screen state is global and order-sensitive; incorrect stacking or unregistration breaks input routing. Clean up listeners on unload.',
    [SAFE.submodule, SAFE.api]),

  G('campaignsystem-misc', 'TaleWorlds.CampaignSystem.* — Campaign System (misc)',
    (ns) => ns.startsWith('TaleWorlds.CampaignSystem.') || ns === 'TaleWorlds.CampaignSystem',
    'This collects the remaining CampaignSystem supplement types: the campaign root, map events, scene-information popups, map notification types, character development, elections, game states, settlements, party, game menus, sieges, encyclopedia, map, tournament games, barter system, inventory, kingdom management, extensions, rosters, naval, fast mode, incidents, crafting system, save compatibility, and agent origins. They are the support and extension points of the campaign main loop and do not themselves hold complete gameplay.',
    'Reach for these when you need to extend campaign components, handle elections/map events, or work with settlements/parties; extension components must provide serializable state.',
    'FastMode skips the presentation layer — logic must run correctly without rendering. Election/event handling must mind timing and duplicate triggers. Component state must be serializable for saves.',
    [SAFE.campaign, SAFE.api]),

  G('sandbox', 'SandBox.* — SandBox Module (misc)',
    (ns) => /^SandBox\.|^Sandobx\./.test(ns),
    'This collects the remaining SandBox module types not covered by a dedicated group above: the SandBox root, AI, board games, objects, views, mission logics, tournaments, and various gameplay helpers. They are the concrete gameplay implementations of the SandBox module layered on top of the core Campaign/Mission systems.',
    'Reach for these SandBox types to extend concrete gameplay (props, missions, tournaments, AI, helpers); keep world mutations inside Actions.',
    'SandBox types follow their owning system’s lifecycle; reference only when ready. Scene objects depend on load order; missions depend on listener registration. World changes go through Actions/Behaviors.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),

  // Final safety net (should be empty if all above matched).
  G('misc', 'Miscellaneous Business Types',
    () => true,
    'This page covers the scattered business types not grouped into a dedicated topic. They belong to different subsystems (views, UI, missions, platform) and each carries its derived convention responsibility. Confirm the owning system’s lifecycle and dependencies before use; do not reference an unready instance at the wrong phase, and route world-state changes through the corresponding Action/Behavior rather than direct field mutation.',
    'Locate the concrete subsystem by type name and namespace, then use it from there; core gameplay rules still live in the Campaign/Mission subsystems.',
    'Scattered types have varied lifecycles; confirm the owning system and load phase before referencing. Cross-build/cross-platform types need macro guards. Route state changes through Actions/Behaviors to avoid skipping event cascades and corrupting saves.',
    [SAFE.campaign, SAFE.mission, SAFE.api]),
];

// Bucket gaps by group.
const bucketed = new Map();
const unmatched = [];
for (const g of gaps) {
  const grp = GROUPS.find((x) => x.match(g.namespace));
  if (!grp) { unmatched.push(g); continue; }
  if (!bucketed.has(grp.slug)) bucketed.set(grp.slug, []);
  bucketed.get(grp.slug).push(g);
}

let totalEntries = 0;
const report = [];
for (const grp of GROUPS) {
  const types = bucketed.get(grp.slug);
  if (!types || !types.length) { report.push(`SKIP empty ${grp.slug}`); continue; }
  const rows = types.map((t) => {
    const base = baseMap.get(`${t.namespace}\0${t.typeName}`) || '';
    const purpose = roleFor(t.typeName, base, t.namespace);
    const timing = timingFor(t.namespace);
    return `| \`${t.typeName}\` | ${t.namespace} | ${purpose} | ${timing} |`;
  }).join('\n');
  const depLinks = grp.deps.map(([href, label]) => `- [${label}](${href})`).join('\n');
  const md = `---
title: "${grp.title}"
description: "${grp.title} — family index covering ${types.length} business types, with mental model, dependencies, and risks."
---

# ${grp.title}

**One-line responsibility:** This page covers all ${types.length} business types under \`${grp.title}\` as a family index, giving each type its namespace, responsibility, and typical timing so you can browse by module instead of alphabetically.

## Mental Model

${grp.mental}

## When to Use

${grp.usage}

## Dependencies

The types under \`${grp.title}\` depend on the following modules; missing any of them causes compile- or run-time failure.

\`\`\`mermaid
graph TD
  ROOT["${grp.title}"]
  ROOT --> DEP["Dependency modules"]
\`\`\`

${depLinks}

## Type Catalog

| Type | Namespace | Purpose | Timing |
| --- | --- | --- | --- |
${rows}

## Risk & Boundaries

${grp.risk}

## See Also

${depLinks}
`;
  const dir = join(API, 'final', grp.slug);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const outPath = join(dir, '_index.md');
  writeFileSync(outPath, md, 'utf8');
  const entries = extractFamilyEntries(outPath, md);
  totalEntries += entries.length;
  report.push(`WROTE ${outPath}  types=${types.length} familyEntries=${entries.length}`);
}
console.log(report.join('\n'));
console.log('TOTAL family entries added:', totalEntries);
console.log('UNMATCHED gaps (should be 0):', unmatched.length);
if (unmatched.length) console.log(JSON.stringify(unmatched.slice(0, 50), null, 1));
if (totalEntries !== gaps.length) {
  console.error(`WARN: family entries (${totalEntries}) != gaps (${gaps.length})`);
}
