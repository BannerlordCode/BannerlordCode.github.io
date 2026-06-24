<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `DefaultCampaignOptionsProvider`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# DefaultCampaignOptionsProvider

**Namespace:** TaleWorlds.CampaignSystem.ViewModelCollection
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class DefaultCampaignOptionsProvider : ICampaignOptionProvider`
**Base:** `ICampaignOptionProvider`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/DefaultCampaignOptionsProvider.cs`

## Overview

`DefaultCampaignOptionsProvider` lives in `TaleWorlds.CampaignSystem.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.CampaignSystem.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### GetGameplayCampaignOptions
`public IEnumerable<ICampaignOptionData> GetGameplayCampaignOptions()`

**Purpose:** Gets the current value of `gameplay campaign options`.

### GetCharacterCreationCampaignOptions
`public IEnumerable<ICampaignOptionData> GetCharacterCreationCampaignOptions()`

**Purpose:** Gets the current value of `character creation campaign options`.

## Usage Example

```csharp
var value = new DefaultCampaignOptionsProvider();
value.GetGameplayCampaignOptions();
```

## See Also

- [Complete Class Catalog](../catalog)