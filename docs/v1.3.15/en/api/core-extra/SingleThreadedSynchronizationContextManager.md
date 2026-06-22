<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SingleThreadedSynchronizationContextManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SingleThreadedSynchronizationContextManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public static class SingleThreadedSynchronizationContextManager`
**Base:** none
**File:** `TaleWorlds.Library/SingleThreadedSynchronizationContextManager.cs`

## Overview

`SingleThreadedSynchronizationContextManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### Initialize
```csharp
public static void Initialize()
```

### Tick
```csharp
public static void Tick()
```

## Usage Example

```csharp
// Typical usage of SingleThreadedSynchronizationContextManager (Manager)
SingleThreadedSynchronizationContextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)