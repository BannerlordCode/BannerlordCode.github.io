---
title: "MetaDataExtensions"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MetaDataExtensions`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MetaDataExtensions

**Namespace:** StoryMode.Extensions
**Module:** StoryMode.Extensions
**Type:** `public static class MetaDataExtensions`
**Base:** none
**File:** `StoryMode/Extensions/MetaDataExtensions.cs`

## Overview

`MetaDataExtensions` lives in `StoryMode.Extensions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.Extensions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### HasStoryMode
`public static bool HasStoryMode(this MetaData metaData)`

**Purpose:** Checks whether the current object has/contains `story mode`.

## Usage Example

```csharp
MetaDataExtensions.HasStoryMode(metaData);
```

## See Also

- [Complete Class Catalog](../catalog)