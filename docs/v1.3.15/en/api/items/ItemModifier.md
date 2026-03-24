# ItemModifier

**Namespace**: TaleWorlds.Core  
**File**: `bannerlord-1.3.15/TaleWorlds.Core/ItemModifier.cs`  
**Purpose**: Item quality modifier that adjusts item attribute values (damage, armor, etc.)

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| Name | TextObject | Modifier name |
| Damage | int | Damage adjustment value |
| Speed | int | Speed adjustment value |
| MissileSpeed | int | Missile speed adjustment value |
| Armor | int | Armor adjustment value |
| HitPoints | short | Hit points adjustment value |
| StackCount | short | Stack count adjustment |
| MountSpeed | float | Horse speed multiplier |
| Maneuver | float | Horse maneuverability multiplier |
| ChargeDamage | float | Charge damage multiplier |
| MountHitPoints | float | Horse hit points multiplier |
| PriceMultiplier | float | Price multiplier |
| ItemQuality | ItemQuality | Item quality level |

## Item Quality

```csharp
public enum ItemQuality
{
    Common,
    Inferior,
    Poor,
    Fine,
    Masterwork,
    Legendary
}
```

## Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| ModifyDamage | `int ModifyDamage(int baseDamage)` | Apply damage modification |
| ModifySpeed | `int ModifySpeed(int baseSpeed)` | Apply speed modification |
| ModifyMissileSpeed | `int ModifyMissileSpeed(int baseSpeed)` | Apply missile speed modification |
| ModifyArmor | `int ModifyArmor(int armorValue)` | Apply armor modification |
| ModifyHitPoints | `short ModifyHitPoints(short baseHitPoints)` | Apply hit points modification |
| ModifyMountSpeed | `int ModifyMountSpeed(int baseSpeed)` | Apply horse speed modification |
| ModifyMountManeuver | `int ModifyMountManeuver(int baseManeuver)` | Apply horse maneuver modification |
| ModifyMountCharge | `int ModifyMountCharge(int baseCharge)` | Apply charge damage modification |
| ModifyMountHitPoints | `int ModifyMountHitPoints(int baseCharge)` | Apply horse hit points modification |

## Usage Example

```csharp
// Get an item modifier
ItemModifier modifier = MBObjectManager.Instance.GetObject<ItemModifier>("fine");

// Apply modification to base damage
int baseDamage = 50;
int modifiedDamage = modifier.ModifyDamage(baseDamage);

// Apply modification to armor
int baseArmor = 100;
int modifiedArmor = modifier.ModifyArmor(baseArmor);

// Check quality level
if (modifier.ItemQuality == ItemQuality.Masterwork)
{
    // Handle masterwork quality
}

// Get price multiplier
float priceMultiplier = modifier.PriceMultiplier;
int finalPrice = (int)(basePrice * priceMultiplier);
```

## Modifier Groups

ItemModifiers typically belong to an ItemModifierGroup, used for randomly generating item qualities in the game.

```csharp
// Get modifier group
ItemModifierGroup group = MBObjectManager.Instance.GetObject<ItemModifierGroup>("weapon_modifiers");

// Get random modifier from group
ItemModifier randomModifier = group.GetRandomModifier();
```
