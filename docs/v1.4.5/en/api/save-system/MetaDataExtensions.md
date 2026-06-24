<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaDataExtensions`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetApplicationVersion
`public static ApplicationVersion GetApplicationVersion(this MetaData metaData)`

**Purpose:** Gets the current value of `application version`.

### GetNewGameVersion
`public static ApplicationVersion GetNewGameVersion(this MetaData metaData)`

**Purpose:** Gets the current value of `new game version`.

## Usage Example

```csharp
MetaDataExtensions.GetApplicationVersion(metaData);
```

## See Also

- [Complete Class Catalog](../catalog)