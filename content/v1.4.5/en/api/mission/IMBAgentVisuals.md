---
title: "IMBAgentVisuals"
description: "The internal native bridge behind MBAgentVisuals: the rendering side of an agent. Seventy-two EngineMethods covering skeleton, meshes, weapons, LOD, ragdoll and visibility, plus the five controller-scoped members with no other home."
---

# IMBAgentVisuals

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBAgentVisuals`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBAgentVisuals.cs`

## Overview

`IMBAgentVisuals` is the managed-to-native seam for **how an agent looks**, as distinct from what it does. [`IMBAgent`](../IMBAgent) decides where a unit is, what state it is in and what action it plays; this interface decides which skeleton it has, which meshes hang off it, which weapon is in which slot, and whether it is drawn at all. The file is 226 lines with 72 `[EngineMethod]` bindings, and it is the largest bridge in this bucket by member count.

Two wrappers exist, and which one you go through tells you which half of the interface you are using. [`MBAgentVisuals`](../../mission-ext/MBAgentVisuals), `public sealed class MBAgentVisuals : NativeObject` (`MBAgentVisuals.cs:10`), forwards 66 of the 72 members. [`MBAgentRendererSceneController`](../../mission-ext/MBAgentRendererSceneController) forwards the other five — `ValidateAgentVisualsReseted` (`MBAgentRendererSceneController.cs:38`), `CreateAgentRendererSceneController` (`:22`), `DestructAgentRendererSceneController` (`:32`), `SetDoTimerBasedForcedSkeletonUpdates` (`:27`) and `SetEnforcedVisibilityForAllAgents` (`:17`). That leaves exactly two members with no managed caller at all, discussed below.

## Mental Model

### What it is / which layer

- It is the **presentation half of an agent**, and it is keyed on a raw `UIntPtr agentVisualsPtr` rather than on an `Agent`. Almost every member takes that pointer as its first argument, because one visual can exist without a live `Agent` behind it.
- Think of the lifecycle as three phases. **Creation**: `CreateAgentVisuals(scenePtr, ownerName, eyeOffset)` (`IMBAgentVisuals.cs:27`) hands back an `MBAgentVisuals` wrapper. **Population**: `SetSkeleton` (`:36`), `AddSkinMeshesToAgentEntity` (`:42`), `AddWeaponToAgentEntity` (`:84`) fill it in. **Per-frame**: `Tick(agentVisualsId, parentAgentVisualsId, dt, entityMoving, speed)` (`:30`) drives it.
- `Tick` takes a **parent** visual (`:30`), which is how rider and mount visuals are driven together — one visual's animation advances another's. That parameter is the reason this interface cannot be reasoned about member-by-member in isolation.
- It is **not** a managed model. `MBAgentVisuals` is a `NativeObject` (`MBAgentVisuals.cs:10`), so the managed side holds a pointer and every property is a round trip.

### The consequence that matters

**Two members are completely unreachable: `AddMesh` and `RemoveMesh`.** `IMBAgentVisuals.cs:60` and `IMBAgentVisuals.cs:63` declare them, binding `add_mesh` and `remove_mesh`, and **nothing in the managed tree calls them** — verified by searching every `.cs` under `bin/` for `IMBAgentVisuals.AddMesh(` and `.RemoveMesh(` and finding no call site outside the generated `ScriptingInterfaceOfIMBAgentVisuals` delegate table. So the sanctioned way to change an agent's raw mesh list does not exist. If you need to add or remove a plain mesh on a visual, you have no public path; `AddMultiMesh`/`RemoveMultiMesh` (`:66`, `:81`) are a different mechanism.

The second consequence is that `IsValid` (`IMBAgentVisuals.cs:159`) is the only liveness check on this bridge, and `MBAgentVisuals.IsValid` forwards it directly (`MBAgentVisuals.cs:58`). Every other member — `GetFrame` (`:138`), `SetVisible` (`:144`), `GetEntity` (`:153`) — takes the pointer with no guard, so validity is the caller's job in exactly the way `MBActionSet` guards its indices.

### When to use / when not

- **Use** through `MBAgentVisuals` when you need presentation facts a simulation `Agent` does not carry: the skeleton (`GetSkeleton`, `IMBAgentVisuals.cs:150`), the eye and neck points for camera framing (`GetGlobalStableEyePoint`, `:162`, and `GetGlobalStableNeckPoint`, `:165`), the ragdoll state (`GetCurrentRagdollState`, `:177`), or the visual-strength value the engine uses for shading (`GetVisualStrengthOfAgentVisual`, `:225`).
- **Use** through `MBAgentRendererSceneController` only when you are managing a scene's agent-rendering subsystem as a whole — the five controller-scoped members do not make sense for a single agent.
- **Do NOT** hold a `MBAgentVisuals` past mission end.** It is a `NativeObject` over a native pointer with no managed lifetime tracking; after teardown `IsValid` may still answer, or may read freed memory. Drop the reference when the mission ends.

## How to use

**How to obtain it.** You cannot reference the interface: it is `internal` (`IMBAgentVisuals.cs:8`), the `MBAPI` field is `internal static` (`MBAPI.cs:14`), and `TaleWorlds.MountAndBlade` grants `InternalsVisibleTo` only to `TaleWorlds.MountAndBlade.AutoGenerated`, `TaleWorlds.MountAndBlade.Multiplayer` and `TaleWorlds.Generator.Bannerlord` (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`).

The door out is [`MBAgentVisuals`](../../mission-ext/MBAgentVisuals), `public sealed class` at `MBAgentVisuals.cs:10`. You obtain an instance from an `Agent` rather than creating one directly — `IMBAgent.GetAgentVisuals` (`IMBAgent.cs:30`) is the bridge that hands the visual back, and the managed `Agent` exposes it as a property (`Agent.cs:982`).

**A typical use.** Read presentation facts for a live unit, with an explicit validity check because nothing on this bridge guards for you:

```csharp
using TaleWorlds.MountAndBlade;

public static class UnitVisuals
{
    public static void Describe(Agent agent)
    {
        // MBAgentVisuals is public sealed (MBAgentVisuals.cs:10) and its
        // IsValid forwards MBAPI.IMBAgentVisuals.IsValid (MBAgentVisuals.cs:58)
        // -> IMBAgentVisuals.cs:159. Nothing else on the bridge checks it.
        MBAgentVisuals visuals = agent.GetAgentVisuals();
        if (visuals == null || !visuals.IsValid)
            return;

        // Stable eye point, for camera work: IMBAgentVisuals.cs:162 -> MBAgentVisuals.cs:63
        Debug.Print("eye at " + visuals.GetGlobalStableEyePoint(true), 0);

        // Ragdoll state: IMBAgentVisuals.cs:177 -> MBAgentVisuals.cs:100
        Debug.Print("ragdoll: " + visuals.GetCurrentRagdollState(), 0);
    }
}
```

**What to watch out for.** The trap here is expecting `AddMesh` to work. It is declared, it is bound to a real native symbol, it looks like the obvious way to attach a mesh to a unit — and there is no managed caller and no public wrapper for it anywhere in the tree (`IMBAgentVisuals.cs:60`). Code that reaches for it will fail to compile, and the fix is not a workaround: the operation simply has no supported entry point. For per-agent mesh attachment, the path that does exist is `AddPrefabToAgentVisualBoneByBoneType` (`IMBAgentVisuals.cs:183`) or `...ByRealBoneIndex` (`:186`), both of which are forwarded (`MBAgentVisuals.cs:110`, `:115`) and both of which return a `CompositeComponent`.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CreateAgentVisuals` | `[EngineMethod("create_agent_visuals", false, null, false)] MBAgentVisuals CreateAgentVisuals(UIntPtr scenePtr, string ownerName, Vec3 eyeOffset)` | Creates a visual in a scene and returns the managed wrapper for it. Declared at `IMBAgentVisuals.cs:27`; forwarded by `MBAgentVisuals.CreateAgentVisuals` at `MBAgentVisuals.cs:24`. This is one of the few members whose C# return type is the same type as the wrapper class — the bridge hands back a managed `MBAgentVisuals` directly. `ownerName` names the owning agent for native bookkeeping and `eyeOffset` positions the eye point. |
| `Tick` | `[EngineMethod("tick", false, null, false)] void Tick(UIntPtr agentVisualsId, UIntPtr parentAgentVisualsId, float dt, bool entityMoving, float speed)` | Advances the visual by one frame. Declared at `IMBAgentVisuals.cs:30`; forwarded by `MBAgentVisuals.Tick(float, bool, float)` at `MBAgentVisuals.cs:29`, which passes `parentAgentVisuals?.GetPtr() ?? UIntPtr.Zero` (`:29`) — so **a null parent is explicitly passed as `UIntPtr.Zero`**. The parent parameter is how rider/mount visuals are driven in tandem; `entityMoving` and `speed` tell the engine whether to expect animation from movement. |
| `IsValid` | `[EngineMethod("is_valid", false, null, false)] bool IsValid(UIntPtr agentVisualsPtr)` | Whether the visual still exists natively. Declared at `IMBAgentVisuals.cs:159`; forwarded at `MBAgentVisuals.cs:58`. **The only liveness check on this bridge** — every other member takes the pointer unguarded, so this is the gate a caller must apply itself. |
| `GetSkeleton` | `[EngineMethod("get_skeleton", false, null, false)] Skeleton GetSkeleton(UIntPtr agentVisualsPtr)` | The visual's `Skeleton`. Declared at `IMBAgentVisuals.cs:150`; forwarded at `MBAgentVisuals.cs:53`. `Skeleton` is a `NativeObject` in its own right, so this is a pointer hand-off, not a copy. |
| `GetEntity` / `GetEntityPointer` | `GameEntity GetEntity(UIntPtr)` at `IMBAgentVisuals.cs:153` and `UIntPtr GetEntityPointer(UIntPtr)` at `IMBAgentVisuals.cs:156` | The scene entity the visual drives. Both forwarded (`MBAgentVisuals.cs:48`, `:53`). **The pair exists deliberately**: `GetEntity` returns the managed handle and `GetEntityPointer` returns the raw pointer, so caller code that only needs to pass it onward uses the cheaper one (`MBAgentVisuals.cs:53`). |
| `GetFrame` / `GetGlobalFrame` / `SetFrame` | `void GetFrame(UIntPtr, ref MatrixFrame outFrame)` `IMBAgentVisuals.cs:138`, `void GetGlobalFrame(UIntPtr, ref MatrixFrame outFrame)` `IMBAgentVisuals.cs:141`, `void SetFrame(UIntPtr, ref MatrixFrame)` `IMBAgentVisuals.cs:135` | The visual's local and world transforms, and the setter for the local one. Forwarded at `MBAgentVisuals.cs:35`, `:42`, and `:42` respectively. **The local/global distinction is the load-bearing detail**: `GetFrame` is relative to the parent visual, `GetGlobalFrame` is world space. Reading the wrong one during rider/mount work produces an offset you cannot explain. |
| `SetEntity` / `SetSkeleton` | `void SetEntity(UIntPtr, UIntPtr entityPtr)` `IMBAgentVisuals.cs:33` and `void SetSkeleton(UIntPtr, UIntPtr skeletonPtr)` `IMBAgentVisuals.cs:36` | Attach an existing entity and an existing skeleton to a visual. Forwarded at `MBAgentVisuals.cs:30` and `:34`. Both take raw pointers rather than managed objects, because a visual can be pointed at a scene entity it does not own. |
| `SetVisible` / `GetVisible` | `void SetVisible(UIntPtr, bool value)` `IMBAgentVisuals.cs:144` and `bool GetVisible(UIntPtr)` `IMBAgentVisuals.cs:147` | Whether the visual is drawn. Forwarded at `MBAgentVisuals.cs:51` and `:57`. This is the visibility that matters for rendering; it is separate from the contour and occlusion controls below. |
| `AddSkinMeshesToAgentEntity` | `[EngineMethod("add_skin_meshes_to_agent_visuals", false, null, false)] void AddSkinMeshesToAgentEntity(UIntPtr agentVisualsId, ref SkinGenerationParams skinParams, ref BodyProperties bodyProperties, bool useGPUMorph, bool useFaceCache)` | Builds and attaches the body and face meshes for an agent. Declared at `IMBAgentVisuals.cs:42`; note the **C# name and native symbol disagree** — the method is `AddSkinMeshesToAgentEntity` while the symbol is `add_skin_meshes_to_agent_visuals`. It is the visual-side consumer of what [`IMBFaceGen`](../IMBFaceGen) produces: `skinParams` and `bodyProperties` come from that pipeline. `useGPUMorph` and `useFaceCache` are performance switches with real consequences. |
| `AddWeaponToAgentEntity` | `[EngineMethod("add_weapon_to_agent_entity", false, null, false)] void AddWeaponToAgentEntity(UIntPtr agentVisualsPtr, int slotIndex, in WeaponData agentEntityData, WeaponStatsData[] weaponStatsData, int weaponStatsDataLength, in WeaponData agentEntityAmmoData, WeaponStatsData[] ammoWeaponStatsData, int ammoWeaponStatsDataLength, GameEntity cachedEntity)` | Attaches a weapon's mesh to a visual in a given equipment slot. Declared at `IMBAgentVisuals.cs:84`. It carries the **same four data/length pairs** as `IMBGameEntityExtensions.CreateFromWeapon` (`IMBGameEntityExtensions.cs:11`), so the same pointer-lifetime concern applies — the `WeaponData` managed pointers are only valid for the call. `cachedEntity` lets a caller reuse an already-built entity instead of constructing one. |
| `ClearAllWeaponMeshes` / `ClearWeaponMeshes` | `void ClearAllWeaponMeshes(UIntPtr)` `IMBAgentVisuals.cs:93` and `void ClearWeaponMeshes(UIntPtr, int weaponVisualIndex)` `IMBAgentVisuals.cs:96` | Strip weapon meshes — all of them, or one visual index. Forwarded at `MBAgentVisuals.cs:57` and beyond. This is the teardown side of `AddWeaponToAgentEntity`, and it is **presentation only** — it removes what you see, not what the simulation thinks is equipped. |
| `SetWieldedWeaponIndices` | `[EngineMethod("set_wielded_weapon_indices", false, null, false)] void SetWieldedWeaponIndices(UIntPtr agentVisualsId, int slotIndexRightHand, int slotIndexLeftHand)` | Tells the visual which slots are being wielded in each hand. Declared at `IMBAgentVisuals.cs:90`. **Index-based, not object-based**: this is a rendering instruction about which of the attached meshes is currently held, and it is set independently of the simulation's wield state. |
| `GetGlobalStableEyePoint` / `GetGlobalStableNeckPoint` | `Vec3 GetGlobalStableEyePoint(UIntPtr, bool isHumanoid)` `IMBAgentVisuals.cs:162` and `Vec3 GetGlobalStableNeckPoint(UIntPtr, bool isHumanoid)` `IMBAgentVisuals.cs:165` | World-space eye and neck positions, with an `isHumanoid` flag choosing between the humanoid and mount bone layout. Forwarded at `MBAgentVisuals.cs:63` and `:68`. These are the **camera and UI anchors** — "where is this unit looking from" and "where is its head". The "stable" in the name means the point does not move with head-look animation, which is exactly why camera code wants it. |
| `GetCurrentRagdollState` | `[EngineMethod("get_current_ragdoll_state", false, null, false)] RagdollState GetCurrentRagdollState(UIntPtr agentVisualsPtr)` | The ragdoll state of this visual. Declared at `IMBAgentVisuals.cs:177`; forwarded at `MBAgentVisuals.cs:100`. It lives on the *visual* rather than on `IMBAgent` because ragdoll is a rendering-and-physics blend the visual owns. |
| `GetRealBoneIndex` | `[EngineMethod("get_real_bone_index", false, null, false)] sbyte GetRealBoneIndex(UIntPtr agentVisualsPtr, HumanBone boneType)` | Resolves a semantic `HumanBone` enum value to this visual's **actual** bone index. Declared at `IMBAgentVisuals.cs:180`; forwarded at `MBAgentVisuals.cs:105`. **Two hazards in one signature**: it returns `sbyte`, so any index above 127 is indistinguishable from a miss, and "real" bone index differs from the abstract `HumanBone` numbering whenever a skeleton has extra or missing bones. |
| `AddPrefabToAgentVisualBoneByBoneType` / `...ByRealBoneIndex` | `CompositeComponent AddPrefabToAgentVisualBoneByBoneType(UIntPtr, string prefabName, HumanBone boneType)` `IMBAgentVisuals.cs:183` and `CompositeComponent AddPrefabToAgentVisualBoneByRealBoneIndex(UIntPtr, string prefabName, sbyte realBoneIndex)` `IMBAgentVisuals.cs:186` | Attach a prefab to a named bone. Forwarded at `MBAgentVisuals.cs:110` and `:115`. **These two are the supported way to add something to a visual's mesh list**, and the practical answer to the missing `AddMesh` (`:60`): you attach a *prefab* by bone, and you get a `CompositeComponent` back rather than raw mesh control. The two overloads differ in how you name the bone — semantic enum or resolved index. |
| `AddMesh` / `RemoveMesh` | `void AddMesh(UIntPtr, UIntPtr meshPointer)` `IMBAgentVisuals.cs:60` and `void RemoveMesh(UIntPtr, UIntPtr meshPointer)` `IMBAgentVisuals.cs:63` | Attach or detach a raw mesh on a visual — and **neither has any managed caller**. Searched across every `.cs` under `bin/` for `IMBAgentVisuals.AddMesh(` and `IMBAgentVisuals.RemoveMesh(`: zero call sites outside the generated `ScriptingInterfaceOfIMBAgentVisuals` delegate table, and zero forwards in `MBAgentVisuals.cs`. There is no public path to them. Use `AddPrefabToAgentVisualBoneByBoneType` (`:183`) or `AddMultiMesh` (`:66`) instead. |
| `AddMultiMesh` / `RemoveMultiMesh` | `void AddMultiMesh(UIntPtr, UIntPtr multiMeshPointer, int bodyMeshIndex)` `IMBAgentVisuals.cs:66` and `void RemoveMultiMesh(UIntPtr, UIntPtr multiMeshPointer, int bodyMeshIndex)` `IMBAgentVisuals.cs:81` | Attach and detach a **multi-mesh** at a named body-mesh slot. The `bodyMeshIndex` selects which of the agent's body regions it replaces. Distinct from `AddMesh` in that it takes over a specific body region rather than adding an independent mesh, and it *is* reachable, unlike `AddMesh`. |
| `ValidateAgentVisualsReseted` | `[EngineMethod("validate_agent_visuals_reseted", false, null, false)] void ValidateAgentVisualsReseted(UIntPtr scenePointer, UIntPtr agentRendererSceneControllerPointer)` | Asserts that the scene's agent visuals are in a reset state. Declared at `IMBAgentVisuals.cs:12`; the only caller is `MBAgentRendererSceneController.ValidateAgentVisualsReseted` at `MBAgentRendererSceneController.cs:38`, passing `scene.Pointer` and the controller's own pointer. **The native symbol carries a typo** — `reseted`, not `reset` — and since the symbol string is the binding contract, that typo cannot be corrected without breaking the binding. |
| `CreateAgentRendererSceneController` / `DestructAgentRendererSceneController` | `UIntPtr CreateAgentRendererSceneController(UIntPtr scenePointer)` `IMBAgentVisuals.cs:15` and `void DestructAgentRendererSceneController(UIntPtr, UIntPtr, bool deleteThisFrame)` `IMBAgentVisuals.cs:18` | Create and destroy the per-scene agent-rendering controller. Forwarded by `MBAgentRendererSceneController` at `:22` and `:32`. **The asymmetry is the point**: creation returns a raw `UIntPtr` and the wrapper wraps it in `new MBAgentRendererSceneController(...)` (`MBAgentRendererSceneController.cs:22`), while destruction needs an explicit `deleteThisFrame` flag (`:32`) — so the teardown is deferred by the caller, not automatic. |
| `SetDoTimerBasedForcedSkeletonUpdates` | `[EngineMethod("set_do_timer_based_skeleton_forced_updates", false, null, false)] void SetDoTimerBasedForcedSkeletonUpdates(UIntPtr agentRendererSceneControllerPointer, bool value)` | Switches the scene's skeleton updates to a timer-driven schedule. Declared at `IMBAgentVisuals.cs:21`; forwarded at `MBAgentRendererSceneController.cs:27`. **Again a name/symbol mismatch**: method `SetDoTimerBasedForcedSkeletonUpdates`, symbol `set_do_timer_based_skeleton_forced_updates`. A scene-wide performance switch — it changes how often every agent's skeleton is forced to update, so turning it on makes agents animate more eagerly at more cost. |
| `SetEnforcedVisibilityForAllAgents` | `[EngineMethod("set_enforced_visibility_for_all_agents", false, null, false)] void SetEnforcedVisibilityForAllAgents(UIntPtr scenePointer, UIntPtr agentRendererSceneControllerPointer)` | Forces the visibility state of every agent in the scene. Declared at `IMBAgentVisuals.cs:24`; forwarded at `MBAgentRendererSceneController.cs:17`, which passes `scene.Pointer` and its own pointer. **Takes no per-agent argument** — it is scene-wide, so calling it changes every unit at once, not the one you had in mind. |
| `GetVisualStrengthOfAgentVisual` | `[EngineMethod("get_visual_strength_of_agent_visual", false, null, false)] float GetVisualStrengthOfAgentVisual(UIntPtr agentVisualsPtr, UIntPtr targetagentVisualsPtr, UIntPtr missionPointer, float ambientLightStrength, float sunMoonLightStrength, int agentIndexToIgnore)` | The strength of this visual's influence on another, given ambient and sun/moon light strengths and a mission pointer. Declared at `IMBAgentVisuals.cs:225` — **the last member in the file**. Forwarded at `MBAgentVisuals.cs:95`. This is a rendering-influence value (how strongly one agent's presence colours another's shading), and `agentIndexToIgnore` is an exclusion, not an offset. |
| `GetBoneEntitialFrame` / `GetBoneEntitialFrameAtAnimationProgress` | `void GetBoneEntitialFrame(UIntPtr, sbyte bone, bool useBoneMapping, ref MatrixFrame outFrame)` `IMBAgentVisuals.cs:168` and `MatrixFrame GetBoneEntitialFrameAtAnimationProgress(UIntPtr, sbyte, int, float)` `IMBAgentVisuals.cs:126` | Where a bone is, either right now (`:168`) or sampled at a progress point in an animation (`:126`). Forwarded at `MBAgentVisuals.cs:74`. Note the **spelling in the source**: `Entitial`, not `Entity`. `useBoneMapping` selects between abstract bone numbering and the visual's real numbering — the same distinction `GetRealBoneIndex` (`:180`) exists to resolve, and getting it wrong attaches your effect to the wrong bone. |
| `CreateParticleSystemAttachedToBone` | `[EngineMethod("create_particle_system_attached_to_bone", false, null, false)] void CreateParticleSystemAttachedToBone(UIntPtr agentVisualsPtr, int runtimeParticleindex, sbyte boneIndex, ref MatrixFrame boneLocalParticleFrame)` | Attaches a runtime particle system to a named bone with a local offset. Declared at `IMBAgentVisuals.cs:192`. `runtimeParticleindex` indexes a runtime-registered particle system, not a file, so this only works for particles the game already registered. |
| `AddChildEntity` / `RemoveChildEntity` | `bool AddChildEntity(UIntPtr, UIntPtr EntityId)` `IMBAgentVisuals.cs:198` and `void RemoveChildEntity(UIntPtr, UIntPtr EntityId, int removeReason)` `IMBAgentVisuals.cs:204` | Parent a scene entity to this visual and unparent it. `AddChildEntity` returns whether the attachment succeeded (`IMBAgentVisuals.cs:198`), which is the rare member here with a meaningful success flag. `RemoveChildEntity` requires a `removeReason`, so unparenting is a recorded decision rather than a bare detach. |
| `SetEnableOcclusionCulling` / `DisableContour` / `SetAsContourEntity` / `SetContourState` | `void SetEnableOcclusionCulling(UIntPtr, bool enable)` `IMBAgentVisuals.cs:216`, `void DisableContour(UIntPtr)` `IMBAgentVisuals.cs:207`, `void SetAsContourEntity(UIntPtr, uint color)` `IMBAgentVisuals.cs:210`, `void SetContourState(UIntPtr, bool alwaysVisible)` `IMBAgentVisuals.cs:213` | Four rendering-state knobs: whether the visual is occlusion-culled, and the three-stage contour system (`SetAsContourEntity` marks it, `SetContourState` sets whether it stays visible, `DisableContour` turns the effect off). These are the "draw this unit as an outline" mechanism used for selections and highlights, and they are **independent of `SetVisible`** (`:144`) — a contoured unit can be "hidden" and still drawn as a contour. |
| `Reset` / `ResetNextFrame` / `ClearVisualComponents` | `void Reset(UIntPtr)` `IMBAgentVisuals.cs:129`, `void ResetNextFrame(UIntPtr)` `IMBAgentVisuals.cs:132`, `void ClearVisualComponents(UIntPtr, bool removeSkeleton, bool removeLabel)` `IMBAgentVisuals.cs:54` | Tear-down and reset family. **`Reset` and `ResetNextFrame` are separate members** (`:129`, `:132`) differing only in *when* the reset happens — immediate versus at the start of the next frame. Choosing wrong there produces a one-frame visual glitch or a stale skeleton, and the source does not document which to prefer. |
| `GetMovementMode` | `[EngineMethod("get_movement_mode", false, null, false)] int GetMovementMode(UIntPtr agentVisualsPtr)` | The visual's current movement mode. Declared at `IMBAgentVisuals.cs:222`; forwarded at `MBAgentVisuals.cs:90`, where it is **cast to an enum**: `(HumanWalkingMovementMode)MBAPI.IMBAgentVisuals.GetMovementMode(base.Pointer)` (`MBAgentVisuals.cs:90`). The bridge returns `int`; the cast happens in the wrapper. |

Members a reader might expect and their verified status:

| Absent member | Status | Why it is absent |
| --- | --- | --- |
| A `Dispose` / release member | **UNRESOLVED — absent in v1.4.5** | `IMBAgentVisuals.cs` declares 72 `EngineMethod` attributes and none releases a visual. `MBAgentVisuals` is a `NativeObject` (`MBAgentVisuals.cs:10`), so finalisation is left to that base type. |
| Any managed caller for `AddMesh` / `RemoveMesh` | **UNRESOLVED — no caller exists** | Verified by search across `bin/`: zero call sites outside the generated delegate table, and zero forwards in `MBAgentVisuals.cs`. The members are bound but unreachable. |
| An overload of `GetFrame` for a parent | **UNRESOLVED — absent in v1.4.5** | `GetFrame` (`:138`) is local-only and `GetGlobalFrame` (`:141`) is world; there is no "relative to a specified parent" variant. |

## Examples

Gate every access on `IsValid`, because nothing else does:

```csharp
using TaleWorlds.MountAndBlade;

public static class VisualGuarded
{
    public static void SafeRefresh(Agent agent)
    {
        MBAgentVisuals visuals = agent.GetAgentVisuals();

        // MBAgentVisuals.cs:58 -> IMBAgentVisuals.cs:159.
        if (visuals == null || !visuals.IsValid)
            return;

        // MBAgentVisuals.cs:42 -> IMBAgentVisuals.cs:141. Global, not local:
        // reading GetFrame here would give you a parent-relative value.
        MatrixFrame world = new MatrixFrame();
        visuals.GetGlobalFrame(world);
        Debug.Print("world frame origin: " + world.GetPosition(), 0);
    }
}
```

Local versus global frames — the distinction that matters when a rider is involved:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

public static class RiderVisuals
{
    public static void Compare(Agent rider, Agent mount)
    {
        MBAgentVisuals riderVisuals = rider.GetAgentVisuals();
        MBAgentVisuals mountVisuals = mount.GetAgentVisuals();
        if (riderVisuals == null || !riderVisuals.IsValid ||
            mountVisuals == null || !mountVisuals.IsValid)
            return;

        // Local frame (MBAgentVisuals.cs:35 -> IMBAgentVisuals.cs:138) is
        // relative to the parent visual; global (MBAgentVisuals.cs:42 ->
        // IMBAgentVisuals.cs:141) is world space. The two differ exactly when a
        // parent visual exists, which is the mounted case.
        MatrixFrame riderLocal = new MatrixFrame();
        MatrixFrame riderGlobal = new MatrixFrame();
        riderVisuals.GetFrame(riderLocal);
        riderVisuals.GetGlobalFrame(riderGlobal);

        Debug.Print("rider local origin:  " + riderLocal.GetPosition(), 0);
        Debug.Print("rider global origin: " + riderGlobal.GetPosition(), 0);
    }
}
```

Attach something to a unit's bone — the supported alternative to the unreachable `AddMesh`:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

public static class BoneDecoration
{
    public static void AttachPlume(Agent agent, string prefabName)
    {
        MBAgentVisuals visuals = agent.GetAgentVisuals();
        if (visuals == null || !visuals.IsValid)
            return;

        // MBAgentVisuals.cs:110 -> IMBAgentVisuals.cs:183. Addressing the bone
        // by the semantic HumanBone enum lets the bridge resolve the real index,
        // so a skeleton with extra bones still gets the right attachment.
        CompositeComponent plume = visuals.AddPrefabToAgentVisualBone(
            prefabName, HumanBone.Head);

        if (plume == null)
        {
            // Returns null when the prefab or bone could not be resolved; this is
            // a real failure channel, unlike most members on this bridge.
            MBEditor.AddEditorWarning("MyMod: could not attach " + prefabName);
        }
    }
}
```

The missing member, shown so nobody burns an hour on it:

```csharp
using TaleWorlds.MountAndBlade;

public static class MeshAttachment
{
    public static void TryAttachRawMesh(Agent agent)
    {
        MBAgentVisuals visuals = agent.GetAgentVisuals();

        // WRONG: both of these are declared and bound to real native symbols
        // (IMBAgentVisuals.cs:60 and :63) but NOTHING in the managed tree calls
        // them, and MBAgentVisuals.cs forwards neither. There is no public path.
        // visuals.AddMesh(someMeshPointer);
        // visuals.RemoveMesh(someMeshPointer);

        // RIGHT: attach a prefab to a bone instead (MBAgentVisuals.cs:110),
        // or take over a body-mesh slot with a multi-mesh (IMBAgentVisuals.cs:66).
        Debug.Print("use AddPrefabToAgentVisualBone / AddMultiMesh", 0);
    }
}
```

## Risks and crash boundaries

- **A mod cannot name the interface.** `internal interface` (`IMBAgentVisuals.cs:8`) plus `internal static MBAPI` field (`MBAPI.cs:14`) plus `InternalsVisibleTo` limited to three TaleWorlds assemblies (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`). Compile-time failure.
- **`AddMesh` and `RemoveMesh` are unreachable.** Declared at `IMBAgentVisuals.cs:60` and `:63`, bound to `add_mesh` and `remove_mesh`, with **zero managed callers anywhere** — verified by search across `bin/`. Not an access problem; an absent API.
- **`IsValid` is the only liveness check.** `GetFrame` (`:138`), `SetVisible` (`:144`), `GetEntity` (`:153`) and the rest take a raw pointer with no guard. `MBAgentVisuals` is a `NativeObject` (`MBAgentVisuals.cs:10`), so a visual that outlives its mission is a freed pointer.
- **`sbyte` bone indices cap at 127.** `GetRealBoneIndex` (`:180`) returns `sbyte`, so an out-of-range resolution is indistinguishable from a miss — the same hazard as `IMBActionSet.GetBoneIndexWithId`, from the other direction.
- **`useBoneMapping` changes what a bone index means.** `GetBoneEntitialFrame` (`:168`) and the `ByBoneType` / `ByRealBoneIndex` overloads (`:183`, `:186`) address bones two different ways. Mixing them attaches effects to the wrong bone with no error.
- **`WeaponData` pointer lifetime.** `AddWeaponToAgentEntity` (`:84`) takes `in WeaponData` values whose managed pointers are valid only for the call — the same contract as `IMBGameEntityExtensions.CreateFromWeapon` (`IMBGameEntityExtensions.cs:11`).
- **Local vs global frames.** `GetFrame` (`:138`) and `GetGlobalFrame` (`:141`) disagree whenever a parent visual exists. Reading the local frame in world-space code produces an offset that looks like a bug in your maths.
- **A raw `int` crosses as an enum.** `GetMovementMode` returns `int` (`:222`) and the cast happens in the wrapper (`MBAgentVisuals.cs:90`). An unrecognised native value becomes an undefined enum member rather than an error.
- **Contour state is independent of visibility.** `SetVisible` (`:144`), `SetAsContourEntity` (`:210`), `SetContourState` (`:213`) and `DisableContour` (`:207`) are four separate knobs. A unit set invisible but contoured is still drawn, which surprises people who used `SetVisible` expecting it to be the end of the matter.
- **Not a save participant.** No `[Serializable]`, no state; everything here is presentation and none of it is persisted.

## Cross-Version Notes

The v1.4.5 file is 226 lines with 72 `[EngineMethod]` bindings. The same file name and namespace appear under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout in the `bannerlord-1.3.0` and `bannerlord-1.3.15` trees, and the visual bridge is one of the larger and more stable surfaces in the engine. The **native symbol strings** are the contract, which means three source-level oddities in this file are effectively frozen and will not be corrected: the `reseted` typo in `validate_agent_visuals_reseted` (`IMBAgentVisuals.cs:11`), the `Entitial` spelling shared by `get_quick_bone_entitial_frame` and `get_bone_entitial_frame_at_animation_progress` (`IMBAgentVisuals.cs:167`, `:125`), and the `AddSkinMeshesToAgentEntity` / `add_skin_meshes_to_agent_visuals` name-symbol split (`IMBAgentVisuals.cs:41-42`). What is most likely to grow across versions is the LOD and contour group (`SetLodAtlasShadingIndex`, `:45`, and the three contour members, `:207`-`:213`), since those are the newest-looking additions. Whether `AddMesh`/`RemoveMesh` (`:60`, `:63`) ever gain a caller is **UNRESOLVED** — the members exist and are bound, so a future version could expose them without changing the native side at all. **VERIFIED MEASURED for v1.4.5** (226 lines, 72 members, complete `MBAgentVisuals.cs` and `MBAgentRendererSceneController.cs` forward-site read, plus a repo-wide caller search).

## Dependencies

- Primary managed caller: [`MBAgentVisuals`](../../mission-ext/MBAgentVisuals), `public sealed class MBAgentVisuals : NativeObject` (`MBAgentVisuals.cs:10`), forwarding 66 of the 72 members.
- Controller-scoped caller: `MBAgentRendererSceneController` in the same module, forwarding `SetEnforcedVisibilityForAllAgents` (`MBAgentRendererSceneController.cs:17`), `CreateAgentRendererSceneController` (`:22`), `SetDoTimerBasedForcedSkeletonUpdates` (`:27`), `DestructAgentRendererSceneController` (`:32`) and `ValidateAgentVisualsReseted` (`:38`).
- How you obtain a visual: [`IMBAgent`](../IMBAgent), whose `GetAgentVisuals` is declared at `IMBAgent.cs:30`; the managed `Agent` surfaces it at `Agent.cs:982`.
- Static holder: [`MBAPI`](../../mission-ext/MBAPI) — `internal static IMBAgentVisuals IMBAgentVisuals` at `MBAPI.cs:14`, assigned in `SetObjects` at `MBAPI.cs:109`.
- Binding marker: [`ScriptingInterfaceBase`](../ScriptingInterfaceBase), applied at `IMBAgentVisuals.cs:8`.
- Upstream data producer: [`IMBFaceGen`](../IMBFaceGen), whose `BodyProperties` and deform keys feed `AddSkinMeshesToAgentEntity` (`IMBAgentVisuals.cs:42`).
- Animation-side sibling: [`IMBAnimation`](../IMBAnimation), which resolves the clips the `Tick`-driven visuals play.
- Bucket index: [mission API](../)