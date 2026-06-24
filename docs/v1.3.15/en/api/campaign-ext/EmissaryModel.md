<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `EmissaryModel`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# EmissaryModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class EmissaryModel : MBGameModel<EmissaryModel>`
**Base:** `MBGameModel<EmissaryModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/EmissaryModel.cs`

## Overview

`EmissaryModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `EmissaryModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `EmissaryRelationBonusForMainClan` | `public abstract int EmissaryRelationBonusForMainClan { get; }` |

## Key Methods

### IsEmissary
`public abstract bool IsEmissary(Hero hero)`

**Purpose:** Handles logic related to `is emissary`.

## Usage Example

```csharp
var implementation = new CustomEmissaryModel();
```

## See Also

- [Complete Class Catalog](../catalog)