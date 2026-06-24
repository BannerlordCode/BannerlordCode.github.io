<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TestCommonBase`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# TestCommonBase

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public abstract class TestCommonBase`
**Base:** none
**File:** `TaleWorlds.Library/TestCommonBase.cs`

## Overview

`TestCommonBase` lives in `TaleWorlds.Library` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Library` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BaseInstance` | `public static TestCommonBase BaseInstance { get; }` |

## Key Methods

### Tick
`public abstract void Tick()`

**Purpose:** Handles logic related to `tick`.

### StartTimeoutTimer
`public void StartTimeoutTimer()`

**Purpose:** Handles logic related to `start timeout timer`.

### ToggleTimeoutTimer
`public void ToggleTimeoutTimer()`

**Purpose:** Handles logic related to `toggle timeout timer`.

### CheckTimeoutTimer
`public bool CheckTimeoutTimer()`

**Purpose:** Handles logic related to `check timeout timer`.

### GetGameStatus
`public virtual string GetGameStatus()`

**Purpose:** Gets the current value of `game status`.

### WaitFor
`public void WaitFor(double seconds)`

**Purpose:** Handles logic related to `wait for`.

### WaitUntil
`public virtual async Task WaitUntil(Func<bool> func)`

**Purpose:** Handles logic related to `wait until`.

### WaitForAsync
`public Task WaitForAsync(double seconds, Random random)`

**Purpose:** Handles logic related to `wait for async`.

### WaitForAsync
`public Task WaitForAsync(double seconds)`

**Purpose:** Handles logic related to `wait for async`.

### GetAttachmentsFolderPath
`public static string GetAttachmentsFolderPath()`

**Purpose:** Gets the current value of `attachments folder path`.

### OnFinalize
`public virtual void OnFinalize()`

**Purpose:** Called when the `finalize` event is raised.

## Usage Example

```csharp
var implementation = new CustomTestCommonBase();
```

## See Also

- [Complete Class Catalog](../catalog)