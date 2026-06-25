---
title: "StoryModeHelpers"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModeHelpers`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModeHelpers

**Namespace:** StoryMode
**Module:** StoryMode
**Type:** `public static class StoryModeHelpers`
**Area:** campaign-ext

## Overview

`StoryModeHelpers` lives in `StoryMode`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SetPlayerSiblingsSkillsIfNeeded
`public static void SetPlayerSiblingsSkillsIfNeeded(Hero hero)`

**Purpose:** Sets the value or state of `player siblings skills if needed`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StoryModeHelpers.SetPlayerSiblingsSkillsIfNeeded(hero);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
