---
title: "BoundaryWallView"
description: "Auto-generated class reference for BoundaryWallView."
---
# BoundaryWallView

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class BoundaryWallView : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `TaleWorlds.MountAndBlade/BoundaryWallView.cs`

## Overview

`BoundaryWallView` is the editor's battle-boundary visualiser, not a runtime view. It is a `ScriptComponentBehavior` (`BoundaryWallView.cs:10`) — the type the scene editor attaches to an entity via a script component — and it makes that explicit the moment it is initialised: `OnInit` throws `new Exception("This should only be used in editor.")` (`BoundaryWallView.cs:13`). Nothing in managed code ever adds this behaviour to a live mission; it exists to be named in an editor `ScriptComponent`.

Its runtime work is a redraw loop that samples three tagged vertex sets in the scene and rebuilds one `GameEntity`'s meshes from them: `walk_area_vertex` into `_lastPoints`, `defender_area_vertex` into `_lastDefenderPoints` and `attacker_area_vertex` into `_lastAttackerPoints` (`BoundaryWallView.cs:36`). `OnEditorTick` accumulates `dt` and only acts every 0.2 seconds (`BoundaryWallView.cs:27`), only when `MBEditor.BorderHelpersEnabled()` (`BoundaryWallView.cs:23`), and only if the scene is non-null. It then clears the entity's components and re-adds one mesh per boundary, naming the entity `editor_map_border` (`BoundaryWallView.cs:44`).

The genuinely reusable member is the static factory `CreateBoundaryMesh(Scene, ICollection<Vec2>, uint)` (`BoundaryWallView.cs:107`), which is public and has no editor state dependency.

## Mental Model

`CalculateBoundaries` returns "did anything change", not "what are the boundaries" — the new points come back through the `ref List<Vec2>` parameter (`BoundaryWallView.cs:72`). It sorts the points by angle around their own centroid (`BoundaryWallView.cs:86`) so the list is in perimeter order regardless of scene order, then compares element by element against the previous list (`BoundaryWallView.cs:93`). The sort is what makes the comparison meaningful; without it, identical point sets in a different enumeration order would rebuild the mesh every tick. Fewer than three surviving points returns `false` and leaves the `ref` list untouched (`BoundaryWallView.cs:80`).

The mesh is a wall, not a line. For each consecutive pair of points — wrapping with `(i + 1) % Count` (`BoundaryWallView.cs:123`) — it emits two triangles spanning from `Vec3.Up * 2f` below the bottom edge to `Vec3.Up * 2f` above the top (`BoundaryWallView.cs:146`). Bottom and top are clamped into the scene's bounding box, which has been padded by 50 units on each side (`BoundaryWallView.cs:118`), so the wall always spans the full usable height of the scene. Height is sampled per point with `scene.GetHeightAtPoint` in outdoor scenes (`BoundaryWallView.cs:128`); in an indoor scene the query is skipped and the bounding-box minimum is used for both ends (`BoundaryWallView.cs:139`).

Read the return value as a partial failure signal. `CreateBoundaryMesh` returns `null` — not a partial mesh — when it is given fewer than three points (`BoundaryWallView.cs:109`) and also when a height query fails, after emitting `MBDebug.ShowWarning("GetHeightAtPoint failed at CreateBoundaryEntity!")` (`BoundaryWallView.cs:130`). Every caller in this class null-checks before `AddMesh` (`BoundaryWallView.cs:46`), so a failed query silently drops that one boundary and leaves the others.

Two editor-only branches are inside the factory, which is otherwise usable anywhere. `vectorArgument` is `25f` normally but `100000f` when `MBEditor.IsEditModeOn && scene.IsEditorScene()` (`BoundaryWallView.cs:168`), and the material is the editor-only `editor_map_border` with `VisibilityMaskFlags.Final | VisibilityMaskFlags.EditModeBorders` (`BoundaryWallView.cs:162`). Outside the editor that material has to exist in your module's materials or the mesh will not render as intended.

## How to use

**Getting one.** The behaviour itself is editor-only and will throw if you instantiate it into a running mission. The factory is a plain `public static`, so call it directly.

**Typical use** — drawing your own debug wall from a list of points:

```csharp
using System.Collections.Generic;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

public static class MyBoundaryDebug
{
    // Blue, the same default the editor passes.
    public static void Draw(Scene scene, WeakGameEntity target, List<Vec2> points, uint color)
    {
        if (scene == null || !target.IsValid)
        {
            return;
        }

        foreach (WeakGameEntity e in scene.FindWeakEntitiesWithTag("my_border_vertex"))
        {
            points.Add(e.GlobalPosition.AsVec2);
        }

        Mesh mesh = BoundaryWallView.CreateBoundaryMesh(scene, points, color);
        if (mesh == null)
        {
            // Fewer than three points, or a failed height query.
            return;
        }

        GameEntity entity = GameEntity.CreateFromWeakEntity(target);
        entity.ClearEntityComponents(true, false, true);
        entity.SetName("my_debug_border");
        entity.AddMesh(mesh, true);
    }
}
```

`Scene.FindWeakEntitiesWithTag(string)` is the lookup the class itself uses (`BoundaryWallView.cs:74`), and `GameEntity.CreateFromWeakEntity(WeakGameEntity)` (`GameEntity.cs:45`) is the supported way to get a `GameEntity` handle in 1.3.0 — there is no `Scene.CreateEntity`.

**Most common mistake:** treating the `null` return as "no boundaries" rather than "could not build one".

```csharp
Mesh mesh = BoundaryWallView.CreateBoundaryMesh(scene, points);
GameEntity.CreateFromWeakEntity(target).AddMesh(mesh, true);   // ArgumentNullException on a null mesh
```

`CreateBoundaryMesh` returns `null` for two different reasons — too few points (`BoundaryWallView.cs:109`) and a failed height query (`BoundaryWallView.cs:130`) — and it has already logged a warning in the second case. Skip the null check and you get an `ArgumentNullException` from `AddMesh` with the real cause one frame earlier in the log. This class's own caller checks twice (`BoundaryWallView.cs:46`, `BoundaryWallView.cs:52`); copy that shape rather than assuming a non-empty list always yields a mesh.

## Key Methods

### CreateBoundaryMesh
`public static Mesh CreateBoundaryMesh(Scene scene, ICollection<Vec2> boundaryPoints, uint meshColor = 536918784U)`

**Purpose:** Constructs a new boundary mesh entity and returns it to the caller.

```csharp
// Static call; no instance required
BoundaryWallView.CreateBoundaryMesh(scene, boundaryPoints, 0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
BoundaryWallView view = ...;
```

## See Also

- [Area Index](../)
- [MissionBoundaryWallView — the runtime view type, not the editor one](../MissionBoundaryWallView)
- [MBEditor — the `BorderHelpersEnabled` gate this type checks](../MBEditor)
- [中文页面](../../../../zh/api/mission-ext/BoundaryWallView)