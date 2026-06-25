---
title: "CharacterPerksResolver"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterPerksResolver`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterPerksResolver

**Namespace:** TaleWorlds.CampaignSystem.SaveCompability
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterPerksResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.SaveCompability/CharacterPerksResolver.cs`

## Overview

`CharacterPerksResolver` lives in `TaleWorlds.CampaignSystem.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsApplicable
`public bool IsApplicable(ApplicationVersion version)`

**Purpose:** Handles logic related to `is applicable`.

### GetFieldMemberWithId
`public MemberTypeId GetFieldMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** Gets the current value of `field member with id`.

### GetNewType
`public Type GetNewType()`

**Purpose:** Gets the current value of `new type`.

### GetPropertyMemberWithId
`public MemberTypeId GetPropertyMemberWithId(MemberTypeId memberTypeId)`

**Purpose:** Gets the current value of `property member with id`.

## Usage Example

```csharp
var value = new CharacterPerksResolver();
value.IsApplicable(version);
```

## See Also

- [Complete Class Catalog](../catalog)