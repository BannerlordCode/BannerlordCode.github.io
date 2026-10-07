---
title: "AgentVisuals"
description: "The native-boundary wrapper around one agent's render state: MBAgentVisuals handle, skeleton frame, body properties, action playback, LOD control, and weapon-slot wind."
---

# AgentVisuals

**Namespace:** `TaleWorlds.MountAndBlade.View`
**Module:** `Modules.Native` — the view layer, not `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisuals : IAgentVisual`
**Base:** `object`; implements `IAgentVisual`
**Source:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs`

## One-line responsibility

It is the managed half of a live agent's visual representation: it owns an `MBAgentVisuals` native handle, translates skeleton frames and action indices across the boundary, and exposes the handful of render controls a mod legitimately needs.

## Mental model

**This type crosses the native boundary and must not be treated as an ordinary managed object.** The evidence is in the members, not in a comment. `GetVisuals()` returns `MBAgentVisuals` — an engine handle type. `Reset()`, `ResetNextFrame()`, `TickVisuals()`, and `Tick(parentAgentVisuals, dt, isEntityMoving, speed)` all exist because the native side needs explicit lifecycle calls that a plain managed object would never need. `GetEntity()` returns a `GameEntity` and `GetWeakEntity()` returns a `WeakGameEntity`, which is the engine's own convention for "this reference may go stale." And the static `Create(...)` takes an `AgentVisualsData` and returns an `AgentVisuals`, which is how you get one at all.

The lifetime is the mission's, not yours. A visual handle is bound to the agent it was created for and to the scene it was created in; there is no `Dispose`, no finaliser, and no `Clone`. When the agent is removed the visual goes with it, and a stale `AgentVisuals` reference held by your code becomes exactly as stale as the `WeakGameEntity` it wraps. **Cache it per agent, never globally.**

One naming collision to settle before anything else: **`Agent.AgentVisuals` is not this type.** It is declared at `Agent.cs:976` as `public MBAgentVisuals AgentVisuals` — the raw native handle, cached through a `WeakReference`. The wrapper this page documents is `TaleWorlds.MountAndBlade.View.AgentVisuals`, and `Agent` has no property that hands it to you. So from a mission behavior you can reach the native handle but not the managed wrapper; to get the wrapper you construct it yourself with the static `Create`, or go through `Mission.AgentVisualCreator` (an `IAgentVisualCreator` field on `Mission`, declared at `Mission.cs:1000`).

That is also why the real callers of `Create` are all **UI screens**, not mission logic: `GauntletBannerBuilderScreen` and `BodyGeneratorView` in the Gauntlet layer build standalone visuals for banners and the character creator, entirely outside a mission. A battle-time `Agent` already has its visuals built by the engine; the wrapper type is what you use when you need a visual that is not attached to a mission agent.

The most useful single member is `IsFemale`, and it is worth understanding because it is derived rather than stored. It reads `_data.SkeletonTypeData` and returns `true` when the skeleton is `1`, `5`, `6`, or `7`, and `false` otherwise. Those four values are **exactly the female skeletons** in the `SkeletonType` enum: `Female = 1`, `KidFemale1 = 5`, `KidFemale2 = 6`, `KidFemale3 = 7` — against `Male = 0`, `KidMale1 = 2`, `KidMale2 = 3`, `KidMale3 = 4`, and the alias `KidsStart = 2`. So `IsFemale` is a derived classification over `SkeletonType`, and the four hardcoded numbers are a snapshot of that enum rather than arbitrary constants. The decompiled body carries `IL_` comments marking it as recovered decompilation, so treat the numeric literals as version-coupled: if the enum gains a female variant in another version, this property will not notice. `GetIsFemale()` is the explicit form and the safer call.

`Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` is the reconfiguration entry point, and it is the only sane way to change an existing visual's appearance — it mirrors the `IAgentVisual` interface. Note that `AgentVisualsData` is a mutable builder, so passing a data object you keep mutating afterwards gives you undefined results; the visual reads what it needs during the refresh.

The rest splits cleanly: **frame and body** (`GetFrame`, `GetBodyProperties`, `SetBodyProperties`, `GetScale`, `GetGlobalStableEyePoint`, `GetGlobalStableNeckPoint`), **appearance** (`GetCharacterObjectID`, `SetCharacterObjectID`, `GetEquipment`, `GetCopyAgentVisualsData`), **action playback** (`SetAction`, `DoesActionContinueWithCurrentAction`, `GetAnimationParameterAtChannel`), **scene attachment** (`GetEntity`, `GetWeakEntity`, `SetVisible`, `SetAgentLodZeroOrMax`), **extension points** (`AddPrefabToAgentVisualBoneByBoneType`, `AddPrefabToAgentVisualBoneByRealBoneIndex`, `SetFaceGenerationParams`, `SetClothWindToWeaponAtIndex`), and **randomisation** (the six `Random*Range` constants plus `GetRandomGlossFactor` and `GetRandomClothingColors`).

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `GetVisuals` | `public MBAgentVisuals GetVisuals()` | The native handle itself. **This is the boundary.** Do not store it, do not cache it across frames, and do not expect it to outlive the mission — it is the object whose validity the rest of this class is quietly maintaining. |
| `IsFemale` / `GetIsFemale` | `public bool IsFemale { get; }` / `public bool GetIsFemale()` | Derived from `_data.SkeletonTypeData`, returning true for skeleton values 1, 5, 6, and 7 — which are exactly `Female`, `KidFemale1`, `KidFemale2`, and `KidFemale3` in the `SkeletonType` enum. It classifies the loaded skeleton, not the character's gender property, and the four literals are coupled to that enum's current numbering. Prefer the explicit `GetIsFemale()` call. |
| `Create` | `public static AgentVisuals Create(AgentVisualsData data, string name, bool isRandomProgress, bool needBatchedVersionForWeaponMeshes, bool forceUseFaceCache)` | The factory, and the only way to obtain the wrapper. Note the four configuration flags — random action progress, batched weapon meshes, and forced face-cache use are all decided **at creation** and not changeable later through the same route. `AgentVisualsCreator` is the interface-facing wrapper around this call, reachable as `Mission.AgentVisualCreator`. |
| `Refresh` | `public void Refresh(bool needBatchedVersionForWeaponMeshes, AgentVisualsData data, bool forceUseFaceCache = false)` | Reconfigures an existing visual in place from a fresh data object. The supported way to change appearance after creation, as opposed to building a second visual and swapping it. |
| `Reset` / `ResetNextFrame` | `public void Reset()` / `public void ResetNextFrame()` | Native lifecycle control. `Reset` forwards straight to `_data.AgentVisuals.Reset()`; `ResetNextFrame` defers by a frame. These exist because the native render object needs the call — a purely managed object would not. |
| `TickVisuals` / `Tick` | `public void TickVisuals()` / `public void Tick(AgentVisuals parentAgentVisuals, float dt, bool isEntityMoving = false, float speed = 0f)` | The per-frame push. `Tick` takes a **parent** visual plus movement state, which is why mounted agents can be ticked relative to their mount's frame. If you drive visuals yourself you must supply those; the mission normally does. |
| `SetAction` | `public void SetAction(in ActionIndexCache actionIndex, float startProgress = 0f, bool forceFaceMorphRestart = true)` | Starts an animation. The `in ActionIndexCache` parameter is the action index; `forceFaceMorphRestart` exists because face morphs are sticky, and restarting them is sometimes required to avoid a frozen expression. |
| `DoesActionContinueWithCurrentAction` | `public bool DoesActionContinueWithCurrentAction(in ActionIndexCache actionIndex)` | The loop-control question: "may this action blend straight into that one?" Call it before `SetAction` to decide whether to cross-fade or cut. |
| `GetAnimationParameterAtChannel` | `public float GetAnimationParameterAtChannel(int channelIndex)` | Reads a named channel out of the running animation — used for reading parameterised animations such as vehicle or weapon poses back out for logic. |
| `GetFrame` / `GetGlobalStableEyePoint` / `GetGlobalStableNeckPoint` | `public MatrixFrame GetFrame()` / `public Vec3 GetGlobalStableEyePoint(bool isHumanoid)` / `public Vec3 GetGlobalStableNeckPoint(bool isHumanoid)` | World-space anchors. The two point getters take an explicit `isHumanoid` flag because the eye and neck sockets are laid out differently on humanoid and non-humanoid skeletons — asking for a human eye point on a horse gives a meaningless answer rather than an error. |
| `GetEntity` / `GetWeakEntity` | `public GameEntity GetEntity()` / `public WeakGameEntity GetWeakEntity()` | Strong and weak handles to the same scene entity. `GetWeakEntity()` is the safe one for anything that outlives a frame; a `GameEntity` held across a removal becomes invalid without warning. |
| `SetVisible` / `SetAgentLodZeroOrMax` | `public void SetVisible(bool value)` / `public void SetAgentLodZeroOrMax(bool value)` | Visibility and level-of-detail control. The LOD flag is the lever behind distant-agent simplification, and it is a direct render-side switch rather than a distance calculation. |
| `AddPrefabToAgentVisualBoneByBoneType` / `AddPrefabToAgentVisualBoneByRealBoneIndex` | `public CompositeComponent AddPrefabToAgentVisualBoneByBoneType(string prefabName, HumanBone boneType)` / `...ByRealBoneIndex(string prefabName, sbyte realBoneIndex)` | The extension point for attaching arbitrary meshes — a back quiver, a cloak clasp, a custom prop. The first takes a `HumanBone` enum for the readable path, the second a raw bone index when the enum does not cover the socket you want. Both return the created `CompositeComponent`. |
| `GetCopyAgentVisualsData` | `public AgentVisualsData GetCopyAgentVisualsData()` | Snapshots the current configuration into a fresh `AgentVisualsData`. This is how you read an existing visual's setup before modifying it, and it is the safe inverse of the mutable-builder hazard. |
| `Random*Range` constants | `public const float RandomGlossinessRange = 0.05f`, `RandomClothingColor1HueRange = 4f`, and five siblings | The bounds used when randomising a visual's appearance. They are `public const`, so a mod can read the actual ranges instead of guessing, and `GetRandomClothingColors(seed, color1, color2, out color1, out color2)` is the deterministic, seed-driven version — the same seed gives the same colours, which matters for network consistency. |
| `SetClothWindToWeaponAtIndex` | `public void SetClothWindToWeaponAtIndex(Vec3 localWindVector, bool isLocal, EquipmentIndex weaponIndex)` | Pushes wind into the cloth simulation for one weapon slot. Per-slot, `isLocal` aware, and a good example of a member that only makes sense with the native simulation running. |

## Dead members and traps

These 7 `public const` values are reported as having 0 call sites, and no reference could be reproduced. No conclusion is drawn — that is not the same as "confirmed unused".

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `RandomGlossinessRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:13 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor1HueRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:15 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor1SaturationRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:17 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor1BrightnessRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:19 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor2HueRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:21 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor2SaturationRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:23 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |
| `RandomClothingColor2BrightnessRange` | Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View/AgentVisuals.cs:25 | — | — | UNSUPPORTED | `public const float` bounding the randomness of the look. **No reference could be reproduced; no conclusion is drawn.** |

## Real example

Creating a visual from data, which is the entry point a mod can actually reach. Note the skeleton is a real `SkeletonType` member:

```csharp
public class MyVisualBuilder
{
    public IAgentVisual Build(Monster creature, Scene scene, Equipment equipment)
    {
        AgentVisualsData data = new AgentVisualsData()
            .Monster(creature)
            .Scene(scene)
            .Equipment(equipment)
            .SkeletonType(SkeletonType.Male)
            .PrepareImmediately(true);

        AgentVisuals visuals = AgentVisuals.Create(
            data,
            "my_visual",
            isRandomProgress: false,
            needBatchedVersionForWeaponMeshes: true,
            forceUseFaceCache: false);

        return visuals;
    }
}
```

Going through the mission's creator instead, which is how a screen asks the engine to build one on its behalf:

```csharp
public class MyCreatorBasedVisual
{
    public IAgentVisual Build(Monster creature, Scene scene)
    {
        IAgentVisualCreator creator = Mission.Current.AgentVisualCreator;
        if (creator == null)
        {
            return null;
        }

        AgentVisualsData data = new AgentVisualsData()
            .Monster(creature)
            .Scene(scene)
            .SkeletonType(SkeletonType.Male);

        return creator.Create(data, "my_visual", needBatchedVersionForWeaponMeshes: true, forceUseFaceCache: false);
    }
}
```

That interface has no `isRandomProgress` parameter — the static `Create` has five arguments and the interface method has four, because the creator hardcodes `isRandomProgress: false`. That asymmetry is real and is the single most likely thing to trip you when switching between the two routes.

Reading the skeleton classification and the world-space anchors safely:

```csharp
public class MyVisualProbe
{
    public void Probe(AgentVisuals visuals, Agent owner)
    {
        WeakGameEntity weak = visuals.GetWeakEntity();
        if (!weak.IsValid())
        {
            Debug.Print("visual entity already gone", 0);
            return;
        }

        MatrixFrame frame = visuals.GetFrame();
        Vec3 eye = visuals.GetGlobalStableEyePoint(owner.IsHuman);

        Debug.Print("eye point = " + eye, 0);
        Debug.Print("is female (skeleton shape) = " + visuals.GetIsFemale(), 0);
    }
}
```

Reconfiguring rather than rebuilding, after snapshotting the current configuration:

```csharp
public class MyVisualRestyle
{
    public void Restyle(AgentVisuals visuals)
    {
        AgentVisualsData snapshot = visuals.GetCopyAgentVisualsData();

        AgentVisualsData restyled = new AgentVisualsData(snapshot)
            .ClothColor1(0x808080u)
            .ClothColor2(0x404040u);

        visuals.Refresh(true, restyled);
    }
}
```

Copy-constructing from the snapshot and then changing two values is the pattern that avoids the mutable-builder hazard: the visual never sees a data object you are still editing.

## Risks and boundaries

1. **This crosses the native boundary.** `MBAgentVisuals` is a native handle, and `Reset` / `ResetNextFrame` / `TickVisuals` / `Tick` exist only because the render object needs explicit lifecycle calls. Do not describe this as an ordinary managed object, and do not assume it is safe to `Dispose`, clone, or copy.
2. **Lifetime is the mission's.** There is no finaliser and no explicit teardown; the visual goes when the agent goes. Cache per agent, never in a static or campaign-scoped field.
3. **Prefer `WeakGameEntity` over `GameEntity` for anything outliving a frame.** A strong handle held across an agent removal becomes invalid without an exception.
4. **`IsFemale` is a skeleton classification, not a character property.** It reads `SkeletonTypeData` against `1`, `5`, `6`, `7`, which today are `Female`, `KidFemale1`, `KidFemale2`, `KidFemale3`. Add a female skeleton variant in another version and this property silently misclassifies it. Use `GetIsFemale()` and do not hardcode the numbers yourself.
5. **Creation flags are not changeable afterwards.** `isRandomProgress`, `needBatchedVersionForWeaponMeshes`, and `forceUseFaceCache` are decided by `Create`. Wanting different values means calling `Create` again or `Refresh` with different arguments — not expecting a property.
6. **`AgentVisualsData` is a mutable builder.** Handing `Refresh` a data object you continue mutating gives undefined results. Copy-construct first, as the last example does.
7. **Eye and neck points need the humanoid flag.** `GetGlobalStableEyePoint(bool isHumanoid)` will hand back a meaningless position rather than throwing if you pass the wrong skeleton assumption.
8. **No disposal and no finalisation means no leak diagnostics.** If you retain references in a long-lived structure, you retain dead native handles and will not be told.
9. **`Agent.AgentVisuals` is not this type.** It is `MBAgentVisuals`, the raw native handle, cached via a `WeakReference`. `Agent` exposes no property returning the `AgentVisuals` wrapper — build it with `Create` or `Mission.AgentVisualCreator` instead.
10. **The two creation routes have different arities.** `AgentVisuals.Create` takes five arguments including `isRandomProgress`; `IAgentVisualCreator.Create` takes four, with the creator hardcoding `isRandomProgress: false`. Code that compiles against one will not compile against the other.
11. **Module boundary.** The type lives in `Modules.Native` under `TaleWorlds.MountAndBlade.View`, not in `TaleWorlds.MountAndBlade`. Referencing it requires the view assembly, and the in-tree callers are all Gauntlet UI screens rather than mission code.

## Dependencies

- **Interface:** [`IAgentVisual`](../IAgentVisual) is the contract this class implements; use the interface in your own code rather than the concrete type.
- **Factory:** [`AgentVisualsCreator`](../AgentVisualsCreator) is the `IAgentVisualCreator` implementation whose only job is to call `AgentVisuals.Create`.
- **Configuration record:** [`AgentVisualsData`](../AgentVisualsData) is the mutable builder that describes everything `Create` and `Refresh` consume.
- **Native handle:** [`MBAgentVisuals`](../MBAgentVisuals) is the engine object this class wraps.
- **Scene binding:** [`GameEntity`](../../engine/GameEntity), [`WeakGameEntity`](../../engine/WeakGameEntity), and [`Scene`](../../engine/Scene) supply the attachment point and the frame space.
- **Anthropometrics:** [`AgentSpawnData`](../AgentSpawnData) and [`BodyProperties`](../../core-extra/BodyProperties) describe the body this visual renders.
- **Attachment helper:** [`HumanBone`](../../core-extra/HumanBone) names the bone sockets the prefam-add members target; [`CompositeComponent`](../../engine/CompositeComponent) is what they return.
- Bucket home: [mission-ext API section](../)