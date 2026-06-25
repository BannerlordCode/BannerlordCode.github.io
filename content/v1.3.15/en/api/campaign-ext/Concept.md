---
title: "Concept"
description: "Auto-generated class reference for Concept."
---
# Concept

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class Concept : MBObjectBase`
**Base:** `MBObjectBase`
**File:** `TaleWorlds.CampaignSystem/Concept.cs`

## Overview

`Concept` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Title` | `public TextObject Title { get; }` |
| `Description` | `public TextObject Description { get; }` |
| `FilterGroup` | `public string FilterGroup { get; }` |
| `LinkID` | `public string LinkID { get; }` |
| `All` | `public static MBReadOnlyList<Concept> All { get; }` |
| `EncyclopediaLink` | `public string EncyclopediaLink { get; }` |
| `EncyclopediaLinkWithName` | `public TextObject EncyclopediaLinkWithName { get; }` |

## Key Methods

### Deserialize
`public override void Deserialize(MBObjectManager objectManager, XmlNode node)`

**Purpose:** Restores the this instance from serialized data.

```csharp
// Obtain an instance of Concept from the subsystem API first
Concept concept = ...;
concept.Deserialize(objectManager, node);
```

### IsGroupMember
`public static bool IsGroupMember(string groupName, Concept c)`

**Purpose:** Determines whether the this instance is in the group member state or condition.

```csharp
// Static call; no instance required
Concept.IsGroupMember("example", c);
```

### SetConceptTextLinks
`public static void SetConceptTextLinks()`

**Purpose:** Assigns a new value to concept text links and updates the object's internal state.

```csharp
// Static call; no instance required
Concept.SetConceptTextLinks();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Concept concept = ...;
concept.Deserialize(objectManager, node);
```

## See Also

- [Area Index](../)