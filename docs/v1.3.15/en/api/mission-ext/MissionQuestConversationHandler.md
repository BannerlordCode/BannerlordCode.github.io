<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionQuestConversationHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MissionQuestConversationHandler

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionQuestConversationHandler : MissionLogic`
**Base:** `MissionLogic`
**File:** `TaleWorlds.MountAndBlade/MissionQuestConversationHandler.cs`

## Overview

`MissionQuestConversationHandler` is a mission handler (reaction logic). Add via AddMissionBehavior; it reacts to specific mission events.

## Key Methods

### OnMissionTick
```csharp
public override void OnMissionTick(float dt)
```

## Usage Example

```csharp
// Typical usage of MissionQuestConversationHandler (Handler)
Mission.Current.AddMissionBehavior(new MissionQuestConversationHandler());
```

## See Also

- [Complete Class Catalog](../catalog)