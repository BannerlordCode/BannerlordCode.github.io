---
title: "EavesdropSound"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EavesdropSound`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# EavesdropSound

**Namespace:** SandBox.Missions
**Module:** SandBox.Missions
**Type:** `public class EavesdropSound`
**Area:** campaign-ext

## Overview

`EavesdropSound` lives in `SandBox.Missions`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `SandBox.Missions` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
// First obtain a EavesdropSound instance from game state, then call one of its public methods
var value = new EavesdropSound();
value.AfterStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
