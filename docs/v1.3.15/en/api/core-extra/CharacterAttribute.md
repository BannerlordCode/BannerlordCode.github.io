
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterAttribute`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterAttribute

**Namespace:** TaleWorlds.Core  
**Module:** TaleWorlds.Core  
**Type:** class (inherits `PropertyObject`)  
**File:** `bannerlord-1.3.15/TaleWorlds.Core/CharacterAttribute.cs`

`CharacterAttribute` represents a character attribute (Vigour, Control, Endurance, Cunning, Social, Intelligence). Attributes gate spendable points and are tied to several skills.

## Overview

Mods usually reference existing attributes via the `DefaultAttributes` static fields (e.g. `DefaultAttributes.Vigour`). Read a hero's attribute level with `Hero.GetAttributeValue(attr)`; spend an attribute point with `HeroDeveloper.AddAttribute(attr, amount)`.

## Mental Model

Treat `CharacterAttribute` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Main properties

| Name | Type | Description |
|------|------|-------------|
| Abbreviation | TextObject | Attribute abbreviation (get-only) |

## Initialize

```csharp
public void Initialize(TextObject name, TextObject description, TextObject abbreviation)
```

Sets name, description, and abbreviation when defining an attribute.

## Usage example

```csharp
// Read a hero's attribute level
CharacterAttribute vigour = DefaultAttributes.Vigour;
int level = hero.GetAttributeValue(vigour);

// Spend an attribute point (via HeroDeveloper)
hero.HeroDeveloper.AddAttribute(vigour, 1);
```

## See also

- [SkillObject](./SkillObject.md)
- [HeroDeveloper](../campaign-ext/HeroDeveloper.md)
- [Hero](../campaign/Hero.md)

## Usage Example

```csharp
var example = new CharacterAttribute();
```
