---
title: Bannerlord v1.5.3
description: Bannerlord v1.5.3 modding documentation — the layered mental model, an honest account of what is written (27 hand-written facade pages) and what is not (6 797 of 6 824 types), and a source-measured 1.4.5 migration guide.
---

# Bannerlord v1.5.3

## Mental model

v1.5.3 is a **fully sourced** version: `bannerlord-1.5.3/` holds **11 487 `.cs` files** across
**68 `TaleWorlds.*` directories** plus the `SandBox` / `StoryMode` gameplay modules. That is why this
version can state real numbers — assembly boundaries, bucket membership, type counts — while the older
version trees cannot. There is nothing here to guess at.

Think of the SDK as a stack of assemblies that **only ever depend downward**:

```
   UI        GauntletUI · ScreenSystem · ViewModelCollection
   Mission   MountAndBlade · CustomBattle · Multiplayer
   Campaign  CampaignSystem · ObjectSystem · ActivitySystem
   Foundation Core · Library · DotNet · Localization · InputSystem
   Native    TaleWorlds.Native.dll  (P/Invoke, out of scope for this tree)
```

Most mods only touch the top three bands: **Campaign** (world rules), **Mission** (one fight),
**UI** (interface). The full map is in [SDK Overview](./architecture/sdk-overview); the assembly-level
table is in [Module Map](./architecture/module-map).

> **Source provenance**
> `bannerlord-1.5.3/` is **ILSpy decompiler output** — 11 398 of 11 487 files carry `// Token: 0x…`
> markers. Signatures are faithful; the formatting is the decompiler's, not the original author's.
> This matters when diffing against 1.4.5: read
> [Migrating from 1.4.5](./architecture/migration-from-1.4.5) before trusting any signature-level
> difference.

---

## What this tree has right now

**27 hand-written type pages.** Each one explains what the class is responsible for, what every member
is *for*, the mental model of how to use it, and worked examples — not a signature dump.

They are written in **Chinese** and live at `zh/api/`. The English side of v1.5.3 currently has
**no type pages at all** — only structure pages. If you read English and want the type
detail, the Chinese pages are the type detail; [API Class Reference](./api/) is the English hub that
routes into them.

| Bucket | Type pages (27 total) | Source path under `bannerlord-1.5.3/` |
|---|---|---|
| `campaign` (12) | [Campaign](../zh/api/campaign/Campaign) · [CampaignData](../zh/api/campaign/CampaignData) · [CampaignGameStarter](../zh/api/campaign/CampaignGameStarter) · [CampaignGameMode](../zh/api/campaign/CampaignGameMode) · [CampaignBehaviorBase](../zh/api/campaign/CampaignBehaviorBase) · [ICampaignBehavior](../zh/api/campaign/ICampaignBehavior) · [GameModels](../zh/api/campaign/GameModels) · [CampaignEventDispatcher](../zh/api/campaign/CampaignEventDispatcher) · [CampaignEventReceiver](../zh/api/campaign/CampaignEventReceiver) · [CampaignPeriodicEventManager](../zh/api/campaign/CampaignPeriodicEventManager) · [MBCampaignEvent](../zh/api/campaign/MBCampaignEvent) · [CampaignEvents](../zh/api/campaign/CampaignEvents) | `TaleWorlds.CampaignSystem/{Campaign,CampaignData,CampaignGameStarter,CampaignGameMode,CampaignBehaviorBase,ICampaignBehavior,GameModels,CampaignEventDispatcher,CampaignEventReceiver,CampaignPeriodicEventManager,MBCampaignEvent,CampaignEvents}.cs` |
| `campaign-ext` (2) | [CampaignBehaviorManager](../zh/api/campaign-ext/CampaignBehaviorManager) · [DefaultSettlementProsperityModel](../zh/api/campaign-ext/DefaultSettlementProsperityModel) | `TaleWorlds.CampaignSystem/…/CampaignBehaviors/CampaignBehaviorManager.cs`, `…/GameComponents/DefaultSettlementProsperityModel.cs` |
| `core-extra` (3) | [GameModel](../zh/api/core-extra/GameModel) · [MBGameModel](../zh/api/core-extra/MBGameModel) · [GameModelsManager](../zh/api/core-extra/GameModelsManager) | `TaleWorlds.Core/{GameModel,MBGameModel,GameModelsManager}.cs` |
| `core` (1) | [MBSubModuleBase](../zh/api/core/MBSubModuleBase) | `TaleWorlds.MountAndBlade/MBSubModuleBase.cs` |
| `mission` (2) | [Mission](../zh/api/mission/Mission) · [MissionState](../zh/api/mission/MissionState) | `TaleWorlds.MountAndBlade/{Mission,MissionState}.cs` |
| `gui` (2) | [ScreenManager](../zh/api/gui/ScreenManager) · [ScreenBase](../zh/api/gui/ScreenBase) | `TaleWorlds.ScreenSystem/{ScreenManager,ScreenBase}.cs` |
| `engine` (1) | [GauntletLayer](../zh/api/engine/GauntletLayer) | `TaleWorlds.Engine.GauntletUI/GauntletLayer.cs` |
| `save-system` (4) | [SaveManager](../zh/api/save-system/SaveManager) · [ISaveDriver](../zh/api/save-system/ISaveDriver) · [SaveContext](../zh/api/save-system/SaveContext) · [SaveableTypeDefiner](../zh/api/save-system/SaveableTypeDefiner) | `TaleWorlds.SaveSystem/{SaveManager,ISaveDriver,SaveableTypeDefiner}.cs`, `…/Save/SaveContext.cs` |

Counting structure pages: v1.5.3 is **6 pages in English** (this page, [API Class Reference](./api/),
and the four under [Architecture](./architecture/)) and **33 in Chinese** (those same six plus the 27
type pages).

## What this tree does not have

Said plainly, so you do not hunt for something that is not here:

- Scanning the 1.5.3 source with noise namespaces (`AutoGenerated`, `obj/`, …) excluded yields
  **6 824 public types** (class 5 621 / enum 610 / struct 322 / interface 242 / delegate 29).
- This tree documents **27** of them — the facade classes listed above — about **0.4 %**.
- The other **6 797 types are not written**. They are not "coming soon" and not "generated on demand".
  There is simply no page for them yet. A type you cannot find under `zh/api/` below is in that group.
- **There are no bucket index pages.** `api/mission-ext/`, `api/sandbox/`, `api/viewmodel/` and the
  other empty buckets have no `_index.md`, so nothing links into them. The "click the bucket name to
  enter the directory" navigation used by the older version trees does not exist here — enter through
  this page or through [Module Map](./architecture/module-map).

### The gap, by bucket

Source: `tools/_v153_inventory.json` (read-only report data, field `types[].dir`, produced by
`tools/_v153_inventory.mjs` over `../bannerlord-1.5.3`). "Written" is the actual number of `.md` files
under `content/v1.5.3/zh/api/<bucket>/`. "Not written" is *types − pages*, i.e. it assumes the site's
one-type-one-page convention; it is not a per-type audit.

| Bucket | Types in 1.5.3 | Pages written | Not written |
|---|---:|---:|---:|
| `mission-ext` | 2 065 | 0 | 2 065 |
| `sandbox` | 1 247 | 0 | 1 247 |
| `campaign-ext` | 771 | 2 | 769 |
| `campaign` | 706 | 12 | 694 |
| `viewmodel` | 653 | 0 | 653 |
| `core-extra` | 516 | 3 | 513 |
| `gui` | 273 | 2 | 271 |
| `engine` | 216 | 1 | 215 |
| `storymode` | 183 | 0 | 183 |
| `save-system` | 56 | 4 | 52 |
| `custombattle` | 40 | 0 | 40 |
| `network` | 32 | 0 | 32 |
| `localization` | 21 | 0 | 21 |
| `system` | 19 | 0 | 19 |
| `modulemanager` | 9 | 0 | 9 |
| `activitysystem` | 6 | 0 | 6 |
| `mission` | 5 | 2 | 3 |
| `achievementsystem` | 4 | 0 | 4 |
| `core` | 2 | 1 | 1 |
| **Total** | **6 824** | **27** | **6 797** |

Three things worth knowing about that shape:

1. **The gap is very uneven.** `mission-ext` alone holds 2 065 unwritten types — 30 % of the whole gap.
   It is everything in `TaleWorlds.MountAndBlade` except the three battle front doors: battle widgets,
   every `MissionBehavior`, `MissionLogic`, and all of multiplayer.
2. **The 27 written pages sit at the "who calls me" layer** — module entry point, campaign root,
   event dispatcher, behavior manager, screen manager, save manager. These are the types a mod must
   touch, and that layer is genuinely small (`core` is 2 types, `mission` is 5).
3. **`sandbox` and `storymode` are entirely blank** (1 247 + 183). Those are the playable campaign
   modules; their implementation classes exist in the source tree but have no pages.

### Bucket membership is not a judgement call

Every bucket is the output of the authoritative namespace rules in `tools/_dir-map-canonical.json`
(longest-prefix-wins, `entryPointDirs` ahead of prefix matching) applied to the real 1.5.3 namespace
set. Of **534** distinct namespace declarations across `TaleWorlds.*` / `SandBox*` / `StoryMode*`,
**442** carry non-noise types and land in **19** buckets. One type maps to exactly one page path.

---

## How to use this version

1. **Start at the big picture.** [SDK Overview](./architecture/sdk-overview) gives the layered model
   and the reading order; [Module Map](./architecture/module-map) is the assembly-level table with
   "should a mod care?" ratings.
2. **Enter through the table above.** It is the only complete list of type pages that exist.
   Want to hook behavior? [ICampaignBehavior](../zh/api/campaign/ICampaignBehavior) and
   [CampaignBehaviorBase](../zh/api/campaign/CampaignBehaviorBase). Changing world numbers?
   [Campaign](../zh/api/campaign/Campaign) and [GameModels](../zh/api/campaign/GameModels).
   Adding a screen? [ScreenManager](../zh/api/gui/ScreenManager) and
   [ScreenBase](../zh/api/gui/ScreenBase). Making data saveable?
   [SaveManager](../zh/api/save-system/SaveManager).
3. **Upgrading?** Read [Migrating from 1.4.5](./architecture/migration-from-1.4.5) first. It is
   source-measured and tells you which findings you can act on.

## Usage example

A real 1.5.3 module entry point. Every signature here is traceable: `MBSubModuleBase.OnGameStart` and
`InitializeGameStarter` in `TaleWorlds.MountAndBlade/MBSubModuleBase.cs`, `CampaignGameStarter.AddBehavior`
and `.AddModel<T>` in `TaleWorlds.CampaignSystem/CampaignGameStarter.cs`, `Campaign.Current` in
`TaleWorlds.CampaignSystem/Campaign.cs`, `Clan.PlayerClan` in `TaleWorlds.CampaignSystem/Clan.cs`.

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public class MySubModule : MBSubModuleBase
{
    // 1.5.3 signature: OnGameStart(Game, IGameStarter). Older docs show IModularState — no such type.
    protected internal override void OnGameStart(Game game, IGameStarter gameStarterObject)
    {
        base.OnGameStart(game, gameStarterObject);

        // CampaignGameStarter is the campaign-side implementation of IGameStarter.
        CampaignGameStarter starter = (CampaignGameStarter)gameStarterObject;

        // 1) Hang a behavior off the campaign. CampaignBehaviorManager drives it afterwards.
        starter.AddBehavior(new MyCampaignBehavior());

        // 2) Override a default model. AddModel<T> binds MBGameModel<T> on top of the stack.
        starter.AddModel(new MyDefaultSettlementProsperityModel());

        // Campaign is the world-state root: every cross-save world fact is read and written here.
        if (Campaign.Current != null)
        {
            Clan playerClan = Clan.PlayerClan;
        }
    }
}
```

The matching behavior — note that 1.5.3's event interface exposes
`AddNonSerializedListener(object owner, Action<T1, T2>)`, not `AddListener`:

```csharp
using TaleWorlds.CampaignSystem;

public class MyCampaignBehavior : CampaignBehaviorBase
{
    public MyCampaignBehavior() : base("MyCampaignBehavior") { }

    // CampaignEvents.HeroLevelledUp is IMbEvent<Hero, bool>
    //   bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignEvents.cs
    public override void RegisterEvents()
        => CampaignEvents.HeroLevelledUp.AddNonSerializedListener(this, OnHeroLevelledUp);

    // Everything your behavior saves goes through IDataStore here.
    public override void SyncData(IDataStore dataStore) { }

    private void OnHeroLevelledUp(Hero hero, bool shouldNotify) { /* react */ }
}
```

## Other versions

- ← [v1.4.5](../../v1.4.5/) — source available for gameplay modules only
- [v1.3.15](../../v1.3.15/) — the long-standing canonical documentation set
- [v1.3.0](../../v1.3.0/) — earliest version documented here
- [Cross-version class comparison](../../versions/) — per-class API deltas

<!-- BEGIN SECTION INDEX -->

## ↑ Up

- [Site Home](../../) — all versions
- [Chinese version home](../zh/) — the same tree in Chinese, and where the type pages live

## ↓ Content

- [Architecture](./architecture/) — layering, assembly map, migration
- [API Class Reference](./api/) — the English hub for the 27 written type pages and the per-bucket gaps
- [SDK Overview](./architecture/sdk-overview) — the layered mental model and reading order
- [Module Map](./architecture/module-map) — every 1.5.3 assembly, what it owns, where it belongs
- [Migrating from 1.4.5](./architecture/migration-from-1.4.5) — what was removed, changed, and added

<!-- END SECTION INDEX -->