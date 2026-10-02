---
title: "MobilePartyVisual"
description: "Map-scene object for a moving party: strategic GameEntity, agent visuals, banner meshes, bearing, attachment and map input handling."
---

# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>` (→ `MapEntityVisual`)
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## Overview

`MobilePartyVisual` is the map-scene half of a [MobileParty](../../campaign/MobileParty). It renders the party icon, the visible leaders and mounts, and any tent or banner entity, and it handles hover, click and encyclopedia input for that party on the campaign map.

Like its sibling [SettlementVisual](../SettlementVisual), it derives from the two-level `MapEntityVisual` chain and is anchored to a `PartyBase`:

```
MapEntityVisual
 └─ MapEntityVisual<T>
      └─ MobilePartyVisual     (T = PartyBase — the party's roster object)
```

The differences from a settlement visual are the three `AgentVisuals` slots and the attachment tree:

| Member | What it renders |
|--------|-----------------|
| `HumanAgentVisuals` | The visible human agent (leader or a notable) |
| `MountAgentVisuals` | That agent's mount |
| `CaravanMountVisuals` (`CaravanMountAgentVisuals`) | Pack animals for caravans |

Attachment is expressed visually: a party attached to a host returns the **host's** visual from `AttachedTo`, so nested parties are drawn as part of one moving blob instead of as separate icons.

## Mental Model

```
MobileParty (campaign data)
 └─ Party (PartyBase, IsMobile)  ──► MapEntityVisual<PartyBase>.MapEntity
        │
MobilePartyVisual
 ├─ StrategicEntity : GameEntity
 ├─ HumanAgentVisuals / MountAgentVisuals / CaravanMountAgentVisuals
 ├─ AttachedTo ──► the host party's visual   (or null for a top-level party)
 ├─ IsMainEntity ──► this is the player's party
 ├─ BearingRotation ──► heading for the icon
 └─ OnHover / OnMapClick / OnOpenEncyclopedia / OnTrackAction
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    campaign data exists; no visual yet
Map screen activation (MapScreen + MapScene build VisualsOfEntities)
    new MobilePartyVisual(party.Party)
    StrategicEntity and agent visuals built
Each frame
    GetVisualPosition() / IsVisibleOrFadingOut() / BearingRotation
User input
    OnHover() → OnMapClick(followModifierUsed) → OnOpenEncyclopedia()
Party changes
    party.Party.SetVisualAsDirty()  →  the scene rebuilds the icon
Teardown
    ReleaseResources()
```

Traps that bite in practice:

- **Visuals only exist while the map screen does.** `MapScreen.Instance` is null in menus and missions, and `MapScreen.VisualsOfEntities` is empty. Every member reaching into the scene is map-screen-only.
- **The ctor takes a `PartyBase`, not a `MobileParty`.** `new MobilePartyVisual(party.Party)` is correct. Check `IsMobile` if the source of the `PartyBase` is dynamic — a settlement garrison compiles fine and renders nonsense.
- **`ReleaseResources()` frees `StrategicEntity` and the agent visuals.** Reading them afterwards is a native crash, not a managed exception.
- **`AttachedTo` walks up, not down.** It returns the *host's* visual. Use `MobileParty.AttachedParties` when you want the children, and guard against null at the top of the tree.
- **`IsMainEntity` is not `IsMainParty` on the data side.** It is the visual's own flag, set from whether this party is the player's. Use `party.IsMainParty` for logic and the visual flag only for rendering.
- **`GetBannerOfCharacter` is static and caches meshes.** It returns a `MetaMesh` from a cache keyed by banner; do not dispose it.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Base | `MapEntityVisual<PartyBase>` → `MapEntityVisual` | `MapEntity` is the party's roster object |
| Campaign | [MobileParty](../../campaign/MobileParty), [PartyBase](../../campaign/PartyBase) | The data this visual renders |
| Politics | `IFaction`, [FactionManager](../../campaign/FactionManager) | `IsEnemyOf` / `IsAllyOf` |
| Characters | [Hero](../../campaign/Hero) | Agent visuals and banners |
| Engine | `GameEntity`, `MetaMesh`, `Vec3` | Scene objects and cached meshes |
| Sibling | [SettlementVisual](../SettlementVisual) | The other map entity visual |
| Screens | `MapScreen` (namespace `SandBox.View.Map`) | Lifecycle owner; visuals via `MapScreen.VisualsOfEntities` |

## Key members

### Anchor

#### `public MobilePartyVisual(PartyBase partyBase) : base(partyBase)`

The only constructor. Pass `mobileParty.Party`.

#### `public override CampaignVec2 InteractionPositionForPlayer`

Where the interaction affordance sits relative to the party icon.

#### `public override bool IsMobileEntity`

Overrides the base to `true`. Movement semantics in the scene use this.

#### `public override bool IsMainEntity`

`true` when this visual represents the player's party.

### Scene objects

#### `public GameEntity StrategicEntity { get; private set; }`

The rendered icon. Valid only between map-screen activation and `ReleaseResources()`.

#### `public AgentVisuals HumanAgentVisuals { get; private set; }` / `MountAgentVisuals` / `CaravanMountAgentVisuals`

Agent visuals for the visible leader, their mount, and caravan pack animals. Null when the party has nothing to show at that LOD.

#### `public override Vec3 GetVisualPosition()` / `public override bool IsVisibleOrFadingOut()` / `public override float BearingRotation`

Placement, culling and heading.

### Attachment

#### `public override MapEntityVisual AttachedTo`

The host party's visual, or `null` for a top-level party. Attached parties are drawn as part of the host, so their own icon is not drawn.

### Interaction and politics

#### `public override void OnHover()` / `public override bool OnMapClick(bool followModifierUsed)` / `public override void OnOpenEncyclopedia()` / `public override void OnTrackAction()`

Map-screen input callbacks.

#### `public override bool IsEnemyOf(IFaction faction)` / `IsAllyOf(IFaction faction)`

Nameplate and icon colouring. Cheap visual queries, not substitutes for `FactionManager`.

### Banners and tents

#### `public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

Fetches (and caches) a banner mesh. The returned mesh is shared — do not dispose it, and do not assume a fresh instance per call.

#### `public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

Adds a camp/tent entity for a party that has stopped. `ref bool clearBannerComponentCache` is an in-out flag the scene uses to decide whether banner components need rebuilding.

### Teardown

#### `public override void ReleaseResources()`

Frees the scene objects. After this, `StrategicEntity` and the agent visuals are invalid.

## Real examples

### Example 1: find the visual for a party

```csharp
using System.Linq;
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.Library;

public static Vec3? PartyScenePosition(MobileParty party)
{
    if (party?.Party == null || MapScreen.Instance == null)
    {
        return null;
    }

    // Visual lifetime is bounded by the map screen; never cache one across screens.
    MobilePartyVisual visual = MapScreen.VisualsOfEntities.Values
        .OfType<MobilePartyVisual>()
        .FirstOrDefault(v => ReferenceEquals(v.MapEntity, party.Party));

    return visual?.GetVisualPosition();
}
```

### Example 2: is this the icon the player controls?

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;

public static bool IsPlayerIcon(MobileParty party)
{
    if (party == null || MapScreen.Instance == null)
    {
        return false;
    }

    // Data-side test for logic...
    if (party.IsMainParty)
    {
        return true;
    }

    // ...visual-side test for rendering decisions.
    foreach (MapEntityVisual visual in MapScreen.VisualsOfEntities.Values)
    {
        if (visual is MobilePartyVisual partyVisual &&
            ReferenceEquals(partyVisual.MapEntity, party.Party))
        {
            return partyVisual.IsMainEntity;
        }
    }

    return false;
}
```

### Example 3: walk the attachment tree from the top

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Party;

public static int TopLevelPartyCount()
{
    if (MapScreen.Instance == null)
    {
        return 0;
    }

    int count = 0;
    foreach (MapEntityVisual visual in MapScreen.VisualsOfEntities.Values)
    {
        if (visual is MobilePartyVisual partyVisual &&
            ReferenceEquals(partyVisual.MapEntity?.MobileParty?.Party, partyVisual.MapEntity) &&
            partyVisual.AttachedTo == null)
        {
            count++;
        }
    }

    return count;
}
```

### Example 4: release a visual before the map screen goes away

```csharp
using SandBox.View.Map.Visuals;

public static void RetireVisual(MobilePartyVisual visual)
{
    if (visual == null)
    {
        return;
    }

    // Free the GameEntity and agent visuals while the map screen is still alive.
    visual.ReleaseResources();
}
```

## Risks and crash boundaries

1. **Map-screen-only lifetime.** `MapScreen.Instance` is null in menus and missions, and `VisualsOfEntities` is empty. Guard before touching `StrategicEntity` or the agent visuals.
2. **Freed native objects.** `ReleaseResources()` invalidates `StrategicEntity`, `HumanAgentVisuals`, `MountAgentVisuals` and `CaravanMountAgentVisuals`. Reading them afterwards crashes natively, with no managed exception to catch.
3. **Static capture of a visual.** Holding a `MobilePartyVisual` in a mod singleton or static field leaves a dangling reference after the next map-screen transition. Look it up on demand.
4. **Wrong host type compiles.** The ctor takes a `PartyBase`; a settlement garrison compiles and produces an icon with no agents. Check `MapEntity.IsMobile`.
5. **Shared cached banner meshes.** `GetBannerOfCharacter` returns a shared, cached `MetaMesh`. Disposing it breaks every other banner, and mutating it corrupts the cache for everyone.
6. **`ref bool` in-out parameter.** `AddTentEntityForParty`'s `clearBannerComponentCache` is a shared-state contract with the scene. Passing a local without honouring its post-call value desynchronises banner component caching.
7. **Cross-domain dependency.** This class is in `SandBox.View`, a view module. Campaign or mission logic must not reference it, or those contexts will need the view assembly loaded.
8. **Per-frame LINQ.** `MapScreen.VisualsOfEntities.Values.OfType<MobilePartyVisual>()` allocates an enumerator chain per call. Cache the filtered list per map-screen activation.
9. **Player data leakage.** `MapEntity` is the party's `PartyBase`; reading its roster for a party the player has not spotted bypasses the vision model.

## Cross-version notes

- The base chain, ctor shape, the three `AgentVisuals` slots and `GetBannerOfCharacter` are unchanged in 1.3.x and 1.4.x.
- Naval parties gain extra visual handling in later builds. Because the agent-visual properties are nullable in practice, guard for null rather than assuming they are populated.

## See Also

- [MobileParty](../../campaign/MobileParty) — the campaign data this visual renders
- [PartyBase](../../campaign/PartyBase) — the roster object behind `MapEntity`
- [Hero](../../campaign/Hero) — visible leaders and banners
- [SettlementVisual](../SettlementVisual) — the sibling map entity visual
- [Campaign](../../campaign/Campaign) — where the map scene belongs
- [SDK overview](../../../architecture/sdk-overview) — module layout, view vs. campaign