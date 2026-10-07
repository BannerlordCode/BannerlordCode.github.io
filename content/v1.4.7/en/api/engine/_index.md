---
title: "Engine — diagnostics, the 2D render context and Diamond"
description: "TaleWorlds.Engine plus its input layer and the Diamond platform layer. 1 page in this tree; 2 more are Chinese-tree-only."
---
# Engine — diagnostics, the 2D render context and Diamond

Three things live here: `TaleWorlds.Engine` (158 `.cs` files — the engine's own diagnostics, render context and resource loading), `TaleWorlds.Engine.InputSystem` (3), and `TaleWorlds.Diamond` (48 — the platform layer, with GDK / GOG / Steam / Test backends).

For a mod author this is the "I should not be touching it but I have to know it exists" layer. Diamond is the access and network backend; most of `TaleWorlds.Engine` is rendering and resources. The one you touch daily is `MBDebug` — the engine-side debug and cheats surface, and the first thing to bring up when you are chasing a crash or verifying a behaviour.

`GauntletLayer` is the exception to "this layer is off limits": it resolves here rather than to [gui](../gui/) because its namespace is `TaleWorlds.Engine.GauntletUI`. Building a screen walks you out of `gui/` and into this bucket.

## Pages in this area (1 in English)

One page in this bucket has been written in this tree; two more exist only in the Chinese tree:

| Page | What it covers |
| --- | --- |
| [MBDebug](./MBDebug) | the engine-side debug and cheats surface |
| [zh/api/engine/MBDebug](../../../zh/api/engine/MBDebug) | the engine-side debug and cheats surface |
| [zh/api/engine/GauntletLayer](../../../zh/api/engine/GauntletLayer) | loads a Gauntlet XML prefab and binds a ViewModel |

Those two are exactly this bucket's two useful doors for a mod author: one for debugging, one for UI.

## Not yet written

In this tree, both. Across both trees, the rendering and resource side of `TaleWorlds.Engine` — `GraphicsContext`, `BoundingBox`, `CapsuleData`, `BillboardType`, `DecalAtlasGroup`, `EditDataPolicy`, `ClothSimulatorComponent`, `CompositeComponent`, `ApplicationHealthChecker`, `CrashInformationCollector`, `CheckForSceneProblemsDelegate` — plus almost the whole of `TaleWorlds.Diamond`: `AccessObject`, `Client`, `ClientMessageHandler`, `IClientSession`, `IClientSessionProvider`, `AesHelper`, `FunctionResult`, the `GDKAccessObject` / `GOGAccessObject` / `SteamAccessObject` backends, `IConnectionInformation`; plus `EngineInputManager`, `DebugHotKeyCategory` and `CheatsHotKeyCategory` from the input side.

By size the bucket is about 41 documented types and two have pages. The Diamond half is effectively empty — if you are doing platform work, this bucket will not help you yet.

## Sibling areas

[gui](../gui/) · [viewmodel](../viewmodel/) · [core](../core/) · [core-extra](../core-extra/) · [campaign](../campaign/) · [campaign-ext](../campaign-ext/) · [mission](../mission/) · [mission-ext](../mission-ext/) · [sandbox](../sandbox/) · [custombattle](../custombattle/) · [system](../system/) · [network](../network/) · [modulemanager](../modulemanager/) · [activitysystem](../activitysystem/) · [achievementsystem](../achievementsystem/)

There is no `save-system/` directory in this tree; its pages are Chinese-tree-only — [zh/api/save-system/SaveManager](../../../zh/api/save-system/SaveManager).

## See also

- ↑ [Version home](../../)
- ↑ [API reference](../)
- ↔ [Architecture overview](../../architecture/)
- ↘ [UI Stack](../../architecture/ui-stack)