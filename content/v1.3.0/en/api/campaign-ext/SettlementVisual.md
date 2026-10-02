---
title: "SettlementVisual"
description: "Map-scene object for a settlement: strategic GameEntity, hover, click, encyclopedia, siege-engine frames and banner placement."
---

# SettlementVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class SettlementVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>` (→ `MapEntityVisual`)
**File:** `SandBox.View/Map/Visuals/SettlementVisual.cs`

## Overview

`SettlementVisual` is the **map-scene** half of a [Settlement](../../campaign/Settlement). The campaign object owns the data (owner, garrison, walls, prosperity); the visual owns the rendered `GameEntity`, the hover and click behaviour, and the geometry anchors the siege and banner systems need.

It sits in a two-level base chain:

```
MapEntityVisual                 (abstract, non-generic)
 └─ MapEntityVisual<T>          (public T MapEntity)
      └─ SettlementVisual       (MapEntity is a PartyBase — the settlement's garrison party)
```

The generic parameter is why a settlement visual is anchored to a **garrison** `PartyBase`, not to the `Settlement` itself. `Settlement.Party` is exactly that garrison, and it is the object whose roster drives the settlement's visual scale and colour.

`SettlementVisual` also carries the pre-computed siege geometry (`GetAttackerTowerSiegeEngineFrames`, `GetBreachableWallFrames`, ...) that the siege scene places engines against.

## Mental Model

```
Settlement (campaign data)
 └─ Party (PartyBase, IsSettlement)  ──► MapEntityVisual<PartyBase>.MapEntity
        │
SettlementVisual
 ├─ StrategicEntity : GameEntity        the rendered scene object
 ├─ OnHover / OnMapClick / OnOpenEncyclopedia
 ├─ IsEnemyOf / IsAllyOf (IFaction)     nameplate colouring
 ├─ IsVisibleOrFadingOut()
 └─ Siege frames: towers, battering ram, ranged engines, breachable walls
```

Typical call order:

```
MBSubModuleBase.OnCampaignStart
    campaign data exists; no visual yet
Map screen activation (MapScreen creates MapScene)
    new SettlementVisual(settlement.Party)
    StrategicEntity built from the settlement mesh
Each frame
    GetVisualPosition() / IsVisibleOrFadingOut() drive placement and culling
User input
    OnHover() → OnMapClick(followModifierUsed) → OnOpenEncyclopedia()
Teardown
    ReleaseResources()
```

Traps that bite in practice:

- **Visuals only exist while the map screen does.** `MapEntityVisual.MapScreen` returns `MapScreen.Instance`, which is null off the campaign map. Every member that touches `MapScreen` or `StrategicEntity` is map-screen-only.
- **The ctor takes a `PartyBase`, not a `Settlement`.** `new SettlementVisual(settlement.Party)` is the correct call. Passing a mobile party's `PartyBase` compiles and produces a nonsense settlement.
- **`ReleaseResources()` frees the `GameEntity`.** Calling it and then reading `StrategicEntity` leaves you with a destroyed scene object and a native crash rather than a managed exception.
- **`IsEnemyOf` / `IsAllyOf` drive colours, not logic.** They are cheap visual queries against `MapEntity.MapFaction`; do not use them as a substitute for `FactionManager.IsAtWarAgainstFaction`.
- **`AttachedTo` is always null.** Settlements do not attach to anything, unlike [MobilePartyVisual](../MobilePartyVisual), whose attached parties return the host visual. Null-check it before treating it as meaningful.

## Dependencies

| Direction | Type | Relationship |
|-----------|------|--------------|
| Base | `MapEntityVisual<PartyBase>` → `MapEntityVisual` | `MapEntity` is the garrison `PartyBase` |
| Campaign | [Settlement](../../campaign/Settlement), [PartyBase](../../campaign/PartyBase) | The data this visual renders |
| Politics | `IFaction`, [FactionManager](../../campaign/FactionManager) | `IsEnemyOf` / `IsAllyOf` |
| Engine | `GameEntity`, `MatrixFrame`, `Vec3` | Scene objects and anchors |
| Sibling | [MobilePartyVisual](../MobilePartyVisual) | The other map entity visual |
| Screens | `MapScreen` (namespace `SandBox.View.Map`), `MapScene` | Lifecycle owner; null off the map. Visuals are reachable through `MapScreen.VisualsOfEntities` |

## Key members

### Anchor

#### `public SettlementVisual(PartyBase entity) : base(entity)`

The only constructor. Pass `settlement.Party`. The base stores it as `MapEntity`.

#### `public override CampaignVec2 InteractionPositionForPlayer`

Where the "interact here" affordance sits — usually offset from the settlement centre so it does not overlap the icon.

#### `public override MapEntityVisual AttachedTo`

Always `null` for settlements. Overridden to satisfy the base contract.

### Scene object

#### `public GameEntity StrategicEntity { get; private set; }`

The rendered settlement. Valid only between map-screen activation and `ReleaseResources()`.

#### `public override Vec3 GetVisualPosition()`

World-space position used for placement and for nameplate placement.

#### `public override bool IsVisibleOrFadingOut()`

Culling predicate. `false` lets the scene skip the entity entirely.

#### `public void ReleaseResources()`

Frees the scene objects. After this, `StrategicEntity` is invalid.

### Interaction

#### `public override void OnHover()` / `public override void OnMapClick(bool followModifierUsed)` / `public override void OnOpenEncyclopedia()` / `public override void OnTrackAction()`

Input callbacks from the map screen. `followModifierUsed` distinguishes a plain click from a tracked / followed click.

### Politics

#### `public override bool IsEnemyOf(IFaction faction)` / `public override bool IsAllyOf(IFaction faction)`

Nameplate and border colouring. Derived from the garrison party's faction.

### Siege geometry

#### `public MatrixFrame[] GetAttackerTowerSiegeEngineFrames()` / `GetAttackerBatteringRamSiegeEngineFrames()` / `GetAttackerRangedSiegeEngineFrames()` / `GetDefenderRangedSiegeEngineFrames()` / `public MatrixFrame[] GetBreachableWallFrames()`

Pre-placed world anchors for the siege scene. Returned arrays may be empty for settlements without the matching structure (a village has no walls, a town has no towers).

#### `public Vec3 GetBannerPositionForParty(MobileParty mobileParty)`

Where an approaching party's banner is placed relative to the settlement. Used by the map scene for party markers near a settlement.

## Real examples

### Example 1: find the visual for a settlement and read its scene object

```csharp
using System.Linq;
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Library;

public static Vec3? SettlementScenePosition(Settlement settlement)
{
    if (settlement?.Party == null)
    {
        return null;
    }

    // Visual lifetime is bounded by the map screen; never cache one across screens.
    if (MapScreen.Instance == null)
    {
        return null;
    }

    SettlementVisual visual = MapScreen.VisualsOfEntities.Values
        .OfType<SettlementVisual>()
        .FirstOrDefault(v => ReferenceEquals(v.MapEntity, settlement.Party));

    return visual?.GetVisualPosition();
}
```

### Example 2: colour a settlement nameplate by diplomacy

```csharp
using SandBox.View.Map.Visuals;
using TaleWorlds.Core;
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Settlements;

public static string SettlementRelationToPlayer(Settlement settlement)
{
    if (settlement?.Party == null || Campaign.Current == null)
    {
        return "unknown";
    }

    IFaction playerFaction = Campaign.Current.MainParty?.ActualClan;
    if (playerFaction == null)
    {
        return "no player faction";
    }

    IFaction owner = settlement.MapFaction;
    if (FactionManager.IsAtWarAgainstFaction(playerFaction, owner))
    {
        return "enemy";
    }

    return owner == playerFaction ? "friendly" : "neutral";
}
```

### Example 3: ask whether the siege scene has breach points

```csharp
using SandBox.View.Map;
using SandBox.View.Map.Visuals;
using TaleWorlds.Library;
using TaleWorlds.CampaignSystem.Settlements;

public static int BreachPointCount(Settlement settlement)
{
    if (settlement == null || !settlement.IsFortification || MapScreen.Instance == null)
    {
        return 0;
    }

    SettlementVisual visual = null;
    foreach (MapEntityVisual candidate in MapScreen.VisualsOfEntities.Values)
    {
        if (candidate is SettlementVisual settlementVisual &&
            ReferenceEquals(settlementVisual.MapEntity, settlement.Party))
        {
            visual = settlementVisual;
            break;
        }
    }

    MatrixFrame[] frames = visual?.GetBreachableWallFrames();
    return frames?.Length ?? 0;
}
```

### Example 4: release a visual explicitly when replacing it

```csharp
using SandBox.View.Map.Visuals;

public static void RetireVisual(SettlementVisual visual)
{
    if (visual == null)
    {
        return;
    }

    // Free the GameEntity while the map screen is still alive; after this,
    // StrategicEntity must not be touched again.
    visual.ReleaseResources();
}
```

## Risks and crash boundaries

1. **`MapScreen.Instance` is null off the campaign map.** Every member that reaches into the scene assumes it exists. Guard before touching `StrategicEntity`, `MapScreen` or the siege frames from a menu, mission or loading screen.
2. **Wrong ctor argument type at compile time.** The parameter is `PartyBase`, so a mobile party's `PartyBase` compiles. Pass `settlement.Party` and check `IsSettlement` when debugging.
3. **`ReleaseResources()` invalidates `StrategicEntity`.** Reading the property afterwards reaches a freed native object. Never hold a visual across a map-screen teardown.
4. **Scene-lifetime, not campaign-lifetime.** Visuals are created and destroyed with the map screen, not with the campaign. A visual captured in a static field or a mod singleton is a dangling reference on the next screen change.
5. **Empty siege frame arrays.** Villages and towns lack walls and towers; the frame getters return empty arrays rather than null. Guard with `?.Length ?? 0`, not with null checks alone.
6. **`MapEntityVisuals` enumeration cost.** Filtering the visual list with LINQ per frame allocates. Cache the list per map-screen activation and refresh on settlement creation.
7. **Cross-domain dependency.** This class lives in `SandBox.View`, a view module. Campaign logic must not depend on it, or mission/loading contexts will need the view assembly loaded.
8. **Player data leakage.** `MapEntity` is the garrison `PartyBase`; reading its roster for a settlement the player has not inspected bypasses the fog-of-war model.

## Cross-version notes

- The base chain (`MapEntityVisual` → `MapEntityVisual<T>` → `SettlementVisual`), the ctor shape and the siege-frame getters are unchanged in 1.3.x and 1.4.x.
- Later builds add naval port anchors and more siege geometry. Because consumers enumerate arrays defensively, the additions are source-compatible; guard for empty rather than assuming a fixed length.

## See Also

- [Settlement](../../campaign/Settlement) — the campaign data this visual renders
- [PartyBase](../../campaign/PartyBase) — the garrison roster behind `MapEntity`
- [FactionManager](../../campaign/FactionManager) — the real diplomacy query
- [MobilePartyVisual](../MobilePartyVisual) — the sibling map entity visual
- [Campaign](../../campaign/Campaign) — where the map scene belongs
- [SDK overview](../../../architecture/sdk-overview) — module layout, view vs. campaign