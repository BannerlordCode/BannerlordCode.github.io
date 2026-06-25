---
title: "HorseComponent"
description: "Auto-generated class reference for HorseComponent."
---
# HorseComponent

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class HorseComponent : ItemComponent`
**Base:** `ItemComponent`
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core/HorseComponent.cs`

## Overview

`HorseComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `HorseComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public string Name { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `Maneuver` | `public int Maneuver { get; }` |
| `ChargeDamage` | `public int ChargeDamage { get; }` |
| `Speed` | `public int Speed { get; }` |
| `BodyLength` | `public int BodyLength { get; }` |
| `HitPointBonus` | `public int HitPointBonus { get; }` |
| `IsRideable` | `public bool IsRideable { get; }` |
| `IsPackAnimal` | `public bool IsPackAnimal { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsLiveStock` | `public bool IsLiveStock { get; }` |
| `MeatCount` | `public int MeatCount { get; }` |
| `HideCount` | `public int HideCount { get; }` |
| `SkeletonScale` | `public SkeletonScale SkeletonScale { get; }` |

## Key Methods

### MaterialProperty
`public struct MaterialProperty(string name)`

**Purpose:** Executes the MaterialProperty logic.

```csharp
// Obtain an instance of HorseComponent from the subsystem API first
HorseComponent horseComponent = ...;
var result = horseComponent.MaterialProperty("example");
```

### GetCopy
`public override ItemComponent GetCopy()`

**Purpose:** Reads and returns the copy value held by the this instance.

```csharp
// Obtain an instance of HorseComponent from the subsystem API first
HorseComponent horseComponent = ...;
var result = horseComponent.GetCopy();
```

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of HorseComponent from the subsystem API first
HorseComponent horseComponent = ...;
horseComponent.Deserialize(objectManager, node);
```

## Usage Example

```csharp
var component = agent.GetComponent<HorseComponent>();
```

## See Also

- [Area Index](../)