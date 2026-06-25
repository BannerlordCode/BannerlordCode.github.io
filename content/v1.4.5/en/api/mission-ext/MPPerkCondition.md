---
title: "MPPerkCondition"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPPerkCondition`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPPerkCondition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MPPerkCondition`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPPerkCondition.cs`

## Overview

`MPPerkCondition` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Check
`public abstract bool Check(MissionPeer peer)`

**Purpose:** Handles logic related to `check`.

### Check
`public abstract bool Check(Agent agent)`

**Purpose:** Handles logic related to `check`.

### CreateFrom
`public static MPPerkCondition CreateFrom(List<string> gameModes, XmlNode node)`

**Purpose:** Creates a new `from` instance or object.

## Usage Example

```csharp
var implementation = new CustomMPPerkCondition();
```

## See Also

- [Complete Class Catalog](../catalog)