<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `FileHelperExtensions`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FileHelperExtensions

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class FileHelperExtensions`
**Area:** core-extra

## Overview

`FileHelperExtensions` lives in `TaleWorlds.Library`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Load
`public static void Load(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Loads `load` data.

### LoadAsync
`public static Task LoadAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Loads `async` data.

### Save
`public static void Save(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Saves `save` data.

### SaveAsync
`public static Task SaveAsync(this XmlDocument document, PlatformFilePath path)`

**Purpose:** Saves `async` data.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
FileHelperExtensions.Load(document, path);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-core)
