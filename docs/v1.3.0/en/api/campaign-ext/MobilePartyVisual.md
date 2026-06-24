<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MobilePartyVisual`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `SandBox.View/Map/Visuals/MobilePartyVisual.cs`

## Overview

`MobilePartyVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BearingRotation` | `public override float BearingRotation { get; }` |
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `InteractionPositionForPlayer` | `public override CampaignVec2 InteractionPositionForPlayer { get; }` |
| `IsMobileEntity` | `public override bool IsMobileEntity { get; }` |
| `IsMainEntity` | `public override bool IsMainEntity { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals { get; }` |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals { get; }` |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals { get; }` |

## Key Methods

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**Purpose:** Handles logic related to `is enemy of`.

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**Purpose:** Handles logic related to `is ally of`.

### OnTrackAction
`public override void OnTrackAction()`

**Purpose:** Called when the `track action` event is raised.

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Called when the `map click` event is raised.

### OnHover
`public override void OnHover()`

**Purpose:** Called when the `hover` event is raised.

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Gets the current value of `visual position`.

### ReleaseResources
`public override void ReleaseResources()`

**Purpose:** Handles logic related to `release resources`.

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Handles logic related to `is visible or fading out`.

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Called when the `open encyclopedia` event is raised.

### GetBannerOfCharacter
`public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

**Purpose:** Gets the current value of `banner of character`.

### AddTentEntityForParty
`public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

**Purpose:** Adds `tent entity for party` to the current collection or state.

## Usage Example

```csharp
var value = new MobilePartyVisual();
value.IsEnemyOf(faction);
```

## See Also

- [Complete Class Catalog](../catalog)