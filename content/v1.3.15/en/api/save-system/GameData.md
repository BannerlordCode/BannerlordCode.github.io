---
title: "GameData"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameData`
- [← Area / Back to save-system](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameData

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `public class GameData`
**Area:** save-system

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

**Purpose:** Handles logic related to `inspect`.

### CreateFrom
`public static GameData CreateFrom(byte readBytes)`

**Purpose:** Creates a new `from` instance or object.

### GetData
`public byte GetData()`

**Purpose:** Gets the current value of `data`.

### Write
`public static void Write(BinaryWriter writer, GameData gameData)`

**Purpose:** Handles logic related to `write`.

### Read
`public static GameData Read(BinaryReader reader)`

**Purpose:** Handles logic related to `read`.

### IsEqualTo
`public bool IsEqualTo(GameData gameData)`

**Purpose:** Handles logic related to `is equal to`.

## Usage Example

```csharp
var value = new GameData();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-save)
