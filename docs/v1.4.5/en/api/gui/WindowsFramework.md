<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `WindowsFramework`
- [← Area / Back to gui](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# WindowsFramework

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsFramework`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs`

## Overview

`WindowsFramework` lives in `TaleWorlds.TwoDimension.Standalone` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.TwoDimension.Standalone` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `ThreadConfig` | `public WindowsFrameworkThreadConfig ThreadConfig { get; set; }` |

## Key Methods

### Initialize
`public void Initialize(FrameworkDomain frameworkDomains)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### RegisterMessageCommunicator
`public void RegisterMessageCommunicator(IMessageCommunicator communicator)`

**Purpose:** Handles logic related to `register message communicator`.

### UnRegisterMessageCommunicator
`public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)`

**Purpose:** Handles logic related to `un register message communicator`.

### Stop
`public void Stop()`

**Purpose:** Handles logic related to `stop`.

### OnFinalize
`public void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

### Start
`public void Start()`

**Purpose:** Handles logic related to `start`.

## Usage Example

```csharp
var value = new WindowsFramework();
value.Initialize(frameworkDomains);
```

## See Also

- [Complete Class Catalog](../catalog)