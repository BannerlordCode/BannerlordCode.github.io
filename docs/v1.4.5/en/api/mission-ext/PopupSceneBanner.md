<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PopupSceneBanner`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PopupSceneBanner

**Namespace:** TaleWorlds.MountAndBlade.View.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class PopupSceneBanner : ScriptComponentBehavior`
**Base:** `ScriptComponentBehavior`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.SceneNotification/PopupSceneBanner.cs`

## Overview

`PopupSceneBanner` lives in `TaleWorlds.MountAndBlade.View.SceneNotification` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.View.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new PopupSceneBanner();
```

## See Also

- [Complete Class Catalog](../catalog)