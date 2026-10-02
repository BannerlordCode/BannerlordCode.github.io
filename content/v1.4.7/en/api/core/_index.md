---
title: "Core — mod entry classes only"
description: "This directory holds only the 2 module-loading entry classes: `MBSubModuleBase` and `Module`. `Module` is the host (a si"
---
# Core — mod entry classes only

This directory holds **only the 2 module-loading entry classes**: `MBSubModuleBase` and `Module`. `Module` is the host (a singleton, `sealed`, not meant to be inherited); `MBSubModuleBase` is the one you subclass.

Everything else foundational is in [Core-Extra](../core-extra/): `TaleWorlds.Core`, `TaleWorlds.Library` and `TaleWorlds.DotNet`, including `Game`, `GameStateManager`, `ViewModel` and `AssemblyLoader`.

1.4.5 shipped `Game` in both `core/` and `core-extra/`; v1.4.7 keeps only the `core-extra/` copy, because that is what the namespace rule says.

## When to go to the other directory

| What you want to do | Go to |
| --- | --- |
| Subclass and override an entry class | **this page** |
| Look up everything else in battle/mission logic | [Mission-Ext](../mission-ext/) |
| Look up campaign entities and state | [Campaign](../campaign/) |
| Look up runtime facilities beyond module loading | [Core-Extra](../core-extra/) |

The reverse link exists too: the `Mission-Ext` index page points back here.

## Pages in this area (1)

| Page | Type |
| --- | --- |
| [MBSubModuleBase](./MBSubModuleBase) | `public abstract class MBSubModuleBase` — the class a mod subclasses |

`Module` is documented in the Chinese tree at [zh/api/core/Module](../../../zh/api/core/Module); that page has no English counterpart yet.

## Sibling areas

[core-extra](../core-extra/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [gui](../gui/) · [save-system](../save-system/) · [viewmodel](../viewmodel/) · [localization](../localization/) · [engine](../engine/) · [system](../system/) · [custombattle](../custombattle/) · [modulemanager](../modulemanager/) · [network](../network/) · [sandbox](../sandbox/) · [storymode](../storymode/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [module-system](../../architecture/module-system)
