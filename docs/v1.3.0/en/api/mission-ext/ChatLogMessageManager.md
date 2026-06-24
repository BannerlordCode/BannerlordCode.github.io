<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ChatLogMessageManager`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ChatLogMessageManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ChatLogMessageManager : MessageManagerBase`
**Base:** `MessageManagerBase`
**File:** `TaleWorlds.MountAndBlade.GauntletUI/ChatLogMessageManager.cs`

## Overview

`ChatLogMessageManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `ChatLogMessageManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### Update
`public void Update()`

**Purpose:** Updates the state or data of `update`.

## Usage Example

```csharp
var manager = ChatLogMessageManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)