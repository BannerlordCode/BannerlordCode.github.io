<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `ExecutionRelationModel`
- [← Area / Back to campaign](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# ExecutionRelationModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class ExecutionRelationModel : MBGameModel<ExecutionRelationModel>`
**Base:** `MBGameModel<ExecutionRelationModel>`
**File:** `Bannerlord.Source/bin/TaleWorlds.CampaignSystem/TaleWorlds.CampaignSystem.ComponentInterfaces/ExecutionRelationModel.cs`

## Overview

`ExecutionRelationModel` is a rule model that usually defines how a subsystem should compute things. Modders most often customize behavior by replacing or subclassing it.

## Mental Model

Treat `ExecutionRelationModel` as a Model-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `HeroKillingHeroClanRelationPenalty` | `public abstract int HeroKillingHeroClanRelationPenalty { get; }` |
| `HeroKillingHeroFriendRelationPenalty` | `public abstract int HeroKillingHeroFriendRelationPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFactionRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroClanRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroClanRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroFriendRelationPenaltyDishonorable` | `public abstract int PlayerExecutingHeroFriendRelationPenaltyDishonorable { get; }` |
| `PlayerExecutingHeroHonorPenalty` | `public abstract int PlayerExecutingHeroHonorPenalty { get; }` |
| `PlayerExecutingHeroFactionRelationPenalty` | `public abstract int PlayerExecutingHeroFactionRelationPenalty { get; }` |
| `PlayerExecutingHeroHonorableNobleRelationPenalty` | `public abstract int PlayerExecutingHeroHonorableNobleRelationPenalty { get; }` |
| `PlayerExecutingHeroClanRelationPenalty` | `public abstract int PlayerExecutingHeroClanRelationPenalty { get; }` |
| `PlayerExecutingHeroFriendRelationPenalty` | `public abstract int PlayerExecutingHeroFriendRelationPenalty { get; }` |

## Key Methods

### GetRelationChangeForExecutingHero
`public abstract int GetRelationChangeForExecutingHero(Hero victim, Hero hero, out bool showQuickNotification)`

**Purpose:** Gets the current value of `relation change for executing hero`.

## Usage Example

```csharp
var implementation = new CustomExecutionRelationModel();
```

## See Also

- [Complete Class Catalog](../catalog)