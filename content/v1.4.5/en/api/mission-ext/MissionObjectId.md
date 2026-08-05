---
title: "MissionObjectId"
description: "Value identity for Mission scene and runtime objects, including the runtime-origin bit used in lookup, equality, and network removal."
---
# MissionObjectId

**Namespace:** `TaleWorlds.MountAndBlade`  
**Module:** `TaleWorlds.MountAndBlade`  
**Type:** `public struct MissionObjectId`  
**Base:** none  
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MissionObjectId.cs`

## One-line responsibility

This value identifies a Mission object by both its numeric ID and whether that ID came from the runtime-object pool.

## Mental model

Treat `MissionObjectId` as a Mission-scoped identity tuple, not as a globally unique integer. `MissionObject.OnPreInit` creates a scene ID before loading finishes and a runtime ID after loading finishes; it stores both the number and the `CreatedAtRuntime` flag, then registers the object with `Mission`. `Mission.OnMissionObjectRemoved` uses the same value to remove the object and, for runtime objects, to return the ID and broadcast removal.

The second field is part of identity. A scene object with `Id == 12` is different from a runtime object with `Id == 12`, and the operators and `Equals` compare both fields. `Invalid` is the sentinel `(-1, false)`. Keep the value for the current Mission or network message lifetime; do not use it as a save-game key or assume it remains valid after the object is removed.

## Dependencies

[`MissionObject`](../MissionObject) owns this value and obtains it from [`Mission`](../../mission/Mission) during `OnPreInit`. [`UsableMissionObject`](../UsableMissionObject) and [`SynchedMissionObject`](../SynchedMissionObject) consume it as the local identity for interaction and synchronized messages; removal returns runtime IDs through the owning Mission rather than through this struct.

## Members and semantics

- `Id` is the numeric portion. It is assigned by Mission allocation paths and should be read from [`MissionObject.Id`](../MissionObject), not rewritten by a mod.
- `CreatedAtRuntime` records whether the ID was allocated from the runtime pool. `MissionObject.CreatedAtRuntime` mirrors this flag.
- `Invalid` is `new MissionObjectId(-1)`. Use it to clear an optional object reference or express “no Mission object”, not as a real lookup target.
- `==`, `!=`, and `Equals(object)` compare both `Id` and `CreatedAtRuntime`.
- `GetHashCode()` folds the runtime distinction into the hash by setting bit `0x40000000` before hashing. A `Dictionary<MissionObjectId, MissionObject>` therefore preserves the same identity distinction as equality.
- `ToString()` produces the readable form `id - createdAtRuntime`, for example `12 - True`.

## Real acquisition example

Read the identity from objects owned by the current Mission. The object list is the source of truth; constructing a value from a number does not register anything.

```csharp
using TaleWorlds.MountAndBlade;

public static MissionObjectId FindFirstRuntimeObjectId()
{
    Mission mission = Mission.Current;
    if (mission != null)
    {
        foreach (MissionObject missionObject in mission.MissionObjects)
        {
            MissionObjectId id = missionObject.Id;
            if (id != MissionObjectId.Invalid && id.CreatedAtRuntime)
            {
                return id;
            }
        }
    }

    return MissionObjectId.Invalid;
}
```

Use the complete value as a local lookup key when correlating Mission objects during one Mission:

```csharp
using System.Collections.Generic;
using TaleWorlds.MountAndBlade;

public static Dictionary<MissionObjectId, MissionObject> IndexMissionObjects(Mission mission)
{
    Dictionary<MissionObjectId, MissionObject> result = new();
    foreach (MissionObject missionObject in mission.MissionObjects)
    {
        result[missionObject.Id] = missionObject;
    }

    return result;
}
```

## Risks and boundaries

- Comparing only `Id` can merge a scene object and a runtime object that happen to share the number. Always use the struct or both fields.
- Runtime IDs are allocated from a bounded pool and can be returned after removal. They are not stable across Mission instances or suitable as persistent save data.
- `MissionObject.Id` is a registration identity. Mutating it breaks `Mission.MissionObjects` lookup, network messages, and runtime-ID return handling.
- `MissionObjectId.Invalid` does not guarantee that the old object reference is safe to use; clear the object reference separately and check `GameEntity.IsValid` where needed.
- A value copied from a removed object is only historical data. Do not send it later as though the object still exists.

## See also and reciprocal navigation

- ↑ Parent: [Mission-ext module index](../)
- ↔ Owner: [MissionObject](../MissionObject) · [Mission](../../mission/Mission)
- ↔ Runtime interaction: [UsableMissionObject](../UsableMissionObject) · [SynchedMissionObject](../SynchedMissionObject)
- Removal and network context: [MissionBehavior](../../mission/MissionBehavior)
- 中文/English: [MissionObjectId](../../../../zh/api/mission-ext/MissionObjectId)
