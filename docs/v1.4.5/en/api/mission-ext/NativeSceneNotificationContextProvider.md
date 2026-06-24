<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `NativeSceneNotificationContextProvider`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# NativeSceneNotificationContextProvider

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.SceneNotification
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class NativeSceneNotificationContextProvider : ISceneNotificationContextProvider`
**Base:** `ISceneNotificationContextProvider`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.SceneNotification/NativeSceneNotificationContextProvider.cs`

## Overview

`NativeSceneNotificationContextProvider` lives in `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.SceneNotification` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### IsContextAllowed
`public bool IsContextAllowed(RelevantContextType relevantType)`

**Purpose:** Handles logic related to `is context allowed`.

## Usage Example

```csharp
var value = new NativeSceneNotificationContextProvider();
value.IsContextAllowed(relevantType);
```

## See Also

- [Complete Class Catalog](../catalog)