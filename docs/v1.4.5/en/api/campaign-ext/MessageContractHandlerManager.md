<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MessageContractHandlerManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MessageContractHandlerManager

**Namespace:** TaleWorlds.Network
**Module:** TaleWorlds.Network
**Type:** `public class MessageContractHandlerManager`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.Network/TaleWorlds.Network/MessageContractHandlerManager.cs`

## Overview

`MessageContractHandlerManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MessageContractHandlerManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### HandleMessage
`public void HandleMessage(MessageContract messageContract)`

**Purpose:** Handles the `message` event or callback.

### HandleNetworkMessage
`public void HandleNetworkMessage(NetworkMessage networkMessage)`

**Purpose:** Handles the `network message` event or callback.

### ContainsMessageHandler
`public bool ContainsMessageHandler(byte id)`

**Purpose:** Handles logic related to `contains message handler`.

## Usage Example

```csharp
var manager = MessageContractHandlerManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)