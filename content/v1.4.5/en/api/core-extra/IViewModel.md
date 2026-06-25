---
title: "IViewModel"
description: "Auto-generated class reference for IViewModel."
---
# IViewModel

**Namespace:** TaleWorlds.Library
**Module:** TaleWorlds.Library
**Type:** `public interface IViewModel : INotifyPropertyChanged`
**Base:** `INotifyPropertyChanged`
**File:** `bin/TaleWorlds.Library/TaleWorlds.Library/IViewModel.cs`

## Overview

`IViewModel` is a Gauntlet ViewModel — the data-binding bridge between C# logic and UI. Mods typically use it to expose state, commands, and list items to the screen.

## Mental Model

Treat `IViewModel` as a ViewModel-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Usage Example

```csharp
// Usually obtained through DI or a factory method
IIViewModel service = ...;
```

## See Also

- [Area Index](../)