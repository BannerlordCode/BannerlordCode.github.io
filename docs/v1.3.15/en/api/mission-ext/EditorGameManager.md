<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EditorGameManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EditorGameManager

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class EditorGameManager : MBGameManager`
**Base:** `MBGameManager`
**File:** `TaleWorlds.MountAndBlade/EditorGameManager.cs`

## Overview

`EditorGameManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### OnAfterCampaignStart
```csharp
public override void OnAfterCampaignStart(Game game)
```

### OnLoadFinished
```csharp
public override void OnLoadFinished()
```

## Usage Example

```csharp
// Typical usage of EditorGameManager (Manager)
EditorGameManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)