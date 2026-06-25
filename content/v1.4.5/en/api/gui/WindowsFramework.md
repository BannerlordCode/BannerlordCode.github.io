---
title: "WindowsFramework"
description: "Auto-generated class reference for WindowsFramework."
---
# WindowsFramework

**Namespace:** TaleWorlds.TwoDimension.Standalone
**Module:** TaleWorlds.TwoDimension
**Type:** `public class WindowsFramework`
**Base:** none
**File:** `bin/TaleWorlds.TwoDimension.Standalone/TaleWorlds.TwoDimension.Standalone/WindowsFramework.cs`

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

**Purpose:** Prepares the resources, state, or bindings the this instance needs before use.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.Initialize(frameworkDomains);
```

### RegisterMessageCommunicator
`public void RegisterMessageCommunicator(IMessageCommunicator communicator)`

**Purpose:** Registers message communicator with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.RegisterMessageCommunicator(communicator);
```

### UnRegisterMessageCommunicator
`public void UnRegisterMessageCommunicator(IMessageCommunicator communicator)`

**Purpose:** Executes the UnRegisterMessageCommunicator logic.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.UnRegisterMessageCommunicator(communicator);
```

### Stop
`public void Stop()`

**Purpose:** Stops the this instance's flow or state machine.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.Stop();
```

### OnFinalize
`public void OnFinalize()`

**Purpose:** Invoked when the finalize event is raised.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.OnFinalize();
```

### Start
`public void Start()`

**Purpose:** Starts the this instance's flow or state machine.

```csharp
// Obtain an instance of WindowsFramework from the subsystem API first
WindowsFramework windowsFramework = ...;
windowsFramework.Start();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
WindowsFramework windowsFramework = ...;
windowsFramework.Initialize(frameworkDomains);
```

## See Also

- [Area Index](../)