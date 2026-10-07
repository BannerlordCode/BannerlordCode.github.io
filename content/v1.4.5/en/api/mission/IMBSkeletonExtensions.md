---
title: "IMBSkeletonExtensions"
description: "Auto-generated class reference for IMBSkeletonExtensions."
---
# IMBSkeletonExtensions

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `internal interface IMBSkeletonExtensions`
**Base:** none
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/IMBSkeletonExtensions.cs`

## Overview

`IMBSkeletonExtensions` is the bridge to the **skeleton and animation-channel runtime**: it creates `Skeleton` objects, plays clips into named channels, and reads bone transforms. The file is 52 lines, the type is `internal`, and `[ScriptingInterfaceBase]` sits at `IMBSkeletonExtensions.cs:5`. Its thirteen members bind native symbols through `[EngineMethod("...", false, null, false)]` — `create_agent_skeleton` at `:10`, `create_simple_skeleton` at `:13`, `get_bone_entitial_frame` at `:31`, `set_animation_at_channel` at `:34`, `get_action_at_channel` at `:37`.

The management here is split across **two** wrapper classes, and that split is the single most useful thing to know. `public static class MBSkeletonExtensions` (`MBSkeletonExtensions.cs:6`) forwards the channel-and-frame members. The three **constructors do not go through it at all** — `CreateSimpleSkeleton` and `CreateAgentSkeleton` are called directly out of the extension class `GameEntityExtensions` (`GameEntityExtensions.cs:21`, `:26`, `:32`, `:38`), which is public. So the same interface is reachable through two different public doors, split by responsibility rather than by interface.

## Mental Model

Picture a **theatre lighting desk with numbered channels**. A `Skeleton` is the rig; each channel is a dimmer, and only one clip is lit on a given channel at a time. Playing a clip into a channel is `set_animation_at_channel`; asking what is currently lit is `get_action_at_channel`; and the blend period decides how long the swap takes, which is why a forced change with too short a blend pops.

Two boundaries follow from that model and are worth stating explicitly. First, **the constructors and the channels are different kinds of operation**: `CreateAgentSkeleton` builds the rig and needs a skeleton name, a humanoid flag, an action set and a monster, while `SetAnimationAtChannel` needs only a rig and a clip. Confusing them is not possible at compile time because the signatures differ, but assuming a fresh `Skeleton` from `CreateSimpleSkeleton` can carry agent action channels is a mistake — a simple skeleton has no action set attached, so `SetAgentActionChannel` on it produces no visible result.

Second, **bone indices are signed bytes here**. `GetBoneEntitialFrame(UIntPtr, sbyte bone, bool, bool, ref MatrixFrame)` at `:32` takes an `sbyte`, matching `IMBActionSet.GetBoneIndexWithId`'s return type (`IMBActionSet.cs:30`). That is not a coincidence: the bone index you get from the action-set registry is exactly the kind of value you spend here, and the two only agree because both sides use the same `sbyte` width.

## How to use

**How to obtain it.** Go through the two public wrappers. `public static class MBSkeletonExtensions` (`MBSkeletonExtensions.cs:6`) exposes the channel operations as C# extension methods on `Skeleton` — `SetAnimationAtChannel(this Skeleton, ...)` at `:62`/`:68`, `SetAgentActionChannel(this Skeleton, ...)` at `:47`, `GetActionAtChannel(this Skeleton, int)` at `:73`. The constructors come from `public static class GameEntityExtensions`, whose `CreateAgentSkeleton(this GameEntity, string skeletonName, bool isHumanoid, MBActionSet actionSet, string monsterUsageSetName, Monster monster)` sits at `GameEntityExtensions.cs:29` with a `WeakGameEntity` overload at `:35`. The interface itself is `internal` (`IMBSkeletonExtensions.cs:7`) behind `internal static IMBSkeletonExtensions IMBSkeletonExtensions;` (`MBAPI.cs:34`), and `TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10` grants `InternalsVisibleTo` only to the three TaleWorlds assemblies.

**A typical use.** A mod that builds an agent-grade rig on an entity, then drives one of its channels by action index rather than by raw animation number:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

Scene scene = Mission.Current.Scene;
GameEntity entity = GameEntity.CreateEmpty(scene);
MBActionSet actionSet = MBActionSet.GetActionSet("human_soldier");
entity.CreateAgentSkeleton("human_soldier", true, actionSet, null, null);
Debug.Print("skeleton = " + entity.Skeleton, 0);

ActionIndexCache action = ActionIndexCache.Create("act.notched_debug_sword_idle");
entity.Skeleton.SetAgentActionChannel(0, in action);
```

**What to watch out for.** `SetAgentActionChannel` defaults `blendPeriodOverride` to `-0.2f` and `forceFaceMorphRestart` to `true` (`MBSkeletonExtensions.cs:47`). Overriding a channel with that default while the agent is mid-swing is the classic single mistake on this interface: the consequence is a visible snap mid-animation, because the bridge honours your blend period rather than the one authored on the clip. Pass a real blend period when you take over a channel that is already lit.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `CreateAgentSkeleton` | `[EngineMethod("create_agent_skeleton", false, null, false)] Skeleton CreateAgentSkeleton(string skeletonName, bool isHumanoid, int actionSetIndex, string monsterUsageSetName, ref AnimationSystemData animationSystemData)` | Builds a full agent-grade rig. **Reached directly from `GameEntityExtensions.CreateAgentSkeleton` (`GameEntityExtensions.cs:29`, `:35`), not through `MBSkeletonExtensions`**, which declares no such method. The wrapper builds the `AnimationSystemData` and passes `actionSet.Index` (`:32`); an invalid action set therefore forwards `-1`. |
| `CreateSimpleSkeleton` | `[EngineMethod("create_simple_skeleton", false, null, false)] Skeleton CreateSimpleSkeleton(string skeletonName)` | A bare rig with no action set, reached from `GameEntityExtensions.CreateSimpleSkeleton` (`GameEntityExtensions.cs:19`, `:24`). `SetAgentActionChannel` on one of these produces nothing visible, because no action set was ever attached. |
| `CreateWithActionSet` | `[EngineMethod("create_with_action_set", false, null, false)] Skeleton CreateWithActionSet(ref AnimationSystemData animationSystemData)` | The middle path: a rig with an action set but no agent semantics. Public at `MBSkeletonExtensions.cs:8-11` and also used by the entity extension overloads (`GameEntityExtensions.cs:43`, `:48`). This is the one to reach for on a prop that should animate but not fight. |
| `GetBoneEntitialFrame` | `[EngineMethod("get_bone_entitial_frame", false, null, false)] void GetBoneEntitialFrame(UIntPtr skeletonPointer, sbyte bone, bool useBoneMapping, bool forceToUpdate, ref MatrixFrame outFrame)` | World transform of one bone, written through a `ref`. Wrapped as an extension method that returns a `MatrixFrame` value (`MBSkeletonExtensions.cs:35-40`) — note the wrapper adds the `forceToUpdate` default of `false`. **`sbyte` bone index**: values above 127 arrive negative, indistinguishable from a miss. |
| `GetBoneEntitialFrameAtAnimationProgress` | `[EngineMethod("get_bone_entitial_frame_at_animation_progress", false, null, false)] void GetBoneEntitialFrameAtAnimationProgress(UIntPtr skeletonPointer, sbyte boneIndex, int animationIndex, float progress, ref MatrixFrame outFrame)` | The same bone transform **sampled partway through a clip**, without waiting for playback to reach it. Exposed as `GetBoneEntitialFrameAtAnimationProgress(this Skeleton, ...)` (`MBSkeletonExtensions.cs:28`). This is how you place an attachment at its future pose instead of guessing an offset. |
| `SetAnimationAtChannel` | `[EngineMethod("set_animation_at_channel", false, null, false)] void SetAnimationAtChannel(UIntPtr skeletonPointer, int animationIndex, int channelNo, float animationSpeedMultiplier, float blendInPeriod, float startProgress)` | Lights one channel with a clip, by **animation index**. Two public overloads exist — one taking `string animationName` (`MBSkeletonExtensions.cs:62`) and one taking `int` (`:68`) — and the string one resolves the name before forwarding. `blendInPeriod` defaults to `-1f`, meaning "use the clip's authored value". |
| `SetAgentActionChannel` | `[EngineMethod("set_agent_action_channel", false, null, true)] void SetAgentActionChannel(UIntPtr skeletonPointer, int actionChannelNo, int actionIndex, float channelParameter, float blendPeriodOverride, bool forceFaceMorphRestart, float blendWithNextActionFactor)` | Lights a channel with an **action index**, which is the agent-facing numbering rather than the clip numbering. Public at `MBSkeletonExtensions.cs:47`. **Defaults `blendPeriodOverride = -0.2f` and `forceFaceMorphRestart = true`**, so taking over a lit channel without naming a blend period snaps. |
| `GetActionAtChannel` | `[EngineMethod("get_action_at_channel", false, null, false)] int GetActionAtChannel(UIntPtr skeletonPointer, int channelNo)` | Which action is currently on a channel, wrapped back into an `ActionIndexCache` by `MBSkeletonExtensions.cs:73-76`. **Read it before you overwrite** — it is the only way to tell whether a channel is idle or already driving an animation you would be cancelling. |
| `DoesActionContinueWithCurrentActionAtChannel` | `[EngineMethod("does_action_continue_with_current_action_at_channel", false, null, false)] bool DoesActionContinueWithCurrentActionAtChannel(UIntPtr skeletonPointer, int actionChannelNo, int actionIndex)` | Whether the clip is an authored continuation of what is already playing. Exposed at `MBSkeletonExtensions.cs:52`. Forcing `false` here is what produces a hard cut; honouring it is what makes scripted animation flow. |
| `SetFacialAnimationOfChannel` | `[EngineMethod("set_facial_animation_of_channel", false, null, false)] void SetFacialAnimationOfChannel(UIntPtr skeletonPointer, int channel, string facialAnimationName, bool playSound, bool loop)` | Drives a face channel by name. Exposed with the typed channel enum at `MBSkeletonExtensions.cs:42` (`Agent.FacialAnimChannel`). The `loop` flag is what turns a one-off into a permanent expression, so setting `true` and never clearing it leaves the face stuck. |
| `GetSkeletonFaceAnimationName` / `GetSkeletonFaceAnimationTime` | `[EngineMethod("get_skeleton_face_animation_name", false, null, false)] string GetSkeletonFaceAnimationName(UIntPtr entityId)` and `... float GetSkeletonFaceAnimationTime(UIntPtr entityId)` | Read back which face clip is playing and how far in it is, exposed at `MBSkeletonExtensions.cs:13-26`. The set of these is asymmetric: the interface has a **setter only through `set_skeleton_face_animation_time`** (`:22`) and a `set_facial_animation_of_channel` (`:40`) — there is no single "clear face" symbol, so clearing means setting another clip. |
| `TickActionChannels` | `[EngineMethod("tick_action_channels", false, null, false)] void TickActionChannels(UIntPtr skeletonPointer)` | Advances channel playback, exposed at `MBSkeletonExtensions.cs:57`. The engine ticks channels for agents it owns; **a skeleton a mod created itself may need this called from your own tick**, or a channel you just set never plays. |
| `SetSkeletonFaceAnimationTime` | `[EngineMethod("set_skeleton_face_animation_time", false, null, false)] void SetSkeletonFaceAnimationTime(UIntPtr entityId, float time)` | Scrubs the face animation, exposed at `MBSkeletonExtensions.cs:18`. Note the parameter is named `entityId` while every other member names it `skeletonPointer` — the native side treats them as the same handle, but the parameter names are not uniform. |

## Examples

Build a rig with an action set and drive it, then confirm what is actually on the channel:

```csharp
using TaleWorlds.Engine;
using TaleWorlds.MountAndBlade;

Scene scene = Mission.Current.Scene;
GameEntity entity = GameEntity.CreateEmpty(scene);
entity.CreateAgentSkeleton("human_soldier", true, MBActionSet.GetActionSet("human_soldier"), null, null);

ActionIndexCache action = ActionIndexCache.Create("act.notched_debug_sword_idle");
bool continues = entity.Skeleton.DoesActionContinueWithCurrentActionAtChannel(0, in action);
Debug.Print("continues current channel = " + continues, 0);

ActionIndexCache now = entity.Skeleton.GetActionAtChannel(0);
Debug.Print("channel 0 now plays " + now.GetName(), 0);
```

Take over a channel that is already lit, naming a blend period so the swap does not snap:

```csharp
using TaleWorlds.MountAndBlade;

ActionIndexCache action = ActionIndexCache.Create("act.jump_end");
Skeleton skeleton = entity.Skeleton;
skeleton.SetAgentActionChannel(0, in action, 0f, 0.3f, true, 0f);
Debug.Print("channel 0 blended over 0.3s into " + action.GetName(), 0);
```

Place an attachment at a bone's pose partway through a clip, without waiting for playback:

```csharp
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

int animationIndex = MBAnimation.GetAnimationIndexWithName("act.notched_debug_sword_idle");
sbyte handBone = MBActionSet.GetBoneIndexWithId("human_soldier", "skeleton_r_hand");
MatrixFrame midPose = entity.Skeleton.GetBoneEntitialFrameAtAnimationProgress(handBone, animationIndex, 0.5f);
Debug.Print("hand at half the clip = " + midPose, 0);
```

## Risks and crash boundaries

- **A mod assembly cannot call this interface.** `internal interface IMBSkeletonExtensions` (`IMBSkeletonExtensions.cs:7`), `internal static` field (`MBAPI.cs:34`), and `InternalsVisibleTo` limited to three TaleWorlds assemblies (`TaleWorlds.MountAndBlade/Properties/AssemblyInfo.cs:8-10`).
- **The interface is split across two wrappers.** Channel and frame members go through `MBSkeletonExtensions`; the three constructors are called straight out of `GameEntityExtensions` (`GameEntityExtensions.cs:21`, `:26`, `:32`, `:38`). Searching only one wrapper class gives a misleading picture of what is reachable.
- **`SetAgentActionChannel` snaps by default.** `blendPeriodOverride = -0.2f`, `forceFaceMorphRestart = true` (`MBSkeletonExtensions.cs:47`). Overriding a live channel without naming a period produces a visible pop.
- **`sbyte` bone indices.** `GetBoneEntitialFrame` (`:32`) and `GetBoneEntitialFrameAtAnimationProgress` (`:29`) both take `sbyte`, matching `IMBActionSet.GetBoneIndexWithId`'s return type (`IMBActionSet.cs:30`). An index over 127 becomes a negative number that is indistinguishable from "no such bone".
- **A simple skeleton cannot carry agent actions.** `CreateSimpleSkeleton` (`:13`) attaches no action set, so `SetAgentActionChannel` on the result does nothing visible.
- **An invalid action set forwards `-1`.** `GameEntityExtensions.cs:32` passes `actionSet.Index` unchecked, so `MBActionSet.InvalidActionSet` reaches native.
- **Self-created skeletons may need manual channel ticking.** `TickActionChannels` (`:49`) exists precisely because the engine only ticks rigs it owns.
- **No "clear face" symbol.** There is a face-animation setter (`set_skeleton_face_animation_time`, `:22`) and a face-channel setter (`:40`), but no clear; leaving `loop = true` on a face channel sticks.
- **Parameter naming is not uniform.** `set_skeleton_face_animation_time` names its handle `entityId` (`:22`) while its siblings name the same handle `skeletonPointer`. The types agree; the names do not.
- **Not a save participant.** No `[Serializable]`, no sync surface.

## Cross-Version Notes

The v1.4.5 file is 52 lines with thirteen `[EngineMethod]`-annotated members. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/` layout declares the same native symbols, and `bannerlord-1.5.3` retains the shape. Note that `get_bone_entitial_frame_at_animation_progress` appears on both this interface (`:28`) and on `IMBAgentVisuals` (`IMBAgentVisuals.cs:125`) — the agent path and the bare-skeleton path are separate bindings of the same native capability.

## Dependencies

- Channel and frame members: `public static class MBSkeletonExtensions` in the same module (`MBSkeletonExtensions.cs:6`-`:77`).
- Constructor members: `public static class GameEntityExtensions`, which calls `MBAPI.IMBSkeletonExtensions` directly (`GameEntityExtensions.cs:19`-`:48`).
- Static holder: `MBAPI.IMBSkeletonExtensions`, an `internal static` field on the public `MBAPI` class (`MBAPI.cs:34`).
- Binding marker: [`ScriptingInterfaceBase`](../ScriptingInterfaceBase), applied at `IMBSkeletonExtensions.cs:5`.
- Bone indices come from [`IMBActionSet`](../IMBActionSet): `GetBoneIndexWithId` returns the same `sbyte` these methods consume (`IMBActionSet.cs:30`).
- Clip and action indices come from [`IMBAnimation`](../IMBAnimation) and are wrapped as [`ActionIndexCache`](../ActionIndexCache).
- Same symbols reached through the agent path: [`IMBAgentVisuals`](../IMBAgentVisuals), `IMBAgentVisuals.cs:33`-`:49`.
- The rig object these members operate on: [`Skeleton`](../../engine/Skeleton), and the entity that owns one: [`GameEntity`](../../engine/GameEntity).
- Bucket index: [mission API](../)