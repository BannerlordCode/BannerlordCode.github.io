<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `AgentData`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# AgentData

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class AgentData`
**Base:** none
**File:** `TaleWorlds.Core/AgentData.cs`

## Overview

`AgentData` is a data struct/DTO holding structured fields. Construct it to pass or serialize data.

## Key Methods

### Character
```csharp
public AgentData Character(BasicCharacterObject characterObject)
```

### Monster
```csharp
public AgentData Monster(Monster monster)
```

### OwnerParty
```csharp
public AgentData OwnerParty(IBattleCombatant owner)
```

### Equipment
```csharp
public AgentData Equipment(Equipment equipment)
```

### EquipmentSeed
```csharp
public AgentData EquipmentSeed(int seed)
```

### NoHorses
```csharp
public AgentData NoHorses(bool noHorses)
```

### NoWeapons
```csharp
public AgentData NoWeapons(bool noWeapons)
```

### NoArmor
```csharp
public AgentData NoArmor(bool noArmor)
```

### FixedEquipment
```csharp
public AgentData FixedEquipment(bool fixedEquipment)
```

### CivilianEquipment
```csharp
public AgentData CivilianEquipment(bool civilianEquipment)
```

### SetPrepareImmediately
```csharp
public AgentData SetPrepareImmediately()
```

### ClothingColor1
```csharp
public AgentData ClothingColor1(uint color)
```

### ClothingColor2
```csharp
public AgentData ClothingColor2(uint color)
```

### BodyProperties
```csharp
public AgentData BodyProperties(BodyProperties bodyProperties)
```

### Age
```csharp
public AgentData Age(int age)
```

### TroopOrigin
```csharp
public AgentData TroopOrigin(IAgentOriginBase troopOrigin)
```

### IsFemale
```csharp
public AgentData IsFemale(bool isFemale)
```

### Race
```csharp
public AgentData Race(int race)
```

### MountKey
```csharp
public AgentData MountKey(string mountKey)
```

## Usage Example

```csharp
// Typical usage of AgentData (Data)
new AgentData { /* fill fields */ };;
```

## See Also

- [Complete Class Catalog](../catalog)