<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleCombatant`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CustomBattleCombatant

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `CustomBattleCombatant` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `Name` | `public TextObject Name { get; }` |
| `Side` | `public BattleSideEnum Side { get; }` |
| `General` | `public BasicCharacterObject General { get; }` |
| `BasicCulture` | `public BasicCultureObject BasicCulture { get; }` |
| `PrimaryColorPair` | `public Tuple<uint, uint> PrimaryColorPair { get; }` |
| `AlternativeColorPair` | `public Tuple<uint, uint> AlternativeColorPair { get; }` |
| `Banner` | `public Banner Banner { get; }` |
| `Characters` | `public IEnumerable<BasicCharacterObject> Characters { get; }` |
| `CountOfCharacters` | `public int CountOfCharacters { get; }` |
| `NumberOfAllMembers` | `public int NumberOfAllMembers { get; }` |
| `NumberOfHealthyMembers` | `public int NumberOfHealthyMembers { get; }` |


## Key Methods

### GetTacticsSkillAmount

```csharp
public int GetTacticsSkillAmount()
```

### AddCharacter

```csharp
public void AddCharacter(BasicCharacterObject characterObject, int number)
```

### SetGeneral

```csharp
public void SetGeneral(BasicCharacterObject generalCharacter)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)