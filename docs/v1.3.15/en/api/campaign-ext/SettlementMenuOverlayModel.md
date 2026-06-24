<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SettlementMenuOverlayModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SettlementMenuOverlayModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class SettlementMenuOverlayModel : MBGameModel<SettlementMenuOverlayModel>`
**Base:** `MBGameModel<SettlementMenuOverlayModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SettlementMenuOverlayModel.cs`

## Overview

`SettlementMenuOverlayModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `SettlementMenuOverlayModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetOverlayHeroes
`public abstract Dictionary<Hero, bool> GetOverlayHeroes()`

**Purpose:** Gets the current value of `overlay heroes`.

## Usage Example

```csharp
var implementation = new CustomSettlementMenuOverlayModel();
```

## See Also

- [Complete Class Catalog](../catalog)