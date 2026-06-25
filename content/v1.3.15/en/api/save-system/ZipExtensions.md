---
title: "ZipExtensions"
description: "Auto-generated class reference for ZipExtensions."
---
# ZipExtensions

**Namespace:** TaleWorlds.SaveSystem
**Module:** TaleWorlds.SaveSystem
**Type:** `internal static class ZipExtensions`
**Base:** none
**File:** `TaleWorlds.SaveSystem/ZipExtensions.cs`

## Overview

`ZipExtensions` lives in `TaleWorlds.SaveSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.SaveSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### FillFrom
`public static void FillFrom(this ZipArchiveEntry entry, byte data)`

**Purpose:** **Purpose:** Executes the FillFrom logic.

```csharp
// Static call; no instance required
ZipExtensions.FillFrom(entry, 0);
```

### FillFrom
`public static void FillFrom(this ZipArchiveEntry entry, BinaryWriter writer)`

**Purpose:** **Purpose:** Executes the FillFrom logic.

```csharp
// Static call; no instance required
ZipExtensions.FillFrom(entry, writer);
```

### GetBinaryReader
`public static BinaryReader GetBinaryReader(this ZipArchiveEntry entry)`

**Purpose:** **Purpose:** Reads and returns the binary reader value held by the this instance.

```csharp
// Static call; no instance required
ZipExtensions.GetBinaryReader(entry);
```

### GetBinaryData
`public static byte GetBinaryData(this ZipArchiveEntry entry)`

**Purpose:** **Purpose:** Reads and returns the binary data value held by the this instance.

```csharp
// Static call; no instance required
ZipExtensions.GetBinaryData(entry);
```

## Usage Example

```csharp
ZipExtensions.FillFrom(entry, 0);
```

## See Also

- [Area Index](../)