---
title: "ISaveDriver"
description: "The save-system interface that abstracts where and how game saves are stored, exposing save, load, delete, and metadata operations."
---

# ISaveDriver

**Namespace:** `TaleWorlds.SaveSystem`
**Module:** `TaleWorlds.SaveSystem`
**Type:** `public interface ISaveDriver`
**Base:** (none — marker interface)
**File:** `bannerlord-1.4.5/Bannerlord.Source/bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/ISaveDriver.cs`

## Overview

`ISaveDriver` is the interface that abstracts the storage backend for game saves. It defines the contract for saving, loading, deleting, and querying save game files, regardless of whether those files live on disk, in memory, or in some other storage medium. The interface is declared at ISaveDriver.cs:6 as `public interface ISaveDriver`.

The interface is intentionally small and focused. It covers the full lifecycle of a save game: `Save` writes a save, `Load` reads it back, `Delete` removes it, `IsSaveGameFileExists` checks for its presence, and `GetSaveGameFileInfos` / `GetSaveGameFileNames` enumerate available saves. It also exposes `LoadMetaData` for reading save metadata without loading the full game data, and `IsWorkingAsync` to tell callers whether the driver performs save operations on a background thread.

Three concrete types implement this interface: `FileDriver` (FileDriver.cs:10, `public class FileDriver : ISaveDriver`) which stores saves as files on disk, `AsyncFileSaveDriver` which wraps file operations in asynchronous execution, and `InMemDriver` which stores saves in memory for testing or temporary sessions. The driver pattern allows the save system to switch backends without changing the calling code.

## Mental Model

Think of `ISaveDriver` as the "where" of a save game. If the save system is the librarian, the driver is the bookshelf — it decides whether saves are physical files, in-memory structures, or something else entirely. The interface answers questions like: how do I write a save? How do I read one back? What saves exist? Is this operation going to block?

Key rules to internalize:

- **The driver is a storage backend.** It does not interpret save data — it only stores and retrieves it. The `MetaData` and `LoadData` objects are opaque data bags to the driver.
- **Save is asynchronous.** `Save` returns a `Task<SaveResultWithMessage>`, meaning the save operation may complete on a background thread. Always await the task before assuming the save is complete.
- **Async behavior varies by driver.** `IsWorkingAsync` tells you whether the driver performs save operations on a background thread. `FileDriver` may or may not be async depending on configuration; `AsyncFileSaveDriver` is always async; `InMemDriver` is synchronous.
- **Metadata is separate from game data.** `LoadMetaData` reads only the metadata (save name, date, version, etc.) without loading the full game state. This is much faster than `Load` and is used for save game browser UIs.
- **File info is for enumeration.** `GetSaveGameFileInfos` returns structured `SaveGameFileInfo` objects for each save, while `GetSaveGameFileNames` returns just the file names as strings.
- **Existence checks are cheap.** `IsSaveGameFileExists` is a lightweight check that does not load any data.

## How to use

### How to get it

The save system obtains a driver instance through its internal configuration. A mod typically does not create a driver directly — instead, it interacts with the save system, which uses the configured driver internally. To understand which driver is active, check the save system's configuration. The `FileDriver` (FileDriver.cs:10) is the standard implementer used in production. `AsyncFileSaveDriver` and `InMemDriver` are alternatives for async file storage and in-memory storage respectively.

### Typical usage

A mod or the game itself uses the driver through the save system. The most common patterns are: calling `Save` with a save name, version, metadata, and game data to write a save; calling `Load` with a save name to read it back; enumerating `GetSaveGameFileInfos` to populate a save game browser; calling `LoadMetaData` to read save metadata without loading the full game; checking `IsWorkingAsync` before awaiting a save operation; and calling `Delete` to remove a save. When you need to check if a save exists before loading, use `IsSaveGameFileExists`.

### Pitfalls

- **Do not ignore the async nature of Save.** `Save` returns a `Task<SaveResultWithMessage>`. Always await the task and check the result before assuming the save succeeded.
- **Do not assume IsWorkingAsync is always true.** It varies by driver. Check it before deciding whether to await or continue synchronously.
- **Do not use Load for metadata-only queries.** Use `LoadMetaData` instead — it is much faster because it does not deserialize the full game state.
- **Do not confuse GetSaveGameFileInfos with GetSaveGameFileNames.** The former returns structured `SaveGameFileInfo` objects with metadata; the latter returns only file name strings.
- **Do not call Delete without confirmation.** Deleting a save is irreversible. Always confirm with the user before calling `Delete`.

## Key Members

| Member | Signature | What it is for |
| --- | --- | --- |
| `Save` | `Task<SaveResultWithMessage> Save(string saveName, int version, MetaData metaData, GameData gameData)` | Writes a save game with the specified name, version, metadata, and game data. |
| `GetSaveGameFileInfos` | `SaveGameFileInfo[] GetSaveGameFileInfos()` | Returns structured information about all available save game files. |
| `GetSaveGameFileNames` | `string[] GetSaveGameFileNames()` | Returns the file names of all available save game files. |
| `LoadMetaData` | `MetaData LoadMetaData(string saveName)` | Reads only the metadata for a save game without loading the full game state. |
| `Load` | `LoadData Load(string saveName)` | Loads the full game data for a save game. |
| `Delete` | `bool Delete(string saveName)` | Deletes a save game file, returning true if successful. |
| `IsSaveGameFileExists` | `bool IsSaveGameFileExists(string saveName)` | Checks whether a save game file with the specified name exists. |
| `IsWorkingAsync` | `bool IsWorkingAsync { get; }` | Whether this driver performs save operations on a background thread. |

## Real Example

```csharp
using TaleWorlds.SaveSystem;
using System.Threading.Tasks;

// FileDriver is the concrete implementer of ISaveDriver
ISaveDriver driver = new FileDriver();

// Check if the driver works asynchronously
bool isAsync = driver.IsWorkingAsync;

// Save a game
MetaData metaData = new MetaData();
metaData.SaveName = "MySave";
metaData.SaveDate = DateTime.Now;
GameData gameData = new GameData();
// ... populate gameData ...

Task<SaveResultWithMessage> saveTask = driver.Save("MySave", 1, metaData, gameData);
SaveResultWithMessage result = await saveTask;
if (result.Success)
{
    // Save succeeded
}

// Enumerate available saves
SaveGameFileInfo[] saveInfos = driver.GetSaveGameFileInfos();
foreach (SaveGameFileInfo info in saveInfos)
{
    // Process each save's metadata
}

// Load metadata without loading the full game
MetaData loadedMetaData = driver.LoadMetaData("MySave");

// Load a full save
LoadData loadData = driver.Load("MySave");

// Check if a save exists before loading
if (driver.IsSaveGameFileExists("MySave"))
{
    // Safe to load
}

// Delete a save
bool deleted = driver.Delete("MySave");
```

## See also
- [SaveGameFileInfo](../SaveGameFileInfo)
- [MetaData](../MetaData)
- [LoadData](../LoadData)

## Navigation
- [save-system index](../)
- [SaveGameFileInfo](../SaveGameFileInfo)
- [MetaData](../MetaData)
