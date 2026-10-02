---
title: "Core extra — the foundation long tail"
description: "TaleWorlds.Core, Library, DotNet, LinQuick, Starter, plus the taxonomy catch-all. 0 pages in this tree; the 2 pages are Chinese-tree-only."
---
# Core extra — the foundation long tail

This bucket is where `TaleWorlds.Core` (222 `.cs` files), `TaleWorlds.Library` (166), `TaleWorlds.DotNet` (50), `TaleWorlds.LinQuick` (3) and `TaleWorlds.Starter` live, plus **every type no other namespace rule claims**. It is the catch-all of the taxonomy.

Being a catch-all has a practical consequence: this directory holds both types you must know exist — `AssemblyLoader`, `ApplicationPlatform`, `BasePath` — and some BCL noise. If a type's namespace is unfamiliar to you, suspect `core-extra` first.

The direction rule matters here: `TaleWorlds.Core` contains no `Hero` reference at all. The arrow is campaign → core, never the reverse. That is why "where do I put my helper class" has an answer in this tree rather than being a matter of taste.

## Pages in this area (0 in English)

No pages in this bucket have been written in this tree. The two that exist are in the Chinese tree:

| Page | What it covers |
| --- | --- |
| [zh/api/core-extra/Game](../../../zh/api/core-extra/Game) | the static entry point into the running game |
| [zh/api/core-extra/ViewModel](../../../zh/api/core-extra/ViewModel) | the property-notification base every Gauntlet binding derives from |

They are not arbitrary picks. `Game` is the "is the game up yet" checkpoint; `ViewModel` is the binding base for every screen. Both are types a mod author meets as a reference somewhere else and needs to look up.

## Not yet written

In this tree, both. Across both trees, the bucket's readable tail is the longest gap in the documentation:

- **Assemblies and platform**: `AssemblyLoader` (assembly resolution and dependencies), `ApplicationPlatform`, `BasePath`, `BuildInfo`, `AreaInformation`, `AmbientInformation`.
- **Events and async**: `AsyncRunner`, `AwaitableAsyncRunner`, the task family, `MBEventManager` and the event plumbing behind it.
- **Collections and utilities**: the 3 `LinQuick` types, the `MBReadOnlyList` family, `MBFastList`.
- **Core enums and data**: `AgentState`, `AgentFlag`, `AgentMovementMode`, `AgentOriginType`, `ArmorComponent`, `Banner`, `ItemQuality` and a batch of other enums shared across layers.
- **The `TaleWorlds.DotNet` binding layer**: `BindingPath`, `ViewModelPathAttribute`, property-binding infrastructure — noting that `MBDebug` resolves to [engine](../engine/), not here.

By size the catch-all comes to roughly 54 types with documentation. Two have pages.

## Sibling areas

[core](../core/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [gui](../gui/) · [viewmodel](../viewmodel/) · [engine](../engine/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [SDK Overview](../../architecture/sdk-overview)