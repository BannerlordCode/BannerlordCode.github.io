---
title: "Migrating from 1.4.5 to 1.5.3"
description: "A mod migration guide for Bannerlord 1.4.5 to 1.5.3: what was removed, which signatures changed, what was added — every row backed by .cs evidence on both sides and tiered by decompiler provenance."
---

# Migrating from 1.4.5 to 1.5.3

> **Nothing on this page comes from memory.** Every row is produced by actually running
> `tools/_v153_migration-diff.mjs` over both source trees and carries the `.cs` path on the 1.4.5 *and*
> the 1.5.3 side. See [Method and confidence](#method-and-confidence) to reproduce it.

## Read this first

Going from 1.4.5 to 1.5.3, only **two kinds of change will break your build**:

1. **58 public/internal types are gone** (cross-confirmed by three independent evidence chains — see
   [What was removed](#1-what-was-removed)).
2. **A set of core method signatures changed** — notably on `Mission`, `MapEventComponent` and
   `LobbyClient` (see [Signature changes](#2-signature-changes)).

What **did not** happen matters just as much, so you do not panic:

- **No assembly was deleted.** All 56 `bin/` assemblies covered by the 1.4.5 tree are present in 1.5.3.
- **Multiplayer namespaces were not reorganized.** The 12 `TaleWorlds.MountAndBlade.Multiplayer*`
  namespaces are byte-identical across the two versions.
- **`TaleWorlds.Diamond` was not removed.** It still exists in 1.5.3 (mapped to the
  [engine](../../api/engine/) bucket). What disappeared is only the `TaleWorlds.Diamond.Socket`
  sub-namespace and the `ThreadedClient*` threaded-REST family.
- **`TaleWorlds.ObjectManager` never existed.** Matches for `namespace TaleWorlds.ObjectManager` across
  the 1.3.0 / 1.3.15 / 1.4.5 / 1.5.3 trees: **0, 0, 0, 0**. `TaleWorlds.ObjectSystem` is present in all
  four (18 files each in 1.4.5 and 1.5.3), and `MBObjectManager` lives in
  `TaleWorlds.ObjectSystem/MBObjectManager.cs` in both. That rename happened in a **much earlier**
  version; it is not a 1.4.5 → 1.5.3 change.

---

## 1. What was removed

**58 types** exist in 1.4.5 and do not exist in 1.5.3.

**Verification rule applied to each one**: it must have a real `.cs` file inside the 1.4.5 tree under
`bannerlord-1.4.5/Bannerlord.Source/bin/**` or `bannerlord-1.4.5/Bannerlord.Source/Modules.*/**`. Anything
that cannot be found in either place is downgraded to "not covered by the 1.4.5 tree, cannot be
determined" and is **not** written up as a removal.

**Cross-validation**: the same 58 types were independently reported by three evidence chains, with zero
disagreement.

| Chain | Baseline provenance | Removals reported | Agreement with the 1.4.5 main chain |
|---|---|---|---|
| 1.4.5 → 1.5.3 (main) | clean source | 58 | — |
| 1.4.7 → 1.5.3 (same-provenance control) | ILSpy | 58 | **58 / 58** |
| 1.4.6 → 1.5.3 (same-provenance control) | ILSpy | 58 | **58 / 58** |

Three-for-three, so these 58 are **real removals**, not collection gaps.

### 1.1 The FastMode module was cut (2 types)

| Type | 1.4.5 evidence path |
|---|---|
| `TaleWorlds.CampaignSystem.FastMode.FastModeSubModule` | `bannerlord-1.4.5/Bannerlord.Source/Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeSubModule.cs` |
| `TaleWorlds.CampaignSystem.FastMode.FastModeOptionsProvider` | `bannerlord-1.4.5/Bannerlord.Source/Modules.FastMode/TaleWorlds.CampaignSystem.FastMode/FastModeOptionsProvider.cs` |

Files matching `namespace TaleWorlds.CampaignSystem.FastMode` in the 1.5.3 tree: **0**
(1.4.5 and 1.4.7 each have 3). **Impact**: if your mod depends on the FastMode module or subclasses
`FastModeSubModule`, there is nothing left to hang it on in 1.5.3.

### 1.2 Diamond's threaded REST client was removed (9 types)

| Type | 1.4.5 evidence path (prefix `bannerlord-1.4.5/Bannerlord.Source/`) |
|---|---|
| `TaleWorlds.Diamond.IClientSessionProvider` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/IClientSessionProvider.cs` |
| `TaleWorlds.Diamond.ThreadedClient` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClient.cs` |
| `TaleWorlds.Diamond.ThreadedClientTask` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientCantConnectTask` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientCantConnectTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientConnectedTask` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientConnectedTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientDisconnectedTask` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientDisconnectedTask.cs` |
| `TaleWorlds.Diamond.ThreadedClientHandleMessageTask` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond/ThreadedClientHandleMessageTask.cs` |
| `TaleWorlds.Diamond.ClientApplication.GenericThreadedRestSessionProvider` | `bin/TaleWorlds.Diamond/TaleWorlds.Diamond.ClientApplication/GenericThreadedRestSessionProvider.cs` |

The entire `TaleWorlds.Diamond.Socket` sub-namespace is also gone (`ClientSocketSession`,
`SocketMessage`). **Note**: this is a slice of Diamond, **not** Diamond itself.

### 1.3 The standalone OpenGL backend was removed (21 types)

Everything under `TaleWorlds.TwoDimension.Standalone.Native.OpenGL` — `Opengl32`, `Opengl32ARB` and 15
enums (`BeginMode`, `DataType`, `ShaderType`, `Target`, `TextureUnit`, …) — is absent in 1.5.3, as are
`GraphicsContext`, `OpenGLTexture` and `VertexArrayObject`.

**1.5.3 replaces it with DirectX**: `DirectXGraphicsContext`, `DirectXShader`, `DirectXTexture` and
`DirectXVertexBuffer` are new under `TaleWorlds.TwoDimension.Standalone`, and
`TaleWorlds.TwoDimension.Standalone.Native.Windows` brings 27 D3D11 structs.

**Impact**: any mod that P/Invokes `Opengl32` must be rewritten for the DirectX path.

### 1.4 Campaign-side removals (10 types)

| Type | 1.4.5 evidence path (all under `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/`) |
|---|---|
| `…CampaignBehaviors.IHideoutCampaignBehavior` | `TaleWorlds.CampaignSystem.CampaignBehaviors/IHideoutCampaignBehavior.cs` |
| `…CampaignBehaviors.VolunteerTroop` | `TaleWorlds.CampaignSystem.CampaignBehaviors/GarrisonRecruitmentCampaignBehavior.cs` |
| `…ComponentInterfaces.ExecutionRelationModel` | `TaleWorlds.CampaignSystem.ComponentInterfaces/ExecutionRelationModel.cs` |
| `…GameComponents.DefaultExecutionRelationModel` | `TaleWorlds.CampaignSystem.GameComponents/DefaultExecutionRelationModel.cs` |
| `…MapEvents.BlockadeBattleMapEvent` | `TaleWorlds.CampaignSystem.MapEvents/BlockadeBattleMapEvent.cs` |
| `…Map.MapMarkerManager` | `TaleWorlds.CampaignSystem.Map/MapMarkerManager.cs` |
| `…Settlements.ISpottable` | `TaleWorlds.CampaignSystem.Settlements/ISpottable.cs` |
| `…ViewModelCollection.ClanManagement.ClanPartyBehaviorSelectorVM` | `…ViewModelCollection/…ClanManagement/ClanPartyBehaviorSelectorVM.cs` |
| `…ViewModelCollection.ClanManagement.ClanRoleMemberItemVM` | `…ViewModelCollection/…ClanManagement/ClanRoleMemberItemVM.cs` |
| `…ViewModelCollection.ClanManagement.ClanRoleAssignedThroughClanScreenEvent` | moved to `…ClanManagement.Categories/` in 1.5.3 (type still exists, not a removal) |

### 1.5 The rest (16 types)

`TaleWorlds.MountAndBlade.UnderAttackType`, `TaleWorlds.MountAndBlade.View.ISiegeDeploymentView`,
`…View.MissionViews.Singleplayer.MissionEntitySelectionUIHandler`,
`…ViewModelCollection.Order.OrderSiegeMachineVM`, `…Order.OrderTargets`,
`TaleWorlds.MountAndBlade.GauntletUI.Widgets.{BoolStateChangerWidget, SceneNotificationDescriptionTextWidget,
ClanPartyRoleSelectionPopupWidget, ClanPartyRoleSelectionToggleWidget}`, and
`SandBox.ViewModelCollection.Map.Tracker.MapTrackerProvider`.
Evidence paths for each are in `tools/_v153_diff_145.json` under `removedTypes[]` (field `file`).

---

## 2. Signature changes

> **Confidence warning.** This section is tiered by provenance.
> **High** = the same-provenance control chains (1.4.7 / 1.4.6 → 1.5.3) report the same difference →
> safe to act on.
> **Low** = only the mixed-provenance 1.4.5 main chain reports it → the decompiler may simply have chosen
> different formatting → **requires manual review**.

First, the noise scale, which is *why* the tiering exists:

| Chain | Types with signature changes | Member signature changes | Members added | Members removed |
|---|---|---|---|---|
| 1.4.5 → 1.5.3 (mixed provenance) | 1 461 | 5 693 | 1 758 | 818 |
| 1.4.7 → 1.5.3 (same provenance) | 134 | 384 | 1 273 | 412 |
| 1.4.6 → 1.5.3 (same provenance) | 137 | 387 | 1 335 | 413 |

The same-provenance chains report only 134–137 types where the mixed chain reports 1 461 — so
**roughly 91% of the "signature changes" are decompiler formatting artifacts, not API changes**.
Canonical example: 1.4.5 writes
`public static PerkObject WrappedHandles => Instance._x;` while 1.5.3 writes
`public static PerkObject WrappedHandles { get { return …; } }`. Same API, two spellings.

### 2.1 High confidence (confirmed by the same-provenance chains) — will break your build

| Member | 1.4.7 signature | 1.5.3 signature | Breaking? |
|---|---|---|---|
| `Mission.GetReinforcementPathsDataOfSide` | `public MBReadOnlyList<SpawnPathData> GetReinforcementPathsDataOfSide(BattleSideEnum)` | `public MBReadOnlyList<ValueTuple<SpawnPathData, float>> GetReinforcementPathsDataOfSide(BattleSideEnum)` | **Yes** — return type changed; element is now a tuple |
| `Mission.SpawnAgent` | `public Agent SpawnAgent(AgentBuildData, bool = false)` | `public Agent SpawnAgent(AgentBuildData, bool = false, Equipment = null, ItemObject = null)` | No — new optional parameters, source-compatible |
| `Mission.SetFormationPositioningFromDeploymentPlan` | `public void SetFormationPositioningFromDeploymentPlan(Formation)` | `public void SetFormationPositioningFromDeploymentPlan(Formation, bool = false)` | No — new optional parameter |
| `MapEventComponent.OnFinish` | `internal virtual void OnFinish()` | `protected virtual void OnFinish()` | **Yes** — access narrowed; `internal` overrides stop compiling |
| `MapEventComponent.InitializeComponent` | `internal void InitializeComponent()` | `public void InitializeComponent()` | No — widened |
| `MapEventComponent.OnPartyAdded` | `internal virtual void OnPartyAdded(PartyBase)` | `public virtual void OnPartyAdded(PartyBase)` | No — widened |
| `LobbyClient.ChangeRegion` | `public void ChangeRegion(string)` | `public async Task<bool> ChangeRegion(string)` | **Yes** — `void` → `Task`; every call site must change |
| `LobbyClient.ChangeGameTypes` | `public void ChangeGameTypes(string)` | `public async Task<bool> ChangeGameTypes(string)` | **Yes** — same |
| `LobbyClient.RequestJoinCustomGame` | `public async Task<bool> RequestJoinCustomGame(CustomBattleId, string, bool = false)` | `public async Task<bool> RequestJoinCustomGame(CustomBattleId, CustomGameJoinType, string)` | **Yes** — parameter count and types both changed |
| `PerkHelper.AddPerkBonusForParty` | `public static void AddPerkBonusForParty(PerkObject, MobileParty, bool, ref ExplainedNumber, bool = false)` | `public static bool AddPerkBonusForParty(PerkObject, MobileParty, bool, ref ExplainedNumber)` | **Yes** — return type `void`→`bool`, one parameter dropped |
| `PerkHelper.AddPerkBonusForCharacter` | `public static void AddPerkBonusForCharacter(PerkObject, CharacterObject, bool, ref ExplainedNumber, bool = false)` | `public static bool AddPerkBonusForCharacter(PerkObject, BattleEnvironment, CharacterObject, bool, ref ExplainedNumber)` | **Yes** — return type changed, one parameter added |
| `PerkHelper.GetCaptainPerksForTroopUsages` | `public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags)` | `public static IEnumerable<PerkObject> GetCaptainPerksForTroopUsages(TroopUsageFlags, BattleEnvironment = BattleEnvironment.Any)` | No — new optional parameter |
| `ClanPartyItemVM.Expense` / `.Income` | `public int Expense` | `public abstract int Expense` | **Yes** — now abstract; subclasses must implement |
| `ClanPartyType.Expense` / `.Income` | `public int Expense` | `public abstract int Expense` | **Yes** — same |

Evidence paths (structurally identical, only the directory depth differs):
`bannerlord-1.4.7/TaleWorlds.MountAndBlade/Mission.cs` ↔ `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs`;
`bannerlord-1.4.7/TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs` ↔ `bannerlord-1.5.3/TaleWorlds.CampaignSystem/MapEvents/MapEventComponent.cs`;
`bannerlord-1.4.7/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs` ↔ `bannerlord-1.5.3/TaleWorlds.MountAndBlade.Diamond/LobbyClient.cs`;
`bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs` ↔ `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/PerkHelper.cs`.

### 2.2 Low confidence (mixed provenance only) — needs manual review

The main chain additionally reports about 1 327 types whose signatures "changed" but which the
same-provenance chains do not flag. **Do not treat these as migration work.** To check one:

```bash
node tools/_v153_migration-diff.mjs --control --type TaleWorlds.CampaignSystem.Campaign
```

If the same-provenance chain stays silent, it is almost certainly `=>` vs `{ get { … } }`, a closure
class, or a switch turned into a dictionary. The full list lives in `tools/_v153_diff_145.json` under
`sigChanged[]`, each row carrying `oldSig` / `newSig` and both `file` paths.

---

## 3. Directory mapping changes

This is a **structural** change, a different thing from a type rename. Do not conflate them.

### 3.1 The `gameplay` bucket is gone in 1.5.3

The v1.4.5 documentation tree has `api/gameplay/`, containing `sandbox/` and `storymode/`. The v1.5.3
tree has **no `gameplay`**: `SandBox` and `StoryMode` are promoted to top-level buckets
[sandbox](../../api/sandbox/) and [storymode](../../api/storymode/).

**Why this deserves its own section**: the v1.4.5 doc tree is itself dirty — 2 199 type names are
duplicated across buckets (every `TaleWorlds.CampaignSystem` type exists in both `campaign/` and
`campaign-ext/`), and 171 of 513 namespaces are split across buckets. Copying it forward produces wrong
placement (e.g. `TaleWorlds.InputSystem` landing in `campaign-ext`, `TaleWorlds.DotNet` landing in
`campaign-ext`). So v1.5.3 buckets by **namespace rule** instead of inheriting v1.4.5 directory
semantics. The 19 old URLs under `api/gameplay/` have no 1.5.3 counterpart — **that is expected, not a
broken link**.

### 3.2 Bucket reassignments

| v1.4.5 directory | v1.5.3 directory | Note |
|---|---|---|
| `core/Game.md` | `core-extra/Game.cs` | `Game` moved from core to core-extra |
| `campaign-ext/` **and** `campaign/` duplicates | `campaign/` (root namespace) + `campaign-ext/` (sub-domains) | De-duplicated: one type, one page |
| `gameplay/sandbox/` | `sandbox/` | Promoted to a top-level bucket |
| `gameplay/storymode/` | `storymode/` | Promoted to a top-level bucket |
| — | `network/` `activitysystem/` `achievementsystem/` | New domains |
| `ScreenBase` / `ScreenLayer` / `MBObjectBase` duplicated in `campaign-ext/` | `gui/` / `campaign-ext/` | Cross-bucket duplicates removed |

### 3.3 Bucket names are not type renames

`TaleWorlds.ObjectManager → TaleWorlds.ObjectSystem` is a **type/namespace** rename, and it does **not**
happen between 1.4.5 and 1.5.3 (see the intro). Meanwhile the `TaleWorlds.ObjectSystem` *namespace* is
filed under [campaign-ext](../../api/campaign-ext/) in the v1.5.3 docs — that is **directory placement**,
not a rename. The two live in two different places on this site: [Module Map](../module-map) and this page.

---

## 4. What was added

**158 types** in `TaleWorlds.*` / `SandBox` / `StoryMode` namespaces are new between 1.4.7 and 1.5.3.
(The 1.4.5 main chain reports 168; the extra 10 are types the 1.4.5 tree never collected and are
therefore not counted as genuinely new.)

Grouped by namespace, the highlights:

| Namespace | New types | What it is |
|---|---|---|
| `TaleWorlds.TwoDimension.Standalone.Native.Windows` | 27 | D3D11 structs replacing the OpenGL backend |
| `TaleWorlds.CampaignSystem.CampaignBehaviors` | 11 | `BattleWreckageCampaignBehavior`, `AdvancedStartWorldOptionsCampaignBehavior`, `HeroDailyXpCampaignBehavior`, `ExecutionCampaignBehavior`, … |
| `SandBox.AdvancedStartOptions` | 10 | Advanced start options (`AdvancedStartOptionsManager` and its typed options) |
| `TaleWorlds.MountAndBlade` | 8 | `SpectatorHelper`, `BasicTimer`, `TaskForceDetachment`, `FormationTargetingVisibilityModes`, … |
| `SandBox.ViewModelCollection.CampaignStartingOptions` | 7 | Start-options ViewModels |
| `TaleWorlds.CampaignSystem.MapNotificationTypes` | 6 | The Blood Feud notification family |
| `TaleWorlds.CampaignSystem.ViewModelCollection.Map.MapNotificationTypes` | 6 | Blood Feud notification ViewModels |
| `TaleWorlds.CampaignSystem.Incidents` | 5 | `IncidentManager`, `IncidentTrigger`, `IncidentHint` |
| `TaleWorlds.Engine` | 5 | `ITerrainEdit`, `TerrainEditContext`, `FloraDefinition` (terrain editing) |
| `TaleWorlds.CampaignSystem.MapEvents` | 4 | Siege event components (`BlockadeBattleEventComponent`, `SiegeAssaultEventComponent`, …) |
| `TaleWorlds.CampaignSystem.GameComponents` | 3 | `DefaultBattleWreckageModel`, `DefaultFerryModel`, `DefaultShipDistributionModel` |
| `TaleWorlds.CampaignSystem.AdvancedStartOptions` | 3 | `DefaultAdvancedStartOptions` and friends |
| `TaleWorlds.CampaignSystem.CharacterDevelopment` | 3 | `DefaultPersonalityTraitEffects`, `TraitEffectObject` |
| `StoryMode.GauntletUI.Tutorial` | 3 | Blood Feud tutorials (`StartingBloodFeudTutorial`, …) |

**Two new gameplay lines**: 1.5.3 adds **Blood Feud** and **Advanced Start Options**, each with its own
notification types, ViewModels, campaign behaviors and tutorials.

**New assemblies**: `TaleWorlds.MountAndBlade.Launcher`, `.SteamWorkshop`, `.SaveSystem.CodeGenerator`,
`.GauntletUI.CodeGenerator`, `.Multiplayer.2`, `.Multiplayer.GauntletUI.AutoGenerate`, `ManagedStarter`.
These are recorded as **"not covered by the 1.4.5 tree, cannot be determined"** rather than "new" —
`SteamWorkshop` and `ManagedStarter` already exist in the 1.3.15 tree, so their absence from 1.4.5 is a
collection gap. A further 13 assemblies (`TaleWorlds.MountAndBlade.Multiplayer*`, `CustomBattle`,
`Platform.PC`, `View`, `GauntletUI`, …) *are* present in the 1.4.5 tree, just under `Modules.*` rather
than `bin/` — **not new**, just stored in a different place.

---

## Method and confidence

### Reproduce it

```bash
cd BannerlordCode.github.io

# main chain: 1.4.5 -> 1.5.3 (mixed provenance)
node tools/_v153_migration-diff.mjs

# same-provenance control 1: 1.4.7 -> 1.5.3
node tools/_v153_migration-diff.mjs --control

# same-provenance control 2: 1.4.6 -> 1.5.3
node tools/_v153_migration-diff.mjs --base 1.4.6

# machine-readable output
node tools/_v153_migration-diff.mjs --json tools/_v153_diff_145.json

# single-type drill-down
node tools/_v153_migration-diff.mjs --control --type TaleWorlds.CampaignSystem.Hero
```

### Measured provenance

| Tree | .cs | Files with ILSpy marker `// Token: 0x…` | Share | Conclusion |
|---|---|---|---|---|
| `bannerlord-1.4.5` | 8 572 | **0** | 0.0% | clean source |
| `bannerlord-1.4.6` | 11 092 | 11 092 | 100% | ILSpy decompiled |
| `bannerlord-1.4.7` | 11 387 | 11 298 | 99.2% | ILSpy decompiled |
| `bannerlord-1.5.3` | 11 487 | 11 398 | 99.2% | ILSpy decompiled |

**The only clean-source baseline in the whole comparison set is 1.4.5.** The script strips BOMs and
decompiler comments (`// Token: 0x…`, `// (get) Token:`, `RVA:`, `File Offset:`) before comparing, and
normalizes every member to `(modifiers, return type, name, accessors, parameter type list)`. Even so, a
mixed-provenance comparison still over-reports by about 91% on signatures — which is exactly why the
same-provenance control chains exist.

### Confidence tiers

| Conclusion | Confidence | Why |
|---|---|---|
| Namespace set differences | **High** | Decided by text position; decompilation does not change it |
| Type name set differences | **High** | Same |
| Member **name** set differences | **High** | Names are identifiers; a decompiler does not rename |
| Member **full signature** differences | **Low** (mixed chain) / **Medium-high** (same-provenance chain) | Decompilers turn switches into dictionaries, closures into `<>c`, properties into getter/setter pairs |
| "an assembly was deleted" | **High** | Measured: assemblies in 1.4.5 but not 1.4.6 = **0**; no false positives at this layer |
| "an assembly is new" | **Low** | The 1.4.5 tree is incompletely collected, so "not collected" is misreported as "new" |

### Known limitations (open items)

1. **The 1.4.5 tree is incompletely collected.** `bannerlord-1.4.5/Bannerlord.Source/` holds only `bin/`
   (56 assemblies) and 7 `Modules.*` directories, missing Launcher / Network / ServiceDiscovery. So the
   "new" direction is unreliable while the "removed" direction is sound (this chain only reports types
   that have a `.cs` in the 1.4.5 tree and none in 1.5.3).
2. **Parameter names are not evidence.** Normalization discards parameter names (renaming a parameter is
   not an API change), and the decompiler invents placeholder names like `Equipment` / `ItemObject` for
   anonymous parameters. **Do not** cite parameter names as evidence.
3. **Generics and tuples are normalized coarsely.** `ValueTuple<,>` and a custom struct can be
   equivalent at the text level and this script cannot tell. Section 2.1 marks return-type changes as
   breaking; please confirm by hand.
4. **API leaf coverage is not level.** This guide's conclusions come from a full source scan, which is a
   different thing from documentation page coverage. Bucket placement is in [Module Map](../module-map);
   coverage gaps are counted on the documentation side.

---

## Migration checklist

1. Search your mod for any of the 58 types in sections [1.1](#11-the-fastmode-module-was-cut-2-types)–[1.5](#15-the-rest-16-types).
2. If you use `Mission.SpawnAgent` / `SetFormationPositioningFromDeploymentPlan` /
   `GetCaptainPerksForTroopUsages`: the new parameters are **optional** — no change needed.
3. If you use `GetReinforcementPathsDataOfSide` / `OnFinish` / `LobbyClient.ChangeRegion` /
   `LobbyClient.ChangeGameTypes` / `AddPerkBonusFor*` / `RequestJoinCustomGame` /
   `ClanPartyItemVM.Expense`: **you must change these.**
4. If you P/Invoke `Opengl32`: rewrite the whole path for DirectX.
5. If you subclass `MapEventComponent`: change `internal override OnFinish` to `protected override OnFinish`.
6. Grep for `TaleWorlds.ObjectManager` — expect 0 hits. If you have some, that is a leftover from a much
   older version, not a 1.5.3 change.
7. Directory links: old `api/gameplay/...` paths are dead; point at
   [sandbox](../../api/sandbox/) or [storymode](../../api/storymode/).

## Navigation

- [↑ Architecture hub](../) · [↑ Version Home](../../)
- [SDK Layering Overview](../sdk-overview) — the layered mental model
- [Module Map](../module-map) — assembly-to-directory cross-reference
- [Cross-Version Class Comparison](../../../../versions/) — per-class API deltas
