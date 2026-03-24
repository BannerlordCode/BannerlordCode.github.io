# SaveManager

**Namespace:** TaleWorlds.SaveSystem  
**Module:** TaleWorlds.SaveSystem  
**Type:** static class

The main entry point for all save and load operations in Bannerlord's save system. This static class provides methods to initialize the save system, check saveable types, and perform save and load operations.

## Overview

SaveManager handles the high-level save/load workflow. It manages the definition context that tracks all saveable types, coordinates with drivers for file I/O, and provides utilities for type checking.

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
