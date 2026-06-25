---
title: "SaveManager"
description: "Auto-generated class reference for SaveManager."
---
# SaveManager

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public static class SaveManager`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/SaveManager.cs`

## Overview

`SaveManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `SaveManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### InitializeGlobalDefinitionContext
`public static void InitializeGlobalDefinitionContext()`

**Purpose:** **Purpose:** Prepares the resources, state, or bindings required by global definition context.

```csharp
// Static call; no instance required
SaveManager.InitializeGlobalDefinitionContext();
```

### CheckSaveableTypes
`public static List<Type> CheckSaveableTypes()`

**Purpose:** **Purpose:** Verifies whether saveable types holds true for the this instance.

```csharp
// Static call; no instance required
SaveManager.CheckSaveableTypes();
```

### Save
`public static SaveOutput Save(object target, MetaData metaData, string saveName, ISaveDriver driver)`

**Purpose:** **Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Static call; no instance required
SaveManager.Save(target, metaData, "example", driver);
```

### ShouldResolveConflicts
`public static bool ShouldResolveConflicts()`

**Purpose:** **Purpose:** Executes the ShouldResolveConflicts logic.

```csharp
// Static call; no instance required
SaveManager.ShouldResolveConflicts();
```

### LoadMetaData
`public static MetaData LoadMetaData(string saveName, ISaveDriver driver)`

**Purpose:** **Purpose:** Reads meta data from persistent storage or a stream.

```csharp
// Static call; no instance required
SaveManager.LoadMetaData("example", driver);
```

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Static call; no instance required
SaveManager.Load("example", driver);
```

### Load
`public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Static call; no instance required
SaveManager.Load("example", driver, false);
```

## Usage Example

```csharp
var manager = SaveManager.Current;
```

## See Also

- [Area Index](../)