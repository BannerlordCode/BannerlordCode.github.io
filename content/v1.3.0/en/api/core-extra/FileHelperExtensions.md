---
title: "FileHelperExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileHelperExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# FileHelperExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelperExtensions`
**Base:** none
**File:** `TaleWorlds.Library/FileHelperExtensions.cs`

## Overview

`FileHelperExtensions` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Load
`public static void Load(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Loads `load` data.

### LoadAsync
`public static async Task LoadAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Loads `async` data.

### Save
`public static void Save(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Saves `save` data.

### SaveAsync
`public static async Task SaveAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Saves `async` data.

## Usage Example

```csharp
FileHelperExtensions.Load(document, path);
```

## See Also

- [Complete Class Catalog](../catalog)