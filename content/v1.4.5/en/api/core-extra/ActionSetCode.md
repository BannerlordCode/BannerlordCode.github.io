---
title: "ActionSetCode"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionSetCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ActionSetCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class ActionSetCode`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Core/TaleWorlds.Core/ActionSetCode.cs`

## Overview

`ActionSetCode` lives in `TaleWorlds.Core` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GenerateActionSetNameWithSuffix
`public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)`

**Purpose:** Handles logic related to `generate action set name with suffix`.

## Usage Example

```csharp
ActionSetCode.GenerateActionSetNameWithSuffix(monster, false, "example");
```

## See Also

- [Complete Class Catalog](../catalog)