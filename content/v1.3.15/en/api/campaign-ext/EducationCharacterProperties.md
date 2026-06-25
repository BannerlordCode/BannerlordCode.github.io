---
title: "EducationCharacterProperties"
description: "Auto-generated class reference for EducationCharacterProperties."
---
# EducationCharacterProperties

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public struct EducationCharacterProperties`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/EducationCampaignBehavior.cs`

## Overview

`EducationCharacterProperties` lives in `TaleWorlds.CampaignSystem.CampaignBehaviors` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.CampaignBehaviors` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Equals
`public bool Equals(EducationCampaignBehavior.EducationCharacterProperties other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EducationCharacterProperties from the subsystem API first
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.Equals(other);
```

### Equals
`public override bool Equals(object obj)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of EducationCharacterProperties from the subsystem API first
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** **Purpose:** Returns a hash code for the this instance, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of EducationCharacterProperties from the subsystem API first
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.GetHashCode();
```

### GetUsedHandBoneIndex
`public sbyte GetUsedHandBoneIndex()`

**Purpose:** **Purpose:** Reads and returns the used hand bone index value held by the this instance.

```csharp
// Obtain an instance of EducationCharacterProperties from the subsystem API first
EducationCharacterProperties educationCharacterProperties = ...;
var result = educationCharacterProperties.GetUsedHandBoneIndex();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
EducationCharacterProperties educationCharacterProperties = ...;
educationCharacterProperties.Equals(other);
```

## See Also

- [Area Index](../)