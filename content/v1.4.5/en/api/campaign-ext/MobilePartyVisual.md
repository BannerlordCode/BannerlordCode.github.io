---
title: "MobilePartyVisual"
description: "Auto-generated class reference for MobilePartyVisual."
---
# MobilePartyVisual

**Namespace:** SandBox.View.Map.Visuals
**Module:** SandBox.View
**Type:** `public class MobilePartyVisual : MapEntityVisual<PartyBase>`
**Base:** `MapEntityVisual<PartyBase>`
**File:** `Modules.SandBox/SandBox.View/SandBox.View.Map.Visuals/MobilePartyVisual.cs`

## Overview

`MobilePartyVisual` lives in `SandBox.View.Map.Visuals` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `SandBox.View.Map.Visuals` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `AttachedTo` | `public override MapEntityVisual AttachedTo { get; }` |
| `StrategicEntity` | `public GameEntity StrategicEntity { get; }` |
| `HumanAgentVisuals` | `public AgentVisuals HumanAgentVisuals { get; }` |
| `MountAgentVisuals` | `public AgentVisuals MountAgentVisuals { get; }` |
| `CaravanMountAgentVisuals` | `public AgentVisuals CaravanMountAgentVisuals { get; }` |

## Key Methods

### IsEnemyOf
`public override bool IsEnemyOf(IFaction faction)`

**Purpose:** Determines whether the this instance is in the enemy of state or condition.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsEnemyOf(faction);
```

### IsInSameFaction
`public override bool IsInSameFaction(IFaction faction)`

**Purpose:** Determines whether the this instance is in the in same faction state or condition.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsInSameFaction(faction);
```

### IsAllyOf
`public override bool IsAllyOf(IFaction faction)`

**Purpose:** Determines whether the this instance is in the ally of state or condition.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsAllyOf(faction);
```

### OnTrackAction
`public override void OnTrackAction()`

**Purpose:** Invoked when the track action event is raised.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnTrackAction();
```

### OnMapClick
`public override bool OnMapClick(bool followModifierUsed)`

**Purpose:** Invoked when the map click event is raised.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.OnMapClick(false);
```

### OnHover
`public override void OnHover()`

**Purpose:** Invoked when the hover event is raised.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnHover();
```

### GetVisualPosition
`public override Vec3 GetVisualPosition()`

**Purpose:** Reads and returns the visual position value held by the this instance.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.GetVisualPosition();
```

### ReleaseResources
`public override void ReleaseResources()`

**Purpose:** Executes the ReleaseResources logic.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.ReleaseResources();
```

### IsVisibleOrFadingOut
`public override bool IsVisibleOrFadingOut()`

**Purpose:** Determines whether the this instance is in the visible or fading out state or condition.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
var result = mobilePartyVisual.IsVisibleOrFadingOut();
```

### OnOpenEncyclopedia
`public override void OnOpenEncyclopedia()`

**Purpose:** Invoked when the open encyclopedia event is raised.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.OnOpenEncyclopedia();
```

### GetBannerOfCharacter
`public static MetaMesh GetBannerOfCharacter(Banner banner, string bannerMeshName)`

**Purpose:** Reads and returns the banner of character value held by the this instance.

```csharp
// Static call; no instance required
MobilePartyVisual.GetBannerOfCharacter(banner, "example");
```

### AddTentEntityForParty
`public void AddTentEntityForParty(GameEntity strategicEntity, PartyBase party, ref bool clearBannerComponentCache)`

**Purpose:** Adds tent entity for party to the current collection or state.

```csharp
// Obtain an instance of MobilePartyVisual from the subsystem API first
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.AddTentEntityForParty(strategicEntity, party, clearBannerComponentCache);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MobilePartyVisual mobilePartyVisual = ...;
mobilePartyVisual.IsEnemyOf(faction);
```

## See Also

- [Area Index](../)