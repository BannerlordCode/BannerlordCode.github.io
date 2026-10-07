---
title: "AgentVisualsData"
description: "The mutable builder describing how one agent's visual should look and be built: skeleton, equipment, banner, cloth colours, weapon-slot entities, and render flags."
---

# AgentVisualsData

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class AgentVisualsData`
**Base:** `object` — no base class, no interface
**Source:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs`

## One-line responsibility

It is the configuration record handed to the visual factory: every property on it is a read-only *value* with a matching fluent *setter* of the same name, and the pair is what makes this a builder rather than a plain data holder.

## Mental model

The shape of the class is uniform and worth naming once, because it explains everything else. For each of roughly twenty settings there are exactly two members:

| Kind | Example |
| --- | --- |
| Read-only storage | `public Banner BannerData { get; private set; }` |
| Fluent setter | `public AgentVisualsData Banner(Banner banner)` |

The storage property always carries a `Data` suffix (`SkeletonTypeData`, `ClothColor1Data`, `MountCreationKeyData`) or is a plain public field (`AgentVisuals`, and `ActionCodeData` which keeps the suffix even though it is initialised). The fluent method drops the suffix and takes the value. So `data.Banner(x)` writes `BannerData`. This is the same builder convention as [`AgentBuildData`](../AgentBuildData), and the same hazard comes with it: **the setter returns `this`, so the fluent methods are unchecked, order-insensitive, and chainable — and nothing validates combinations.**

Two constructors, and they set up the object very differently. The parameterless one is not neutral: it sets `ClothColor1Data` and `ClothColor2Data` to `uint.MaxValue` as an explicit "unset" sentinel, `RightWieldedItemIndexData` and `LeftWieldedItemIndexData` to `-1` as "no override", and `ScaleData` to `0f`. Note that `0f` for scale is not neutral — if nothing later sets it, scale zero is what the visual receives. The copy constructor takes an existing `AgentVisualsData` and copies **29 fields explicitly, one assignment at a time**, with no reference sharing beyond the objects themselves. That explicitness is the point: it is a snapshot, not an alias, which is why the copy-then-modify pattern is the safe way to build a variation.

The five weapon-slot members are the awkward part of the surface. `CachedWeaponSlot0Entity` through `CachedWeaponSlot4Entity` are five separate private-set properties rather than a collection, and both `GetCachedWeaponEntity(EquipmentIndex)` and `CachedWeaponEntity(EquipmentIndex, GameEntity)` switch over the index to pick one. The switch maps `WeaponItemBeginSlot`/`Weapon0` → slot 0, `Weapon1` → 1, `Weapon2` → 2, `Weapon3` → 3, and `ExtraWeaponSlot` → 4, defaulting to `null` on read and **silently doing nothing on write**. So `CachedWeaponEntity(EquipmentIndex.Head, entity)` is a no-op with no error — worth knowing before you assume a cached entity was stored.

The last thing to internalise is who owns this object. It is created by the engine during agent creation and consumed by [`AgentVisuals`](../AgentVisuals).Create and `.Refresh`. It is mutable, it is not copied for you, and nothing reads it after the refresh call returns — so handing `Refresh` a data object you keep editing afterwards gives you undefined behaviour rather than a visible bug.

## Key members

| Member | Signature | What it is for |
| --- | --- | --- |
| `AgentVisualsData()` | `public AgentVisualsData()` | Starts an empty record, but not a neutral one: both cloth colours become `uint.MaxValue` (an explicit "unset" sentinel), both wielded-item indexes become `-1`, and `ScaleData` becomes `0f`. The zero scale matters — nothing downstream substitutes a default for it. |
| `AgentVisualsData(AgentVisualsData)` | `public AgentVisualsData(AgentVisualsData agentVisualsData)` | The snapshot constructor. Copies 29 fields by explicit assignment, including all five cached weapon-slot entities and all seven render flags. **This is the safe way to vary an existing visual**: copy, mutate, then hand the copy to `Refresh`. |
| `AgentVisuals` | `public MBAgentVisuals AgentVisuals;` | The only **public field** in the class, and the only one not following the `XxxData` naming rule. A plain field with no setter and no getter. It is the native handle the visual wraps, and the copy constructor copies the reference rather than the contents. |
| `SkeletonType` | `public AgentVisualsData SkeletonType(SkeletonType skeletonType)` | Chooses the body build. Because [`AgentVisuals`](../AgentVisuals).`IsFemale` is derived from this value against hardcoded literals, setting it wrongly changes how the visual is classified — a male skeleton presented as `Female` is exactly the case to avoid. |
| `Equipment` | `public AgentVisualsData Equipment(Equipment equipment)` | The authored equipment template the visual renders. Distinct from the mission-side [`MissionEquipment`](../MissionEquipment); this is the pre-mission shape. |
| `ClothColor1` / `ClothColor2` | `public AgentVisualsData ClothColor1(uint clothColor1)` / `ClothColor2(uint)` | The two clothing tint slots, each a packed `uint`. Their `uint.MaxValue` default is a sentinel meaning "let the randomiser decide", which is what `AgentVisuals.GetRandomClothingColors` operates on. |
| `CachedWeaponEntity` | `public AgentVisualsData CachedWeaponEntity(EquipmentIndex slotIndex, GameEntity cachedWeaponEntity)` | Pre-binds a scene entity to one weapon slot, so the visual can reuse an existing mesh instead of building a new one. **The index switch silently ignores unmapped slots** — passing `EquipmentIndex.Head` stores nothing and reports nothing. |
| `GetCachedWeaponEntity` | `public GameEntity GetCachedWeaponEntity(EquipmentIndex slotIndex)` | The read side of the same switch, defaulting to `null` for any unmapped index. Note `EquipmentIndex.Weapon0` and `WeaponItemBeginSlot` are the same value (`0`) and both map to slot 0. |
| `PrepareImmediately` | `public AgentVisualsData PrepareImmediately(bool prepareImmediately)` | Builds the visual synchronously instead of deferring to the next frame. Costs a frame spike on creation and removes a frame of "agent is not yet drawn" — the right trade for a UI element and usually the wrong one for spawning a formation. |
| `UseScaledWeapons` / `UseTranslucency` / `UseTesselation` / `UseMorphAnims` | four `public AgentVisualsData Use*(bool)` | The render-feature switches. Each is a boolean that changes what the shader and geometry pipeline does, not a quality preference you can flip at runtime — `Refresh` is the only way to change one after creation. |
| `AddColorRandomness` / `Scale` / `Race` | `public AgentVisualsData AddColorRandomness(bool)` / `Scale(float)` / `Race(int)` | Final appearance knobs. `AddColorRandomness` is the switch that makes cloth colours actually jitter rather than sit at their default; `Scale` multiplies the body; `Race` selects the culture variant. |
| `ActionCode` / `Entity` / `HasClippingPlane` / `MountCreationKey` | `public AgentVisualsData ActionCode(in ActionIndexCache)` / `Entity(GameEntity)` / `HasClippingPlane(bool)` / `MountCreationKey(string)` | The four genuinely awkward settings. `ActionCodeData` is initialised inline to `ActionIndexCache.act_none` rather than in a constructor, so a fresh record has a different initial state from a copy of one. `MountCreationKey` is the string that resolves the mount's visual build. |
| `GetCopy` style usage | `new AgentVisualsData(snapshot).ClothColor1(...)` | The idiomatic composition. Copy first, mutate second, pass the result to `Refresh`. Never hand `Refresh` a builder you keep mutating — the visual reads what it needs during the call and nothing re-reads it afterwards. |

## Dead members and traps

Members here look like internal caches but are called constantly — few call sites never means dead.

| `Member` | Declaration | override | Call sites | Verdict | Notes |
|---|---|---:|---:|---|---|
| `EquipmentData` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs:17 | 0 | 37 times (32 lines) | MEASURED | Equipment data accessor. Inventory says 35; measured **37 occurrences across 32 lines** — AgentVisuals.cs:490 carries five of them on one line, the clearest B-7 case in this batch. |
| `UseMorphAnims` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs:169 | 0 | 22 times (22 lines) | MEASURED | Morph-animation toggle; the inventory figure of 22 reproduces exactly. |
| `ActionCode` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs:253 | 0 | 20 times (20 lines) | MEASURED | Action code lookup; the inventory figure of 20 reproduces exactly. |
| `GetCachedWeaponEntity` | bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/AgentVisualsData.cs:199 | 0 | 1 time (1 line) | MEASURED | Cached weapon entity read; its only call site is AgentVisuals.cs:437. |

## Real example

Building a visual's data from scratch, which is the parameterless-constructor path with its sentinels made explicit:

```csharp
public class MyDataBuilder
{
    public AgentVisualsData Build(Monster creature, Scene scene, Equipment equipment)
    {
        return new AgentVisualsData()
            .Monster(creature)
            .Scene(scene)
            .Equipment(equipment)
            .SkeletonType(SkeletonType.Female)
            .ClothColor1(0x304050u)
            .ClothColor2(0x506070u)
            .Scale(1f)
            .PrepareImmediately(true);
    }
}
```

Setting `Scale(1f)` explicitly is deliberate. The default is `0f`, and nothing downstream replaces it, so a record that skips it asks for a body scaled to nothing.

Varying an existing visual the safe way — copy, mutate, hand over:

```csharp
public class MyRestyler
{
    public void Restyle(AgentVisuals visuals)
    {
        AgentVisualsData snapshot = visuals.GetCopyAgentVisualsData();

        AgentVisualsData variation = new AgentVisualsData(snapshot)
            .ClothColor1(0xA0A0A0u)
            .ClothColor2(0x202020u)
            .UseTranslucency(true);

        visuals.Refresh(false, variation);
    }
}
```

Pre-binding weapon-slot entities, with the index mapping made explicit rather than guessed:

```csharp
public class MySlotBinder
{
    public AgentVisualsData Bind(AgentVisualsData data, GameEntity weaponEntity)
    {
        EquipmentIndex slot = EquipmentIndex.Weapon1;
        data.CachedWeaponEntity(slot, weaponEntity);

        GameEntity readBack = data.GetCachedWeaponEntity(slot);
        if (readBack == null)
        {
            Debug.Print("slot was not stored; check the EquipmentIndex value", 0);
        }

        return data;
    }
}
```

The null check is the point: `CachedWeaponEntity` does not report failure, so the only way to know is to read it back.

## Risks and boundaries

1. **The parameterless constructor is not neutral.** Cloth colours default to `uint.MaxValue`, wielded indexes to `-1`, and **`Scale` to `0f`**. Forgetting to set scale produces a zero-scaled body, and nothing substitutes a default.
2. **`CachedWeaponEntity` silently ignores unmapped slots.** The index switch covers only the five weapon slots; anything else stores nothing and returns no error. Always read back with `GetCachedWeaponEntity`.
3. **The builder is mutable and unchecked.** Fluent setters chain freely, validate nothing, and are order-insensitive. Passing this object to `Refresh` and then mutating it gives undefined results.
4. **Setters are public; the `Data` properties are `{ get; private set; }`.** The same read-by-suffix / write-by-fluent-name split as [`AgentBuildData`](../AgentBuildData). There is no `SetBanner`; there is `Banner(banner)`.
5. **Copying is 29 explicit assignments, not a clone.** It happens to be complete today, but a field added later and not added to the copy constructor is silently dropped — the classic hand-written-copy drift bug.
6. **`AgentVisuals` is a public field holding a native handle.** It is copied by reference, and it points at the render object the visual wraps. Do not stash it in campaign state.
7. **`ActionCodeData` is initialised inline**, not in a constructor, so it differs in kind from every other field's initialisation. A record built by `new AgentVisualsData()` starts at `act_none`; one built by copying starts at whatever was copied.
8. **Nothing validates combinations.** Setting a `Monster` and a humanoid `SkeletonType`, or preparing immediately in a scene that is still loading, is accepted silently.
9. **Not saved.** This is a construction-time record consumed by the visual factory and discarded.

## Dependencies

- **Consumer:** [`AgentVisuals`](../AgentVisuals) `Create` and `Refresh` take this type; the view layer reads every `Data` property from it.
- **Factory path:** [`AgentVisualsCreator`](../AgentVisualsCreator) is the `IAgentVisualCreator` implementation that forwards this record to `AgentVisuals.Create`.
- **Native handle:** [`MBAgentVisuals`](../MBAgentVisuals) is the type of the `AgentVisuals` field.
- **Body description:** [`BodyProperties`](../../core-extra/BodyProperties), [`Equipment`](../../core-extra/Equipment), [`Monster`](../../core-extra/Monster), and [`Banner`](../../core-extra/Banner) supply the authored appearance inputs.
- **Scene binding:** [`Scene`](../../engine/Scene), [`GameEntity`](../../engine/GameEntity), and [`EquipmentIndex`](../../core-extra/EquipmentIndex) are what the scene-facing setters take.
- **Playback:** [`ActionIndexCache`](../../mission/ActionIndexCache) is the type behind `ActionCode`.
- **Sibling builder:** [`AgentBuildData`](../AgentBuildData) follows the same fluent-plus-private-setter convention on the spawn side.
- Bucket home: [mission-ext API section](../)