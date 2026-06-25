---
title: "BattleResultVM"
description: "Auto-generated class reference for BattleResultVM."
---
# BattleResultVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class BattleResultVM : ViewModel`
**Base:** `ViewModel`
**File:** `TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs`

## Overview

`BattleResultVM` lives in `TaleWorlds.Core.ViewModelCollection` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.Core.ViewModelCollection` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Text` | `public string Text { get; set; }` |
| `Hint` | `public BasicTooltipViewModel Hint { get; set; }` |
| `DeadLordPortrait` | `public CharacterImageIdentifierVM DeadLordPortrait { get; set; }` |
| `DeadLordClanBanner` | `public BannerImageIdentifierVM DeadLordClanBanner { get; set; }` |

## Usage Example

```csharp
// Obtain an instance from the relevant subsystem API
BattleResultVM instance = ...;
```

## See Also

- [Area Index](../)