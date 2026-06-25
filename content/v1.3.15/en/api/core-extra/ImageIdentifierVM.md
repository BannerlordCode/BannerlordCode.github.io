---
title: "ImageIdentifierVM"
description: "Auto-generated class reference for ImageIdentifierVM."
---
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
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `IsEmpty` | `public bool IsEmpty { get; }` |
| `IsValid` | `public bool IsValid { get; }` |

## Key Methods

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Invoked when the `finalize` event is raised.

```csharp
// Obtain an instance of ImageIdentifierVM from the subsystem API first
ImageIdentifierVM imageIdentifierVM = ...;
imageIdentifierVM.OnFinalize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ImageIdentifierVM instance = ...;
```

## See Also

- [Area Index](../)