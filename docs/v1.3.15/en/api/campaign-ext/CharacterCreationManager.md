<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterCreationManager`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager`
**Base:** none
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## Overview

`CharacterCreationManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Properties

| Name | Signature |
|------|-----------|
| `NarrativeMenus` | `public MBReadOnlyList<NarrativeMenu> NarrativeMenus { get; }` |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent { get; }` |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu { get; }` |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount { get; }` |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage { get; }` |

## Key Methods

### RegisterCharacterCreationContentHandler
```csharp
public void RegisterCharacterCreationContentHandler(ICharacterCreationContentHandler characterCreationContentHandler, int priority)
```

### AddStage
```csharp
public void AddStage(CharacterCreationStageBase stage)
```

### NextStage
```csharp
public void NextStage()
```

### PreviousStage
```csharp
public void PreviousStage()
```

### GoToStage
```csharp
public void GoToStage(int stageIndex)
```

### GetIndexOfCurrentStage
```csharp
public int GetIndexOfCurrentStage()
```

### GetTotalStagesCount
```csharp
public int GetTotalStagesCount()
```

### GetFurthestIndex
```csharp
public int GetFurthestIndex()
```

### AddNewMenu
```csharp
public void AddNewMenu(NarrativeMenu menu)
```

### GetCurrentMenu
```csharp
public NarrativeMenu GetCurrentMenu(int index)
```

### GetCurrentMenuOptions
```csharp
public IEnumerable<NarrativeMenuOption> GetCurrentMenuOptions(int index)
```

### GetNarrativeMenuWithId
```csharp
public NarrativeMenu GetNarrativeMenuWithId(string stringId)
```

### DeleteNarrativeMenuWithId
```csharp
public void DeleteNarrativeMenuWithId(string stringId)
```

### ResetNarrativeMenus
```csharp
public void ResetNarrativeMenus()
```

### ResetMenuOptions
```csharp
public void ResetMenuOptions()
```

### StartNarrativeStage
```csharp
public void StartNarrativeStage()
```

### TrySwitchToNextMenu
```csharp
public bool TrySwitchToNextMenu()
```

### TrySwitchToPreviousMenu
```csharp
public bool TrySwitchToPreviousMenu()
```

### OnNarrativeMenuOptionSelected
```csharp
public void OnNarrativeMenuOptionSelected(NarrativeMenuOption option)
```

### GetSuitableNarrativeMenuOptions
```csharp
public IEnumerable<NarrativeMenuOption> GetSuitableNarrativeMenuOptions()
```

### ApplyFinalEffects
```csharp
public void ApplyFinalEffects()
```

## Usage Example

```csharp
// Typical usage of CharacterCreationManager (Manager)
CharacterCreationManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)