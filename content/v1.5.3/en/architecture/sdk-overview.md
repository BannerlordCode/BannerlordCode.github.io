---
title: "SDK Layering Overview"
description: "The big-picture mental model for the Bannerlord v1.5.3 modding SDK: a five-band dependency map, what each band owns, where to start as a mod author, and the source path of every entry class."
---

# SDK Layering Overview

> This page is the antidote to "I have no big picture". It gives you a layered map you can read
> top-down and a reading order, so you never have to face a wall of class names again.

## One-line position

v1.5.3's managed code is a set of `TaleWorlds.*` assemblies that are **strictly layered and only ever
depend downward**. Mod code sits on top and can touch any layer — but you can only pick the right entry
point, and only understand why a `Campaign` object must never be stuffed into a `Mission`, once you know
who depends on whom.

## Mental model

Picture a building. **Dependencies point down**: upper layers know lower layers, lower layers have never
heard of upper ones.

```
   ┌────────────────────────────────────────────────────────────┐
   │ UI band        GauntletUI · ScreenSystem · ViewModelCollection │
   │                     │ depends on                              │
   │                     ▼                                        │
   │ Mission band   MountAndBlade · CustomBattle · Multiplayer    │
   │                     │                                        │
   │                     ▼                                        │
   │ Campaign band  CampaignSystem · ObjectSystem · ActivitySystem│
   │                     │                                        │
   │                     ▼                                        │
   │ Foundation     Core · Library · DotNet · Localization        │
   │                     │                                        │
   │                     ▼                                        │
   │ Native engine  TaleWorlds.Native.dll (P/Invoke)             │
   └────────────────────────────────────────────────────────────┘
```

Read as `Foundation ← Campaign ← Mission ← UI`: "left is depended on by right". UI depends on Mission,
Mission depends on Campaign, Campaign depends on Foundation.

**Why the bands are cut where they are**

- **Persistence vs. runtime isolation.** `Campaign` owns world state that survives a save; `Mission` is a
  short-lived container for one fight. Persisting an `Agent` as campaign state, or caching a `Hero` into a
  scene object, crashes on load or on scene switch. Data that belongs to a band must stay with that
  band's owner.
- **UI vs. logic isolation.** A `ViewModel` only projects data onto the screen; it holds no rules. Rules
  live in `CampaignBehavior` / `MissionBehavior`, state lives in `Campaign` / `Mission`. The UI must never
  decide "when does this fight end".
- **Platform vs. engine isolation.** `Localization` and `Library` supply scene-agnostic primitives, so
  everyone depends on them and they depend on nobody. That is what lets a campaign mod and a battle mod
  reuse the same object system without coupling to each other.

> **Most mods only touch the top three bands**: Campaign (world rules), Mission (single fights),
> UI (interface). Drop one level to SaveSystem when you need persistence; only touch Foundation for
> low-level types or localization.

## What each band owns, with evidence

Every entry class below carries its real path inside the 1.5.3 source tree so you can check it
yourself. The **Bucket** column is the documentation bucket the type maps to — a slug, **not** a link,
because bucket index pages are not written in this tree. Where a page exists it is linked; otherwise the
row says "no page".

| Band | Assembly | What it owns | Entry class + source path | Bucket | Page |
|---|---|---|---|---|---|
| Foundation | `TaleWorlds.Core` | The `Game` object for a session, core runtime types | `bannerlord-1.5.3/TaleWorlds.Core/Game.cs` | `core-extra` | [GameModel](../../../zh/api/core-extra/GameModel) |
| Foundation | `TaleWorlds.Library` | Vector math, collections, the `ViewModel` base | `bannerlord-1.5.3/TaleWorlds.Library/ViewModel.cs` | `core-extra` | no page for `ViewModel` |
| Foundation | `TaleWorlds.DotNet` | Reflection, extensions, platform abstraction | `bannerlord-1.5.3/TaleWorlds.DotNet/` | `core-extra` | no page |
| Foundation | `TaleWorlds.Localization` | Every player-facing string goes through here | `bannerlord-1.5.3/TaleWorlds.Localization/TextObject.cs` | `localization` | no page |
| Foundation | `TaleWorlds.InputSystem` | Keyboard/mouse and gamepad input | `bannerlord-1.5.3/TaleWorlds.InputSystem/` | `system` | no page |
| Module entry | `TaleWorlds.MountAndBlade` | **The module entry base class** (ships in the M&B assembly, acts as Foundation) | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MBSubModuleBase.cs` | `core` | [MBSubModuleBase](../../../zh/api/core/MBSubModuleBase) |
| Object system | `TaleWorlds.ObjectSystem` | `MBObjectManager`, the object registry and identity | `bannerlord-1.5.3/TaleWorlds.ObjectSystem/MBObjectManager.cs` | `campaign-ext` | no page |
| Persistence | `TaleWorlds.SaveSystem` | `SaveManager`, plus `[SaveableField]` / `[SaveableProperty]` | `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveManager.cs` | `save-system` | [SaveManager](../../../zh/api/save-system/SaveManager) |
| Module loading | `TaleWorlds.ModuleManager` | Module discovery and load order | `bannerlord-1.5.3/TaleWorlds.ModuleManager/` | `modulemanager` | no page |
| Campaign | `TaleWorlds.CampaignSystem` | Campaign world: heroes, clans, settlements, kingdoms, parties, behaviors | `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Campaign.cs` | `campaign` | [Campaign](../../../zh/api/campaign/Campaign) |
| Campaign | `TaleWorlds.CampaignSystem` | Behavior registration, campaign lifecycle | `bannerlord-1.5.3/TaleWorlds.CampaignSystem/CampaignGameStarter.cs` | `campaign` | [CampaignGameStarter](../../../zh/api/campaign/CampaignGameStarter) |
| Campaign | `TaleWorlds.ActivitySystem` | Activity / decision subsystem | `bannerlord-1.5.3/TaleWorlds.ActivitySystem/` | `activitysystem` | no page |
| Campaign | `TaleWorlds.AchievementSystem` | Achievement subsystem | `bannerlord-1.5.3/TaleWorlds.AchievementSystem/` | `achievementsystem` | no page |
| Mission | `TaleWorlds.MountAndBlade` | A single fight: `Mission`, `Agent`, `Team`, `Formation` | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs` | `mission` | [Mission](../../../zh/api/mission/Mission) · [MissionState](../../../zh/api/mission/MissionState) |
| Mission | `TaleWorlds.MountAndBlade.CustomBattle` | Custom battle flow | `bannerlord-1.5.3/TaleWorlds.MountAndBlade.CustomBattle/` | `custombattle` | no page |
| UI | `TaleWorlds.ScreenSystem` | The screen stack and `ScreenManager` | `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenManager.cs` | `gui` | [ScreenManager](../../../zh/api/gui/ScreenManager) · [ScreenBase](../../../zh/api/gui/ScreenBase) |
| UI | `TaleWorlds.GauntletUI` | `GauntletMovie` / `Widget` with two-way binding | `bannerlord-1.5.3/TaleWorlds.GauntletUI/` | `gui` | no page |
| UI | `TaleWorlds.TwoDimension` | 2D rendering backend | `bannerlord-1.5.3/TaleWorlds.TwoDimension/` | `gui` | no page |
| UI | `*.ViewModelCollection` | Per-domain ViewModel collections | `bannerlord-1.5.3/TaleWorlds.CampaignSystem.ViewModelCollection/` | `viewmodel` | no page |
| Engine | `TaleWorlds.Engine` | Scenes, terrain, render bindings, the Gauntlet render layer | `bannerlord-1.5.3/TaleWorlds.Engine.GauntletUI/GauntletLayer.cs` | `engine` | [GauntletLayer](../../../zh/api/engine/GauntletLayer) |
| Platform | `TaleWorlds.Diamond` | Online-service abstraction (with `.AccessProvider.{GDK,GOG,Steam,Test}`) | `bannerlord-1.5.3/TaleWorlds.Diamond/` | `engine` | no page |
| Network | `TaleWorlds.Network` | Transport layer | `bannerlord-1.5.3/TaleWorlds.Network/` | `network` | no page |
| Gameplay | `SandBox` / `StoryMode` | The two playable campaign modules and their UI | `bannerlord-1.5.3/SandBox/SandBoxGameManager.cs` | `sandbox` · `storymode` | no page |

> **Bucket names are not assembly names.** The documentation is split by *responsibility*, not by DLL
> filename. One assembly is deliberately spread across several buckets: `TaleWorlds.MountAndBlade`
> becomes `core` (`MBSubModuleBase` — module entry), `mission` (`Mission` / `Agent` / `Formation` —
> battle front doors) and `mission-ext` (everything else, 2 065 types), because those three roles are
> used at completely different moments in a mod's life. `TaleWorlds.ObjectSystem` lands in
> `campaign-ext` rather than getting its own bucket. Full mapping in [Module Map](../module-map).

## Reading order

Go bottom-up. Where a page exists, follow the link; where it does not, the type name is all you get —
read it in the source tree at the path given in the table above.

1. **Entry point first.** [MBSubModuleBase](../../../zh/api/core/MBSubModuleBase) — when is my code called?
   `protected internal virtual void InitializeGameStarter(Game, IGameStarter)` is where you attach
   campaign behaviors and models.
2. **Then the session root.** `Game` (`bannerlord-1.5.3/TaleWorlds.Core/Game.cs`, no page) — the boundary
   of a session.
3. **World rules.** [Campaign](../../../zh/api/campaign/Campaign) →
   [CampaignBehaviorBase](../../../zh/api/campaign/CampaignBehaviorBase) →
   [ICampaignBehavior](../../../zh/api/campaign/ICampaignBehavior). `Hero`, `Clan`, `Settlement` and
   `Party` have no pages yet; read them in `bannerlord-1.5.3/TaleWorlds.CampaignSystem/`.
4. **Single fights.** [Mission](../../../zh/api/mission/Mission) →
   [MissionState](../../../zh/api/mission/MissionState). `Agent` and `Formation` have no pages; they are in
   `bannerlord-1.5.3/TaleWorlds.MountAndBlade/`. Everything else battle-shaped lives in `mission-ext`,
   which has no pages at all.
5. **Interface.** [ScreenBase](../../../zh/api/gui/ScreenBase) → [ScreenManager](../../../zh/api/gui/ScreenManager).
   `ViewModel` (`TaleWorlds.Library/ViewModel.cs`) has no page.
6. **Persistence.** [SaveManager](../../../zh/api/save-system/SaveManager) →
   [SaveableTypeDefiner](../../../zh/api/save-system/SaveableTypeDefiner) →
   [ISaveDriver](../../../zh/api/save-system/ISaveDriver) → [SaveContext](../../../zh/api/save-system/SaveContext).
7. **Localization.** `TextObject`, `MBTextManager` and the text processors are in
   `bannerlord-1.5.3/TaleWorlds.Localization/`. The bucket is `localization` (0 pages): the namespace
   rule sends the namespace straight there, and no entry-point override applies.

## Where should I start?

Pages exist for 27 types only. This table routes you to the ones that exist and names the source
directory for the rest.

| What you are building | Bucket | Read first | Page status |
|---|---|---|---|
| A brand-new module | `core` | `MBSubModuleBase` | [written](../../../zh/api/core/MBSubModuleBase) |
| Changing campaign rules or balance | `campaign` | `Campaign`, `CampaignBehaviorBase`, `GameModels` | [written](../../../zh/api/campaign/Campaign) |
| A new conversation or event component | `campaign` + `campaign-ext` | `ICampaignBehavior`, `CampaignBehaviorManager` | [written](../../../zh/api/campaign/ICampaignBehavior) |
| Changing battle logic | `mission-ext` | `MissionBehavior`, `MissionLogic` | **no pages** — `TaleWorlds.MountAndBlade/` |
| A new screen | `gui` | `ScreenBase`, `ScreenManager` | [written](../../../zh/api/gui/ScreenBase) |
| Making data saveable | `save-system` | `SaveManager`, `SaveableTypeDefiner` | [written](../../../zh/api/save-system/SaveManager) |
| Changing player-facing text | `localization` | `TextObject`, `MBTextManager` | **no pages** — `TaleWorlds.Localization/` |
| Registry / item & character models | `core-extra` | `GameModel`, `GameModelsManager`, `MBObjectManager` | [GameModel](../../../zh/api/core-extra/GameModel) written; `MBObjectManager` in `TaleWorlds.ObjectSystem/` is not |
| SandBox / StoryMode gameplay changes | `sandbox` · `storymode` | `SandBoxGameManager`, module campaign behaviors | **no pages** — `SandBox/`, `StoryMode/` |

Full per-bucket counts are on the [version home](../).

## Navigation

- [↑ Architecture hub](../) · [↑ Version Home](../../)
- [Module Map](../module-map) · [Migrating from 1.4.5](../migration-from-1.4.5)