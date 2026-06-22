<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PartyState`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# PartyState

**Namespace:** TaleWorlds.CampaignSystem.GameState
**Module:** TaleWorlds.CampaignSystem
**Type:** class
**Area:** Campaign System

## Overview

> This is an auto-generated stub. `PartyState` is a class in the `TaleWorlds.CampaignSystem.GameState` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `IsMenuState` | `public override bool IsMenuState { get; set; }` |
| `PartyScreenLogic` | `public PartyScreenLogic PartyScreenLogic { get; set; }` |
| `PartyScreenMode` | `public PartyScreenHelper.PartyScreenMode PartyScreenMode { get; set; }` |
| `IsDonating` | `public bool IsDonating { get; set; }` |
| `Handler` | `public IPartyScreenLogicHandler Handler { get; set; }` |


## Key Methods

### RequestUserInput

```csharp
public void RequestUserInput(string text, Action accept, Action cancel)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-campaign)