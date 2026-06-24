<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `QualificationMode`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# QualificationMode

**Namespace:** TaleWorlds.CampaignSystem.TournamentGames
**Module:** TaleWorlds.CampaignSystem
**Type:** `public enum QualificationMode`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/TournamentGames/TournamentGame.cs`

## Overview

`QualificationMode` lives in `TaleWorlds.CampaignSystem.TournamentGames` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.TournamentGames` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
QualificationMode example = QualificationMode.Value;
```

## See Also

- [Complete Class Catalog](../catalog)