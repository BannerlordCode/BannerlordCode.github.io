---
title: "CharacterWithActionViewModel"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CharacterWithActionViewModel`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CharacterWithActionViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterWithActionViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/CharacterWithActionViewModel.cs`

## Overview

`CharacterWithActionViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `CharacterWithActionViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
var vm = new CharacterWithActionViewModel();
movie.SetViewModel(vm);
```

## See Also

- [Complete Class Catalog](../catalog)