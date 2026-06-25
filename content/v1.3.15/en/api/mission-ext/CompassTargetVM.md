---
title: "CompassTargetVM"
description: "Auto-generated class reference for CompassTargetVM."
---
# CompassTargetVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CompassTargetVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.MountAndBlade.ViewModelCollection/HUD/Compass/CompassTargetVM.cs`

## Overview

`CompassTargetVM` lives in `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.ViewModelCollection.HUD.Compass` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Banner` | `public BannerImageIdentifierVM Banner { get; set; }` |
| `IsFlag` | `public bool IsFlag { get; set; }` |
| `Distance` | `public int Distance { get; set; }` |
| `Color2` | `public string Color2 { get; set; }` |
| `Color` | `public string Color { get; set; }` |
| `IconType` | `public string IconType { get; set; }` |
| `IconSpriteType` | `public string IconSpriteType { get; set; }` |
| `LetterCode` | `public string LetterCode { get; set; }` |
| `FullPosition` | `public float FullPosition { get; set; }` |
| `Position` | `public float Position { get; set; }` |
| `IsAttacker` | `public bool IsAttacker { get; set; }` |
| `IsEnemy` | `public bool IsEnemy { get; set; }` |

## Key Methods

### RefreshColor
`public void RefreshColor(uint color, uint color2)`

**Purpose:** **Purpose:** Keeps the display or cache of color in sync with the underlying state.

```csharp
// Obtain an instance of CompassTargetVM from the subsystem API first
CompassTargetVM compassTargetVM = ...;
compassTargetVM.RefreshColor(0, 0);
```

### Refresh
`public virtual void Refresh(float circleX, float x, float distance)`

**Purpose:** **Purpose:** Refreshes the this instance's display or cache to match the underlying state.

```csharp
// Obtain an instance of CompassTargetVM from the subsystem API first
CompassTargetVM compassTargetVM = ...;
compassTargetVM.Refresh(0, 0, 0);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CompassTargetVM compassTargetVM = ...;
compassTargetVM.RefreshColor(0, 0);
```

## See Also

- [Area Index](../)