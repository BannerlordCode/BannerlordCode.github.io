---
title: "SiegeStrategy"
description: "Auto-generated class reference for SiegeStrategy."
---
# SiegeStrategy

**Namespace:** TaleWorlds.CampaignSystem.Siege
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class SiegeStrategy : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.Siege/SiegeStrategy.cs`

## Overview

`SiegeStrategy` lives in `TaleWorlds.CampaignSystem.Siege` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Siege` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Description` | `public TextObject Description { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description)`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of SiegeStrategy from the subsystem API first
SiegeStrategy siegeStrategy = ...;
siegeStrategy.Initialize(name, description);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SiegeStrategy siegeStrategy = ...;
siegeStrategy.Initialize(name, description);
```

## See Also

- [Area Index](../)