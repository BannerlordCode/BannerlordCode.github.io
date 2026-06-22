<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterRelationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterRelationManager

**Namespace:** TaleWorlds.CampaignSystem
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterRelationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterRelationManager.cs`

## Overview

`CharacterRelationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static CharacterRelationManager Instance { get; }` |

## Key Methods

### GetHeroRelation
```csharp
public static int GetHeroRelation(Hero hero1, Hero hero2)
```

### SetHeroRelation
```csharp
public static void SetHeroRelation(Hero hero1, Hero hero2, int value)
```

### AfterLoad
```csharp
public void AfterLoad()
```

### RemoveHero
```csharp
public void RemoveHero(Hero deadHero)
```

### GetRelation
```csharp
public int GetRelation(Hero hero1, Hero hero2)
```

### SetRelation
```csharp
public void SetRelation(Hero hero1, Hero hero2, int value)
```

### Remove
```csharp
public void Remove(Hero hero)
```

### ClearOldData
```csharp
public void ClearOldData()
```

## Usage Example

```csharp
// Typical usage of CharacterRelationManager (Manager)
CharacterRelationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)