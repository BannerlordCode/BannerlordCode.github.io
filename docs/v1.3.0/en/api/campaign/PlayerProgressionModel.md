<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `PlayerProgressionModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# PlayerProgressionModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class PlayerProgressionModel : MBGameModel<PlayerProgressionModel>`
**Base:** `MBGameModel<PlayerProgressionModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/PlayerProgressionModel.cs`

## Overview

`PlayerProgressionModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `PlayerProgressionModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### GetPlayerProgress
`public abstract float GetPlayerProgress()`

**Purpose:** Gets the current value of `player progress`.

## Usage Example

```csharp
var implementation = new CustomPlayerProgressionModel();
```

## See Also

- [Complete Class Catalog](../catalog)