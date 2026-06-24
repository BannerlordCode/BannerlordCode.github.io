
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SaveManager`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SaveManager

**Namespace:** TaleWorlds.SaveSystem  
**Module:** TaleWorlds.SaveSystem  
**Type:** static class

The main entry point for all save and load operations in Bannerlord's save system. This static class provides methods to initialize the save system, check saveable types, and perform save and load operations.


<!-- BEGIN DEV-USE-CASES -->

## Developer Use Cases

### Use Case 1: Mark a class as saveable

**Scenario**: Your mod's custom class needs to persist in saves.

```csharp
[SaveableClass]
public class MyModData
{
    [SaveableProperty(1)] public int Gold { get; set; }
    [SaveableField(2)] private string _name;
}
```

**Key points**: Use `[SaveableClass]` on the class; `[SaveableProperty(id)]` on properties, `[SaveableField(id)]` on fields; `id` must be unique within the class and stable (never reuse a deleted id in version updates).

### Use Case 2: Save game state

**Scenario**: Your mod triggers a manual save (e.g., after a key event).

```csharp
MetaData meta = new MetaData();
meta["ModVersion"] = "1.0.0";
SaveOutput result = SaveManager.Save(
    Campaign.Current, meta, "mysave", SaveGameDriver);
if (result.Success) { /* save succeeded */ }
```

**Key points**: `target` is typically `Campaign.Current`; `saveName` has no extension; errors are caught, not thrown — check `result.Success`.

### Use Case 3: Read save metadata only

**Scenario**: Check version compatibility before loading a full save.

```csharp
MetaData meta = SaveManager.LoadMetaData("mysave", SaveGameDriver);
if (meta != null && meta.TryGetValue("ModVersion", out string ver))
{
    // check version compatibility
}
```

**Key points**: `LoadMetaData` is much faster than `Load` — reads only the file header; returns `null` if the file doesn't exist.

### Use Case 4: Load a save

**Scenario**: Restore a previously saved game state.

```csharp
LoadResult result = SaveManager.Load("mysave", SaveGameDriver);
if (result.Success)
{
    // result.LoadData() completes deserialization
}
```

**Key points**: `Load` returns a `LoadResult`; `loadAsLateInitialize: true` spreads loading across frames for large saves.

<!-- END DEV-USE-CASES -->


## Overview

SaveManager handles the high-level save/load workflow. It manages the definition context that tracks all saveable types, coordinates with drivers for file I/O, and provides utilities for type checking.

## Mental Model

Treat `SaveManager` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Constants

| Name | Type | Value | Description |
|------|------|-------|-------------|
| SaveFileExtension | string | `"sav"` | File extension for save files |

## Static Properties

| Name | Type | Description |
|------|------|-------------|
| OperatingVersion | ApplicationVersion | The game version being operated on during save/load |

## Static Methods

### InitializeGlobalDefinitionContext

```csharp
public static void InitializeGlobalDefinitionContext()
```

Initializes the global definition context. This method must be called before any save operations. It creates a new DefinitionContext and fills it with all types from the current assembly domain. Any errors encountered during type registration are printed to debug output.

### CheckSaveableTypes

```csharp
public static List<Type> CheckSaveableTypes()
```

Scans all assemblies in the current AppDomain for types that have `[SaveableField]` or `[SaveableProperty]` attributes but lack type definitions. Returns a list of types that need to be registered.

### Save

```csharp
public static SaveOutput Save(
    object target, 
    MetaData metaData, 
    string saveName, 
    ISaveDriver driver
)
```

Saves an object graph to a file.

**Parameters:**
- `target` - The root object to save
- `metaData` - Metadata to include in the save file
- `saveName` - Name of the save file (without extension)
- `driver` - The save driver handling file I/O

**Returns:** A `SaveOutput` object indicating success, failure, or continuation status.

**Throws:** Does not throw. Errors are captured in the returned SaveOutput.

### LoadMetaData

```csharp
public static MetaData LoadMetaData(string saveName, ISaveDriver driver)
```

Loads just the metadata from a save file without loading the full game state.

**Parameters:**
- `saveName` - Name of the save file
- `driver` - The save driver handling file I/O

**Returns:** The metadata object from the save file.

### Load

```csharp
public static LoadResult Load(string saveName, ISaveDriver driver)
public static LoadResult Load(string saveName, ISaveDriver driver, bool loadAsLateInitialize)
```

Loads a saved game file.

**Parameters:**
- `saveName` - Name of the save file
- `driver` - The save driver handling file I/O
- `loadAsLateInitialize` - If true, callbacks are deferred for manual invocation

**Returns:** A `LoadResult` object containing the root object and metadata.

### ShouldResolveConflicts

```csharp
public static bool ShouldResolveConflicts()
```

**Returns:** True if currently loading a save, false otherwise. This can be used by type resolvers to handle version compatibility.

## Usage Example

```csharp
// Initialize before saving
SaveManager.InitializeGlobalDefinitionContext();

// Save a game
var metaData = new MetaData();
metaData.SetApplicationVersion(currentVersion);
var output = SaveManager.Save(myGameState, metaData, "MySave", fileDriver);

if (output.Result == SaveResult.Success)
{
    Console.WriteLine("Game saved successfully");
}

// Load a game
var loadResult = SaveManager.Load("MySave", fileDriver);
if (loadResult.Success)
{
    var loadedGame = loadResult.RootObject;
}
```

## See Also

- [SaveableRootClassAttribute](./SaveAttributes.md)
- [SaveablePropertyAttribute](./SaveAttributes.md)
- [SaveableFieldAttribute](./SaveAttributes.md)
- [SaveContext](./SaveContext.md)
- [LoadContext](./LoadContext.md)
