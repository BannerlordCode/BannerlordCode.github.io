---
title: "ObjectSaveData"
description: "Auto-generated class reference for ObjectSaveData."
---
# ObjectSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ObjectSaveData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem.Save/ObjectSaveData.cs`

## Overview

`ObjectSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ObjectSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectId` | `public int ObjectId { get; }` |
| `Context` | `public ISaveContext Context { get; }` |
| `Target` | `public object Target { get; }` |
| `Type` | `public Type Type { get; }` |
| `IsClass` | `public bool IsClass { get; }` |

## Key Methods

### GetFolderCount
`public int GetFolderCount()`

**Purpose:** Reads and returns the folder count value held by the this instance.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetFolderCount();
```

### GetEntryCount
`public int GetEntryCount()`

**Purpose:** Reads and returns the entry count value held by the this instance.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetEntryCount();
```

### CollectMembers
`public void CollectMembers()`

**Purpose:** Executes the CollectMembers logic.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectMembers();
```

### CollectStringsInto
`public void CollectStringsInto(List<string> collection)`

**Purpose:** Executes the CollectStringsInto logic.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStringsInto(collection);
```

### CollectStrings
`public void CollectStrings()`

**Purpose:** Executes the CollectStrings logic.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStrings();
```

### CollectStructs
`public void CollectStructs()`

**Purpose:** Executes the CollectStructs logic.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.CollectStructs();
```

### SaveHeaderTo
`public void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**Purpose:** Writes header to to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderTo(parentFolder, archiveContext);
```

### SaveHeaderFolderTo
`public void SaveHeaderFolderTo(BinaryWriter headerWriter, int folderId)`

**Purpose:** Writes header folder to to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderFolderTo(headerWriter, 0);
```

### SaveHeaderDataTo
`public void SaveHeaderDataTo(BinaryWriter headerWriter, int folderId)`

**Purpose:** Writes header data to to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveHeaderDataTo(headerWriter, 0);
```

### GetHeaderSize
`public int GetHeaderSize()`

**Purpose:** Reads and returns the header size value held by the this instance.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetHeaderSize();
```

### GetDataSize
`public int GetDataSize()`

**Purpose:** Reads and returns the data size value held by the this instance.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetDataSize();
```

### SaveDataFolder
`public void SaveDataFolder(BinaryWriter writer, int parentFolderId, ref int folderId)`

**Purpose:** Writes data folder to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveDataFolder(writer, 0, folderId);
```

### SaveTo
`public void SaveTo(BinaryWriter writer, ref int folderId)`

**Purpose:** Writes to to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveTo(writer, folderId);
```

### SaveTo
`public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**Purpose:** Writes to to persistent storage or a stream.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
objectSaveData.SaveTo(parentFolder, archiveContext);
```

### GetChildObjects
`public IEnumerable<object> GetChildObjects()`

**Purpose:** Reads and returns the child objects value held by the this instance.

```csharp
// Obtain an instance of ObjectSaveData from the subsystem API first
ObjectSaveData objectSaveData = ...;
var result = objectSaveData.GetChildObjects();
```

### GetChildObjects
`public static void GetChildObjects(ISaveContext context, TypeDefinition typeDefinition, object target, List<object> collectedObjects)`

**Purpose:** Reads and returns the child objects value held by the this instance.

```csharp
// Static call; no instance required
ObjectSaveData.GetChildObjects(context, typeDefinition, target, collectedObjects);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ObjectSaveData entry = ...;
```

## See Also

- [Area Index](../)