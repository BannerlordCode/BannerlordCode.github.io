<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `GameTextManager`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# GameTextManager

**Namespace:** TaleWorlds.Core
**Module:** TaleWorlds.Core
**Type:** `public class GameTextManager`
**Base:** none
**File:** `TaleWorlds.Core/GameTextManager.cs`

## Overview

`GameTextManager` is a manager (often reached via a Current singleton or Mission.Current). Use it to access/modify its managed subsystem.

## Key Methods

### GetGameText
```csharp
public GameText GetGameText(string id)
```

### AddGameText
```csharp
public GameText AddGameText(string id)
```

### TryGetText
```csharp
public bool TryGetText(string id, string variation, out TextObject text)
```

### FindText
```csharp
public TextObject FindText(string id, string variation = null)
```

### FindAllTextVariations
```csharp
public IEnumerable<TextObject> FindAllTextVariations(string id)
```

### LoadGameTexts
```csharp
public void LoadGameTexts()
```

### LoadDefaultTexts
```csharp
public void LoadDefaultTexts()
```

## Usage Example

```csharp
// Typical usage of GameTextManager (Manager)
GameTextManager.Current;
```

## See Also

- [Complete Class Catalog](../catalog)