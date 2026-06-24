<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MenuOverlay`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# MenuOverlay

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class MenuOverlay : Attribute`
**Base:** `Attribute`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/GameMenu/Overlay/MenuOverlay.cs`

## Overview

`MenuOverlay` lives in `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection.GameMenu.Overlay` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Usage Example

```csharp
var value = new MenuOverlay();
```

## See Also

- [Complete Class Catalog](../catalog)