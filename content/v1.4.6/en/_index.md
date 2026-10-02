---
title: "Bannerlord v1.4.6 — version landing page"
description: "What v1.4.6 is, where it sits against 1.4.5 and 1.3.15, which layer a mod should start in, and a task-to-entry table."
---
# Bannerlord v1.4.6

## What this version is

v1.4.6 is a patch-line release. Its source tree, `bannerlord-1.4.6/`, has a property no earlier version had: **each top-level directory is a module / assembly**, with namespaces nested inside it. The 1.4.5 tree is `bannerlord-1.4.5/Bannerlord.Source/{bin,Modules.*}` — core assemblies under `bin/`, gameplay modules scattered across `Modules.SandBox/`, `Modules.Multiplayer/` and friends. The 1.4.6 dump flattens that two-level layout.

Doc sections are **not** named after source directories. Namespaces are folded into a fixed set of 17 subsystem buckets by the authoritative map `tools/_dir-map-canonical.json` (longest-prefix-wins plus a handful of exact type-name overrides):

```
bannerlord-1.4.6/TaleWorlds.CampaignSystem/   ↔   /v1.4.6/en/api/campaign/
bannerlord-1.4.6/TaleWorlds.ScreenSystem/     ↔   /v1.4.6/en/api/gui/
bannerlord-1.4.6/TaleWorlds.SaveSystem/       ↔   /v1.4.6/en/api/save-system/
bannerlord-1.4.6/TaleWorlds.MountAndBlade/    ↔   /v1.4.6/en/api/mission-ext/   (Mission / Agent / MissionBehavior go to mission/)
bannerlord-1.4.6/TaleWorlds.ObjectSystem/     ↔   /v1.4.6/en/api/campaign-ext/
bannerlord-1.4.6/TaleWorlds.Core/             ↔   /v1.4.6/en/api/core-extra/     (MBSubModuleBase / Module go to core/)
```

Which bucket a namespace lands in is decided by that rule set, not by lower-casing the directory name. Use the mapping table in [module map](architecture/module-map/) to find a type instead of guessing directory names.

Scale, verified against source rather than estimated: 90 top-level directories, 71 of them gameplay modules (`TaleWorlds.*`, `SandBox`, `StoryMode`), 11385 `.cs` files in the whole tree, and 6478 distinct type files across those 71 modules once each module's `Properties/` directory is excluded.

## Where it sits against the other versions

| Version | Role in this wiki | Use its docs when |
| --- | --- | --- |
| **v1.4.6** | This page. The newest source snapshot of the 1.4.x line, with the flattened module layout | Your game is 1.4.6, or you are hunting for code in the new flat directory layout |
| **v1.4.5** | The previous patch of the same product line; source still uses `bin/` + `Modules.*` | You need to know whether a type was already there in 1.4.5 or is new in 1.4.6 |
| **v1.3.15** | The long-term stable line, with the most complete architecture prose | Your mod ships to 1.3.15 players, or you want the layering mental model that has had the longest review |

In one line: **the biggest 1.4.6-versus-1.4.5 change is the source layout plus a few new tooling assemblies; the gameplay API is essentially additive** (see [version delta](architecture/version-delta/)).

## Where a mod should start reading

Do not start from an A–Z class wall. Four steps, each answering exactly one question:

1. **Layer.** Read [SDK layering overview](architecture/sdk-overview/) and decide whether your change belongs to Foundation, Campaign, Mission, UI or Save. This decides which objects you can obtain and how long they live.
2. **Module.** Read [module map](architecture/module-map/) and find the directory that owns the responsibility. In 1.4.6 this step is short, because the directory name *is* the assembly name.
3. **Migration.** If your mod must also run on 1.3.15 or 1.4.5, read the checklist in [version delta](architecture/version-delta/) and confirm the members you depend on are still present.
4. **Concrete class.** Enter the API section, find the type page through the module's A–Z catalog, then read "mental model / key members / risks and boundaries".

## Task-to-entry table

| I want to… | Read this page first | Then enter this module |
| --- | --- | --- |
| Load at the right phase and get the game root | [SDK layering overview](architecture/sdk-overview/) | [module entry core/ and core-extra/](api/core/) |
| Attach campaign behaviour and listen to events | [SDK layering overview](architecture/sdk-overview/) | [campaign/](api/campaign/) · [campaign-ext/](api/campaign-ext/) |
| Handle agents and behaviour inside one battle | [SDK layering overview](architecture/sdk-overview/) | [mission/ and mission-ext/](api/mission-ext/) |
| Build UI, push a screen, bind a ViewModel | [SDK layering overview](architecture/sdk-overview/) | [gui/](api/gui/) · [engine/](api/engine/) · [viewmodel/](api/viewmodel/) |
| Persist custom fields, load saves, define types | Save section of [SDK layering overview](architecture/sdk-overview/) | [save-system/](api/save-system/) |
| Resolve objects by MBGUID, register types | Object-system section of [module map](architecture/module-map/) | [campaign-ext/](api/campaign-ext/) |
| Localised text and variables | [SDK layering overview](architecture/sdk-overview/) | [localization/](api/localization/) |
| Maths, collections, logging helpers | [module map](architecture/module-map/) | [core-extra/](api/core-extra/) |
| Understand where input keys come from | Input section of [module map](architecture/module-map/) | [system/](api/system/) |
| See what 1.4.6 adds over 1.4.5 / 1.3.15 | [version delta](architecture/version-delta/) | — |

> The API sections in the right-hand column are produced by the API batch. If one of them is not reachable yet, keep using this page and [architecture](architecture/): the architecture pages do not depend on the API sections.

## Navigation

- ↔ Siblings: [中文](../zh/) · [v1.4.5](../../v1.4.5/) · [v1.3.15](../../v1.3.15/)
- ↓ Down: [architecture](architecture/) · [API reference](api/)
- ↔ Cross-version: [per-class API comparison](../../versions/)
- ⬆ Site: [home](../../)