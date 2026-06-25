---
title: "ImageIdentifierVM"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ImageIdentifierVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ImageIdentifierVM

**Namespace:** TaleWorlds.Core.ViewModelCollection.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public abstract class ImageIdentifierVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/ImageIdentifiers/ImageIdentifierVM.cs`

## Overview

`ImageIdentifierVM` lives in `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `IsValid` | `public bool IsValid { get; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; }` |
| `TextureProviderName` | `public string TextureProviderName { get; }` |

## Usage Example

```csharp
var implementation = new CustomImageIdentifierVM();
```

## See Also

- [Complete Class Catalog](../catalog)