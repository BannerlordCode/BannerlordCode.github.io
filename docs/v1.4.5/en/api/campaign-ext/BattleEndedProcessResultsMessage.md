<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BattleEndedProcessResultsMessage`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BattleEndedProcessResultsMessage

**Namespace:** Messages.BattleServerManager.BattleServerManager
**Module:** Messages.BattleServerManager
**Type:** `public class BattleEndedProcessResultsMessage : Message`
**Base:** `Message`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.Diamond/Messages.BattleServerManager.BattleServerManager/BattleEndedProcessResultsMessage.cs`

## Overview

`BattleEndedProcessResultsMessage` lives in `Messages.BattleServerManager.BattleServerManager` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `Messages.BattleServerManager.BattleServerManager` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `BattleResult` | `public BattleResult BattleResult { get; }` |
| `BadgeDateEntries` | `public List<BadgeDataEntry> BadgeDateEntries { get; }` |
| `BattleGameType` | `public string BattleGameType { get; }` |
| `Region` | `public string Region { get; }` |

## Usage Example

```csharp
var example = new BattleEndedProcessResultsMessage();
```

## See Also

- [Complete Class Catalog](../catalog)