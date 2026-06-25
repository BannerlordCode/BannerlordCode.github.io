---
title: "CharacterWithActionViewModel"
description: "Auto-generated class reference for CharacterWithActionViewModel."
---
# CharacterWithActionViewModel

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class CharacterWithActionViewModel : CharacterViewModel`
**Base:** `CharacterViewModel`
**File:** `bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/CharacterWithActionViewModel.cs`

## Overview

`CharacterWithActionViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `CharacterWithActionViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Bind the instance as the view-model of a movie or view
CharacterWithActionViewModel vm = ...;
movie.SetViewModel(vm);
```

## See Also

- [Area Index](../)