<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentStatusUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentStatusUIHandler

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentStatusUIHandler : MissionBattleUIBaseView, IInteractionInterfaceHandler`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentStatusUIHandler.cs`

## Overview

`MissionAgentStatusUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionAgentStatusUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AddInteractionMessage
`public virtual void AddInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Adds `interaction message` to the current collection or state.

### RemoveInteractionMessage
`public virtual void RemoveInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Removes `interaction message` from the current collection or state.

### HasInteractionMessage
`public virtual bool HasInteractionMessage(MissionInteractionItemBaseVM message)`

**Purpose:** Checks whether the current object has/contains `interaction message`.

## Usage Example

```csharp
MissionAgentStatusUIHandler implementation = GetMissionAgentStatusUIHandlerImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)