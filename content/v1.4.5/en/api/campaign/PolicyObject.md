---
title: "PolicyObject"
description: "Auto-generated class reference for PolicyObject."
---
# PolicyObject

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PolicyObject : PropertyObject`
**Base:** `PropertyObject`
**File:** `bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PolicyObject.cs`

## Overview

`PolicyObject` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `SecondaryEffects` | `public TextObject SecondaryEffects { get; }` |
| `AuthoritarianWeight` | `public float AuthoritarianWeight { get; }` |
| `OligarchicWeight` | `public float OligarchicWeight { get; }` |
| `EgalitarianWeight` | `public float EgalitarianWeight { get; }` |
| `LogEntryDescription` | `public TextObject LogEntryDescription { get; }` |

## Key Methods

### Initialize
`public void Initialize(TextObject name, TextObject description, TextObject logEntryDescription, TextObject secondaryEffects, float authoritarianWeight, float oligarchyWeight, float egalitarianWeight)`

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of PolicyObject from the subsystem API first
PolicyObject policyObject = ...;
policyObject.Initialize(name, description, logEntryDescription, secondaryEffects, 0, 0, 0);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of PolicyObject from the subsystem API first
PolicyObject policyObject = ...;
var result = policyObject.ToString();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PolicyObject policyObject = ...;
policyObject.Initialize(name, description, logEntryDescription, secondaryEffects, 0, 0, 0);
```

## See Also

- [Area Index](../)