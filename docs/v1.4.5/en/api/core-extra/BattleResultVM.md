<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleResultVM`
- [← Area / Back to core-extra](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleResultVM

**Namespace:** TaleWorlds.Core.ViewModelCollection
**Module:** TaleWorlds.Core
**Type:** `public class BattleResultVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.Core.ViewModelCollection/TaleWorlds.Core.ViewModelCollection/BattleResultVM.cs`

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
var example = new BattleResultVM();
```

## See Also

- [Complete Class Catalog](../catalog)