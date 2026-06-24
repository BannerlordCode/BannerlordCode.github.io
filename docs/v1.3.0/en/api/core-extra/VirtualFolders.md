<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `VirtualFolders`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# VirtualFolders

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class VirtualFolders`
**Base:** none
**File:** `TaleWorlds.Library/VirtualFolders.cs`

## Overview

`VirtualFolders` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetFileContent
`public static string GetFileContent(string filePath, Type type = null)`

**Purpose:** Gets the current value of `file content`.

## Usage Example

```csharp
VirtualFolders.GetFileContent("example", null);
```

## See Also

- [Complete Class Catalog](../catalog)