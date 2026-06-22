<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MBDebugManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MBDebugManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MBDebugManager : IDebugManager`
**Base:** `IDebugManager`
**File:** `TaleWorlds.MountAndBlade/MBDebugManager.cs`

## Overview

`MBDebugManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Usage Example

```csharp
// Typical usage of MBDebugManager (Manager)
MBDebugManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)