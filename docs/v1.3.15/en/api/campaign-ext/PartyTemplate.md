# PartyTemplateObject

**Namespace**: TaleWorlds.CampaignSystem.Party  
**File**: `bannerlord-1.3.15/TaleWorlds.CampaignSystem/Party/PartyTemplateObject.cs`  
**Purpose**: Defines troop composition for mobile parties

## Overview

PartyTemplateObject defines the template for a party's troop composition. It contains stacks of troops with minimum and maximum counts, allowing parties to spawn with variable troop sizes within those bounds.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `Stacks` | `MBList` | Troop stacks in this template |
| `ShipHulls` | `MBList` | Ship hulls for naval parties |

## Key Methods

| Method | Description |
|--------|-------------|
| `GetUpperTroopLimit()` | Get maximum total troop count |
| `GetLowerTroopLimit()` | Get minimum total troop count |

## Usage Example

```csharp
// Get party template
PartyTemplateObject template = party.PartyTemplate;
if (template == null)
{
    return;
}

// Get troop limits
int maxTroops = template.GetUpperTroopLimit();
int minTroops = template.GetLowerTroopLimit();
Debug.Print("Troop range: " + minTroops + " - " + maxTroops);

// Iterate through stacks
foreach (PartyTemplateStack stack in template.Stacks)
{
    CharacterObject troop = stack.Character;
    int minCount = stack.MinValue;
    int maxCount = stack.MaxValue;
    Debug.Print(troop.Name + ": " + minCount + " - " + maxCount);
}

// Get all ship hulls
foreach (ShipTemplateStack hull in template.ShipHulls)
{
    Debug.Print("Ship hull: " + hull.Hull.Name);
}
```

## PartyTemplateStack

| Property | Type | Description |
|----------|------|-------------|
| `Character` | `CharacterObject` | The troop type |
| `MinValue` | `int` | Minimum count |
| `MaxValue` | `int` | Maximum count |

## ShipTemplateStack

| Property | Type | Description |
|----------|------|-------------|
| `Hull` | `ShipHull` | The ship hull type |
| `MinValue` | `int` | Minimum count |
| `MaxValue` | `int` | Maximum count |

## XML Definition

Party templates are defined in XML:

```xml
<PartyTemplate id="my_template">
    <stacks>
        <PartyTemplateStack troop="troop_1" min_value="5" max_value="10"/>
        <PartyTemplateStack troop="troop_2" min_value="3" max_value="7"/>
    </stacks>
    <ship_hulls>
        <ShipTemplateStack hull="hull_1" min_value="0" max_value="1"/>
    </ship_hulls>
</PartyTemplate>
```
