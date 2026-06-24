<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `IGameMenuOverlayProvider`
- [← Area / Back to viewmodel](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# IGameMenuOverlayProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `class`
**Base:** none
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay/IGameMenuOverlayProvider.cs`

## Overview

`IGameMenuOverlayProvider` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
IGameMenuOverlayProvider implementation = GetGameMenuOverlayProviderImplementation();
```

## See Also

- [Complete Class Catalog](../catalog)