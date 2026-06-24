
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `TraitObject`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# TraitObject

**Namespace:** TaleWorlds.CampaignSystem.CharacterDevelopment  
**Module:** TaleWorlds.CampaignSystem  
**Type:** sealed class (inherits `PropertyObject`)  
**File:** `bannerlord-1.3.15/TaleWorlds.CampaignSystem/CharacterDevelopment/TraitObject.cs`

`TraitObject` represents a character trait (e.g. Valor, Mercy, Calculating) whose value lies in a `[MinValue, MaxValue]` range; the level affects character behavior and interpersonal relations.

## Overview

Mods usually reference existing traits via the `DefaultTraits` static fields, or enumerate all with `TraitObject.All`. Read/write a hero's trait level with `Hero.GetTraitLevel(trait)` / `Hero.SetTraitLevel(trait, value)`.

## Mental Model

Treat `TraitObject` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| All | `MBReadOnlyList<TraitObject>` | Static; all traits (from `Campaign.Current.AllTraits`) |
| MinValue | int | Minimum level |
| MaxValue | int | Maximum level |
| IsHidden | bool | Whether hidden from the player |

## Initialize

```csharp
public void Initialize(TextObject name, TextObject description, bool isHidden, int minValue, int maxValue)
```

Sets name, description, hidden flag, and level bounds when defining a trait.

## Usage example

```csharp
// Read and set a hero's trait level
TraitObject valor = DefaultTraits.Valor;
int level = hero.GetTraitLevel(valor);   // read
hero.SetTraitLevel(valor, level + 1);    // raise

// Enumerate all non-hidden traits
foreach (TraitObject t in TraitObject.All)
{
    if (!t.IsHidden)
        Debug.Print($"{t.Name}: range [{t.MinValue}, {t.MaxValue}]");
}
```

## See also

- [Hero](../campaign/Hero.md)
- [PerkObject](./PerkObject.md)
- [Campaign](./Campaign.md)

## Usage Example

```csharp
var example = new TraitObject();
```
