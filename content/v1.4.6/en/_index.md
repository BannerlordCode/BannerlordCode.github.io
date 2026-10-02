---
title: "Bannerlord v1.4.6 — version landing page"
description: "What v1.4.6 is, where it sits against 1.4.5 and 1.3.15, which layer a mod should start in, how much of the API is hand-written today, and a task-to-entry table."
---
# Bannerlord v1.4.6

## What this version is

v1.4.6 is a patch-line release. Its source tree, `bannerlord-1.4.6/`, has a property no earlier version had: **each top-level directory is a module / assembly**, with namespaces nested inside it. The 1.4.5 tree is `bannerlord-1.4.5/Bannerlord.Source/{bin,Modules.*}` — core assemblies under `bin/`, gameplay modules scattered across `Modules.SandBox/`, `Modules.Multiplayer/` and friends. The 1.4.6 dump flattens that two-level layout.

Doc sections are **not** named after source directories. Namespaces are folded into a fixed set of 17 subsystem buckets by the authoritative map `tools/_dir-map-canonical.json` (longest-prefix-wins plus a handful of exact type-name overrides):

```
bannerlord-1.4.6/TaleWorlds.CampaignSystem/   ↔   /v1.4.6/zh/api/campaign/
bannerlord-1.4.6/TaleWorlds.ScreenSystem/     ↔   /v1.4.6/zh/api/gui/
bannerlord-1.4.6/TaleWorlds.SaveSystem/       ↔   /v1.4.6/zh/api/save-system/
bannerlord-1.4.6/TaleWorlds.MountAndBlade/    ↔   /v1.4.6/zh/api/mission-ext/   (Mission / Agent / MissionBehavior go to mission/)
bannerlord-1.4.6/TaleWorlds.ObjectSystem/     ↔   /v1.4.6/zh/api/campaign-ext/
bannerlord-1.4.6/TaleWorlds.Core/             ↔   /v1.4.6/zh/api/core-extra/     (MBSubModuleBase / Module go to core/)
```

Which bucket a namespace lands in is decided by that rule set, not by lower-casing the directory name. Use the mapping table in [module map](architecture/module-map) to find a type instead of guessing directory names.

Scale, verified against source rather than estimated: 90 top-level directories, 71 of them gameplay modules (`TaleWorlds.*`, `SandBox`, `StoryMode`), 11385 `.cs` files in the whole tree, and 6478 distinct type files across those 71 modules once each module's `Properties/` directory is excluded.

## What is actually covered today

State this up front so you do not click into nothing. Everything under v1.4.6 is **hand-written**:

- **Six architecture pages** (three per language): the landing page you are reading, the [architecture overview](architecture/), the [SDK layering overview](architecture/sdk-overview/), the [module map](architecture/module-map/) and the [version delta](architecture/version-delta/).
- **Forty class pages, Chinese only**, spread over nine buckets (`core`, `core-extra`, `campaign`, `campaign-ext`, `mission`, `gui`, `engine`, `localization`, `save-system`). The list is in the [API reference](api/), which is where the Chinese class pages live.
- **Not written yet**: the `mission-ext/`, `viewmodel/`, `system/`, `modulemanager/`, `sandbox/`, `storymode/`, `custombattle/`, `network/`, `achievementsystem/` and `activitysystem/` buckets have no class pages, and the English tree has architecture prose but no class pages.

**This page is the mod's entry map**: read [SDK layering](architecture/sdk-overview/) to fix your layer, use the [module map](architecture/module-map/) to fix the bucket, then enter the [API reference](api/) and pick a class page by task. Where a bucket has no page yet, the module map says so explicitly ("0 pages pending") and lists the type names still owed.

## Where it sits against the other versions

| Version | Role in this wiki | Use its docs when |
| --- | --- | --- |
| **v1.4.6** | This page. The newest source snapshot of the 1.4.x line, with the flattened module layout | Your game is 1.4.6, or you are hunting for code in the new flat directory layout |
| **v1.4.5** | The previous patch of the same product line; source still uses `bin/` + `Modules.*` | You need to know whether a type was already there in 1.4.5 or is new in 1.4.6 |
| **v1.3.15** | The long-term stable line, with the most complete architecture prose | Your mod ships to 1.3.15 players, or you want the layering mental model that has had the longest review |

In one line: **the biggest 1.4.6-versus-1.4.5 change is the source layout plus a few new tooling assemblies; the gameplay API is essentially additive** (see [version delta](architecture/version-delta/)).

## Where a mod should start reading

Do not start from an A–Z class wall. Four steps, each answering exactly one question:

1. **Layer.** Read the [SDK layering overview](architecture/sdk-overview/) and decide whether your change belongs to Foundation, Campaign, Mission, UI or Save. This decides which objects you can obtain and how long they live.
2. **Module.** Read the [module map](architecture/module-map/) and find the directory that owns the responsibility. In 1.4.6 this step is short, because the directory name *is* the assembly name.
3. **Migration.** If your mod must also run on 1.3.15 or 1.4.5, read the checklist in [version delta](architecture/version-delta/) and confirm the members you depend on are still present.
4. **Concrete class.** Enter the [API reference](api/) (Chinese tree — that is where the class pages are), pick an entry page by task, and read "mental model / key members / risks and boundaries". If the bucket you need has no page yet, fall back to the module map's pending list and verify against source.

## Task-to-entry table

"Read this page first" is always an architecture page; the API column only lists **pages that exist**:

| I want to… | Read this page first | Then open these class pages |
| --- | --- | --- |
| Load at the right phase and get the game root | [SDK layering overview](architecture/sdk-overview/) | [MBSubModuleBase](../zh/api/core/MBSubModuleBase) · [Module](../zh/api/core/Module) · [Game](../zh/api/core-extra/Game) |
| Attach custom data to items, equipment, skills | [module map](architecture/module-map/) | [ItemObject](../zh/api/core-extra/ItemObject) · [Equipment](../zh/api/core-extra/Equipment) · [WeaponComponent](../zh/api/core-extra/WeaponComponent) · [BodyProperties](../zh/api/core-extra/BodyProperties) · [Crafting](../zh/api/core-extra/Crafting) · [SkillObject](../zh/api/core-extra/SkillObject) |
| Register game models | [SDK layering overview](architecture/sdk-overview/) | [GameModel](../zh/api/core-extra/GameModel) · [GameModelsManager](../zh/api/core-extra/GameModelsManager) · [GameManagerBase](../zh/api/core-extra/GameManagerBase) |
| Attach campaign behaviour and listen to events | [SDK layering overview](architecture/sdk-overview/) | [CampaignBehaviorBase](../zh/api/campaign/CampaignBehaviorBase) · [CampaignEvents](../zh/api/campaign/CampaignEvents) · [IDataStore](../zh/api/campaign/IDataStore) |
| Read campaign state, heroes, settlements | [module map](architecture/module-map/) | [Campaign](../zh/api/campaign/Campaign) · [CampaignGameStarter](../zh/api/campaign/CampaignGameStarter) · [Hero](../zh/api/campaign/Hero) · [Settlement](../zh/api/campaign/Settlement) |
| Resolve objects by MBGUID, register types | Object-system section of the [module map](architecture/module-map/) | [MBObjectManager](../zh/api/campaign-ext/MBObjectManager) · [MBObjectBase](../zh/api/campaign-ext/MBObjectBase) |
| Handle agents and behaviour inside one battle | [SDK layering overview](architecture/sdk-overview/) | [Mission](../zh/api/mission/Mission) · [MissionBehavior](../zh/api/mission/MissionBehavior) · [Agent](../zh/api/mission/Agent) · [Formation](../zh/api/mission/Formation) |
| Build UI, push a screen, get the render layer | [SDK layering overview](architecture/sdk-overview/) | [ScreenManager](../zh/api/gui/ScreenManager) · [ScreenBase](../zh/api/gui/ScreenBase) · [GauntletLayer](../zh/api/engine/GauntletLayer) · [ViewModel](../zh/api/core-extra/ViewModel) |
| Persist custom fields, define savable types | Save section of the [SDK layering overview](architecture/sdk-overview/) | [SaveManager](../zh/api/save-system/SaveManager) · [SaveableTypeDefiner](../zh/api/save-system/SaveableTypeDefiner) · [SaveableFieldAttribute](../zh/api/save-system/SaveableFieldAttribute) |
| Localised text and variables | [SDK layering overview](architecture/sdk-overview/) | [TextObject](../zh/api/localization/TextObject) |
| Understand where input keys come from | Input section of the [module map](architecture/module-map/) | pending — the `system/` bucket has no page yet, read the source |
| See what 1.4.6 adds over 1.4.5 / 1.3.15 | [version delta](architecture/version-delta/) | — |

## Navigation

- ↔ Sibling: [中文](../zh/) · [v1.4.5](../../v1.4.5/) · [v1.3.15](../../v1.3.15/)
- ↓ Down: [architecture](architecture/) · [API reference](api/)
- ↔ Cross-version: [per-class API comparison](../../versions/)
- ⬆ Site: [home](../../)