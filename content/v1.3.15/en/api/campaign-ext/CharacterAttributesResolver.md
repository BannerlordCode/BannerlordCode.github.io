---
title: "CharacterAttributesResolver"
description: "Auto-generated class reference for CharacterAttributesResolver."
---
# CharacterAttributesResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterAttributesResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/CharacterAttributesResolver.cs`

## Overview

`CharacterAttributesResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicable
`public bool IsApplicable(ApplicationVersion version)`

**Purpose:** Determines whether the current object is in the `applicable` state or condition.

```csharp
// Obtain an instance of CharacterAttributesResolver from the subsystem API first
CharacterAttributesResolver characterAttributesResolver = ...;
var result = characterAttributesResolver.IsApplicable(version);
```

### GetFieldMemberWithId
`public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** Reads and returns the `field member with id` value held by the current object.

```csharp
// Obtain an instance of CharacterAttributesResolver from the subsystem API first
CharacterAttributesResolver characterAttributesResolver = ...;
var result = characterAttributesResolver.GetFieldMemberWithId(memberTypeId);
```

### GetNewType
`public Type GetNewType()`

**Purpose:** Reads and returns the `new type` value held by the current object.

```csharp
// Obtain an instance of CharacterAttributesResolver from the subsystem API first
CharacterAttributesResolver characterAttributesResolver = ...;
var result = characterAttributesResolver.GetNewType();
```

### GetPropertyMemberWithId
`public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** Reads and returns the `property member with id` value held by the current object.

```csharp
// Obtain an instance of CharacterAttributesResolver from the subsystem API first
CharacterAttributesResolver characterAttributesResolver = ...;
var result = characterAttributesResolver.GetPropertyMemberWithId(memberTypeId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
CharacterAttributesResolver characterAttributesResolver = ...;
characterAttributesResolver.IsApplicable(version);
```

## See Also

- [Area Index](../)