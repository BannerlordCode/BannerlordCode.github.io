---
title: "HumanBone"
description: "Auto-generated class reference for HumanBone."
---
# HumanBone

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public enum HumanBone : sbyte`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/HumanBone.cs`

## Overview

`HumanBone` is the **named bone index of the humanoid skeleton**, used everywhere the engine needs to attach something to a specific body part. The whole file is 35 lines: the namespace (`:1`), and one declaration — `public enum HumanBone : sbyte` (`HumanBone.cs:3`) with **28 members** (`:5`-`:33`). Nothing else.

Two facts in that declaration carry most of the weight. First, **the underlying type is `sbyte`**, so the whole enum spans −128…127 while using only −1…27. Second, **`Invalid = -1` is declared explicitly at `:5`**, and everything else is left to the default numbering, so `Abdomen` is `0`, `ThighL` is `1`, and `ItemR` — the last member — is `27`.

The left/right mirroring is not perfectly symmetric, which matters when you compute an index arithmetically. The left chain is `ThighL, CalfL, FootL, ToeL` (`:7`-`:10`); the right chain is `ThighR, CalfR, FootR, ToeR` (`:11`-`:14`). That **is** symmetric, offset by 4. But the arm chains are **not** offset by a round number: left is `ShoulderL, UpperarmL, UpperarmTwist1L, ForearmL, Forearm1L, HandL, ItemL` (`:20`-`:26`, **7 members**) and right is `ShoulderR, UpperarmR, UpperarmTwist1R, ForearmR, Forearm1R, HandR, ItemR` (`:27`-`:33`, **7 members**) — also symmetric, offset by 7. The spine runs `Spine1, Spine2, Thorax, Neck, Head` (`:15`-`:19`) and `Abdomen` (`:6`) sits *before* it, so the torso is `Abdomen` then five spine members, not six contiguous ones.

## Mental Model

Picture it as **a numbered keyring of attachment points on a wooden mannequin, where the numbers are the label and the order is the label's number**. `HandL` is not a string you look up — it is the integer `22`, and every consumer that touches a bone index is doing arithmetic or pointer work on that integer.

That framing is what makes the `sbyte` decision matter rather than being a curiosity. The bone index is **the same width everywhere it crosses a boundary**: `IMBActionSet.GetBoneIndexWithId` returns `sbyte` (`IMBActionSet.cs:30`), `IMBAgent.GetBoneEntitialFrame` takes `sbyte` (`IMBAgent.cs:633`), `IMBAgentVisuals.GetRealBoneIndex` takes `sbyte` (`IMBAgentVisuals.cs:180`), and the corresponding `out sbyte boneIndex` ray-cast parameter is `sbyte` too (`IMBMission.cs:88`, `:91`). **This enum is the public spelling of a value that is `sbyte` at every native boundary**, so the two are interchangeable by design and a cast mistake is a silent sign-extension bug rather than a compile error.

The second thing the model has to carry is **`Invalid = -1` is a real, meaningful value, not a default**. It is the one member that is *not* implicit, and it exists so that a failed bone lookup has something to return. Because `Invalid` is `-1` and every other member is `>= 0`, the check is a single `>= 0` comparison — which is exactly the shape `IMBActionSet`'s `MBActionSet.IsValid => Index >= 0` uses for the same purpose on a different value (`MBActionSet.cs:14`).

## How to use

**How to obtain it.** It is an enum in `TaleWorlds.Core` (`HumanBone.cs:1`), so it is a compile-time type with no factory. Convert a bone **name** to a member by passing the name string to whatever resolves it — the engine-side entry point is `MBActionSet.GetBoneIndexWithId(string actionSetId, string boneId)` (`MBActionSet.cs:80`), whose return type is `sbyte` and therefore lines up with this enum.

**A typical use.** Resolving a named bone on a specific action set and reading the resulting bone frame, taking the `sbyte` → `HumanBone` widening deliberately rather than by accident:

```csharp
using TaleWorlds.Core;
using TaleWorlds.Library;
using TaleWorlds.MountAndBlade;

MBActionSet actionSet = MBActionSet.GetActionSet("human_soldier");
sbyte boneIndex = MBActionSet.GetBoneIndexWithId("human_soldier", "skeleton_r_hand");

if (boneIndex >= 0)
{
    HumanBone bone = (HumanBone)boneIndex;
    Debug.Print("resolved bone = " + bone, 0);
}
else
{
    Debug.Print("bone name did not resolve", 0);
}
```

**What to watch out for.** Using the wrong test for "not a bone". The single most common mistake is comparing against `HumanBone.Invalid` as if it were the only failure value, when the real risk is a `sbyte` that never came from this enum at all. `MBActionSet.GetBoneIndexWithId` returns `sbyte`, and a nameless or unknown bone id produces a value that is not necessarily `-1`. The consequence is that `(HumanBone)someSByte` can produce a value that is neither `Invalid` nor a declared member, and every `switch` over `HumanBone` will silently fall to its default arm and behave as though no bone were selected.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Invalid` | `Invalid = -1,` (`:5`) | **The only explicitly-valued member.** The negative sentinel for a failed bone lookup, and the reason every other member can be tested with `>= 0`. Compare a resolved index against zero, not against `Invalid`, because a raw `sbyte` off the wire is not guaranteed to be `-1`. |
| `Abdomen` | `Abdomen,` (`:6`) | **Value `0`** — the first implicit member. The lower torso, placed *before* the spine chain, so the torso is `Abdomen` + five spine members rather than six contiguous ones. |
| `ThighL` … `ToeR` | `ThighL,` (`:7`), `CalfL` (`:8`), `FootL` (`:9`), `ToeL` (`:10`), `ThighR` (`:11`), `CalfR` (`:12`), `FootR` (`:13`), `ToeR` (`:14`) | The eight leg bones. **Exactly offset by 4** — `ThighR == ThighL + 4` through `ToeR == ToeL + 4` — so a left/right pair can be flipped by adding or subtracting 4. |
| `Spine1` … `Head` | `Spine1,` (`:15`), `Spine2` (`:16`), `Thorax` (`:17`), `Neck` (`:18`), `Head` (`:19`) | The five spine members, values `10`-`14`. `Head` is the most commonly requested bone in practice (hat/hair attachment), and it is the **last** of this chain. |
| `ShoulderL` … `ItemR` | `ShoulderL` (`:20`), `UpperarmL` (`:21`), `UpperarmTwist1L` (`:22`), `ForearmL` (`:23`), `Forearm1L` (`:24`), `HandL` (`:25`), `ItemL` (`:26`), `ShoulderR` (`:27`), `UpperarmR` (`:28`), `UpperarmTwist1R` (`:29`), `ForearmR` (`:30`), `Forearm1R` (`:31`), `HandR` (`:32`), `ItemR` (`:33`) | The fourteen arm bones, values `15`-`28`. **Exactly offset by 7**, so `HandR == HandL + 7`. The `…Twist1…` and `Forearm1` members exist because the skeleton is segmented at those joints — there is no single `Forearm` bone, so a caller wanting the elbow must pick one of the two forearm segments explicitly. |
| *(underlying type)* | `public enum HumanBone : sbyte` (`:3`) | **The whole enum fits in one signed byte**, matching the `sbyte` bone parameters and returns on `IMBAgent`, `IMBActionSet` and `IMBAgentVisuals`. Any wider value crossing that boundary is a cast bug, not a convenience. |

## Examples

Walk the leg chain on one side and derive the other by the fixed offset:

```csharp
using TaleWorlds.Core;

HumanBone[] leftLeg = { HumanBone.ThighL, HumanBone.CalfL, HumanBone.FootL, HumanBone.ToeL };
foreach (HumanBone bone in leftLeg)
{
    HumanBone rightSide = (HumanBone)((int)bone + 4);
    Debug.Print(bone + " -> mirrored " + rightSide, 0);
}
```

Derive the arm side the same way, where the offset is 7 rather than 4:

```csharp
using TaleWorlds.Core;

HumanBone[] leftArm = { HumanBone.ShoulderL, HumanBone.UpperarmL, HumanBone.ForearmL, HumanBone.HandL, HumanBone.ItemL };
foreach (HumanBone bone in leftArm)
{
    HumanBone rightSide = (HumanBone)((int)bone + 7);
    Debug.Print(bone + " -> mirrored " + rightSide, 0);
}
```

Guard a resolved bone index before trusting it, testing against zero rather than a sentinel:

```csharp
using TaleWorlds.Core;
using TaleWorlds.MountAndBlade;

sbyte resolved = MBActionSet.GetBoneIndexWithId("human_soldier", "skeleton_r_hand");
if (resolved < 0)
{
    Debug.Print("unresolved bone, do not use", 0);
    return;
}
Debug.Print("bone = " + (HumanBone)resolved, 0);
```

Enumerate every real bone, which is everything except the sentinel:

```csharp
using TaleWorlds.Core;

foreach (HumanBone bone in System.Enum.GetValues(typeof(HumanBone)))
{
    if (bone == HumanBone.Invalid)
    {
        continue;
    }
    Debug.Print("bone " + (int)bone + " = " + bone, 0);
}
```

## Risks and crash boundaries

- **The underlying type is `sbyte`.** (`:3`) Any bone index crossing this boundary is signed 8-bit. A bone value that "looks" unsigned will sign-extend to a large negative number the moment it is widened to `int`.
- **`Invalid = -1` is the only explicit value.** (`:5`) It is a sentinel, not a default-constructed bone — and a `default(HumanBone)` is `Abdomen` (value `0`), **not** `Invalid`. **A zero-initialised field is a valid abdomen bone.**
- **Unknown bones are not guaranteed to be `-1`.** `MBActionSet.GetBoneIndexWithId` returns `sbyte` (`MBActionSet.cs:80`); a bad name yields whatever the native registry produces. Test `>= 0`, not `== HumanBone.Invalid`.
- **A cast can produce an undeclared value.** `(HumanBone)someSByte` with an out-of-range `sbyte` yields a number with no member behind it, and every `switch` silently takes its default arm.
- **Left/right offsets differ by body part: 4 for the legs, 7 for the arms.** (`:7`-`:14`, `:20`-`:33`) **Using the leg offset on an arm bone produces a valid-looking but wrong bone** — `HandL + 4` is `HandR - 3`, a number with no member name.
- **The torso is not contiguous.** `Abdomen` is `0` and the spine starts at `10` (`Spine1`, `:15`), so "the torso" is `Abdomen` plus five members, and assuming `Abdomen + 1` is a spine bone is wrong.
- **`UpperarmTwist1` and `Forearm1` are separate bones.** There is no single `Forearm` member; a caller who needs the forearm joint must choose between two segments that are both declared.
- **No member carries a display name.** The enum has no `[Description]` or lookup table, so rendering a bone name requires your own string table.
- **Ordering is a contract.** Values are implicit, so reordering the file renumbers the enum. Persist the **name**, never the integer.
- **Not a save participant.** No `[Serializable]`; it is a shared constant table.

## Cross-Version Notes

The v1.4.5 file is 35 lines declaring **28 members** (`Invalid` plus 27 bones) on an `sbyte`. The identically named file in `bannerlord-1.3.0` and `bannerlord-1.3.15` under the same `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/` layout keeps the same declaration order, and `bannerlord-1.5.3` retains the shape. Because the values are implicit, **the ordering is the entire cross-version contract**: inserting a bone in the middle renumbers every later member, which is why bone names and not bone integers are what survive between versions — and why `MBActionSet.GetBoneIndexWithId(string actionSetId, string boneId)` exists at all.

## Dependencies

- Resolution entry point: `MBActionSet.GetBoneIndexWithId(string, string)` (`MBActionSet.cs:80`), which returns the `sbyte` this enum widens, documented on [`IMBActionSet`](../../mission/IMBActionSet).
- The bridge members that consume the same `sbyte` width: [`IMBAgent`](../../mission/IMBAgent) (`GetBoneEntitialFrame`, `IMBAgent.cs:633`) and the `out sbyte boneIndex` ray-cast parameters on [`IMBMission`](../../mission/IMBMission) (`IMBMission.cs:88`, `:91`) and [`IMBAgentVisuals`](../../mission/IMBAgentVisuals) (`GetRealBoneIndex(HumanBone)`, `IMBAgentVisuals.cs:180`).
- The bone-frame read this index feeds: `MBAgentVisuals.GetBoneEntitialFrame(UIntPtr, sbyte, bool, ref MatrixFrame)` (`IMBAgentVisuals.cs:168`).
- The agent whose skeleton these bones belong to: [`Agent`](../../mission/Agent), and the visuals that carry the skeleton: [`MBAgentVisuals`](../../mission-ext/MBAgentVisuals).
- Assembly: `TaleWorlds.Core`, the lowest-level public infrastructure layer.
- Bucket index: [core-extra API](../)