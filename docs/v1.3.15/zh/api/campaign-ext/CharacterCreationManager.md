<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `CharacterCreationManager`
- [← 本领域 / 返回 campaign-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# CharacterCreationManager

**Namespace:** TaleWorlds.CampaignSystem.CharacterCreationContent
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class CharacterCreationManager`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/CharacterCreationContent/CharacterCreationManager.cs`

## 概述

`CharacterCreationManager` 是一个管理器（通常经 Current 单例或 Mission.Current 访问）。用它访问/修改其管理的子系统。

## 主要属性

| Name | Signature |
|------|-----------|
| `NarrativeMenus` | `public MBReadOnlyList<NarrativeMenu> NarrativeMenus { get; }` |
| `CharacterCreationContent` | `public CharacterCreationContent CharacterCreationContent { get; }` |
| `CurrentMenu` | `public NarrativeMenu CurrentMenu { get; }` |
| `CharacterCreationMenuCount` | `public int CharacterCreationMenuCount { get; }` |
| `CurrentStage` | `public CharacterCreationStageBase CurrentStage { get; }` |

## 主要方法

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

## 使用示例

```csharp
// CharacterCreationManager (Manager) 的典型用法
CharacterCreationManager.Current;
```

## 参见

- [完整类目录](../catalog)