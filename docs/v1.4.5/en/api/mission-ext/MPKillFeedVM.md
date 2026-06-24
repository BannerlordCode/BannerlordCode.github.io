<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MPKillFeedVM`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MPKillFeedVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPKillFeedVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed/MPKillFeedVM.cs`

## Overview

`MPKillFeedVM` lives in `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.KillFeed` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `GeneralCasualty` | `public MPGeneralKillNotificationVM GeneralCasualty { get; set; }` |
| `PersonalCasualty` | `public MPPersonalKillNotificationVM PersonalCasualty { get; set; }` |

## Key Methods

### OnAgentRemoved
`public void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, bool isPersonalFeedEnabled)`

**Purpose:** Called when the `agent removed` event is raised.

### OnPersonalDamage
`public void OnPersonalDamage(int damageAmount, bool isFatal, bool isMountDamage, bool isFriendlyDamage, bool isHeadshot, string killedAgentName)`

**Purpose:** Called when the `personal damage` event is raised.

## Usage Example

```csharp
var value = new MPKillFeedVM();
value.OnAgentRemoved(affectedAgent, affectorAgent, false);
```

## See Also

- [Complete Class Catalog](../catalog)