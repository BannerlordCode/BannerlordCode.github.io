<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BotData`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# BotData

**Namespace:** NetworkMessages.FromServer
**Module:** NetworkMessages.FromServer
**Type:** `public sealed class BotData : GameNetworkMessage`
**Base:** `GameNetworkMessage`
**File:** `TaleWorlds.MountAndBlade/NetworkMessages/FromServer/BotData.cs`

## Overview

`BotData` behaves like a data carrier: it packages fields so systems can exchange state in a structured form.

## Mental Model

Treat `BotData` as a Data-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Side` | `public BattleSideEnum Side { get; }` |
| `KillCount` | `public int KillCount { get; }` |
| `AssistCount` | `public int AssistCount { get; }` |
| `DeathCount` | `public int DeathCount { get; }` |
| `AliveBotCount` | `public int AliveBotCount { get; }` |

## Usage Example

```csharp
var value = new BotData();
```

## See Also

- [Complete Class Catalog](../catalog)