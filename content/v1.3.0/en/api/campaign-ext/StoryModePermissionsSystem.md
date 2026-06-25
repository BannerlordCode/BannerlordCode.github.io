---
title: "StoryModePermissionsSystem"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `StoryModePermissionsSystem`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# StoryModePermissionsSystem

**Namespace:** StoryMode.View.Permissions
**Module:** StoryMode.View
**Type:** `public class StoryModePermissionsSystem`
**Base:** none
**File:** `StoryMode.View/Permissions/StoryModePermissionsSystem.cs`

## Overview

`StoryModePermissionsSystem` lives in `StoryMode.View.Permissions` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `StoryMode.View.Permissions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnInitialize
`public static void OnInitialize()`

**Purpose:** Called when the `initialize` event is raised.

## Usage Example

```csharp
StoryModePermissionsSystem.OnInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)