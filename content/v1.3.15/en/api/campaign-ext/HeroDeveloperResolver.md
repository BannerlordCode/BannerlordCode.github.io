---
title: "HeroDeveloperResolver"
description: "Auto-generated class reference for HeroDeveloperResolver."
---
# HeroDeveloperResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class HeroDeveloperResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `TaleWorlds.CampaignSystem/SaveCompability/HeroDeveloperResolver.cs`

## Overview

`HeroDeveloperResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicable
`public bool IsApplicable(ApplicationVersion version)`

**Purpose:** **Purpose:** Determines whether the this instance is in the applicable state or condition.

```csharp
// Obtain an instance of HeroDeveloperResolver from the subsystem API first
HeroDeveloperResolver heroDeveloperResolver = ...;
var result = heroDeveloperResolver.IsApplicable(version);
```

### GetFieldMemberWithId
`public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** **Purpose:** Reads and returns the field member with id value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloperResolver from the subsystem API first
HeroDeveloperResolver heroDeveloperResolver = ...;
var result = heroDeveloperResolver.GetFieldMemberWithId(memberTypeId);
```

### GetNewType
`public Type GetNewType()`

**Purpose:** **Purpose:** Reads and returns the new type value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloperResolver from the subsystem API first
HeroDeveloperResolver heroDeveloperResolver = ...;
var result = heroDeveloperResolver.GetNewType();
```

### GetPropertyMemberWithId
`public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** **Purpose:** Reads and returns the property member with id value held by the this instance.

```csharp
// Obtain an instance of HeroDeveloperResolver from the subsystem API first
HeroDeveloperResolver heroDeveloperResolver = ...;
var result = heroDeveloperResolver.GetPropertyMemberWithId(memberTypeId);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
HeroDeveloperResolver heroDeveloperResolver = ...;
heroDeveloperResolver.IsApplicable(version);
```

## See Also

- [Area Index](../)