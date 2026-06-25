---
title: "SpriteData"
description: "Auto-generated class reference for SpriteData."
---
# SpriteData

**Namespace:** TaleWorlds.TwoDimension
**Module:** TaleWorlds.TwoDimension
**Type:** `public class SpriteData`
**Base:** none
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

## Overview

`SpriteData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `SpriteData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `SpriteParts` | `public Dictionary<string, SpritePart> SpriteParts { get; }` |
| `Sprites` | `public Dictionary<string, Sprite> Sprites { get; }` |
| `SpriteCategories` | `public Dictionary<string, SpriteCategory> SpriteCategories { get; }` |
| `Name` | `public string Name { get; }` |

## Key Methods

### GetSprite
`public Sprite GetSprite(string name)`

**Purpose:** **Purpose:** Reads and returns the sprite value held by the this instance.

```csharp
// Obtain an instance of SpriteData from the subsystem API first
SpriteData spriteData = ...;
var result = spriteData.GetSprite("example");
```

### SpriteExists
`public bool SpriteExists(string spriteName)`

**Purpose:** **Purpose:** Executes the SpriteExists logic.

```csharp
// Obtain an instance of SpriteData from the subsystem API first
SpriteData spriteData = ...;
var result = spriteData.SpriteExists("example");
```

### Load
`public void Load(ResourceDepot resourceDepot)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Obtain an instance of SpriteData from the subsystem API first
SpriteData spriteData = ...;
spriteData.Load(resourceDepot);
```

### Reload
`public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)`

**Purpose:** **Purpose:** Executes the Reload logic.

```csharp
// Obtain an instance of SpriteData from the subsystem API first
SpriteData spriteData = ...;
spriteData.Reload(resourceDepot, resourceContext);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
SpriteData entry = ...;
```

## See Also

- [Area Index](../)