---
title: "StoryModePermissionsSystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModePermissionsSystem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePermissionsSystem

**Namespace:** StoryMode.View.Permissions
**Module:** StoryMode.View
**Type:** `public class StoryModePermissionsSystem`
**Area:** campaign-ext

## Overview

`StoryModePermissionsSystem` lives in `StoryMode.View.Permissions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `StoryMode.View.Permissions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
StoryModePermissionsSystem.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
