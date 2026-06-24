<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ActionSetCode`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ActionSetCode

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public static class ActionSetCode`
**Area:** core-extra

## Overview

`ActionSetCode` lives in `TaleWorlds.Core`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Core` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GenerateActionSetNameWithSuffix
`public static string GenerateActionSetNameWithSuffix(Monster monster, bool isFemale, string suffix)`

**Purpose:** Handles logic related to `generate action set name with suffix`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
ActionSetCode.GenerateActionSetNameWithSuffix(monster, false, "example");
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
