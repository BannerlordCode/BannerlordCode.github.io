---
title: "GameData"
description: "Auto-generated class reference for GameData."
---
# GameData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class GameData`
**Base:** none
**File:** `bin/TaleWorlds.SaveSystem/TaleWorlds.SaveSystem/GameData.cs`

## Overview

`GameData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `GameData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Header` | `public byte Header { get; set; }` |
| `Strings` | `public byte Strings { get; set; }` |
| `ObjectData` | `public byte ObjectData { get; set; }` |
| `ContainerData` | `public byte ContainerData { get; set; }` |
| `TotalSize` | `public int TotalSize { get; }` |

## Key Methods

### Inspect
`public void Inspect()`

**Purpose:** Executes the Inspect logic.

```csharp
// Obtain an instance of GameData from the subsystem API first
GameData gameData = ...;
gameData.Inspect();
```

### CreateFrom
`public static GameData CreateFrom(byte readBytes)`

**Purpose:** Constructs a new from entity and returns it to the caller.

```csharp
// Static call; no instance required
GameData.CreateFrom(0);
```

### GetData
`public byte GetData()`

**Purpose:** Reads and returns the data value held by the this instance.

```csharp
// Obtain an instance of GameData from the subsystem API first
GameData gameData = ...;
var result = gameData.GetData();
```

### Write
`public static void Write(System.IO.BinaryWriter writer, GameData gameData)`

**Purpose:** Writes the this instance's data to the target location.

```csharp
// Static call; no instance required
GameData.Write(writer, gameData);
```

### Read
`public static GameData Read(System.IO.BinaryReader reader)`

**Purpose:** Reads the data or state of the this instance.

```csharp
// Static call; no instance required
GameData.Read(reader);
```

### IsEqualTo
`public bool IsEqualTo(GameData gameData)`

**Purpose:** Determines whether the this instance is in the equal to state or condition.

```csharp
// Obtain an instance of GameData from the subsystem API first
GameData gameData = ...;
var result = gameData.IsEqualTo(gameData);
```

## Usage Example

```csharp
// This data object is usually returned by campaign/mission APIs
GameData entry = ...;
```

## See Also

- [Area Index](../)