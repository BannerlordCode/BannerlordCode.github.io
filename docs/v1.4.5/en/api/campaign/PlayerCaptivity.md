<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerCaptivity`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerCaptivity`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem/PlayerCaptivity.cs`

## Overview

`PlayerCaptivity` lives in `TaleWorlds.CampaignSystem` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `LastCheckTime` | `public static CampaignTime LastCheckTime { get; set; }` |

## Key Methods

### StartCaptivity
`public static void StartCaptivity(PartyBase captorParty)`

**Purpose:** Handles logic related to `start captivity`.

### OnPlayerCharacterChanged
`public static void OnPlayerCharacterChanged()`

**Purpose:** Called when the `player character changed` event is raised.

### SetRansomAmount
`public void SetRansomAmount()`

**Purpose:** Sets the value or state of `ransom amount`.

### EndCaptivity
`public static void EndCaptivity()`

**Purpose:** Handles logic related to `end captivity`.

## Usage Example

```csharp
PlayerCaptivity.StartCaptivity(captorParty);
```

## See Also

- [Complete Class Catalog](../catalog)