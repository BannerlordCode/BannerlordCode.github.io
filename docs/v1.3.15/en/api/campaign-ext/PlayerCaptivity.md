<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerCaptivity`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PlayerCaptivity

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class PlayerCaptivity`
**Area:** campaign-ext

## Overview

`PlayerCaptivity` lives in `TaleWorlds.CampaignSystem`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `CaptorParty` | `public static PartyBase CaptorParty { get; set; }` |
| `RandomNumber` | `public static float RandomNumber { get; set; }` |
| `IsCaptive` | `public static bool IsCaptive { get; }` |
| `CaptiveTimeInDays` | `public static int CaptiveTimeInDays { get; }` |
| `CaptivityStartTime` | `public static CampaignTime CaptivityStartTime { get; }` |
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
// Prepare the required context, then call the static entry point directly
PlayerCaptivity.StartCaptivity(captorParty);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)
