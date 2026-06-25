---
title: "SandBoxGauntletGameNotification"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SandBoxGauntletGameNotification`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SandBoxGauntletGameNotification

**Namespace:** SandBox.GauntletUI
**Module:** SandBox.GauntletUI
**Type:** `public class SandBoxGauntletGameNotification : GauntletGameNotification`
**Base:** `GauntletGameNotification`
**Area:** campaign-ext

## Overview

`SandBoxGauntletGameNotification` lives in `SandBox.GauntletUI`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.GauntletUI` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### Initialize
`public static void Initialize()`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### OnFinalize
`public override void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### RegisterEvents
`public override void RegisterEvents()`

**Purpose:** Handles logic related to `register events`.

### UnregisterEvents
`public override void UnregisterEvents()`

**Purpose:** Handles logic related to `unregister events`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
SandBoxGauntletGameNotification.Initialize();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
