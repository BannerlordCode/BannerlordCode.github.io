<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameEntity`
- [← Area / Back to engine](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameEntity

**Namespace:** TaleWorlds.Engine  
**Module:** TaleWorlds.Engine  
**Type:** sealed class (inherits `NativeObject`)  
**File:** `bannerlord-1.3.15/TaleWorlds.Engine/GameEntity.cs`

`GameEntity` is the core entity in a scene — a node in the scene-object tree holding a transform (position/rotation/scale), meshes, components, scripts, tags, and child entities. Almost any mod that spawns or manipulates scene objects in a mission goes through it.

## Overview

Each `GameEntity` belongs to a `Scene`, has a local frame (`GetFrame`/`SetFrame`) and a global frame (`GetGlobalFrame`/`SetGlobalFrame`), and can mount child entities to form a hierarchy (`Parent`, `AddChild`, `GetChildren`). Behavior is extended via two kinds of mounts: `GameEntityComponent` (components) and `ScriptComponentBehavior` (scripts; mods commonly query these with the generic `GetFirstScriptOfType<T>`).

Mods usually do not `new GameEntity`; instead use the static factories or instantiate a prefab.

## Static factories

```csharp
public static GameEntity CreateEmpty(Scene scene, bool isModifiableFromEditor = true, bool createPhysics = true, bool callScriptCallbacks = true)
public static GameEntity CreateEmptyDynamic(Scene scene, bool isModifiableFromEditor = true)
public static GameEntity CreateEmptyWithoutScene()

public static GameEntity CopyFrom(Scene scene, GameEntity entity, bool createPhysics = true, bool callScriptCallbacks = true)
public static GameEntity CopyFromPrefab(GameEntity prefab)

public static GameEntity Instantiate(Scene scene, string prefabName, bool callScriptCallbacks, bool createPhysics = true, string scriptInclusingTag = "")
public static GameEntity Instantiate(Scene scene, string prefabName, MatrixFrame frame, bool callScriptCallbacks = true, string scriptInclusingTag = "")
public static bool PrefabExists(string name)
```

`Instantiate` loads a prefab by name into the given frame; `PrefabExists` checks whether a prefab exists first.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| Scene | Scene | Owning scene (get-only) |
| Parent | GameEntity | Parent entity (get-only) |
| GlobalPosition | `Vec3` | Global position (get-only) |
| Name | string | Entity name |
| Tags | `string[]` | Tag array |
| WeakEntity | WeakGameEntity | Weak-reference handle |

## Transform

```csharp
public MatrixFrame GetFrame()
public void SetFrame(ref MatrixFrame frame, bool isTeleportation = true)
public MatrixFrame GetGlobalFrame()
public void SetGlobalFrame(in MatrixFrame frame, bool isTeleportation = true)
public void SetLocalPosition(Vec3 position)
public Vec3 GetGlobalScale()
public Vec3 GetLocalScale()
public void RecomputeBoundingBox()
```

`isTeleportation = true` means teleport (no physics interpolation). Use with `MatrixFrame` to place entities precisely.

## Hierarchy

```csharp
public void AddChild(GameEntity gameEntity, bool autoLocalizeFrame = false)
public void RemoveChild(GameEntity childEntity, bool keepPhysics, bool keepScenePointer, bool callScriptCallbacks, int removeReason)
public IEnumerable<GameEntity> GetChildren()
public void GetChildrenRecursive(ref List<GameEntity> children)
public GameEntity GetFirstChildEntityWithTag(string tag)
public GameEntity GetFirstChildEntityWithTagRecursive(string tag)
```

## Components & Scripts

```csharp
public void AddComponent(GameEntityComponent component)
public bool RemoveComponent(GameEntityComponent component)
public bool HasComponent(GameEntityComponent component)
public void ClearComponents()

public IEnumerable<ScriptComponentBehavior> GetScriptComponents()
public IEnumerable<T> GetScriptComponents<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfType<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfTypeRecursive<T>() where T : ScriptComponentBehavior
public T GetFirstScriptOfTypeInFamily<T>() where T : ScriptComponentBehavior
public bool HasScriptOfType<T>() where T : ScriptComponentBehavior
public int GetScriptCountOfTypeRecursive<T>() where T : ScriptComponentBehavior
public bool HasScriptComponent(string scName)
public void CreateAndAddScriptComponent(string name, bool callScriptCallbacks)
```

Mods most often use `GetFirstScriptOfType<T>()` to read script behaviors attached to an entity (synchronizers, triggers, etc.).

## Tags

```csharp
public void AddTag(string tag)
public void RemoveTag(string tag)
public bool HasTag(string tag)
public GameEntity GetFirstChildEntityWithTag(string tag)
```

## Visibility

```csharp
public void SetVisibilityExcludeParents(bool visible)
public bool GetVisibilityExcludeParents()
public bool IsVisibleIncludeParents()
public void SetAlpha(float alpha)
public void SetReadyToRender(bool ready)
```

## Lifecycle

```csharp
public void Remove(int removeReason)
public void ClearEntityComponents(bool resetAll, bool removeScripts, bool deleteChildEntities)
public void ClearComponents()
public bool CheckResources(bool addToQueue, bool checkFaceResources)
public void SetMobility(GameEntity.Mobility mobility)
public GameEntity.Mobility GetMobility()
```

`Remove` detaches the entity from the scene and releases it; `removeReason` is an engine-defined removal reason code.

## Usage example

```csharp
// Spawn an entity from a prefab at a position in a mission
public override void OnMissionBehaviourInitialize()
{
    Scene scene = Mission.Current.Scene;
    if (GameEntity.PrefabExists("my_prefab"))
    {
        MatrixFrame frame = MatrixFrame.Identity;
        frame.origin = new Vec3(100f, 50f, 0f);  // x, y, z
        GameEntity ent = GameEntity.Instantiate(scene, "my_prefab", frame);
        // Tag the entity for later lookup
        ent.AddTag("my_spawned");
    }
}

// Find a tagged child entity in the scene
GameEntity found = scene.FindEntityWithTag("my_spawned");
// Read a script behavior off it
var script = found.GetFirstScriptOfType<MyScriptBehavior>();
if (script != null) { /* ... */ }

// Move an existing entity (teleport to a new frame)
MatrixFrame f = ent.GetGlobalFrame();
f.origin += new Vec3(0f, 0f, 5f);
ent.SetGlobalFrame(in f, isTeleportation: true);

// Remove from the scene
ent.Remove(0);
```

## See also

- [Scene](./Scene.md)
- [NativeObject](./NativeObject.md)
- [Skeleton](./Skeleton.md)
- [Utilities](./Utilities.md)
