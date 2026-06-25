---
title: "FileHelperExtensions"
description: "Auto-generated class reference for FileHelperExtensions."
---
# FileHelperExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelperExtensions`
**Base:** none
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/FileHelperExtensions.cs`

## Overview

`FileHelperExtensions` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Load
`public static void Load(this XmlDocument document, PlatformFilePath path)`

**Purpose:** **Purpose:** Reads the this instance's data from persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelperExtensions.Load(document, path);
```

### LoadAsync
`public static async Task LoadAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** **Purpose:** Reads async from persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelperExtensions.LoadAsync(document, path);
```

### Save
`public static void Save(this XmlDocument document, PlatformFilePath path)`

**Purpose:** **Purpose:** Writes the this instance's data to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelperExtensions.Save(document, path);
```

### SaveAsync
`public static async Task SaveAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** **Purpose:** Writes async to persistent storage or a stream.

```csharp
// Static call; no instance required
FileHelperExtensions.SaveAsync(document, path);
```

## Usage Example

```csharp
FileHelperExtensions.Load(document, path);
```

## See Also

- [Area Index](../)