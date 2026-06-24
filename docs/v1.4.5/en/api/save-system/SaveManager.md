<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveManager`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SaveManager

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class SaveManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs`

## Overview

`SaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeGlobalDefinitionContext
`public static void InitializeGlobalDefinitionContext()`

**Purpose:** Initializes the state, resources, or bindings for `global definition context`.

### CheckSaveableTypes
`public static List<Type> CheckSaveableTypes()`

**Purpose:** Handles logic related to `check saveable types`.

### Save
`public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`

**Purpose:** Saves `save` data.

### ShouldResolveConflicts
`public static bool ShouldResolveConflicts()`

**Purpose:** Handles logic related to `should resolve conflicts`.

### LoadMetaData
`public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`

**Purpose:** Loads `meta data` data.

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver)`

**Purpose:** Loads `load` data.

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`

**Purpose:** Loads `load` data.

## Usage Example

```csharp
var manager = SaveManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)