---
title: "PartyTemplateObject"
description: "Auto-generated class reference for PartyTemplateObject."
---
# PartyTemplateObject

**Namespace:** TaleWorlds.CampaignSystem.Party
**Module:** TaleWorlds.CampaignSystem
**Type:** `public sealed class PartyTemplateObject : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Party/PartyTemplateObject.cs`

## Overview

`PartyTemplateObject` lives in `TaleWorlds.CampaignSystem.Party` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.Party` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** **Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of PartyTemplateObject from the subsystem API first
PartyTemplateObject partyTemplateObject = ...;
partyTemplateObject.Deserialize(objectManager, node);
```

### GetUpperTroopLimit
`public int GetUpperTroopLimit()`

**Purpose:** **Purpose:** Reads and returns the upper troop limit value held by the this instance.

```csharp
// Obtain an instance of PartyTemplateObject from the subsystem API first
PartyTemplateObject partyTemplateObject = ...;
var result = partyTemplateObject.GetUpperTroopLimit();
```

### GetLowerTroopLimit
`public int GetLowerTroopLimit()`

**Purpose:** **Purpose:** Reads and returns the lower troop limit value held by the this instance.

```csharp
// Obtain an instance of PartyTemplateObject from the subsystem API first
PartyTemplateObject partyTemplateObject = ...;
var result = partyTemplateObject.GetLowerTroopLimit();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
PartyTemplateObject partyTemplateObject = ...;
partyTemplateObject.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)