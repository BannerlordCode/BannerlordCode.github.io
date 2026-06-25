---
title: "ArmyDispersionReasonEnumResolver"
description: "Auto-generated class reference for ArmyDispersionReasonEnumResolver."
---
# ArmyDispersionReasonEnumResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class ArmyDispersionReasonEnumResolver : IEnumResolver`
**Base:** `IEnumResolver`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/ArmyDispersionReasonEnumResolver.cs`

## Overview

`ArmyDispersionReasonEnumResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### ResolveObject
`public string ResolveObject(string originalObject)`

**Purpose:** Executes the ResolveObject logic.

```csharp
// Obtain an instance of ArmyDispersionReasonEnumResolver from the subsystem API first
ArmyDispersionReasonEnumResolver armyDispersionReasonEnumResolver = ...;
var result = armyDispersionReasonEnumResolver.ResolveObject("example");
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
ArmyDispersionReasonEnumResolver armyDispersionReasonEnumResolver = ...;
armyDispersionReasonEnumResolver.ResolveObject("example");
```

## See Also

- [Area Index](../)