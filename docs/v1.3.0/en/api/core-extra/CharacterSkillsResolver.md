<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterSkillsResolver`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterSkillsResolver

**Namespace:** TaleWorlds.Core.SaveCompability
**Module:** TaleWorlds.Core
**Type:** `public class CharacterSkillsResolver : IConflictResolver`
**Base:** `IConflictResolver`
**File:** `TaleWorlds.Core/SaveCompability/CharacterSkillsResolver.cs`

## Overview

`CharacterSkillsResolver` lives in `TaleWorlds.Core.SaveCompability` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.SaveCompability` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

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
var value = new CharacterSkillsResolver();
value.IsApplicable(version);
```

## See Also

- [Complete Class Catalog](../catalog)