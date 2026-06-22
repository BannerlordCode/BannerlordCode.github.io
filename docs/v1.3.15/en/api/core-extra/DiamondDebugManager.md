<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DiamondDebugManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DiamondDebugManager

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public class DiamondDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.Library/DiamondDebugManager.cs`

## Overview

`DiamondDebugManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetLogLevel
```csharp
public int GetLogLevel()
```

## Usage Example

```csharp
// Typical usage of DiamondDebugManager (Manager)
DiamondDebugManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)