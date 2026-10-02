---
title: "CampaignEntityVisualComponent"
description: "The base class every map-screen visual service derives from — party nameplates, settlement labels, track rendering, weather, audio. It is a priority-ordered extension point: SandBoxViewVisualManager sorts components by Priority and broadcasts each map tick, mouse click, hover intersection, and load-finished event to all of them."
---
# CampaignEntityVisualComponent

**Namespace:** SandBox.View.Map  
**Module:** SandBox.View  
**Type:** `public class CampaignEntityVisualComponent : IEntityComponent`  
**Base:** `IEntityComponent`  
**File:** `SandBox.View/SandBox.View.Map/CampaignEntityVisualComponent.cs`

## Overview

`CampaignEntityVisualComponent` is the abstract base for the services that draw and hit-test things on the campaign map screen. It is pure virtual-with-empty-defaults: `Priority`, `OnVisualTick`, `OnMouseClick`, `OnVisualIntersected`, `OnFrameTick`, `OnGameLoadFinished`, `OnTick`, `ClearVisualMemory`, plus `protected virtual OnInitialize` / `OnFinalize`. Every one of them has a do-nothing base implementation, so a subclass overrides only the callbacks it cares about.

Registration goes through `SandBoxViewVisualManager`, not through `Campaign`. `AddEntityComponent<TComponent>()` requires `new()` and immediately calls `SortComponents()`, so `Priority` is read at that moment. The manager then **broadcasts** each callback to every registered component: `OnTick(realDt, dt)`, `OnVisualTick(screen, realDt, dt)`, `OnFrameTick(dt)`, `OnGameLoadFinished()`, `ClearVisualMemory()`, and — for input — `OnMouseClick(...)` and `OnVisualIntersected(...)`. The two input callbacks return `bool` and are **OR-ed across components**: the manager keeps going and the aggregate result decides whether the map consumed the click. That is the extension seam for "add a clickable thing to the map" without touching the map screen.

`IEntityComponent.OnInitialize` / `IEntityComponent.OnFinalize` are **explicit interface implementations** here (`void IEntityComponent.OnInitialize()`), which forwards to the protected virtuals of the same name. Subclasses override the protected ones; the interface methods are not visible to normal callers.

## Mental Model

Read it as **"a plug-in slot in the map screen's broadcast bus, ordered by Priority"**:

- **Where it sits:** it is *view-layer* infrastructure. It runs only while a `MapScreen` exists, it never touches `Campaign` state for persistence, and it has no save hooks at all. Everything it does is per-frame presentation.
- **Typical call order:** the manager calls `OnInitialize` once when the component is added (via `EntitySystem.AddComponent`), then per frame: `OnTick` → `OnVisualTick` → `OnFrameTick`. On a save load the manager calls `OnGameLoadFinished` so components can rebuild cached visuals; `ClearVisualMemory` is the counterpart for teardown or for a change that invalidates cached geometry.
- **`OnTick` vs `OnVisualTick` vs `OnFrameTick` is a real distinction.** `OnTick(realDt, dt)` is campaign-time time, `OnVisualTick(screen, realDt, dt)` additionally receives the `MapScreen` (and is where you can safely create visuals because the screen reference is live), `OnFrameTick(dt)` is raw frame time. Overriding the wrong one gives you a component that ticks but cannot resolve a `MapEntityVisual`.
- **Common misuse trap — `Priority` default is `0` for everyone.** It is `virtual int Priority => 0`. Sorting is stable only by luck; if your visual must draw under or over another, override `Priority` explicitly or you will get an arbitrary z-order that changes when someone else registers.
- **Common misuse trap — treating the `bool` returns as exclusive.** `OnMouseClick` and `OnVisualIntersected` return `false` by default precisely so that unrelated components do not swallow the event. Returning `true` unconditionally makes the map treat every click as consumed.
- **Common misuse trap — not requiring `new()`.** `AddEntityComponent<TComponent>()` has the `new()` constraint, so a component with a constructor that takes arguments cannot be added this way. Use the `EntitySystem` directly or design the component to resolve its dependencies in `OnInitialize`.
- **Common misuse trap — keeping `MapEntityVisual` references across ticks.** Visuals are recreated when the scene is regenerated. Cache the *entity id* and look the visual up, exactly as the built-in components do.

## When to Use / When NOT to Use

**Use it when:**
- You need to draw or hit-test something on the map screen that the base game does not render — a custom overlay, an extra marker, a hover highlight.
- You need a service that must react to map ticks and to load-finished without being a `CampaignBehaviorBase` (because it is purely visual and must not persist anything).
- You need to participate in the map's click-consumption chain.

**Do NOT use it when:**
- You need to affect campaign simulation or save data. That is `CampaignBehaviorBase` — a visual component has no `SyncData` and cannot persist anything.
- You need per-entity visuals attached to a specific `Settlement` or `MobileParty` lifecycle. Use the dedicated managers (`SettlementVisualManager`, `MobilePartyVisualManager`) that already derive from this class, rather than adding a second competing component.
- You need map logic rather than map visuals — `CampaignEntityComponent` (the non-visual sibling on `Campaign`) is the right base.

## Dependencies

- [SandBoxViewSubModule](../SandBoxViewSubModule) — the static entry point whose `SandBoxViewVisualManager` owns the component list, registers built-ins, and broadcasts the callbacks.
- [CampaignBehaviorBase](../CampaignBehaviorBase) — the non-visual counterpart: use it when the behaviour must survive a save/load instead of being rebuilt per screen.
- [MapScreen](../MapScreen) — the screen whose construction registers the built-in components and whose lifetime bounds them all.
- [MissionLogic](../../mission-ext/MissionLogic) — the mission-side analogue of a per-frame service, for comparison when the same logic is needed in battle.
- [MBObjectManager](../MBObjectManager) — the object-manager registry that `MapEntityVisual` ids ultimately resolve through.
- [SandBoxViewVisualManager](../SandBoxViewVisualManager) — the `AddEntityComponent` / `RemoveEntityComponent` / `GetEntityComponent` surface this base class plugs into.

## Key members

### `public virtual int Priority => 0`

Sort key used by `SandBoxViewVisualManager.SortComponents()` immediately after each `AddEntityComponent`. Lower values are broadcast/sorted earlier. Override it to order your component against the built-ins; leaving it at `0` puts you in an arbitrary but deterministic group.

### `public virtual void OnVisualTick(MapScreen screen, float realDt, float dt)`

Per-frame hook that receives the live `MapScreen`. This is the correct place to create, update, or destroy `MapEntityVisual` instances, because it is the only callback that gives you the screen reference. `realDt` is unscaled real time, `dt` is scaled.
- **Trap:** `screen` can be `null` during teardown; guard before using it.

### `public virtual void OnTick(float realDt, float dt)`

Per-frame hook without the screen reference. Use it for logic that does not need to touch visuals (cooldowns, timers, cached data refresh). Returns nothing.

### `public virtual void OnFrameTick(float dt)`

Raw frame hook. In v1.4.5 the base implementation is empty and the built-in components mostly use `OnVisualTick` / `OnTick`; treat it as an extra, lowest-priority opportunity rather than the main loop.

### `public virtual bool OnMouseClick(MapEntityVisual visualOfSelectedEntity, Vec3 intersectionPoint, PathFaceRecord mouseOverFaceIndex, bool isDoubleClick)`

Called on a map click with the currently selected visual, the terrain intersection point, the hovered face, and whether it was a double click. Return `true` to consume the event.
- **Return semantics:** the manager OR-s the results across all components; `true` from one component does not stop the others from being called, it only makes the aggregate `true`.
- **Default:** `false`, which is correct for a component that does not care about clicks.

### `public virtual bool OnVisualIntersected(Ray mouseRay, UIntPtr[] intersectedEntityIDs, Intersection[] intersectionInfos, int entityCount, Vec3 worldMouseNear, Vec3 worldMouseFar, Vec3 terrainIntersectionPoint, ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)`

Hover hit-test. Returns `true` when this component handled the intersection; the two `ref` parameters let a component set the hovered/selected visuals.
- **Return semantics:** same OR-aggregation as `OnMouseClick`. Because `hoveredVisual` / `selectedVisual` are `ref`, a component that returns `true` and also writes them participates in the map's hover highlight chain.

### `public virtual void OnGameLoadFinished()`

Called once after a save is loaded, so the component can invalidate caches and rebuild visuals that referenced the pre-load world. Pair it with `ClearVisualMemory`.

### `public virtual void ClearVisualMemory()`

Drops cached visual references. Call it (or let the manager call it) whenever the underlying visuals are invalidated — scene reload, entity removed, filter change.

### `protected virtual void OnInitialize()` / `protected virtual void OnFinalize()`

Setup and teardown hooks. They are reachable only through the **explicit** interface implementations `IEntityComponent.OnInitialize()` / `IEntityComponent.OnFinalize()`, which the `EntitySystem` invokes. Override the protected versions; do not try to implement the interface members directly on a subclass.

## Examples

### Example 1 — a component that highlights settlements matching a filter

```csharp
using System;
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.Library;

namespace MyMod
{
    public class HighlightSettlementsComponent : CampaignEntityVisualComponent
    {
        // Draw above the built-in settlement visuals.
        public override int Priority => 50;

        private SandBox.View.Map.MapScreen _screen;
        private int _lastCandidateCount = -1;

        public override void OnVisualTick(MapScreen screen, float realDt, float dt)
        {
            _screen = screen;
            int candidateCount = MBObjectManager.Instance.GetObjectTypeList<Settlement>().Count;
            if (candidateCount != _lastCandidateCount)
            {
                _lastCandidateCount = candidateCount;
                ClearVisualMemory();     // scene changed: drop cached visuals
            }
        }

        public override bool OnVisualIntersected(Ray mouseRay, UIntPtr[] intersectedEntityIDs,
            Intersection[] intersectionInfos, int entityCount, Vec3 worldMouseNear,
            Vec3 worldMouseFar, Vec3 terrainIntersectionPoint,
            ref MapEntityVisual hoveredVisual, ref MapEntityVisual selectedVisual)
        {
            // Returning false leaves the built-in hover chain untouched.
            return false;
        }

        public override void ClearVisualMemory()
        {
        }

        protected override void OnFinalize()
        {
            _screen = null;
        }
    }
}
```

Registering it from a `SubModule` once the map screen has been built:

```csharp
using SandBox.View.SandBoxViewSubModule;

public class MyMapVisualSubModule
{
    private HighlightSettlementsComponent _component;

    public void Install()
    {
        // AddEntityComponent sorts by Priority and requires a parameterless ctor.
        _component = SandBoxViewSubModule.SandBoxViewVisualManager
            .AddEntityComponent<HighlightSettlementsComponent>();
    }

    public void Uninstall()
    {
        SandBoxViewSubModule.SandBoxViewVisualManager
            .RemoveEntityComponent<HighlightSettlementsComponent>();
        _component = null;
    }
}
```

## Risks and crash boundaries

- **Save serialization:** none, and that is the point. A `CampaignEntityVisualComponent` has no `SyncData`, no `IDataStore` participation, and never writes to a campaign save. Anything you cache there is lost on load — which is exactly why `OnGameLoadFinished` and `ClearVisualMemory` exist. If your feature needs persistence, keep the data in a `CampaignBehaviorBase` and let the component read from it.
- **Cross-domain dependencies:** the type lives in `SandBox.View`, the *view* assembly, not `TaleWorlds.CampaignSystem`. Campaign logic assemblies must not reference it; the reference runs view → campaign, never the reverse. Referencing a visual type from a `CampaignBehaviorBase` is a layering violation that will bite you when the campaign code is loaded without the view module (headless, dedicated server, tool scenarios).
- **Load order:** components are registered by `MapScreen`'s constructor. If you register from a `SubModule` hook that runs before the map screen exists, `AddEntityComponent` still works but nothing broadcasts to it until the screen exists; if you register after `OnGameLoadFinished` has already fired for a loaded game, your component never receives that call and must rebuild its caches itself in `OnInitialize`.
- **ID stability:** the component type name is the key `EntitySystem` uses to deduplicate (`GetComponent<TComponent>()`). Two registrations of the same `TComponent` collapse to one — the second `AddEntityComponent<T>` call returns the existing instance rather than creating a parallel one, so a "duplicate" is silently a no-op, not an error.
- **Finalization:** `OnFinalize` is reached only through the explicit interface implementation. If your cleanup lives in a `Dispose`/`~finalizer` instead, the component's references keep the map's `EntitySystem` alive longer than expected. Unsubscribe from any static or manager-held events in `OnFinalize`.
- **Unguarded `screen`:** `OnVisualTick` can be invoked during screen teardown with a null or already-released `MapScreen`. Dereferencing `MapEntityVisual` objects after `ClearVisualMemory` is the most common native-side crash in map visual mods.

## Cross-Version Notes

- **v1.3.x → v1.4.5:** the callback set is stable — `Priority`, `OnVisualTick`, `OnMouseClick`, `OnVisualIntersected`, `OnFrameTick`, `OnGameLoadFinished`, `OnTick`, `ClearVisualMemory`, `OnInitialize`, `OnFinalize`. The two input callbacks return `bool` in both versions.
- **v1.4.5:** `IEntityComponent.OnInitialize` / `OnFinalize` are explicit interface implementations that forward to the protected virtuals. A subclass that tries to `override` the interface members will not compile — override the protected pair.
- **v1.4.5:** there is no `OnCampaignStart`, `OnCampaignEnd` or `OnMissionTick` member on this base. Campaign-time behaviour belongs to `CampaignEntityComponent` on `Campaign`, mission-time behaviour to `MissionLogic`.

## See Also

- ↑ Parent bucket: [Campaign-Ext API index](../)
- ↔ Sibling: [SandBoxViewSubModule](../SandBoxViewSubModule) — static owner of the component list
- ↔ Sibling: [MapScreen](../MapScreen) — the screen that registers the built-in components
- ↔ Sibling: [MBObjectManager](../MBObjectManager) — object registry the visual ids resolve through
- ↔ Sibling: [SandBoxViewVisualManager](../SandBoxViewVisualManager) — add/remove/get surface for components
- ↔ Cross-bucket: [CampaignBehaviorBase](../CampaignBehaviorBase) — the persisting counterpart
- ↔ Cross-bucket: [MissionLogic](../../mission-ext/MissionLogic) — mission-side per-frame service base
