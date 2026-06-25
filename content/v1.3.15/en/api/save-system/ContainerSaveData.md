---
title: "ContainerSaveData"
description: "Auto-generated class reference for ContainerSaveData."
---
# ContainerSaveData

**Namespace:** TaleWorlds.SaveSystem.Save
**Module:** TaleWorlds.SaveSystem
**Type:** `internal class ContainerSaveData`
**Base:** none
**File:** `TaleWorlds.SaveSystem/Save/ContainerSaveData.cs`

## Overview

`ContainerSaveData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `ContainerSaveData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `ObjectId` | `public int ObjectId { get; }` |
| `Context` | `public ISaveContext Context { get; }` |
| `Target` | `public object Target { get; }` |
| `Type` | `public Type Type { get; }` |

## Key Methods

### CollectChildren
`public void CollectChildren()`

**Purpose:** Executes the CollectChildren logic.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectChildren();
```

### SaveHeaderTo
`public void SaveHeaderTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**Purpose:** Writes header to to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderTo(parentFolder, archiveContext);
```

### SaveHeaderDataTo
`public void SaveHeaderDataTo(BinaryWriter headerWriter, int folderId)`

**Purpose:** Writes header data to to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderDataTo(headerWriter, 0);
```

### SaveHeaderFolderTo
`public void SaveHeaderFolderTo(BinaryWriter headerWriter, int folderId)`

**Purpose:** Writes header folder to to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveHeaderFolderTo(headerWriter, 0);
```

### GetHeaderSize
`public int GetHeaderSize()`

**Purpose:** Reads and returns the header size value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetHeaderSize();
```

### GetDataSize
`public int GetDataSize()`

**Purpose:** Reads and returns the data size value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetDataSize();
```

### GetEntryCount
`public int GetEntryCount()`

**Purpose:** Reads and returns the entry count value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetEntryCount();
```

### GetFolderCount
`public int GetFolderCount()`

**Purpose:** Reads and returns the folder count value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetFolderCount();
```

### SaveDataFolder
`public void SaveDataFolder(BinaryWriter writer, ref int folderId)`

**Purpose:** Writes data folder to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveDataFolder(writer, folderId);
```

### SaveTo
`public void SaveTo(BinaryWriter writer, ref int folderId)`

**Purpose:** Writes to to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveTo(writer, folderId);
```

### SaveTo
`public void SaveTo(SaveEntryFolder parentFolder, IArchiveContext archiveContext)`

**Purpose:** Writes to to persistent storage or a stream.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.SaveTo(parentFolder, archiveContext);
```

### CollectStrings
`public void CollectStrings()`

**Purpose:** Executes the CollectStrings logic.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStrings();
```

### CollectStringsInto
`public void CollectStringsInto(List<string> collection)`

**Purpose:** Executes the CollectStringsInto logic.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStringsInto(collection);
```

### CollectStructs
`public void CollectStructs()`

**Purpose:** Executes the CollectStructs logic.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectStructs();
```

### CollectMembers
`public void CollectMembers()`

**Purpose:** Executes the CollectMembers logic.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
containerSaveData.CollectMembers();
```

### GetChildElementSaveDatas
`public IEnumerable<ElementSaveData> GetChildElementSaveDatas()`

**Purpose:** Reads and returns the child element save datas value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildElementSaveDatas();
```

### GetChildElements
`public IEnumerable<object> GetChildElements()`

**Purpose:** Reads and returns the child elements value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildElements();
```

### GetChildElements
`public static IEnumerable<object> GetChildElements(ContainerType containerType, object target)`

**Purpose:** Reads and returns the child elements value held by the this instance.

```csharp
// Static call; no instance required
ContainerSaveData.GetChildElements(containerType, target);
```

### GetChildObjects
`public IEnumerable<object> GetChildObjects(ISaveContext context)`

**Purpose:** Reads and returns the child objects value held by the this instance.

```csharp
// Obtain an instance of ContainerSaveData from the subsystem API first
ContainerSaveData containerSaveData = ...;
var result = containerSaveData.GetChildObjects(context);
```

### GetChildObjects
`public static void GetChildObjects(ISaveContext context, ContainerDefinition containerDefinition, ContainerType containerType, object target, List<object> collectedObjects)`

**Purpose:** Reads and returns the child objects value held by the this instance.

```csharp
// Static call; no instance required
ContainerSaveData.GetChildObjects(context, containerDefinition, containerType, target, collectedObjects);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
ContainerSaveData entry = ...;
```

## See Also

- [Area Index](../)