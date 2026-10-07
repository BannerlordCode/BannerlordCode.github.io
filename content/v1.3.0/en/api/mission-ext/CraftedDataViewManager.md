---
title: "CraftedDataViewManager"
description: "Auto-generated class reference for CraftedDataViewManager."
---
# CraftedDataViewManager

**Namespace:** TaleWorlds.MountAndBlade.View
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CraftedDataViewManager`
**Base:** none
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/CraftedDataViewManager.cs`

## Overview

`CraftedDataViewManager` is a static lazy cache of `CraftedDataView` objects, one per crafted weapon design. It owns a single `Dictionary<WeaponDesign, CraftedDataView>` (`CraftedDataViewManager.cs:43`) with a three-method lifecycle: `Initialize()` allocates the dictionary (`CraftedDataViewManager.cs:11`), `GetCraftedDataView(WeaponDesign)` looks it up and creates it on a miss (`CraftedDataViewManager.cs:27`), and `Clear()` calls `Clear()` on every cached view and empties the dictionary (`CraftedDataViewManager.cs:17`).

The cache is filled on demand by the item-mesh helpers. `ItemCollectionElementViewExtensions` is the main consumer: `GetHolsterMeshIfExists` chains straight off the result (`ItemCollectionElementViewExtensions.cs:98`) and `GetHolsterWithWeaponMeshIfExists` does the same for the weapon mesh (`ItemCollectionElementViewExtensions.cs:131`). One lookup per item per call, and the dictionary means the `CraftedDataView` — and the meshes it builds — are built once per design and reused.

Its lifetime is the view module's. `ViewSubModule` calls `Initialize()` during module setup (`ViewSubModule.cs:97`) and `Clear()` both at module unload (`ViewSubModule.cs:186`) and when the mission screen is torn down (`MissionScreen.cs:3150`).

## Mental Model

`GetCraftedDataView` is a get-or-create, not a lookup. On a miss it constructs `new CraftedDataView(craftedData)` and inserts it (`CraftedDataViewManager.cs:34`), so calling it has side effects and is safe to call from render code — but it means "asking" builds meshes. There is no `TryGet` and no way to ask whether a view exists without creating one.

The `null` return means exactly one thing: you passed `null`. The guard at the top is `if (craftedData != null)` and the fall-through returns `null` (`CraftedDataViewManager.cs:39`). It does not return `null` for a missing entry, because a missing entry is created. So a `null` return means "this item has no `WeaponDesign` at all", and every call site in the game checks `item.WeaponDesign != null` before calling — `GetHolsterMeshIfExists` bails out first (`ItemCollectionElementViewExtensions.cs:94`) rather than relying on the `null`. Follow that shape: pre-check the design, then use the result without a further null test.

`Clear()` is not just a dictionary clear. It calls `Clear()` on each live `CraftedDataView` first (`CraftedDataViewManager.cs:21`) and only then empties the dictionary, so the cached views get a chance to release their own meshes. Skipping the `Clear()` and just reassigning the dictionary would leak whatever those views hold.

The hard prerequisite is `Initialize()`. The dictionary field has no initialiser (`CraftedDataViewManager.cs:43`) — it is assigned only inside `Initialize`. Call `GetCraftedDataView` before that and the `TryGetValue` throws `NullReferenceException` on a null dictionary.

## How to use

**Getting one.** Nothing to obtain: reach the cached view through the static `GetCraftedDataView`. `Initialize` is already called by the view module, so in normal game flow you only need the getter.

**Typical use** — reading a crafted weapon's meshes, following the guard shape the game uses:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade.View;

public static class MyHolsterPreview
{
    public static MetaMesh Preview(ItemObject item)
    {
        if (item.WeaponDesign == null)
        {
            // GetCraftedDataView returns null for a null design
            // (CraftedDataViewManager.cs:39).
            return null;
        }

        CraftedDataView view = CraftedDataViewManager.GetCraftedDataView(item.WeaponDesign);
        if (view == null)
        {
            return null;
        }

        // Creates the view and caches its meshes on first call.
        MetaMesh holster = view.HolsterMesh;
        return holster != null ? holster.CreateCopy() : null;
    }
}
```

`HolsterMesh`, `HolsterMeshWithWeapon` and `CreateCopy()` are the members the engine's own helpers use (`ItemCollectionElementViewExtensions.cs:74` and `ItemCollectionElementViewExtensions.cs:79`).

**Most common mistake:** assuming a `null` from the getter means "not cached yet".

```csharp
CraftedDataView view = CraftedDataViewManager.GetCraftedDataView(design);
if (view == null)
{
    // Only reached when design itself was null.
    return;
}
```

A not-yet-cached design never comes back `null` — the getter builds it. So a `null` check like this reads as "cache miss" and leads you to write a fallback path that silently duplicates work the manager already did. Conversely, if you *do* get `null`, the real cause is upstream: you passed a `null` `WeaponDesign`, typically from an item that is not crafted. Check the design first, as in the example, and treat a `null` view as unreachable.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Static call; no instance required
CraftedDataViewManager.Initialize();
```

### Clear
`public static void Clear()`

**Purpose:** Removes all content from the this instance.

```csharp
// Static call; no instance required
CraftedDataViewManager.Clear();
```

### GetCraftedDataView
`public static CraftedDataView GetCraftedDataView(WeaponDesign craftedData)`

**Purpose:** Reads and returns the crafted data view value held by the this instance.

```csharp
// Static call; no instance required
CraftedDataViewManager.GetCraftedDataView(craftedData);
```

## Usage Example

```csharp
var manager = CraftedDataViewManager.Current;
```

## See Also

- [Area Index](../)
- [CraftedDataView — the cached object this manager creates](../CraftedDataView)
- [ItemCollectionElementViewExtensions — the main consumer of the cache](../ItemCollectionElementViewExtensions)
- [中文页面](../../../../zh/api/mission-ext/CraftedDataViewManager)