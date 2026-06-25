---
title: "IAchievementChangeListener"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IAchievementChangeListener`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IAchievementChangeListener

**Namespace:** Galaxy.Api
**Module:** Galaxy.Api
**Type:** `public abstract class IAchievementChangeListener : GalaxyTypeAwareListenerAchievementChange`
**Base:** `GalaxyTypeAwareListenerAchievementChange`
**File:** `Bannerlord.Source/bin/GalaxyCSharp/Galaxy.Api/IAchievementChangeListener.cs`

## Overview

`IAchievementChangeListener` lives in `Galaxy.Api` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Galaxy.Api` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### SwigDelegateIAchievementChangeListener_0
`public delegate void SwigDelegateIAchievementChangeListener_0(IntPtr cPtr, string name)`

**Purpose:** Handles logic related to `swig delegate i achievement change listener_0`.

### Dispose
`public override void Dispose()`

**Purpose:** Handles logic related to `dispose`.

### OnAchievementUnlocked
`public abstract void OnAchievementUnlocked(string name)`

**Purpose:** Called when the `achievement unlocked` event is raised.

## Usage Example

```csharp
var implementation = new CustomIAchievementChangeListener();
```

## See Also

- [Complete Class Catalog](../catalog)