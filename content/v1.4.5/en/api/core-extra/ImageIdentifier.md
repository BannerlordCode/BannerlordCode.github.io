---
title: "ImageIdentifier"
description: "Auto-generated class reference for ImageIdentifier."
---
# ImageIdentifier

**Namespace:** TaleWorlds.Core.ImageIdentifiers
**Module:** TaleWorlds.Core
**Type:** `public abstract class ImageIdentifier`
**Base:** none
**File:** `bin/TaleWorlds.Core/TaleWorlds.Core.ImageIdentifiers/ImageIdentifier.cs`

## Overview

`ImageIdentifier` lives in `TaleWorlds.Core.ImageIdentifiers` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ImageIdentifiers` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Id` | `public string Id { get; set; }` |
| `TextureProviderName` | `public string TextureProviderName { get; set; }` |
| `AdditionalArgs` | `public string AdditionalArgs { get; set; }` |

## Key Methods

### Equals
`public bool Equals(ImageIdentifier other)`

**Purpose:** **Purpose:** Compares the this instance with the supplied instance for equality.

```csharp
// Obtain an instance of ImageIdentifier from the subsystem API first
ImageIdentifier imageIdentifier = ...;
var result = imageIdentifier.Equals(other);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
ImageIdentifier instance = ...;
```

## See Also

- [Area Index](../)