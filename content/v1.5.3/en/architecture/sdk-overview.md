---
title: "SDK Layering Overview"
description: "The big-picture mental model for the Bannerlord v1.5.3 modding SDK: a five-band dependency map, what each band owns, where to start as a mod author, and the source path of every entry class."
---

# SDK Layering Overview

> This page is the antidote to "I have no big picture". It gives you a layered map you can read top-down
> and a reading order, so you never have to face a wall of class names again.

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
  scene object, crashes on load or on scene switch. Data that belongs to a band must stay with that band's owner.
- **UI vs. logic isolation.** A `ViewModel` only projects data onto the screen; it holds no rules. Rules live
  in `CampaignBehavior` / `MissionBehavior`, state lives in `Campaign` / `Mission`. The UI must never decide
  "when does this fight end".
- **Platform vs. engine isolation.** `Localization` and `Library` supply scene-agnostic primitives, so everyone
  depends on them and they depend on nobody. That is what lets a campaign mod and a battle mod reuse the same
  object system without coupling to each other.

> **Most mods only touch the top three bands**: Campaign (world rules), Mission (single fights), UI (interface).
> Drop one level to SaveSystem when you need persistence; only touch Foundation for low-level types or localization.

## What each band owns, with evidence

Every entry class below carries its real path inside the 1.5.3 source tree so you can check it yourself.

| Band | Assembly | What it owns | Entry class + source path | Catalog |
|---|---|---|---|---|
| Foundation | `TaleWorlds.Core` | The `Game` object for a session, core runtime types | `bannerlord-1.5.3/TaleWorlds.Core/Game.cs` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.Library` | Vector math, collections, the `ViewModel` base | `bannerlord-1.5.3/TaleWorlds.Library/ViewModel.cs` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.DotNet` | Reflection, extensions, platform abstraction | `bannerlord-1.5.3/TaleWorlds.DotNet/` | [core-extra](../../api/core-extra/) |
| Foundation | `TaleWorlds.Localization` | Every player-facing string goes through here | `bannerlord-1.5.3/TaleWorlds.Localization/TextObject.cs` | [localization](../../api/localization/) |
| Foundation | `TaleWorlds.InputSystem` | Keyboard/mouse and gamepad input | `bannerlord-1.5.3/TaleWorlds.InputSystem/` | [system](../../api/system/) |
| Module entry | `TaleWorlds.MountAndBlade` | **The module entry base class** (ships in the M&B assembly, acts as Foundation) | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/MBSubModuleBase.cs` | [core](../../api/core/) |
| Object system | `TaleWorlds.ObjectSystem` | `MBObjectManager`, the object registry and identity | `bannerlord-1.5.3/TaleWorlds.ObjectSystem/MBObjectManager.cs` | [campaign-ext](../../api/campaign-ext/) |
| Persistence | `TaleWorlds.SaveSystem` | `SaveManager`, plus `[SaveableField]` / `[SaveableProperty]` | `bannerlord-1.5.3/TaleWorlds.SaveSystem/SaveManager.cs` | [save-system](../../api/save-system/) |
| Module loading | `TaleWorlds.ModuleManager` | Module discovery and load order | `bannerlord-1.5.3/TaleWorlds.ModuleManager/` | [modulemanager](../../api/modulemanager/) |
| Campaign | `TaleWorlds.CampaignSystem` | Campaign world: heroes, clans, settlements, kingdoms, parties, behaviors | `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Campaign.cs` | [campaign](../../api/campaign/) |
| Campaign | `TaleWorlds.ActivitySystem` | Activity / decision subsystem | `bannerlord-1.5.3/TaleWorlds.ActivitySystem/` | [activitysystem](../../api/activitysystem/) |
| Campaign | `TaleWorlds.AchievementSystem` | Achievement subsystem | `bannerlord-1.5.3/TaleWorlds.AchievementSystem/` | [achievementsystem](../../api/achievementsystem/) |
| Mission | `TaleWorlds.MountAndBlade` | A single fight: `Mission`, `Agent`, `Team`, `Formation` | `bannerlord-1.5.3/TaleWorlds.MountAndBlade/Mission.cs` | [mission](../../api/mission/) |
| Mission | `TaleWorlds.MountAndBlade.CustomBattle` | Custom battle flow | `bannerlord-1.5.3/TaleWorlds.MountAndBlade.CustomBattle/` | [custombattle](../../api/custombattle/) |
| UI | `TaleWorlds.ScreenSystem` | The screen stack and `ScreenManager` | `bannerlord-1.5.3/TaleWorlds.ScreenSystem/ScreenManager.cs` | [gui](../../api/gui/) |
| UI | `TaleWorlds.GauntletUI` | `GauntletMovie` / `Widget` with two-way binding | `bannerlord-1.5.3/TaleWorlds.GauntletUI/` | [gui](../../api/gui/) |
| UI | `TaleWorlds.TwoDimension` | 2D rendering backend | `bannerlord-1.5.3/TaleWorlds.TwoDimension/` | [gui](../../api/gui/) |
| UI | `*.ViewModelCollection` | Per-domain ViewModel collections | `bannerlord-1.5.3/TaleWorlds.CampaignSystem.ViewModelCollection/` | [viewmodel](../../api/viewmodel/) |
| Engine | `TaleWorlds.Engine` | Scenes, terrain, render bindings | `bannerlord-1.5.3/TaleWorlds.Engine/` | [engine](../../api/engine/) |
| Platform | `TaleWorlds.Diamond` | Online-service abstraction (with `.AccessProvider.{GDK,GOG,Steam,Test}`) | `bannerlord-1.5.3/TaleWorlds.Diamond/` | [engine](../../api/engine/) |
| Network | `TaleWorlds.Network` | Transport layer | `bannerlord-1.5.3/TaleWorlds.Network/` | [network](../../api/network/) |
| Gameplay | `SandBox` / `StoryMode` | The two playable campaign modules and their UI | `bannerlord-1.5.3/SandBox/SandBoxGameManager.cs` | [sandbox](../../api/sandbox/) · [storymode](../../api/storymode/) |

> **Bucket names are not assembly names.** The docs are split by *responsibility*, not by DLL filename.
> One assembly is deliberately spread across several buckets: `TaleWorlds.MountAndBlade` becomes
> [core](../../api/core/) (`MBSubModuleBase` — module entry),
> [mission](../../api/mission/) (`Mission` / `Agent` / `Formation` — battle front doors) and
> [mission-ext](../../api/mission-ext/) (everything else), because those three roles are used at
> completely different moments in a mod's life.
> `TaleWorlds.ObjectSystem` lands in [campaign-ext](../../api/campaign-ext/) rather than getting its own bucket.
> Full mapping in [Module Map](../module-map).

## Reading order

Go bottom-up; click the catalog on the right at each step.

1. **Entry point first.** [MBSubModuleBase](../../api/core/MBSubModuleBase/) — when is my code called?
2. **Then the session root.** [Game](../../api/core-extra/Game/) — the boundary of a session.
3. **World rules.** [Campaign](../../api/campaign/Campaign/) and its siblings
   ([Hero](../../api/campaign/Hero/), [Clan](../../api/campaign/Clan/), [CampaignBehaviorBase](../../api/campaign/CampaignBehaviorBase/)).
4. **Single fights.** [Mission](../../api/mission/Mission/) → [Agent](../../api/mission/Agent/) → [Formation](../../api/mission/Formation/).
5. **Interface.** [ViewModel](../../api/core-extra/ViewModel/) + [ScreenManager](../../api/gui/ScreenManager/).
6. **Persistence.** [SaveManager](../../api/save-system/SaveManager/) and the save boundary.
7. **Localization.** [TextObject](../../api/localization/TextObject/) (its namespace is
   `TaleWorlds.Localization`, so the canonical rule sends it straight to
   [localization](../../api/localization/); no entry-point override applies).

## Where should I start?

| What you are building | Start in | Read first |
|---|---|---|
| A brand-new module | [core](../../api/core/) | `MBSubModuleBase` |
| Changing campaign rules or balance | [campaign](../../api/campaign/) | `Campaign`, `CampaignBehaviorBase` |
| A new conversation or event component | [campaign-ext](../../api/campaign-ext/) | `CampaignBehaviorBase`, `MissionBehavior` |
| Changing battle logic | [mission-ext](../../api/mission-ext/) | `MissionBehavior`, `MissionLogic` |
| A new screen | [gui](../../api/gui/) + [viewmodel](../../api/viewmodel/) | `ScreenBase`, `ViewModel` |
| Making data saveable | [save-system](../../api/save-system/) | `SaveManager`, `SaveableTypeDefiner` |
| Changing player-facing text | [localization](../../api/localization/) | `TextObject`, `MBTextManager`, text processors |
| Registry / item & character models | [core-extra](../../api/core-extra/) | `MBObjectManager`, `ItemObject` |

## Navigation

- [↑ Architecture hub](../)
- [Module Map](../module-map) · [Migrating from 1.4.5](../migration-from-1.4.5) · [↑ Version Home](../../)
